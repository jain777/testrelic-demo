# TestRelic YC Demo Flow

Step-by-step walkthrough for recording the YC S26 demo video.

**Target length:** 3-4 minutes
**Setup required:** 15 seed runs completed, TestRelic dashboard loaded, Cursor with MCP connected

---

## Pre-Recording Checklist

- [ ] ShopRelic app running locally (`cd shoprelic-app && npm start`)
- [ ] All 15 seed runs visible in TestRelic dashboard
- [ ] Cursor open with TestRelic MCP server connected
- [ ] Jira integration configured
- [ ] Browser tabs pre-loaded: TestRelic dashboard, ShopRelic app
- [ ] Screen recording software ready (1920x1080, clean desktop)

---

## Scene 1: SDK Install & Local Report (0:00 - 0:30)

**Narrative:** "TestRelic gives engineering teams instant visibility into their test suite health — starting with a one-line SDK install."

### Actions:
1. Show terminal with ShopRelic test project open
2. Run: `npm install @testrelic/playwright-analytics`
3. Show `playwright.config.ts` — highlight the reporter config (3 lines added)
4. Run: `npx playwright test`
5. Tests execute — show green results
6. Open the local HTML report that TestRelic generates
7. Quick scroll through: test timeline, pass/fail breakdown, performance metrics

**Key message:** "Zero config. One package. Instant local reports with every test run."

---

## Scene 2: Cloud Dashboard (0:30 - 1:15)

**Narrative:** "But the real power is in the cloud. Every run syncs automatically — giving you historical trends, regression detection, and team-wide visibility."

### Actions:
1. Switch to TestRelic cloud dashboard
2. Show the repository overview: ShopRelic with 15 runs
3. **Trend line view:** Point out the pass rate graph
   - Runs 1-8: Stable at 95%+
   - Run 9: Sharp drop to ~70% — "This is where a checkout deploy broke things"
   - Runs 11-12: Additional flaky tests appearing
   - Run 15: Recovery back to 95%
4. Click into **Run 9** (first failing run)
5. Show the run summary: X passed, Y failed, failure breakdown by file
6. Point out: "TestRelic automatically detected this as a regression — these tests were passing before"

**Key message:** "You can see exactly when things broke, which deploy caused it, and track time to resolution."

---

## Scene 3: Session Workspace (1:15 - 1:45)

**Narrative:** "Let's dig into a specific failure. TestRelic captures everything you need to debug — without reproducing locally."

### Actions:
1. From Run 9, click on failed test: `checkout.spec.ts > should place order successfully`
2. Show the **Session Workspace:**
   - **Video replay:** Watch the test execute, see the checkout form fill, click "Place Order", see the error
   - **Steps timeline:** Each Playwright action with timestamps
   - **Console errors:** Show the 500 error logged
   - **Network tab:** Show the POST /checkout returning 500 with "Payment processing failed: Gateway timeout"
3. Pause on the error: "Right here — the payment endpoint is returning a 500. Gateway timeout."

**Key message:** "Video replay, console logs, network traces — everything in one place. No more 'works on my machine.'"

---

## Scene 4: Ask AI (1:45 - 3:15)

**Narrative:** "Now here's where it gets powerful. TestRelic has an AI assistant that can analyze your test data and generate actionable artifacts."

### Query 1: Regression Analysis (1:45 - 2:15)
1. Open Ask AI panel
2. Type: **"Which tests broke after the checkout deploy (v1.3.0)?"**
3. Show the AI response:
   - Lists the specific tests that started failing
   - Identifies the deploy tag and commit
   - Generates a **regression report artifact** — click to open
4. Show the regression report: before/after comparison, affected test files, timeline

### Query 2: Sprint Review (2:15 - 2:45)
1. Type: **"Generate a sprint review deck with pass rate trends, top failures, and MTTR"**
2. Show the AI generating a **presentation artifact**
3. Click through slides:
   - Pass rate trend chart
   - Top 5 failures with frequency
   - MTTR: 7 runs from regression to resolution
   - Recommendations

### Query 3: Jira Integration (2:45 - 3:15)
1. Type: **"Create a Jira ticket for the checkout payment regression with full root cause context"**
2. Show the AI creating the ticket:
   - Title: "Checkout payment regression — 500 from payment gateway"
   - Description with root cause, affected tests, reproduction steps
   - Priority, labels, affected version auto-filled
3. Show the Jira ticket link — click to open in Jira

**Key message:** "Ask AI turns test data into action — regression reports, sprint decks, and Jira tickets with full context, generated in seconds."

---

## Scene 5: MCP Integration (3:15 - 3:45)

**Narrative:** "TestRelic also works right in your IDE through MCP — so you never have to leave your editor."

### Actions:
1. Switch to Cursor
2. Open the AI chat panel
3. Run: **`tr_diagnose_run --run=9`**
   - Show the failure summary directly in the IDE
   - "5 tests failed, all related to checkout flow, deploy v1.3.0"
4. Run: **`tr_ai_rca --test="checkout.spec.ts > should place order successfully"`**
   - Show root cause analysis in the IDE
   - "Payment endpoint returning 500 — gateway timeout introduced in commit c9d0e1f2"
5. Run: **`tr_flaky_audit`**
   - Show flaky test list with scores

**Key message:** "Your test intelligence lives where you code. Diagnose failures, get root cause analysis, and audit flaky tests — all from Cursor."

---

## Scene 6: Integration & Wrap-up (3:45 - 4:00)

**Narrative:** "TestRelic connects your test data to the tools your team already uses."

### Actions:
1. Show the Jira ticket created by Ask AI — full context, linked to the test run
2. Show email notification (if configured) — failure alert sent to the team
3. Quick dashboard shot showing Run 15: "And once the fix shipped — TestRelic confirmed the suite was green again."

### Closing:
"TestRelic is the testing intelligence platform — from local reports to cloud analytics to AI-powered insights. We help teams catch regressions faster, understand failures deeper, and ship with confidence."

---

## Backup Prompts

If the primary prompts don't produce the desired output, use these alternatives:

- "Show me all test failures from the last week" (simpler failure query)
- "What changed between run 8 and run 9?" (regression comparison)
- "Create a summary of our flaky tests" (flaky audit)
- "What's our overall test health score?" (health overview)

## Technical Notes

- If the dashboard is slow to load, have it pre-loaded in a browser tab
- For the MCP demo, ensure Cursor is connected before recording
- The seed script creates runs with realistic timestamps — runs appear chronologically
- If Ask AI artifacts take time to generate, consider editing the video to cut wait times
