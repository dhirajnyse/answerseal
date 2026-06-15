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

const PUBLIC_BUILD_VERSION = "v0.58 Alpha";
const PUBLIC_REPORT_STORAGE_KEY = "answerseal.public.reports.v58";
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
  const reports = [saved, ...readPublicReports().filter((item) => item.id !== saved.id)].slice(0, 12);
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
      "Pilot phase: AnswerSeal v0.58 Alpha - MVP Core",
    ].join("\n");

    const mailto = `mailto:dhirajnyse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    pilotStatus.textContent = "Email draft opened. Send it to request private pilot access.";
  });
}
