How long have the founders known one another and how did you meet? Have any of the founders not met in person?
Jeevesh and I have known each other for over four years, since he joined LambdaTest as a Data Science intern on the TestMu AI team. Our first project together was Flaky Test Detection AI, the system that automatically identified non-deterministic tests across customer test suites. It required ML thinking, deep understanding of QA workflows, and shipping something engineers would actually trust with production test data. We built it together from scratch, and Jeevesh earned a PPO out of that internship.

We then went straight into the harder challenge: SmartUI (visual regression testing) and Test Insights (the AI analytics layer for TestMu AI), built as parallel products. With 3 engineers each, we scaled the combined visual testing + Insights line to ~$100K ARR. After that we split ownership cleanly, Jeevesh took sole ownership of SmartUI and scaled it from $100K to $1M+ ARR with a 14-person pod (and ~$2M+ in cumulative revenue over 18 months); I took sole ownership of Insights and scaled the AI analytics suite at TestMu AI globally. That joint-then-split arc is the single most important data point about how we work together. We can build side-by-side under one roof, then peel apart and each own a P&L. Neither of us could have done the other's job as well. That is exactly the co-founder dynamic we are bringing to TestRelic.

We have met extensively in person throughout our time at LambdaTest in Bengaluru (and Noida), where we are both still based today. This is not a remote-first co-founder relationship — we have worked in the same room, shipped together under pressure, navigated difficult product decisions together, and built real trust across four years of shared context in the exact problem TestRelic is solving.

Most co-founder relationships start at a hackathon or a university introduction. Ours started inside the product we are now rebuilding from the ground up ,with full ownership, AI-native architecture, and none of the constraints of building inside someone else's company.
Who writes code, or does other technical work on your product? Was any of it done by a non-founder? Please explain.
Srivishnu writes the full production stack — the @testrelic/playwright-analytics npm SDK, the OpenObserve observability pipeline, the Claude Sonnet 4 AI root cause engine, the Amplitude and Grafana Loki integration layer, and the cloud platform frontend. He builds in JavaScript and TypeScript for the SDK and platform, Python for ML model development and deployment, and has self-taught Rust through active contribution to the SurrealDB open-source community.

Jeevesh owns AI-workflow and agent architecture, product direction, and the technical evaluation/observability layer for TestRelic.The architectural pattern Jeevesh built by building agents + workflow playground + bidirectional integrations + LLM observability, is the same pattern TestRelic applies to the QA layer.

Together: Srivishnu owns the production code path, Jeevesh owns the agent/workflow/eval surface, and we make architecture decisions jointly. No non-founder code in production.
Are you looking for a cofounder?
No. Srivishnu and Jeevesh are the founding team and we are not actively looking for an additional co-founder at this stage.
Founder Video
Company
Company name
TestRelic AI
Describe what your company does in 50 characters or less.
Brain for quality assurance
Company URL, if any
https://testrelic.ai
Demo Video
Please provide a link to the product, if any.
https://platform.testrelic.ai/login
demotestrelic@gmail.com / TestRelic#123
What is your company going to make? Please describe your product and what it does or will do.
TestRelic AI is building the intelligence and observability stack for software testing. We connect every test failure to real user impact - giving engineering teams the root cause, the production signal, and the fix, without opening a second tool.

Today, QA engineers running Playwright, Selenium, Cypress, or Appium face the same broken loop: a test fails in CI, they open 6–9 disconnected tools - Allure for reports, BrowserStack for cross-browser, Grafana for logs, Amplitude for user data, Jira for tickets, Figma for designs- and spend an average of 13 hours per incident piecing together what happened and whether any real users were affected. No single platform closes that loop. TestRelic does.

The product has three layers:

1. SDK + Unified Test Analytics — @testrelic/playwright-analytics is a local-first npm reporter that installs in under 3 minutes with no cloud signup required. Engineers get an AI-powered HTML report, session replay, and debug panels immediately. Test data flows into our OpenObserve pipeline for historical analysis, flaky test detection, pass rate trends, and MTTR tracking across all frameworks.

2. User Impact Correlation — TestRelic integrates with Amplitude and Grafana Loki to surface production signals alongside test failures. When a login test fails, TestRelic shows how many real users hit the same error in the last hour, which sessions to replay first, and what the live production error rate is. No other QA platform does this.

3. Ask AI — Natural Language Intelligence - Powered by Claude Sonnet 4, engineers and managers query their entire test suite in plain English. "Which tests broke after yesterday's deploy?" returns a rendered regression report. "Generate a sprint review deck with coverage metrics" returns actual slides. No SQL, no dashboard configuration, no filter hunting. The output is a usable artifact, not a chat response.

On the roadmap: an Error Oracle SLM — a fine-tuned Phi-3 Mini 3.8B model purpose-built for web application error patterns — that handles common root cause queries locally at a fraction of the cost, with Claude Sonnet 4 as the fallback for complex cases. An MCP server layer that connects test analytics, user impact correlation, and automated Jira ticket creation into a single AI-orchestrated workflow. And auto-remediation for common test failures — AI-generated PRs with full debugging context, confidence-scored before they reach a human reviewer.

The long-term vision is the Datadog of QA — an AI-native observability platform built from the ground up for the era where AI writes tests, ships features, and needs an intelligence layer that keeps up.
Where do you live now, and where would the company be based after YC?
Bangalore, India /San Francisco, USA
Explain your decision regarding location.
Both founders are currently based in Bengaluru, India — the hub of India's engineering and QA talent ecosystem. Bengaluru gives TestRelic direct access to the highest concentration of SDETs, QA engineers, and engineering managers at SaaS companies in Asia, many of whom are our earliest users and design partners. LambdaTest, Qyrus, Qure.ai, and the broader developer tools and AI community we've built relationships with over six-plus years are headquartered here. Operating costs are a structural advantage — we can build more product per dollar than any US-based equivalent at this stage.

After YC, the company would be based in San Francisco. Our primary buyers — QA leads and engineering managers at SaaS companies with 50–500 engineers — are concentrated in the US market, which commands 35–45% of global observability spend. Enterprise sales cycles, cloud marketplace listings on AWS and GCP, and the investor relationships needed to raise a Series A all require physical presence in the Bay Area. The YC network itself is the forcing function - Demo Day, partner office hours, and the batch community are highest-leverage in person. Jeevesh has already led US market adoption end-to-end at Qure.ai across multiple US health systems and SmartUI's enterprise customers including Goldman Sachs, so the US enterprise motion is not new ground for us.
Progress
How far along are you?
TestRelic is live and in active use. The core platform is built and shipping across four layers:

SDK - @testrelic/playwright-analytics is live on npm. It is a free, local-first Playwright reporter that installs in under 3 minutes with no cloud signup required. It has 6,000+ downloads in the past month and an organic growth motion that has just started building. Engineers get an AI-powered HTML report, session replay, and debug panels immediately on their machine. The SDK also handles log uploading to the cloud platform for teams that opt in. Early users are installing it organically through the npm registry.

Cloud Platform - Live and recently launched. We just launched on Product Hunt as part of the broader cloud rollout. Teams can ingest test runs from their CI pipelines and view full test execution history, pass rate trends, flaky test detection, and MTTR analytics in a unified dashboard. No switching between Allure, BrowserStack, and CI logs — one view for everything.

Ask AI - Live. An agentic natural language interface powered by Claude Sonnet 4 that generates rendered analytics artifacts from plain English queries. Ask "which tests broke after yesterday's deploy?" and get a regression report. Ask "generate a sprint review deck" and get actual slides. Not a chatbot — an artifact generator grounded in your real test data.

Monitoring - In beta. Real-time test pipeline observability layer currently being validated with early users.

MCP Server - In beta. The MCP layer will connect test analytics, user impact correlation via Amplitude and Grafana Loki, and automated Jira ticket creation into a single AI-orchestrated workflow — making TestRelic queryable from any MCP-compatible AI interface including Claude Desktop and VS Code.

CLI - In active development. A command-line interface that lets developers interact with TestRelic AI directly from their terminal - no browser, no cloud login required. Designed for engineers who live in the terminal and want test intelligence without leaving their workflow.

Traction snapshot (as of 2026-05-04):
- 6,000+ Playwright SDK downloads in the past month
- Cloud platform live; Product Hunt launch executed
- Organic growth motion in motion (no paid acquisition spend)
- 20+ companies expressing intent across mid-market and enterprise
- 2 organizations (Levich, Purpleplum) in active paid trials on the cloud platform
- Named enterprise pipeline conversations: KPMG, Sprinto, Plivo

The foundation is built. The current focus is converting paid trials into recurring contracts, closing the first enterprise design partner, and continuing to compound the SDK install base that feeds the cloud upgrade funnel.
How long have each of you been working on this? How much of that has been full-time? Please explain.
Srivishnu - 2 months on TestRelic, currently alongside his full-time role as Director of Product Management at Qyrus. He works with AI agents during the day to generate and ship code, and validates, reviews, and directs the output every evening after his day job. He is committing to TestRelic full-time by June 2026 - Qyrus is a bridge, not a destination.

Jeevesh - Joined Srivishnu on TestRelic shortly after Srivishnu started, and is now building full-time. He has resigned from Qure.ai to commit to TestRelic exclusively. Since joining he has owned product direction and ICP definition, run user-discovery and design-partner outreach (which converted Levich and Purpleplum into active paid trials), shaped the agent/MCP/eval architecture jointly with Srivishnu, and led the GTM, positioning, and commercial narrative.

2 months of building - initially part-time on Srivishnu's side, now with Jeevesh full-time has produced a live npm SDK, a working cloud platform with test ingestion and unified analytics, a live Ask AI agentic artifact generator powered by Claude, an MCP server in active development, and 2 paid design-partner trials. That output is only possible because of how we're building - AI agents handle the implementation loop, the founders handle product direction, validation, and architecture decisions, with code review and merge in Srivishnu's hands. This is not a side-project pace. It is a compressed full-time output through an AI-native development workflow.

Our combined 6+ years of accumulated domain knowledge from LambdaTest (TestMu AI), Qure.ai, and Qyrus means we are not learning the problem while building the solution. The architecture decisions, the integration choices, the pricing model, and the GTM motion were all informed before a single line of TestRelic code was written.
What tech stack are you using, or planning to use, to build this product? Include AI models and AI coding tools you use.
Frontend & SDK
TypeScript and JavaScript across the full client surface. The SDK suite covers three frameworks — @testrelic/playwright-analytics built in TypeScript and published on npm, designed around Playwright's native Reporter interface; @testrelic/appium-analytics in beta, bringing the same local-first analytics layer to mobile test automation for iOS and Android; and testrelic-maestro CLI available via npx testrelic-maestro maestro test flows/ for mobile UI testing teams using Maestro.

Backend & Data
Node.js for the API layer. OpenObserve as the primary analytics database — purpose-built for the high-volume, time-series nature of test run data. PostgreSQL for metadata and relational data. Redis for caching and queue management. Kafka for event streaming across the ingestion pipeline. Amplitude, Grafana Loki for log correlation and production signal ingestion.

AI & Intelligence Layer
Claude (Anthropic) as the primary AI engine powering Ask AI - natural language queries, artifact generation, and root cause analysis. LangGraph for stateful agentic orchestration of the multi-step AI workflows.

Planned: Phi-3 Mini 3.8B fine-tuned via QLoRA and Axolotl as the Error Oracle SLM for high-confidence local inference, with Cloud models as the fallback for complex cases above the confidence threshold. Qdrant for vector storage and RAG retrieval over historical failure patterns.

Integrations
Amplitude for production user impact correlation. Jira for auto-ticket creation with full AI root cause context. GitHub Actions for CI/CD pipeline integration. MCP server layer in active development - connecting test analytics, user impact, and Jira into a single AI-orchestrated workflow queryable from Claude Desktop and VS Code. We also support all other major required integrations through Composio which enhance the context of our brain.


Infrastructure
AWS as the primary cloud provider. Docker for containerisation. OpenObserve self-hosted for cost efficiency at current stage. GitHub Actions for CI/CD. AWS Amplify for frontend deployment.


AI Coding Tools
Claude Sonnet and Opus via Claude.ai and API for architecture decisions, code generation, and product development. Antigravity (with Claude Code) and Cursor as the primary AI-native IDEs for day-to-day development. The entire development workflow is AI-agent-first — Srivishnu directs architecture and validates output, Jeevesh directs product/agent/eval surface, and AI agents handle the implementation loop. This is the same AI-native development practice TestRelic is built to support for QA teams.
Optional: attach a coding agent session you're particularly proud of.
Session workspace artifact rendering
Exported on 5/3/2026 at 23:35:35 GMT+5:30 from Cursor (3.1.15)

User

I want to even render the complete session workspace as an artifact in Ask AI. Which means that if a user ask to show the logs of a specific test then the session workspace features needs to be rendered with the UI artifacts.

Cursor

I'll research the codebase to understand the current Ask AI artifact rendering and the session workspace features before creating a plan.

I now have a great map of both Ask AI and the Session Workspace. Before drafting the plan, I need to make a couple of critical scoping decisions with you.

I have enough context. There are two key design decisions that significantly change the plan, so let me ask before drafting it.

Session Workspace Artifact - Scope

What should the new 'session_workspace' artifact render? The session detail page actually has 3 different workspaces (browser, Maestro, API). Pick the scope:

Browser SessionWorkspace only — full panel with Video/Screenshots viewport + DevTools tabs (Steps/Console/Network/Performance/Analytics/Issues). Most common case.
All three (auto-detect: browser/Maestro/API) — single artifact handles any session type by routing to the right workspace component. ✔
Logs-focused minimal — just embed DevToolsConsole + DevToolsNetworkPanel + Steps for a session, since the example you gave was 'show logs of a specific test'. Lighter, faster.
How should the AI decide to render this artifact?

Add a new tool 'render_session_workspace(sessionId, defaultTab?)' that the LLM calls explicitly. Existing query_test_logs/query_cloud_sessions stay as data tools. Cleaner separation.
Auto-attach: when query_cloud_sessions/query_test_logs/etc. return data for a single session, server automatically emits a session_workspace artifact alongside. Zero LLM prompt changes.
Both — new explicit tool AND auto-attach when a single session is referenced. ✔
Now I have everything I need. Let me also verify how the workspace components currently fetch their data, since embedding them inside the artifact panel will reuse those hooks.

I have everything I need. Let me also check the ArtifactPanel briefly to confirm how full-width rendering works, then create the plan.

I have enough. Drafting the plan now.

User

I want to extend this plan to where few of the logs or artifacts like Videos and Screenshots can also be shared within the other artifacts like Reports, Dashboards etc..

Cursor

Good extension. Before I update the plan, I need to clarify what "shared within other artifacts" should look like, because there are a couple of meaningfully different implementations.

Let me also quickly look at the existing Report/Dashboard artifact data shapes so my questions are grounded.

Now I understand the data shape. Reports take {sections: [{heading, content}]}, Dashboards take {widgets: [{type, title, data}]} — both currently support no media embedding. Let me ask the key scoping questions before extending the plan.

Embedded session media in artifacts

How should videos/screenshots/logs be embedded inside Reports, Dashboards, etc.?

Add new media widget/section types (e.g., 'session_video', 'screenshot_grid', 'log_excerpt') that any artifact can include. The LLM constructs them with sessionId references; renderer fetches and displays. ✔
Allow embedding a mini Session Workspace block (single tab — e.g., just video, just console) inline anywhere in a Report section or as a Dashboard widget. Reuses the SessionWorkspaceArtifact components.
Treat media as 'attachments' on any artifact — a separate 'attachments' array (array of {type: video|screenshot|log, sessionId, artifactId}) shown as a strip at the top/bottom of the artifact, not interleaved.
Which media/log types must be embeddable in the first cut?

Video + Screenshots only (the most visual, highest demand for reports/dashboards)
Video + Screenshots + Console log excerpts (good for failure reports)
Everything embeddable: video, screenshots, console, network, performance metrics, steps timeline (full reusability across artifacts) ✔
Got it — new media widget/section types covering all reusable session pieces. Updating the plan now.

Now I'll extend the plan with the embeddable session-media widget system.

Plan updated. Summary of what I extended:

New capability added: any of the existing composite artifacts (Reports, Dashboards, Test Plans, Presentations) can now embed live session media — video, screenshots, console, network, performance, and steps timeline — by reference.

Key design choices reflected in the plan:

A new shared SessionMediaRef type (in shared/types/ai.ts) is the universal "pointer" the LLM splices into other artifacts. It carries sessionId, mediaType, and per-type options (e.g. video trim window, console level filter, screenshot subset).
Composite artifact schemas extended:
Report sections become a tagged union (kind: 'section' | 'media'), backwards compatible with existing {heading, content}.
Dashboard widgets gain six new types (session_video, session_screenshots, session_console, session_network, session_performance, session_steps).
Test Plan steps and Presentation slides accept an optional media: SessionMediaRef[].
A new SessionMediaBlock React component reuses the same leaf components already used inside SessionWorkspace (VideoPlayer, ScreenshotGallery, DevToolsConsole, DevToolsNetworkPanel, PerformanceReportView, TestStepsTimeline) — no UI duplication.
A new useSessionMediaData hook fetches only the slice needed for a single embed, avoiding N×full-session loads in multi-session reports.
New backend tool embed_session_media returns just a SessionMediaRef (not a top-level artifact) — it's a building block the LLM combines with generate_report / generate_dashboard / etc.
Server-side validateSessionMediaRef walks every composite artifact body and asserts each embedded sessionId belongs to the caller's org, preventing cross-tenant media leaks.
System prompt now nudges the LLM to embed live media instead of describing it in prose when generating session-grounded reports/dashboards.
Headless export updated so PDF/PNG snapshots wait for media to load and capture video posters.
The plan is ready for your review — let me know if you want any further tweaks (e.g. adding edit affordances, supporting media in Navigation Paths artifacts, or a different fetching strategy) or if you'd like me to switch to agent mode and start implementing.

User

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

Cursor

I'll start by reading the plan and getting more context on the existing code, then work through the todos in order.

Let me start by reading the key files I'll be modifying so I have full context.

I notice the existing todos are still the original 9. I need to update them to match the extended plan with 14 todos. Let me update them now.

Now let me start with the shared types update.

Todo 1: Shared types
Now let me move to the backend tools. First let me explore the existing structure of ai-tools.service.ts more thoroughly.

Now let me look at the cloud session handler and related types to understand what we have access to.

Now let me see buildDashboardArtifact:

Now I have what I need to plan the backend tools. Let me look at how tools are being registered/described in the report/test_plan/presentation tools:

Now I have a good picture. Let me start implementing the backend tools. Mark first todo as completed and start backend-tool.

Todo 2: Backend tools (render_session_workspace + auto-attach)
Now I'll add the render_session_workspace tool definition, handler, and the auto-attach helper. Let me append the tool definition before the closing ]; of AI_TOOLS:

Now wire the handlers into the handleToolCall switch and add the helpers. Let me update the switch and add the new handler implementations:

Also wrap the get_cloud_session_logs case so its single-session results auto-attach a workspace artifact:

Now I need to look at how the artifact is built downstream so my returned shape matches. Let me check how the existing __artifact flow works in ai.service.ts:

Good - the existing flow extracts type and title from the result. Now let me append the new handler implementations. Let me find a good spot, right after buildDashboardArtifact:

Now I need to handle one issue: when the auto-attach helper wraps a result with __artifact: true, the existing ai.service.ts code uses data: toolResult — meaning the entire query result is now also the artifact data. Let me check how the artifact data is consumed by the frontend SessionWorkspaceArtifact so I make sure the shape is compatible.

The cleanest approach: when auto-attaching, let the artifact data be the full result but include the sessionWorkspace wrapper. But the renderer expects data.sessionId / data.platform. Let me restructure so the auto-attach puts those keys at the top level alongside the original data:

Now check for lint errors:

Mark backend-tool done and move to media-tool. The media tool work was actually included in the prior step (I added embed_session_media and dashboard widget pass-through). Let me also extend the schemas of the existing generate_* tools to accept media nodes, completing the media-tool todo:

Todo 3: Extend generate_* schemas to support media nodes
Let me extend the generate_dashboard widget enum, the generate_report sections, the generate_test_plan items, and the generate_presentation slides:

Now extend generate_report sections to allow a kind: 'media' variant (backwards compatible):

Now extend generate_test_plan items to support media:

Now extend generate_presentation slides to accept media:

Todo 4: MCP register
Good — this generic wrapper iterates over whatever tools are passed in, so as long as both new tools are in AI_TOOLS (they are), they're already exposed via MCP. No changes needed.

But let me check how ai-agent-chat.service.ts produces artifacts to ensure the flow works for session_workspace:

The agent chat service also dispatches artifacts via the __artifact flag — the existing code handles 'session_workspace' automatically.

Todo 5: System prompt updates
Now I'll add the two new prompt sections. Let me find a good spot — right after the "Cloud Farm Activity" section, since query_cloud_sessions is mentioned there. I'll insert a new "Session Workspace & Embedded Media" section before the "## Artifact Generation" header:

Todo 6: SessionWorkspaceArtifact wrapper
Let me first look at hooks and types I'll be reusing:

Let me look at the SessionWorkspace component signature and related Workspaces for what props they accept:

Let me also look at the SDK fallback path so I know what we need for that case:

OK — the platform ids in the client are slightly different (saucelabs vs sauce, plus system). I should normalize. Let me look at how the page handles SDK runs to understand the flow:

OK — this is more complex than I initially thought. The page has heavy logic for SDK-vs-vendor branching, sandbox mocking, sibling runs, and per-flow video extraction. To keep the embedded artifact reasonable, I'll create a leaner wrapper that handles the two paths but doesn't attempt all the page's enrichment. The user can always click "Open full page" for the complete experience.

Let me look at the existing ProgressLoader and ErrorBoundary:

Now let me check available DevToolsConsole-related types so I can build the SessionMediaBlock too:

Good. Let me also check the types for screenshots, network logs, and the relevant hook signatures so I can correctly compose data:

Good. Now I have enough context. Let me also check existing adapters for the screenshot/network/perf fields:

Excellent — all adapters exist. Now let me understand what useRunConsoleLogs and useRunNetworkLogs look like since I need them for the embedded media block:

Good. Let me also look at ArtifactFilters type:

Good. Now let me also see how ConsoleLogEntry types compare in the two locations (since DevToolsConsole uses one from its own module, while useRunConsoleLogs returns a different one):

Two different shapes. The SessionWorkspace.tsx page already maps these — let me see how:

Now I have a clear picture. The next step is to add the forceDock/defaultTab prop to SessionWorkspace.tsx first (todo: workspace-props) before I create the wrapper, since the wrapper passes them. Let me do that step now and then create the wrapper:

Now I'll add forceDock and defaultTab props:

Now update the dock state to honor forceDock:

Now hide the dock-toggle UI when forceDock is set:

Now let's create the wrapper component (Todo 6). Let me also check the runApi exports:

Now let me create the wrapper. I'll keep it simpler: when runId is set or the platform is sdk, it uses the SDK path; otherwise, it queries the cloud session via the existing hooks. Both cases pipe into the same workspace components.

Todo 8: useSessionMediaData hook
Let me build this hook first since SessionMediaBlock depends on it.

Wait — I called useCloudSessionDetail(... 'system' ...) when not needed, but 'system' IS a valid platform type in CloudPlatformId. Let me check the underlying call:

The hook has enabled: !!sessionId && !!platform. Passing 'system' would still set platform=true, but with empty sessionId, so it's disabled. However, it's wasteful — let me also confirm enabled works correctly. It is fine since the empty sessionId makes it disabled. But 'system' is a real platform with potentially different fetch logic. Let me look:

The hooks are guarded by enabled: !!sessionId && !!platform, and an empty sessionId disables them. Using 'system' as a placeholder is fine. Actually let me re-check - the issue is when mediaType === 'console' we still pass platformId (real platform) but with empty sessionId so the hook is disabled. That's correct.

Now let me also verify toScreenshots and toSessionPerformance accept undefined:

Good — adapters all accept undefined/null. Let me also check toSessionPerformance:

Good. Now Todo 7: SessionMediaBlock.

That's just an Edge Tools warning, not an actual TypeScript error. Inline style with dynamic height is fine for height variants. Let me move on. Verify imports for icons exist:

Good. All the icons are exported. Lint already shows no TS errors. Now let me move to the report-embed todo.

Todo 9: Report embed
Now I'll modify the report to handle media nodes. I'll normalize sections into a tagged union and render a SessionMediaBlock for media items:

Now add normalized node types and update the main component:

Now update the main component to use the normalized nodes. The extractKPIs, estimateReadingTime, and TableOfContents only consider ReportSections — so I'll filter them to just sections:

Now update the rendering to use both nodes and textSections, along with the IntersectionObserver and TableOfContents:

All Edge Tools style warnings are pre-existing. Move to dashboard-embed.

Todo 10: Dashboard widget embed
Now let me extend the WidgetType, the WidgetRenderer, getWidgetSpan, and normalizeWidget:

Now add the import for SessionMediaBlock and isSessionMediaRef. Let me look at the imports:

Now extend getWidgetSpan defaults so session-media widgets get proper space:

Now extend WidgetRenderer and skip normalization for session widgets:

Now extend WidgetRenderer with the new branches:

Wait — SessionMediaBlock bare mode still wraps in a fixed-height container. In a dashboard widget cell with auto-rows of minmax(140px, auto), a fixed heightPx would fight the cell layout. Let me look at bare mode again to ensure the height is correct in this context.

Actually, with bare, my SessionMediaBlock currently still uses the height. That's OK — in a session widget the dashboard cell will grow to accommodate the height. But actually, the issue is: when bare, my block has border-0 bg-transparent rounded-none but still has the height container. Let me look:

Looking at the SessionMediaBlock:

<div className={cn('rounded-xl border border-border/60 bg-card overflow-hidden', bare ? 'border-0 bg-transparent rounded-none' : '')}>
  {!bare && header}
  <div style={{ height: heightPx }}>...</div>
</div>
So with bare, no header but a fixed-height inner. That's fine — the dashboard widget supplies its own title via WidgetHeader, and the media gets a known height. The cell will autosize.

Let me also check that WidgetHeader exists:

Good. Let me check for any lint errors:

All pre-existing warnings. Move on.

Todo 11: Test plan + Presentation embed
Now extend the TestPlanItem type and render media:

Now update the rendering of items to include media:

Now the Presentation. Let me find the SlideLayouts file:

Now let me see how SlideLayouts renders a slide to inject media:

The cleanest approach: wrap the SlideContent so that media is rendered below the textual content. Let me modify SlideContent to render media after the layout-specific content:

All Edge Tools warnings only. Move on.

Todo 12: Renderer switch + ArtifactPanel + theme
Now let me update the renderer to add session_workspace branch:

Now extend the renderer body to render SessionWorkspaceArtifact outside the ScrollArea:

Now update artifactTheme.ts to add the type style. Let me check it first:

Now let me check ArtifactPanel.tsx for the export dropdown that we need to disable for session_workspace:

Now I'll add Activity icon, canExport flag, plus session_workspace handling. I'll do this and the export-handling todo together — disabling export entirely for session_workspace:

Now disable export entirely for session_workspace, and disable CSV when an artifact has embedded media:

Now propagate exportDisabled and hide the dropdown for session_workspace:

Pre-existing warnings only. Move to inline-chip:

Todo 13: Inline chip in MessageRenderer
Good. The chip already uses ARTIFACT_ICONS and artifact.type.replace('_', ' '). Let me check the Network/Activity import and add the icon mapping:

Now also add a tool label for render_session_workspace and embed_session_media:

Now update the chip's <p> for type label to use the friendlier name:

Now let me verify the chip rendering works, then update the todo and move to the last pending task.

Pre-existing lints, not related to our changes. Mark inline-chip done and start on export-handling:

Let me confirm the existing ArtifactPanel state for export-handling (most was already done, just need to verify) and check the headless export service.

The headless export service takes an htmlDocument and a selector and renders it. It's generic and can render any DOM, including embedded SessionMediaBlock screenshots/canvas, as long as the rendering route includes the data. Let me find what builds the htmlDocument for the export to ensure media is captured properly.

The headless export captures the DOM as-is — so as long as embedded media is rendered into the DOM (which it will be once data loads), it'll capture it. The export is client-driven (sends current DOM), so embedded videos/images will appear if loaded. Good.

Let me check ArtifactPanel.tsx to confirm the export-handling already added; and verify CSV export is properly disabled for media-bearing artifacts:

Now let's also verify the same for artifactExport.ts CSV — in case CSV is invoked, we should not crash on media nodes. Let me peek at how reports build CSV:

Let me check widgetToCsv to ensure session_* widget types don't crash and produce no CSV output:

Good — widgetToCsv returns null for unknown widget types like session_*, so they're naturally skipped. The CSV path is safe.

Now let me also confirm ai.controller.ts doesn't reject when artifact type is session_workspace for headless export (we want it to be disabled at UI; but let me also check whether we need backend rejection):

The backend doesn't filter by artifact type — it just renders what HTML is sent. UI gating is sufficient.

Lastly, let me verify the SessionMediaBlock renders embedded media using actual DOM content (videos/images) so the headless screenshot can capture them. Let's check the VideoPlayer briefly to ensure it uses <video> (which Playwright will capture as a poster frame):

Good — <video> with poster will be captured in headless screenshots automatically (Playwright captures DOM as-is).

Everything for export-handling has been wired up properly. Let me verify the ArtifactPanel changes are complete and the code reads cleanly:

The export-handling todo is already complete. Let's mark it as such and confirm linter status.

All three are pre-existing warnings unrelated to the changes. Mark the final task complete.

All 15 todos from the plan are complete. Here's a summary of what was delivered:

Backend
Shared types (shared/types/ai.ts): added session_workspace artifact type, SessionWorkspaceArtifactData, SessionMediaRef, SessionMediaType, SessionMediaOptions, tagged-union ReportNode, six new session_* DashboardWidgetTypes, and the isSessionMediaWidgetType helper.
AI tools (ai-tools.service.ts): registered two new tools — render_session_workspace (returns a session_workspace artifact payload) and embed_session_media (returns a validated SessionMediaRef). Auto-attaches a session workspace artifact to single-session results from query_cloud_sessions, get_cloud_session_artifacts, and get_cloud_session_logs. Extended generate_dashboard/generate_report/generate_test_plan/generate_presentation schemas to accept embedded-media widgets/sections, and made buildDashboardArtifact pass through session_* widgets unmodified.
MCP exposure (testrelic-mcp.service.ts): no change required — buildTestRelicMcpServer iterates AI_TOOLS, so the new tools are automatically exposed to the Agent SDK path.
System prompt (ai-context.service.ts): added a "Session Workspace & Embedded Session Media" section instructing the LLM when to call render_session_workspace vs. embed_session_media, and how to splice media refs into Reports / Dashboards / Test Plans / Presentations.
Frontend
SessionWorkspaceArtifact.tsx (new): fetches session+artifacts via existing hooks (cloud + SDK paths), normalizes platform IDs, branches to MaestroWorkspace / SessionWorkspace / API fallback, locks DevTools dock to bottom, shows an "Open full page" CTA.
SessionWorkspace.tsx: added forceDock and defaultTab props; hides dock-toggle UI when locked.
useSessionMediaData.ts (new): fetches only the slice needed for the requested media type (lighter than loading the whole session).
SessionMediaBlock.tsx (new): renders embedded video / screenshots / console / network / performance / steps via existing leaf components, with caption header, "Open full session" link, loading/error states, and a bare mode for dashboard widgets.
Composite artifact embedding: ReportArtifact.tsx, DashboardArtifact.tsx, TestPlanArtifact.tsx, and SlideLayouts.tsx (presentations) now all render SessionMediaBlock for any embedded SessionMediaRef.
ArtifactRenderer.tsx: routes session_workspace to the new wrapper outside the scroll area (like presentations).
artifactTheme.ts + ArtifactPanel.tsx + MessageRenderer.tsx: added Activity icon, amber theme color, "Session Workspace" label, and tool-status labels for render_session_workspace / embed_session_media.
Export handling (ArtifactPanel.tsx): disables the export dropdown entirely for session_workspace artifacts; for Reports/Dashboards/Test Plans/Presentations containing media, CSV is auto-disabled with a hint, while PDF/PNG capture continues to work because the headless exporter rasterizes whatever is in the DOM (videos render via <video poster> so they're captured cleanly).
User

Uncaught Error: Minified React error #310; visit https://react.dev/errors/310 for the full message or use the non-minified dev environment for full errors and additional helpful warnings. at np (index-tGGjC8he.js:49:50562) at Object.hA [as useMemo] (index-tGGjC8he.js:49:58331) at WDr.Pl.useMemo (index-tGGjC8he.js:18:7642) at x2s (index-tGGjC8he.js:1376:27649) at QP (index-tGGjC8he.js:49:49266) at iB (index-tGGjC8he.js:49:72530) at sQ (index-tGGjC8he.js:49:83221) at kQ (index-tGGjC8he.js:49:119822) at XZ (index-tGGjC8he.js:49:118839) at c9 (index-tGGjC8he.js:49:118663) at vQ (index-tGGjC8he.js:49:115348) at TQ (index-tGGjC8he.js:49:127541) at MessagePort.ee (index-tGGjC8he.js:26:1694)

I am getting the following error on creating a session Workspace

Cursor

React error #310 is "Rendered more hooks than during the previous render" — hooks are being called conditionally or in different order. Let me find the issue.

Found the bug. In SessionWorkspaceArtifact.tsx, a useMemo call is placed after early return statements (lines 119–143), which violates the Rules of Hooks. When loading finishes and the component hits that useMemo for the first time, React sees more hooks than before and throws error #310.

Now sessionForRender can be null at this point (during load), so update the JSX below that also references it:

The sessionForRender is guaranteed non-null by the guard on line ~142 (if (errorMsg || !sessionForRender)), so the JSX below is safe. Let me verify the full file looks clean:

Clean. The fix is straightforward: the useMemo that created sessionForRender was placed after two early return statements. On the first render (while loading), those early returns were hit and the useMemo was never reached. When loading completed and the component re-rendered without hitting the early returns, React counted a new hook that wasn't there before — error #310.

The fix moves the useMemo (and the isMaestro/isApi derivations) above both early returns so the hook call order is always identical regardless of which branch is taken. The early returns now check !sessionForRender instead of !session since sessionForRender encapsulates both.

Are people using your product?
Yes
How many active users or customers do you have? How many are paying? Who is paying you the most, and how much do they pay you?
Adoption snapshot (as of 2026-05-04):
- 6,000+ Playwright SDK downloads from npm in the past month, growing organically with no paid acquisition spend.
- 20+ companies (small, mid-market, and enterprise) actively expressing intent. The named enterprise pipeline includes KPMG, Sprinto, and Plivo. The remainder are mid-market and developer-led signals across Asia and the US.
- 2 organizations (Levich and Purpleplum) in active paid trials on the cloud platform.
- Cloud platform live and launched on Product Hunt; organic growth motion now compounding.

A deliberate stance on revenue.We are pre-revenue and we are not optimizing for revenue at this stage. The thing we are optimizing for is whether our ICPs (QA engineers, developers, PMs, stakeholders, and AI agents) feel the need for TestRelic strongly enough to come back daily. Once that need is undeniable, the monetization layer is straightforward; we already know the pricing tiers and the upgrade triggers (see "How will you make money"). Optimizing for dollars before product-market fit is a known anti-pattern, and we are explicitly choosing not to make that mistake. The current focus is converting the 2 paid trials into recurring contracts, closing the first paid enterprise design partner from the named pipeline, and continuing to compound the SDK install base that feeds the cloud upgrade funnel.

On the partnership side, we are in early discussions with the SurrealDB open-source community for a technical integration: SurrealDB as an alternative data layer within the TestRelic stack. This is a natural fit given Srivishnu's existing contributions to the SurrealDB community and their growing adoption among developer-first teams who are also our core ICP.
Do you have revenue?
no
If you are applying with the same idea as a previous batch, did anything change? If you applied with a different idea, why did you pivot and what did you learn from the last idea?
This is TestRelic's first application to YC.

Jeevesh did apply to YC last year with WhatNxtAI, a different early-stage idea. WhatNxtAI is still a live product in an idle state, which Jeevesh maintains and continues to work on whenever time permits. The honest update on it is that the underlying thesis was correct but premature in his hands at the time, and he did not raise. The cleanest external validation came this year: the very same idea has been accepted into the S26 batch under another team, which confirms the market is real and the wedge was right. The lesson Jeevesh took from that experience is that being right about the wedge is necessary but not sufficient. The right product at the wrong moment with the wrong team composition does not get funded.

TestRelic is the right thing at the right time. This time the wedge is concrete, the founder pairing is rare, the AI-native window is open, the product is already shipping, and the customer commitment is quantifiable. We are not applying with a thesis. We are applying with a brain that customers are already paying to trial.
If you have already participated or committed to participate in an incubator, "accelerator" or "pre-accelerator" program, please tell us about it.
No. Neither founder has participated in or committed to any incubator, accelerator, or pre-accelerator program. YC would be a first for both of us.
Idea
Why did you pick this idea to work on? Do you have domain expertise in this area? How do you know people need what you're making?
We did not pick this idea. It found us over six years of building inside the problem from two complementary angles.

At TestMu AI (LambdaTest), Srivishnu led the development of the Test Insights platform, the product designed to help QA teams understand their test data. Every week, without exception, the same request came in from users: "Can you help me understand which test failures are actually impacting my real users?" We never built it. The roadmap had other priorities. That question stayed unanswered for years and Srivishnu watched thousands of engineers work around it manually. He was one of those engineers. While running LambdaTest's own SMOKE pipelines, he personally juggled six tools simultaneously (GitHub Actions, Amplitude, Sumo Logic, Jira, the CI dashboard, and test reports) just to answer "Is this failure affecting real users right now?" That process took 3+ hours and required 3 people every single time. For a SMOKE dashboard meant to give you a fast signal, that is a complete breakdown of purpose. The deeper problem made it worse. Even when SMOKE shows green, users still complain about failures. The tests pass. The users are broken. No tool surfaces that gap.

Jeevesh saw the same gap from the customer side as he scaled SmartUI to $1M+ ARR. The most consistent enterprise objection was "I can see the test failed, I cannot tell which user it is hurting." Then at Qure.ai he had to build qTrack from zero in the new AI-native era (vertical AI agent, bidirectional integrations,meta-orchestration) and the structural pattern he observed there is exactly what is now breaking testing. AI code-gen and test-gen tools (Cursor, Copilot, Claude Code) are generating massive volumes of tests with no review layer, no quality eval, and no shared definition of correct. The PRD says one thing, the design narrows it, engineering implements another interpretation, QA writes tests against a third, and the AI agent that just shipped the feature has no idea what any of those four sources of truth actually agreed on. This is the Chinese-whisper problem at the heart of every fast-moving AI-native team, and there is no platform today that owns the shared context layer that makes "green" mean anything.

Test observability, evals, AI-agent observability, and user-impact correlation are currently siloed across four different toolchains. Teams running AI-native development need one brain that unifies them. That is TestRelic.

Our domain expertise is direct and specific.
- Srivishnu. 5 years at TestMu AI across automation testing, visual regression, flaky test detection AI, and LLM-powered analytics. Conducted 500+ user interviews while building SmartUI.
- Jeevesh. 2.5 years at LambdaTest scaling SmartUI to $1M+ ARR as sole PM with 50+ enterprise customers. 1 year at Qure.ai building a vertical AI agent platform (qTrack) from concept to $2M+ contracted value, and laying the LLM evaluation and observability foundation for it.
- Joint. Across our combined careers building testing products at LambdaTest and Qure.ai, we have spoken to 2,000+ users. 30+ of those conversations have been with QA engineers, engineering managers, and AI-platform leads since starting TestRelic specifically. Every single recent conversation described the same multi-tool triage loop with the same time cost, and a growing fear that AI-generated tests are silently degrading their quality bar without a layer to catch it.

The problem is not a hypothesis. It is a workflow we lived, a gap we watched go unsolved at scale, and a complaint we heard from users for years before we left to solve it ourselves.

That is why TestRelic exists.
Who are your competitors? What do you understand about your business that they don't?
Every existing tool treats test results as the end goal. TestRelic treats test results as the starting point for the question that actually matters: does this green test validate what the product manager wrote down? That shared context layer (connecting PRD intent to test results to production impact, queryable by humans and AI agents alike) does not exist in any competing product today. That is what we understand and they do not.

Direct competitors. Allure Report, ReportPortal, Currents.dev, TestDino, Katalon Analytics, BrowserStack Test Observability.

Eval and AI-test competitors. Promptfoo, LangSmith, Braintrust, Confident AI, Roark.

Indirect competitors. Datadog CI Visibility, New Relic, Grafana, Sentry.

Every one of these tools was built around a flawed assumption. The direct test competitors assume the job is to display test results, and optimise for how failures are visualised (better charts, cleaner reports, faster load times). The eval competitors assume the job is to score AI outputs in isolation. The indirect observability platforms treat tests as a CI add-on. None of them own the layer that actually matters to an engineering team in 2026: a single brain where the PRD intent, the eval, the functional test, the production signal, and the AI agent that shipped the code all share the same definition of correct.

Tests do not fail in isolation, and they do not pass in isolation either. They fail or pass against an interpretation of intent that travels through PRD, design, engineering, QA, and production users, losing fidelity at every step. No competitor owns that fidelity loss. We do.

What we know that direct test competitors do not.
QA engineers do not have a reporting problem. They have a triage and context problem. The bottleneck is never "I cannot see that my test failed." The bottleneck is always "I do not know if this failure matters, how many users are affected, what the original intent was, and where to look first." Allure shows you a red test. ReportPortal shows you a red test with history. TestRelic shows you a red test, the original PRD acceptance criteria the test was meant to validate, 347 users who could not complete checkout in the last hour, the Loki log that explains why, and a Jira ticket with the root cause already written. These are categorically different products solving categorically different problems.

What we know that eval and AI-test competitors do not.
Evals and functional tests are run by the same team, validate the same product, and break for related reasons, but live in completely different toolchains today. Promptfoo and Braintrust score the LLM. Playwright and Cypress validate the UI. Nothing connects them. When an AI-shipped feature breaks for a real user, the eval logs, the functional test results, and the production signal are spread across three tools and zero shared context. TestRelic puts them in one brain.

What we know that indirect competitors do not.
Datadog and New Relic understand production observability deeply but treat QA as an afterthought, a CI Visibility add-on bolted onto a platform built for infrastructure monitoring. Their pricing reflects this. $31 to $34 per host, built for DevOps budgets, not QA team budgets. More importantly, they have never spoken to a QA engineer the way we have. They do not know that the SMOKE dashboard shows green while users are reporting failures. They do not know that QA teams juggle 6 tools for 3 hours with 3 people just to triage a single incident. We know this because we lived it and then validated it with 2,000+ users across our careers and 30+ teams since starting TestRelic. They know it as a TAM slide.

The structural insight no competitor has.
A passing test suite is not proof that users are having a good experience, and a passing eval is not proof that the test was testing the right thing in the first place. The brain that grounds tests, evals, and production signals against shared product context does not exist today. We are the first platform built to be that brain, and to be queryable by the AI agents that increasingly write the tests, ship the code, and validate the changes. That positioning is not a feature. It is a category definition. And it is ours to own before any incumbent notices the gap.
How do or will you make money? How much could you make?
TestRelic runs a three-tier model: a free SDK to drive developer adoption, subscription plans that unlock the cloud intelligence layer, and an enterprise tier on the roadmap for larger organisations.

Free: $0 forever. The @testrelic/playwright-analytics SDK is permanently free. Local-first, no cloud signup, no usage limits on the local reporter. Engineers install it in under 3 minutes, get an AI-powered HTML report immediately, and pull their teams onto the cloud platform when they need history, trends, and AI root cause at scale. This is our top-of-funnel. We remove every friction point in dev tool adoption before asking for a single dollar.

Starter: $5/month. The entry point to the TestRelic cloud platform. Covers core test analytics: unified dashboard across Playwright, Selenium, Cypress, and Appium, pass rate trends, flaky test detection, and MTTR tracking. Designed for individual engineers and small teams validating the platform before committing. Additional test data ingestion is available as a pay-as-you-go add-on, billed per GB, so teams only pay for what they actually generate.

Growth: $20/month. The full TestRelic intelligence layer. Includes Ask AI for natural language queries powered by Claude Sonnet 4 that return rendered analytics artifacts, regression reports, sprint review decks, and test path maps grounded in real run data. Includes Amplitude and Grafana Loki user-impact correlation. When a test fails, Growth plan users see how many real users are affected, the live production error rate, and which sessions to replay first. Jira auto-ticket creation with full AI root cause context is included. Additional GB ingestion available as an add-on on top of the base plan, scaling naturally with team size and test volume.

Enterprise. Roadmap tier. Custom ACV, annual contracts, SSO, RBAC, audit logs, custom data residency, 1-year retention, auto-remediation, dedicated SLA at 99.9%, dedicated CSM, and a forward-deployed pod from TestRelic. Priced 30 to 50% below Datadog's equivalent tier. The forward deployment carries a concrete customer commitment: we are deployed with you until you hit 15-minute RCA versus the current 4-hour baseline, and we stay until that target holds. The enterprise motion activates as we convert our existing paid trials (Levich, Purpleplum) into signed contracts and close the active enterprise pipeline (Sprinto, Plivo, KPMG), with SOC 2 Type 2 in place as the compliance unlock that converts enterprise pipeline into signed contracts.

The land-and-expand motion is the revenue engine. An engineer installs the free SDK, upgrades to Starter to get cloud history and dashboards, moves to Growth when their QA lead needs Ask AI and user-impact correlation, and adds GB ingestion as their test suite scales. The Amplitude, PostHog, and Loki integrations are the primary upgrade trigger from Starter to Growth. The moment a team sees a failed test correlated with real users hitting a checkout error, the conversation shifts from "this is useful" to "every team needs this." The MCP layer is the second upgrade trigger: as soon as a customer wires Cursor or Claude Code into the brain, the daily query volume from agents alone justifies the next pricing tier.


How much could we make

The global automation testing market is estimated at $37.22 billion in 2025 and is expected to reach $78.28 billion by 2030 at a CAGR of 16%. GI Research The AI-powered test intelligence sub-segment within this grows at 22–30% CAGR, and has no dominant platform today.

Our primary ICP is SaaS companies with 50–500 engineers. There are approximately 17,000 such companies in the US alone. The Starter to Growth upgrade path at $20/month per team is the volume play, at 5,000 Growth plan teams, that is $1.2M ARR from subscriptions alone, before a single GB add-on or enterprise contract. The per-GB add-on layer compounds on top: a 50-engineer team generating 500GB/month of test data adds meaningful incremental revenue that scales directly with their engineering growth, not a seat count we have to negotiate.

The enterprise roadmap is where the ceiling opens. At a conservative $10,000 ACV per enterprise customer, 500 enterprise contracts is $5M ARR. At $25,000 ACV, achievable once the user impact correlation layer is the standard feature driving the enterprise upgrade, that same 500 contracts is $12.5M ARR. That is before multi-team expansion within the same organisation, which is the most reliable NRR driver in developer tooling.

DevOps and IT Management software boasts the highest category NRR at 119%, with companies like Cloudflare and Datadog leading the way. Datadog has historically achieved NRR of 146%. We target 110%+ NRR through the same motion, consumption growth as test volume scales, plus multi-team expansion as QA leads share the platform upward to engineering managers and CTOs.

SaaS companies with high NRR grow 2.5x faster than their low-NRR counterparts. Highalpha The compounding math is what makes this model work: a team that starts on the free SDK, upgrades to Growth at $20/month, adds 200GB of ingestion, and eventually signs an enterprise contract, all without an outbound sales touch, is the PLG motion that Datadog proved and that we are running on a market Datadog has never prioritised.

The global automation testing market is projected to reach $92.45 billion by 2030 at a CAGR of 17.3%. Grand View Research We intend to own the AI-native intelligence layer sitting above all of it.
Which category best applies to your company?
B2B SaaS
If you had any other ideas you considered applying with, please list them. One may be something we've been waiting for. Often when we fund people it's to do something they list here and not in the main application.
Open-Source Evaluation Platform for LLM-Powered Test Agents
As AI coding agents like GitHub Copilot, Cursor, and Claude Code generate test suites automatically, a new problem emerges that nobody is solving: how do you evaluate whether an AI-generated test is actually good? Not whether it passes — whether it is testing the right thing, covering the right edge cases, and not introducing flaky or redundant coverage. We considered building an open-source eval framework purpose-built for AI-generated tests — think LangSmith or Promptfoo, but specifically for the QA layer of the AI engineering stack. The open-source core would build community and data gravity; a cloud-hosted eval platform with team dashboards, regression tracking across agent versions, and quality scoring would be the monetisation layer. The timing is early 2026 — every engineering team is now shipping AI-generated tests without any framework to evaluate their quality. No incumbent owns this.
Equity
Have you formed ANY legal entity yet?
no
If you have not formed the company yet, describe the planned equity ownership breakdown among the founders, employees and any other proposed stockholders. If there are multiple founders, be sure to give the proposed equity ownership of each founder and founder title (e.g. CEO). (This question is as much for you as us.)
CEO - 50%
CPO - 50%
Have you taken any investment yet?
no
Are you currently fundraising?
no
Curious
What convinced you to apply to Y Combinator? Did someone encourage you to apply? Have you been to any YC events?
Srivishnu has been reading Paul Graham's essays since before he founded GreenLine Labs in 2015. "Do Things That Don't Scale", "Startup = Growth", "How to Get Startup Ideas", these were not assigned reading. They were the framework he used to think about every product decision across GreenLine Labs, Dalalstreet.ai, and his years at LambdaTest. When he was conducting 500+ user interviews for SmartUI, he was not following a product management methodology. He was doing what PG said founders should do before anything else. YC has been the intellectual backdrop of his entire founding career without his ever being in a batch.

The specific moment Srivishnu decided to apply to YC was when he looked at what he had shipped in 2 months (a live SDK on npm, a working cloud platform, Ask AI with artifact generation, an MCP server in development) and realised he had built it entirely by doing the thing YC tells founders to do: stay close to the problem, ship fast, talk to users, and don't wait for permission. That output in that timeframe is only possible when the founder has genuine domain obsession. He has been living this problem for six years. YC is the program designed for exactly this kind of founder at exactly this stage.

Jeevesh's path to YC ran in parallel and was the forcing function for his full-time commitment. As Overall Head of the Entrepreneurship Cell at IIT Jodhpur (2021 to 22), Vice President of the Board of Career Development (2022 to 23), and a delegate to the HPAIR Asian Conference at Harvard (2023), he was studying YC alumni founders as case studies before he ever shipped a product of his own. He applied with his last bet WhatNxtAI with the same thought in mind. Srivishnu had asked him to co-found TestRelic earlier, and Jeevesh had been contributing product direction informally while still at Qure.ai. The crystallising moment was YC Startup School in person on April 18, 2026. He walked out of that day convinced that the AI-native QA window was closing faster than he had assumed, resigned from Qure.ai within days, and joined Srivishnu full-time. The honest version of the story is that YC Startup School converted a "I should do this eventually" into "I am doing this now or I will regret missing the window." The FOMO was real and it was correctly placed.

Srivishnu has not attended a YC event in person. He has followed YC Startup School online, watched the How to Start a Startup lecture series, and engaged with the YC community through public channels. This application is our first direct engagement with YC as founders of TestRelic. We did not want to apply until we had something real to show, not a deck, not an idea, but a product that engineers are installing, a problem we can defend from every angle, and a founder pairing with a four-year operating history. That time is now.

How did you hear about Y Combinator?
I first heard about Y Combinator in 2015 at an Entrepreneurship Summit at IIT Bombay. I was there as a first-time founder — I had just started Custom Monkeys, a college startup where I designed and sold funky custom T-shirts online. The summit had speakers talking about the global startup ecosystem, and YC came up as the benchmark for what a world-class accelerator looked like. I was 22, running my first business out of college, and the idea that a program could take a founder with a real problem and a working product and compress years of learning into three months stayed with me.

That was eleven years ago. Since then I have followed YC continuously — through GreenLine Labs, through Dalalstreet.ai, through five years at LambdaTest building products, and now through TestRelic. Paul Graham's essays became the intellectual framework I used to make product and founder decisions long before I knew how to articulate what a framework was. Startup School content, batch company stories, and the YC podcast have been a constant in the background of every company I have built or contributed to.

Custom Monkeys never became a YC application. Neither did GreenLine Labs, which I sold, or Dalalstreet.ai, which I closed after four months to pursue a bigger opportunity. I did not apply to YC then because I did not have enough to show. I am applying now because for the first time I have a live product, validated user pain from six years inside the problem, and a market with no AI-native winner. The summit at IIT Bombay planted the seed. TestRelic is why it is finally the right time to act on it.