# Skill: Seed Demo Runs

Execute the demo seed script to generate 15 test runs on TestRelic cloud.

## Prerequisites
- `TESTRELIC_API_KEY` and `TESTRELIC_PROJECT_ID` environment variables must be set
- ShopRelic app dependencies installed (`cd shoprelic-app && npm install`)
- Test dependencies installed (`cd shoprelic-tests && npm install && npx playwright install chromium`)

## Steps

1. Verify prerequisites are met
2. Run: `bash /Users/jeeveshjain/Desktop/TestRelic/seed-runs.sh`
3. Monitor output for any failures
4. Report final summary

## What It Does
Creates 15 sequential test runs with different chaos flag combinations:
- Runs 1-8: Healthy baseline (all flags OFF)
- Runs 9-10: BREAK_CHECKOUT=true (checkout regression)
- Runs 11-12: BREAK_CHECKOUT + FLAKY_SEARCH (checkout broken + flaky search)
- Runs 13-14: BREAK_PROFILE + FLAKY_SEARCH (partial fix, profile breaks)
- Run 15: All flags OFF (full recovery)

Each run is tagged with mock branch, commit SHA, build number, and deploy tag.
