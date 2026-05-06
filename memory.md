# TestRelic AI - Project Memory

## Company
- **Name:** TestRelic AI
- **Tagline:** Brain for quality assurance
- **URL:** https://testrelic.ai
- **Platform:** https://platform.testrelic.ai
- **Founders:** Srivishnu (CTO, full-stack + SDK) and Jeevesh (AI/agent architecture + product)
- **Stage:** Pre-seed, applying to YC S26
- **Location:** Bengaluru, India (post-YC: San Francisco)

## Product Layers
1. **SDK + Unified Test Analytics** - `@testrelic/playwright-analytics` npm reporter. Local HTML reports, session replay, debug panels. Data flows to OpenObserve for historical analysis, flaky detection, MTTR tracking.
2. **User Impact Correlation** - Integrates Amplitude + Grafana Loki to show production signals alongside test failures (real user impact, session replays, error rates).
3. **Ask AI** - Claude Sonnet 4 powered. Natural language queries over test data. Returns rendered artifacts (regression reports, sprint decks, Jira tickets).

## Tech Stack
- **SDK:** TypeScript/JavaScript npm package (`@testrelic/playwright-analytics`)
- **Pipeline:** OpenObserve for observability
- **AI:** Claude Sonnet 4 for root cause analysis and artifact generation
- **Roadmap:** Error Oracle SLM (Phi-3 Mini 3.8B), MCP server, auto-remediation PRs

## Key Integrations
- Playwright, Selenium, Cypress, Appium (test frameworks)
- Amplitude (user analytics correlation)
- Grafana Loki (production logs correlation)
- Jira (ticket creation from failures)
- MCP server (IDE integration for Cursor/Claude Desktop)

## Demo Data Package (This Repo)
- **ShopRelic:** Mock e-commerce Express.js app with 9 pages and chaos flags
- **Test Suite:** 8 spec files, 36 Playwright test cases
- **Seed Script:** 15 sequential runs creating regression → resolution story arc
- **Demo Video Script:** 4-minute walkthrough covering SDK, dashboard, Ask AI, MCP

## Important Context
- The `@testrelic/playwright-analytics` package is at version 2.7.0 on npm
- Demo login: `demo@shoprelic.com` / `password123`
- The demo story shows MTTR of ~7 runs (run 9 regression → run 15 resolution)
- Checkout regression is the primary failure for the demo narrative
- Flaky search tests demonstrate intermittent failure detection
- All 36 tests pass when chaos flags are OFF (baseline runs)

## Competitors / Positioning
- Replaces the 6-9 tool workflow: Allure (reports), BrowserStack (cross-browser), Grafana (logs), Amplitude (user data), Jira (tickets), Figma (designs)
- Long-term vision: "Datadog of QA" - AI-native observability for testing
- Key differentiator: User impact correlation (no other QA platform does this)
