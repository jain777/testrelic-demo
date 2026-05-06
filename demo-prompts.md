# TestRelic YC Demo Prompts

Curated prompts for the YC S26 demo video. Use these in sequence to tell a compelling story.

---

## Ask AI Queries (Cloud Dashboard)

### Failure Analysis

1. **"What are the most common failure patterns in the last 15 runs?"**
   - Expected: Surfaces checkout payment failures (runs 9-12), flaky search timeouts (runs 11-14), and profile order history regression (runs 13-14)

2. **"Which tests broke after the checkout deploy (v1.3.0)?"**
   - Expected: Generates a regression report artifact showing `checkout.spec.ts` and `e2e-flows.spec.ts` failures starting at run 9

3. **"Show me the flaky tests and their flakiness rate over time"**
   - Expected: Identifies `catalog.spec.ts > should search for products` as flaky with ~50% pass rate during runs 11-14

4. **"What is the root cause of the checkout payment failures?"**
   - Expected: Traces to 500 error from payment endpoint, shows "Payment processing failed: Gateway timeout" error message from network logs

### Reports & Artifacts

5. **"Generate a sprint review deck with pass rate trends, top failures, and MTTR"**
   - Expected: Creates a presentation artifact with trend charts, failure breakdown, and MTTR of ~7 runs (run 9 to run 15)

6. **"Create a QA health report for the ShopRelic repository"**
   - Expected: Generates a health report artifact with overall stats, reliability metrics, and recommendations

7. **"Build a dashboard showing test health across all runs"**
   - Expected: Creates a visual dashboard artifact with pass/fail/flaky breakdown per run

8. **"Generate a test plan for improving checkout flow coverage"**
   - Expected: Creates a test plan artifact with suggested new test cases for edge cases

### Regression Analysis

9. **"Generate a regression report comparing run 8 (last green) vs run 9 (first failure)"**
   - Expected: Side-by-side comparison showing new failures, identifies v1.3.0 deploy as the trigger

10. **"What tests should we prioritize running before the next deploy?"**
    - Expected: Recommends checkout, payment, and cart tests as high-priority based on recent failure history

### Actionable Integrations

11. **"Create a Jira ticket for the checkout payment regression with full root cause context"**
    - Expected: Auto-creates Jira ticket with title, description, reproduction steps, affected tests, and deployment context

12. **"Send an email summary of this week's test results to the QA team"**
    - Expected: Generates email with trend summary, key failures, and resolution status

---

## MCP Commands (Cursor / Claude Desktop)

Use these in the IDE portion of the demo to show TestRelic's MCP integration.

### Connection & Overview
```
tr_health
```
→ Shows MCP connection is live, displays project info

```
tr_list_repos
```
→ Lists ShopRelic repository with run count and health status

### Recent Activity
```
tr_recent_runs
```
→ Shows last 15 runs with status (pass/fail), pass rate, and deploy tags

```
tr_recent_runs --status=failed
```
→ Filters to only failing runs (9-14)

### Diagnosis
```
tr_diagnose_run --run=9
```
→ Deep dive into run 9: shows all failures, error messages, affected files

```
tr_diagnose_run --run=15
```
→ Shows run 15 is fully green — resolution confirmed

### AI-Powered Analysis
```
tr_ai_rca --test="checkout.spec.ts > should place order successfully"
```
→ Root cause analysis: payment endpoint 500, gateway timeout, introduced in v1.3.0

```
tr_flaky_audit
```
→ Lists flaky tests with flakiness scores, first seen, and recommended actions

### Comparison & Coverage
```
tr_compare_runs --from=8 --to=9
```
→ Diff between last green and first red run, highlights new failures

```
tr_coverage_gaps
```
→ Identifies untested flows: guest checkout edge cases, payment retry logic, concurrent cart updates

### Integrations
```
tr_create_jira --test="checkout.spec.ts > should place order successfully" --priority=high
```
→ Creates Jira ticket with full context from test failure

```
tr_user_impact --run=9
```
→ Correlates test failure with user-facing impact (if Amplitude/Loki connected)

---

## Demo Script Cheat Sheet

| Timestamp | Action | Prompt/Command |
|-----------|--------|----------------|
| 0:00-0:30 | SDK Install | Show `npm install`, config, run tests, local report |
| 0:30-1:15 | Dashboard | Browse 15 runs, click trend line, click into run 9 |
| 1:15-1:45 | Session | Click failed checkout test, show video + errors |
| 1:45-2:45 | Ask AI #1 | "Which tests broke after the checkout deploy?" |
| 2:45-3:15 | Ask AI #2 | "Generate a sprint review deck..." |
| 3:15-3:30 | Ask AI #3 | "Create a Jira ticket for the checkout failure" |
| 3:30-4:00 | MCP | `tr_diagnose_run`, `tr_ai_rca` in Cursor |
| 4:00-4:15 | Integration | Show Jira ticket, email notification |
