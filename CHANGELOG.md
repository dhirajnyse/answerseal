# AnswerSeal Changelog

## v3.14 Alpha - Production Data Bridge

Phase: Production Data Bridge

Changes made:
- Added `production-data-bridge.html` as Production Data Bridge to prepare verified demo workflows for production data with source mappings, access boundaries, migration checks, and rollback receipts.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v220.
- Synchronized existing HTML room build badges, footers, and System links to `v3.14 Alpha` so the public site reads as one coherent current build.
- Improved footer wrapping so the expanded release navigation does not create horizontal scroll on desktop or mobile.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.15 Alpha Customer Launch Rehearsal.

Files changed:
- index.html
- versions.html
- production-data-bridge.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js
- styles.css
- existing `*.html` room pages for current-build badge/footer/System-link normalization

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node --check scripts/static-preview-server.mjs`
- `node scripts/check-answerseal-release.mjs "v3.14 Alpha" "Production Data Bridge" "production-data-bridge" --current`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.13 Alpha - Pilot Outcome Evidence Loop

Phase: Pilot Outcome Evidence Loop

Changes made:
- Added `pilot-outcome-evidence-loop.html` as Pilot Outcome Evidence Loop to connect pilot decisions, customer feedback, sealed outcomes, support notes, and renewal signals into a repeatable evidence loop.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v219.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.14 Alpha Production Data Bridge.

Files changed:
- index.html
- versions.html
- pilot-outcome-evidence-loop.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node --check scripts/static-preview-server.mjs`
- `node scripts/check-answerseal-release.mjs "v3.13 Alpha" "Pilot Outcome Evidence Loop" "pilot-outcome-evidence-loop"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.12 Alpha - Buyer Room Activity Lens

Phase: Buyer Room Activity Lens

Changes made:
- Added `buyer-room-activity-lens.html` as Buyer Room Activity Lens to show which buyer rooms are viewed, which proof cards are used, what follow-up is open, and where trust friction remains.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v218.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.13 Alpha Pilot Outcome Evidence Loop.

Files changed:
- index.html
- versions.html
- buyer-room-activity-lens.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node --check scripts/static-preview-server.mjs`
- `node scripts/check-answerseal-release.mjs "v3.12 Alpha" "Buyer Room Activity Lens" "buyer-room-activity-lens"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.11 Alpha - Proof Packet Builder

Phase: Proof Packet Builder

Changes made:
- Added `proof-packet-builder.html` as Proof Packet Builder to assemble score, source trail, risk flags, improved answer, approvals, and buyer notes into a clean reusable proof packet.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v217.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.12 Alpha Buyer Room Activity Lens.

Files changed:
- index.html
- versions.html
- proof-packet-builder.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node --check scripts/static-preview-server.mjs`
- `node scripts/check-answerseal-release.mjs "v3.11 Alpha" "Proof Packet Builder" "proof-packet-builder"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.10 Alpha - Customer Proof Command

Phase: Customer Proof Command

Changes made:
- Added `customer-proof-command.html` as Customer Proof Command to turn sealed answers, buyer questions, source coverage, owner actions, and pilot promises into one customer-facing proof command room.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v216.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.11 Alpha Proof Packet Builder.

Files changed:
- index.html
- versions.html
- customer-proof-command.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node --check scripts/static-preview-server.mjs`
- `node scripts/check-answerseal-release.mjs "v3.10 Alpha" "Customer Proof Command" "customer-proof-command"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.09 Alpha - Trust Copilot Launch Gate

Phase: Trust Copilot Launch Gate

Changes made:
- Added `trust-copilot-launch-gate.html` as Trust Copilot Launch Gate to combine copilot guidance, permission rules, evidence routes, and human approvals into one readiness gate for controlled pilot launch.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v215.
- Synchronized existing HTML room build badges and footers to `v3.09 Alpha` so the public site reads as one coherent current build.
- Improved mobile landing navigation so primary links wrap into compact rows instead of clipping offscreen.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.10 Alpha Customer Proof Command.

Files changed:
- index.html
- versions.html
- trust-copilot-launch-gate.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js
- styles.css
- existing `*.html` room pages for current-build badge/footer normalization
- scripts/check-answerseal-release.mjs
- scripts/static-preview-server.mjs

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node --check scripts/static-preview-server.mjs`
- `node scripts/check-answerseal-release.mjs "v3.09 Alpha" "Trust Copilot Launch Gate" "trust-copilot-launch-gate" --current`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.08 Alpha - Human Approval Queue

Phase: Human Approval Queue

Changes made:
- Added `human-approval-queue.html` as Human Approval Queue to turn copilot recommendations into reviewable approval cards with owners, status, decision notes, risk level, and export-ready receipts.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v214.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.09 Alpha Trust Copilot Launch Gate.

Files changed:
- index.html
- versions.html
- human-approval-queue.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js
- scripts/check-answerseal-release.mjs

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node scripts/check-answerseal-release.mjs "v3.08 Alpha" "Human Approval Queue" "human-approval-queue"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.07 Alpha - Evidence Routing Copilot

Phase: Evidence Routing Copilot

Changes made:
- Added `evidence-routing-copilot.html` as Evidence Routing Copilot to route buyer questions and answer gaps to the right evidence source, owner, policy lane, freshness check, and proof path.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v213.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.08 Alpha Human Approval Queue.

Files changed:
- index.html
- versions.html
- evidence-routing-copilot.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js
- scripts/check-answerseal-release.mjs

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node scripts/check-answerseal-release.mjs "v3.07 Alpha" "Evidence Routing Copilot" "evidence-routing-copilot"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.06 Alpha - Copilot Permission Console

Phase: Copilot Permission Console

Changes made:
- Added `copilot-permission-console.html` as Copilot Permission Console to separate allowed suggestions, blocked automation, required approvals, data boundaries, and escalation paths before the copilot touches real work.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v212.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.07 Alpha Evidence Routing Copilot.

Files changed:
- index.html
- versions.html
- copilot-permission-console.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js
- scripts/check-answerseal-release.mjs

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node scripts/check-answerseal-release.mjs "v3.06 Alpha" "Copilot Permission Console" "copilot-permission-console"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.

## v3.05 Alpha - Autonomous Trust Copilot

Phase: Autonomous Trust Copilot

Changes made:
- Added `autonomous-trust-copilot.html` as Autonomous Trust Copilot to turn verifier, reports, registry, policies, and launch rooms into one governed next-action copilot that suggests the safest owner move without writing on its own.
- Updated landing, build phases, README, changelog, release notes, runtime build identity, storage keys, and Review Pack v211.
- Preserved the source-first verifier, report, registry, pricing, pilot, and demo surfaces.
- Moved the next build toward v3.06 Alpha Copilot Permission Console.

Files changed:
- index.html
- versions.html
- autonomous-trust-copilot.html
- README.md
- RELEASES.md
- CHANGELOG.md
- app.js
- landing.js
- scripts/check-answerseal-release.mjs

Checks run:
- `node --check app.js`
- `node --check landing.js`
- `node --check scripts/check-answerseal-release.mjs`
- `node scripts/check-answerseal-release.mjs "v3.05 Alpha" "Autonomous Trust Copilot" "autonomous-trust-copilot"`

Known risks:
- The new room is static product scaffolding until backend workflow events and authenticated workspace data are wired.
- Local storage migration preserves prior demo memory, but production storage needs a real migration plan before launch.
