# AnswerSeal

![AnswerSeal 3D brand mark](assets/answerseal-3d-logo-bright.png)

AnswerSeal is a static MVP for a B2B SaaS security questionnaire copilot. It helps teams draft buyer questionnaire answers from approved evidence, review confidence, flag weak sources, approve answers, and export a response pack.

**Current version:** v0.4 Alpha

**Current phase:** Demo Memory

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
- Private pilot conversion section with a static email request flow
- Approved answer library for reusable response memory
- Local browser workspace memory for edits, approvals, imports, and active review state
- Evidence vault with freshness signals and selected-source detail
- Manual question intake plus TXT, CSV, or Markdown imports
- Evidence import for TXT, CSV, or Markdown files
- Approval trail for reviewer handoff
- CSV export and Word-compatible review pack export

## Project Files

- `index.html` - Landing page and private pilot conversion
- `styles.css` - Product UI, layout, and responsive behavior
- `landing.js` - Private pilot request email flow
- `app.js` - Demo data, drafting logic, imports, review actions, and exports
- `assets/answerseal-logo.svg` - App logo and favicon
- `assets/answerseal-3d-logo-bright.png` - Brighter 3D corporate brand mark
- `demo.html` - Working product demo
- `RELEASES.md` - Build phases and release notes

## Run Locally

Open `index.html` in a browser for the landing page, or `demo.html` for the working product demo. No dependency install or build step is required.

## Next Phase

- Validate private pilot requests from SaaS founders, CTOs, and sales engineers
- Add real document parsing for PDF, DOCX, and XLSX questionnaires
- Add private cloud workspace storage and user accounts
- Add AI drafting against a retrieval index with per-claim citations
- Add portal copy mode for browser-based buyer questionnaires

## License

MIT
