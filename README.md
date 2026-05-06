# TestRelic AI — YC Demo Data Package

Demo data package for [TestRelic AI](https://testrelic.ai), the intelligence and observability stack for software testing. Contains a mock e-commerce app, Playwright test suite, and seed script to generate 15 historical test runs showcasing regression detection, flaky test identification, MTTR tracking, and AI-powered resolution workflows.

## What's Inside

| Component | Path | Description |
|-----------|------|-------------|
| ShopRelic App | `shoprelic-app/` | Express.js mock e-commerce app (9 pages, 12 products, auth, checkout) |
| Test Suite | `shoprelic-tests/` | 36 Playwright tests across 8 spec files with `@testrelic/playwright-analytics` SDK |
| Seed Script | `seed-runs.sh` | Generates 15 test runs with a regression → resolution story arc |
| Demo Prompts | `demo-prompts.md` | Curated Ask AI and MCP queries for the demo video |
| Demo Flow | `demo-flow.md` | Step-by-step 4-minute video recording script |

## Quick Start

### 1. Start the ShopRelic app

```bash
cd shoprelic-app
npm install
npm start
# App runs at http://localhost:3000
```

### 2. Run the test suite

```bash
cd shoprelic-tests
npm install
npx playwright install chromium
npx playwright test
```

### 3. Seed 15 demo runs

```bash
export TESTRELIC_API_KEY=<your-api-key>
bash seed-runs.sh
```

## Demo Story Arc

The seed script runs 15 sequential test executions with different configurations to create a realistic regression narrative:

| Runs | Configuration | Pass Rate | Story |
|------|--------------|-----------|-------|
| 1–8 | All flags OFF | ~95% | Healthy baseline |
| 9–10 | `BREAK_CHECKOUT=true` | ~70% | Checkout deploy breaks payment flow |
| 11–12 | `BREAK_CHECKOUT` + `FLAKY_SEARCH` | ~65% | Checkout still broken, flaky search emerges |
| 13–14 | `BREAK_PROFILE` + `FLAKY_SEARCH` | ~80% | Checkout fixed, profile regression introduced |
| 15 | All flags OFF | ~95% | Full recovery |

## ShopRelic App

A lightweight Express.js + EJS e-commerce app with in-memory data (no database).

**Test user:** `demo@shoprelic.com` / `password123`

**Pages:** Landing, Product Catalog, Product Detail, Cart, Login, Signup, Checkout, Order Confirmation, Profile

**Chaos flags** (set as environment variables before starting):

| Flag | Effect |
|------|--------|
| `BREAK_CHECKOUT=true` | POST /checkout returns 500 — "Payment processing failed: Gateway timeout" |
| `BREAK_PROFILE=true` | /profile renders with empty order history |
| `FLAKY_SEARCH=true` | Search endpoint has 50% chance of 6s delay (causes test timeouts) |

## Test Suite

36 Playwright tests across 8 spec files, all using `@testrelic/playwright-analytics/fixture` for navigation tracking:

| File | Tests | Coverage |
|------|-------|----------|
| `auth.spec.ts` | 5 | Login, signup, logout, error states |
| `landing.spec.ts` | 4 | Hero, featured products, navigation |
| `catalog.spec.ts` | 5 | Search, category filter, sort, product links |
| `product-detail.spec.ts` | 4 | Product info, add to cart, reviews |
| `cart.spec.ts` | 5 | Add, update, remove items, subtotal |
| `checkout.spec.ts` | 5 | Shipping, payment, order placement, error handling |
| `profile.spec.ts` | 4 | User info, order history, auth redirect |
| `e2e-flows.spec.ts` | 4 | Full purchase flow, cart persistence |

## TestRelic SDK Configuration

The test suite uses `@testrelic/playwright-analytics/reporter` as a Playwright reporter:

```ts
['@testrelic/playwright-analytics/reporter', {
  cloud: {
    apiKey: process.env.TESTRELIC_API_KEY || '',
    upload: 'both',
    uploadArtifacts: true,
  },
}]
```

All test files import from `@testrelic/playwright-analytics/fixture` for automatic navigation tracking.

Set your API key via environment variable or in `shoprelic-tests/.env`:
```bash
TESTRELIC_API_KEY=tr_live_... npx playwright test
```

## License

Private — TestRelic AI internal use.
