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
const trustWeightList = document.querySelector("#trustWeightList");
const trustWeightScore = document.querySelector("#trustWeightScore");
const trustWeightStatus = document.querySelector("#trustWeightStatus");
const trustImpactList = document.querySelector("#trustImpactList");
const trustImpactScore = document.querySelector("#trustImpactScore");
const trustImpactStatus = document.querySelector("#trustImpactStatus");
const rolloutApprovalList = document.querySelector("#rolloutApprovalList");
const rolloutApprovalScore = document.querySelector("#rolloutApprovalScore");
const rolloutApprovalStatus = document.querySelector("#rolloutApprovalStatus");
const liveRolloutList = document.querySelector("#liveRolloutList");
const liveRolloutScore = document.querySelector("#liveRolloutScore");
const liveRolloutStatus = document.querySelector("#liveRolloutStatus");
const rollbackAutomationList = document.querySelector("#rollbackAutomationList");
const rollbackAutomationScore = document.querySelector("#rollbackAutomationScore");
const rollbackAutomationStatus = document.querySelector("#rollbackAutomationStatus");
const trustIncidentList = document.querySelector("#trustIncidentList");
const trustIncidentScore = document.querySelector("#trustIncidentScore");
const trustIncidentStatus = document.querySelector("#trustIncidentStatus");
const guardEngineList = document.querySelector("#guardEngineList");
const guardEngineScore = document.querySelector("#guardEngineScore");
const guardEngineStatus = document.querySelector("#guardEngineStatus");
const outcomeMonitorList = document.querySelector("#outcomeMonitorList");
const outcomeMonitorScore = document.querySelector("#outcomeMonitorScore");
const outcomeMonitorStatus = document.querySelector("#outcomeMonitorStatus");
const guardTuningList = document.querySelector("#guardTuningList");
const guardTuningScore = document.querySelector("#guardTuningScore");
const guardTuningStatus = document.querySelector("#guardTuningStatus");
const guardApprovalList = document.querySelector("#guardApprovalList");
const guardApprovalScore = document.querySelector("#guardApprovalScore");
const guardApprovalStatus = document.querySelector("#guardApprovalStatus");
const approvalReleaseLedgerList = document.querySelector("#approvalReleaseLedgerList");
const approvalReleaseLedgerScore = document.querySelector("#approvalReleaseLedgerScore");
const approvalReleaseLedgerStatus = document.querySelector("#approvalReleaseLedgerStatus");
const ledgerHealthList = document.querySelector("#ledgerHealthList");
const ledgerHealthScore = document.querySelector("#ledgerHealthScore");
const ledgerHealthStatus = document.querySelector("#ledgerHealthStatus");
const releaseRecoveryList = document.querySelector("#releaseRecoveryList");
const releaseRecoveryScore = document.querySelector("#releaseRecoveryScore");
const releaseRecoveryStatus = document.querySelector("#releaseRecoveryStatus");
const productionWorkspaceList = document.querySelector("#productionWorkspaceList");
const productionWorkspaceScore = document.querySelector("#productionWorkspaceScore");
const productionWorkspaceStatus = document.querySelector("#productionWorkspaceStatus");
const persistentRecordsList = document.querySelector("#persistentRecordsList");
const persistentRecordsScore = document.querySelector("#persistentRecordsScore");
const persistentRecordsStatus = document.querySelector("#persistentRecordsStatus");
const workspaceDataLayerList = document.querySelector("#workspaceDataLayerList");
const workspaceDataLayerScore = document.querySelector("#workspaceDataLayerScore");
const workspaceDataLayerStatus = document.querySelector("#workspaceDataLayerStatus");
const d1BlueprintList = document.querySelector("#d1BlueprintList");
const d1BlueprintScore = document.querySelector("#d1BlueprintScore");
const d1BlueprintStatus = document.querySelector("#d1BlueprintStatus");
const authTenantList = document.querySelector("#authTenantList");
const authTenantScore = document.querySelector("#authTenantScore");
const authTenantStatus = document.querySelector("#authTenantStatus");
const workspaceAccessList = document.querySelector("#workspaceAccessList");
const workspaceAccessScore = document.querySelector("#workspaceAccessScore");
const workspaceAccessStatus = document.querySelector("#workspaceAccessStatus");
const inviteFlowList = document.querySelector("#inviteFlowList");
const inviteFlowScore = document.querySelector("#inviteFlowScore");
const inviteFlowStatus = document.querySelector("#inviteFlowStatus");
const memberRoleList = document.querySelector("#memberRoleList");
const memberRoleScore = document.querySelector("#memberRoleScore");
const memberRoleStatus = document.querySelector("#memberRoleStatus");
const privateBetaOnboardingList = document.querySelector("#privateBetaOnboardingList");
const privateBetaOnboardingScore = document.querySelector("#privateBetaOnboardingScore");
const privateBetaOnboardingStatus = document.querySelector("#privateBetaOnboardingStatus");
const pilotLaunchList = document.querySelector("#pilotLaunchList");
const pilotLaunchScore = document.querySelector("#pilotLaunchScore");
const pilotLaunchStatus = document.querySelector("#pilotLaunchStatus");
const paidPilotConversionList = document.querySelector("#paidPilotConversionList");
const paidPilotConversionScore = document.querySelector("#paidPilotConversionScore");
const paidPilotConversionStatus = document.querySelector("#paidPilotConversionStatus");
const paidPilotSuccessList = document.querySelector("#paidPilotSuccessList");
const paidPilotSuccessScore = document.querySelector("#paidPilotSuccessScore");
const paidPilotSuccessStatus = document.querySelector("#paidPilotSuccessStatus");
const customerExpansionList = document.querySelector("#customerExpansionList");
const customerExpansionScore = document.querySelector("#customerExpansionScore");
const customerExpansionStatus = document.querySelector("#customerExpansionStatus");
const pilotCustomerList = document.querySelector("#pilotCustomerList");
const pilotCustomerScore = document.querySelector("#pilotCustomerScore");
const pilotCustomerStatus = document.querySelector("#pilotCustomerStatus");
const pilotFeedbackList = document.querySelector("#pilotFeedbackList");
const pilotFeedbackScore = document.querySelector("#pilotFeedbackScore");
const pilotFeedbackStatus = document.querySelector("#pilotFeedbackStatus");
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

const PUBLIC_BUILD_VERSION = "v2.8 Alpha";
const PUBLIC_REPORT_STORAGE_KEY = "answerseal.public.reports.v280";
const PUBLIC_LEGACY_REPORT_STORAGE_KEYS = [
  "answerseal.public.reports.v270",
  "answerseal.public.reports.v260",
  "answerseal.public.reports.v250",
  "answerseal.public.reports.v240",
  "answerseal.public.reports.v230",
  "answerseal.public.reports.v220",
  "answerseal.public.reports.v210",
  "answerseal.public.reports.v200",
  "answerseal.public.reports.v109",
  "answerseal.public.reports.v108",
  "answerseal.public.reports.v107",
  "answerseal.public.reports.v106",
  "answerseal.public.reports.v105",
  "answerseal.public.reports.v104",
  "answerseal.public.reports.v103",
  "answerseal.public.reports.v102",
  "answerseal.public.reports.v101",
  "answerseal.public.reports.v100",
  "answerseal.public.reports.v99",
  "answerseal.public.reports.v98",
  "answerseal.public.reports.v97",
  "answerseal.public.reports.v96",
  "answerseal.public.reports.v95",
  "answerseal.public.reports.v94",
  "answerseal.public.reports.v93",
  "answerseal.public.reports.v92",
  "answerseal.public.reports.v91",
  "answerseal.public.reports.v90",
  "answerseal.public.reports.v89",
  "answerseal.public.reports.v88",
  "answerseal.public.reports.v87",
  "answerseal.public.reports.v86",
  "answerseal.public.reports.v85",
  "answerseal.public.reports.v84",
  "answerseal.public.reports.v83",
  "answerseal.public.reports.v82",
  "answerseal.public.reports.v81",
  "answerseal.public.reports.v80",
  "answerseal.public.reports.v79",
  "answerseal.public.reports.v78",
  "answerseal.public.reports.v77",
  "answerseal.public.reports.v76",
  "answerseal.public.reports.v75",
  "answerseal.public.reports.v74",
  "answerseal.public.reports.v73",
  "answerseal.public.reports.v72",
  "answerseal.public.reports.v71",
  "answerseal.public.reports.v70",
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
renderTrustWeightController();
renderTrustImpactSimulator();
renderRolloutApprovalConsole();
renderLiveRolloutMonitor();
renderRollbackAutomationAgent();
renderTrustIncidentTimeline();
renderRecurrenceGuardEngine();
renderGuardOutcomeMonitor();
renderGuardTuningQueue();
renderGuardApprovalLab();
renderApprovalReleaseLedger();
renderLedgerHealthMonitor();
renderReleaseRecoveryDesk();
renderProductionWorkspaceFoundation();
renderPersistentTrustRecords();
renderWorkspaceDataLayer();
renderD1PersistenceBlueprint();
renderAuthTenantBoundary();
renderWorkspaceAccessConsole();
renderInviteFlowPrototype();
renderMemberRoleConsole();
renderPrivateBetaOnboardingRoom();
renderPilotLaunchControlCenter();
renderPaidPilotConversionRoom();
renderPaidPilotSuccessRoom();
renderCustomerExpansionRoom();
renderPilotCustomerCommandCenter();
renderPilotFeedbackLearningLoop();
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
      version: "v2.8",
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
      candidate: "Prompt v2.9",
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

function renderTrustWeightController() {
  if (!trustWeightList) return;
  const entries = buildTrustWeightControllerItems();
  const governedEntries = entries.filter((entry) => entry.status !== "Hold");
  const averageWeight = Math.round(entries.reduce((total, entry) => total + entry.weight, 0) / Math.max(entries.length, 1));
  const rollbackCount = entries.filter((entry) => entry.status === "Rollback").length;
  const overrideCount = entries.filter((entry) => entry.status === "Override").length;

  if (trustWeightScore) trustWeightScore.textContent = `${averageWeight}% governed`;
  if (trustWeightStatus) {
    trustWeightStatus.textContent = `${governedEntries.length} signal${governedEntries.length === 1 ? "" : "s"} under weight control; ${rollbackCount + overrideCount} have override or rollback protection.`;
  }

  trustWeightList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Raise"
        ? "is-raise"
        : entry.status === "Decay"
          ? "is-decay"
          : entry.status === "Rollback"
            ? "is-rollback"
            : entry.status === "Override"
              ? "is-override"
              : "is-hold";

    card.className = `proof-memory-card proof-weight-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.type)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-weight-meta">
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(entry.signal)}</dd>
        </div>
        <div>
          <dt>Weight</dt>
          <dd>${entry.weight}%</dd>
        </div>
        <div>
          <dt>Decay</dt>
          <dd>${escapePublicHtml(entry.decay)}</dd>
        </div>
        <div>
          <dt>Control</dt>
          <dd>${escapePublicHtml(entry.control)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Weight rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Rollback receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    trustWeightList.append(card);
  });
}

function buildTrustWeightControllerItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const raise = score >= 92;
    const decay = score >= 84 && score < 92;
    return {
      type: "Saved report signal",
      status: raise ? "Raise" : decay ? "Decay" : "Hold",
      title: report.prompt || "Verified answer weight candidate",
      summary: "A saved sealed report can influence future answers only after score, source coverage, and reviewer outcome agree.",
      signal: raise ? "Approved answer class" : "Local answer pattern",
      weight: raise ? 82 : decay ? 54 : 28,
      decay: raise ? "30-day freshness watch" : decay ? "Immediate reviewer watch" : "No network influence",
      control: raise ? "Tenant opt-in" : "Tenant-local",
      rule: raise
        ? "Increase influence only while future answers keep independent sources attached and avoid new risk flags."
        : "Do not raise this signal until reviewer feedback and source coverage prove repeatable quality.",
      receipt: report.summary || "Weight controller keeps the signal reversible until a future review proves benefit.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      type: "Weight increase",
      status: "Raise",
      title: "AI training answer class earns controlled lift.",
      summary: "The pattern improved a second review, kept tenant evidence attached, and avoided new risk flags.",
      signal: "Question class + proof type",
      weight: 86,
      decay: "45 days",
      control: "Approved class",
      rule: "Raise only the abstract class signal, never exact prompts, answer text, buyer names, files, or tenant notes.",
      receipt: "Raised from 72% to 86% after two approved reviews and one credited benefit receipt.",
      href: "benefit.html",
      action: "Open benefit ledger",
    },
    {
      type: "Decay pressure",
      status: "Decay",
      title: "SOC 2 freshness signal loses influence after repeated edits.",
      summary: "The signal still helps locate sources, but reviewers changed the final wording twice.",
      signal: "Freshness band",
      weight: 48,
      decay: "Active",
      control: "Security owner",
      rule: "Lower automation weight when reviewers repeatedly edit the recommendation, even if search time improved.",
      receipt: "Decayed from 67% to 48% until the source template is refreshed and passes the bench.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      type: "Tenant override",
      status: "Override",
      title: "Workspace blocks regional signal from default recommendations.",
      summary: "The network pattern may help similar buyers, but this tenant requires local country approval first.",
      signal: "Regional proof pattern",
      weight: 0,
      decay: "Override lock",
      control: "Tenant policy",
      rule: "Tenant policy wins over shared weight whenever country, buyer-rights, or data-residency assumptions are stricter.",
      receipt: "Override holds network influence at 0% until legal approves the regional evidence class.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      type: "Rollback",
      status: "Rollback",
      title: "Raw objection signal removed from the controller.",
      summary: "The signal was useful locally, but it depended on exact buyer context and cannot influence shared recommendations.",
      signal: "Raw buyer text",
      weight: 0,
      decay: "Immediate",
      control: "Privacy firewall",
      rule: "Rollback any weight change that depends on raw customer text, files, contracts, prompts, or private account context.",
      receipt: "Rolled back from 31% to 0% and marked local-only after privacy review.",
      href: "network.html",
      action: "Open network",
    },
    {
      type: "Safe baseline",
      status: "Raise",
      title: "Approved source bundle becomes the default starting point.",
      summary: "SOC 2, AI Usage Standard, and security policy sources are stable enough to shape future verified drafts.",
      signal: "Approved source bundle",
      weight: 78,
      decay: "Source review date",
      control: "Owner approved",
      rule: "Use a stronger default only while the receiving answer cites its own attached evidence and passes policy gates.",
      receipt: "Raised because source bundle reuse improved clarity without weakening governance or tenant boundaries.",
      href: "registry.html",
      action: "Open registry",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderTrustImpactSimulator() {
  if (!trustImpactList) return;
  const entries = buildTrustImpactSimulatorItems();
  const readyCount = entries.filter((entry) => entry.status === "Ready").length;
  const holdCount = entries.filter((entry) => entry.status === "Hold" || entry.status === "Blocked").length;
  const averageLift = Math.round(entries.reduce((total, entry) => total + entry.lift, 0) / Math.max(entries.length, 1));

  if (trustImpactScore) trustImpactScore.textContent = `${averageLift}% forecast`;
  if (trustImpactStatus) {
    trustImpactStatus.textContent = `${readyCount} scenario${readyCount === 1 ? "" : "s"} ready for owner approval; ${holdCount} stay held by risk ceilings.`;
  }

  trustImpactList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.status === "Ready" ? "is-ready" : entry.status === "Watch" ? "is-watch" : entry.status === "Blocked" ? "is-blocked" : "is-hold";
    card.className = `proof-memory-card proof-simulator-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.type)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-simulator-meta">
        <div>
          <dt>Lift</dt>
          <dd>${entry.lift}%</dd>
        </div>
        <div>
          <dt>Risk</dt>
          <dd>${escapePublicHtml(entry.risk)}</dd>
        </div>
        <div>
          <dt>Load</dt>
          <dd>${escapePublicHtml(entry.load)}</dd>
        </div>
        <div>
          <dt>Gate</dt>
          <dd>${escapePublicHtml(entry.gate)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Simulation rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Rollout receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    trustImpactList.append(card);
  });
}

function buildTrustImpactSimulatorItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const ready = score >= 92;
    const watch = score >= 84 && score < 92;
    return {
      type: "Saved report simulation",
      status: ready ? "Ready" : watch ? "Watch" : "Hold",
      title: report.prompt || "Verified answer rollout scenario",
      summary: "A saved sealed report can simulate future reuse before its pattern changes recommendations.",
      lift: ready ? 78 : watch ? 52 : 24,
      risk: ready ? "Low" : watch ? "Reviewer edits" : "Insufficient proof",
      load: ready ? "1 owner" : "2 reviewers",
      gate: ready ? "Approve" : "Hold",
      rule: ready
        ? "Run the pattern against current source, risk, and policy checks before increasing default recommendation weight."
        : "Keep the scenario in rehearsal until missing proof, reviewer edits, or policy concerns are resolved.",
      receipt: report.summary || "Simulation keeps the learning change reversible until impact is proven.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      type: "Lift forecast",
      status: "Ready",
      title: "Increase AI training answer class by 8 points.",
      summary: "Simulation predicts faster first drafts without increasing missing-source warnings or compliance flags.",
      lift: 81,
      risk: "Low",
      load: "1 owner",
      gate: "Security approve",
      rule: "Ship only if the receiving answer keeps its own AI Usage Standard and SOC 2 evidence attached.",
      receipt: "Forecast: 38 minutes saved across the next three similar questionnaires; rollback to 78% if reviewer edits rise.",
      href: "weight.html",
      action: "Open weights",
    },
    {
      type: "Risk ceiling",
      status: "Hold",
      title: "Regional proof pattern cannot roll out yet.",
      summary: "Expected lift is useful, but country-specific evidence rights are not approved for shared influence.",
      lift: 43,
      risk: "Regional policy",
      load: "Legal owner",
      gate: "Country hold",
      rule: "Do not roll out a regional signal until the tenant policy, buyer rights, and residency assumptions pass.",
      receipt: "Held even with moderate lift because local regulation outranks network learning benefit.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      type: "Reviewer load",
      status: "Watch",
      title: "SOC 2 freshness boost may create owner bottleneck.",
      summary: "The signal improves retrieval, but reviewer edits are forecast to increase until the source template is refreshed.",
      lift: 58,
      risk: "Medium",
      load: "3 edits",
      gate: "Bench pass",
      rule: "Do not increase weight if expected reviewer edits erase the time saved by faster source matching.",
      receipt: "Watch state requires a refreshed source template and one clean bench run before rollout.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      type: "Rollback cost",
      status: "Ready",
      title: "Approved source bundle has a low-cost rollback path.",
      summary: "The simulation can ship because reverting to the previous source ordering is simple and auditable.",
      lift: 74,
      risk: "Low",
      load: "No new owner",
      gate: "Approved",
      rule: "Prefer learning changes whose rollback path is simple, visible, and does not strand buyer-facing work.",
      receipt: "Rollback cost is low: restore prior source order and leave the new bundle as a recommendation only.",
      href: "registry.html",
      action: "Open registry",
    },
    {
      type: "Privacy block",
      status: "Blocked",
      title: "Raw buyer objection simulation is rejected.",
      summary: "The predicted lift is high, but the scenario depends on private buyer wording and cannot influence shared behavior.",
      lift: 0,
      risk: "Privacy",
      load: "Blocked",
      gate: "No rollout",
      rule: "Block any simulation that requires raw buyer text, exact prompts, private files, account notes, or contracts.",
      receipt: "Blocked before rollout; the useful pattern remains tenant-local only.",
      href: "network.html",
      action: "Open network",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderRolloutApprovalConsole() {
  if (!rolloutApprovalList) return;
  const entries = buildRolloutApprovalItems();
  const approvedCount = entries.filter((entry) => entry.status === "Approved").length;
  const monitorCount = entries.filter((entry) => entry.status === "Monitor").length;
  const blockedCount = entries.filter((entry) => entry.status === "Blocked" || entry.status === "Rollback").length;
  const approvalScore = Math.round(entries.reduce((total, entry) => total + entry.readiness, 0) / Math.max(entries.length, 1));

  if (rolloutApprovalScore) rolloutApprovalScore.textContent = `${approvalScore}% governed`;
  if (rolloutApprovalStatus) {
    rolloutApprovalStatus.textContent = `${approvedCount} approval${approvedCount === 1 ? "" : "s"} ready, ${monitorCount} in monitor mode, ${blockedCount} protected by rollback or block rules.`;
  }

  rolloutApprovalList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Approved"
        ? "is-approved"
        : entry.status === "Pending"
          ? "is-pending"
          : entry.status === "Monitor"
            ? "is-monitor"
            : entry.status === "Rollback"
              ? "is-rollback"
              : "is-blocked";
    card.className = `proof-memory-card proof-rollout-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.type)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-rollout-meta">
        <div>
          <dt>Scope</dt>
          <dd>${escapePublicHtml(entry.scope)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Monitor</dt>
          <dd>${escapePublicHtml(entry.monitor)}</dd>
        </div>
        <div>
          <dt>Trigger</dt>
          <dd>${escapePublicHtml(entry.trigger)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Approval rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Rollout receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    rolloutApprovalList.append(card);
  });
}

function buildRolloutApprovalItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const approved = score >= 92;
    const monitor = score >= 84 && score < 92;
    return {
      type: "Saved report rollout",
      status: approved ? "Approved" : monitor ? "Monitor" : "Pending",
      title: report.prompt || "Verified answer rollout candidate",
      summary: "A sealed report can become reusable guidance only after scope, owner, monitor, and rollback rules are explicit.",
      readiness: approved ? 92 : monitor ? 76 : 58,
      scope: approved ? "Similar buyer questions" : "Tenant-local",
      owner: approved ? "Security owner" : "Reviewer queue",
      monitor: approved ? "Edit rate" : "Source warnings",
      trigger: approved ? ">2 edits" : "Missing proof",
      rule: approved
        ? "Approve reuse when the future answer carries its own sources and stays inside the same question class."
        : "Hold broad rollout until the report has stronger evidence, lower reviewer friction, or a named owner.",
      receipt: report.summary || "Rollout approval keeps the pattern reversible until live use proves benefit.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      type: "Approved rollout",
      status: "Approved",
      title: "AI training answer class can ship to SaaS questionnaires.",
      summary: "The simulation is ready, the source bundle is stable, and reviewer load stays inside the policy ceiling.",
      readiness: 94,
      scope: "SaaS security reviews",
      owner: "Security",
      monitor: "Reviewer edit rate",
      trigger: "More than 2 edits",
      rule: "Ship only to the same answer class and require AI Usage Standard plus SOC 2 sources on every generated draft.",
      receipt: "Approved for controlled rollout with automatic return to review if edit rate or missing-source warnings rise.",
      href: "simulator.html",
      action: "Open simulator",
    },
    {
      type: "Owner gate",
      status: "Pending",
      title: "Regional proof pattern waits for legal scope approval.",
      summary: "Forecasted lift is helpful, but the rollout scope touches country-specific evidence rights.",
      readiness: 61,
      scope: "EU buyers only",
      owner: "Legal",
      monitor: "Policy exceptions",
      trigger: "Country mismatch",
      rule: "Do not approve regional influence until legal confirms buyer rights, retention assumptions, and local source eligibility.",
      receipt: "Pending owner approval; pattern remains tenant-local and cannot affect shared recommendations.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      type: "Monitor mode",
      status: "Monitor",
      title: "SOC 2 freshness boost enters a narrow pilot.",
      summary: "The change can run for a limited scope while source-warning and owner-load signals are watched closely.",
      readiness: 78,
      scope: "Two buyer rooms",
      owner: "Compliance",
      monitor: "Stale-source warnings",
      trigger: "+1 warning",
      rule: "Allow a small rollout only when the fresh source template is attached and the bench stays green.",
      receipt: "Monitor mode records every accepted draft and routes the first warning back to the bench.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      type: "Rollback",
      status: "Rollback",
      title: "Raw buyer objection signal is reverted before reuse.",
      summary: "The pattern looked useful, but it depended on private buyer wording and cannot become reusable guidance.",
      readiness: 22,
      scope: "No rollout",
      owner: "Privacy",
      monitor: "Private text leak",
      trigger: "Raw buyer context",
      rule: "Rollback any rollout candidate that uses raw buyer text, exact prompts, account notes, contracts, or private files.",
      receipt: "Change reverted to tenant-local memory and removed from shared learning consideration.",
      href: "network.html",
      action: "Open network",
    },
    {
      type: "Approved bundle",
      status: "Approved",
      title: "Approved source bundle becomes a private-pilot default.",
      summary: "The reusable source bundle improves clarity while keeping exact tenant memory and buyer context private.",
      readiness: 88,
      scope: "Private pilot",
      owner: "AI governance",
      monitor: "Source coverage",
      trigger: "<2 sources",
      rule: "Use the bundle only as a recommended starting point; every shipped answer must attach its own evidence.",
      receipt: "Approved with tenant opt-in, source coverage watch, and a visible rollback note in the Review Pack.",
      href: "registry.html",
      action: "Open registry",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderLiveRolloutMonitor() {
  if (!liveRolloutList) return;
  const entries = buildLiveRolloutMonitorItems();
  const healthyCount = entries.filter((entry) => entry.status === "Healthy" || entry.status === "Learning").length;
  const watchCount = entries.filter((entry) => entry.status === "Watch").length;
  const pauseCount = entries.filter((entry) => entry.status === "Pause").length;
  const rollbackCount = entries.filter((entry) => entry.status === "Rollback").length;
  const liveScore = Math.round(entries.reduce((total, entry) => total + entry.health, 0) / Math.max(entries.length, 1));

  if (liveRolloutScore) liveRolloutScore.textContent = `${liveScore}% live trust`;
  if (liveRolloutStatus) {
    liveRolloutStatus.textContent = `${healthyCount} learning safely, ${watchCount} watched closely, ${pauseCount} paused, ${rollbackCount} rollback-ready.`;
  }

  liveRolloutList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Healthy"
        ? "is-healthy"
        : entry.status === "Learning"
          ? "is-learning"
          : entry.status === "Watch"
            ? "is-watch"
            : entry.status === "Pause"
              ? "is-pause"
              : "is-rollback";
    card.className = `proof-memory-card proof-monitor-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.signal)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-monitor-meta">
        <div>
          <dt>Edit rate</dt>
          <dd>${escapePublicHtml(entry.editRate)}</dd>
        </div>
        <div>
          <dt>Warnings</dt>
          <dd>${escapePublicHtml(entry.warnings)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Response</dt>
          <dd>${escapePublicHtml(entry.response)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Monitor rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Outcome receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    liveRolloutList.append(card);
  });
}

function buildLiveRolloutMonitorItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const healthy = score >= 90;
    const watch = score >= 80 && score < 90;
    const status = healthy ? "Healthy" : watch ? "Watch" : "Pause";
    return {
      signal: "Saved report telemetry",
      status,
      title: report.prompt || "Verified answer rollout",
      summary: "Live monitoring keeps the saved report reusable only while edits, warnings, and objections remain inside the approved guardrail.",
      health: healthy ? 93 : watch ? 78 : 59,
      editRate: healthy ? "Stable" : watch ? "+1 reviewer edit" : "Too many edits",
      warnings: healthy ? "0 source gaps" : watch ? "1 freshness warning" : "Missing proof",
      owner: healthy ? "Security" : "Reviewer",
      response: healthy ? "Keep learning" : watch ? "Watch" : "Pause",
      rule: healthy
        ? "Keep the rollout live while the answer stays source-backed and buyer edits remain low."
        : "Do not broaden reuse until the saved report clears the warning and a reviewer confirms the evidence.",
      receipt: report.summary || "Live monitor receipt links the trust score, source trail, reviewer load, and next action.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      signal: "Approved answer class",
      status: "Healthy",
      title: "AI training answer rollout is behaving inside guardrails.",
      summary: "The approved answer class is producing fast drafts without increasing missing-source warnings or buyer edits.",
      health: 94,
      editRate: "0.7 edits",
      warnings: "0 source gaps",
      owner: "Security",
      response: "Keep learning",
      rule: "Continue learning while edit rate stays below 2 edits and every answer carries the AI Usage Standard plus SOC 2 source path.",
      receipt: "Healthy monitor receipt: rollout remains live and benefit is credited to the governed answer class.",
      href: "rollout.html",
      action: "Open rollout",
    },
    {
      signal: "Freshness drift",
      status: "Watch",
      title: "SOC 2 freshness boost needs one source refresh.",
      summary: "The rollout is still useful, but stale-source warnings rose after a buyer asked for the newest report date.",
      health: 77,
      editRate: "1.4 edits",
      warnings: "+1 stale source",
      owner: "Compliance",
      response: "Refresh source",
      rule: "Stay live only for existing buyer rooms until the latest SOC 2 source bundle is approved.",
      receipt: "Watch receipt routes the source refresh to Compliance and keeps the rollout narrow.",
      href: "evaluation.html",
      action: "Open bench",
    },
    {
      signal: "Policy exception",
      status: "Pause",
      title: "Regional proof pattern pauses before cross-country reuse.",
      summary: "The answer pattern is helpful, but a country-specific evidence-rights question crossed the policy ceiling.",
      health: 58,
      editRate: "2.2 edits",
      warnings: "Policy hold",
      owner: "Legal",
      response: "Pause",
      rule: "Pause the rollout whenever country scope, retention assumptions, or evidence rights are unclear.",
      receipt: "Pause receipt keeps exact memory tenant-local until Legal approves the regional boundary.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      signal: "Buyer objection",
      status: "Rollback",
      title: "Private objection wording is removed from shared influence.",
      summary: "A buyer-specific objection improved one draft but introduced private context that cannot train shared recommendations.",
      health: 31,
      editRate: "3.6 edits",
      warnings: "Private text risk",
      owner: "Privacy",
      response: "Rollback",
      rule: "Rollback immediately when raw buyer wording, account notes, private files, or exact prompts influence shared learning.",
      receipt: "Rollback receipt restores tenant-local memory and blocks the pattern from network benefit credit.",
      href: "network.html",
      action: "Open network",
    },
    {
      signal: "Outcome lift",
      status: "Learning",
      title: "Source bundle rollout earns a governed benefit receipt.",
      summary: "Accepted answers improved without extra compliance risk, so the benefit can be credited and reused with limits.",
      health: 88,
      editRate: "1.1 edits",
      warnings: "0 new flags",
      owner: "AI governance",
      response: "Credit benefit",
      rule: "Credit only accepted, source-backed outcomes and keep the exact customer context out of the shared signal.",
      receipt: "Benefit receipt strengthens the approved source bundle while preserving tenant override and rollback controls.",
      href: "benefit.html",
      action: "Open benefit ledger",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderRollbackAutomationAgent() {
  if (!rollbackAutomationList) return;
  const entries = buildRollbackAutomationItems();
  const readyCount = entries.filter((entry) => entry.status === "Ready" || entry.status === "Restored").length;
  const approvalCount = entries.filter((entry) => entry.status === "Approval").length;
  const draftCount = entries.filter((entry) => entry.status === "Draft").length;
  const blockedCount = entries.filter((entry) => entry.status === "Blocked").length;
  const readinessScore = Math.round(entries.reduce((total, entry) => total + entry.readiness, 0) / Math.max(entries.length, 1));

  if (rollbackAutomationScore) rollbackAutomationScore.textContent = `${readinessScore}% recovery-ready`;
  if (rollbackAutomationStatus) {
    rollbackAutomationStatus.textContent = `${readyCount} safe recoveries, ${approvalCount} awaiting approval, ${draftCount} drafted, ${blockedCount} blocked from automation.`;
  }

  rollbackAutomationList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Ready"
        ? "is-ready"
        : entry.status === "Restored"
          ? "is-restored"
          : entry.status === "Approval"
            ? "is-approval"
            : entry.status === "Draft"
              ? "is-draft"
              : "is-blocked";
    card.className = `proof-memory-card proof-rollback-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.trigger)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-rollback-meta">
        <div>
          <dt>Plan</dt>
          <dd>${escapePublicHtml(entry.plan)}</dd>
        </div>
        <div>
          <dt>Approver</dt>
          <dd>${escapePublicHtml(entry.approver)}</dd>
        </div>
        <div>
          <dt>Restore</dt>
          <dd>${escapePublicHtml(entry.restore)}</dd>
        </div>
        <div>
          <dt>Notice</dt>
          <dd>${escapePublicHtml(entry.notice)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Automation rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Rollback receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    rollbackAutomationList.append(card);
  });
}

function buildRollbackAutomationItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const ready = score >= 88;
    const approval = score >= 74 && score < 88;
    return {
      trigger: "Saved report recovery",
      status: ready ? "Ready" : approval ? "Approval" : "Draft",
      title: report.prompt || "Verified answer recovery plan",
      summary: "A saved report can be rolled back or restored only when the trigger, owner, replacement source, and buyer-safe note are visible.",
      readiness: ready ? 91 : approval ? 76 : 58,
      plan: ready ? "Restore prior answer" : approval ? "Owner review" : "Draft recovery",
      approver: ready ? "Security" : approval ? "Reviewer" : "AI governance",
      restore: ready ? "Previous source order" : "Tenant-local memory",
      notice: ready ? "Internal note" : "Hold buyer note",
      rule: ready
        ? "Automate only the reversible steps; keep buyer-facing communication behind human approval."
        : "Do not change influence until the report has a confirmed trigger, source replacement, and owner approval.",
      receipt: report.summary || "Recovery receipt keeps the original trust report, rollback reason, and next safe source path together.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      trigger: "Freshness drift",
      status: "Ready",
      title: "SOC 2 freshness rollback is ready to execute.",
      summary: "The monitor detected a stale-source warning and the agent prepared a safe return to the previous approved source order.",
      readiness: 92,
      plan: "Revert source bundle",
      approver: "Compliance",
      restore: "Prior SOC 2 source",
      notice: "Reviewer note",
      rule: "Run the rollback when stale-source warnings rise and the latest source bundle is not approved.",
      receipt: "Ready receipt: source influence reverts, the new bundle stays as a draft, and Compliance owns the refresh.",
      href: "monitor.html",
      action: "Open monitor",
    },
    {
      trigger: "Private context",
      status: "Blocked",
      title: "Raw buyer objection cannot be automated into shared recovery.",
      summary: "The rollback is required, but the exact buyer wording must remain tenant-local and cannot train a shared recovery recipe.",
      readiness: 24,
      plan: "Manual privacy review",
      approver: "Privacy",
      restore: "Tenant-local only",
      notice: "No buyer copy",
      rule: "Block automation whenever recovery depends on raw buyer text, account notes, exact prompts, contracts, or private files.",
      receipt: "Blocked receipt: shared influence is removed and the useful lesson remains local until Privacy approves abstraction.",
      href: "network.html",
      action: "Open network",
    },
    {
      trigger: "Regional policy",
      status: "Approval",
      title: "Country-specific proof pattern waits for legal recovery approval.",
      summary: "The monitor paused a regional rollout and the agent drafted a replacement boundary for legal sign-off.",
      readiness: 71,
      plan: "Limit to EU buyers",
      approver: "Legal",
      restore: "Global default",
      notice: "Scope note",
      rule: "Require legal approval before a regional rollback changes source eligibility or buyer-facing language.",
      receipt: "Approval receipt: recovery stays drafted until Legal approves the country boundary and replacement proof path.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      trigger: "Buyer objection",
      status: "Draft",
      title: "Repeated objection creates a safer answer replacement draft.",
      summary: "The agent drafts a lower-risk answer, keeps the approved source path attached, and routes the buyer note to the owner.",
      readiness: 64,
      plan: "Draft safer answer",
      approver: "Sales engineering",
      restore: "Approved template",
      notice: "Buyer-safe reply",
      rule: "Draft recovery copy when objections repeat, but keep final buyer communication under human approval.",
      receipt: "Draft receipt: proposed replacement copy is ready, source path is attached, and the prior answer remains live until approval.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      trigger: "Low-cost reversal",
      status: "Restored",
      title: "Source bundle rollout was reversed and the useful lesson was preserved.",
      summary: "A reversible source-order change was rolled back cleanly while the accepted evidence pattern stayed available for review.",
      readiness: 95,
      plan: "Rollback complete",
      approver: "AI governance",
      restore: "Previous influence",
      notice: "Receipt only",
      rule: "Keep successful rollback lessons as reviewable patterns, not automatic future behavior.",
      receipt: "Restored receipt: influence returned to the previous weight, benefit credit paused, and the lesson remains in governance review.",
      href: "benefit.html",
      action: "Open benefit ledger",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderTrustIncidentTimeline() {
  if (!trustIncidentList) return;
  const entries = buildTrustIncidentItems();
  const closedCount = entries.filter((entry) => entry.status === "Recovered" || entry.status === "Guarded").length;
  const openCount = entries.filter((entry) => entry.status === "Open" || entry.status === "Watch").length;
  const ownerCount = new Set(entries.map((entry) => entry.owner)).size;
  const readinessScore = Math.round(entries.reduce((total, entry) => total + entry.readiness, 0) / Math.max(entries.length, 1));

  if (trustIncidentScore) trustIncidentScore.textContent = `${readinessScore}% timeline-ready`;
  if (trustIncidentStatus) {
    trustIncidentStatus.textContent = `${closedCount} recovered incidents, ${openCount} still watched, ${ownerCount} owner groups visible.`;
  }

  trustIncidentList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Recovered"
        ? "is-recovered"
        : entry.status === "Guarded"
          ? "is-guarded"
          : entry.status === "Contained"
            ? "is-contained"
            : entry.status === "Watch"
              ? "is-watch"
              : "is-open";
    card.className = `proof-memory-card proof-incident-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.incident)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-incident-meta">
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(entry.signal)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Snapshot</dt>
          <dd>${escapePublicHtml(entry.snapshot)}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>${escapePublicHtml(entry.decision)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Timeline</span>
        <p>${escapePublicHtml(entry.timeline)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Recurrence guard</span>
        <p>${escapePublicHtml(entry.guard)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    trustIncidentList.append(card);
  });
}

function buildTrustIncidentItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const recovered = score >= 88;
    return {
      incident: "Saved report timeline",
      status: recovered ? "Guarded" : score >= 74 ? "Contained" : "Open",
      title: report.prompt || "Verified answer incident timeline",
      summary: "A saved report can become an incident record when the signal, evidence snapshot, owner action, and recurrence guard travel together.",
      readiness: recovered ? 91 : score >= 74 ? 78 : 59,
      signal: recovered ? "Low risk report" : "Review needed",
      owner: recovered ? "AI governance" : "Reviewer",
      snapshot: `${score || 0}% trust score`,
      decision: recovered ? "Promote guard" : "Hold timeline",
      timeline: report.summary || "Prompt, answer, trust score, risk flags, source state, and improved answer are preserved in order.",
      guard: recovered
        ? "Reusable lesson can become a future evaluation case after owner approval."
        : "Do not promote this report until missing proof, unsupported claims, and owner review are resolved.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      incident: "Freshness drift",
      status: "Recovered",
      title: "SOC 2 freshness drift was reversed before buyer copy shipped.",
      summary: "The monitor raised stale-source warnings, rollback restored the previous source order, and the incident record keeps the before and after evidence snapshot.",
      readiness: 94,
      signal: "Stale source spike",
      owner: "Compliance",
      snapshot: "83% to 91%",
      decision: "Restore prior source",
      timeline: "Monitor signal -> stale threshold crossed -> Compliance approved source-order restore -> buyer-safe note drafted -> recurrence rule created.",
      guard: "Future SOC 2 answers require a fresh report or approved bridge note before source influence can rise.",
      href: "rollback.html",
      action: "Open rollback",
    },
    {
      incident: "Private context",
      status: "Contained",
      title: "Raw buyer objection stayed tenant-local after recovery review.",
      summary: "The incident timeline records that raw buyer wording influenced a draft, then the recovery path blocked network learning and preserved only an abstract lesson.",
      readiness: 86,
      signal: "Private text warning",
      owner: "Privacy",
      snapshot: "Network hold",
      decision: "Block sharing",
      timeline: "Buyer objection detected -> private wording flagged -> Privacy blocked shared influence -> local-only lesson retained.",
      guard: "Exact buyer wording, account notes, private prompts, contracts, and customer names cannot become shared recurrence signals.",
      href: "network.html",
      action: "Open network",
    },
    {
      incident: "Regional policy",
      status: "Watch",
      title: "Country-specific recovery remains watched until legal closes the exception.",
      summary: "The timeline shows the regional policy hold, affected answer class, legal owner, and default global source path while approval is pending.",
      readiness: 72,
      signal: "Country rule hold",
      owner: "Legal",
      snapshot: "EU-only boundary",
      decision: "Await approval",
      timeline: "Regional monitor pause -> legal route opened -> global default restored -> scoped EU evidence path drafted.",
      guard: "Regional proof patterns cannot override global defaults until residency, buyer export, and AI learning rules are approved.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      incident: "Buyer challenge",
      status: "Open",
      title: "Repeated buyer challenge needs an internal and buyer-safe incident note.",
      summary: "The event has a safe reply draft, but the owner still needs to attach the final source snapshot and recovery decision.",
      readiness: 63,
      signal: "Objection repeated",
      owner: "Sales engineering",
      snapshot: "Draft answer",
      decision: "Needs owner",
      timeline: "Challenge repeated -> safer answer drafted -> proof owner routed -> buyer-safe note waiting for source approval.",
      guard: "Repeated objections create evaluation cases only after the final approved answer and source path are attached.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      incident: "Weight reversal",
      status: "Guarded",
      title: "Trust-weight rollback now has a recurrence guard for future simulations.",
      summary: "The weight change was reversed, the useful lesson stayed reviewable, and future simulations inherit a risk ceiling.",
      readiness: 96,
      signal: "Lift below forecast",
      owner: "AI governance",
      snapshot: "86% gate ready",
      decision: "Add risk ceiling",
      timeline: "Simulator forecast -> rollout approval -> monitor underperformed -> rollback completed -> recurrence guard added to future simulations.",
      guard: "Source-bundle weight can rise only when simulated lift, owner load, policy posture, and rollback cost remain inside thresholds.",
      href: "simulator.html",
      action: "Open simulator",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderRecurrenceGuardEngine() {
  if (!guardEngineList) return;
  const entries = buildRecurrenceGuardItems();
  const activeCount = entries.filter((entry) => entry.status === "Active" || entry.status === "Ready").length;
  const heldCount = entries.filter((entry) => entry.status === "Hold" || entry.status === "Blocked").length;
  const ownerCount = new Set(entries.map((entry) => entry.owner)).size;
  const readinessScore = Math.round(entries.reduce((total, entry) => total + entry.readiness, 0) / Math.max(entries.length, 1));

  if (guardEngineScore) guardEngineScore.textContent = `${readinessScore}% guarded`;
  if (guardEngineStatus) {
    guardEngineStatus.textContent = `${activeCount} guards ready, ${heldCount} held by policy, ${ownerCount} owner groups accountable.`;
  }

  guardEngineList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Active"
        ? "is-active"
        : entry.status === "Ready"
          ? "is-ready"
          : entry.status === "Draft"
            ? "is-draft"
            : entry.status === "Hold"
              ? "is-hold"
              : "is-blocked";
    card.className = `proof-memory-card proof-guard-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.guardType)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-guard-meta">
        <div>
          <dt>Incident</dt>
          <dd>${escapePublicHtml(entry.incident)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Replay</dt>
          <dd>${escapePublicHtml(entry.replay)}</dd>
        </div>
        <div>
          <dt>Effect</dt>
          <dd>${escapePublicHtml(entry.effect)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Guard rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Prevention receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    guardEngineList.append(card);
  });
}

function buildRecurrenceGuardItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      guardType: "Saved report guard",
      status: ready ? "Ready" : score >= 72 ? "Draft" : "Hold",
      title: report.prompt || "Verified answer recurrence guard",
      summary: "Saved reports can create narrow prevention rules only after replay confirms they reduce risk without blocking good answers.",
      readiness: ready ? 90 : score >= 72 ? 76 : 58,
      incident: `${score || 0}% trust report`,
      owner: ready ? "AI governance" : "Reviewer",
      replay: ready ? "Past prompts pass" : "Needs replay",
      effect: ready ? "Source rule" : "Review hold",
      rule: ready
        ? "Promote the verified source pattern into a replay case before it influences future answer drafts."
        : "Keep this answer as local report memory until unsupported claims, missing proof, and owner review are resolved.",
      receipt: ready
        ? "Ready receipt: owner can approve the guard, replay scope, expected lift, and rollback path."
        : "Hold receipt: the report can be studied, but it cannot change future behavior yet.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      guardType: "Freshness rule",
      status: "Active",
      title: "Freshness drift now creates a source-age gate before approval.",
      summary: "The SOC 2 incident became a guard that checks whether the cited report is fresh enough before the answer can be sealed.",
      readiness: 95,
      incident: "Freshness drift",
      owner: "Compliance",
      replay: "14 old answers pass",
      effect: "Blocks stale proof",
      rule: "SOC 2 answers require a fresh report or approved bridge note before source confidence can exceed 86%.",
      receipt: "Guard active: stale evidence is blocked, accepted bridge notes are logged, and Compliance can lower the age threshold.",
      href: "incident.html",
      action: "Open incident",
    },
    {
      guardType: "Privacy boundary",
      status: "Active",
      title: "Private buyer wording cannot become shared learning influence.",
      summary: "The private-context incident is now a recurrence guard that strips account-specific text before any network benefit is calculated.",
      readiness: 93,
      incident: "Private context",
      owner: "Privacy",
      replay: "Network safe",
      effect: "Tenant-local only",
      rule: "Exact buyer wording, prompts, contracts, account notes, customer names, and private files stay tenant-local unless Privacy approves abstraction.",
      receipt: "Guard active: useful lesson can be abstracted, but raw context never enters shared memory or shared benchmarks.",
      href: "network.html",
      action: "Open network",
    },
    {
      guardType: "Policy hold",
      status: "Hold",
      title: "Regional proof patterns wait for country and residency approval.",
      summary: "The regional incident produced a narrow hold that prevents local proof patterns from overriding global defaults too early.",
      readiness: 73,
      incident: "Regional policy",
      owner: "Legal",
      replay: "EU cases partial",
      effect: "Scope hold",
      rule: "Regional evidence patterns cannot raise answer influence until residency, buyer export, and AI learning rules are approved.",
      receipt: "Hold receipt: legal can approve the region, reject the guard, or keep the default source path for global answers.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      guardType: "Objection replay",
      status: "Draft",
      title: "Repeated buyer objections become review cases, not silent training.",
      summary: "The guard drafts a safer evaluation case when the same objection repeats, then waits for owner approval before reuse.",
      readiness: 78,
      incident: "Buyer challenge",
      owner: "Sales engineering",
      replay: "5 cases queued",
      effect: "Review case",
      rule: "Repeated objections can create evaluation cases only after the final approved answer, source path, and buyer-safe note are attached.",
      receipt: "Draft receipt: owner sees the repeated pattern, proposed answer class, and proof requirement before the guard ships.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      guardType: "Simulation ceiling",
      status: "Ready",
      title: "Trust-weight changes must pass a rollback-cost replay before rollout.",
      summary: "The weight reversal created a guard that checks expected lift, owner load, policy posture, and reversal cost before future rollouts.",
      readiness: 91,
      incident: "Weight reversal",
      owner: "AI governance",
      replay: "Simulator ready",
      effect: "Risk ceiling",
      rule: "Source-bundle weight can rise only when simulated lift, owner load, policy posture, and rollback cost remain inside thresholds.",
      receipt: "Ready receipt: governance can approve the ceiling and every future rollout will carry a reversal path.",
      href: "simulator.html",
      action: "Open simulator",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderGuardOutcomeMonitor() {
  if (!outcomeMonitorList) return;
  const entries = buildGuardOutcomeItems();
  const healthyCount = entries.filter((entry) => entry.status === "Healthy" || entry.status === "Improving").length;
  const tuneCount = entries.filter((entry) => entry.status === "Tune" || entry.status === "Watch" || entry.status === "Reverse").length;
  const ownerCount = new Set(entries.map((entry) => entry.owner)).size;
  const readinessScore = Math.round(entries.reduce((total, entry) => total + entry.health, 0) / Math.max(entries.length, 1));

  if (outcomeMonitorScore) outcomeMonitorScore.textContent = `${readinessScore}% outcome-ready`;
  if (outcomeMonitorStatus) {
    outcomeMonitorStatus.textContent = `${healthyCount} guards improving, ${tuneCount} need attention, ${ownerCount} owner groups accountable.`;
  }

  outcomeMonitorList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Healthy"
        ? "is-healthy"
        : entry.status === "Improving"
          ? "is-improving"
          : entry.status === "Tune"
            ? "is-tune"
            : entry.status === "Watch"
              ? "is-watch"
              : "is-reverse";
    card.className = `proof-memory-card proof-outcome-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.guard)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-outcome-meta">
        <div>
          <dt>Repeated risk</dt>
          <dd>${escapePublicHtml(entry.risk)}</dd>
        </div>
        <div>
          <dt>False blocks</dt>
          <dd>${escapePublicHtml(entry.falseBlocks)}</dd>
        </div>
        <div>
          <dt>Reviewer load</dt>
          <dd>${escapePublicHtml(entry.load)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Outcome rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Outcome receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    outcomeMonitorList.append(card);
  });
}

function buildGuardOutcomeItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const improving = score >= 86;
    return {
      guard: "Saved report guard",
      status: improving ? "Improving" : score >= 72 ? "Watch" : "Tune",
      title: report.prompt || "Saved report guard outcome",
      summary: "Saved reports become stronger only when their guards reduce repeat risk and do not block good answers.",
      health: improving ? 89 : score >= 72 ? 74 : 61,
      risk: improving ? "Down" : "Unclear",
      falseBlocks: improving ? "None seen" : "Needs review",
      load: improving ? "Low" : "Owner check",
      owner: improving ? "AI governance" : "Reviewer",
      rule: improving
        ? "Keep the guard in review mode and continue watching buyer objections before raising influence."
        : "Hold guard influence until repeated-risk movement and false-block evidence are visible.",
      receipt: improving
        ? "Outcome improving: source quality rose without creating reviewer friction."
        : "Outcome pending: do not promote this guard until the owner confirms the blocked-answer pattern.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      guard: "Freshness gate",
      status: "Healthy",
      title: "SOC 2 freshness gate reduced stale-source warnings without slowing approvals.",
      summary: "The guard is working: fewer stale citations, no false blocks, and the compliance owner kept the threshold stable.",
      health: 96,
      risk: "-42%",
      falseBlocks: "0",
      load: "Low",
      owner: "Compliance",
      rule: "Keep the source-age gate active while stale warnings stay down and bridge notes remain reviewable.",
      receipt: "Healthy receipt: stale-source risk dropped, no good answers were blocked, and Compliance keeps the current threshold.",
      href: "guard.html",
      action: "Open guard",
    },
    {
      guard: "Privacy boundary",
      status: "Improving",
      title: "Private-context boundary protected shared learning with minor local friction.",
      summary: "No raw buyer text entered shared memory, but two tenant-local drafts needed manual approval before reuse.",
      health: 88,
      risk: "-100% leaks",
      falseBlocks: "2 local drafts",
      load: "Medium",
      owner: "Privacy",
      rule: "Keep the boundary active and tune local draft messaging so reviewers understand why private text was held.",
      receipt: "Improving receipt: privacy risk stayed contained; local friction is visible and routed to Privacy.",
      href: "network.html",
      action: "Open network",
    },
    {
      guard: "Regional hold",
      status: "Tune",
      title: "Country-specific policy hold is safe but too strict for EU proof reuse.",
      summary: "The guard prevented unsafe rollout, but it also held three approved EU answers that Legal can now tune.",
      health: 71,
      risk: "-18%",
      falseBlocks: "3 EU answers",
      load: "Legal queue",
      owner: "Legal",
      rule: "Tune the region rule so approved EU evidence can pass while global defaults remain protected.",
      receipt: "Tune receipt: safety is working, but false blocks and legal load are high enough to adjust the threshold.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      guard: "Objection replay",
      status: "Watch",
      title: "Buyer objection replay needs more signal before promotion.",
      summary: "Repeated objections are visible, but the guard has not yet proven that safer drafts reduce follow-up loops.",
      health: 69,
      risk: "Flat",
      falseBlocks: "1 draft",
      load: "Sales owner",
      owner: "Sales engineering",
      rule: "Keep objection replay in watch mode until accepted buyer replies outnumber held drafts.",
      receipt: "Watch receipt: useful pattern found, but outcome quality is not strong enough for broader influence.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      guard: "Simulation ceiling",
      status: "Healthy",
      title: "Trust-weight ceiling prevented overreach and kept rollback cost low.",
      summary: "The guard limited a tempting source-weight change, avoided extra reviewer load, and preserved expected lift.",
      health: 92,
      risk: "-31%",
      falseBlocks: "0",
      load: "Low",
      owner: "AI governance",
      rule: "Keep the simulation ceiling active while expected lift, owner load, policy posture, and rollback cost stay inside bounds.",
      receipt: "Healthy receipt: outcome lift remained positive and no rollback was needed after the ceiling held.",
      href: "simulator.html",
      action: "Open simulator",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderGuardTuningQueue() {
  if (!guardTuningList) return;
  const entries = buildGuardTuningItems();
  const readyCount = entries.filter((entry) => entry.status === "Ready").length;
  const reviseCount = entries.filter((entry) => entry.status === "Revise" || entry.status === "Hold").length;
  const ownerCount = new Set(entries.map((entry) => entry.owner)).size;
  const readinessScore = Math.round(entries.reduce((total, entry) => total + entry.readiness, 0) / Math.max(entries.length, 1));

  if (guardTuningScore) guardTuningScore.textContent = `${readinessScore}% ready`;
  if (guardTuningStatus) {
    guardTuningStatus.textContent = `${readyCount} tunes ready, ${reviseCount} need owner work, ${ownerCount} owner groups accountable.`;
  }

  guardTuningList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Ready"
        ? "is-ready"
        : entry.status === "Revise"
          ? "is-revise"
          : entry.status === "Hold"
            ? "is-hold"
            : "is-reject";
    card.className = `proof-memory-card proof-tuning-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.guard)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-tuning-meta">
        <div>
          <dt>Old threshold</dt>
          <dd>${escapePublicHtml(entry.oldThreshold)}</dd>
        </div>
        <div>
          <dt>Proposed tune</dt>
          <dd>${escapePublicHtml(entry.newThreshold)}</dd>
        </div>
        <div>
          <dt>Expected lift</dt>
          <dd>${escapePublicHtml(entry.expectedLift)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Approval route</span>
        <p>${escapePublicHtml(entry.route)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Test plan</span>
        <p>${escapePublicHtml(entry.testPlan)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Tuning receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    guardTuningList.append(card);
  });
}

function buildGuardTuningItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const ready = score >= 88;
    const hold = score < 72;
    return {
      guard: "Saved report tune",
      status: ready ? "Ready" : hold ? "Hold" : "Revise",
      title: report.prompt || "Saved report tuning candidate",
      summary: "Saved reports can tune future guard thresholds only when the owner can see the score, proof trail, and rollback path.",
      readiness: ready ? 91 : hold ? 58 : 74,
      oldThreshold: "Manual review",
      newThreshold: ready ? "Promote with source receipt" : hold ? "Keep local" : "Owner review first",
      expectedLift: ready ? "Faster reuse" : hold ? "No lift yet" : "Cleaner routing",
      owner: ready ? "AI governance" : hold ? "Reviewer" : "Compliance",
      route: ready
        ? "AI governance approves reusable answer influence after checking source coverage and buyer-safe wording."
        : hold
          ? "Reviewer keeps the signal local until trust score and source support improve."
          : "Compliance reviews whether the answer class needs a narrower threshold before reuse.",
      testPlan: ready
        ? "Replay the answer against missing-source, unsupported-claim, and compliance-risk checks before promotion."
        : "Run one more verification and require owner notes before the tune can change future recommendations.",
      receipt: report.summary || "Tuning receipt waits for old value, new value, expected lift, approval, and reversal path.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      guard: "Freshness gate",
      status: "Ready",
      title: "Loosen the SOC 2 source-age gate from 90 days to 120 days for approved Type II reports.",
      summary: "Outcome data shows stale warnings dropped without false blocks, and the current threshold is creating avoidable owner checks.",
      readiness: 94,
      oldThreshold: "90 days",
      newThreshold: "120 days",
      expectedLift: "18% fewer owner checks",
      owner: "Compliance",
      route: "Compliance owner approves the threshold edit; Security gets a visibility receipt but no blocker role.",
      testPlan: "Replay five SOC 2 answers with stale-warning and citation checks before rollout.",
      receipt: "Tuning receipt: old 90-day gate, new 120-day gate, expected owner-load reduction, Compliance approval, rollback to 90 days.",
      href: "outcome.html",
      action: "Open outcome",
    },
    {
      guard: "Regional hold",
      status: "Revise",
      title: "Split EU-approved evidence from global evidence instead of holding the whole answer class.",
      summary: "The guard is safe but too broad; approved EU proof should move while non-EU evidence stays held.",
      readiness: 78,
      oldThreshold: "All regional proof held",
      newThreshold: "EU proof can pass",
      expectedLift: "3 false blocks removed",
      owner: "Legal",
      route: "Legal revises the country rule, then Privacy checks that no buyer-specific context leaves the tenant.",
      testPlan: "Run EU, US, and global scenarios through the policy gateway and verify only EU-approved evidence passes.",
      receipt: "Tuning receipt: broad hold becomes EU-approved pass with country fallback and Legal-owned rollback.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      guard: "Privacy boundary",
      status: "Ready",
      title: "Add clearer local-hold wording so reviewers understand private-context blocks.",
      summary: "Privacy protection is working; the tune reduces confusion without weakening the tenant boundary.",
      readiness: 89,
      oldThreshold: "Private context blocked",
      newThreshold: "Blocked with reason",
      expectedLift: "Lower reviewer friction",
      owner: "Privacy",
      route: "Privacy approves the wording tune; AI governance confirms shared memory still receives only abstract signals.",
      testPlan: "Replay private buyer notes and confirm no raw text enters network memory or sealed report exports.",
      receipt: "Tuning receipt: same privacy boundary, clearer reviewer reason, no shared-memory expansion, rollback to prior label.",
      href: "network.html",
      action: "Open network",
    },
    {
      guard: "Objection replay",
      status: "Hold",
      title: "Hold broader objection replay until accepted replies outnumber manual rewrites.",
      summary: "The signal is useful, but the guard has not yet proven it improves buyer response quality.",
      readiness: 63,
      oldThreshold: "One accepted reply",
      newThreshold: "Three accepted replies",
      expectedLift: "Unknown",
      owner: "Sales engineering",
      route: "Sales engineering must attach accepted buyer outcomes before AI governance can approve influence.",
      testPlan: "Collect three buyer replies and replay the objection class against the trust score engine.",
      receipt: "Hold receipt: useful pattern remains visible but cannot tune future answers until accepted outcomes improve.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      guard: "Simulation ceiling",
      status: "Ready",
      title: "Lower rollback-cost ceiling before source-weight increases can reach live recommendations.",
      summary: "The simulator proved lift stays positive when rollback cost is capped earlier.",
      readiness: 92,
      oldThreshold: "Rollback cost <= medium",
      newThreshold: "Rollback cost <= low",
      expectedLift: "Safer rollout",
      owner: "AI governance",
      route: "AI governance approves the tighter ceiling; Rollout owner receives the reversal receipt.",
      testPlan: "Run the source-weight scenario through simulator, monitor, and rollback checks before rollout.",
      receipt: "Tuning receipt: tighter ceiling keeps lift positive, owner load low, and reversal one click away.",
      href: "simulator.html",
      action: "Open simulator",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderGuardApprovalLab() {
  if (!guardApprovalList) return;
  const entries = buildGuardApprovalItems();
  const readyCount = entries.filter((entry) => entry.status === "Approve").length;
  const askCount = entries.filter((entry) => entry.status === "Ask" || entry.status === "Revise").length;
  const ownerCount = new Set(entries.map((entry) => entry.owner)).size;
  const readinessScore = Math.round(entries.reduce((total, entry) => total + entry.readiness, 0) / Math.max(entries.length, 1));

  if (guardApprovalScore) guardApprovalScore.textContent = `${readinessScore}% approval-ready`;
  if (guardApprovalStatus) {
    guardApprovalStatus.textContent = `${readyCount} packets can approve, ${askCount} need owner detail, ${ownerCount} owner groups accountable.`;
  }

  guardApprovalList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.status === "Approve"
        ? "is-approve"
        : entry.status === "Ask"
          ? "is-ask"
          : entry.status === "Revise"
            ? "is-revise"
            : "is-reject";
    card.className = `proof-memory-card proof-approval-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.packet)}</span>
        <strong>${escapePublicHtml(entry.status)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-approval-meta">
        <div>
          <dt>Change</dt>
          <dd>${escapePublicHtml(entry.change)}</dd>
        </div>
        <div>
          <dt>Confidence</dt>
          <dd>${escapePublicHtml(entry.confidence)}</dd>
        </div>
        <div>
          <dt>Policy fit</dt>
          <dd>${escapePublicHtml(entry.policy)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Approval rationale</span>
        <p>${escapePublicHtml(entry.rationale)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Evidence check</span>
        <p>${escapePublicHtml(entry.evidence)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Approval receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    guardApprovalList.append(card);
  });
}

function buildGuardApprovalItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report) => {
    const score = Number(report.score || 0);
    const approve = score >= 90;
    const revise = score >= 76 && score < 90;
    return {
      packet: "Saved report approval",
      status: approve ? "Approve" : revise ? "Ask" : "Revise",
      title: report.prompt || "Saved report approval packet",
      summary: "Saved report signals can approve a future tune only when the owner sees proof, confidence, and rollback.",
      readiness: approve ? 92 : revise ? 76 : 64,
      change: approve ? "Promote proof class" : revise ? "Request rationale" : "Narrow scope",
      confidence: approve ? "High" : revise ? "Medium" : "Low",
      policy: approve ? "Aligned" : revise ? "Needs note" : "Hold",
      owner: approve ? "AI governance" : revise ? "Compliance" : "Reviewer",
      rationale: approve
        ? "The answer has strong source support and can tune a reusable proof class after owner approval."
        : revise
          ? "Owner should explain why the tune is safe before the report can influence future answers."
          : "Keep the report as local learning until proof and confidence improve.",
      evidence: approve
        ? "Trust score, source coverage, and sealed report summary are present."
        : "Run another verification and attach the missing owner note before approval.",
      receipt: report.summary || "Approval receipt waits for approver, evidence, confidence, rationale, and rollback path.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      packet: "Freshness gate tune",
      status: "Approve",
      title: "Approve 90-day to 120-day SOC 2 freshness gate change.",
      summary: "The tuning packet has clean evidence, low rollback cost, and a narrow source-age threshold change.",
      readiness: 95,
      change: "90 days -> 120 days",
      confidence: "High",
      policy: "Aligned",
      owner: "Compliance",
      rationale: "Stale-source warnings fell and no good answers were blocked, so the wider threshold reduces owner load without weakening proof.",
      evidence: "Five SOC 2 replay scenarios passed source freshness, citation, and reviewer-load checks.",
      receipt: "Approval receipt: Compliance approved the 120-day gate with rollback to 90 days if stale warnings rise.",
      href: "tuning.html",
      action: "Open tuning",
    },
    {
      packet: "Regional hold tune",
      status: "Revise",
      title: "Revise EU proof pass before Legal approves rollout.",
      summary: "The change is useful, but the approval packet still needs a narrower country fallback and privacy confirmation.",
      readiness: 72,
      change: "All held -> EU pass",
      confidence: "Medium",
      policy: "Partial",
      owner: "Legal",
      rationale: "Legal should narrow the tune to approved EU evidence and keep non-EU proof on the existing hold path.",
      evidence: "EU scenario passed, but global fallback needs one more policy replay.",
      receipt: "Revise receipt: no rollout until Legal adds country fallback and Privacy confirms no buyer-specific context moves.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      packet: "Privacy boundary wording",
      status: "Approve",
      title: "Approve clearer local-hold wording without changing the privacy boundary.",
      summary: "The packet improves reviewer comprehension while preserving tenant-safe learning controls.",
      readiness: 91,
      change: "Blocked -> blocked with reason",
      confidence: "High",
      policy: "Aligned",
      owner: "Privacy",
      rationale: "The tune changes explanation text only; raw buyer context still never reaches shared memory.",
      evidence: "Private-note replay passed network firewall and sealed-report export checks.",
      receipt: "Approval receipt: Privacy approved clearer wording with no expansion of shared-memory scope.",
      href: "network.html",
      action: "Open network",
    },
    {
      packet: "Objection replay tune",
      status: "Ask",
      title: "Ask Sales engineering for accepted-reply rationale before replay influence changes.",
      summary: "The tune may reduce repeated buyer objections, but the owner must attach outcome rationale first.",
      readiness: 69,
      change: "One reply -> three replies",
      confidence: "Medium",
      policy: "Aligned",
      owner: "Sales engineering",
      rationale: "Owner needs to explain why three accepted replies are enough to tune future objection handling.",
      evidence: "Two accepted replies are present; one more buyer outcome is needed before approval.",
      receipt: "Ask receipt: packet stays pending until Sales engineering captures the missing rationale and outcome.",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      packet: "Simulation ceiling tune",
      status: "Approve",
      title: "Approve lower rollback-cost ceiling before source weights increase.",
      summary: "The simulator shows positive lift only when rollback cost remains low, so the tighter ceiling is safe.",
      readiness: 93,
      change: "Medium cost -> low cost",
      confidence: "High",
      policy: "Aligned",
      owner: "AI governance",
      rationale: "The tune prevents overreach by forcing future source-weight changes to stay reversible.",
      evidence: "Simulator, monitor, and rollback replays passed with low owner load and clear reversal path.",
      receipt: "Approval receipt: AI governance approved the tighter ceiling with rollback to prior weight rules if lift drops.",
      href: "simulator.html",
      action: "Open simulator",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderApprovalReleaseLedger() {
  if (!approvalReleaseLedgerList) return;
  const entries = buildApprovalReleaseLedgerItems();
  const shippedCount = entries.filter((entry) => entry.state === "Shipped").length;
  const watchCount = entries.filter((entry) => entry.state === "Watching").length;
  const heldCount = entries.filter((entry) => entry.state === "Held").length;
  const scopeCount = new Set(entries.map((entry) => entry.scope)).size;

  if (approvalReleaseLedgerScore) approvalReleaseLedgerScore.textContent = `${shippedCount}/${entries.length} shipped`;
  if (approvalReleaseLedgerStatus) {
    approvalReleaseLedgerStatus.textContent = `${watchCount} under rollback watch, ${heldCount} held by scope, ${scopeCount} release scopes recorded.`;
  }

  approvalReleaseLedgerList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Shipped"
        ? "is-shipped"
        : entry.state === "Watching"
          ? "is-watching"
          : entry.state === "Held"
            ? "is-held"
            : "is-audited";
    card.className = `proof-memory-card proof-ledger-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.release)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-ledger-meta">
        <div>
          <dt>Scope</dt>
          <dd>${escapePublicHtml(entry.scope)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Rollout</dt>
          <dd>${escapePublicHtml(entry.rollout)}</dd>
        </div>
        <div>
          <dt>Rollback watch</dt>
          <dd>${escapePublicHtml(entry.watch)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Approval rationale</span>
        <p>${escapePublicHtml(entry.rationale)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Ledger receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Audit export</span>
        <p>${escapePublicHtml(entry.audit)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    approvalReleaseLedgerList.append(card);
  });
}

function buildApprovalReleaseLedgerItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const shipped = score >= 90;
    const watching = score >= 78 && score < 90;
    return {
      release: `Local report release ${index + 1}`,
      state: shipped ? "Shipped" : watching ? "Watching" : "Held",
      title: report.prompt || "Saved sealed answer release entry",
      summary: "A saved sealed report can influence reusable proof only when its release scope and rollback watch are explicit.",
      scope: shipped ? "Team proof memory" : watching ? "Reviewer-only memory" : "Local workspace",
      owner: shipped ? "AI governance" : watching ? "Security reviewer" : "Compliance",
      rollout: shipped ? "Live in approved answers" : watching ? "Pilot watch" : "Blocked",
      watch: shipped ? "30-day trust drift" : watching ? "Owner review" : "No influence",
      rationale: shipped
        ? "The score, citations, and report summary are strong enough to become scoped reusable memory."
        : watching
          ? "The report needs first-run monitoring before it influences future answers."
          : "The answer stays local until score, source coverage, and owner rationale improve.",
      receipt: report.summary || "Ledger receipt waits for scope, owner approval, rollout state, and rollback watch.",
      audit: shipped ? "Export includes score, prompt, answer, sources, and approval receipt." : "Audit export marks the item as limited until owner review passes.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      release: "RL-081-001",
      state: "Shipped",
      title: "SOC 2 freshness gate moved to the approved 120-day window.",
      summary: "The approved tune is active for SOC 2-style security answers with a rollback watch on stale-source warnings.",
      scope: "SOC 2 answers",
      owner: "Compliance",
      rollout: "Live",
      watch: "Stale-source drift",
      rationale: "Approval Lab confirmed high confidence, clean policy fit, and a reversible threshold before shipment.",
      receipt: "Release receipt: 90-day gate changed to 120 days for approved SOC 2 evidence only.",
      audit: "Export includes approver, five replay scenarios, source-age check, monitor rule, and 90-day rollback path.",
      href: "approval.html",
      action: "Open approval",
    },
    {
      release: "RL-081-002",
      state: "Watching",
      title: "Privacy boundary wording shipped with local-only influence.",
      summary: "The wording improvement is live, while shared-memory expansion remains blocked by tenant-safe network rules.",
      scope: "Privacy explanations",
      owner: "Privacy",
      rollout: "Limited",
      watch: "Network boundary",
      rationale: "The tune changes explanation text only and keeps raw buyer context out of shared learning.",
      receipt: "Release receipt: approved wording ships to local tenant views with shared-memory influence disabled.",
      audit: "Export includes privacy approval, network firewall result, local-only scope, and blocked influence rule.",
      href: "network.html",
      action: "Open network",
    },
    {
      release: "RL-081-003",
      state: "Held",
      title: "Regional proof pass stays held until country scope is explicit.",
      summary: "The approval packet showed useful lift, but the ledger blocks release until Legal records country boundaries.",
      scope: "EU proof only",
      owner: "Legal",
      rollout: "Held",
      watch: "Country policy",
      rationale: "Regional evidence rights must be explicit before any shared proof pattern can influence buyer-facing answers.",
      receipt: "Held receipt: no live influence until Legal adds country fallback and Privacy confirms transfer boundaries.",
      audit: "Export marks the release as held with policy gap, owner, and no-op rollback state.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      release: "RL-081-004",
      state: "Shipped",
      title: "Rollback-cost ceiling tightened before source weights increase.",
      summary: "The simulator-approved tune is live with rollback instructions if early lift does not appear.",
      scope: "Source weighting",
      owner: "AI governance",
      rollout: "Live",
      watch: "Lift and rollback",
      rationale: "The tighter ceiling prevents broad source-weight changes unless they remain low-cost and reversible.",
      receipt: "Release receipt: low-cost ceiling active with revert to prior weight rules if lift drops.",
      audit: "Export includes simulation result, monitor rule, rollback path, and owner approval rationale.",
      href: "simulator.html",
      action: "Open simulator",
    },
    {
      release: "RL-081-005",
      state: "Audited",
      title: "Buyer-safe trust packet export recorded for pilot review.",
      summary: "The shipped trust packet path is ready for buyer review with evidence, approval, and release receipts attached.",
      scope: "Pilot trust packets",
      owner: "Customer success",
      rollout: "Exported",
      watch: "Buyer response",
      rationale: "Pilot buyers need a simple proof trail that shows what changed and why it remains reversible.",
      receipt: "Audit receipt: release scope, owner, evidence checks, and buyer-safe summary are bundled for handoff.",
      audit: "Export includes sealed report, approval packet, ledger entry, and buyer-safe release summary.",
      href: "buyer.html",
      action: "Open buyer",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderLedgerHealthMonitor() {
  if (!ledgerHealthList) return;
  const entries = buildLedgerHealthItems();
  const healthyCount = entries.filter((entry) => entry.state === "Healthy").length;
  const watchCount = entries.filter((entry) => entry.state === "Watch").length;
  const ownerActionCount = entries.filter((entry) => ["Pause", "Recover"].includes(entry.state)).length;
  const healthScore = Math.round(entries.reduce((total, entry) => total + Number(entry.health || 0), 0) / entries.length);

  if (ledgerHealthScore) ledgerHealthScore.textContent = `${healthScore}% account health`;
  if (ledgerHealthStatus) {
    ledgerHealthStatus.textContent = `${healthyCount} accounts healthy, ${watchCount} under watch, ${ownerActionCount} need owner action.`;
  }

  ledgerHealthList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Healthy"
        ? "is-healthy"
        : entry.state === "Watch"
          ? "is-watch"
          : entry.state === "Pause"
            ? "is-pause"
            : "is-recover";
    card.className = `proof-memory-card proof-health-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.release)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-health-meta">
        <div>
          <dt>Adoption</dt>
          <dd>${escapePublicHtml(entry.expected)}</dd>
        </div>
        <div>
          <dt>Support</dt>
          <dd>${escapePublicHtml(entry.actual)}</dd>
        </div>
        <div>
          <dt>Proof drift</dt>
          <dd>${escapePublicHtml(entry.drift)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Health action</span>
        <p>${escapePublicHtml(entry.rollback)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Next owner action</span>
        <p>${escapePublicHtml(entry.recommendation)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Health receipt</span>
        <p>${escapePublicHtml(entry.healthExport)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    ledgerHealthList.append(card);
  });
}

function buildLedgerHealthItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const state = score >= 92 ? "Healthy" : score >= 82 ? "Watch" : score >= 72 ? "Pause" : "Recover";
    return {
      release: `HEALTH-098-L${index + 1}`,
      state,
      health: Math.max(58, Math.min(98, score)),
      title: report.prompt || "Live account report health check",
      summary: "A saved sealed report becomes account health evidence when reuse, proof freshness, owner response, and buyer activity stay visible after launch.",
      expected: score >= 88 ? "Reusable report" : "Low reuse",
      actual: score >= 90 ? "Low support load" : score >= 80 ? "Owner watch" : "Action needed",
      drift: score >= 88 ? "Low" : score >= 76 ? "Medium" : "High",
      owner: score >= 88 ? "Customer success" : score >= 76 ? "Security reviewer" : "Compliance",
      rollback:
        score >= 88
          ? "Keep the account expanding and continue the 30-day proof freshness watch."
          : score >= 76
            ? "Guide reuse to reviewer-approved answers until source coverage and response time improve."
            : "Pause expansion and return the account to owner recovery before future reuse.",
      recommendation:
        score >= 88
          ? "Export account health receipt for the next success review or renewal request."
          : "Attach one stronger source and record owner rationale before the next account review.",
      healthExport: report.summary || "Health receipt includes prompt, score, sources, flags, adoption signal, owner action, and renewal path.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      release: "HEALTH-098-001",
      state: "Healthy",
      health: 94,
      title: "Aster Health is using verified answers without proof drift.",
      summary: "The production account is reusing sealed reports, buyer-room activity is steady, and no stale-source warnings increased after go-live.",
      expected: "9 active users",
      actual: "2 open gaps",
      drift: "Low",
      owner: "Customer success",
      rollback: "Keep the account in expansion-ready state and continue weekly proof freshness review.",
      recommendation: "Export the health receipt and schedule the first production success review.",
      healthExport: "Includes adoption, report reuse, open gaps, proof freshness, owner action, and renewal path.",
      href: "launch.html",
      action: "Open launch",
    },
    {
      release: "HEALTH-098-002",
      state: "Watch",
      health: 86,
      title: "Buyer room views are strong, but response time needs attention.",
      summary: "The customer is inspecting sealed packets, but support replies are slowing and one owner queue needs a clearer SLA.",
      expected: "14 room views",
      actual: "26h response",
      drift: "Medium",
      owner: "Support owner",
      rollback: "Keep account live, but hold expansion until response time and owner routing return to target.",
      recommendation: "Customer success should route open gaps and set a named response owner before renewal review.",
      healthExport: "Includes buyer-room activity, support load, owner SLA, open gaps, and expansion hold.",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      release: "HEALTH-098-003",
      state: "Pause",
      health: 71,
      title: "Proof drift blocks the next department rollout.",
      summary: "The account wants more seats, but a stale policy source and unresolved access hold make expansion unsafe this week.",
      expected: "More seats",
      actual: "Policy gap",
      drift: "High",
      owner: "Legal",
      rollback: "Pause department rollout until source freshness, access rights, and regional wording are approved.",
      recommendation: "Legal should attach fallback language and approve the boundary before the next success review.",
      healthExport: "Includes stale source, access hold, affected team, owner action, and expansion pause receipt.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      release: "HEALTH-098-004",
      state: "Healthy",
      health: 91,
      title: "Support load is low enough for a renewal story.",
      summary: "Verified answers are resolving repeat buyer questions while support tickets stay low and customer value is easy to explain.",
      expected: "18 reports reused",
      actual: "1 support ticket",
      drift: "Low",
      owner: "Founder owner",
      rollback: "Keep launch scope live and prepare the renewal story with concrete saved-time and risk-reduction proof.",
      recommendation: "Package value, support history, and next expansion ask into the renewal readiness view.",
      healthExport: "Includes report reuse, support load, value proof, customer owner, and renewal-ready receipt.",
      href: "success.html",
      action: "Open success",
    },
    {
      release: "HEALTH-098-005",
      state: "Watch",
      health: 82,
      title: "Low adoption account needs a customer success nudge.",
      summary: "The workspace is live, but only one team is saving reports and the second department has not adopted the workflow.",
      expected: "2 teams active",
      actual: "1 team active",
      drift: "Medium",
      owner: "Customer success",
      rollback: "Hold expansion pricing until the second team completes one verified answer workflow.",
      recommendation: "Run a guided adoption session and track the next saved report as the renewal proof point.",
      healthExport: "Includes adoption gap, target team, support action, next report goal, and renewal watch.",
      href: "expansion.html",
      action: "Open expansion",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderReleaseRecoveryDesk() {
  if (!releaseRecoveryList) return;
  const entries = buildReleaseRecoveryItems();
  const readyCount = entries.filter((entry) => entry.state === "Ready").length;
  const activeCount = entries.filter((entry) => ["Rollback", "Narrow", "Pause"].includes(entry.decision)).length;
  const noticeCount = entries.filter((entry) => entry.notice !== "Internal only").length;

  if (releaseRecoveryScore) releaseRecoveryScore.textContent = `${readyCount}/${entries.length} ready`;
  if (releaseRecoveryStatus) {
    releaseRecoveryStatus.textContent = `${activeCount} recovery decisions prepared, ${noticeCount} buyer-safe notices ready.`;
  }

  releaseRecoveryList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.decision === "Rollback"
        ? "is-rollback"
        : entry.decision === "Narrow"
          ? "is-narrow"
          : entry.decision === "Pause"
            ? "is-pause"
            : "is-watch";
    card.className = `proof-memory-card proof-recovery-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.ticket)}</span>
        <strong>${escapePublicHtml(entry.decision)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-recovery-meta">
        <div>
          <dt>Health signal</dt>
          <dd>${escapePublicHtml(entry.signal)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Affected scope</dt>
          <dd>${escapePublicHtml(entry.scope)}</dd>
        </div>
        <div>
          <dt>State</dt>
          <dd>${escapePublicHtml(entry.state)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Owner decision</span>
        <p>${escapePublicHtml(entry.ownerDecision)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Buyer-safe notice</span>
        <p>${escapePublicHtml(entry.notice)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Recovery receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    releaseRecoveryList.append(card);
  });
}

function buildReleaseRecoveryItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const decision = score >= 90 ? "Watch" : score >= 80 ? "Narrow" : score >= 70 ? "Pause" : "Rollback";
    return {
      ticket: `RR-083-L${index + 1}`,
      decision,
      state: score >= 84 ? "Ready" : "Owner review",
      title: report.prompt || "Saved sealed answer recovery packet",
      summary: "A saved sealed answer can keep helping only when weak health signals become an explicit recovery decision.",
      signal: score >= 90 ? "Healthy watch" : score >= 80 ? "Mixed source coverage" : score >= 70 ? "Policy gap" : "Trust loss",
      owner: score >= 90 ? "AI governance" : score >= 80 ? "Security reviewer" : "Compliance",
      scope: score >= 86 ? "Approved answer memory" : "Reviewer-only memory",
      ownerDecision:
        decision === "Watch"
          ? "Continue watching for one more release window with no scope expansion."
          : decision === "Narrow"
            ? "Limit reuse to reviewer-approved answers until one stronger source is attached."
            : decision === "Pause"
              ? "Pause influence until owner rationale and source coverage are complete."
              : "Rollback influence and restore the previous approved answer pattern.",
      notice: decision === "Watch" ? "Internal only" : "We narrowed a reusable answer pattern while evidence is refreshed; current approved answers remain available.",
      receipt: report.summary || "Recovery receipt includes prompt, trust score, weak signal, owner decision, affected scope, and restore path.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      ticket: "RR-083-001",
      decision: "Narrow",
      state: "Ready",
      title: "Privacy wording remains live locally, but shared influence stays disabled.",
      summary: "The Health Monitor shows local lift, while the recovery desk prevents broader influence until Privacy approves examples.",
      signal: "Shared scope held",
      owner: "Privacy",
      scope: "Privacy explanations",
      ownerDecision: "Narrow to local-only use and request two buyer-safe examples before any network proposal.",
      notice: "Internal only",
      receipt: "Recovery receipt links LH-082-002, local-only rule, Privacy owner, blocked shared influence, and next review date.",
      href: "health.html",
      action: "Open health",
    },
    {
      ticket: "RR-083-002",
      decision: "Pause",
      state: "Owner review",
      title: "Regional proof pass paused until Legal records country boundaries.",
      summary: "A useful proof pattern is held back because country scope and evidence rights are not complete.",
      signal: "High regional drift",
      owner: "Legal",
      scope: "EU proof reuse",
      ownerDecision: "Pause live influence outside explicitly approved country rules and attach transfer-boundary language.",
      notice: "A regional proof pattern is being reviewed before wider reuse; buyer-facing answers stay on approved local sources.",
      receipt: "Recovery receipt records policy gap, affected region, no-live-influence state, Legal owner, and rerun condition.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      ticket: "RR-083-003",
      decision: "Watch",
      state: "Ready",
      title: "SOC 2 freshness gate remains healthy and needs no rollback.",
      summary: "The release is performing close to expected lift, so recovery stays as a watch-only receipt.",
      signal: "+7 live lift",
      owner: "Compliance",
      scope: "SOC 2 answers",
      ownerDecision: "Keep live, export the receipt, and continue 30-day stale-source drift monitoring.",
      notice: "Internal only",
      receipt: "Recovery receipt confirms no action required, current scope, owner, live signal, and rollback trigger.",
      href: "ledger.html",
      action: "Open ledger",
    },
    {
      ticket: "RR-083-004",
      decision: "Narrow",
      state: "Ready",
      title: "Buyer packet export waits for response before network benefit credit.",
      summary: "The packet is clean for pilot delivery, but the recovery desk blocks promotion until buyer response is recorded.",
      signal: "Awaiting buyer response",
      owner: "Customer success",
      scope: "Pilot trust packets",
      ownerDecision: "Keep pilot packet live, block network credit, and capture accepted, revised, or rejected buyer response.",
      notice: "The pilot proof packet remains available while response signals are captured for future reuse.",
      receipt: "Recovery receipt includes buyer packet status, promotion hold, Customer success owner, and response capture condition.",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      ticket: "RR-083-005",
      decision: "Rollback",
      state: "Owner review",
      title: "Experimental objection replay influence rolls back to prior answer memory.",
      summary: "A simulated accepted-reply pattern did not meet outcome quality, so the recovery desk restores the previous rule.",
      signal: "Outcome quality low",
      owner: "Sales engineering",
      scope: "Objection replies",
      ownerDecision: "Rollback reply influence to the prior accepted-answer rule and require one additional outcome receipt.",
      notice: "A pilot reply pattern was reversed before broad reuse; approved customer-facing language is unchanged.",
      receipt: "Recovery receipt records rollback reason, previous rule, owner, affected workflow, buyer-safe notice, and restore path.",
      href: "concierge.html",
      action: "Open concierge",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderProductionWorkspaceFoundation() {
  if (!productionWorkspaceList) return;
  const entries = buildProductionWorkspaceItems();
  const readyCount = entries.filter((entry) => entry.state === "Launch ready" || entry.state === "Complete").length;
  const gatedCount = entries.filter((entry) => entry.state === "Owner gate" || entry.state === "Hold").length;
  const auditCount = entries.filter((entry) => entry.audit !== "Not started").length;

  if (productionWorkspaceScore) productionWorkspaceScore.textContent = `${readyCount}/${entries.length} launch-ready`;
  if (productionWorkspaceStatus) {
    productionWorkspaceStatus.textContent = `${auditCount} launch receipts mapped, ${gatedCount} pilot gates still owner-held.`;
  }

  productionWorkspaceList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Launch ready" || entry.state === "Complete"
        ? "is-ready"
        : entry.state === "QA ready"
          ? "is-design"
          : entry.state === "Owner gate"
            ? "is-gate"
            : "is-held";
    card.className = `proof-memory-card proof-workspace-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.record)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-workspace-meta">
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Check</dt>
          <dd>${escapePublicHtml(entry.recordType)}</dd>
        </div>
        <div>
          <dt>Surface</dt>
          <dd>${escapePublicHtml(entry.access)}</dd>
        </div>
        <div>
          <dt>Gate</dt>
          <dd>${escapePublicHtml(entry.gate)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Launch rule</span>
        <p>${escapePublicHtml(entry.rule)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Audit timeline</span>
        <p>${escapePublicHtml(entry.audit)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Launch receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    productionWorkspaceList.append(card);
  });
}

function buildProductionWorkspaceItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    return {
      record: `LAUNCH-100-L${index + 1}`,
      state: score >= 86 ? "Launch ready" : "Owner gate",
      title: report.prompt || "Saved sealed report can enter pilot QA",
      summary: "A saved report can enter the first pilot workspace only when score, source trail, owner, export state, and buyer-safe sharing are attached.",
      owner: score >= 86 ? "Trust lead" : "Reviewer",
      recordType: "Sealed report",
      access: score >= 90 ? "Workspace + buyer-safe" : "Reviewer-only",
      gate: score >= 86 ? "Ready" : "Review",
      rule: "Launch only when the report has score, source trail, owner, export state, and a buyer-safe share decision.",
      audit: "Create, verify, save, export, share, and support events map to one launch timeline entry.",
      receipt: report.summary || "Launch receipt keeps prompt, answer, trust score, source trail, owner, export state, access policy, and buyer link decision together.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      record: "LAUNCH-100-001",
      state: "Launch ready",
      title: "First pilot account has a named owner.",
      summary: "Launch starts only when the account has owner, company, region, recovery contact, first review, and success goal.",
      owner: "Founder owner",
      recordType: "Account setup",
      access: "Owner + reviewer",
      gate: "Ready",
      rule: "Every pilot workspace needs one accountable owner before proof, roles, exports, or buyer links can expand.",
      audit: "Workspace created, owner named, first workflow selected, proof assets listed, and success metric recorded.",
      receipt: "account_setup_launch_ready",
      href: "access.html",
      action: "Open access",
    },
    {
      record: "LAUNCH-100-002",
      state: "Launch ready",
      title: "Access model is simple enough for customers.",
      summary: "The first launch path explains Owner, Reviewer, Contributor, Viewer, and Buyer link without a setup maze.",
      owner: "Security reviewer",
      recordType: "Roles",
      access: "Role scoped",
      gate: "Ready",
      rule: "Owners change policy, reviewers approve answers, contributors draft, viewers read, and buyer links see only scoped packets.",
      audit: "Invite, role change, revocation, buyer-link open, export, and access recovery events stay visible.",
      receipt: "role_model_customer_ready",
      href: "member.html",
      action: "Open roles",
    },
    {
      record: "LAUNCH-100-003",
      state: "QA ready",
      title: "Evidence path supports one real questionnaire.",
      summary: "The workspace can carry three proof assets, one saved report, one export, and a visible source trail through the pilot.",
      owner: "Trust lead",
      recordType: "Evidence path",
      access: "Team visible",
      gate: "Source check",
      rule: "Do not launch a pilot without at least one answer, one source trail, one evidence export, and one reviewer decision.",
      audit: "Source added, answer verified, report saved, export copied, and buyer packet prepared.",
      receipt: "evidence_path_pilot_ready",
      href: "data.html",
      action: "Open data",
    },
    {
      record: "LAUNCH-100-004",
      state: "Launch ready",
      title: "Review Pack export is customer handoff ready.",
      summary: "The founder can export a buyer-safe packet that explains score, sources, owner decisions, and what still needs review.",
      owner: "Founder",
      recordType: "Export",
      access: "Buyer-safe packet",
      gate: "Ready",
      rule: "Every customer handoff needs score, source trail, risk flags, improved answer, and a clear next owner action.",
      audit: "Review Pack v114 records beta expansion decision, customer handoff loop, first review receipt, beta onboarding promise, beta invite control room, expansion readiness board, beta friction queue, cohort signal ledger, private beta cohort room, private beta launch decision, pilot acceptance threshold, security and compliance pack, account and billing gate, live backend wiring, private beta launch gate, pilot outcome ledger, launch readiness meter, pilot feedback learning, pilot customer command, launch room, renewal memory, workspace state, source status, and export decision.",
      receipt: "review_pack_v103_security_compliance",
      href: "reports.html",
      action: "Open reports",
    },
    {
      record: "LAUNCH-100-005",
      state: "Owner gate",
      title: "Buyer-safe link needs expiry and revocation check.",
      summary: "External proof sharing is not launch-ready until expiry, scope, viewer access, and revoke behavior are obvious.",
      owner: "Reviewer",
      recordType: "Buyer link",
      access: "External",
      gate: "Owner approval",
      rule: "Buyer links can show only sealed answer context, approved excerpts, expiry, access receipt, and revoke path.",
      audit: "Buyer link created, opened, copied, expired, revoked, and recovered events map to the launch timeline.",
      receipt: "buyer_link_owner_gate",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      record: "LAUNCH-100-006",
      state: "QA ready",
      title: "Support rhythm is visible before launch.",
      summary: "The first customer test needs a support owner, next check-in, unresolved question list, and recovery path.",
      owner: "Customer success",
      recordType: "Support",
      access: "Internal",
      gate: "Weekly review",
      rule: "No pilot should depend on invisible support work; owner, cadence, issues, and next response must be visible.",
      audit: "Support note, owner response, buyer question, recovery action, and weekly decision stay attached to the account.",
      receipt: "support_rhythm_launch_ready",
      href: "success.html",
      action: "Open success",
    },
    {
      record: "LAUNCH-100-007",
      state: "Hold",
      title: "Persistence remains a launch rehearsal until backend is real.",
      summary: "The demo can prove the workflow, but durable multi-user state still needs the backend handoff before public launch.",
      owner: "Product",
      recordType: "Data layer",
      access: "Browser demo",
      gate: "Backend hold",
      rule: "Local browser memory is acceptable for demo validation, not for production customer records.",
      audit: "Persistence blueprint, data layer, auth boundary, records, and recovery receipts define the backend cutover.",
      receipt: "backend_launch_hold",
      href: "persistence.html",
      action: "Open persistence",
    },
    {
      record: "LAUNCH-100-008",
      state: "Complete",
      title: "First 10 pilot test path is understandable.",
      summary: "A founder can explain the first customer path: verify one answer, save report, export packet, share safely, measure outcome.",
      owner: "Shared room",
      recordType: "Customer handoff",
      access: "Pilot-facing",
      gate: "v1.0 complete",
      rule: "The first 10 pilots should test one workflow each, with visible owner, source, export, support, and success signal.",
      audit: "Customer handoff records scope, owner, proof assets, report, export, link decision, support note, and success metric.",
      receipt: "v1_0_launch_ready_workspace",
      href: "versions.html",
      action: "Open roadmap",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 8);
}

function renderPersistentTrustRecords() {
  if (!persistentRecordsList) return;
  const entries = buildPersistentTrustRecordItems();
  const readyCount = entries.filter((entry) => entry.state === "Schema ready").length;
  const migrationCount = entries.filter((entry) => entry.migration !== "Not mapped").length;
  const gatedCount = entries.length - readyCount;

  if (persistentRecordsScore) persistentRecordsScore.textContent = `${readyCount}/${entries.length} schema-ready`;
  if (persistentRecordsStatus) {
    persistentRecordsStatus.textContent = `${migrationCount} migration paths mapped, ${gatedCount} records still owner-held.`;
  }

  persistentRecordsList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Schema ready"
        ? "is-ready"
        : entry.state === "Modeling"
          ? "is-design"
          : entry.state === "Policy gate"
            ? "is-gate"
            : "is-held";
    card.className = `proof-memory-card proof-records-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.record)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-records-meta">
        <div>
          <dt>Table</dt>
          <dd>${escapePublicHtml(entry.table)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Retention</dt>
          <dd>${escapePublicHtml(entry.retention)}</dd>
        </div>
        <div>
          <dt>Restore</dt>
          <dd>${escapePublicHtml(entry.restore)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Minimum fields</span>
        <p>${escapePublicHtml(entry.fields)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Migration path</span>
        <p>${escapePublicHtml(entry.migration)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Audit event</span>
        <p>${escapePublicHtml(entry.audit)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    persistentRecordsList.append(card);
  });
}

function buildPersistentTrustRecordItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    return {
      record: `TR-085-L${index + 1}`,
      state: score >= 86 ? "Schema ready" : "Policy gate",
      title: report.prompt || "Local sealed report becomes a persistent record",
      summary: "A saved browser report can become production state only when source references, owner, share state, and recovery status travel with it.",
      table: "sealed_reports",
      owner: score >= 86 ? "Trust lead" : "Reviewer",
      retention: score >= 90 ? "Pilot default" : "Reviewer hold",
      restore: "Previous report snapshot",
      fields: "id, workspace_id, prompt, answer, score, flags, source_refs, improved_answer, owner_id, share_state, recovery_state.",
      migration: "Browser-local sealed report memory maps into sealed_reports with source references and audit history preserved.",
      audit: report.summary || "record.migrated captures source storage key, trust score, owner, migration timestamp, and review state.",
      href: getReportShareUrl(report, true),
      action: "Open sealed report",
    };
  });

  const seededEntries = [
    {
      record: "TR-085-001",
      state: "Schema ready",
      title: "Sealed report becomes the first durable product object.",
      summary: "The core record is the verified answer itself: prompt, answer, proof, score, risk flags, improved wording, owner, and share state.",
      table: "sealed_reports",
      owner: "Product",
      retention: "Pilot default",
      restore: "Version snapshot",
      fields: "id, workspace_id, prompt_hash, prompt_text, answer_text, score, status, source_refs, flags_json, improved_answer, owner_id, created_at.",
      migration: "answerseal.public.reports.v84 and earlier report memory can migrate into sealed_reports without changing the first-screen verifier.",
      audit: "report.created, report.verified, report.saved, report.shared, and report.restored become standard audit events.",
      href: "reports.html",
      action: "Open reports",
    },
    {
      record: "TR-085-002",
      state: "Schema ready",
      title: "Organizations and members give every answer a home.",
      summary: "Production trust needs one clear tenant boundary before accounts get complicated: organization, workspace, member, role, and invitation state.",
      table: "organizations + members",
      owner: "Admin",
      retention: "Account lifetime",
      restore: "Owner recovery",
      fields: "organization_id, workspace_id, member_id, role, invitation_state, region, billing_state, pilot_state, created_at.",
      migration: "Pilot form, workspace foundation records, and demo workspace account map into organization and member seeds.",
      audit: "member.invited, member.role_changed, workspace.created, and workspace.region_set keep tenant control visible.",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      record: "TR-085-003",
      state: "Schema ready",
      title: "Audit events become one quiet timeline.",
      summary: "Every important trust action should be queryable without making users stare at technical logs.",
      table: "audit_events",
      owner: "Compliance",
      retention: "Seven-year ready",
      restore: "Immutable receipt",
      fields: "event_id, workspace_id, actor_id, object_type, object_id, action, reason, metadata_json, created_at.",
      migration: "Existing receipts from reports, reviews, releases, recovery, and exports map into one audit_events table.",
      audit: "audit.event_created is append-only and links each object to actor, reason, timestamp, and previous state.",
      href: "versions.html",
      action: "Open roadmap",
    },
    {
      record: "TR-085-004",
      state: "Schema ready",
      title: "Recovery receipts stay attached to trust records.",
      summary: "A rollback or buyer-safe notice should not live as loose text. It should point to the exact record, owner, trigger, decision, and restore path.",
      table: "recovery_receipts",
      owner: "Trust owner",
      retention: "Audit retained",
      restore: "Rollback pointer",
      fields: "receipt_id, workspace_id, object_id, trigger, owner_decision, scope, buyer_notice, restore_path, status, created_at.",
      migration: "Release Recovery Desk and rollback receipt content become recovery_receipts connected to sealed_reports and audit_events.",
      audit: "recovery.opened, recovery.approved, recovery.completed, and recovery.restored keep the product reversible.",
      href: "recovery.html",
      action: "Open recovery",
    },
    {
      record: "TR-085-005",
      state: "Modeling",
      title: "Artifact versions prepare prompt and agent governance.",
      summary: "The long-term Notion + GitHub + QA idea needs versioned artifacts, but the launch shape should stay narrow and understandable.",
      table: "artifact_versions",
      owner: "AI governance",
      retention: "Version history",
      restore: "Previous version",
      fields: "artifact_id, version_id, artifact_type, content_hash, change_summary, reviewer_id, promotion_state, rollback_state.",
      migration: "Registry artifacts, review loop promotions, and approved prompt patterns become artifact_versions after sealed_reports are stable.",
      audit: "artifact.version_created and artifact.promoted capture reviewer, diff summary, and rollback pointer.",
      href: "registry.html",
      action: "Open registry",
    },
    {
      record: "TR-085-006",
      state: "Policy gate",
      title: "Retention and restore rules need owner approval before persistence.",
      summary: "Durability is a promise. Before data becomes real, customers need clear rules for retention, export, delete, legal hold, and restore.",
      table: "retention_policies",
      owner: "Legal",
      retention: "Owner-defined",
      restore: "Policy approved",
      fields: "policy_id, workspace_id, object_type, retention_days, export_rule, delete_rule, legal_hold_rule, restore_rule, owner_id.",
      migration: "Existing demo data stays local until a workspace owner accepts retention, export, delete, and restore rules.",
      audit: "policy.retention_approved records owner, scope, retention window, export path, and restore commitment.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      record: "TR-085-007",
      state: "Schema ready",
      title: "Local memory migration has a small, safe bridge.",
      summary: "We can preserve demo continuity while preparing real persistence by treating browser memory as importable seed data, never as production truth.",
      table: "migration_jobs",
      owner: "Engineering",
      retention: "One-time job",
      restore: "Import rollback",
      fields: "job_id, workspace_id, source_key, target_table, imported_count, skipped_count, failure_count, status, rollback_ref.",
      migration: "answerseal.public.reports.v85 and answerseal.workspace.v85 become source keys for future import jobs.",
      audit: "migration.started, migration.completed, migration.skipped, and migration.rolled_back explain every imported record.",
      href: "demo.html#trust-check",
      action: "Open demo",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 10);
}

function renderWorkspaceDataLayer() {
  if (!workspaceDataLayerList) return;
  const entries = buildWorkspaceDataLayerItems();
  const readyCount = entries.filter((entry) => entry.state === "Launch ready" || entry.state === "API ready").length;
  const gatedCount = entries.filter((entry) => entry.state.includes("gate") || entry.state.includes("test")).length;
  const routeCount = entries.filter((entry) => entry.route !== "Not mapped").length;

  if (workspaceDataLayerScore) workspaceDataLayerScore.textContent = `${readyCount}/${entries.length} launch-ready`;
  if (workspaceDataLayerStatus) {
    workspaceDataLayerStatus.textContent = `${routeCount} route contracts mapped, ${gatedCount} still need rehearsal or owner approval.`;
  }

  workspaceDataLayerList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Launch ready"
        ? "is-ready"
        : entry.state === "API ready"
          ? "is-design"
          : entry.state.includes("gate")
            ? "is-gate"
            : "is-held";
    card.className = `proof-memory-card proof-data-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-data-meta">
        <div>
          <dt>Route</dt>
          <dd>${escapePublicHtml(entry.route)}</dd>
        </div>
        <div>
          <dt>Method</dt>
          <dd>${escapePublicHtml(entry.method)}</dd>
        </div>
        <div>
          <dt>Record</dt>
          <dd>${escapePublicHtml(entry.record)}</dd>
        </div>
        <div>
          <dt>Permission</dt>
          <dd>${escapePublicHtml(entry.permission)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Request shape</span>
        <p>${escapePublicHtml(entry.request)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Response shape</span>
        <p>${escapePublicHtml(entry.response)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Migration rehearsal</span>
        <p>${escapePublicHtml(entry.migration)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    workspaceDataLayerList.append(card);
  });
}

function buildWorkspaceDataLayerItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    return {
      contract: `DL-086-L${index + 1}`,
      state: score >= 86 ? "Launch ready" : "Permission gate",
      title: report.prompt || "Saved report import contract",
      summary: "Local sealed reports can rehearse the exact payload shape before they become workspace records.",
      route: "POST /api/workspaces/:workspaceId/sealed-reports",
      method: "POST",
      record: "sealed_report",
      permission: score >= 86 ? "Owner or reviewer" : "Reviewer approval",
      request: "prompt, answer, sources, score, status, flags, improved_answer, source_refs, local_report_id.",
      response: "sealed_report_id, audit_event_id, migration_job_id, owner_id, share_state, recovery_state.",
      migration: report.summary || "Import rehearsal keeps source storage key, score, skipped fields, owner, and rollback reference visible.",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "DL-086-001",
      state: "Launch ready",
      title: "Verification route accepts one calm input.",
      summary: "The first API should mirror the first screen: prompt, answer, evidence, and the trust result. No extra setup maze.",
      route: "POST /api/verifications",
      method: "POST",
      record: "verification_run",
      permission: "Contributor",
      request: "workspace_id, prompt_text, answer_text, evidence_text, source_refs, run_context.",
      response: "run_id, score, status, flags, checks, improved_answer, report_summary, created_at.",
      migration: "Current browser verifier output maps directly into verification_runs before sealed report creation.",
      href: "verify.html",
      action: "Open verifier",
    },
    {
      contract: "DL-086-002",
      state: "Launch ready",
      title: "Sealed report route creates durable trust memory.",
      summary: "A report becomes product truth only after it has a workspace, owner, source trail, share state, and audit event.",
      route: "POST /api/sealed-reports",
      method: "POST",
      record: "sealed_report",
      permission: "Reviewer",
      request: "workspace_id, verification_run_id, owner_id, source_refs, share_state, retention_policy_id.",
      response: "sealed_report_id, status, audit_event_id, report_url, recovery_state, created_at.",
      migration: "answerseal.public.reports.v86 becomes an import source, not the production authority.",
      href: "records.html",
      action: "Open records",
    },
    {
      contract: "DL-086-003",
      state: "API ready",
      title: "Workspace route keeps tenant boundaries visible.",
      summary: "Every object should resolve through one workspace boundary before role, region, billing, or pilot state gets complex.",
      route: "GET /api/workspaces/:workspaceId",
      method: "GET",
      record: "workspace",
      permission: "Member",
      request: "workspace_id, include_members, include_policy, include_recent_audit.",
      response: "workspace, organization, members, roles, region, pilot_state, policy_summary, latest_audit_events.",
      migration: "Launch-Ready Workspace records seed the first pilot response shape.",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      contract: "DL-086-004",
      state: "Permission gate",
      title: "Permission route stays small enough to audit.",
      summary: "Launch roles should be understandable: owner, reviewer, contributor, viewer, and buyer link. Anything else can wait.",
      route: "PATCH /api/workspaces/:workspaceId/members/:memberId",
      method: "PATCH",
      record: "member_permission",
      permission: "Owner",
      request: "member_id, new_role, reason, scope, expires_at, approval_note.",
      response: "member_id, role, audit_event_id, effective_permissions, changed_at.",
      migration: "Existing demo owner and reviewer labels become role seeds after owner approval.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      contract: "DL-086-005",
      state: "Migration test",
      title: "Migration jobs rehearse imports before persistence.",
      summary: "Saved demo reports, workspace memory, and review receipts should pass through an explainable import job.",
      route: "POST /api/migration-jobs",
      method: "POST",
      record: "migration_job",
      permission: "Owner",
      request: "workspace_id, source_key, source_version, target_table, dry_run, retention_policy_id.",
      response: "job_id, imported_count, skipped_count, failure_count, rollback_ref, audit_event_id.",
      migration: "Dry-run mode imports v0.86 local memory into draft rows and proves skipped records before commit.",
      href: "records.html",
      action: "Open records",
    },
    {
      contract: "DL-086-006",
      state: "Launch ready",
      title: "Audit event route gives every change a receipt.",
      summary: "The product should not need noisy logs. It needs simple audit events tied to actor, object, action, reason, and previous state.",
      route: "POST /api/audit-events",
      method: "POST",
      record: "audit_event",
      permission: "System",
      request: "actor_id, workspace_id, object_type, object_id, action, reason, previous_state, metadata.",
      response: "audit_event_id, created_at, receipt_url, immutable_ref.",
      migration: "Existing export, review, rollback, and recovery receipts become audit event fixtures.",
      href: "ledger.html",
      action: "Open ledger",
    },
    {
      contract: "DL-086-007",
      state: "API ready",
      title: "Recovery route keeps trust reversible.",
      summary: "Every rollback, correction, restore, buyer notice, or policy hold should attach to the original object and owner decision.",
      route: "POST /api/recovery-receipts",
      method: "POST",
      record: "recovery_receipt",
      permission: "Trust owner",
      request: "object_type, object_id, trigger, owner_decision, scope, buyer_notice, restore_path.",
      response: "receipt_id, recovery_state, audit_event_id, rollback_ref, completed_at.",
      migration: "Release Recovery Desk content becomes a typed recovery receipt connected to audit_events.",
      href: "recovery.html",
      action: "Open recovery",
    },
    {
      contract: "DL-086-008",
      state: "Permission gate",
      title: "Export and delete route protects customer control.",
      summary: "Data durability becomes trustworthy only when export, delete, retention, legal hold, and restore rules are clear.",
      route: "POST /api/data-requests",
      method: "POST",
      record: "data_request",
      permission: "Owner",
      request: "workspace_id, request_type, object_scope, reason, legal_hold_check, requested_by.",
      response: "request_id, status, affected_records, audit_event_id, export_url, restore_until.",
      migration: "Retention policy approval blocks production persistence until export and delete behavior is accepted.",
      href: "pricing.html",
      action: "Open pricing",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 11);
}

function renderD1PersistenceBlueprint() {
  if (!d1BlueprintList) return;
  const entries = buildD1PersistenceBlueprintItems();
  const readyCount = entries.filter((entry) => entry.state.includes("ready")).length;
  const gatedCount = entries.filter((entry) => entry.state.includes("gate")).length;
  const indexedCount = entries.filter((entry) => entry.index !== "Not indexed").length;

  if (d1BlueprintScore) d1BlueprintScore.textContent = `${readyCount}/${entries.length} table-ready`;
  if (d1BlueprintStatus) {
    d1BlueprintStatus.textContent = `${indexedCount} index plans mapped, ${gatedCount} storage or migration gates remain before backend launch.`;
  }

  d1BlueprintList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Table ready" || entry.state === "Index ready"
        ? "is-ready"
        : entry.state.includes("gate")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-persistence-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-persistence-meta">
        <div>
          <dt>Table</dt>
          <dd>${escapePublicHtml(entry.table)}</dd>
        </div>
        <div>
          <dt>Primary key</dt>
          <dd>${escapePublicHtml(entry.primaryKey)}</dd>
        </div>
        <div>
          <dt>Index</dt>
          <dd>${escapePublicHtml(entry.index)}</dd>
        </div>
        <div>
          <dt>Storage</dt>
          <dd>${escapePublicHtml(entry.storage)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Migration file</span>
        <p>${escapePublicHtml(entry.migration)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Seed fixture</span>
        <p>${escapePublicHtml(entry.seed)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Boundary rule</span>
        <p>${escapePublicHtml(entry.boundary)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    d1BlueprintList.append(card);
  });
}

function buildD1PersistenceBlueprintItems() {
  const reports = readPublicReports();
  const reportFixtures = reports.slice(0, 2).map((report, index) => ({
    contract: `DB-087-L${index + 1}`,
    state: Number(report.score || 0) >= 86 ? "Table ready" : "Migration gate",
    title: report.prompt || "Saved report seed fixture",
    summary: "A browser-saved sealed report can become a seed row only after source text, score, flags, and owner state are explicit.",
    table: "sealed_reports",
    primaryKey: "sealed_report_id",
    index: "workspace_id, status, created_at",
    storage: "D1 row, no file body",
    migration: "0004_seed_local_sealed_reports.sql",
    seed: `score=${Number(report.score || 0)}; status=${report.status || "sealed"}; source=answerseal.public.reports.v86`,
    boundary: report.summary || "Seed fixtures preserve local origin and never become production authority without import approval.",
    href: getReportShareUrl(report, true),
    action: "Open report",
  }));

  const seededEntries = [
    {
      contract: "DB-087-001",
      state: "Table ready",
      title: "Workspaces define every tenant boundary.",
      summary: "All durable state starts with a workspace so teams, regions, pilots, policies, and billing never blur together.",
      table: "workspaces",
      primaryKey: "workspace_id",
      index: "organization_slug, region, status",
      storage: "D1",
      migration: "0001_create_workspaces.sql",
      seed: "Aster Health demo workspace, region, pilot status, owner, and current build.",
      boundary: "Every query scopes by workspace_id before reading reports, members, policies, or audit events.",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      contract: "DB-087-002",
      state: "Table ready",
      title: "Members keep permissions small and auditable.",
      summary: "The launch role model stays intentionally narrow: owner, reviewer, contributor, viewer, and buyer link.",
      table: "workspace_members",
      primaryKey: "member_id",
      index: "workspace_id, role, email_hash",
      storage: "D1",
      migration: "0001_create_workspace_members.sql",
      seed: "Owner, reviewer, and contributor demo roles with no sensitive personal data in fixtures.",
      boundary: "Role changes require owner action and create an audit event.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      contract: "DB-087-003",
      state: "Table ready",
      title: "Verification runs preserve the first trust check.",
      summary: "Each pasted answer needs a durable run record before it becomes a shareable sealed report.",
      table: "verification_runs",
      primaryKey: "run_id",
      index: "workspace_id, score, status, created_at",
      storage: "D1",
      migration: "0002_create_verification_runs.sql",
      seed: "AI training answer sample with prompt, score, checks, flags, and improved answer.",
      boundary: "Raw evidence text can seed the demo, but future large files move through governed file storage.",
      href: "verify.html",
      action: "Open verifier",
    },
    {
      contract: "DB-087-004",
      state: "Index ready",
      title: "Sealed reports become durable AI artifacts.",
      summary: "Reports need status, owner, score, source references, share state, and retention rules before reuse.",
      table: "sealed_reports",
      primaryKey: "sealed_report_id",
      index: "workspace_id, owner_id, status, share_token",
      storage: "D1",
      migration: "0002_create_sealed_reports.sql",
      seed: "SOC 2 customer-data answer with source refs and sealed summary.",
      boundary: "A report is reusable only when its source refs and approval state are present.",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "DB-087-005",
      state: "Design ready",
      title: "Source references stay separate from report text.",
      summary: "A report can cite many sources, and one source can support many reports, without duplicating evidence details.",
      table: "sealed_report_sources",
      primaryKey: "source_ref_id",
      index: "sealed_report_id, source_type, freshness",
      storage: "D1 now, R2 later for files",
      migration: "0003_create_report_sources.sql",
      seed: "AI Usage Standard and SOC 2 Type II Report source refs.",
      boundary: "Source refs store metadata and excerpts only; future source files stay in governed file storage.",
      href: "records.html",
      action: "Open records",
    },
    {
      contract: "DB-087-006",
      state: "Table ready",
      title: "Audit events make every trust change explainable.",
      summary: "Every approval, export, import, role change, rollback, and recovery needs an immutable receipt trail.",
      table: "audit_events",
      primaryKey: "audit_event_id",
      index: "workspace_id, object_type, object_id, created_at",
      storage: "D1",
      migration: "0003_create_audit_events.sql",
      seed: "Verifier run, report save, review pack export, and recovery receipt sample events.",
      boundary: "Audit events are append-only and never silently overwritten.",
      href: "ledger.html",
      action: "Open ledger",
    },
    {
      contract: "DB-087-007",
      state: "Migration gate",
      title: "Migration jobs rehearse local memory imports.",
      summary: "Browser memory should enter production only through a dry-run import with skipped rows and rollback references.",
      table: "migration_jobs",
      primaryKey: "migration_job_id",
      index: "workspace_id, source_version, status",
      storage: "D1",
      migration: "0004_create_migration_jobs.sql",
      seed: "answerseal.public.reports.v86 and answerseal.workspace.v86 dry-run import job.",
      boundary: "Import jobs require owner approval before draft rows become active production rows.",
      href: "data.html",
      action: "Open data layer",
    },
    {
      contract: "DB-087-008",
      state: "Table ready",
      title: "Recovery receipts keep trust reversible.",
      summary: "When a report, policy, source, or learning signal changes, the recovery path needs a durable record.",
      table: "recovery_receipts",
      primaryKey: "recovery_receipt_id",
      index: "workspace_id, object_id, recovery_state",
      storage: "D1",
      migration: "0005_create_recovery_receipts.sql",
      seed: "Scoped rollback, buyer-safe notice, restore path, and owner decision fixture.",
      boundary: "Recovery receipts connect to the original object and audit event before a rollback is considered complete.",
      href: "recovery.html",
      action: "Open recovery",
    },
    {
      contract: "DB-087-009",
      state: "Storage gate",
      title: "Data requests protect export and delete control.",
      summary: "Launch trust requires clear export, delete, retention, legal hold, and restore behavior before paid customers arrive.",
      table: "data_requests",
      primaryKey: "data_request_id",
      index: "workspace_id, request_type, status",
      storage: "D1 plus future export object",
      migration: "0006_create_data_requests.sql",
      seed: "Export workspace trust records and delete draft report request samples.",
      boundary: "Deletion and export stay owner-gated until evidence file storage and legal hold rules are approved.",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "DB-087-010",
      state: "Index ready",
      title: "Share links separate buyer access from internal state.",
      summary: "A buyer-safe report link should expose only sealed report output, not workspace internals or source files.",
      table: "share_links",
      primaryKey: "share_link_id",
      index: "token_hash, workspace_id, expires_at",
      storage: "D1",
      migration: "0006_create_share_links.sql",
      seed: "Public sealed report token with expiry, scope, and revoked state.",
      boundary: "Share links resolve through token hashes and never reveal raw workspace IDs to buyers.",
      href: "buyer.html",
      action: "Open buyer portal",
    },
  ];

  return [...reportFixtures, ...seededEntries].slice(0, 12);
}

function renderAuthTenantBoundary() {
  if (!authTenantList) return;
  const entries = buildAuthTenantBoundaryItems();
  const readyCount = entries.filter((entry) => entry.state.includes("ready")).length;
  const gatedCount = entries.filter((entry) => entry.state.includes("gate")).length;
  const scopedCount = entries.filter((entry) => entry.tenant !== "Not scoped").length;

  if (authTenantScore) authTenantScore.textContent = `${readyCount}/${entries.length} access-ready`;
  if (authTenantStatus) {
    authTenantStatus.textContent = `${scopedCount} tenant checks mapped, ${gatedCount} auth gates remain before private workspace launch.`;
  }

  authTenantList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass =
      entry.state === "Access ready" || entry.state === "Session ready"
        ? "is-ready"
        : entry.state.includes("gate")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-auth-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-auth-meta">
        <div>
          <dt>Actor</dt>
          <dd>${escapePublicHtml(entry.actor)}</dd>
        </div>
        <div>
          <dt>Session claim</dt>
          <dd>${escapePublicHtml(entry.claim)}</dd>
        </div>
        <div>
          <dt>Tenant check</dt>
          <dd>${escapePublicHtml(entry.tenant)}</dd>
        </div>
        <div>
          <dt>Role gate</dt>
          <dd>${escapePublicHtml(entry.role)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Allowed action</span>
        <p>${escapePublicHtml(entry.allowed)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Blocked action</span>
        <p>${escapePublicHtml(entry.blocked)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Access receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    authTenantList.append(card);
  });
}

function buildAuthTenantBoundaryItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => ({
    contract: `AUTH-088-L${index + 1}`,
    state: Number(report.score || 0) >= 86 ? "Access ready" : "Review gate",
    title: report.prompt || "Saved report access contract",
    summary: "Saved reports can move into private workspaces only when owner, role, workspace, and share scope are explicit.",
    actor: "Reviewer",
    claim: "workspace_id, role, report_scope",
    tenant: "sealed_report.workspace_id equals session.workspace_id",
    role: Number(report.score || 0) >= 86 ? "Reviewer or owner" : "Owner review",
    allowed: "Open, review, seal, and share only inside the report workspace.",
    blocked: "Cross-workspace reuse, anonymous export, or buyer access without a token.",
    receipt: report.summary || "Access import keeps local origin, owner route, share state, and rollback note.",
    href: getReportShareUrl(report, true),
    action: "Open report",
  }));

  const seededEntries = [
    {
      contract: "AUTH-088-001",
      state: "Access ready",
      title: "First owner creates the private workspace.",
      summary: "A private workspace needs one accountable owner before members, reports, policies, or buyer links exist.",
      actor: "Founder owner",
      claim: "email, owner_id, workspace_id",
      tenant: "new workspace scope",
      role: "Owner",
      allowed: "Create workspace, set default region, accept pilot terms, and create first audit actor.",
      blocked: "Anonymous workspace creation or duplicate first-owner claim.",
      receipt: "workspace_created audit event with owner, region, build, and recovery contact.",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      contract: "AUTH-088-002",
      state: "Session ready",
      title: "Session claims stay small enough to trust.",
      summary: "Launch sessions should carry only the claims every route needs: actor, workspace, role, region, and feature gates.",
      actor: "Signed-in member",
      claim: "actor_id, workspace_id, role, region, gates",
      tenant: "workspace_id required",
      role: "Any member",
      allowed: "Read permitted workspace state and create audit-attributed actions.",
      blocked: "Reading records without a workspace claim or acting without an actor id.",
      receipt: "session_started audit event with hashed email and active workspace.",
      href: "persistence.html",
      action: "Open persist",
    },
    {
      contract: "AUTH-088-003",
      state: "Access ready",
      title: "Reviewer invites are role-bound from the start.",
      summary: "Invites should not be generic links. They should carry workspace, role, expiry, inviter, and acceptance receipt.",
      actor: "Owner",
      claim: "invite_id, workspace_id, invited_role",
      tenant: "invite.workspace_id equals accepter workspace",
      role: "Owner grants reviewer",
      allowed: "Invite reviewer, expire invite, revoke pending invite, and record acceptance.",
      blocked: "Role escalation, forwarding invite across workspaces, or accepting expired invites.",
      receipt: "invite_accepted audit event with granted role and expiry state.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      contract: "AUTH-088-004",
      state: "Access ready",
      title: "Verifier writes are scoped before persistence.",
      summary: "The first screen remains simple, but every saved run must belong to the active workspace and actor.",
      actor: "Contributor",
      claim: "actor_id, workspace_id, role",
      tenant: "verification_run.workspace_id equals session.workspace_id",
      role: "Contributor or reviewer",
      allowed: "Create verification run, save draft report, and attach evidence text.",
      blocked: "Saving into another workspace, bypassing score checks, or writing without actor id.",
      receipt: "verification_run_created event with score, flags, and actor.",
      href: "verify.html",
      action: "Open verifier",
    },
    {
      contract: "AUTH-088-005",
      state: "Review gate",
      title: "Sealed report approval requires reviewer authority.",
      summary: "A report can be drafted by contributors, but sealing, sharing, and promotion require review authority.",
      actor: "Reviewer",
      claim: "role, workspace_id, report_id",
      tenant: "sealed_report.workspace_id equals session.workspace_id",
      role: "Reviewer or owner",
      allowed: "Approve report, change status, create share link, and promote reusable answer.",
      blocked: "Contributor approval, stale source promotion, or buyer share without sealed status.",
      receipt: "sealed_report_approved event with source refs and reviewer decision.",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "AUTH-088-006",
      state: "Session ready",
      title: "Buyer links are not internal sessions.",
      summary: "External buyers get tokenized report access, not workspace membership or hidden internal source paths.",
      actor: "Buyer viewer",
      claim: "token_hash, report_scope, expires_at",
      tenant: "share_link.workspace_id resolves server-side",
      role: "Buyer link",
      allowed: "View buyer-safe sealed report, source summary, and approved answer.",
      blocked: "Workspace navigation, raw source files, internal notes, or other reports.",
      receipt: "buyer_link_opened event with token scope and expiry state.",
      href: "buyer.html",
      action: "Open buyer portal",
    },
    {
      contract: "AUTH-088-007",
      state: "Access ready",
      title: "Export requires owner or delegated admin.",
      summary: "Trust exports are sensitive. They should be scoped, reasoned, and visible in the audit trail before download.",
      actor: "Owner",
      claim: "actor_id, workspace_id, export_scope",
      tenant: "export scope constrained to workspace_id",
      role: "Owner or admin delegate",
      allowed: "Export sealed reports, audit events, and data request receipts.",
      blocked: "Buyer token export, contributor export, or cross-workspace export bundle.",
      receipt: "data_export_requested event with scope, reason, and restore window.",
      href: "data.html",
      action: "Open data layer",
    },
    {
      contract: "AUTH-088-008",
      state: "Review gate",
      title: "Role changes must be reversible.",
      summary: "Membership changes can affect every answer. The product needs reason, previous role, new role, and recovery path.",
      actor: "Owner",
      claim: "actor_id, target_member_id, role_change",
      tenant: "member.workspace_id equals owner workspace_id",
      role: "Owner only",
      allowed: "Grant, downgrade, revoke, or expire member access with reason.",
      blocked: "Self-escalation, last-owner removal, or silent privilege changes.",
      receipt: "member_role_changed event with previous role and rollback instruction.",
      href: "ledger.html",
      action: "Open ledger",
    },
    {
      contract: "AUTH-088-009",
      state: "Access ready",
      title: "Recovery actions require trust-owner context.",
      summary: "Rollbacks, restores, and buyer notices should be attached to the owner who approved the action.",
      actor: "Trust owner",
      claim: "actor_id, workspace_id, recovery_scope",
      tenant: "recovery_receipt.workspace_id equals session.workspace_id",
      role: "Owner or trust owner",
      allowed: "Pause share links, restore previous report state, and issue buyer-safe notice.",
      blocked: "Unowned rollback, hidden buyer notice, or recovery outside approved scope.",
      receipt: "recovery_receipt_created event with owner decision and restore reference.",
      href: "recovery.html",
      action: "Open recovery",
    },
    {
      contract: "AUTH-088-010",
      state: "Design ready",
      title: "Pricing tiers map to access limits.",
      summary: "Commercial packaging should reflect governance: member count, buyer links, export depth, and private deployment options.",
      actor: "Billing owner",
      claim: "workspace_id, plan, feature_gates",
      tenant: "plan attached to workspace",
      role: "Owner",
      allowed: "Set plan gates for reports, members, buyer links, exports, and admin controls.",
      blocked: "Enterprise controls on starter workspaces or unmetered external buyer rooms.",
      receipt: "plan_gate_changed event with previous plan and enabled controls.",
      href: "pricing.html",
      action: "Open pricing",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderWorkspaceAccessConsole() {
  if (!workspaceAccessList) return;
  const entries = buildWorkspaceAccessItems();
  const readyCount = entries.filter((entry) => entry.state.includes("Ready")).length;
  const inviteCount = entries.filter((entry) => entry.surface.toLowerCase().includes("invite")).length;
  const buyerLinkCount = entries.filter((entry) => entry.surface.toLowerCase().includes("buyer")).length;
  const receiptCount = entries.filter((entry) => entry.receipt !== "Pending").length;

  if (workspaceAccessScore) workspaceAccessScore.textContent = `${readyCount}/${entries.length} launch-ready`;
  if (workspaceAccessStatus) {
    workspaceAccessStatus.textContent = `${inviteCount} invite paths, ${buyerLinkCount} buyer-link controls, and ${receiptCount} receipt trails are visible before workspace launch.`;
  }

  workspaceAccessList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Ready")
      ? "is-ready"
      : entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Review") || entry.state.includes("Queue")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-access-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-access-meta">
        <div>
          <dt>Surface</dt>
          <dd>${escapePublicHtml(entry.surface)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Visible control</dt>
          <dd>${escapePublicHtml(entry.control)}</dd>
        </div>
        <div>
          <dt>Receipt</dt>
          <dd>${escapePublicHtml(entry.receipt)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Primary action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Safety rule</span>
        <p>${escapePublicHtml(entry.safetyRule)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    workspaceAccessList.append(card);
  });
}

function buildWorkspaceAccessItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => ({
    contract: `ACCESS-089-L${index + 1}`,
    state: Number(report.score || 0) >= 86 ? "Ready" : "Review queue",
    title: report.prompt || "Saved report access review",
    summary: "Saved report memory can enter a private workspace only when the owner, link scope, and reuse decision are visible.",
    surface: "Report access",
    owner: "Reviewer",
    control: Number(report.score || 0) >= 86 ? "Seal and share" : "Owner review",
    receipt: report.summary ? "Imported report receipt" : "Pending",
    actionPath: "Open the sealed report, confirm source scope, then choose workspace-only or buyer-safe share.",
    safetyRule: "No saved local report becomes tenant memory until an owner can see its access path.",
    href: getReportShareUrl(report, true),
    action: "Open report",
  }));

  const seededEntries = [
    {
      contract: "ACCESS-089-001",
      state: "Ready",
      title: "Owner sees the workspace state before inviting anyone.",
      summary: "The console starts with one calm state panel: owner, plan, region, session health, recovery contact, and launch readiness.",
      surface: "Account state",
      owner: "Founder owner",
      control: "Workspace profile",
      receipt: "workspace_state_viewed",
      actionPath: "Confirm owner, plan, region, and recovery contact before creating invite links.",
      safetyRule: "No invite can be sent until the workspace has a named owner and recovery route.",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      contract: "ACCESS-089-002",
      state: "Queue",
      title: "Invites are reviewed like trust artifacts.",
      summary: "Pending invites show email, role, expiry, inviter, acceptance status, and the safest next action.",
      surface: "Invite queue",
      owner: "Owner",
      control: "Role-bound invite",
      receipt: "invite_sent",
      actionPath: "Send reviewer, contributor, or viewer invites with expiry and acceptance receipt.",
      safetyRule: "Forwarded, expired, or cross-workspace invites stay blocked until the owner renews them.",
      href: "auth.html",
      action: "Open auth",
    },
    {
      contract: "ACCESS-089-003",
      state: "Ready",
      title: "Role views make permissions understandable.",
      summary: "Owner, reviewer, contributor, viewer, and buyer-link access are visible without forcing users into admin jargon.",
      surface: "Role views",
      owner: "Trust owner",
      control: "Permission matrix",
      receipt: "role_matrix_reviewed",
      actionPath: "Compare what each role can verify, approve, export, share, revoke, and recover.",
      safetyRule: "A role can only gain power through an owner-approved role change receipt.",
      href: "policy.html",
      action: "Open policy",
    },
    {
      contract: "ACCESS-089-004",
      state: "Ready",
      title: "Buyer links get their own control surface.",
      summary: "External links show report scope, expiry, revocation state, last viewed time, and buyer-safe content boundaries.",
      surface: "Buyer links",
      owner: "Reviewer",
      control: "Expire or revoke",
      receipt: "buyer_link_opened",
      actionPath: "Create, copy, expire, revoke, or inspect a buyer-safe report link from one quiet row.",
      safetyRule: "Buyer tokens never become workspace sessions and never reveal raw source files.",
      href: "buyer.html",
      action: "Open buyer portal",
    },
    {
      contract: "ACCESS-089-005",
      state: "Ready",
      title: "Access receipts become part of the audit trail.",
      summary: "Invites, role changes, exports, buyer links, revocations, and recovery actions show the latest receipt.",
      surface: "Receipt trail",
      owner: "Security reviewer",
      control: "Audit timeline",
      receipt: "access_receipt_logged",
      actionPath: "Open the receipt trail before exporting, approving, or changing a member role.",
      safetyRule: "Sensitive actions without a receipt stay held until an owner can explain them.",
      href: "ledger.html",
      action: "Open ledger",
    },
    {
      contract: "ACCESS-089-006",
      state: "Review queue",
      title: "Recovery access is visible before something breaks.",
      summary: "The console shows who can pause links, restore reports, reverse roles, and notify buyers when trust changes.",
      surface: "Recovery",
      owner: "Trust owner",
      control: "Recovery route",
      receipt: "recovery_owner_assigned",
      actionPath: "Assign recovery owner, restore window, buyer notice path, and rollback receipt.",
      safetyRule: "No one should discover recovery authority during an incident.",
      href: "recovery.html",
      action: "Open recovery",
    },
    {
      contract: "ACCESS-089-007",
      state: "Design ready",
      title: "Plan gates explain commercial boundaries.",
      summary: "Starter, Team, and Enterprise limits become visible access controls instead of hidden pricing copy.",
      surface: "Plan gates",
      owner: "Billing owner",
      control: "Members and links",
      receipt: "plan_gate_previewed",
      actionPath: "Preview member count, buyer links, exports, audit depth, and private deployment options by tier.",
      safetyRule: "Enterprise-only controls stay unavailable unless plan and owner authority allow them.",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "ACCESS-089-008",
      state: "Ready",
      title: "Session health stays simple.",
      summary: "A small session panel shows actor, workspace, role, region, and feature gates without distracting the verifier.",
      surface: "Session health",
      owner: "Signed-in member",
      control: "Active workspace",
      receipt: "session_checked",
      actionPath: "Confirm active workspace and role before saving reports or opening buyer rooms.",
      safetyRule: "If workspace, actor, or role is missing, the durable action stays blocked.",
      href: "auth.html",
      action: "Open auth",
    },
    {
      contract: "ACCESS-089-009",
      state: "Review queue",
      title: "Data requests show scope before export.",
      summary: "Export and deletion requests show requester, reason, workspace scope, included records, and approval route.",
      surface: "Data request",
      owner: "Owner",
      control: "Export scope",
      receipt: "data_request_created",
      actionPath: "Review export/delete scope before a report, audit trail, or recovery receipt leaves the workspace.",
      safetyRule: "Cross-workspace data requests and buyer-token exports are blocked.",
      href: "data.html",
      action: "Open data layer",
    },
    {
      contract: "ACCESS-089-010",
      state: "Ready",
      title: "Launch checklist keeps access calm.",
      summary: "Before private beta, the console proves owner, invites, roles, buyer links, receipts, recovery, and plan gates are coherent.",
      surface: "Launch checklist",
      owner: "Founder owner",
      control: "Private beta gate",
      receipt: "access_launch_ready",
      actionPath: "Run the access readiness list before sending the first real workspace invite.",
      safetyRule: "Private beta does not open until every access path has a visible owner and receipt.",
      href: "versions.html",
      action: "Open roadmap",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderInviteFlowPrototype() {
  if (!inviteFlowList) return;
  const entries = buildInviteFlowItems();
  const readyCount = entries.filter((entry) => entry.state.includes("Ready")).length;
  const receiptCount = entries.filter((entry) => entry.receipt !== "Pending").length;
  const revokeCount = entries.filter((entry) => entry.recovery.toLowerCase().includes("revoke")).length;

  if (inviteFlowScore) inviteFlowScore.textContent = `${readyCount}/${entries.length} batch-ready`;
  if (inviteFlowStatus) {
    inviteFlowStatus.textContent = `${receiptCount} receipt paths, ${revokeCount} revoke/recover paths, and one founder-owned invite rhythm are ready for beta expansion.`;
  }

  inviteFlowList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Ready")
      ? "is-ready"
      : entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Gate") || entry.state.includes("Preview")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-invite-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-invite-meta">
        <div>
          <dt>Step</dt>
          <dd>${escapePublicHtml(entry.step)}</dd>
        </div>
        <div>
          <dt>Actor</dt>
          <dd>${escapePublicHtml(entry.actor)}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>${escapePublicHtml(entry.role)}</dd>
        </div>
        <div>
          <dt>Receipt</dt>
          <dd>${escapePublicHtml(entry.receipt)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Prototype action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Revoke or recover</span>
        <p>${escapePublicHtml(entry.recovery)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    inviteFlowList.append(card);
  });
}

function buildInviteFlowItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => ({
    contract: `BATCH-240-L${index + 1}`,
    state: Number(report.score || 0) >= 86 ? "Ready" : "Preview gate",
    title: report.prompt || "Invite a proof-heavy beta team",
    summary: "Saved report memory can justify a beta invite when the workflow, proof pain, and support promise are clear.",
    step: "Batch proof",
    actor: "Owner",
    role: Number(report.score || 0) >= 86 ? "Beta candidate" : "Hold for proof",
    receipt: report.summary ? "batch_candidate_previewed" : "Pending",
    actionPath: "Attach saved proof, name the buyer pain, choose invite cohort, and record why this team belongs in beta now.",
    recovery: "Owner can revoke the batch invite before acceptance or move the team back to hold after the first review.",
    href: getReportShareUrl(report, true),
    action: "Open report",
  }));

  const seededEntries = [
    {
      contract: "BATCH-240-001",
      state: "Ready",
      title: "First expansion batch is capped.",
      summary: "Only three proof-heavy teams enter the next batch so setup, evidence review, and buyer coaching stay calm.",
      step: "Batch cap",
      actor: "Founder owner",
      role: "3-team batch",
      receipt: "batch_cap_set",
      actionPath: "Set maximum invites, choose cohort theme, assign owner, and keep waitlist teams visible.",
      recovery: "Owner can revoke extra invites or narrow the batch before any onboarding promise is sent.",
      href: "readiness.html",
      action: "Open readiness",
    },
    {
      contract: "BATCH-240-002",
      state: "Ready",
      title: "Cohort fit explains why the team enters now.",
      summary: "The invite reason names the buyer workflow, evidence pain, team size, urgency, and governance maturity.",
      step: "Cohort fit",
      actor: "Founder owner",
      role: "Proof-heavy SaaS",
      receipt: "cohort_fit_approved",
      actionPath: "Compare candidate against target ICP before sending: security questionnaires, buyer proof, owner access, and willingness to test.",
      recovery: "If fit is weak, move the team to nurture instead of forcing beta support load.",
      href: "cohort.html",
      action: "Open cohort",
    },
    {
      contract: "BATCH-240-003",
      state: "Ready",
      title: "Support capacity is checked before send.",
      summary: "Founder time, setup calls, proof review, buyer-room coaching, and response windows are visible before the batch opens.",
      step: "Capacity",
      actor: "Support owner",
      role: "Founder assisted",
      receipt: "capacity_checked",
      actionPath: "Confirm weekly support budget, onboarding queue, proof review slots, and escalation owner before invite approval.",
      recovery: "If capacity drops, revoke unsent invites and keep accepted teams on the promised support rhythm.",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "BATCH-240-004",
      state: "Preview gate",
      title: "Onboarding promise is scoped before the invite leaves.",
      summary: "Every invited team gets one first workflow, one proof checklist, one owner, and one first-review receipt.",
      step: "Promise",
      actor: "Owner",
      role: "First workflow",
      receipt: "onboarding_promise_previewed",
      actionPath: "Write the promise in plain language: what we help set up, what the customer provides, and when the first sealed report ships.",
      recovery: "If the promise is too broad, narrow it to one workflow before inviting the customer.",
      href: "onboarding.html",
      action: "Open onboarding",
    },
    {
      contract: "BATCH-240-005",
      state: "Ready",
      title: "Buyer-safe message is ready.",
      summary: "The invite explains trust value without overpromising AI automation, compliance coverage, or production support.",
      step: "Message",
      actor: "Founder owner",
      role: "Buyer-safe",
      receipt: "invite_message_approved",
      actionPath: "Use approved language for beta scope, data handling, human review, evidence attachment, and support cadence.",
      recovery: "Owner can retract the message before send or follow up with a correction if scope changes.",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      contract: "BATCH-240-006",
      state: "Hold",
      title: "Weak-proof cohorts stay paused.",
      summary: "Candidates without current policies, buyer urgency, or a named workflow do not enter the beta yet.",
      step: "Proof hold",
      actor: "Readiness owner",
      role: "Waitlist",
      receipt: "proof_hold_recorded",
      actionPath: "Name the missing proof, assign owner, and keep the team on a later invite list instead of diluting support.",
      recovery: "When proof arrives, owner can rerun readiness and move the team into the next batch.",
      href: "friction.html",
      action: "Open friction",
    },
    {
      contract: "BATCH-240-007",
      state: "Gate",
      title: "Founder touch is assigned.",
      summary: "No customer enters the batch without a named founder or operator responsible for the first two weeks.",
      step: "Owner",
      actor: "Founder owner",
      role: "Named support",
      receipt: "founder_touch_assigned",
      actionPath: "Assign onboarding owner, review owner, escalation owner, and weekly check-in before approval.",
      recovery: "If owner availability changes, pause new invites and protect already-promised customer support.",
      href: "pilot.html",
      action: "Open pilot",
    },
    {
      contract: "BATCH-240-008",
      state: "Ready",
      title: "Invite queue becomes the beta daily surface.",
      summary: "The owner sees candidate, approved, sent, accepted, paused, and recovered teams in one compact queue.",
      step: "Queue",
      actor: "Owner",
      role: "All cohorts",
      receipt: "batch_queue_reviewed",
      actionPath: "Filter by cohort, support owner, proof status, invite state, and next action before the weekly decision.",
      recovery: "Paused or revoked invites stay visible with the reason and next possible reopen date.",
      href: "access.html",
      action: "Open access",
    },
    {
      contract: "BATCH-240-009",
      state: "Preview gate",
      title: "Commercial scope appears before invite send.",
      summary: "The control room shows pilot price, included support, review limit, workspace seats, and upgrade trigger before acceptance.",
      step: "Scope",
      actor: "Billing owner",
      role: "Pilot terms",
      receipt: "commercial_scope_checked",
      actionPath: "Check team size, review volume, included workflows, buyer links, and support expectations before inviting.",
      recovery: "If scope is wrong, move the customer back to pricing discussion before onboarding starts.",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "BATCH-240-010",
      state: "Ready",
      title: "Expansion receipt records the decision.",
      summary: "Each batch ends with the reason to approve, narrow, hold, or recover so beta growth stays explainable.",
      step: "Receipt",
      actor: "Founder owner",
      role: "Decision owner",
      receipt: "batch_expansion_receipt",
      actionPath: "Record cohort fit, readiness score, support capacity, onboarding promise, buyer-safe message, and rollback path.",
      recovery: "If the batch underperforms, pause the next batch and return to readiness with the receipt attached.",
      href: "versions.html",
      action: "Open roadmap",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderMemberRoleConsole() {
  if (!memberRoleList) return;
  const entries = buildMemberRoleItems();
  const activeCount = entries.filter((entry) => entry.state.includes("Active") || entry.state.includes("Ready")).length;
  const taskCount = entries.filter((entry) => entry.task !== "Monitor").length;
  const healthCount = entries.filter((entry) => entry.health !== "Clear").length;

  if (memberRoleScore) memberRoleScore.textContent = `${activeCount}/${entries.length} active-ready`;
  if (memberRoleStatus) {
    memberRoleStatus.textContent = `${taskCount} owner tasks and ${healthCount} access-health signals are visible before private beta.`;
  }

  memberRoleList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Active") || entry.state.includes("Ready")
      ? "is-ready"
      : entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Review") || entry.state.includes("Task") || entry.state.includes("Watch")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-member-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-member-meta">
        <div>
          <dt>Member</dt>
          <dd>${escapePublicHtml(entry.member)}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>${escapePublicHtml(entry.role)}</dd>
        </div>
        <div>
          <dt>Health</dt>
          <dd>${escapePublicHtml(entry.health)}</dd>
        </div>
        <div>
          <dt>Owner task</dt>
          <dd>${escapePublicHtml(entry.task)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Owner action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Access receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    memberRoleList.append(card);
  });
}

function buildMemberRoleItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      contract: `MEMBER-091-L${index + 1}`,
      state: ready ? "Active" : "Review task",
      title: report.prompt || "Saved report reviewer access",
      summary: "Saved report memory can seed a reviewer assignment when the member, role, scope, and receipt are visible.",
      member: index === 0 ? "Maya Shah" : "Omar Khan",
      role: ready ? "Reviewer" : "Contributor",
      health: ready ? "Clear" : "Needs source review",
      task: ready ? "Monitor" : "Review scope",
      actionPath: "Open the sealed report, confirm member scope, and decide whether the role should stay active.",
      receipt: ready ? "member_report_scope_active" : "member_report_scope_review",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "MEMBER-091-001",
      state: "Active",
      title: "Founder owner stays clearly accountable.",
      summary: "The owner record shows workspace scope, last action, recovery authority, and the last-owner protection state.",
      member: "Dhiraj Owner",
      role: "Owner",
      health: "Clear",
      task: "Monitor",
      actionPath: "Keep owner visible, show recovery authority, and block any action that would remove the final owner.",
      receipt: "owner_member_active",
      href: "access.html",
      action: "Open access",
    },
    {
      contract: "MEMBER-091-002",
      state: "Active",
      title: "Reviewer access is accepted and bounded.",
      summary: "The reviewer can approve sealed answers, add notes, and route issues without gaining owner-level controls.",
      member: "Maya Shah",
      role: "Reviewer",
      health: "Clear",
      task: "Monitor",
      actionPath: "Show accepted invite, allowed actions, last review, and next owner-visible approval task.",
      receipt: "reviewer_member_active",
      href: "invite.html",
      action: "Open invite flow",
    },
    {
      contract: "MEMBER-091-003",
      state: "Task",
      title: "Contributor scope needs owner confirmation.",
      summary: "Contributors can draft and attach proof, but approval and external share controls stay outside their role.",
      member: "Omar Khan",
      role: "Contributor",
      health: "Scope review",
      task: "Confirm role",
      actionPath: "Confirm the contributor can draft only, then record the role receipt or downgrade to viewer.",
      receipt: "contributor_scope_pending",
      href: "policy.html",
      action: "Open policy",
    },
    {
      contract: "MEMBER-091-004",
      state: "Active",
      title: "Viewer access stays read-only.",
      summary: "Viewers can inspect safe report summaries without reaching drafts, private notes, raw evidence, or buyer controls.",
      member: "Leena Patel",
      role: "Viewer",
      health: "Clear",
      task: "Monitor",
      actionPath: "Show read-only access, visible reports, hidden surfaces, and receipt of the viewer boundary.",
      receipt: "viewer_member_active",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "MEMBER-091-005",
      state: "Review task",
      title: "Role change queue catches permission drift.",
      summary: "A requested reviewer-to-owner promotion cannot happen quietly; it needs owner approval and a reason.",
      member: "Maya Shah",
      role: "Reviewer -> Owner",
      health: "Role drift",
      task: "Approve or hold",
      actionPath: "Compare current role, requested role, allowed actions, reason, and last activity before approval.",
      receipt: "role_change_review",
      href: "ledger.html",
      action: "Open ledger",
    },
    {
      contract: "MEMBER-091-006",
      state: "Watch",
      title: "Access health flags inactivity before renewal.",
      summary: "Inactive members create review tasks before renewal so dormant access does not survive by accident.",
      member: "Nora Lewis",
      role: "Viewer",
      health: "Inactive 21 days",
      task: "Renew or revoke",
      actionPath: "Ask the owner to renew, revoke, or downgrade the member based on recent workspace value.",
      receipt: "inactive_member_watch",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "MEMBER-091-007",
      state: "Task",
      title: "Renewal task prevents silent expiry.",
      summary: "Expiring access becomes a short owner decision instead of a hidden calendar problem.",
      member: "Samir Ali",
      role: "Reviewer",
      health: "Expires in 3 days",
      task: "Renew access",
      actionPath: "Renew for 30 days, downgrade to viewer, or let access expire with a receipt.",
      receipt: "member_renewal_due",
      href: "recovery.html",
      action: "Open recovery",
    },
    {
      contract: "MEMBER-091-008",
      state: "Ready",
      title: "Revocation keeps the audit trail intact.",
      summary: "Removing a member should close access, preserve decisions, and keep previous approvals understandable.",
      member: "Former reviewer",
      role: "Revoked reviewer",
      health: "Closed",
      task: "Archive receipt",
      actionPath: "Revoke access, lock future actions, preserve historic approvals, and write the revocation receipt.",
      receipt: "member_revoked",
      href: "rollback.html",
      action: "Open rollback",
    },
    {
      contract: "MEMBER-091-009",
      state: "Hold",
      title: "Buyer-link overlap needs owner review.",
      summary: "If a member also owns a buyer link, the console holds revocation until buyer-safe access is handled.",
      member: "Sales owner",
      role: "Reviewer + buyer link",
      health: "Buyer-link overlap",
      task: "Resolve link",
      actionPath: "Reassign or revoke buyer link before changing the internal role.",
      receipt: "buyer_overlap_hold",
      href: "buyer.html",
      action: "Open buyer portal",
    },
    {
      contract: "MEMBER-091-010",
      state: "Active",
      title: "Private beta readiness requires member clarity.",
      summary: "The workspace is closer to launch when members, roles, health, tasks, and receipts are visible together.",
      member: "Pilot workspace",
      role: "All roles",
      health: "Beta-ready path",
      task: "Run checklist",
      actionPath: "Check owners, reviewers, contributors, viewers, renewals, revocations, buyer links, and receipts.",
      receipt: "member_console_ready",
      href: "versions.html",
      action: "Open roadmap",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderPrivateBetaOnboardingRoom() {
  if (!privateBetaOnboardingList) return;
  const entries = buildPrivateBetaOnboardingItems();
  const readyCount = entries.filter((entry) => entry.state.includes("Ready") || entry.state.includes("Complete")).length;
  const holdCount = entries.filter((entry) => entry.state.includes("Hold")).length;
  const taskCount = entries.filter((entry) => entry.state.includes("Task") || entry.state.includes("Review")).length;

  if (privateBetaOnboardingScore) privateBetaOnboardingScore.textContent = `${readyCount}/${entries.length} promise-ready`;
  if (privateBetaOnboardingStatus) {
    privateBetaOnboardingStatus.textContent = `${taskCount} owner tasks and ${holdCount} holds are visible before a beta customer enters first-week setup.`;
  }

  privateBetaOnboardingList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Ready") || entry.state.includes("Complete")
      ? "is-ready"
      : entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Task") || entry.state.includes("Review")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-onboarding-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-onboarding-meta">
        <div>
          <dt>Step</dt>
          <dd>${escapePublicHtml(entry.step)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(entry.signal)}</dd>
        </div>
        <div>
          <dt>Gate</dt>
          <dd>${escapePublicHtml(entry.gate)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Promise check</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Onboarding receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    privateBetaOnboardingList.append(card);
  });
}

function buildPrivateBetaOnboardingItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      contract: `ONBOARD-250-L${index + 1}`,
      state: ready ? "Ready" : "Review task",
      title: report.prompt || "Saved report can become a first-week proof asset.",
      summary: "A sealed report can seed onboarding when score, sources, owner, and reuse decision are visible before setup.",
      step: index === 0 ? "First sealed answer" : "Proof memory",
      owner: ready ? "Customer owner" : "Review owner",
      signal: ready ? `${score}% trust score` : "Needs stronger proof",
      gate: ready ? "Add to proof checklist" : "Hold until reviewed",
      actionPath: "Open the sealed report, confirm the attached sources, and decide whether it belongs in the customer proof checklist.",
      receipt: ready ? "first_week_proof_asset_added" : "proof_asset_review_needed",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "ONBOARD-250-001",
      state: "Ready",
      title: "First workflow is named before kickoff.",
      summary: "The beta starts with one buyer review or AI-answer flow the customer already needs, not a broad platform tour.",
      step: "Workflow",
      owner: "Founder owner",
      signal: "Security questionnaire",
      gate: "Scope accepted",
      actionPath: "Name the first customer workflow, the first buyer question set, and the exact outcome that counts as week-one value.",
      receipt: "first_workflow_promise_set",
      href: "invite.html",
      action: "Open invite control",
    },
    {
      contract: "ONBOARD-250-002",
      state: "Ready",
      title: "Proof checklist starts with three customer assets.",
      summary: "Policy, report, and real buyer question become the minimum proof pack for the first verified answer.",
      step: "Proof",
      owner: "Customer owner",
      signal: "3 assets named",
      gate: "Checklist started",
      actionPath: "Capture the three starting assets, who owns each one, and which source supports the first customer answer.",
      receipt: "proof_checklist_started",
      href: "records.html",
      action: "Open records",
    },
    {
      contract: "ONBOARD-250-003",
      state: "Ready",
      title: "Support cadence is visible.",
      summary: "The first week has a named support owner, a weekly touch, and a blocker path before the customer waits.",
      step: "Cadence",
      owner: "Founder support",
      signal: "Weekly touch set",
      gate: "Cadence accepted",
      actionPath: "Confirm the check-in day, blocker owner, expected response time, and where first-week notes will be recorded.",
      receipt: "support_cadence_set",
      href: "pilot.html",
      action: "Open pilot",
    },
    {
      contract: "ONBOARD-250-004",
      state: "Review task",
      title: "First review receipt defines success.",
      summary: "The onboarding promise is stronger when the first sealed answer has a score, sources, customer feedback, and next step.",
      step: "Receipt",
      owner: "Review owner",
      signal: "Receipt template",
      gate: "Customer approve",
      actionPath: "Define what the first review receipt must show: prompt, answer, sources, score, risk flags, customer note, and next action.",
      receipt: "first_review_receipt_previewed",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "ONBOARD-250-005",
      state: "Task",
      title: "Customer kickoff note needs plain-language promise copy.",
      summary: "The customer should see the narrow first-week path before setup starts, with no vague automation claims.",
      step: "Message",
      owner: "Founder",
      signal: "Copy draft",
      gate: "Buyer-safe wording",
      actionPath: "Write the customer note with the first workflow, proof request, owner, cadence, and first receipt in one calm paragraph.",
      receipt: "kickoff_promise_copy_pending",
      href: "./#pilot",
      action: "Open pilot copy",
    },
    {
      contract: "ONBOARD-250-006",
      state: "Ready",
      title: "Invite control memory carries into setup.",
      summary: "Cohort fit, support capacity, buyer-safe message, and rollback path remain attached after the invite is accepted.",
      step: "Handoff",
      owner: "Beta owner",
      signal: "Invite receipt",
      gate: "Can onboard",
      actionPath: "Use the invite-control receipt as the source for customer fit, support budget, and rollback path during onboarding.",
      receipt: "invite_memory_handed_to_onboarding",
      href: "readiness.html",
      action: "Open readiness",
    },
    {
      contract: "ONBOARD-250-007",
      state: "Review task",
      title: "Buyer portal target needs source copy mode.",
      summary: "If the first workflow ends in a buyer portal, the customer needs copy-ready answer, citations, and submission notes.",
      step: "Portal",
      owner: "Sales owner",
      signal: "Portal path",
      gate: "Copy mode ready",
      actionPath: "Confirm whether the first answer will be copied into a buyer portal, shared as a report, or routed for owner approval.",
      receipt: "portal_handoff_path_pending",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      contract: "ONBOARD-250-008",
      state: "Hold",
      title: "No onboarding without a named customer owner.",
      summary: "A customer can accept the invite, but setup waits if no one owns proof collection, first review, and feedback.",
      step: "Owner",
      owner: "Customer",
      signal: "Owner missing",
      gate: "Hold setup",
      actionPath: "Ask for the customer owner before scheduling setup; do not start a workflow that has no proof or decision owner.",
      receipt: "customer_owner_required",
      href: "member.html",
      action: "Open members",
    },
    {
      contract: "ONBOARD-250-009",
      state: "Task",
      title: "First-week support note should feed learning safely.",
      summary: "Customer feedback becomes useful only after private context is separated from reusable product lessons.",
      step: "Learning",
      owner: "Product owner",
      signal: "Feedback boundary",
      gate: "Tenant-safe",
      actionPath: "Capture what improved the customer workflow, what stays tenant-local, and what can become a safe product pattern.",
      receipt: "first_week_learning_boundary_pending",
      href: "learning.html",
      action: "Open learning",
    },
    {
      contract: "ONBOARD-250-010",
      state: "Complete",
      title: "Beta onboarding is ready when the promise is repeatable.",
      summary: "Every accepted invite can move through setup, proof, cadence, first receipt, and handoff without improvisation.",
      step: "Runbook",
      owner: "Launch owner",
      signal: "Promise repeatable",
      gate: "Beta onboarding",
      actionPath: "Use this page as the customer onboarding runbook until v2.8 turns the handoff into an invite, narrow, wait, or hold decision.",
      receipt: "beta_onboarding_promise_ready",
      href: "pricing.html",
      action: "Open pricing",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderPilotLaunchControlCenter() {
  if (!pilotLaunchList) return;
  const entries = buildPilotLaunchItems();
  const readyCount = entries.filter((entry) => entry.state.includes("Ready") || entry.state.includes("Complete")).length;
  const holdCount = entries.filter((entry) => entry.state.includes("Hold")).length;
  const taskCount = entries.filter((entry) => entry.state.includes("Task") || entry.state.includes("Review")).length;

  if (pilotLaunchScore) pilotLaunchScore.textContent = `${readyCount}/${entries.length} launch-ready`;
  if (pilotLaunchStatus) {
    pilotLaunchStatus.textContent = `${taskCount} owner tasks and ${holdCount} launch holds are visible before production go-live.`;
  }

  pilotLaunchList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Ready") || entry.state.includes("Complete")
      ? "is-ready"
      : entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Task") || entry.state.includes("Review")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-launch-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-launch-meta">
        <div>
          <dt>Launch</dt>
          <dd>${escapePublicHtml(entry.pilot)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Health</dt>
          <dd>${escapePublicHtml(entry.health)}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>${escapePublicHtml(entry.decision)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Launch action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Launch receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    pilotLaunchList.append(card);
  });
}

function buildPilotLaunchItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 86;
    return {
      contract: `LAUNCH-097-L${index + 1}`,
      state: ready ? "Ready" : "Review task",
      title: report.prompt || "Saved sealed report feeds production launch proof.",
      summary: "A saved report becomes launch evidence when score, sources, owner review, share state, and customer-safe scope travel together.",
      pilot: index === 0 ? "Aster Health go-live" : "Launch proof pack",
      owner: ready ? "Launch owner" : "Reviewer",
      health: ready ? `${score}% trust` : "Proof hold",
      decision: ready ? "Attach to launch receipt" : "Route proof fix",
      actionPath: "Open the sealed report, confirm source rights, then decide whether it can become part of the customer launch receipt.",
      receipt: ready ? "sealed_report_launch_ready" : "sealed_report_launch_review",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "LAUNCH-097-001",
      state: "Ready",
      title: "Production account setup is launch-ready.",
      summary: "Workspace, customer owner, admin owner, first reviewer, proof pack, buyer-safe links, and data scope have a go-live receipt.",
      pilot: "Aster Health production",
      owner: "Launch owner",
      health: "Account baseline",
      decision: "Prepare go-live",
      actionPath: "Confirm workspace setup before production use starts so the customer and internal team share one visible source of truth.",
      receipt: "production_account_setup_ready",
      href: "onboarding.html",
      action: "Open onboarding",
    },
    {
      contract: "LAUNCH-097-002",
      state: "Task",
      title: "Billing handoff needs package boundaries.",
      summary: "Seat count, workspace limits, expansion package, renewal term, invoice contact, and commercial owner need one clean handoff.",
      pilot: "Billing scope",
      owner: "Founder",
      health: "2 open terms",
      decision: "Scope before launch",
      actionPath: "Name the billing owner and freeze launch scope before inviting more customer users into the production workspace.",
      receipt: "billing_handoff_terms_open",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "LAUNCH-097-003",
      state: "Ready",
      title: "Launch proof health is measurable.",
      summary: "Trust score, source coverage, saved report reuse, customer activity, and open holds show whether go-live is getting safer.",
      pilot: "Launch health",
      owner: "AI governance",
      health: "83% coverage",
      decision: "Attach health review",
      actionPath: "Use proof health as the go-live quality signal before changing customer scope or promising production outcomes.",
      receipt: "launch_proof_health_measured",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "LAUNCH-097-004",
      state: "Review task",
      title: "Support plan needs an accountable response owner.",
      summary: "The first production customer needs onboarding cadence, response owner, proof refresh rhythm, and escalation path before go-live.",
      pilot: "Support plan",
      owner: "Customer success",
      health: "Owner pending",
      decision: "Route support",
      actionPath: "Assign a customer response owner and define how proof gaps, escalations, and weekly health reviews are handled.",
      receipt: "support_owner_routed",
      href: "buyer.html",
      action: "Open buyer room",
    },
    {
      contract: "LAUNCH-097-005",
      state: "Ready",
      title: "Customer-safe launch receipt has a draft.",
      summary: "Go-live can be decided from proof health, billing scope, support owner, buyer access, data boundary, and rollback path.",
      pilot: "Launch receipt",
      owner: "Founder owner",
      health: "Decision-ready",
      decision: "Draft receipt",
      actionPath: "Write the launch decision in plain language and include only the scope, owners, holds, rollback path, and first success review.",
      receipt: "customer_safe_launch_receipt_draft",
      href: "versions.html",
      action: "Open build plan",
    },
    {
      contract: "LAUNCH-097-006",
      state: "Hold",
      title: "Data boundary hold blocks production launch.",
      summary: "The customer can expand, but durable workspace storage, buyer link history, regional rules, and cross-tenant learning need explicit approval.",
      pilot: "Production gate",
      owner: "Product owner",
      health: "Boundary hold",
      decision: "Document limits",
      actionPath: "Explain which records are production-backed, which stay customer-local, and which learning signals are never shared.",
      receipt: "production_data_boundary_hold",
      href: "data.html",
      action: "Open data layer",
    },
    {
      contract: "LAUNCH-097-007",
      state: "Ready",
      title: "Launch receipt links back to expansion proof.",
      summary: "Expansion signal, stakeholder map, billing scope, support plan, proof assets, and go-live decision remain traceable.",
      pilot: "Receipt trail",
      owner: "Launch owner",
      health: "Trace complete",
      decision: "Retain receipt",
      actionPath: "Keep the launch receipt connected to expansion proof so the next production customer can repeat the path cleanly.",
      receipt: "launch_receipt_traced",
      href: "expansion.html",
      action: "Open expansion",
    },
    {
      contract: "LAUNCH-097-008",
      state: "Task",
      title: "First success review needs a production owner.",
      summary: "The launch has scope, but the first production review needs one owner, one date, and one success measure.",
      pilot: "Success review",
      owner: "Founder",
      health: "Review signal",
      decision: "Schedule review",
      actionPath: "Name the production success owner and define the first review proof: workflow saved, time saved, risk reduced, or buyer unblocked.",
      receipt: "production_success_owner_pending",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "LAUNCH-097-009",
      state: "Ready",
      title: "Learning loop has launch-safe boundaries.",
      summary: "Production can learn from outcomes while raw customer context, private evidence, tenant records, and regional rules stay protected.",
      pilot: "Learning boundary",
      owner: "AI governance",
      health: "Safe notes",
      decision: "Use local only",
      actionPath: "Capture reusable lessons as abstract proof patterns, never raw customer questions, files, prompts, or account names.",
      receipt: "launch_safe_learning_boundary",
      href: "learning.html",
      action: "Open learning",
    },
    {
      contract: "LAUNCH-097-010",
      state: "Complete",
      title: "Production launch room is repeatable.",
      summary: "The first production customer has a simple operating layer: readiness, billing, support, proof health, hold path, and launch receipt.",
      pilot: "Launch model",
      owner: "Founder owner",
      health: "Repeatable rhythm",
      decision: "Go live carefully",
      actionPath: "Use this room as the operating layer until production backend, billing, support, and customer success become real systems.",
      receipt: "production_launch_room_ready",
      href: "pricing.html",
      action: "Open paid path",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderPaidPilotConversionRoom() {
  if (!paidPilotConversionList) return;
  const entries = buildPaidPilotConversionItems();
  const readyCount = entries.filter((entry) => (
    entry.state.includes("Ready") || entry.state.includes("Ask") || entry.state.includes("Complete")
  )).length;
  const holdCount = entries.filter((entry) => entry.state.includes("Hold")).length;
  const termsCount = entries.filter((entry) => entry.state.includes("Terms")).length;

  if (paidPilotConversionScore) paidPilotConversionScore.textContent = `${readyCount}/${entries.length} close-ready`;
  if (paidPilotConversionStatus) {
    paidPilotConversionStatus.textContent = `${termsCount} terms packets and ${holdCount} proof holds shape the paid pilot ask.`;
  }

  paidPilotConversionList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Ready") || entry.state.includes("Ask") || entry.state.includes("Complete")
      ? "is-ready"
      : entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Terms") || entry.state.includes("Review") || entry.state.includes("Owner")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-conversion-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-conversion-meta">
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(entry.signal)}</dd>
        </div>
        <div>
          <dt>Packet</dt>
          <dd>${escapePublicHtml(entry.packet)}</dd>
        </div>
        <div>
          <dt>Terms</dt>
          <dd>${escapePublicHtml(entry.terms)}</dd>
        </div>
        <div>
          <dt>Receipt</dt>
          <dd>${escapePublicHtml(entry.receipt)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Close action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Conversion memory</span>
        <p>${escapePublicHtml(entry.memory)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    paidPilotConversionList.append(card);
  });
}

function buildPaidPilotConversionItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 88;
    return {
      contract: `CONVERT-094-L${index + 1}`,
      state: ready ? "Ask ready" : "Review Hold",
      title: report.prompt || "Saved sealed report can enter the buyer proof packet.",
      summary: "A saved report becomes commercial proof only when score, source support, safe excerpt, and buyer relevance are visible.",
      signal: ready ? `${score}% trust` : `${score}% needs owner review`,
      packet: ready ? "Use as proof excerpt" : "Improve before packet",
      terms: ready ? "Attach to success measure" : "Hold paid ask",
      receipt: ready ? "proof_packet_candidate" : "proof_packet_hold",
      actionPath: "Open the sealed report, select the safest excerpt, and decide whether it supports a paid pilot ask.",
      memory: ready ? "buyer_proof_packet_seeded" : "buyer_proof_packet_needs_fix",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "CONVERT-094-001",
      state: "Ask ready",
      title: "Conversion signal says the paid pilot ask is earned.",
      summary: "Proof health, buyer activity, owner task closure, and weekly decision history support a direct commercial ask.",
      signal: "82% close signal",
      packet: "Proof packet ready",
      terms: "2-week paid pilot",
      receipt: "ask_ready",
      actionPath: "Send a concise paid pilot ask with one success measure, one timeline, and one implementation next step.",
      memory: "conversion_signal_earned",
      href: "launch.html",
      action: "Open launch",
    },
    {
      contract: "CONVERT-094-002",
      state: "Terms draft",
      title: "Paid pilot terms are bounded enough to share.",
      summary: "Scope, timeline, success measure, data boundary, pricing anchor, and implementation owner are visible in one packet.",
      signal: "Commercially bounded",
      packet: "Terms included",
      terms: "$2.5k pilot anchor",
      receipt: "terms_draft_ready",
      actionPath: "Use narrow terms so the customer can say yes without needing a full enterprise rollout decision.",
      memory: "paid_pilot_terms_bounded",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "CONVERT-094-003",
      state: "Ready",
      title: "Buyer proof packet has safe customer language.",
      summary: "Verified answers, source coverage, proof health, pilot movement, and safe excerpts are grouped for the buyer champion.",
      signal: "Champion-ready",
      packet: "4 proof blocks",
      terms: "Success tied to proof",
      receipt: "buyer_packet_ready",
      actionPath: "Give the champion a packet they can forward internally without exposing raw workspace evidence.",
      memory: "safe_buyer_packet_ready",
      href: "buyer.html",
      action: "Open buyer room",
    },
    {
      contract: "CONVERT-094-004",
      state: "Owner review",
      title: "Founder close script needs one named owner.",
      summary: "The ask is almost ready, but the final message needs owner, buyer contact, next meeting, and response path.",
      signal: "Owner needed",
      packet: "Draft complete",
      terms: "Needs sender",
      receipt: "owner_pending",
      actionPath: "Name the person who will make the ask and keep the message calm: problem, proof, paid pilot, next step.",
      memory: "founder_close_owner_pending",
      href: "./#pilot",
      action: "Open pilot request",
    },
    {
      contract: "CONVERT-094-005",
      state: "Hold",
      title: "Data boundary still blocks expansion language.",
      summary: "The pilot can convert, but the paid proposal must not imply production-grade persistence until backend scope is explicit.",
      signal: "Boundary risk",
      packet: "Use safe wording",
      terms: "Limit data scope",
      receipt: "boundary_hold",
      actionPath: "Keep the paid pilot terms narrow and say which data remains demo-local until production persistence is shipped.",
      memory: "data_boundary_conversion_hold",
      href: "data.html",
      action: "Open data layer",
    },
    {
      contract: "CONVERT-094-006",
      state: "Ready",
      title: "Success measure converts product value into buyer value.",
      summary: "The customer should buy a measurable result: faster first draft, fewer unsourced answers, or smoother security review.",
      signal: "Value clear",
      packet: "Metric selected",
      terms: "One success measure",
      receipt: "success_measure_ready",
      actionPath: "Pick one business outcome and avoid promising broad AI governance before the paid pilot proves the workflow.",
      memory: "success_measure_buyer_ready",
      href: "benefit.html",
      action: "Open benefit",
    },
    {
      contract: "CONVERT-094-007",
      state: "Terms draft",
      title: "Implementation step is small enough to start.",
      summary: "The paid pilot starts with one team, one questionnaire, three proof assets, a weekly review, and a close receipt.",
      signal: "Start small",
      packet: "Scope attached",
      terms: "1 workflow",
      receipt: "implementation_step_ready",
      actionPath: "Keep implementation simple so the first paid buyer feels progress in days, not a platform rollout in months.",
      memory: "small_implementation_step_ready",
      href: "onboarding.html",
      action: "Open onboarding",
    },
    {
      contract: "CONVERT-094-008",
      state: "Ask ready",
      title: "Close receipt is ready before the message goes out.",
      summary: "The ask, buyer response, next owner action, proof gap, terms state, and decision can be captured after outreach.",
      signal: "Receipt ready",
      packet: "Proof attached",
      terms: "Ask ready",
      receipt: "close_receipt_ready",
      actionPath: "Prepare the receipt first so every buyer reply becomes useful learning rather than a lost sales note.",
      memory: "founder_close_receipt_ready",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "CONVERT-094-009",
      state: "Hold",
      title: "Weak proof should pause the paid ask.",
      summary: "If buyer activity is low, source coverage is stale, or owner tasks remain open, the system should hold the close.",
      signal: "Proof weak",
      packet: "Do not send",
      terms: "Hold ask",
      receipt: "proof_hold",
      actionPath: "Route the next fix instead of forcing conversion. Calm SaaS wins by knowing when not to sell yet.",
      memory: "paid_ask_held_for_proof",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "CONVERT-094-010",
      state: "Complete",
      title: "Paid pilot conversion loop is repeatable.",
      summary: "Every pilot can now move from proof health to buyer packet, terms, founder ask, response, and next learning loop.",
      signal: "Repeatable loop",
      packet: "Reusable template",
      terms: "Ready to iterate",
      receipt: "conversion_loop_ready",
      actionPath: "Reuse the same conversion room for every pilot until billing, customer success, and renewal motions are production-ready.",
      memory: "paid_pilot_conversion_repeatable",
      href: "versions.html",
      action: "Open build plan",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderPaidPilotSuccessRoom() {
  if (!paidPilotSuccessList) return;
  const entries = buildPaidPilotSuccessItems();
  const readyCount = entries.filter((entry) => (
    entry.state.includes("Active") || entry.state.includes("Renewal") || entry.state.includes("Story")
  )).length;
  const riskCount = entries.filter((entry) => entry.state.includes("Risk") || entry.state.includes("Hold")).length;
  const measureCount = entries.filter((entry) => entry.state.includes("Measure") || entry.state.includes("Outcome")).length;

  if (paidPilotSuccessScore) paidPilotSuccessScore.textContent = `${readyCount}/${entries.length} success-ready`;
  if (paidPilotSuccessStatus) {
    paidPilotSuccessStatus.textContent = `${measureCount} outcome loops and ${riskCount} risk holds decide renewal confidence.`;
  }

  paidPilotSuccessList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Active") || entry.state.includes("Renewal") || entry.state.includes("Story")
      ? "is-ready"
      : entry.state.includes("Risk") || entry.state.includes("Hold")
        ? "is-held"
        : entry.state.includes("Measure") || entry.state.includes("Outcome")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-conversion-card proof-success-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-conversion-meta proof-success-meta">
        <div>
          <dt>Activation</dt>
          <dd>${escapePublicHtml(entry.activation)}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>${escapePublicHtml(entry.outcome)}</dd>
        </div>
        <div>
          <dt>Renewal</dt>
          <dd>${escapePublicHtml(entry.renewal)}</dd>
        </div>
        <div>
          <dt>Proof story</dt>
          <dd>${escapePublicHtml(entry.story)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Success action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Success memory</span>
        <p>${escapePublicHtml(entry.memory)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    paidPilotSuccessList.append(card);
  });
}

function buildPaidPilotSuccessItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const strong = score >= 88;
    return {
      contract: `SUCCESS-095-L${index + 1}`,
      state: strong ? "Story ready" : "Outcome Hold",
      title: report.prompt || "Saved sealed report can become a paid pilot outcome.",
      summary: "A sealed report becomes success proof only when the customer outcome, source trail, and renewal use case are visible.",
      activation: strong ? "First proof reused" : "Needs owner note",
      outcome: strong ? `${score}% proof quality` : `${score}% needs lift`,
      renewal: strong ? "Can support memo" : "Hold renewal signal",
      story: strong ? "Safe excerpt candidate" : "Do not quote yet",
      actionPath: "Open the sealed report, connect it to a customer outcome, and decide whether it supports renewal or a case note.",
      memory: strong ? "paid_pilot_success_story_seeded" : "paid_pilot_success_hold",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "SUCCESS-095-001",
      state: "Active",
      title: "Activation plan is clear enough for week one.",
      summary: "The paid pilot starts with one owner, one workspace, one questionnaire, three proof assets, and one success measure.",
      activation: "Week-one plan",
      outcome: "Baseline set",
      renewal: "Too early",
      story: "Setup receipt",
      actionPath: "Keep activation narrow so the customer sees useful proof inside the first few working days.",
      memory: "week_one_activation_ready",
      href: "onboarding.html",
      action: "Open onboarding",
    },
    {
      contract: "SUCCESS-095-002",
      state: "Measure",
      title: "Outcome tracker connects product usage to buyer value.",
      summary: "Time saved, proof gaps closed, buyer questions answered, and reviewer confidence become the first paid pilot scorecard.",
      activation: "Usage started",
      outcome: "4 value signals",
      renewal: "Monitor weekly",
      story: "Metric trail",
      actionPath: "Track only the outcomes the buyer already cares about instead of inventing vanity platform metrics.",
      memory: "paid_pilot_outcome_scorecard",
      href: "benefit.html",
      action: "Open benefit",
    },
    {
      contract: "SUCCESS-095-003",
      state: "Renewal ready",
      title: "Renewal signal is strong enough for a customer check-in.",
      summary: "Adoption, trust score, proof coverage, and buyer activity show enough value to ask whether the pilot should continue.",
      activation: "Adopted",
      outcome: "Proof gaps down",
      renewal: "Check-in ready",
      story: "Champion memo",
      actionPath: "Ask for renewal feedback from proof, not pressure: what worked, what blocked value, and what should expand next.",
      memory: "renewal_signal_ready",
      href: "conversion.html",
      action: "Open conversion",
    },
    {
      contract: "SUCCESS-095-004",
      state: "Risk Hold",
      title: "Outcome is not strong enough to expand yet.",
      summary: "The customer has activity, but stale proof, unresolved owner tasks, or unclear value should hold expansion language.",
      activation: "Partially active",
      outcome: "Mixed signal",
      renewal: "Hold expansion",
      story: "Do not publish",
      actionPath: "Fix the next blocker before turning the pilot into a renewal or customer story.",
      memory: "paid_pilot_expansion_hold",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "SUCCESS-095-005",
      state: "Story ready",
      title: "Customer proof story has safe, shareable language.",
      summary: "The story uses approved evidence, anonymized context, measurable outcome, and buyer-safe wording.",
      activation: "Customer active",
      outcome: "Value visible",
      renewal: "Supports ask",
      story: "Safe case note",
      actionPath: "Package only the outcome, workflow, and proof method. Keep raw buyer files, prompts, and private evidence out of the story.",
      memory: "safe_customer_proof_story",
      href: "buyer.html",
      action: "Open buyer room",
    },
    {
      contract: "SUCCESS-095-006",
      state: "Outcome",
      title: "Weekly success review has one decision.",
      summary: "The founder can decide continue, fix, renew, expand, or pause from one success room instead of scattered notes.",
      activation: "Operating rhythm",
      outcome: "Weekly review",
      renewal: "Decision lane",
      story: "Receipt ready",
      actionPath: "Keep the weekly success decision plain: what changed, what proof supports it, and who owns the next action.",
      memory: "weekly_success_review_ready",
      href: "launch.html",
      action: "Open launch",
    },
    {
      contract: "SUCCESS-095-007",
      state: "Active",
      title: "Buyer champion has a proof packet for internal sharing.",
      summary: "The champion can forward a clean memo with outcome, verified answer examples, source coverage, and next-step terms.",
      activation: "Champion engaged",
      outcome: "Internal proof",
      renewal: "Memo ready",
      story: "Forwardable",
      actionPath: "Make the champion look prepared: one page, one outcome, one source-backed example, and one renewal next step.",
      memory: "champion_success_packet_ready",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "SUCCESS-095-008",
      state: "Risk Hold",
      title: "Production scope is still separate from pilot success.",
      summary: "The paid pilot can succeed while production persistence, account controls, billing, and integrations remain launch holds.",
      activation: "Pilot scope",
      outcome: "Value proven",
      renewal: "Scope carefully",
      story: "Mention limits",
      actionPath: "Do not confuse pilot success with enterprise readiness. Show what is proven and what remains before production rollout.",
      memory: "pilot_success_scope_boundary",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      contract: "SUCCESS-095-009",
      state: "Renewal ready",
      title: "Pricing path matches proven customer value.",
      summary: "The next proposal can reference the measured pilot outcome, governance needs, and team workflow depth.",
      activation: "Buyer sees value",
      outcome: "Pricing basis",
      renewal: "Offer ready",
      story: "Value memo",
      actionPath: "Use pilot evidence to choose a simple renewal ask instead of jumping straight into a complex enterprise package.",
      memory: "renewal_pricing_path_ready",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "SUCCESS-095-010",
      state: "Story ready",
      title: "Paid pilot success loop is repeatable.",
      summary: "Every paid pilot can now move from activation to measured outcome, renewal signal, customer story, and safe learning receipt.",
      activation: "Repeatable setup",
      outcome: "Outcome loop",
      renewal: "Expansion-ready",
      story: "Reusable method",
      actionPath: "Use the same success room for every paid pilot until customer success, billing, and production onboarding become real systems.",
      memory: "paid_pilot_success_loop_ready",
      href: "versions.html",
      action: "Open build plan",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderCustomerExpansionRoom() {
  if (!customerExpansionList) return;
  const entries = buildCustomerExpansionItems();
  const readyCount = entries.filter((entry) => entry.state.includes("Renewal ready") || entry.state.includes("Growth ready") || entry.state.includes("Complete")).length;
  const holdCount = entries.filter((entry) => entry.state.includes("Hold") || entry.state.includes("Recover") || entry.state.includes("Watch")).length;
  const valueCount = entries.filter((entry) => entry.state.includes("Value") || entry.state.includes("Renewal")).length;

  if (customerExpansionScore) customerExpansionScore.textContent = `${readyCount}/${entries.length} renewal-ready`;
  if (customerExpansionStatus) {
    customerExpansionStatus.textContent = `${valueCount} value signals and ${holdCount} recovery paths decide whether growth is earned.`;
  }

  customerExpansionList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("ready") || entry.state.includes("Complete")
      ? "is-ready"
      : entry.state.includes("Hold") || entry.state.includes("Recover") || entry.state.includes("Watch")
        ? "is-held"
        : entry.state.includes("Value") || entry.state.includes("Renewal")
          ? "is-gate"
          : "is-design";
    card.className = `proof-memory-card proof-conversion-card proof-success-card proof-expansion-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.contract)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-conversion-meta proof-success-meta proof-expansion-meta">
        <div>
          <dt>Renewal</dt>
          <dd>${escapePublicHtml(entry.renewal)}</dd>
        </div>
        <div>
          <dt>Value</dt>
          <dd>${escapePublicHtml(entry.value)}</dd>
        </div>
        <div>
          <dt>Risk</dt>
          <dd>${escapePublicHtml(entry.risk)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Growth action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Growth receipt</span>
        <p>${escapePublicHtml(entry.memory)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    customerExpansionList.append(card);
  });
}

function buildCustomerExpansionItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 2).map((report, index) => {
    const score = Number(report.score || 0);
    const strong = score >= 88;
    return {
      contract: `RENEW-099-L${index + 1}`,
      state: strong ? "Renewal ready" : "Proof Hold",
      title: report.prompt || "Saved sealed report can support renewal growth.",
      summary: "A sealed report becomes renewal proof only when account health, value, risk, and owner action are visible.",
      renewal: strong ? "Value story seeded" : "Hold until sourced",
      value: strong ? `${score}% trust proof` : "Needs stronger proof",
      risk: strong ? "Low proof risk" : "Missing source risk",
      owner: strong ? "Customer success" : "Proof owner",
      actionPath: "Open the sealed report, attach it to an account health story, and decide whether it supports renewal, recovery, expansion, or hold.",
      memory: strong ? "renewal_growth_story_seeded" : "renewal_growth_hold",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      contract: "RENEW-099-001",
      state: "Renewal ready",
      title: "Aster Health has a clean renewal story.",
      summary: "Production health, proof reuse, buyer-room activity, and support load are strong enough to prepare the renewal packet.",
      renewal: "31 days",
      value: "14 hours saved",
      risk: "Low",
      owner: "Maya Shah",
      actionPath: "Package adoption, saved time, proof reuse, and buyer unblock into one executive renewal summary.",
      memory: "renewal_value_story_ready",
      href: "reports.html",
      action: "Open reports",
    },
    {
      contract: "RENEW-099-002",
      state: "Value proof",
      title: "Executive summary is ready for the sponsor.",
      summary: "The customer can see faster responses, fewer unsupported claims, reusable sealed reports, and less support pressure.",
      renewal: "45 days",
      value: "5x first draft",
      risk: "Sponsor review",
      owner: "Customer success",
      actionPath: "Send a calm value summary that explains what improved, what stayed safe, and why renewal is practical.",
      memory: "executive_value_summary_ready",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "RENEW-099-003",
      state: "Recover",
      title: "Low adoption needs a customer success nudge.",
      summary: "The account has solid proof but only one active user this week, so renewal should wait for an adoption recovery action.",
      renewal: "24 days",
      value: "Proof exists",
      risk: "Low adoption",
      owner: "CS owner",
      actionPath: "Schedule a usage review, pick one workflow, and set a seven-day adoption target before sending renewal language.",
      memory: "low_adoption_recovery_path",
      href: "success.html",
      action: "Open success",
    },
    {
      contract: "RENEW-099-004",
      state: "Growth ready",
      title: "Expansion ask is specific enough to price.",
      summary: "The current team is healthy and a second workflow has a named buyer, proof need, scope, and implementation owner.",
      renewal: "Renew plus expand",
      value: "Second workflow",
      risk: "Scope watch",
      owner: "Budget sponsor",
      actionPath: "Separate the renewal from the expansion option: renew the proven value, then attach the next workflow as a clear add-on.",
      memory: "renewal_expansion_option_ready",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      contract: "RENEW-099-005",
      state: "Watch",
      title: "Proof drift could weaken renewal confidence.",
      summary: "The account is active, but one policy source is stale and should be refreshed before customer-facing renewal claims are reused.",
      renewal: "37 days",
      value: "Strong usage",
      risk: "Stale proof",
      owner: "Security owner",
      actionPath: "Refresh the stale source, rerun the trust check, and update the renewal packet before the executive review.",
      memory: "proof_drift_renewal_watch",
      href: "verify.html",
      action: "Verify answer",
    },
    {
      contract: "RENEW-099-006",
      state: "Growth ready",
      title: "Reference readiness is buyer-safe.",
      summary: "The customer has enough value proof to become a reference candidate without exposing private prompts, policies, or buyer context.",
      renewal: "Reference path",
      value: "Customer story",
      risk: "Privacy check",
      owner: "Founder",
      actionPath: "Draft a customer-safe story from abstract value proof and confirm what can be shared before asking for a reference.",
      memory: "buyer_safe_reference_ready",
      href: "buyer.html",
      action: "Open buyer room",
    },
    {
      contract: "RENEW-099-007",
      state: "Renewal ready",
      title: "Support load is low enough for a confident renewal.",
      summary: "Few open gaps, fast owner response, fresh proof, and clean buyer-room activity make the account ready for renewal outreach.",
      renewal: "18 days",
      value: "Low support load",
      risk: "Low",
      owner: "Omar Khan",
      actionPath: "Send renewal language that names the healthy operating signals instead of relying only on product enthusiasm.",
      memory: "support_load_renewal_ready",
      href: "health.html",
      action: "Open health",
    },
    {
      contract: "RENEW-099-008",
      state: "Hold",
      title: "Stakeholder risk blocks expansion language.",
      summary: "The champion is positive, but legal and budget owners have not reviewed the wider deployment path.",
      renewal: "Renew only",
      value: "Champion proof",
      risk: "Stakeholder gap",
      owner: "Sales owner",
      actionPath: "Renew the proven workflow and hold expansion language until the missing stakeholders have a safe packet.",
      memory: "stakeholder_gap_growth_hold",
      href: "conversion.html",
      action: "Open convert",
    },
    {
      contract: "RENEW-099-009",
      state: "Value proof",
      title: "Board-ready renewal note can be copied.",
      summary: "The account summary shows verified-answer volume, proof reuse, buyer unblocks, open risks, and the next customer action.",
      renewal: "Board note",
      value: "Exec summary",
      risk: "Review wording",
      owner: "Founder",
      actionPath: "Copy the value summary into the sponsor update, keeping claims source-backed and renewal-specific.",
      memory: "board_ready_renewal_note",
      href: "report.html",
      action: "Open report",
    },
    {
      contract: "RENEW-099-010",
      state: "Complete",
      title: "Renewal growth loop is repeatable.",
      summary: "Every production customer can now move from health signal to value proof, recovery action, renewal packet, expansion ask, or hold receipt.",
      renewal: "Repeatable",
      value: "Growth method",
      risk: "Governed",
      owner: "Shared room",
      actionPath: "Use the same renewal room for every account until customer success, billing, expansion, and reference motions become real systems.",
      memory: "renewal_growth_loop_ready",
      href: "versions.html",
      action: "Open build plan",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 12);
}

function renderPilotCustomerCommandCenter() {
  if (!pilotCustomerList) return;
  const entries = buildPilotCustomerItems();
  const mappedCount = entries.length;
  const actionCount = entries.filter((entry) => entry.state.includes("Action") || entry.state.includes("Watch") || entry.state.includes("Hold")).length;
  const renewalCount = entries.filter((entry) => entry.renewal.includes("Ready") || entry.renewal.includes("Expand")).length;

  if (pilotCustomerScore) pilotCustomerScore.textContent = `${mappedCount}/10 mapped`;
  if (pilotCustomerStatus) {
    pilotCustomerStatus.textContent = `${actionCount} need owner action; ${renewalCount} show renewal or expansion signal.`;
  }

  pilotCustomerList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Ready") || entry.state.includes("On track")
      ? "is-ready"
      : entry.state.includes("Action") || entry.state.includes("Watch")
        ? "is-gate"
        : entry.state.includes("Hold")
          ? "is-held"
          : "is-design";
    card.className = `proof-memory-card proof-workspace-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.record)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.customer)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-workspace-meta">
        <div>
          <dt>Workflow</dt>
          <dd>${escapePublicHtml(entry.workflow)}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Next check</dt>
          <dd>${escapePublicHtml(entry.nextCheck)}</dd>
        </div>
        <div>
          <dt>Renewal</dt>
          <dd>${escapePublicHtml(entry.renewal)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Customer signal</span>
        <p>${escapePublicHtml(entry.signal)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Founder action</span>
        <p>${escapePublicHtml(entry.actionPath)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Pilot receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    pilotCustomerList.append(card);
  });
}

function buildPilotCustomerItems() {
  const reports = readPublicReports();
  const pilotNames = ["Aster Health", "Northstar Cloud", "Kairo Legal"];
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const ready = score >= 88;
    return {
      record: `PILOT-110-L${index + 1}`,
      state: ready ? "On track" : "Action needed",
      customer: pilotNames[index] || `Pilot ${index + 1}`,
      summary: report.prompt || "Saved sealed report can become a live pilot workflow.",
      workflow: "Verified answer",
      owner: ready ? "Customer success" : "Proof owner",
      nextCheck: ready ? "This week" : "Before buyer share",
      renewal: ready ? "Ready signal" : "Hold",
      signal: ready ? `${score}% trust score can seed the pilot value story.` : "Customer value is possible, but the proof trail needs one more owner action.",
      actionPath: "Use this report in the weekly pilot review: confirm value, log friction, assign owner, and decide renew, recover, expand, or hold.",
      receipt: ready ? "saved_report_pilot_signal" : "saved_report_owner_action",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      record: "PILOT-110-001",
      state: "On track",
      customer: "Aster Health",
      summary: "Security questionnaire pilot is active with clean proof, a named reviewer, and a buyer-safe packet path.",
      workflow: "SOC 2 buyer review",
      owner: "Maya Shah",
      nextCheck: "Tuesday",
      renewal: "Ready signal",
      signal: "Customer says the team can answer buyer reviews without rewriting the same source-backed language.",
      actionPath: "Send the weekly value note: time saved, unsupported claims avoided, proof reused, and next buyer question.",
      receipt: "aster_weekly_value_signal",
      href: "reports.html",
      action: "Open reports",
    },
    {
      record: "PILOT-110-002",
      state: "Action needed",
      customer: "Northstar Cloud",
      summary: "Pilot has strong interest but needs one data-processing proof source before the buyer-safe packet can be shared.",
      workflow: "AI governance answer",
      owner: "Omar Khan",
      nextCheck: "Friday",
      renewal: "Proof hold",
      signal: "Customer quote: 'This is useful, but legal needs the exact source before we reuse it.'",
      actionPath: "Attach the missing DPA excerpt, rerun the verifier, and send a revised sealed report before Friday.",
      receipt: "northstar_missing_source_action",
      href: "verify.html",
      action: "Verify answer",
    },
    {
      record: "PILOT-110-003",
      state: "Ready to expand",
      customer: "Kairo Legal",
      summary: "Legal team finished one workflow and wants the same trust check for client-facing AI memo language.",
      workflow: "Client memo QA",
      owner: "Founder",
      nextCheck: "Monday",
      renewal: "Expand",
      signal: "Second workflow request is specific: same source check, different output template, same approval trail.",
      actionPath: "Price the second workflow as an expansion option and keep the original pilot renewal separate.",
      receipt: "kairo_second_workflow_signal",
      href: "pricing.html",
      action: "Open pricing",
    },
    {
      record: "PILOT-110-004",
      state: "Watch",
      customer: "HelioFin",
      summary: "Finance buyer likes the sealed report, but support questions are rising before the team has a repeatable answer path.",
      workflow: "Vendor risk reply",
      owner: "Customer success",
      nextCheck: "Wednesday",
      renewal: "Support watch",
      signal: "Three support questions mention export format and buyer-link expiry.",
      actionPath: "Turn the support questions into one FAQ-style proof packet and review buyer-link expiry before the next call.",
      receipt: "heliofin_support_watch",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      record: "PILOT-110-005",
      state: "On track",
      customer: "BrightOps",
      summary: "Operations team completed the first saved report and used it in an internal compliance review.",
      workflow: "Internal policy answer",
      owner: "Security reviewer",
      nextCheck: "Thursday",
      renewal: "Ready signal",
      signal: "Pilot value is internal speed: fewer rework cycles before security signs off.",
      actionPath: "Ask for a measured before-and-after cycle time and attach it to the renewal value story.",
      receipt: "brightops_cycle_time_signal",
      href: "success.html",
      action: "Open success",
    },
    {
      record: "PILOT-110-006",
      state: "Hold",
      customer: "CivicBridge",
      summary: "Public-sector pilot should wait until regional evidence rights and buyer-link sharing rules are approved.",
      workflow: "Regional proof packet",
      owner: "Legal owner",
      nextCheck: "Blocked",
      renewal: "Hold",
      signal: "Country-specific proof cannot be reused across tenants until the policy owner approves the boundary.",
      actionPath: "Hold shared-learning influence, document the reason, and route the approval to policy before any buyer packet ships.",
      receipt: "civicbridge_regional_hold",
      href: "policy.html",
      action: "Open policy",
    },
    {
      record: "PILOT-110-007",
      state: "Action needed",
      customer: "Medora Labs",
      summary: "Healthcare pilot needs clearer HIPAA-safe language before the sealed answer becomes buyer-facing.",
      workflow: "Privacy answer QA",
      owner: "AI governance",
      nextCheck: "Tomorrow",
      renewal: "Risk review",
      signal: "Reviewer flagged one sentence as too broad for regulated buyer reuse.",
      actionPath: "Use the risk flag engine, replace the broad claim with sourced wording, and record the reviewer decision.",
      receipt: "medora_regulated_language_action",
      href: "reviews.html",
      action: "Open reviews",
    },
    {
      record: "PILOT-110-008",
      state: "On track",
      customer: "QuantaScale",
      summary: "Pilot reached the first value checkpoint with two saved reports and one clean buyer-safe packet.",
      workflow: "Enterprise security review",
      owner: "Sales engineering",
      nextCheck: "Next week",
      renewal: "Ready signal",
      signal: "Buyer unblock happened without adding a new custom evidence document.",
      actionPath: "Ask the customer to confirm whether the buyer accepted the packet and capture that outcome in the next weekly note.",
      receipt: "quantascale_buyer_unblock_signal",
      href: "concierge.html",
      action: "Open concierge",
    },
    {
      record: "PILOT-110-009",
      state: "Watch",
      customer: "AtlasDesk",
      summary: "The workflow is useful, but the champion has not invited the reviewer who owns final approval.",
      workflow: "Procurement response",
      owner: "Founder",
      nextCheck: "Friday",
      renewal: "Stakeholder watch",
      signal: "Champion positive, reviewer absent.",
      actionPath: "Ask for the reviewer invite, keep the pilot scoped to one questionnaire, and avoid expansion language until approval is visible.",
      receipt: "atlasdesk_reviewer_gap",
      href: "invite.html",
      action: "Open invites",
    },
    {
      record: "PILOT-110-010",
      state: "Ready to expand",
      customer: "SignalForge",
      summary: "Pilot customer has reusable answer memory, a clear buyer packet, and a second team asking for access.",
      workflow: "Reusable answer memory",
      owner: "Founder",
      nextCheck: "Monday",
      renewal: "Expand",
      signal: "Second team request is a strong expansion signal if access and support stay simple.",
      actionPath: "Offer a small paid expansion, name the support owner, and keep the first workflow renewal as the proof base.",
      receipt: "signalforge_expansion_signal",
      href: "access.html",
      action: "Open access",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 10);
}

function renderPilotFeedbackLearningLoop() {
  if (!pilotFeedbackList) return;
  const entries = buildPilotFeedbackItems();
  const ownerReviewCount = entries.filter((entry) => entry.state.includes("Owner") || entry.state.includes("Review")).length;
  const approvedCount = entries.filter((entry) => entry.state.includes("Approved") || entry.state.includes("Ready")).length;
  const heldCount = entries.filter((entry) => entry.state.includes("Hold") || entry.state.includes("Blocked")).length;

  if (pilotFeedbackScore) pilotFeedbackScore.textContent = `${entries.length} signals`;
  if (pilotFeedbackStatus) {
    pilotFeedbackStatus.textContent = `${approvedCount} approved improvements; ${ownerReviewCount} need owner review; ${heldCount} stay held by policy.`;
  }

  pilotFeedbackList.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    const stateClass = entry.state.includes("Approved") || entry.state.includes("Ready")
      ? "is-ready"
      : entry.state.includes("Owner") || entry.state.includes("Review")
        ? "is-gate"
        : entry.state.includes("Hold") || entry.state.includes("Blocked")
          ? "is-held"
          : "is-design";
    card.className = `proof-memory-card proof-workspace-card ${stateClass}`;
    card.innerHTML = `
      <header>
        <span>${escapePublicHtml(entry.record)}</span>
        <strong>${escapePublicHtml(entry.state)}</strong>
      </header>
      <h3>${escapePublicHtml(entry.title)}</h3>
      <p>${escapePublicHtml(entry.summary)}</p>
      <dl class="proof-memory-meta proof-workspace-meta">
        <div>
          <dt>Owner</dt>
          <dd>${escapePublicHtml(entry.owner)}</dd>
        </div>
        <div>
          <dt>Signal</dt>
          <dd>${escapePublicHtml(entry.signalType)}</dd>
        </div>
        <div>
          <dt>Boundary</dt>
          <dd>${escapePublicHtml(entry.boundary)}</dd>
        </div>
        <div>
          <dt>Rollout</dt>
          <dd>${escapePublicHtml(entry.rollout)}</dd>
        </div>
      </dl>
      <div class="proof-memory-rule">
        <span>Customer quote or friction</span>
        <p>${escapePublicHtml(entry.quote)}</p>
      </div>
      <div class="proof-memory-rule">
        <span>Smallest useful improvement</span>
        <p>${escapePublicHtml(entry.improvement)}</p>
      </div>
      <div class="proof-memory-receipt">
        <span>Learning receipt</span>
        <p>${escapePublicHtml(entry.receipt)}</p>
      </div>
      <a href="${escapePublicHtml(entry.href)}">${escapePublicHtml(entry.action)}</a>
    `;
    pilotFeedbackList.append(card);
  });
}

function buildPilotFeedbackItems() {
  const reports = readPublicReports();
  const reportEntries = reports.slice(0, 3).map((report, index) => {
    const score = Number(report.score || 0);
    const sealed = score >= 86;
    return {
      record: `FEED-120-L${index + 1}`,
      state: sealed ? "Ready pattern" : "Owner review",
      title: report.prompt || "Saved answer feedback",
      summary: sealed
        ? "A saved sealed report can become reusable pilot learning after the owner confirms the context and boundary."
        : "The saved answer is valuable feedback, but it needs source or reviewer work before influencing future recommendations.",
      owner: sealed ? "Customer success" : "Proof owner",
      signalType: sealed ? "Accepted answer" : "Proof gap",
      boundary: "Tenant-local first",
      rollout: sealed ? "Candidate" : "Hold",
      quote: sealed
        ? `${score}% trust score shows a pattern worth reviewing for future answer guidance.`
        : "Customer value is possible, but the answer needs one stronger proof move before reuse.",
      improvement: sealed
        ? "Promote only the proof pattern, not the raw customer answer, after owner approval."
        : "Attach the missing evidence, rerun the verifier, and keep the signal local until approved.",
      receipt: sealed ? "saved_report_learning_candidate" : "saved_report_feedback_hold",
      href: getReportShareUrl(report, true),
      action: "Open report",
    };
  });

  const seededEntries = [
    {
      record: "FEED-120-001",
      state: "Approved improvement",
      title: "Make evidence expiry visible on buyer packets",
      summary: "Three pilot teams asked when shared proof links expire. The fix is copy and UI, not a bigger workflow.",
      owner: "Product",
      signalType: "Support note",
      boundary: "Aggregate-safe",
      rollout: "Next UI build",
      quote: "Can the buyer see when this packet expires before forwarding it internally?",
      improvement: "Add an expiry line to buyer packet cards, share-copy text, and sealed report summaries.",
      receipt: "feedback_expiry_visibility_approved",
      href: "buyer.html",
      action: "Open buyer",
    },
    {
      record: "FEED-120-002",
      state: "Owner review",
      title: "Separate legal-sensitive claims before reuse",
      summary: "Regulated pilots like the trust score, but legal wants stronger review gates around broad compliance language.",
      owner: "Legal",
      signalType: "Risk flag",
      boundary: "Tenant-local",
      rollout: "Review first",
      quote: "The answer is useful, but the compliance sentence needs legal review before we send it.",
      improvement: "Add a legal-sensitive label to repeated compliance phrases and route them to an owner before promotion.",
      receipt: "legal_sensitive_learning_review",
      href: "reviews.html",
      action: "Open reviews",
    },
    {
      record: "FEED-120-003",
      state: "Approved improvement",
      title: "Turn proof requests into evidence tasks",
      summary: "Pilot teams repeatedly ask for DPA, SOC 2, and incident proof. The learning loop should create an owner task, not a loose note.",
      owner: "Security",
      signalType: "Proof request",
      boundary: "Aggregate-safe category",
      rollout: "Approved",
      quote: "This would be perfect if it automatically told us which document we need next.",
      improvement: "Group repeated proof requests by source class and add a suggested owner task to the improvement queue.",
      receipt: "proof_request_tasking_approved",
      href: "workspace.html",
      action: "Open workspace",
    },
    {
      record: "FEED-120-004",
      state: "Policy hold",
      title: "Do not learn from regional evidence until country rules are clear",
      summary: "Country-specific proof patterns are valuable, but the learning boundary must stay stricter until policy approves reuse.",
      owner: "Policy",
      signalType: "Regional rule",
      boundary: "Blocked sharing",
      rollout: "Hold",
      quote: "This source is valid in our region, but we cannot assume it applies elsewhere.",
      improvement: "Keep the signal tenant-local and require a regional policy label before it can become aggregate guidance.",
      receipt: "regional_learning_boundary_hold",
      href: "policy.html",
      action: "Open policy",
    },
    {
      record: "FEED-120-005",
      state: "Owner review",
      title: "Shorten first-run review notes",
      summary: "Pilot users understand the trust score faster when the review note gives one next action instead of a long explanation.",
      owner: "Customer success",
      signalType: "UX friction",
      boundary: "Aggregate-safe",
      rollout: "Experiment",
      quote: "I like the result, but tell me the one thing I should fix first.",
      improvement: "Add a one-line next action to report summaries and keep detailed flags behind the calm result cards.",
      receipt: "first_run_next_action_experiment",
      href: "verify.html",
      action: "Open verifier",
    },
    {
      record: "FEED-120-006",
      state: "Ready pattern",
      title: "Reuse accepted AI-training answer structure",
      summary: "Multiple pilots ask the same AI-training question. The structure can become a reusable template after owner approval.",
      owner: "AI governance",
      signalType: "Accepted answer",
      boundary: "Template only",
      rollout: "Candidate",
      quote: "This answer is exactly the shape we need for our customer security review.",
      improvement: "Promote the structure, source list, and review note while keeping customer-specific wording tenant-local.",
      receipt: "ai_training_template_candidate",
      href: "registry.html",
      action: "Open registry",
    },
  ];

  return [...reportEntries, ...seededEntries].slice(0, 9);
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
      version: "v2.8 -> v2.9",
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
      version: "v1.6 -> v1.7",
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
    `AnswerSeal First Review Receipt - ${report.build}`,
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
      "Pilot phase: AnswerSeal v2.8 Alpha - Beta Expansion Decision",
    ].join("\n");

    const mailto = `mailto:dhirajnyse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    pilotStatus.textContent = "Email draft opened. Send it to request private pilot access.";
  });
}
