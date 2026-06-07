# AnswerSeal

![AnswerSeal 3D brand mark](assets/answerseal-3d-logo-bright.png)

AnswerSeal is a static MVP for a B2B SaaS security questionnaire copilot. It helps teams draft buyer questionnaire answers from approved evidence, review confidence, flag weak sources, approve answers, and export a response pack.

**Current version:** v0.10 Alpha

**Current phase:** Secure Workspace Accounts

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
- Private workspace drawer with account context, reviewer roles, owner routing, and routed question counts
- Secure handoff summary with copyable pilot link and workspace readiness score
- Pilot Data Room drawer with questionnaire, evidence pack, contract, and export folders
- Editable reviewer notes for evidence sources before buyer-facing reuse
- Data room activity timeline for imports, routes, approvals, exports, and handoffs
- Pilot close checklist for tracking conversion readiness
- Claim Trace Engine that maps every answer sentence to a ranked source excerpt
- Conflict detection for stale, legacy, or unsafe source language before approval
- Answer diff signal showing whether a response is original, edited, or newly drafted
- Secure workspace accounts drawer with current session, role switching, team invites, and invite acceptance status
- Organization vault checkpointing for evidence, approved answers, claim traces, and local pilot sync state
- Access audit copy for reviewer decisions, role changes, invites, exports, and source changes
- Evidence vault with freshness signals and selected-source detail
- Manual question intake plus TXT, CSV, or Markdown imports
- Evidence import for TXT, CSV, Markdown, PDF, DOCX, and XLSX-style files
- Approval trail for reviewer handoff
- CSV export and Word-compatible Review Pack v6 export with workspace routing, secure access, data room folders, notes, close checklist, and claim trace

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

## Next Phase: v0.11 Alpha - Evidence Retrieval AI

- Validate private pilot requests from SaaS founders, CTOs, and sales engineers
- Add private cloud workspace storage for evidence, answers, traces, and activity
- Add organization-level evidence vaults and reusable answer libraries
- Add evidence retrieval against a lightweight source index
- Add draft rationale for why each source was selected
- Add duplicate question detection against approved library answers
- Add weak-match refusal before AI drafts a buyer-facing answer

## License

MIT
