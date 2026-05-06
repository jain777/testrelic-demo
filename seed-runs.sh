#!/bin/bash

# TestRelic Demo Seed Script
# Executes 15 test runs with different environment configurations
# to create a demo story arc showing regression detection and resolution.
#
# Prerequisites:
#   1. ShopRelic app dependencies installed: cd shoprelic-app && npm install
#   2. Test dependencies installed: cd shoprelic-tests && npm install && npx playwright install
#   3. TESTRELIC_API_KEY and TESTRELIC_PROJECT_ID environment variables set
#
# Usage: bash seed-runs.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_DIR="$SCRIPT_DIR/shoprelic-app"
TEST_DIR="$SCRIPT_DIR/shoprelic-tests"

# Load API key from .env if not already set
if [ -z "$TESTRELIC_API_KEY" ] && [ -f "$TEST_DIR/.env" ]; then
  export $(grep -v '^#' "$TEST_DIR/.env" | xargs)
fi

export TESTRELIC_API_KEY="${TESTRELIC_API_KEY:-tr_live_573ee14b22d6b8be0ba6749bb8591b044880aff729bc360ad4e4669dda46f3e3}"

# Mock commit SHAs for the story arc
COMMITS=(
  "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0"  # Run 1
  "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1"  # Run 2
  "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2"  # Run 3
  "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3"  # Run 4
  "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4"  # Run 5
  "f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5"  # Run 6
  "a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6"  # Run 7
  "b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7"  # Run 8
  "c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8"  # Run 9  — checkout deploy (breaks checkout)
  "d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9"  # Run 10
  "e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"  # Run 11 — flaky search starts
  "f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1"  # Run 12
  "a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"  # Run 13 — partial fix (checkout fixed, profile breaks)
  "b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3"  # Run 14
  "c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4"  # Run 15 — full fix
)

DEPLOY_TAGS=(
  "v1.0.0"    # Run 1
  "v1.0.1"    # Run 2
  "v1.0.2"    # Run 3
  "v1.1.0"    # Run 4
  "v1.1.1"    # Run 5
  "v1.1.2"    # Run 6
  "v1.2.0"    # Run 7
  "v1.2.1"    # Run 8  — last green
  "v1.3.0"    # Run 9  — checkout deploy (BREAKING)
  "v1.3.0"    # Run 10 — same deploy, re-run
  "v1.3.1"    # Run 11 — infra issues start
  "v1.3.1"    # Run 12 — same, re-run
  "v1.4.0"    # Run 13 — partial fix deploy
  "v1.4.0"    # Run 14 — re-run
  "v1.5.0"    # Run 15 — full fix deploy
)

# Start the ShopRelic app in the background
echo "========================================="
echo " TestRelic Demo Seed Script"
echo " Creating 15 test runs for YC demo"
echo "========================================="
echo ""

echo "[*] Starting ShopRelic app..."
cd "$APP_DIR"
APP_PID=""

cleanup() {
  if [ -n "$APP_PID" ]; then
    echo "[*] Stopping ShopRelic app (PID: $APP_PID)..."
    kill "$APP_PID" 2>/dev/null || true
    wait "$APP_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

run_tests() {
  local run_number=$1
  local break_checkout=${2:-false}
  local break_profile=${3:-false}
  local flaky_search=${4:-false}
  local commit=${COMMITS[$((run_number - 1))]}
  local deploy_tag=${DEPLOY_TAGS[$((run_number - 1))]}

  echo ""
  echo "-----------------------------------------"
  echo " Run $run_number / 15"
  echo " Deploy: $deploy_tag | Commit: ${commit:0:8}"
  echo " BREAK_CHECKOUT=$break_checkout BREAK_PROFILE=$break_profile FLAKY_SEARCH=$flaky_search"
  echo "-----------------------------------------"

  # Stop any running app instance
  if [ -n "$APP_PID" ]; then
    kill "$APP_PID" 2>/dev/null || true
    wait "$APP_PID" 2>/dev/null || true
    sleep 1
  fi

  # Start app with the appropriate env flags
  cd "$APP_DIR"
  BREAK_CHECKOUT=$break_checkout \
  BREAK_PROFILE=$break_profile \
  FLAKY_SEARCH=$flaky_search \
  node server.js &
  APP_PID=$!

  # Wait for app to be ready
  echo "[*] Waiting for app to start..."
  for i in {1..30}; do
    if curl -s http://localhost:3000/api/health > /dev/null 2>&1; then
      echo "[*] App is ready."
      break
    fi
    if [ $i -eq 30 ]; then
      echo "[!] App failed to start. Skipping run $run_number."
      return 1
    fi
    sleep 1
  done

  # Run the tests
  cd "$TEST_DIR"
  BRANCH="main" \
  COMMIT_SHA="$commit" \
  BUILD_NUMBER="$run_number" \
  DEPLOY_TAG="$deploy_tag" \
  npx playwright test --reporter=list 2>&1 || true

  echo "[*] Run $run_number complete."
  sleep 2
}

# =========================================
# Runs 1-8: Healthy baseline (all flags off)
# =========================================
echo ""
echo "========================================="
echo " Phase 1: Healthy Baseline (Runs 1-8)"
echo "========================================="

for i in $(seq 1 8); do
  run_tests $i "false" "false" "false"
done

# =========================================
# Runs 9-10: Checkout regression
# =========================================
echo ""
echo "========================================="
echo " Phase 2: Checkout Regression (Runs 9-10)"
echo "========================================="

for i in $(seq 9 10); do
  run_tests $i "true" "false" "false"
done

# =========================================
# Runs 11-12: Checkout broken + flaky search
# =========================================
echo ""
echo "========================================="
echo " Phase 3: Checkout + Flaky Search (Runs 11-12)"
echo "========================================="

for i in $(seq 11 12); do
  run_tests $i "true" "false" "true"
done

# =========================================
# Runs 13-14: Partial fix — checkout OK, profile breaks
# =========================================
echo ""
echo "========================================="
echo " Phase 4: Partial Fix (Runs 13-14)"
echo "========================================="

for i in $(seq 13 14); do
  run_tests $i "false" "true" "true"
done

# =========================================
# Run 15: Full fix — everything green
# =========================================
echo ""
echo "========================================="
echo " Phase 5: Full Fix (Run 15)"
echo "========================================="

run_tests 15 "false" "false" "false"

# =========================================
# Summary
# =========================================
echo ""
echo "========================================="
echo " Seed Complete!"
echo "========================================="
echo ""
echo " 15 test runs have been submitted to TestRelic."
echo " Open your TestRelic dashboard to see:"
echo "   - Pass rate trend (95% → 70% → 95%)"
echo "   - Regression detection at Run 9 (v1.3.0)"
echo "   - Flaky test detection at Runs 11-14"
echo "   - MTTR tracking from Run 9 → Run 15"
echo ""
echo " Next steps:"
echo "   1. Open TestRelic dashboard"
echo "   2. Navigate to the ShopRelic project"
echo "   3. Use Ask AI with the prompts in demo-prompts.md"
echo "   4. Connect MCP server in Cursor for IDE demo"
echo ""
