# Skill: Run ShopRelic Tests

Run the ShopRelic Playwright test suite against the local app.

## Steps

1. Check if ShopRelic app is running by hitting `http://localhost:3000/api/health`
2. If not running, start it: `cd /Users/jeeveshjain/Desktop/TestRelic/shoprelic-app && node server.js &`
3. Wait for health check to pass
4. Run the test suite: `cd /Users/jeeveshjain/Desktop/TestRelic/shoprelic-tests && npx playwright test --reporter=list`
5. Report results summary (passed, failed, total)

## Arguments
- If a specific test file is mentioned (e.g., "checkout"), run only that file: `npx playwright test checkout.spec.ts`
- If `--headed` is mentioned, add `--headed` flag
- If chaos flags are mentioned (BREAK_CHECKOUT, BREAK_PROFILE, FLAKY_SEARCH), restart the app with those flags before running tests

## Notes
- All tests import from `@testrelic/playwright-analytics/fixture`
- 36 total test cases across 8 spec files
- Tests run against http://localhost:3000
