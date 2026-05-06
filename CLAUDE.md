# TestRelic AI - YC Demo Data Package

## Project Overview
TestRelic AI is building the intelligence and observability stack for software testing. This repository contains the YC S26 demo data package: a mock e-commerce app (ShopRelic), a Playwright test suite with the `@testrelic/playwright-analytics` SDK, and a seed script to generate 15 historical test runs that tell a regression-detection-to-resolution story.

## Repository Structure

```
TestRelic/
├── shoprelic-app/          # Express.js mock e-commerce app
├── shoprelic-tests/        # Playwright test suite with TestRelic SDK
├── seed-runs.sh            # Generates 15 test runs for demo arc
├── demo-prompts.md         # Curated Ask AI + MCP prompts for demo
├── demo-flow.md            # Step-by-step video recording script
└── ycapplication.md        # YC S26 application
```

## Quick Start

### Run the ShopRelic app
```bash
cd shoprelic-app && npm install && npm start
# App runs at http://localhost:3000
```

### Run the test suite
```bash
cd shoprelic-tests && npm install && npx playwright install chromium
npx playwright test
```

### Seed 15 demo runs
```bash
# Set TestRelic credentials first
export TESTRELIC_API_KEY=<your-key>
export TESTRELIC_PROJECT_ID=<your-project-id>
bash seed-runs.sh
```

## ShopRelic App

**Tech:** Express.js + EJS + in-memory data store (no database)

**Test user:** `demo@shoprelic.com` / `password123`

**Routes:** `/` (landing), `/products` (catalog), `/products/:id` (detail), `/cart`, `/login`, `/signup`, `/checkout`, `/order-confirmation/:id`, `/profile`, `/api/health`

**Chaos flags (env vars):**
- `BREAK_CHECKOUT=true` - POST /checkout returns 500 "Payment processing failed: Gateway timeout"
- `BREAK_PROFILE=true` - /profile renders with empty order history
- `FLAKY_SEARCH=true` - Search has 50% chance of 6s delay (causes timeout)

## Test Suite

**8 spec files, 36 test cases** covering auth, landing, catalog, product detail, cart, checkout, profile, and end-to-end flows.

**SDK:** All tests import from `@testrelic/playwright-analytics/fixture` for navigation tracking.

**Reporter config:** `playwright.config.ts` has `@testrelic/playwright-analytics` reporter with `outputPath`, `includeStackTrace`, `includeCodeSnippets`, `includeNetworkStats`.

## Demo Story Arc (seed-runs.sh)

| Runs  | Flags                                   | Story                          |
|-------|-----------------------------------------|--------------------------------|
| 1-8   | All OFF                                 | Healthy baseline (95%+ pass)   |
| 9-10  | BREAK_CHECKOUT=true                     | Checkout regression (~70%)     |
| 11-12 | BREAK_CHECKOUT + FLAKY_SEARCH           | Checkout + flaky search        |
| 13-14 | BREAK_PROFILE + FLAKY_SEARCH            | Partial fix, profile breaks    |
| 15    | All OFF                                 | Full recovery (95%+ pass)      |

## Conventions

- **Views:** EJS templates in `shoprelic-app/views/`, partials in `views/partials/`
- **Styles:** Single CSS file at `shoprelic-app/public/styles.css`
- **Tests:** TypeScript, import from `@testrelic/playwright-analytics/fixture`
- **Test selectors:** Use specific CSS classes (`.product-card`, `.cart-subtotal`, `.product-detail-title`) rather than generic tag selectors to avoid strict mode violations
- **No database:** All state is in-memory (resets on server restart)

## Key Commands

```bash
# Run specific test file
npx playwright test auth.spec.ts

# Run tests with broken checkout
cd shoprelic-app && BREAK_CHECKOUT=true node server.js &
cd shoprelic-tests && npx playwright test

# Run tests headed (see browser)
npx playwright test --headed

# View test traces
npx playwright show-trace test-results/<test-name>/trace.zip
```
