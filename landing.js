const pilotForm = document.querySelector("#pilotForm");
const pilotStatus = document.querySelector("#pilotStatus");
const landingVerifier = document.querySelector("#landingVerifier");
const landingPrompt = document.querySelector("#landingPrompt");
const landingAnswer = document.querySelector("#landingAnswer");
const landingSources = document.querySelector("#landingSources");
const landingTrustScore = document.querySelector("#landingTrustScore");
const landingTrustStatus = document.querySelector("#landingTrustStatus");
const landingRiskFlags = document.querySelector("#landingRiskFlags");
const landingMissingSources = document.querySelector("#landingMissingSources");
const landingUnsupportedClaims = document.querySelector("#landingUnsupportedClaims");
const landingCheckList = document.querySelector("#landingCheckList");
const landingImprovedAnswer = document.querySelector("#landingImprovedAnswer");
const landingReportSummary = document.querySelector("#landingReportSummary");
const saveLandingReport = document.querySelector("#saveLandingReport");
const copyLandingReport = document.querySelector("#copyLandingReport");
const shareLandingReport = document.querySelector("#shareLandingReport");
const landingSaveStatus = document.querySelector("#landingSaveStatus");
const savedReportsList = document.querySelector("#savedReportsList");
const savedReportsCount = document.querySelector("#savedReportsCount");
const artifactRegistryList = document.querySelector("#artifactRegistryList");
const artifactRegistryCount = document.querySelector("#artifactRegistryCount");
const registryTemplateCount = document.querySelector("#registryTemplateCount");
const reviewLoopList = document.querySelector("#reviewLoopList");
const reviewLoopCount = document.querySelector("#reviewLoopCount");
const reviewPromotionStatus = document.querySelector("#reviewPromotionStatus");
const evaluationBenchList = document.querySelector("#evaluationBenchList");
const evaluationBenchScore = document.querySelector("#evaluationBenchScore");
const evaluationRegressionStatus = document.querySelector("#evaluationRegressionStatus");
const connectorLabList = document.querySelector("#connectorLabList");
const connectorPolicyScore = document.querySelector("#connectorPolicyScore");
const connectorRoutingStatus = document.querySelector("#connectorRoutingStatus");
const learningSignalList = document.querySelector("#learningSignalList");
const learningSignalScore = document.querySelector("#learningSignalScore");
const learningBoundaryStatus = document.querySelector("#learningBoundaryStatus");
const policyGatewayList = document.querySelector("#policyGatewayList");
const policyGatewayScore = document.querySelector("#policyGatewayScore");
const policyDecisionStatus = document.querySelector("#policyDecisionStatus");
const buyerPortalList = document.querySelector("#buyerPortalList");
const buyerPortalScore = document.querySelector("#buyerPortalScore");
const buyerActivityStatus = document.querySelector("#buyerActivityStatus");
const proofConciergeList = document.querySelector("#proofConciergeList");
const proofConciergeScore = document.querySelector("#proofConciergeScore");
const proofConciergeStatus = document.querySelector("#proofConciergeStatus");
const proofMemoryList = document.querySelector("#proofMemoryList");
const proofMemoryScore = document.querySelector("#proofMemoryScore");
const proofMemoryStatus = document.querySelector("#proofMemoryStatus");
const proofNetworkList = document.querySelector("#proofNetworkList");
const proofNetworkScore = document.querySelector("#proofNetworkScore");
const proofNetworkStatus = document.querySelector("#proofNetworkStatus");
const proofBenefitList = document.querySelector("#proofBenefitList");
const proofBenefitScore = document.querySelector("#proofBenefitScore");
const proofBenefitStatus = document.querySelector("#proofBenefitStatus");
const sealedReportScore = document.querySelector("#sealedReportScore");
const sealedReportStatus = document.querySelector("#sealedReportStatus");
const sealedReportPrompt = document.querySelector("#sealedReportPrompt");
const sealedReportAnswer = document.querySelector("#sealedReportAnswer");
const sealedReportSources = document.querySelector("#sealedReportSources");
const sealedReportImproved = document.querySelector("#sealedReportImproved");
const sealedReportFlags = document.querySelector("#sealedReportFlags");
const sealedReportChecks = document.querySelector("#sealedReportChecks");
const sealedReportSummary = document.querySelector("#sealedReportSummary");
const copySealedReport = document.querySelector("#copySealedReport");
const shareSealedReport = document.querySelector("#shareSealedReport");

const PUBLIC_BUILD_VERSION = "v0.70 Alpha";
const PUBLIC_REPORT_STORAGE_KEY = "answerseal.public.reports.v70";
const PUBLIC_LEGACY_REPORT_STORAGE_KEYS = [
  "answerseal.public.reports.v69",
  "answerseal.public.reports.v68",
  "answerseal.public.reports.v67",
  "answerseal.public.reports.v66",
  "answerseal.public.reports.v65",
  "answerseal.public.reports.v64",
  "answerseal.public.reports.v63",
  "answerseal.public.reports.v62",
  "answerseal.public.reports.v61",
  "answerseal.public.reports.v60",
  "answerseal.public.reports.v59",
];
let latestLandingReport = null;
let activeSealedReport = null;

if (landingVerifier) {
  landingVerifier.addEventListener("submit", (event) => {
    event.preventDefault();
    renderLandingVerification();
  });

  renderLandingVerification();
}

if (saveLandingReport) {
  saveLandingReport.addEventListener("click", () => {
    if (!latestLandingReport || !latestLandingReport.answer.trim()) {
      landingSaveStatus.textContent = "Paste and verify an answer before saving a sealed report.";
      return;
    }

    const saved = savePublicReport(latestLandingReport);
    landingSaveStatus.textContent = `Saved ${saved.status} report at ${formatReportTime(saved.createdAt)}.`;
    renderSavedReports();
  });
}

if (copyLandingReport) {
  copyLandingReport.addEventListener("click", async () => {
    if (!latestLandingReport || !latestLandingReport.answer.trim()) {
      landingSaveStatus.textContent = "Verify an answer before copying the report.";
      return;
    }
    await copyText(formatReportForCopy(latestLandingReport));
    landingSaveStatus.textContent = "Sealed report copied.";
  });
}

if (shareLandingReport) {
  shareLandingReport.addEventListener("click", async () => {
    if (!latestLandingReport || !latestLandingReport.answer.trim()) {
      landingSaveStatus.textContent = "Verify an answer before creating a share link.";
      return;
    }
    await copyText(getReportShareUrl(latestLandingReport));
    landingSaveStatus.textContent = "Share link copied. It opens a self-contained sealed report.";
  });
}

if (copySealedReport) {
  copySealedReport.addEventListener("click", async () => {
    if (!activeSealedReport) return;
    await copyText(formatReportForCopy(activeSealedReport));
  });
}

if (shareSealedReport) {
  shareSealedReport.addEventListener("click", async () => {
    if (!activeSealedReport) return;
    await copyText(getReportShareUrl(activeSealedReport));
  });
}

renderSavedReports();
renderArtifactRegistry();
renderReviewLoop();
renderEvaluationBench();
renderConnectorLab();
renderLearningSignalLoop();
renderPolicyGateway();
renderBuyerTrustPortal();
renderProofConcierge();
renderProofLearningMemory();
renderTenantSafeProofNetwork();
renderNetworkBenefitLedger();
renderSealedReportPage();

function renderLandingVerification() {
  const report = buildLandingTrustReport(landingPrompt.value, landingAnswer.value, landingSources?.value ?? "");
  latestLandingReport = report;
  landingTrustScore.textContent = `${report.score}%`;
  landingTrustStatus.textContent = report.status;
  landingImprovedAnswer.textContent = report.improvedAnswer;
  landingReportSummary.textContent = report.summary;
  landingRiskFlags.innerHTML = "";
  if (landingMissingSources) landingMissingSources.innerHTML = "";
  if (landingUnsupportedClaims) landingUnsupportedClaims.innerHTML = "";
  if (landingCheckList) landingCheckList.innerHTML = "";

  report.flags.forEach((flag) => {
    const item = document.createElement("li");
    item.textContent = flag;
    landingRiskFlags.append(item);
  });

  renderList(landingMissingSources, report.missingSourceWarnings);
  renderList(landingUnsupportedClaims, report.unsupportedClaimWarnings);
  renderCheckList(landingCheckList, report.checks);
}

function buildLandingTrustReport(prompt, answer, sources = "") {
  const cleanPrompt = String(prompt ?? "").trim();
  const cleanAnswer = String(answer ?? "").trim();
  const cleanSources = String(sources ?? "").trim();
  const lower = cleanAnswer.toLowerCase();
  const sourceLower = cleanSources.toLowerCase();
  const words = cleanAnswer.split(/\s+/).filter(Boolean);
  const sentences = cleanAnswer.split(/[.!?]+/).map((sentence) => sentence.trim()).filter(Boolean);
  const sourceTerms = ["source", "citation", "policy", "standard", "soc", "iso", "report", "dpa", "contract", "evidence", "audit", "approved"];
  const riskTerms = ["always", "never", "guarantee", "100%", "fully compliant", "no risk", "unbreakable", "best in class"];
  const complianceTerms = ["gdpr", "hipaa", "soc 2", "iso 27001", "pci", "legal", "compliance", "certified", "certification", "retention", "delete", "personal data", "customer data"];
  const sourceSignals = countLandingTerms(lower, sourceTerms);
  const attachedSourceSignals = countLandingTerms(sourceLower, sourceTerms) + (cleanSources ? 2 : 0);
  const totalSourceSignals = sourceSignals + attachedSourceSignals;
  const riskSignals = countLandingTerms(lower, riskTerms);
  const complianceSignals = countLandingTerms(lower, complianceTerms);
  const unsupportedClaims = sentences.filter((sentence) => {
    const sentenceLower = sentence.toLowerCase();
    const hasClaim = riskTerms.some((term) => sentenceLower.includes(term)) || /\b(compliant|certified|secure|encrypted|trained|retained|deleted|guaranteed)\b/i.test(sentence);
    const hasSource = sourceTerms.some((term) => sentenceLower.includes(term)) || cleanSources;
    return hasClaim && !hasSource;
  });
  const unsupportedClaimWarnings = unsupportedClaims.map((claim) => `Unsupported claim: "${claim}." Attach evidence or soften the wording.`);
  const missingSourceWarnings = [];
  const clarityPenalty = words.length < 18 ? 18 : Math.max(0, Math.round(words.length / Math.max(sentences.length, 1)) - 28);
  const sourcePenalty = totalSourceSignals === 0 ? 22 : 0;
  const unsupportedPenalty = unsupportedClaims.length * 11;
  const riskPenalty = riskSignals * 10;
  const compliancePenalty = Math.max(0, complianceSignals - totalSourceSignals) * 8;
  const actionPenalty = /^(yes|no|we|our|the system|answerseal)\b/i.test(cleanAnswer) || /\b(should|review|approve|attach|recommend|next)\b/i.test(cleanAnswer) ? 0 : 12;
  const score = cleanAnswer ? Math.max(0, Math.min(100, 94 - clarityPenalty - sourcePenalty - unsupportedPenalty - riskPenalty - compliancePenalty - actionPenalty)) : 0;
  const status = !cleanAnswer ? "Ready" : score >= 86 ? "Sealed" : score >= 72 ? "Needs source" : score >= 58 ? "Needs review" : "High risk";
  const flags = [];
  const checks = [
    {
      title: "Factual risk",
      status: riskSignals === 0 ? "Pass" : "Review",
      detail: riskSignals === 0 ? "No absolute or guarantee-style language detected." : "Absolute wording should be reviewed before sharing.",
    },
    {
      title: "Missing sources",
      status: totalSourceSignals > 0 ? "Pass" : "Review",
      detail: totalSourceSignals > 0 ? "Evidence language or attached sources are present." : "No policy, report, citation, DPA, audit record, or approved source was attached.",
    },
    {
      title: "Unsupported claims",
      status: unsupportedClaims.length === 0 ? "Pass" : "Review",
      detail: unsupportedClaims.length === 0 ? "No obvious unsupported claims detected." : `${unsupportedClaims.length} claim${unsupportedClaims.length === 1 ? "" : "s"} need evidence or softer wording.`,
    },
    {
      title: "Clarity",
      status: words.length >= 18 && clarityPenalty < 12 ? "Pass" : "Review",
      detail: words.length < 18 ? "Answer may be too short for buyer-facing use." : "Answer length and sentence shape are usable.",
    },
    {
      title: "Compliance risk",
      status: complianceSignals <= totalSourceSignals ? "Pass" : "Review",
      detail: complianceSignals <= totalSourceSignals ? "Compliance-sensitive wording has some proof signal." : "Legal, privacy, certification, or customer-data claims need stronger proof.",
    },
    {
      title: "Actionability",
      status: actionPenalty === 0 ? "Pass" : "Review",
      detail: actionPenalty === 0 ? "The answer includes a decision or review action." : "Add a decision, next step, reviewer instruction, or approval route.",
    },
  ];

  if (!cleanAnswer) flags.push("Paste an AI-generated answer to verify it.");
  if (totalSourceSignals === 0) {
    const warning = "Missing source warning: attach a policy, report, citation, DPA, audit record, or approved answer.";
    flags.push(warning);
    missingSourceWarnings.push(warning);
  }
  if (complianceSignals > totalSourceSignals) {
    missingSourceWarnings.push("Compliance-sensitive claims need a named source before certification.");
  }
  if (unsupportedClaims.length > 0) flags.push(`Unsupported claim warning: ${unsupportedClaims.length} claim${unsupportedClaims.length === 1 ? "" : "s"} may need citation or softer wording.`);
  if (riskSignals > 0) flags.push("Factual risk flag: absolute or guarantee-style wording needs review.");
  if (complianceSignals > totalSourceSignals) flags.push("Compliance risk flag: legal, privacy, certification, or customer-data wording needs proof.");
  if (actionPenalty > 0) flags.push("Actionability warning: add a clear decision, next step, or reviewer instruction.");
  if (flags.length === 0) flags.push("No major risk flags detected in this quick trust check.");

  const improvedAnswer = cleanAnswer
    ? improveLandingAnswer(cleanAnswer, { sourceSignals: totalSourceSignals, unsupportedClaims: unsupportedClaims.length, riskSignals, complianceSignals, cleanPrompt, cleanSources })
    : "Paste an AI-generated answer, then run the verifier.";
  const summary = cleanAnswer
    ? `${status}: ${score}% trust score. ${flags[0]}`
    : "No sealed report yet. Paste an AI answer and verify it.";

  return {
    id: `seal-${Date.now()}`,
    build: PUBLIC_BUILD_VERSION,
    createdAt: new Date().toISOString(),
    prompt: cleanPrompt,
    answer: cleanAnswer,
    sources: cleanSources,
    score,
    status,
    flags,
    checks,
    missingSourceWarnings,
    unsupportedClaimWarnings,
    improvedAnswer,
    summary,
  };
}

function improveLandingAnswer(answer, context) {
  const additions = [];
  if (context.sourceSignals === 0) additions.push("Add a named source before sharing.");
  if (context.unsupportedClaims > 0 || context.riskSignals > 0) additions.push("Replace absolute language with evidence-backed wording.");
  if (context.complianceSignals > context.sourceSignals) additions.push("Route compliance-sensitive claims for review.");
  if (!/\b(review|approve|attach|source|policy|report|evidence)\b/i.test(answer)) additions.push("State the next review action.");
  if (additions.length === 0) return `${answer.trim()} This answer can be saved as a sealed report with the attached evidence.`;
  return `${answer.trim()} ${additions.join(" ")}`;
}

function countLandingTerms(text, terms) {
  return terms.reduce((sum, term) => sum + (text.includes(term) ? 1 : 0), 0);
}

function renderList(container, items) {
  if (!container) return;
  const visibleItems = items.length ? items : ["No warnings in this section."];
  visibleItems.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message;
    container.append(item);
  });
}

function renderCheckList(container, checks = []) {
  if (!container) return;
  checks.forEach((check) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${escapePublicHtml(check.title)}: ${escapePublicHtml(check.status)}</strong><span>${escapePublicHtml(check.detail)}</span>`;
    container.append(item);
  });
}

function readPublicReports() {
  const keys = [PUBLIC_REPORT_STORAGE_KEY, ...PUBLIC_LEGACY_REPORT_STORAGE_KEYS];
  const reports = [];
  const seen = new Set();

  keys.forEach((key) => {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || "[]");
      if (!Array.isArray(parsed)) return;
      parsed.forEach((report) => {
        const id = report.id || `${report.createdAt}-${report.prompt}`;
        if (seen.has(id)) return;
        seen.add(id);
        reports.push(report);
      });
    } catch (error) {
      // Ignore malformed local demo storage.
    }
  });

  return reports;
}

function readCurrentPublicReports() {
  try {
    return JSON.parse(localStorage.getItem(PUBLIC_REPORT_STORAGE_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function savePublicReport(report) {
  const saved = {
    ...report,
    id: `seal-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const reports = [saved, ...readCurrentPublicReports().filter((item) => item.id !== saved.id)].slice(0, 12);
  localStorage.setItem(PUBLIC_REPORT_STORAGE_KEY, JSON.stringify(reports));
  return saved;
}

function renderSavedReports() {
  if (!savedReportsList) return;
  const reports = readPublicReports();
  if (savedReportsCount) savedReportsCount.textContent = `${reports.length} saved`;
  savedReportsList.innerHTML = "";

  const visibleReports = reports.length
    ? reports
    : [
        {
          id: "sample-report",
          createdAt: new Date().toISOString(),
          prompt: "Can we use customer data to train AI models?",
          answer: "No. Customer content is not used to train foundation models or shared model providers.",
          score: 88,
          status: "Sealed",
          flags: ["No major risk flags detected in this quick trust check."],
          checks: [],
          sources: "AI Usage Standard - May 16; SOC 2 Type II Report",
          missingSourceWarnings: [],
          unsupportedClaimWarnings: [],
          improvedAnswer:
            "No. Customer content is not used to train foundation models or shared model providers. This answer can be saved as a sealed report with the attached evidence.",
          summary: "Sealed: 88% trust score. Ready to share with evidence attached.",
        },
      ];

  visibleReports.forEach((report) => {
    const card = document.createElement("article");
    card.className = "public-report-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(report.status)}</span>
        <strong>${escapePublicHtml(String(report.score))}%</strong>
      </header>
      <h3>${escapePublicHtml(report.prompt || "AI answer verification")}</h3>
      <p>${escapePublicHtml(report.summary)}</p>
      <small>${escapePublicHtml(formatReportTime(report.createdAt))}</small>
      <a href="${escapePublicHtml(getReportShareUrl(report, true))}">Open sealed report</a>
    `;
    savedReportsList.append(card);
  });
}

function renderArtifactRegistry() {
  if (!artifactRegistryList) return;
  const artifacts = buildArtifactRegistry();
  const promotedCount = artifacts.filter((artifact) => artifact.template === "Promoted").length;

  if (artifactRegistryCount) artifactRegistryCount.textContent = `${artifacts.length} artifacts`;
  if (registryTemplateCount) registryTemplateCount.textContent = `${promotedCount} promoted`;
  artifactRegistryList.innerHTML = "";

  artifacts.forEach((artifact) => {
    const card = document.createElement("article");
    card.className = "artifact-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(artifact.type)}</span>
        <strong>${escapePublicHtml(artifact.status)}</strong>
      </header>
      <h3>${escapePublicHtml(artifact.title)}</h3>
      <p>${escapePublicHtml(artifact.summary)}</p>
      <dl class="artifact-meta">
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(artifact.owner)}</dd>
        </div>
        <div>
          <dt>Version</dt>
          <dd>${escapePublicHtml(artifact.version)}</dd>
        </div>
        <div>
          <dt>Review</dt>
          <dd>${escapePublicHtml(artifact.review)}</dd>
        </div>
        <div>
          <dt>Template</dt>
          <dd>${escapePublicHtml(artifact.template)}</dd>
        </div>
      </dl>
      <a href="${escapePublicHtml(artifact.href)}">${escapePublicHtml(artifact.action)}</a>
    `;
    artifactRegistryList.append(card);
  });
}

function renderReviewLoop() {
  if (!reviewLoopList) return;
  const reviewItems = buildReviewLoopItems();
  const readyCount = reviewItems.filter((item) => item.decision === "Promote").length;

  if (reviewLoopCount) reviewLoopCount.textContent = `${reviewItems.length} review requests`;
  if (reviewPromotionStatus) {
    reviewPromotionStatus.textContent = `${readyCount} artifact${readyCount === 1 ? " is" : "s are"} ready for template promotion.`;
  }

  reviewLoopList.innerHTML = "";
  reviewItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(item.artifactType)}</span>
        <strong>${escapePublicHtml(item.state)}</strong>
      </header>
      <h3>${escapePublicHtml(item.title)}</h3>
      <p>${escapePublicHtml(item.note)}</p>
      <dl class="review-meta">
        <div>
          <dt>Reviewer</dt>
          <dd>${escapePublicHtml(item.reviewer)}</dd>
        </div>
        <div>
          <dt>Version</dt>
          <dd>${escapePublicHtml(item.version)}</dd>
        </div>
        <div>
          <dt>Risk move</dt>
          <dd>${escapePublicHtml(item.riskMove)}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>${escapePublicHtml(item.decision)}</dd>
        </div>
      </dl>
      <div class="diff-block" aria-label="Change comparison">
        <span>Before</span>
        <p>${escapePublicHtml(item.before)}</p>
        <span>After</span>
        <p>${escapePublicHtml(item.after)}</p>
      </div>
      <a href="${escapePublicHtml(item.href)}">${escapePublicHtml(item.action)}</a>
    `;
    reviewLoopList.append(card);
  });
}

function renderEvaluationBench() {
  if (!evaluationBenchList) return;
  const tests = buildEvaluationBenchItems();
  const passedCount = tests.filter((test) => test.result === "Pass").length;
  const readyScore = Math.round((passedCount / Math.max(tests.length, 1)) * 100);

  if (evaluationBenchScore) evaluationBenchScore.textContent = `${readyScore}% ready`;
  if (evaluationRegressionStatus) {
    evaluationRegressionStatus.textContent = `${tests.length - passedCount} test${tests.length - passedCount === 1 ? "" : "s"} still need review before promotion.`;
  }

  evaluationBenchList.innerHTML = "";
  tests.forEach((test) => {
    const card = document.createElement("article");
    card.className = "evaluation-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(test.type)}</span>
        <strong>${escapePublicHtml(test.result)}</strong>
      </header>
      <h3>${escapePublicHtml(test.title)}</h3>
      <p>${escapePublicHtml(test.summary)}</p>
      <dl class="evaluation-meta">
        <div>
          <dt>Baseline</dt>
          <dd>${escapePublicHtml(test.baseline)}</dd>
        </div>
        <div>
          <dt>Candidate</dt>
          <dd>${escapePublicHtml(test.candidate)}</dd>
        </div>
        <div>
          <dt>Risk</dt>
          <dd>${escapePublicHtml(test.risk)}</dd>
        </div>
        <div>
          <dt>Gate</dt>
          <dd>${escapePublicHtml(test.gate)}</dd>
        </div>
      </dl>
      <div class="evaluation-finding">
        <span>Finding</span>
        <p>${escapePublicHtml(test.finding)}</p>
      </div>
      <a href="${escapePublicHtml(test.href)}">${escapePublicHtml(test.action)}</a>
    `;
    evaluationBenchList.append(card);
  });
}

function renderConnectorLab() {
  if (!connectorLabList) return;
  const connectors = buildConnectorLabItems();
  const governedCount = connectors.filter((connector) => connector.status === "Approved").length;
  const readyScore = Math.round((governedCount / Math.max(connectors.length, 1)) * 100);

  if (connectorPolicyScore) connectorPolicyScore.textContent = `${readyScore}% governed`;
  if (connectorRoutingStatus) {
    const reviewCount = connectors.length - governedCount;
    connectorRoutingStatus.textContent = `${reviewCount} connector${reviewCount === 1 ? "" : "s"} still need policy review before automatic routing.`;
  }

  connectorLabList.innerHTML = "";
  connectors.forEach((connector) => {
    const card = document.createElement("article");
    card.className = "connector-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(connector.type)}</span>
        <strong>${escapePublicHtml(connector.status)}</strong>
      </header>
      <h3>${escapePublicHtml(connector.title)}</h3>
      <p>${escapePublicHtml(connector.summary)}</p>
      <dl class="connector-meta">
        <div>
          <dt>Model path</dt>
          <dd>${escapePublicHtml(connector.modelPath)}</dd>
        </div>
        <div>
          <dt>Policy</dt>
          <dd>${escapePublicHtml(connector.policy)}</dd>
        </div>
        <div>
          <dt>Bench gate</dt>
          <dd>${escapePublicHtml(connector.benchGate)}</dd>
        </div>
        <div>
          <dt>Reuse</dt>
          <dd>${escapePublicHtml(connector.reuse)}</dd>
        </div>
      </dl>
      <div class="connector-finding">
        <span>Routing rule</span>
        <p>${escapePublicHtml(connector.finding)}</p>
      </div>
      <a href="${escapePublicHtml(connector.href)}">${escapePublicHtml(connector.action)}</a>
    `;
    connectorLabList.append(card);
  });
}

function renderLearningSignalLoop() {
  if (!learningSignalList) return;
  const signals = buildLearningSignalItems();
  const approvedCount = signals.filter((signal) => signal.status === "Approved").length;
  const readyScore = Math.round((approvedCount / Math.max(signals.length, 1)) * 100);

  if (learningSignalScore) learningSignalScore.textContent = `${readyScore}% governed`;
  if (learningBoundaryStatus) {
    const reviewCount = signals.length - approvedCount;
    learningBoundaryStatus.textContent = `${reviewCount} learning signal${reviewCount === 1 ? "" : "s"} still need owner approval before behavior changes.`;
  }

  learningSignalList.innerHTML = "";
  signals.forEach((signal) => {
    const card = document.createElement("article");
    card.className = "learning-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(signal.type)}</span>
        <strong>${escapePublicHtml(signal.status)}</strong>
      </header>
      <h3>${escapePublicHtml(signal.title)}</h3>
      <p>${escapePublicHtml(signal.summary)}</p>
      <dl class="learning-meta">
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(signal.signal)}</dd>
        </div>
        <div>
          <dt>Proposal</dt>
          <dd>${escapePublicHtml(signal.proposal)}</dd>
        </div>
        <div>
          <dt>Boundary</dt>
          <dd>${escapePublicHtml(signal.boundary)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(signal.owner)}</dd>
        </div>
      </dl>
      <div class="learning-finding">
        <span>Rollback note</span>
        <p>${escapePublicHtml(signal.rollback)}</p>
      </div>
      <a href="${escapePublicHtml(signal.href)}">${escapePublicHtml(signal.action)}</a>
    `;
    learningSignalList.append(card);
  });
}

function renderPolicyGateway() {
  if (!policyGatewayList) return;
  const policies = buildPolicyGatewayItems();
  const allowedCount = policies.filter((policy) => policy.decision === "Allow").length;
  const watchCount = policies.length - allowedCount;
  const readyScore = Math.round((allowedCount / Math.max(policies.length, 1)) * 100);

  if (policyGatewayScore) policyGatewayScore.textContent = `${readyScore}% allowed`;
  if (policyDecisionStatus) {
    policyDecisionStatus.textContent = `${watchCount} policy path${watchCount === 1 ? "" : "s"} still need owner decision before use.`;
  }

  policyGatewayList.innerHTML = "";
  policies.forEach((policy) => {
    const card = document.createElement("article");
    card.className = "gateway-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(policy.type)}</span>
        <strong>${escapePublicHtml(policy.decision)}</strong>
      </header>
      <h3>${escapePublicHtml(policy.title)}</h3>
      <p>${escapePublicHtml(policy.summary)}</p>
      <dl class="gateway-meta">
        <div>
          <dt>Path</dt>
          <dd>${escapePublicHtml(policy.path)}</dd>
        </div>
        <div>
          <dt>Rule</dt>
          <dd>${escapePublicHtml(policy.rule)}</dd>
        </div>
        <div>
          <dt>Scope</dt>
          <dd>${escapePublicHtml(policy.scope)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(policy.owner)}</dd>
        </div>
      </dl>
      <div class="gateway-finding">
        <span>Enforcement</span>
        <p>${escapePublicHtml(policy.enforcement)}</p>
      </div>
      <a href="${escapePublicHtml(policy.href)}">${escapePublicHtml(policy.action)}</a>
    `;
    policyGatewayList.append(card);
  });
}

function renderBuyerTrustPortal() {
  if (!buyerPortalList) return;
  const packets = buildBuyerTrustPortalItems();
  const readyCount = packets.filter((packet) => packet.status === "Ready").length;
  const portalScore = Math.round((readyCount / Math.max(packets.length, 1)) * 100);
  const openActivityCount = packets.filter((packet) => packet.activity !== "Closed").length;

  if (buyerPortalScore) buyerPortalScore.textContent = `${portalScore}% buyer-ready`;
  if (buyerActivityStatus) {
    buyerActivityStatus.textContent = `${openActivityCount} buyer touchpoint${openActivityCount === 1 ? "" : "s"} still need a clean receipt or follow-up.`;
  }

  buyerPortalList.innerHTML = "";
  packets.forEach((packet) => {
    const card = document.createElement("article");
    card.className = "buyer-portal-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(packet.type)}</span>
        <strong>${escapePublicHtml(packet.status)}</strong>
      </header>
      <h3>${escapePublicHtml(packet.title)}</h3>
      <p>${escapePublicHtml(packet.summary)}</p>
      <dl class="buyer-portal-meta">
        <div>
          <dt>Access</dt>
          <dd>${escapePublicHtml(packet.access)}</dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd>${escapePublicHtml(packet.evidence)}</dd>
        </div>
        <div>
          <dt>Activity</dt>
          <dd>${escapePublicHtml(packet.activity)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(packet.owner)}</dd>
        </div>
      </dl>
      <div class="buyer-portal-receipt">
        <span>Buyer receipt</span>
        <p>${escapePublicHtml(packet.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(packet.href)}">${escapePublicHtml(packet.action)}</a>
    `;
    buyerPortalList.append(card);
  });
}

function renderProofConcierge() {
  if (!proofConciergeList) return;
  const concerns = buildProofConciergeItems();
  const closedCount = concerns.filter((concern) => concern.status === "Closed").length;
  const replyReadyCount = concerns.filter((concern) => concern.status === "Reply ready").length;
  const conciergeScore = Math.round(((closedCount + replyReadyCount) / Math.max(concerns.length, 1)) * 100);
  const openCount = concerns.length - closedCount;

  if (proofConciergeScore) proofConciergeScore.textContent = `${conciergeScore}% reply-ready`;
  if (proofConciergeStatus) {
    proofConciergeStatus.textContent = `${openCount} buyer concern${openCount === 1 ? "" : "s"} still need owner routing, safer reply copy, or proof closure.`;
  }

  proofConciergeList.innerHTML = "";
  concerns.forEach((concern) => {
    const card = document.createElement("article");
    card.className = "proof-concierge-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(concern.type)}</span>
        <strong>${escapePublicHtml(concern.status)}</strong>
      </header>
      <h3>${escapePublicHtml(concern.title)}</h3>
      <p>${escapePublicHtml(concern.summary)}</p>
      <dl class="proof-concierge-meta">
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(concern.owner)}</dd>
        </div>
        <div>
          <dt>Proof</dt>
          <dd>${escapePublicHtml(concern.evidence)}</dd>
        </div>
        <div>
          <dt>Policy</dt>
          <dd>${escapePublicHtml(concern.policy)}</dd>
        </div>
        <div>
          <dt>Next</dt>
          <dd>${escapePublicHtml(concern.nextAction)}</dd>
        </div>
      </dl>
      <div class="proof-concierge-reply">
        <span>Safe reply draft</span>
        <p>${escapePublicHtml(concern.replyDraft)}</p>
      </div>
      <div class="proof-concierge-learning">
        <span>Closed-loop learning</span>
        <p>${escapePublicHtml(concern.learning)}</p>
      </div>
      <a href="${escapePublicHtml(concern.href)}">${escapePublicHtml(concern.action)}</a>
    `;
    proofConciergeList.append(card);
  });
}

function renderProofLearningMemory() {
  if (!proofMemoryList) return;
  const patterns = buildProofLearningMemoryItems();
  const approvedCount = patterns.filter((pattern) => pattern.status === "Approved").length;
  const reviewCount = patterns.filter((pattern) => pattern.status === "Review").length;
  const memoryScore = Math.round((approvedCount / Math.max(patterns.length, 1)) * 100);

  if (proofMemoryScore) proofMemoryScore.textContent = `${memoryScore}% approved memory`;
  if (proofMemoryStatus) {
    proofMemoryStatus.textContent = `${reviewCount} proof pattern${reviewCount === 1 ? "" : "s"} still need owner approval before reuse.`;
  }

  proofMemoryList.innerHTML = "";
  patterns.forEach((pattern) => {
    const card = document.createElement("article");
    card.className = "proof-memory-card";
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(pattern.type)}</span>
        <strong>${escapePublicHtml(pattern.status)}</strong>
      </header>
      <h3>${escapePublicHtml(pattern.title)}</h3>
      <p>${escapePublicHtml(pattern.summary)}</p>
      <dl class="proof-memory-meta">
        <div>
          <dt>Boundary</dt>
          <dd>${escapePublicHtml(pattern.boundary)}</dd>
        </div>
        <div>
          <dt>Approval</dt>
          <dd>${escapePublicHtml(pattern.approval)}</dd>
        </div>
        <div>
          <dt>Reuse</dt>
          <dd>${escapePublicHtml(pattern.reuse)}</dd>
        </div>
        <div>
          <dt>Lift</dt>
          <dd>${escapePublicHtml(pattern.lift)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Learning rule</span>
        <p>${escapePublicHtml(pattern.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Memory receipt</span>
        <p>${escapePublicHtml(pattern.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(pattern.href)}">${escapePublicHtml(pattern.action)}</a>
    `;
    proofMemoryList.append(card);
  });
}

function buildArtifactRegistry() {
  const reports = readPublicReports();
  const reportArtifacts = reports.slice(0, 4).map((report, index) => ({
    type: "Sealed answer",
    status: report.status || "Review",
    title: report.prompt || "Verified AI answer",
    summary: report.summary || "Saved sealed report with prompt, answer, sources, and trust score.",
    owner: index % 2 === 0 ? "Security" : "Sales engineer",
    version: `v${index + 1}.0`,
    review: Number(report.score) >= 86 ? "Approved" : "Needs proof",
    template: Number(report.score) >= 86 ? "Promoted" : "Draft",
    href: getReportShareUrl(report, true),
    action: "Open sealed report",
  }));

  const seededArtifacts = [
    {
      type: "Prompt",
      status: "Approved",
      title: "Customer data training answer prompt",
      summary: "Reusable prompt that asks the model to answer only from approved AI usage and SOC 2 evidence.",
      owner: "AI governance",
      version: "v2.1",
      review: "Approved",
      template: "Promoted",
      href: "verify.html",
      action: "Verify answer",
    },
    {
      type: "Workflow",
      status: "Review",
      title: "Buyer security questionnaire response",
      summary: "Question intake, source matching, trust score, reviewer approval, and sealed report handoff.",
      owner: "Revenue security",
      version: "v1.4",
      review: "Owner gate",
      template: "Candidate",
      href: "reports.html",
      action: "Open reports",
    },
    {
      type: "Agent output",
      status: "Needs source",
      title: "Unsupported compliance claim detector",
      summary: "Agent-generated risk note that must attach a named policy before it can be reused.",
      owner: "Legal",
      version: "v0.8",
      review: "Needs evidence",
      template: "Blocked",
      href: "verify.html#risk-flag-engine",
      action: "Run trust check",
    },
  ];

  return [...reportArtifacts, ...seededArtifacts].slice(0, 7);
}

function buildEvaluationBenchItems() {
  const reports = readPublicReports();
  const reportTests = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const pass = score >= 86;
    return {
      type: "Sealed baseline",
      result: pass ? "Pass" : "Review",
      title: report.prompt || "Verified AI answer",
      summary: pass
        ? "Saved answer is strong enough to act as an evaluation baseline."
        : "Saved answer should not become a regression baseline until proof improves.",
      baseline: `${score}% sealed`,
      candidate: `v${index + 1}.1 test`,
      risk: pass ? "Low" : "Medium",
      gate: pass ? "Allow compare" : "Hold",
      finding: report.summary || "Use the sealed report score, source trail, and risk flags as the baseline.",
      href: getReportShareUrl(report, true),
      action: "Open baseline",
    };
  });

  const seededTests = [
    {
      type: "Hallucination challenge",
      result: "Pass",
      title: "Customer data training answer",
      summary: "Challenge absolute language and require the answer to stay inside named policy evidence.",
      baseline: "94% sealed",
      candidate: "Prompt v2.2",
      risk: "Low",
      gate: "Promote",
      finding: "Candidate preserved source-backed wording and did not add unsupported training claims.",
      href: "reviews.html",
      action: "Open review",
    },
    {
      type: "Model comparison",
      result: "Review",
      title: "SOC 2 control answer variant",
      summary: "Compare two candidate answers before one becomes reusable questionnaire language.",
      baseline: "88% sealed",
      candidate: "Model B draft",
      risk: "Medium",
      gate: "Needs source",
      finding: "Candidate is clearer but removed the SOC 2 report reference, so promotion is blocked.",
      href: "verify.html",
      action: "Run verifier",
    },
    {
      type: "Freshness check",
      result: "Pass",
      title: "AI usage standard source posture",
      summary: "Confirm the source is current enough to support answer reuse across teams.",
      baseline: "May 16 source",
      candidate: "Current policy note",
      risk: "Low",
      gate: "Allow reuse",
      finding: "Source freshness supports template reuse with the owner receipt attached.",
      href: "registry.html",
      action: "Open registry",
    },
    {
      type: "Regression gate",
      result: "Blocked",
      title: "Overconfident security claim",
      summary: "Prevent a newer answer from replacing the sealed baseline when it increases risk.",
      baseline: "Sealed answer",
      candidate: "Guarantee wording",
      risk: "High",
      gate: "Block",
      finding: "Candidate used guarantee-style language and should be routed back to review.",
      href: "reviews.html",
      action: "Open reviews",
    },
  ];

  return [...reportTests, ...seededTests].slice(0, 7);
}

function buildConnectorLabItems() {
  const reports = readPublicReports();
  const reportConnectors = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const approved = score >= 86;
    return {
      type: "Sealed report source",
      status: approved ? "Approved" : "Review",
      title: report.prompt || "Verified answer baseline",
      summary: "Saved report can act as a connector baseline when the source trail remains attached.",
      modelPath: `Report memory v${index + 1}`,
      policy: approved ? "Evidence required" : "Owner review",
      benchGate: approved ? "Compare allowed" : "Bench first",
      reuse: approved ? "Template candidate" : "Hold",
      finding: report.summary || "Route saved report memory into verification before it becomes reusable prompt context.",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededConnectors = [
    {
      type: "Model connector",
      status: "Approved",
      title: "Answer verifier model path",
      summary: "Primary reasoning path for checking pasted AI answers before a team trusts or shares them.",
      modelPath: "Reasoning model",
      policy: "No source, no answer",
      benchGate: "Required",
      reuse: "Allowed after seal",
      finding: "Every output must return score, flags, missing sources, unsupported claims, and an improved answer.",
      href: "verify.html",
      action: "Run verifier",
    },
    {
      type: "Private connector",
      status: "Review",
      title: "Sensitive workspace model path",
      summary: "Private deployment path for regulated teams that need stricter data boundaries.",
      modelPath: "Private endpoint",
      policy: "Data boundary review",
      benchGate: "Required",
      reuse: "Limited",
      finding: "Sensitive prompts can route here only after workspace policy, source handling, and reviewer approval are attached.",
      href: "reviews.html",
      action: "Open reviews",
    },
    {
      type: "Retrieval connector",
      status: "Approved",
      title: "Evidence vault retrieval path",
      summary: "Approved policies, SOC reports, DPAs, and sealed reports become the source layer for verification.",
      modelPath: "Evidence retrieval",
      policy: "Fresh source required",
      benchGate: "Freshness check",
      reuse: "Allowed",
      finding: "Answers can cite this connector only when source freshness, owner, and coverage are visible.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      type: "Agent connector",
      status: "Blocked",
      title: "Autonomous answer publisher",
      summary: "Agent output cannot publish buyer-facing answers without human review and a sealed report.",
      modelPath: "Agent workflow",
      policy: "Human approval",
      benchGate: "Regression gate",
      reuse: "Blocked",
      finding: "Automatic publishing stays blocked until the candidate beats the sealed baseline and a reviewer approves it.",
      href: "registry.html",
      action: "Open registry",
    },
  ];

  return [...reportConnectors, ...seededConnectors].slice(0, 6);
}

function buildLearningSignalItems() {
  const reports = readPublicReports();
  const reportSignals = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const approved = score >= 90;
    return {
      type: "Sealed report outcome",
      status: approved ? "Approved" : "Review",
      title: report.prompt || "Verified answer outcome",
      summary: "Saved sealed report can become a learning signal only after outcome, boundary, and owner receipt are attached.",
      signal: `${score}% trust score`,
      proposal: approved ? "Promote answer pattern" : "Hold for more evidence",
      boundary: "Org-private",
      owner: index % 2 === 0 ? "AI governance" : "Security",
      rollback: report.summary || "Keep the sealed baseline unchanged until a reviewer approves the proposed learning change.",
      href: getReportShareUrl(report, true),
      action: "Open signal source",
    };
  });

  const seededSignals = [
    {
      type: "Buyer outcome",
      status: "Approved",
      title: "Buyer accepted sourced AI usage answer",
      summary: "The approved wording helped the review move forward without a follow-up evidence request.",
      signal: "Accepted without objection",
      proposal: "Promote phrase",
      boundary: "Org-private",
      owner: "Revenue security",
      rollback: "Keep the prior sealed wording as fallback if the promoted phrase reduces source confidence.",
      href: "reports.html",
      action: "Open reports",
    },
    {
      type: "Reviewer edit",
      status: "Review",
      title: "Security reviewer tightened a compliance claim",
      summary: "The edit is useful, but it must be approved before prompts or connector rules learn from it.",
      signal: "Manual correction",
      proposal: "Tighten prompt rule",
      boundary: "Evidence only",
      owner: "Security",
      rollback: "Restore the previous prompt rule if the next evaluation bench detects weaker clarity.",
      href: "reviews.html",
      action: "Open reviews",
    },
    {
      type: "Connector result",
      status: "Approved",
      title: "Evidence retrieval path reduced unsupported claims",
      summary: "Connector routing improved source coverage while keeping customer data out of shared learning.",
      signal: "Risk reduction",
      proposal: "Prefer retrieval path",
      boundary: "No customer data",
      owner: "AI governance",
      rollback: "Fallback to the baseline verifier model path if retrieval freshness drops below policy.",
      href: "connectors.html",
      action: "Open connectors",
    },
    {
      type: "Network pattern",
      status: "Blocked",
      title: "Cross-account benchmark needs privacy review",
      summary: "Aggregate patterns can help every workspace, but this signal cannot move until tenant boundaries are proven.",
      signal: "Shared pattern",
      proposal: "Publish benchmark",
      boundary: "Needs privacy review",
      owner: "Data protection",
      rollback: "Do not expose the pattern outside the source workspace until aggregation rules are approved.",
      href: "evaluation.html",
      action: "Open bench",
    },
  ];

  return [...reportSignals, ...seededSignals].slice(0, 7);
}

function buildPolicyGatewayItems() {
  const reports = readPublicReports();
  const reportPolicies = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const decision = score >= 90 ? "Allow" : score >= 75 ? "Hold" : "Block";
    return {
      type: "Sealed report policy",
      decision,
      title: report.prompt || "Verified AI answer",
      summary: "Saved answer can travel only when the trust score, sources, and reviewer receipt match policy.",
      path: `Report memory v${index + 1}`,
      rule: decision === "Allow" ? "Evidence attached" : decision === "Hold" ? "Owner review" : "No external use",
      scope: "Buyer-facing answer",
      owner: decision === "Allow" ? "Revenue security" : "AI governance",
      enforcement: report.summary || "Keep the answer local until the source trail and decision receipt are complete.",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededPolicies = [
    {
      type: "Answer release",
      decision: "Allow",
      title: "Buyer-facing answer release",
      summary: "A verified answer can be reused when proof, score, improved wording, and report receipt are visible.",
      path: "Answer verifier",
      rule: "No source, no answer",
      scope: "Buyer portal text",
      owner: "Revenue security",
      enforcement: "Every copied answer needs score, sources, improved wording, and a sealed report.",
      href: "verify.html",
      action: "Verify answer",
    },
    {
      type: "Learning boundary",
      decision: "Hold",
      title: "Cross-workspace learning signal",
      summary: "Network learning is valuable, but it must be aggregated and approved before helping other workspaces.",
      path: "Learning loop",
      rule: "Aggregate only",
      scope: "Network benchmark",
      owner: "Data protection",
      enforcement: "Org-private signals cannot be shared until privacy-safe aggregation and owner approval are attached.",
      href: "learning.html",
      action: "Open learning",
    },
    {
      type: "Model route",
      decision: "Allow",
      title: "Private model connector route",
      summary: "Sensitive work can use a private endpoint when route policy, source handling, and bench gates are visible.",
      path: "Private endpoint",
      rule: "Sensitive data boundary",
      scope: "Regulated workspace",
      owner: "Security",
      enforcement: "Route only when workspace policy, source handling, and bench gate are visible.",
      href: "connectors.html",
      action: "Open connectors",
    },
    {
      type: "Agent action",
      decision: "Block",
      title: "Autonomous answer publisher",
      summary: "Agents may draft and prepare receipts, but external submission stays blocked without human approval.",
      path: "Agent workflow",
      rule: "Human approval required",
      scope: "External submission",
      owner: "AI governance",
      enforcement: "Agent may draft, but cannot publish buyer-facing answers without reviewer seal.",
      href: "reviews.html",
      action: "Open reviews",
    },
    {
      type: "Environment rule",
      decision: "Hold",
      title: "Multi-country rollout rule",
      summary: "Global launches need country, residency, privacy, and learning boundaries before rollout expands.",
      path: "Environment gateway",
      rule: "Country override",
      scope: "UAE, US, EU pilots",
      owner: "Operations",
      enforcement: "Launch only when residency, privacy, export, and learning-boundary rules are mapped.",
      href: "versions.html",
      action: "Open build phases",
    },
  ];

  return [...reportPolicies, ...seededPolicies].slice(0, 7);
}

function buildBuyerTrustPortalItems() {
  const reports = readPublicReports();
  const reportPackets = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      type: "Sealed answer packet",
      status: ready ? "Ready" : "Review",
      title: report.prompt || "Verified AI answer",
      summary: "Buyer-safe packet with score, source summary, improved wording, and reuse decision.",
      access: ready ? "Sealed report" : "Summary only",
      evidence: report.sources || "Attached sources",
      activity: ready ? "Viewed" : "Needs owner note",
      owner: index % 2 === 0 ? "Revenue security" : "Sales engineer",
      receipt: report.summary || "Attach a buyer-safe summary before sending the packet outside the workspace.",
      href: getReportShareUrl(report, true),
      action: "Open sealed packet",
    };
  });

  const seededPackets = [
    {
      type: "Buyer room",
      status: "Ready",
      title: "Aster Health security review room",
      summary: "One quiet room for the buyer to inspect sealed AI answers, policy decisions, and approved source summaries.",
      access: "Scoped link",
      evidence: "6 source summaries",
      activity: "2 buyer views",
      owner: "Revenue security",
      receipt: "Buyer saw the AI usage answer, SOC 2 summary, policy gateway decision, and next evidence owner.",
      href: "report.html",
      action: "Open sample packet",
    },
    {
      type: "Trust packet",
      status: "Ready",
      title: "Customer data training answer packet",
      summary: "Approved answer, source titles, policy decision, and reviewer note packaged for enterprise review.",
      access: "Sealed report",
      evidence: "AI Usage Standard",
      activity: "Question answered",
      owner: "AI governance",
      receipt: "Packet can be shared because the answer is evidence-backed, policy-allowed, and human-reviewed.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      type: "Evidence access",
      status: "Hold",
      title: "SOC 2 report excerpt request",
      summary: "Buyer wants more proof, but full evidence access must stay scoped to approved excerpts.",
      access: "Excerpt only",
      evidence: "SOC 2 Type II",
      activity: "Follow-up open",
      owner: "Security",
      receipt: "Share the control summary and sealed answer first; hold full report access until NDA and owner approval.",
      href: "reports.html",
      action: "Open reports",
    },
    {
      type: "Portal policy",
      status: "Ready",
      title: "Buyer activity receipt",
      summary: "Portal activity becomes a clean follow-up signal without exposing private workspace notes.",
      access: "Activity summary",
      evidence: "Policy receipt",
      activity: "Closed",
      owner: "Sales engineer",
      receipt: "Buyer viewed the packet, no sensitive notes were exposed, and the follow-up was routed internally.",
      href: "learning.html",
      action: "Open learning",
    },
    {
      type: "Access boundary",
      status: "Review",
      title: "EU buyer source-room policy",
      summary: "Country-specific buyer rooms need residency, export, and evidence-access rules before launch.",
      access: "Region gated",
      evidence: "Policy map",
      activity: "Owner review",
      owner: "Operations",
      receipt: "Keep the room internal until region policy, data boundary, and buyer export scope are approved.",
      href: "versions.html",
      action: "Open build phases",
    },
  ];

  return [...reportPackets, ...seededPackets].slice(0, 8);
}

function buildProofConciergeItems() {
  const reports = readPublicReports();
  const reportConcerns = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      type: "Saved report concern",
      status: ready ? "Reply ready" : "Owner review",
      title: report.prompt || "Buyer asked for proof behind a verified answer",
      summary: "Saved answer can become a buyer follow-up only after the source, owner, and safe reply are attached.",
      owner: index % 2 === 0 ? "Revenue security" : "AI governance",
      evidence: report.sources || "Attached sources",
      policy: ready ? "Share sealed report" : "Hold for reviewer note",
      nextAction: ready ? "Send reply" : "Route owner",
      replyDraft: ready
        ? report.improvedAnswer || report.summary || "Share the sealed answer with source names and a short reviewer note."
        : "Thanks for the follow-up. We are confirming the evidence owner and will respond with a source-backed answer.",
      learning: ready
        ? "Promote this concern as a reusable buyer proof pattern after the reply is accepted."
        : "Do not promote the pattern until the owner confirms the missing proof.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededConcerns = [
    {
      type: "Buyer follow-up",
      status: "Reply ready",
      title: "Can you prove customer data is not used for model training?",
      summary: "Buyer needs a concise answer that cites the AI Usage Standard without exposing internal review notes.",
      owner: "AI governance",
      evidence: "AI Usage Standard",
      policy: "Summary allowed",
      nextAction: "Send reply",
      replyDraft:
        "No. Customer content is not used to train foundation models or shared model providers. This response is supported by the AI Usage Standard and can be shared with the sealed report summary.",
      learning: "If accepted, add this as the default proof pattern for model-training questions.",
      href: "buyer.html",
      action: "Open buyer packet",
    },
    {
      type: "Evidence request",
      status: "Owner routed",
      title: "Buyer requested the latest SOC 2 control evidence.",
      summary: "The request is legitimate, but the full report requires NDA status and security-owner approval.",
      owner: "Security",
      evidence: "SOC 2 Type II",
      policy: "Excerpt only",
      nextAction: "Approve excerpt",
      replyDraft:
        "We can share a buyer-safe SOC 2 summary now and route the full report through the approved NDA and security review path.",
      learning: "Track whether excerpt-first replies reduce full-report requests before broader promotion.",
      href: "policy.html",
      action: "Open policy gateway",
    },
    {
      type: "Regional concern",
      status: "Owner review",
      title: "EU buyer asked where AI answer evidence is processed.",
      summary: "The buyer needs a region-safe explanation before source excerpts are released outside the workspace.",
      owner: "Operations",
      evidence: "Region policy map",
      policy: "Region gated",
      nextAction: "Confirm boundary",
      replyDraft:
        "We are confirming the approved regional processing boundary and will respond with the source names, evidence level, and access conditions.",
      learning: "Do not reuse the reply globally until regional policy approves the wording.",
      href: "versions.html",
      action: "Open build phases",
    },
    {
      type: "Procurement comment",
      status: "Reply ready",
      title: "Buyer wants portal-ready copy for a questionnaire field.",
      summary: "The answer is already sealed; the concierge converts it into concise copy for procurement portals.",
      owner: "Sales engineer",
      evidence: "Sealed report",
      policy: "Portal copy allowed",
      nextAction: "Copy reply",
      replyDraft:
        "Customer data is not used for model training. The answer is supported by our AI Usage Standard and SOC 2 evidence summary, with human approval before release.",
      learning: "Store the shorter copy as a reusable portal variant once the buyer accepts it.",
      href: "verify.html",
      action: "Verify answer",
    },
    {
      type: "Closed proof",
      status: "Closed",
      title: "Buyer accepted the AI usage proof packet.",
      summary: "The concern moved from request to owner-approved reply to reusable proof pattern.",
      owner: "Revenue security",
      evidence: "AI Usage Standard",
      policy: "Approved pattern",
      nextAction: "Promote pattern",
      replyDraft:
        "The buyer accepted the sealed packet. The approved wording can become the default answer for similar model-training questions.",
      learning: "Promote only the generalized pattern; keep buyer-specific notes private.",
      href: "learning.html",
      action: "Open learning loop",
    },
  ];

  return [...reportConcerns, ...seededConcerns].slice(0, 8);
}

function buildProofLearningMemoryItems() {
  const reports = readPublicReports();
  const reportPatterns = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const approved = score >= 90;
    return {
      type: "Saved proof pattern",
      status: approved ? "Approved" : "Review",
      title: report.prompt || "Verified AI answer pattern",
      summary: "Saved sealed report can become reusable memory only after the exact buyer context is stripped out.",
      boundary: "Tenant-local exact",
      approval: approved ? "Owner approved" : "Owner needed",
      reuse: approved ? "Template draft" : "Hold",
      lift: approved ? "Faster answer" : "Unknown",
      rule: approved
        ? "Promote the generalized proof pattern, not the buyer-specific wording, files, or portal activity."
        : "Keep this report local until a reviewer confirms the source quality and reusable wording.",
      receipt: report.summary || "Memory waits for approval because reusable proof must be source-backed and customer-safe.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededPatterns = [
    {
      type: "Accepted pattern",
      status: "Approved",
      title: "Model-training answer proof pattern",
      summary: "Accepted buyer reply becomes the default proof pattern for customer-data training questions.",
      boundary: "Generalized only",
      approval: "AI governance",
      reuse: "Default answer",
      lift: "5x faster",
      rule: "Reuse the source-backed structure and policy citation; never reuse buyer names, portal notes, or private objections.",
      receipt: "Pattern promoted after buyer acceptance, owner approval, and policy confirmation.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      type: "Excerpt pattern",
      status: "Review",
      title: "SOC 2 excerpt-first response",
      summary: "Security wants to test whether excerpt-first replies reduce full-report requests without over-sharing.",
      boundary: "Security review",
      approval: "Security owner",
      reuse: "Pilot only",
      lift: "Needs data",
      rule: "The pattern cannot become default until the owner confirms which excerpt language is buyer-safe.",
      receipt: "Review remains open because source access level and NDA conditions still matter.",
      href: "policy.html",
      action: "Open policy gateway",
    },
    {
      type: "Regional memory",
      status: "Review",
      title: "EU evidence-processing boundary",
      summary: "Regional replies need an approved country boundary before they can help future buyer rooms.",
      boundary: "Region-gated",
      approval: "Operations",
      reuse: "EU only",
      lift: "Risk reduction",
      rule: "Reuse only within the approved region until residency, export, and evidence-access rules are confirmed.",
      receipt: "Memory stays scoped because geographic rules can change the safe answer.",
      href: "versions.html",
      action: "Open build phases",
    },
    {
      type: "Portal wording",
      status: "Approved",
      title: "Short procurement-field answer",
      summary: "Accepted short-form copy becomes a reusable portal variant for questionnaire fields.",
      boundary: "No buyer data",
      approval: "Sales engineering",
      reuse: "Portal template",
      lift: "Less rewrite",
      rule: "Reuse the compact answer format only when the same source names and policy decision are still current.",
      receipt: "Pattern approved because it preserves source names, human review, and concise buyer language.",
      href: "verify.html",
      action: "Verify answer",
    },
    {
      type: "Quarantine",
      status: "Blocked",
      title: "Legacy service-improvement claim",
      summary: "Old wording sounds helpful but could imply training or analytics use beyond approved policy.",
      boundary: "Do not learn",
      approval: "Blocked",
      reuse: "Never",
      lift: "Risk avoided",
      rule: "Do not promote ambiguous legacy claims into shared memory, even if they once answered a buyer quickly.",
      receipt: "Pattern blocked because safe learning must penalize speed when proof quality is weak.",
      href: "learning.html",
      action: "Open learning loop",
    },
  ];

  return [...reportPatterns, ...seededPatterns].slice(0, 8);
}

function renderTenantSafeProofNetwork() {
  if (!proofNetworkList) return;
  const signals = buildTenantSafeProofNetworkItems();
  const readyCount = signals.filter((signal) => signal.status === "Network-ready").length;
  const reviewCount = signals.filter((signal) => signal.status === "Review").length;
  const blockedCount = signals.filter((signal) => signal.status === "Blocked").length;
  const networkScore = Math.round((readyCount / Math.max(signals.length, 1)) * 100);

  if (proofNetworkScore) proofNetworkScore.textContent = `${networkScore}% network-safe`;
  if (proofNetworkStatus) {
    proofNetworkStatus.textContent = `${readyCount} signal${readyCount === 1 ? "" : "s"} can help other workspaces; ${reviewCount + blockedCount} stay held behind privacy gates.`;
  }

  proofNetworkList.innerHTML = "";
  signals.forEach((signal) => {
    const card = document.createElement("article");
    card.className = `proof-memory-card proof-network-card ${signal.status === "Network-ready" ? "is-ready" : signal.status === "Blocked" ? "is-blocked" : "is-review"}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(signal.type)}</span>
        <strong>${escapePublicHtml(signal.status)}</strong>
      </header>
      <h3>${escapePublicHtml(signal.title)}</h3>
      <p>${escapePublicHtml(signal.summary)}</p>
      <dl class="proof-memory-meta proof-network-meta">
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(signal.signal)}</dd>
        </div>
        <div>
          <dt>Privacy</dt>
          <dd>${escapePublicHtml(signal.privacy)}</dd>
        </div>
        <div>
          <dt>Approval</dt>
          <dd>${escapePublicHtml(signal.approval)}</dd>
        </div>
        <div>
          <dt>Benefit</dt>
          <dd>${escapePublicHtml(signal.benefit)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Network rule</span>
        <p>${escapePublicHtml(signal.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Network receipt</span>
        <p>${escapePublicHtml(signal.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(signal.href)}">${escapePublicHtml(signal.action)}</a>
    `;
    proofNetworkList.append(card);
  });
}

function buildTenantSafeProofNetworkItems() {
  const reports = readPublicReports();
  const reportSignals = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 92;
    const review = score >= 82 && score < 92;
    return {
      type: "Report-derived signal",
      status: ready ? "Network-ready" : review ? "Review" : "Local only",
      title: report.prompt || "Verified answer pattern",
      summary: "A saved sealed report can contribute only an abstract proof pattern after private context is removed.",
      signal: ready ? "Proof class + outcome band" : "Tenant-local answer memory",
      privacy: "No raw answer",
      approval: ready ? "Policy approved" : "Owner review",
      benefit: ready ? "Faster future matching" : "No shared lift yet",
      rule: ready
        ? "Share only the proof category, freshness band, risk class, and accepted outcome; keep the exact answer, files, buyer, and account notes private."
        : "Keep this report inside the tenant until score, source coverage, and reviewer approval meet the network threshold.",
      receipt: report.summary || "Network promotion waits for a safe abstraction receipt.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededSignals = [
    {
      type: "Approved aggregate",
      status: "Network-ready",
      title: "AI training data answer pattern",
      summary: "Multiple teams can benefit from the pattern that customers ask whether their content trains AI models.",
      signal: "Question class",
      privacy: "No tenant text",
      approval: "AI governance",
      benefit: "Reuse lift",
      rule: "The network may remember the question category, proof type, and accepted answer structure, but not the exact customer wording.",
      receipt: "Approved because the signal contains no buyer names, no documents, no account notes, and no proprietary answer text.",
      href: "memory.html",
      action: "Open memory",
    },
    {
      type: "Freshness signal",
      status: "Network-ready",
      title: "SOC 2 freshness reduces security review friction",
      summary: "The network can learn that fresh SOC 2 evidence often improves buyer confidence without sharing reports.",
      signal: "Freshness band",
      privacy: "Report hidden",
      approval: "Security",
      benefit: "Lower objection rate",
      rule: "Share only the evidence type and freshness band; never share the report, auditor text, control details, or customer-specific usage.",
      receipt: "Safe signal approved from abstract source metadata and buyer outcome class.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      type: "Policy gate",
      status: "Review",
      title: "Regional data-boundary proof pattern",
      summary: "EU buyer answers may help similar regional reviews, but country rules need explicit policy approval first.",
      signal: "Region class",
      privacy: "Country gated",
      approval: "Legal review",
      benefit: "Risk control",
      rule: "Do not make regional proof patterns network-visible until country scope, residency assumptions, and source access rules are approved.",
      receipt: "Held because a regional pattern can become unsafe if generalized too broadly.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      type: "Firewall block",
      status: "Blocked",
      title: "Raw buyer objection text",
      summary: "Buyer objections are valuable locally, but raw text can contain private strategy, names, and deal context.",
      signal: "None",
      privacy: "Blocked raw data",
      approval: "Not allowed",
      benefit: "Trust preserved",
      rule: "Never share buyer names, raw portal comments, contract terms, uploaded files, prompts, or exact answers across tenants.",
      receipt: "Blocked by default because network learning must earn trust before it earns scale.",
      href: "buyer.html",
      action: "Open buyer portal",
    },
    {
      type: "Outcome band",
      status: "Network-ready",
      title: "Accepted proof packet outcome",
      summary: "A positive buyer outcome can improve future recommendations when reduced to a safe outcome band.",
      signal: "Accepted outcome",
      privacy: "Abstract only",
      approval: "Revenue security",
      benefit: "Better recommendations",
      rule: "Share the outcome label and proof category only after the response is accepted, approved, and stripped of tenant details.",
      receipt: "Network receipt keeps the benefit auditable without exposing the original deal.",
      href: "concierge.html",
      action: "Open concierge",
    },
  ];

  return [...reportSignals, ...seededSignals].slice(0, 8);
}

function renderNetworkBenefitLedger() {
  if (!proofBenefitList) return;
  const entries = buildNetworkBenefitLedgerItems();
  const creditedCount = entries.filter((entry) => entry.status === "Credited").length;
  const watchCount = entries.filter((entry) => entry.status === "Watch").length;
  const heldCount = entries.filter((entry) => entry.status === "Held" || entry.status === "Blocked").length;
  const score = Math.round(((creditedCount * 100) + (watchCount * 54)) / Math.max(entries.length, 1));

  if (proofBenefitScore) proofBenefitScore.textContent = `${score}% accountable lift`;
  if (proofBenefitStatus) {
    proofBenefitStatus.textContent = `${creditedCount} benefit receipt${creditedCount === 1 ? "" : "s"} credited; ${heldCount} signal${heldCount === 1 ? "" : "s"} stayed gated or blocked.`;
  }

  proofBenefitList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = `proof-memory-card proof-benefit-card ${entry.status === "Credited" ? "is-credited" : entry.status === "Blocked" ? "is-blocked" : entry.status === "Held" ? "is-held" : "is-watch"}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.type)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-benefit-meta">
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(entry.signal)}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>${escapePublicHtml(entry.outcome)}</dd>
        </div>
        <div>
          <dt>Control</dt>
          <dd>${escapePublicHtml(entry.control)}</dd>
        </div>
        <div>
          <dt>Value</dt>
          <dd>${escapePublicHtml(entry.value)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Ledger rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Benefit receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    proofBenefitList.append(card);
  });
}

function buildNetworkBenefitLedgerItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const credited = score >= 92;
    const watch = score >= 84 && score < 92;
    return {
      type: "Saved report receipt",
      status: credited ? "Credited" : watch ? "Watch" : "Held",
      title: report.prompt || "Verified answer benefit candidate",
      summary: "Saved sealed reports can become benefit evidence only when the network signal improves a future review without exposing tenant context.",
      signal: credited ? "Proof class reused" : "Local evidence",
      outcome: credited ? "Reduced review time" : "Needs more data",
      control: credited ? "Tenant opt-in" : "Tenant-local",
      value: credited ? "Reusable lift" : "Uncredited",
      rule: credited
        ? "Credit the abstract signal only after a future answer improves without adding risk flags or leaking source text."
        : "Keep this receipt uncredited until the signal has enough approved proof, review outcome, and tenant control.",
      receipt: report.summary || "Benefit ledger waits for measurable reuse, not just a high trust score.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      type: "Benefit receipt",
      status: "Credited",
      title: "AI training answer pattern shortened second review.",
      summary: "A safe question-class signal helped a later workspace draft a source-backed answer faster without seeing the original buyer text.",
      signal: "Question class",
      outcome: "42 min saved",
      control: "Opt-in",
      value: "High",
      rule: "Credit network benefit only when the receiving workspace keeps its own evidence attached and no new risk flags appear.",
      receipt: "Credited because the signal reused only category, proof type, freshness band, and accepted outcome.",
      href: "network.html",
      action: "Open network",
    },
    {
      type: "Negative feedback",
      status: "Watch",
      title: "SOC 2 freshness signal helped, but wording still needed review.",
      summary: "The signal reduced source search time, yet the suggested answer needed security wording review before reuse.",
      signal: "Freshness band",
      outcome: "Review required",
      control: "Owner gate",
      value: "Medium",
      rule: "A signal can earn partial benefit while still lowering its automation weight when a reviewer changes the answer.",
      receipt: "Kept on watch because speed improved, but human edits were required before release.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      type: "Tenant control",
      status: "Credited",
      title: "Workspace limited network influence to approved proof classes.",
      summary: "The tenant allowed AI usage and SOC 2 proof patterns, while blocking regional and contract-sensitive signals.",
      signal: "Allowed classes",
      outcome: "Clean recommendations",
      control: "Tenant policy",
      value: "Governance",
      rule: "Each tenant must decide which approved signal classes can influence recommendations, defaults, and draft ordering.",
      receipt: "Credited because the workspace kept control over network influence instead of accepting every shared pattern.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      type: "Blocked benefit",
      status: "Blocked",
      title: "Raw buyer objection would have improved matching but failed privacy.",
      summary: "The exact text contained private deal context, so it produced no network credit even though it was useful locally.",
      signal: "Raw text",
      outcome: "No credit",
      control: "Firewall",
      value: "Risk avoided",
      rule: "Never credit a benefit that depends on raw buyer text, exact answer wording, documents, prompts, contracts, or account context.",
      receipt: "Blocked because preserving trust matters more than maximizing short-term model lift.",
      href: "buyer.html",
      action: "Open buyer portal",
    },
    {
      type: "Held receipt",
      status: "Held",
      title: "Regional proof pattern needs country-level validation.",
      summary: "The pattern might help EU reviews, but the ledger holds credit until residency and export assumptions are approved.",
      signal: "Region class",
      outcome: "Pending",
      control: "Legal gate",
      value: "Deferred",
      rule: "Do not credit regional benefit until the safe signal is validated for the receiving country and evidence policy.",
      receipt: "Held so shared learning does not outrun local regulation or buyer-specific evidence rights.",
      href: "versions.html",
      action: "Open build phases",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function buildReviewLoopItems() {
  const reports = readPublicReports();
  const reportItems = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      artifactType: "Sealed answer",
      state: ready ? "Approved" : "Review",
      title: report.prompt || "Verified AI answer",
      note: ready
        ? "Source-backed answer is ready for template promotion after receipt capture."
        : "Answer needs one more owner review before it becomes reusable knowledge.",
      reviewer: index % 2 === 0 ? "AI governance" : "Security",
      version: `v${index + 2}.1 -> v${index + 2}.2`,
      riskMove: ready ? "Review to low" : "Medium to review",
      decision: ready ? "Promote" : "Hold",
      before: report.answer || "Previous answer did not include enough review context.",
      after: report.improvedAnswer || report.summary || "Improved answer keeps the source and review note attached.",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededItems = [
    {
      artifactType: "Prompt",
      state: "Approved",
      title: "Customer data training answer prompt",
      note: "Prompt version now requires named sources and a reviewer note before output reuse.",
      reviewer: "AI governance",
      version: "v2.1 -> v2.2",
      riskMove: "Medium to low",
      decision: "Promote",
      before: "Answer from approved context.",
      after: "Answer only from attached AI Usage Standard, SOC 2 report, and reviewer-approved source notes.",
      href: "registry.html",
      action: "Open registry",
    },
    {
      artifactType: "Workflow",
      state: "Owner gate",
      title: "Buyer security questionnaire workflow",
      note: "Workflow added legal approval before compliance-sensitive answers can be copied into a buyer portal.",
      reviewer: "Legal",
      version: "v1.4 -> v1.5",
      riskMove: "High to medium",
      decision: "Route",
      before: "Reviewer approves answer after source match.",
      after: "Security approves source match, legal approves compliance wording, then portal copy is enabled.",
      href: "reports.html",
      action: "Open reports",
    },
    {
      artifactType: "Agent output",
      state: "Needs source",
      title: "Unsupported claim detector",
      note: "Agent output cannot become reusable until a named policy source is attached.",
      reviewer: "Security",
      version: "v0.8 -> v0.9",
      riskMove: "Blocked to review",
      decision: "Hold",
      before: "Flag broad security claims.",
      after: "Flag broad claims and require policy, report, or approved answer evidence before reuse.",
      href: "verify.html#risk-flag-engine",
      action: "Run trust check",
    },
  ];

  return [...reportItems, ...seededItems].slice(0, 6);
}

function renderSealedReportPage() {
  if (!sealedReportScore) return;
  const report =
    getSharedReportFromUrl() ||
    readPublicReports()[0] ||
    buildLandingTrustReport("Can we use customer data to train AI models?", "No. Customer content is not used to train foundation models or shared model providers. This answer is based on the approved AI Usage Standard and should be reviewed before release.", "AI Usage Standard - May 16; SOC 2 Type II Report");

  activeSealedReport = report;
  sealedReportScore.textContent = `${report.score}%`;
  sealedReportStatus.textContent = report.status;
  sealedReportPrompt.textContent = report.prompt || "No prompt attached.";
  sealedReportAnswer.textContent = report.answer || "No answer attached.";
  if (sealedReportSources) sealedReportSources.textContent = report.sources || "No source attached.";
  sealedReportImproved.textContent = report.improvedAnswer;
  sealedReportSummary.textContent = report.summary;
  sealedReportFlags.innerHTML = "";
  report.flags.forEach((flag) => {
    const item = document.createElement("li");
    item.textContent = flag;
    sealedReportFlags.append(item);
  });
  renderCheckList(sealedReportChecks, report.checks || []);
}

function formatReportTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Just now";
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function escapePublicHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getReportShareUrl(report, relative = false) {
  const token = encodeReportForUrl(report);
  const path = "report.html";
  if (relative) return `${path}#report=${token}`;
  const base = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, path)}`;
  return `${base}#report=${token}`;
}

function encodeReportForUrl(report) {
  const compact = {
    build: report.build,
    createdAt: report.createdAt,
    prompt: report.prompt,
    answer: report.answer,
    sources: report.sources,
    score: report.score,
    status: report.status,
    flags: report.flags,
    checks: report.checks,
    missingSourceWarnings: report.missingSourceWarnings,
    unsupportedClaimWarnings: report.unsupportedClaimWarnings,
    improvedAnswer: report.improvedAnswer,
    summary: report.summary,
  };
  const bytes = new TextEncoder().encode(JSON.stringify(compact));
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function getSharedReportFromUrl() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const token = params.get("report");
  if (!token) return null;
  try {
    const base64 = token.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(token.length / 4) * 4, "=");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch (error) {
    return null;
  }
}

function formatReportForCopy(report) {
  return [
    `AnswerSeal Sealed Report - ${report.build}`,
    `Status: ${report.status}`,
    `Trust score: ${report.score}%`,
    "",
    `Prompt: ${report.prompt || "No prompt attached."}`,
    "",
    `Answer: ${report.answer || "No answer attached."}`,
    "",
    `Sources: ${report.sources || "No source attached."}`,
    "",
    "Risk flags:",
    ...(report.flags || []).map((flag) => `- ${flag}`),
    "",
    "Suggested improved answer:",
    report.improvedAnswer || "No improved answer generated.",
    "",
    "Summary:",
    report.summary || "No summary generated.",
  ].join("\n");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

if (pilotForm) {
  pilotForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(pilotForm);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const pain = String(data.get("pain") ?? "").trim() || "Not provided yet.";

    const subject = `AnswerSeal pilot request - ${company}`;
    const body = [
      "Hi Dhiraj,",
      "",
      "I want to join the AnswerSeal private pilot.",
      "",
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `Questionnaire pain: ${pain}`,
      "",
      "Pilot phase: AnswerSeal v0.70 Alpha - Network Benefit Ledger",
    ].join("\n");

    const mailto = `mailto:dhirajnyse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    pilotStatus.textContent = "Email draft opened. Send it to request private pilot access.";
  });
}
