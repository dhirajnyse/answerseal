# AnswerSeal

![AnswerSeal 3D brand mark](assets/answerseal-3d-logo-bright.png)

AnswerSeal is a static MVP for a B2B SaaS security questionnaire copilot. It helps teams draft buyer questionnaire answers from approved evidence, review confidence, flag weak sources, approve answers, and export a response pack.

**Current version:** v0.17 Alpha

**Current phase:** Evidence Vault Connectors

## Brand

- **Name:** AnswerSeal
- **Positioning:** security questionnaire answers sealed to approved evidence
- **Tagline:** Seal every answer to evidence.
- **Promise:** no source, no answer
- **Personality:** calm, precise, enterprise-ready, quietly confident
- **Primary colors:** vivid teal, white, graphite
- **Accent colors:** bright cyan for evidence links, electric blue for calls to action, amber for weak proof, green for approved answers

## Product Wedge

Security questionnaires slow down enterprise deals because answers are scattered across policies, SOC reports, contracts, old spreadsheets, and internal memory. AnswerSeal starts with one narrow promise:

> Every answer must be tied to a source before it leaves the team.

## MVP Features

- Source-backed questionnaire queue with status filters and search
- Draft answer workspace with confidence scoring, review notes, and citations
- Seal Summary for answer grade, evidence coverage, and source freshness
- Seal Path landing narrative from buyer question to approved evidence
- Top version badge linked to a build phases page
- Build phases page with shipped releases and the next-version roadmap
- Private pilot conversion section with a static email request flow
- Approved answer library for reusable response memory
- Local browser workspace memory for edits, approvals, imports, and active review state
- Evidence intake drawer with file preview status for TXT, CSV, Markdown, PDF, DOCX, and XLSX-style uploads
- Evidence coverage map for ready, weak, missing, and stale trust categories
- Portal copy mode for buyer portals, including answer, citations, and risk status
- Buyer Portal Autofill with field mapping for prompts, answers, citations, reviewer notes, and packets
- Paste sequencing with copied-field memory per buyer question
- Submission checks for drafted answer, citations, retrieval gate, claim trace, source freshness, blockers, and approval
- Buyer-ready packet copy for portal handoff
- Deal Desk Analytics drawer with deal risk, next owner, top evidence, and time saved
- Blocker heatmap across trust category, owner routing, portal stage, and claim trace
- Evidence ROI ranking for documents that answer the most buyer questions
- Copyable executive digest for founders, sales, security, and legal handoff
- Multi-Buyer Pipeline drawer for active buyer reviews, deal value, due dates, readiness, and owners
- SLA risk list for reviews that may miss buyer deadlines
- Proof reuse graph showing which evidence sources support the most buyer reviews
- Portfolio digest copy for sales/security handoff across all active reviews
- Buyer Trust Room drawer with scoped buyer link, room status, score, expiry, and receipts
- Buyer-safe answer packet for approved and approval-gated answers
- Source-safe evidence excerpts that hide internal-only files and block legacy evidence
- Trust room access policy and receipt trail for buyer views, copied packets, and handoff activity
- Copyable Trust Room link, buyer packet, answer text, evidence excerpts, and room digest
- Buyer Follow-Up Inbox for comments captured from scoped trust rooms
- Follow-up owner routing by security, legal, AI governance, and operations owner
- Follow-up review task creation that converts buyer comments into internal questionnaire work
- Evidence-gap and SLA-risk tracking for buyer comments that need stronger proof
- Copyable follow-up briefs and inbox digest for sales/security handoff
- Evidence Vault Connectors drawer for Drive, SharePoint, Notion, and Confluence-style sources
- Vault score, approved connector count, stale connector count, source issues, and sync health
- Source freshness watch mapped to linked evidence and stale proof risks
- Owner approval cards for source owners, pending reviews, and connector issues
- Copyable connector briefs and vault digest for evidence operations handoff
- Private workspace drawer with account context, reviewer roles, owner routing, and routed question counts
- Secure handoff summary with copyable pilot link and workspace readiness score
- Pilot Data Room drawer with questionnaire, evidence pack, contract, and export folders
- Editable reviewer notes for evidence sources before buyer-facing reuse
- Data room activity timeline for imports, routes, approvals, exports, and handoffs
- Pilot close checklist for tracking conversion readiness
- Claim Trace Engine that maps every answer sentence to a ranked source excerpt
- Conflict detection for stale, legacy, or unsafe source language before approval
- Answer diff signal showing whether a response is original, edited, or newly drafted
- Evidence Retrieval AI panel with ranked source candidates before draft approval
- Retrieval rationale explaining text match, source authority, freshness, and weak-match risk
- Duplicate question memory for spotting reusable approved answers
- Weak-match refusal gate that blocks drafts when no defensible evidence is found
- Secure workspace accounts drawer with current session, role switching, team invites, and invite acceptance status
- Organization vault checkpointing for evidence, approved answers, claim traces, and local pilot sync state
- Access audit copy for reviewer decisions, role changes, invites, exports, and source changes
- Evidence vault with freshness signals and selected-source detail
- Manual question intake plus TXT, CSV, or Markdown imports
- Evidence import for TXT, CSV, Markdown, PDF, DOCX, and XLSX-style files
- Approval trail for reviewer handoff
- CSV export and Word-compatible Review Pack v13 export with evidence vault connectors, buyer follow-up inbox, buyer trust room, multi-buyer pipeline, deal analytics, portal readiness, retrieval rationale, workspace routing, secure access, data room folders, notes, close checklist, and claim trace

## Project Files

- `index.html` - Landing page and private pilot conversion
- `versions.html` - Current version, build phases, and next-release roadmap
- `styles.css` - Product UI, layout, and responsive behavior
- `landing.js` - Private pilot request email flow
- `app.js` - Demo data, drafting logic, imports, review actions, and exports
- `assets/answerseal-logo.svg` - App logo and favicon
- `assets/answerseal-3d-logo-bright.png` - Brighter 3D corporate brand mark
- `demo.html` - Working product demo
- `RELEASES.md` - Build phases and release notes

## Run Locally

Open `index.html` in a browser for the landing page, or `demo.html` for the working product demo. No dependency install or build step is required.

## Next Phase: v0.18 Alpha - Questionnaire Import Studio

- Validate private pilot requests from SaaS founders, CTOs, and sales engineers
- Add private cloud workspace storage for evidence, answers, traces, and activity
- Add organization-level evidence vaults and reusable answer libraries
- Import messy buyer spreadsheets and portal exports into the review queue
- Map columns and fields to question, owner, category, due date, and buyer portal
- Detect duplicate buyer questions against approved response memory
- Suggest owners from trust category, source system, and prior routing history
- Show import confidence and route weak rows for human cleanup

## License

MIT
