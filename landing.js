const pilotForm = document.querySelector("#pilotForm");
const pilotStatus = document.querySelector("#pilotStatus");
const landingVerifier = document.querySelector("#landingVerifier");
const landingPrompt = document.querySelector("#landingPrompt");
const landingAnswer = document.querySelector("#landingAnswer");
const landingTrustScore = document.querySelector("#landingTrustScore");
const landingTrustStatus = document.querySelector("#landingTrustStatus");
const landingRiskFlags = document.querySelector("#landingRiskFlags");
const landingImprovedAnswer = document.querySelector("#landingImprovedAnswer");
const landingReportSummary = document.querySelector("#landingReportSummary");
const saveLandingReport = document.querySelector("#saveLandingReport");
const landingSaveStatus = document.querySelector("#landingSaveStatus");
const savedReportsList = document.querySelector("#savedReportsList");
const savedReportsCount = document.querySelector("#savedReportsCount");
const sealedReportScore = document.querySelector("#sealedReportScore");
const sealedReportStatus = document.querySelector("#sealedReportStatus");
const sealedReportPrompt = document.querySelector("#sealedReportPrompt");
const sealedReportAnswer = document.querySelector("#sealedReportAnswer");
const sealedReportImproved = document.querySelector("#sealedReportImproved");
const sealedReportFlags = document.querySelector("#sealedReportFlags");
const sealedReportSummary = document.querySelector("#sealedReportSummary");

const PUBLIC_BUILD_VERSION = "v0.57 Alpha";
const PUBLIC_REPORT_STORAGE_KEY = "answerseal.public.reports.v57";
let latestLandingReport = null;

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

renderSavedReports();
renderSealedReportPage();

function renderLandingVerification() {
  const report = buildLandingTrustReport(landingPrompt.value, landingAnswer.value);
  latestLandingReport = report;
  landingTrustScore.textContent = `${report.score}%`;
  landingTrustStatus.textContent = report.status;
  landingImprovedAnswer.textContent = report.improvedAnswer;
  landingReportSummary.textContent = report.summary;
  landingRiskFlags.innerHTML = "";

  report.flags.forEach((flag) => {
    const item = document.createElement("li");
    item.textContent = flag;
    landingRiskFlags.append(item);
  });
}

function buildLandingTrustReport(prompt, answer) {
  const cleanPrompt = String(prompt ?? "").trim();
  const cleanAnswer = String(answer ?? "").trim();
  const lower = cleanAnswer.toLowerCase();
  const words = cleanAnswer.split(/\s+/).filter(Boolean);
  const sentences = cleanAnswer.split(/[.!?]+/).map((sentence) => sentence.trim()).filter(Boolean);
  const sourceTerms = ["source", "citation", "policy", "standard", "soc", "iso", "report", "dpa", "contract", "evidence", "audit", "approved"];
  const riskTerms = ["always", "never", "guarantee", "100%", "fully compliant", "no risk", "unbreakable", "best in class"];
  const complianceTerms = ["gdpr", "hipaa", "soc 2", "iso 27001", "pci", "legal", "compliance", "certified", "certification", "retention", "delete", "personal data", "customer data"];
  const sourceSignals = countLandingTerms(lower, sourceTerms);
  const riskSignals = countLandingTerms(lower, riskTerms);
  const complianceSignals = countLandingTerms(lower, complianceTerms);
  const unsupportedClaims = sentences.filter((sentence) => {
    const sentenceLower = sentence.toLowerCase();
    const hasClaim = riskTerms.some((term) => sentenceLower.includes(term)) || /\b(compliant|certified|secure|encrypted|trained|retained|deleted|guaranteed)\b/i.test(sentence);
    const hasSource = sourceTerms.some((term) => sentenceLower.includes(term));
    return hasClaim && !hasSource;
  }).length;
  const clarityPenalty = words.length < 18 ? 18 : Math.max(0, Math.round(words.length / Math.max(sentences.length, 1)) - 28);
  const sourcePenalty = sourceSignals === 0 ? 22 : 0;
  const unsupportedPenalty = unsupportedClaims * 11;
  const riskPenalty = riskSignals * 10;
  const compliancePenalty = Math.max(0, complianceSignals - sourceSignals) * 8;
  const actionPenalty = /^(yes|no|we|our|the system|answerseal)\b/i.test(cleanAnswer) || /\b(should|review|approve|attach|recommend|next)\b/i.test(cleanAnswer) ? 0 : 12;
  const score = cleanAnswer ? Math.max(0, Math.min(100, 94 - clarityPenalty - sourcePenalty - unsupportedPenalty - riskPenalty - compliancePenalty - actionPenalty)) : 0;
  const status = !cleanAnswer ? "Ready" : score >= 86 ? "Sealed" : score >= 72 ? "Needs source" : score >= 58 ? "Needs review" : "High risk";
  const flags = [];

  if (!cleanAnswer) flags.push("Paste an AI-generated answer to verify it.");
  if (sourceSignals === 0) flags.push("Missing source warning: attach a policy, report, citation, DPA, audit record, or approved answer.");
  if (unsupportedClaims > 0) flags.push(`Unsupported claim warning: ${unsupportedClaims} claim${unsupportedClaims === 1 ? "" : "s"} may need citation or softer wording.`);
  if (riskSignals > 0) flags.push("Factual risk flag: absolute or guarantee-style wording needs review.");
  if (complianceSignals > sourceSignals) flags.push("Compliance risk flag: legal, privacy, certification, or customer-data wording needs proof.");
  if (actionPenalty > 0) flags.push("Actionability warning: add a clear decision, next step, or reviewer instruction.");
  if (flags.length === 0) flags.push("No major risk flags detected in this quick trust check.");

  const improvedAnswer = cleanAnswer
    ? improveLandingAnswer(cleanAnswer, { sourceSignals, unsupportedClaims, riskSignals, complianceSignals, cleanPrompt })
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
    score,
    status,
    flags,
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
      <a href="report.html">Open sealed report</a>
    `;
    savedReportsList.append(card);
  });
}

function renderSealedReportPage() {
  if (!sealedReportScore) return;
  const report =
    readPublicReports()[0] || buildLandingTrustReport("Can we use customer data to train AI models?", "No. Customer content is not used to train foundation models or shared model providers. This answer is based on the approved AI Usage Standard and should be reviewed before release.");

  sealedReportScore.textContent = `${report.score}%`;
  sealedReportStatus.textContent = report.status;
  sealedReportPrompt.textContent = report.prompt || "No prompt attached.";
  sealedReportAnswer.textContent = report.answer || "No answer attached.";
  sealedReportImproved.textContent = report.improvedAnswer;
  sealedReportSummary.textContent = report.summary;
  sealedReportFlags.innerHTML = "";
  report.flags.forEach((flag) => {
    const item = document.createElement("li");
    item.textContent = flag;
    sealedReportFlags.append(item);
  });
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
      "Pilot phase: AnswerSeal v0.57 Alpha - Product Spine",
    ].join("\n");

    const mailto = `mailto:dhirajnyse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    pilotStatus.textContent = "Email draft opened. Send it to request private pilot access.";
  });
}
