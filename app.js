const BUILD_VERSION = "v0.4 Alpha";
const STORAGE_KEY = "answerseal.workspace.v04";
const MEMORY_READY_LABEL = "Saved locally";

const evidenceDocs = [
  {
    id: "soc2",
    title: "SOC 2 Type II Report",
    type: "SOC 2",
    updated: "2026-04-28",
    owner: "Security",
    tags: ["encryption", "access", "vulnerability", "incident", "backup"],
    excerpts: [
      "Customer data is encrypted in transit using TLS 1.2 or higher and encrypted at rest using AES-256 managed keys.",
      "Access to production systems requires SSO, MFA, role-based authorization, and quarterly privileged access review.",
      "Vulnerability scanning runs weekly, critical findings are tracked to remediation, and incident response procedures are tested annually.",
    ],
  },
  {
    id: "security-policy",
    title: "Information Security Policy",
    type: "Policy",
    updated: "2026-03-14",
    owner: "Security",
    tags: ["access", "encryption", "logging", "device"],
    excerpts: [
      "All employees authenticate through SSO with MFA and least-privilege role assignments.",
      "Production access is limited to approved engineers and reviewed every quarter by the security owner.",
      "Administrative activity is logged, monitored, and retained for investigation and audit support.",
    ],
  },
  {
    id: "bcp",
    title: "Business Continuity Plan",
    type: "BCP",
    updated: "2026-02-19",
    owner: "Operations",
    tags: ["backup", "continuity", "recovery"],
    excerpts: [
      "Production databases are backed up daily with automated integrity checks.",
      "The target recovery time objective is 8 hours and the target recovery point objective is 24 hours for core services.",
      "Continuity roles, customer communications, and recovery runbooks are reviewed twice per year.",
    ],
  },
  {
    id: "dpa",
    title: "Data Processing Addendum",
    type: "Legal",
    updated: "2026-01-22",
    owner: "Legal",
    tags: ["privacy", "subprocessor", "deletion", "export"],
    excerpts: [
      "Customers may request export or deletion of personal data through the support channel defined in the agreement.",
      "Subprocessors are listed in the trust center and customers receive notice before material changes.",
      "Personal data is processed only to provide the contracted service and support obligations.",
    ],
  },
  {
    id: "ai-standard",
    title: "AI Usage Standard",
    type: "AI Gov",
    updated: "2026-05-16",
    owner: "AI Governance",
    tags: ["ai", "training", "privacy", "human review"],
    excerpts: [
      "Customer content is not used to train foundation models or shared model providers.",
      "AI-generated customer-facing security answers require human approval before release.",
      "Prompts and outputs containing sensitive customer data are redacted from product analytics.",
    ],
  },
  {
    id: "pilot-terms-2025",
    title: "Legacy Pilot Terms",
    type: "Legacy",
    updated: "2025-06-03",
    owner: "Sales",
    tags: ["ai", "training", "legacy"],
    excerpts: [
      "An older pilot template allowed anonymized usage data to improve service quality.",
      "This template is archived and should not be used for new enterprise security answers.",
    ],
  },
];

const questionSeeds = [
  {
    id: "q-encryption",
    text: "Is customer data encrypted at rest and in transit?",
    category: "Encryption",
    owner: "Security",
    due: "2026-06-10",
    portal: "Aster Portal",
    priority: "High",
  },
  {
    id: "q-sso",
    text: "Do you support SSO/SAML and require multi-factor authentication?",
    category: "Access",
    owner: "Security",
    due: "2026-06-10",
    portal: "Aster Portal",
    priority: "High",
  },
  {
    id: "q-privileged-access",
    text: "Describe access controls and privileged access reviews for production systems.",
    category: "Access",
    owner: "Security",
    due: "2026-06-11",
    portal: "Excel",
    priority: "High",
  },
  {
    id: "q-incident",
    text: "What is your incident response notification timeline?",
    category: "Incident",
    owner: "Security",
    due: "2026-06-11",
    portal: "Excel",
    priority: "Medium",
  },
  {
    id: "q-ai-training",
    text: "Do you use customer data to train AI models?",
    category: "AI Governance",
    owner: "AI Governance",
    due: "2026-06-12",
    portal: "Aster Portal",
    priority: "High",
  },
  {
    id: "q-subprocessors",
    text: "List subprocessors and explain how customers are notified of changes.",
    category: "Privacy",
    owner: "Legal",
    due: "2026-06-12",
    portal: "Aster Portal",
    priority: "Medium",
  },
  {
    id: "q-backup",
    text: "What are your backup, disaster recovery, RTO, and RPO targets?",
    category: "Continuity",
    owner: "Operations",
    due: "2026-06-13",
    portal: "Excel",
    priority: "Medium",
  },
  {
    id: "q-vulnerability",
    text: "How do you manage vulnerability scanning, remediation, and penetration testing?",
    category: "Security Testing",
    owner: "Security",
    due: "2026-06-13",
    portal: "Excel",
    priority: "High",
  },
  {
    id: "q-deletion",
    text: "Can customers request data deletion and export?",
    category: "Privacy",
    owner: "Legal",
    due: "2026-06-14",
    portal: "Aster Portal",
    priority: "Medium",
  },
];

const draftLibrary = {
  "q-encryption": {
    answer:
      "Yes. Customer data is encrypted in transit using TLS 1.2 or higher and encrypted at rest using AES-256 managed keys. The control scope covers production databases, backups, and object storage. These controls are reflected in the current SOC 2 Type II report and the Information Security Policy.",
    sources: ["soc2", "security-policy"],
    confidence: 94,
    status: "draft",
    risks: [],
  },
  "q-sso": {
    answer:
      "Yes. Employees authenticate through SSO with MFA, and production access is governed through role-based authorization. The Security Policy states that all employees use SSO with MFA, and the SOC 2 report confirms MFA and role-based access are in the tested control environment.",
    sources: ["security-policy", "soc2"],
    confidence: 91,
    status: "draft",
    risks: [],
  },
  "q-privileged-access": {
    answer:
      "Production access is limited to approved personnel under least-privilege role assignments. Privileged access is reviewed quarterly by the security owner, and administrative activity is logged and monitored for investigation and audit support.",
    sources: ["security-policy", "soc2"],
    confidence: 89,
    status: "draft",
    risks: [],
  },
  "q-incident": {
    answer:
      "The company maintains documented incident response procedures, tracks security events through the security owner, and tests incident response procedures annually. Customer notification timing should follow the contractual notice period in the applicable agreement.",
    sources: ["soc2"],
    confidence: 74,
    status: "needs-evidence",
    risks: ["Attach the customer notification SLA or incident response policy before approving."],
  },
  "q-ai-training": {
    answer:
      "No. Customer content is not used to train foundation models or shared model providers. AI-generated customer-facing security answers require human approval before release, and prompts or outputs containing sensitive customer data are redacted from product analytics.",
    sources: ["ai-standard", "pilot-terms-2025"],
    confidence: 78,
    status: "needs-evidence",
    risks: [
      "Legacy pilot terms contain older service-improvement language. Use the current AI Usage Standard and avoid citing the archived template unless asked about historical pilots.",
    ],
  },
  "q-subprocessors": {
    answer:
      "Subprocessors are listed in the trust center, and customers receive notice before material changes. Personal data is processed only to provide the contracted service and support obligations under the Data Processing Addendum.",
    sources: ["dpa"],
    confidence: 83,
    status: "draft",
    risks: ["Attach the current subprocessor list or trust center export before final submission."],
  },
  "q-backup": {
    answer:
      "Production databases are backed up daily with automated integrity checks. The current continuity plan defines an 8 hour recovery time objective and a 24 hour recovery point objective for core services. Continuity roles, customer communications, and recovery runbooks are reviewed twice per year.",
    sources: ["bcp", "soc2"],
    confidence: 88,
    status: "draft",
    risks: [],
  },
  "q-vulnerability": {
    answer:
      "Vulnerability scanning runs weekly, critical findings are tracked to remediation, and security procedures are reviewed through the SOC 2 control environment. Penetration testing evidence is not attached in the current vault.",
    sources: ["soc2"],
    confidence: 68,
    status: "needs-evidence",
    risks: ["Add the latest penetration test attestation or executive summary before approval."],
  },
  "q-deletion": {
    answer:
      "Yes. Customers may request export or deletion of personal data through the support channel defined in the agreement. The Data Processing Addendum also states that personal data is processed only to provide the contracted service and support obligations.",
    sources: ["dpa"],
    confidence: 86,
    status: "draft",
    risks: [],
  },
};

function createInitialState() {
  return {
    questions: questionSeeds.map((question) => ({
      ...question,
      ...draftLibrary[question.id],
      custom: false,
      approvedAt: null,
    })),
    evidence: evidenceDocs.map((doc) => ({ ...doc, tags: [...doc.tags], excerpts: [...doc.excerpts] })),
    activeQuestionId: "q-ai-training",
    activeDocId: "ai-standard",
    filter: "all",
    search: "",
    librarySearch: "",
    libraryOpen: false,
    audit: [
      {
        action: "Workspace created",
        detail: "Aster Health questionnaire imported with seeded evidence.",
        at: new Date().toISOString(),
      },
    ],
  };
}

function loadWorkspaceState() {
  const fresh = createInitialState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fresh;
    const saved = JSON.parse(raw);
    const workspace = saved?.workspace ?? saved;

    return {
      ...fresh,
      questions: Array.isArray(workspace.questions) ? workspace.questions.map(normalizeQuestion) : fresh.questions,
      evidence: Array.isArray(workspace.evidence) ? workspace.evidence.map(normalizeEvidence) : fresh.evidence,
      activeQuestionId: workspace.activeQuestionId ?? fresh.activeQuestionId,
      activeDocId: workspace.activeDocId ?? fresh.activeDocId,
      audit: Array.isArray(workspace.audit) ? workspace.audit.map(normalizeAuditEntry) : fresh.audit,
      search: "",
      filter: "all",
      librarySearch: "",
      libraryOpen: false,
    };
  } catch {
    return fresh;
  }
}

function normalizeQuestion(question) {
  return {
    id: String(question.id ?? `q-saved-${Date.now()}`),
    text: String(question.text ?? "Saved question"),
    category: String(question.category ?? "Security"),
    owner: String(question.owner ?? "Security"),
    due: String(question.due ?? "2026-06-14"),
    portal: String(question.portal ?? "Saved"),
    priority: String(question.priority ?? "Medium"),
    answer: String(question.answer ?? ""),
    sources: Array.isArray(question.sources) ? question.sources.map(String) : [],
    confidence: Number.isFinite(Number(question.confidence)) ? Number(question.confidence) : 0,
    status: ["draft", "approved", "needs-evidence", "blocked"].includes(question.status) ? question.status : "draft",
    risks: Array.isArray(question.risks) ? question.risks.map(String) : [],
    custom: Boolean(question.custom),
    approvedAt: question.approvedAt ?? null,
  };
}

function normalizeEvidence(doc) {
  return {
    id: String(doc.id ?? `doc-saved-${Date.now()}`),
    title: String(doc.title ?? "Saved evidence"),
    type: String(doc.type ?? "File"),
    updated: String(doc.updated ?? new Date().toISOString().slice(0, 10)),
    owner: String(doc.owner ?? "Imported"),
    tags: Array.isArray(doc.tags) ? doc.tags.map(String) : [],
    excerpts: Array.isArray(doc.excerpts) ? doc.excerpts.map(String) : ["Saved evidence is available for reviewer validation."],
  };
}

function normalizeAuditEntry(entry) {
  return {
    action: String(entry.action ?? "Workspace updated"),
    detail: String(entry.detail ?? "Saved workspace state restored."),
    at: entry.at ?? new Date().toISOString(),
  };
}

const state = loadWorkspaceState();

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  reviewNavButton: document.querySelector("#reviewNavButton"),
  evidenceNavButton: document.querySelector("#evidenceNavButton"),
  libraryNavButton: document.querySelector("#libraryNavButton"),
  metricReceived: document.querySelector("#metricReceived"),
  metricApproved: document.querySelector("#metricApproved"),
  metricNeedsEvidence: document.querySelector("#metricNeedsEvidence"),
  metricConfidence: document.querySelector("#metricConfidence"),
  nextAction: document.querySelector("#nextAction strong"),
  questionCount: document.querySelector("#questionCount"),
  questionList: document.querySelector("#questionList"),
  questionSearch: document.querySelector("#questionSearch"),
  statusFilter: document.querySelector("#statusFilter"),
  addQuestionForm: document.querySelector("#addQuestionForm"),
  newQuestion: document.querySelector("#newQuestion"),
  activeQuestionTitle: document.querySelector("#activeQuestionTitle"),
  activeQuestionMeta: document.querySelector("#activeQuestionMeta"),
  activeStatus: document.querySelector("#activeStatus"),
  answerDraft: document.querySelector("#answerDraft"),
  confidenceScore: document.querySelector("#confidenceScore"),
  confidenceFill: document.querySelector("#confidenceFill"),
  sealGrade: document.querySelector("#sealGrade"),
  sealCoverage: document.querySelector("#sealCoverage"),
  sealFreshness: document.querySelector("#sealFreshness"),
  approveButton: document.querySelector("#approveButton"),
  needsEvidenceButton: document.querySelector("#needsEvidenceButton"),
  copyButton: document.querySelector("#copyButton"),
  riskList: document.querySelector("#riskList"),
  sourceList: document.querySelector("#sourceList"),
  sourceCount: document.querySelector("#sourceCount"),
  evidenceCount: document.querySelector("#evidenceCount"),
  evidenceList: document.querySelector("#evidenceList"),
  evidenceDetail: document.querySelector("#evidenceDetail"),
  evidencePanel: document.querySelector(".evidence-panel"),
  auditTrail: document.querySelector("#auditTrail"),
  uploadEvidenceButton: document.querySelector("#uploadEvidenceButton"),
  evidenceInput: document.querySelector("#evidenceInput"),
  uploadQuestionnaireButton: document.querySelector("#uploadQuestionnaireButton"),
  questionnaireInput: document.querySelector("#questionnaireInput"),
  refreshDraftsButton: document.querySelector("#refreshDraftsButton"),
  exportCsvButton: document.querySelector("#exportCsvButton"),
  exportDocButton: document.querySelector("#exportDocButton"),
  libraryBackdrop: document.querySelector("#libraryBackdrop"),
  libraryDrawer: document.querySelector("#libraryDrawer"),
  closeLibraryButton: document.querySelector("#closeLibraryButton"),
  librarySearch: document.querySelector("#librarySearch"),
  libraryList: document.querySelector("#libraryList"),
  libraryCount: document.querySelector("#libraryCount"),
  memoryStatus: document.querySelector("#memoryStatus"),
  resetWorkspaceButton: document.querySelector("#resetWorkspaceButton"),
  toast: document.querySelector("#toast"),
};

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function init() {
  elements.todayLabel.textContent = formatDate(new Date());
  elements.questionSearch.value = state.search;
  elements.statusFilter.value = state.filter;
  elements.librarySearch.value = state.librarySearch;
  setMemoryStatus(MEMORY_READY_LABEL);
  bindEvents();
  render();
}

function bindEvents() {
  elements.reviewNavButton.addEventListener("click", () => activateWorkspaceNav("review"));
  elements.evidenceNavButton.addEventListener("click", () => activateWorkspaceNav("evidence"));
  elements.libraryNavButton.addEventListener("click", openLibrary);

  elements.questionSearch.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderQuestionList();
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.filter = event.target.value;
    renderQuestionList();
  });

  elements.addQuestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addQuestion(elements.newQuestion.value);
  });

  elements.answerDraft.addEventListener("input", () => {
    const question = getActiveQuestion();
    if (!question) return;
    question.answer = elements.answerDraft.value;
    if (question.status === "approved") {
      question.status = "draft";
      question.approvedAt = null;
      addAudit("Approval reopened", "Answer was edited after approval.");
    }
    renderMetrics();
    renderQuestionList();
    renderActiveStatus(question);
    renderSealSummary(question);
    renderLibrary();
    schedulePersist();
  });

  elements.approveButton.addEventListener("click", approveActiveQuestion);
  elements.needsEvidenceButton.addEventListener("click", markActiveNeedsEvidence);
  elements.copyButton.addEventListener("click", copyActiveAnswer);
  elements.closeLibraryButton.addEventListener("click", closeLibrary);
  elements.libraryBackdrop.addEventListener("click", closeLibrary);
  elements.librarySearch.addEventListener("input", (event) => {
    state.librarySearch = event.target.value.trim().toLowerCase();
    renderLibrary();
  });
  elements.resetWorkspaceButton.addEventListener("click", resetWorkspace);
  elements.uploadEvidenceButton.addEventListener("click", () => elements.evidenceInput.click());
  elements.uploadQuestionnaireButton.addEventListener("click", () => elements.questionnaireInput.click());
  elements.evidenceInput.addEventListener("change", importEvidenceFiles);
  elements.questionnaireInput.addEventListener("change", importQuestionnaireFiles);
  elements.refreshDraftsButton.addEventListener("click", refreshDrafts);
  elements.exportCsvButton.addEventListener("click", exportCsv);
  elements.exportDocButton.addEventListener("click", exportReviewPack);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.libraryOpen) closeLibrary();
  });
}

function getActiveQuestion() {
  return state.questions.find((question) => question.id === state.activeQuestionId) ?? state.questions[0];
}

function getEvidenceById(id) {
  return state.evidence.find((doc) => doc.id === id);
}

function render() {
  renderMetrics();
  renderQuestionList();
  renderActiveQuestion();
  renderEvidence();
  renderAudit();
  renderLibrary();
}

function renderMetrics() {
  const received = state.questions.length;
  const approved = state.questions.filter((question) => question.status === "approved").length;
  const needsEvidence = state.questions.filter((question) => question.status === "needs-evidence").length;
  const average =
    received === 0
      ? 0
      : Math.round(state.questions.reduce((sum, question) => sum + Number(question.confidence || 0), 0) / received);

  elements.metricReceived.textContent = received;
  elements.metricApproved.textContent = approved;
  elements.metricNeedsEvidence.textContent = needsEvidence;
  elements.metricConfidence.textContent = `${average}%`;

  const next = state.questions.find((question) => question.status === "needs-evidence")
    ?? state.questions.find((question) => question.status === "draft")
    ?? state.questions.find((question) => question.status !== "approved");

  elements.nextAction.textContent = next ? nextActionLabel(next) : "Export approved pack";
}

function renderQuestionList() {
  const questions = getFilteredQuestions();
  elements.questionList.innerHTML = "";
  elements.questionCount.textContent = `${questions.length} ${questions.length === 1 ? "question" : "questions"}`;

  if (questions.length === 0) {
    elements.questionList.append(emptyState("No matching questions"));
    return;
  }

  questions.forEach((question) => {
    const button = document.createElement("button");
    button.className = `question-card${question.id === state.activeQuestionId ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <div class="question-meta">
        <span>${escapeHtml(question.category)}</span>
        <span>${escapeHtml(question.portal)}</span>
      </div>
      <strong>${escapeHtml(question.text)}</strong>
      <div class="question-footer">
        <span class="question-status is-${question.status}">${formatStatus(question.status)}</span>
        <span class="confidence-mini">
          <span class="confidence-dot ${confidenceClass(question.confidence)}"></span>
          ${question.confidence}%
        </span>
      </div>
    `;
    button.addEventListener("click", () => {
      state.activeQuestionId = question.id;
      state.activeDocId = question.sources?.[0] ?? state.evidence[0]?.id;
      renderQuestionList();
      renderActiveQuestion();
      renderEvidence();
      schedulePersist();
    });
    elements.questionList.append(button);
  });
}

function getFilteredQuestions() {
  return state.questions.filter((question) => {
    const matchesSearch = !state.search || `${question.text} ${question.category} ${question.owner}`.toLowerCase().includes(state.search);
    const matchesFilter =
      state.filter === "all" ||
      question.status === state.filter ||
      (state.filter === "risk" && question.risks?.length > 0);
    return matchesSearch && matchesFilter;
  });
}

function renderActiveQuestion() {
  const question = getActiveQuestion();
  if (!question) {
    elements.activeQuestionTitle.textContent = "No question selected";
    elements.answerDraft.value = "";
    return;
  }

  state.activeQuestionId = question.id;
  elements.activeQuestionTitle.textContent = question.text;
  elements.activeQuestionMeta.textContent = `${question.category} | ${question.owner} | Due ${formatShortDate(question.due)}`;
  elements.answerDraft.value = question.answer ?? "";
  renderActiveStatus(question);
  renderConfidence(question);
  renderSealSummary(question);
  renderRisks(question);
  renderSources(question);
}

function renderActiveStatus(question) {
  elements.activeStatus.className = `status-pill is-${question.status}`;
  elements.activeStatus.textContent = formatStatus(question.status);
}

function renderConfidence(question) {
  const confidence = Number(question.confidence || 0);
  elements.confidenceScore.textContent = `${confidence}%`;
  elements.confidenceFill.style.width = `${Math.max(0, Math.min(100, confidence))}%`;
  elements.confidenceFill.className = confidenceClass(confidence);
}

function renderSealSummary(question) {
  const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  const hasRisks = (question.risks ?? []).length > 0;
  const confidence = Number(question.confidence || 0);

  elements.sealGrade.textContent = sealGradeLabel(question, confidence, hasRisks, sources.length);
  elements.sealCoverage.textContent = `${sources.length} ${sources.length === 1 ? "source" : "sources"}`;
  elements.sealFreshness.textContent = sourceFreshnessSummary(sources);
}

function renderRisks(question) {
  elements.riskList.innerHTML = "";
  const risks = question.risks ?? [];

  if (risks.length === 0) {
    elements.riskList.append(emptyState("No review notes"));
    return;
  }

  risks.forEach((risk) => {
    const item = document.createElement("div");
    item.className = "risk-item";
    item.innerHTML = `
      <svg aria-hidden="true"><use href="#icon-warning"></use></svg>
      <span>${escapeHtml(risk)}</span>
    `;
    elements.riskList.append(item);
  });
}

function renderSources(question) {
  const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  elements.sourceList.innerHTML = "";
  elements.sourceCount.textContent = `${sources.length} ${sources.length === 1 ? "source" : "sources"}`;

  if (sources.length === 0) {
    elements.sourceList.append(emptyState("No source attached"));
    return;
  }

  sources.forEach((source) => {
    const matchScore = sourceMatchScore(source, question.text);
    const card = document.createElement("article");
    card.className = "source-card";
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(source.title)}</strong>
        <span class="source-type">${escapeHtml(source.type)}</span>
      </header>
      <div class="source-meta-row">
        <span>${matchScore}% claim match</span>
        <span>${freshnessLabel(source.updated)}</span>
      </div>
      <p>${escapeHtml(bestExcerptForQuestion(source, question.text))}</p>
    `;
    card.addEventListener("click", () => {
      state.activeDocId = source.id;
      renderEvidence();
      schedulePersist();
    });
    elements.sourceList.append(card);
  });
}

function renderEvidence() {
  elements.evidenceList.innerHTML = "";
  elements.evidenceCount.textContent = `${state.evidence.length} ${state.evidence.length === 1 ? "file" : "files"}`;

  state.evidence.forEach((doc) => {
    const button = document.createElement("button");
    button.className = `evidence-item${doc.id === state.activeDocId ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <header>
        <strong>${escapeHtml(doc.title)}</strong>
        <span class="source-type">${escapeHtml(doc.type)}</span>
      </header>
      <div class="evidence-facts">
        <span class="fact-chip">${escapeHtml(doc.owner)}</span>
        <span class="fact-chip ${freshnessClass(doc.updated)}">${freshnessLabel(doc.updated)}</span>
      </div>
    `;
    button.addEventListener("click", () => {
      state.activeDocId = doc.id;
      renderEvidence();
      schedulePersist();
    });
    elements.evidenceList.append(button);
  });

  renderEvidenceDetail();
}

function renderEvidenceDetail() {
  const doc = getEvidenceById(state.activeDocId) ?? state.evidence[0];

  if (!doc) {
    elements.evidenceDetail.innerHTML = "";
    return;
  }

  state.activeDocId = doc.id;
  elements.evidenceDetail.innerHTML = `
    <h3>${escapeHtml(doc.title)}</h3>
    <p>${escapeHtml(doc.type)} | ${escapeHtml(doc.owner)} | Updated ${formatShortDate(doc.updated)}</p>
    <ul>
      ${doc.excerpts.map((excerpt) => `<li>${escapeHtml(excerpt)}</li>`).join("")}
    </ul>
  `;
}

function renderAudit() {
  elements.auditTrail.innerHTML = "";
  state.audit.slice(-8).reverse().forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${escapeHtml(entry.action)}:</strong> ${escapeHtml(entry.detail)} <span>${formatAuditTime(entry.at)}</span>`;
    elements.auditTrail.append(item);
  });
}

function activateWorkspaceNav(target) {
  closeLibrary(false);
  const activeButton = target === "evidence" ? elements.evidenceNavButton : elements.reviewNavButton;
  setActiveNav(activeButton);

  if (target === "evidence") {
    elements.evidencePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  document.querySelector("#review-desk").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(activeButton) {
  [elements.reviewNavButton, elements.evidenceNavButton, elements.libraryNavButton].forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

function openLibrary() {
  state.libraryOpen = true;
  setActiveNav(elements.libraryNavButton);
  elements.libraryBackdrop.hidden = false;
  elements.libraryDrawer.classList.add("is-open");
  elements.libraryDrawer.setAttribute("aria-hidden", "false");
  renderLibrary();
  elements.librarySearch.focus();
}

function closeLibrary(activateReview = true) {
  if (!state.libraryOpen && elements.libraryDrawer.getAttribute("aria-hidden") === "true") return;
  state.libraryOpen = false;
  elements.libraryDrawer.classList.remove("is-open");
  elements.libraryDrawer.setAttribute("aria-hidden", "true");
  elements.libraryBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function renderLibrary() {
  const approved = state.questions.filter((question) => question.status === "approved");
  const filtered = approved.filter((question) => {
    const haystack = `${question.text} ${question.answer} ${question.category} ${question.owner}`.toLowerCase();
    return !state.librarySearch || haystack.includes(state.librarySearch);
  });

  elements.libraryCount.textContent = approved.length;
  elements.libraryList.innerHTML = "";

  if (filtered.length === 0) {
    elements.libraryList.append(emptyState(approved.length === 0 ? "No approved answers yet" : "No matching approved answers"));
    return;
  }

  filtered
    .sort((a, b) => new Date(b.approvedAt ?? 0).getTime() - new Date(a.approvedAt ?? 0).getTime())
    .forEach((question) => {
      const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
      const item = document.createElement("article");
      item.className = "library-item";
      item.innerHTML = `
        <header>
          <span>${escapeHtml(question.category)}</span>
          <span>${question.approvedAt ? escapeHtml(formatShortDate(question.approvedAt)) : "Seed"}</span>
        </header>
        <strong>${escapeHtml(question.text)}</strong>
        <p>${escapeHtml(question.answer)}</p>
        <footer>
          <span class="library-chip">${sources.length} ${sources.length === 1 ? "source" : "sources"}</span>
          <span class="library-chip">${escapeHtml(String(question.confidence))}% confidence</span>
          <div class="library-item-actions">
            <button class="secondary-button" type="button" data-action="open">Open</button>
            <button class="primary-button" type="button" data-action="copy">Copy</button>
          </div>
        </footer>
      `;

      item.querySelector('[data-action="open"]').addEventListener("click", () => {
        state.activeQuestionId = question.id;
        state.activeDocId = question.sources?.[0] ?? state.evidence[0]?.id;
        closeLibrary();
        renderQuestionList();
        renderActiveQuestion();
        renderEvidence();
        schedulePersist();
      });

      item.querySelector('[data-action="copy"]').addEventListener("click", () => {
        copyText(question.answer, "Approved answer copied.");
      });

      elements.libraryList.append(item);
    });
}

function addQuestion(rawText) {
  const text = rawText.trim();
  if (!text) {
    showToast("Paste a question first.");
    return;
  }

  const draft = draftFromText(text);
  const question = {
    id: `q-custom-${Date.now()}`,
    text,
    category: draft.category,
    owner: draft.owner,
    due: "2026-06-14",
    portal: "Manual",
    priority: draft.confidence >= 80 ? "Medium" : "High",
    custom: true,
    approvedAt: null,
    ...draft,
  };

  state.questions.unshift(question);
  state.activeQuestionId = question.id;
  state.activeDocId = question.sources?.[0] ?? state.evidence[0]?.id;
  elements.newQuestion.value = "";
  addAudit("Question added", shorten(question.text, 72));
  render();
  showToast("Question drafted with available evidence.");
}

function draftFromText(text) {
  const lower = text.toLowerCase();
  const category = inferCategory(lower);
  const sources = rankEvidenceForText(lower).slice(0, 3);
  const confidence = calculateConfidence(lower, sources);
  const owner = inferOwner(category);
  const risks = [];

  if (sources.length === 0) {
    risks.push("No matching approved source was found in the evidence vault.");
  }

  if (confidence < 75) {
    risks.push("Confidence is below approval threshold. Add stronger evidence or route to owner.");
  }

  if (lower.includes("ai") || lower.includes("model") || lower.includes("training")) {
    const hasLegacy = sources.includes("pilot-terms-2025");
    if (hasLegacy) {
      risks.push("Legacy AI language found. Confirm current AI governance source before approval.");
    }
  }

  return {
    category,
    owner,
    answer: composeGenericAnswer(text, sources, category),
    sources,
    confidence,
    status: confidence >= 82 && risks.length === 0 ? "draft" : "needs-evidence",
    risks,
  };
}

function inferCategory(lower) {
  const rules = [
    ["Encryption", ["encrypt", "tls", "aes", "transit", "rest"]],
    ["Access", ["sso", "saml", "mfa", "access", "privileged", "role"]],
    ["Incident", ["incident", "breach", "notification"]],
    ["AI Governance", ["ai", "model", "training", "prompt"]],
    ["Privacy", ["privacy", "deletion", "export", "subprocessor", "personal data"]],
    ["Continuity", ["backup", "rto", "rpo", "disaster", "continuity"]],
    ["Security Testing", ["vulnerability", "penetration", "scan", "remediation"]],
  ];

  return rules.find(([, terms]) => terms.some((term) => lower.includes(term)))?.[0] ?? "Security";
}

function inferOwner(category) {
  const owners = {
    Privacy: "Legal",
    Continuity: "Operations",
    "AI Governance": "AI Governance",
  };
  return owners[category] ?? "Security";
}

function rankEvidenceForText(lower) {
  const terms = keywordTerms(lower);
  return state.evidence
    .map((doc) => {
      const haystack = `${doc.title} ${doc.type} ${doc.tags.join(" ")} ${doc.excerpts.join(" ")}`.toLowerCase();
      const score = terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0);
      return { id: doc.id, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.id);
}

function keywordTerms(lower) {
  const words = lower
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3);

  const expansions = {
    mfa: ["mfa", "multi-factor", "authentication"],
    sso: ["sso", "saml", "single"],
    rto: ["rto", "recovery"],
    rpo: ["rpo", "recovery"],
    ai: ["ai", "model", "training"],
  };

  return [...new Set([...words, ...Object.entries(expansions).flatMap(([key, value]) => (lower.includes(key) ? value : []))])];
}

function calculateConfidence(lower, sources) {
  if (sources.length === 0) return 38;
  const base = Math.min(88, 58 + sources.length * 10);
  const hasRecent = sources.some((id) => daysSince(getEvidenceById(id)?.updated) < 180);
  const hasLegacy = sources.includes("pilot-terms-2025");
  const aiPenalty = (lower.includes("ai") || lower.includes("training")) && hasLegacy ? 10 : 0;
  return Math.max(40, Math.min(96, base + (hasRecent ? 8 : 0) - aiPenalty));
}

function sealGradeLabel(question, confidence, hasRisks, sourceCount) {
  if (sourceCount === 0) return "Open";
  if (question.status === "approved") return "Sealed";
  if (confidence < 70) return "Blocked";
  if (hasRisks || confidence < 85) return "Review";
  return "Ready";
}

function sourceFreshnessSummary(sources) {
  if (sources.length === 0) return "Unknown";
  const ages = sources.map((source) => daysSince(source.updated));
  if (ages.every((age) => age < 90)) return "Fresh";
  if (ages.some((age) => age >= 365)) return "Stale";
  return "Current";
}

function composeGenericAnswer(text, sourceIds, category) {
  const sources = sourceIds.map(getEvidenceById).filter(Boolean);
  if (sources.length === 0) {
    return `I cannot approve an answer to "${text}" yet because no matching approved evidence is attached. Add a policy, report, contract clause, or owner-approved note before responding to the buyer.`;
  }

  const sourceNames = sources.map((source) => source.title).join(", ");
  const excerpts = sources.map((source) => bestExcerptForQuestion(source, text)).filter(Boolean);
  return `Based on the approved ${category.toLowerCase()} evidence in ${sourceNames}, the current answer is: ${excerpts[0]} ${excerpts[1] ?? ""}`.trim();
}

function approveActiveQuestion() {
  const question = getActiveQuestion();
  if (!question) return;

  if (!question.sources?.length) {
    question.status = "needs-evidence";
    addAudit("Approval blocked", "No citation attached.");
    render();
    showToast("Add a source before approval.");
    return;
  }

  if (question.confidence < 70) {
    question.status = "needs-evidence";
    addAudit("Approval blocked", "Confidence below 70 percent.");
    render();
    showToast("Confidence is too low for approval.");
    return;
  }

  question.status = "approved";
  question.approvedAt = new Date().toISOString();
  addAudit("Answer approved", shorten(question.text, 72));
  render();
  selectNextOpenQuestion();
  showToast("Answer approved, saved, and added to Library.");
}

function selectNextOpenQuestion() {
  const next = state.questions.find((question) => question.status !== "approved");
  if (!next) return;
  state.activeQuestionId = next.id;
  state.activeDocId = next.sources?.[0] ?? state.evidence[0]?.id;
  renderQuestionList();
  renderActiveQuestion();
  renderEvidence();
}

function markActiveNeedsEvidence() {
  const question = getActiveQuestion();
  if (!question) return;
  question.status = "needs-evidence";
  question.approvedAt = null;
  if (!question.risks.includes("Reviewer marked this answer as needing stronger evidence.")) {
    question.risks.push("Reviewer marked this answer as needing stronger evidence.");
  }
  addAudit("Evidence requested", shorten(question.text, 72));
  render();
  showToast("Marked for evidence.");
}

async function copyActiveAnswer() {
  const question = getActiveQuestion();
  if (!question?.answer) return;
  copyText(question.answer, "Answer copied.");
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    elements.answerDraft.value = text;
    elements.answerDraft.select();
    document.execCommand("copy");
    renderActiveQuestion();
    showToast(message);
  }
}

async function importEvidenceFiles(event) {
  const files = [...event.target.files];
  if (files.length === 0) return;

  for (const file of files) {
    const text = await file.text();
    const doc = createEvidenceFromFile(file.name, text);
    state.evidence.unshift(doc);
    state.activeDocId = doc.id;
  }

  addAudit("Evidence imported", `${files.length} file${files.length === 1 ? "" : "s"} added to vault.`);
  refreshDrafts(false);
  elements.evidenceInput.value = "";
  render();
  showToast("Evidence imported and drafts refreshed.");
}

async function importQuestionnaireFiles(event) {
  const files = [...event.target.files];
  if (files.length === 0) return;

  let count = 0;
  for (const file of files) {
    const text = await file.text();
    parseQuestionLines(text).forEach((questionText) => {
      const draft = draftFromText(questionText);
      state.questions.push({
        id: `q-import-${Date.now()}-${count}`,
        text: questionText,
        category: draft.category,
        owner: draft.owner,
        due: "2026-06-14",
        portal: file.name.endsWith(".csv") ? "CSV" : "Import",
        priority: draft.confidence >= 80 ? "Medium" : "High",
        custom: true,
        approvedAt: null,
        ...draft,
      });
      count += 1;
    });
  }

  if (count > 0) {
    state.activeQuestionId = state.questions[state.questions.length - count].id;
    addAudit("Questionnaire imported", `${count} question${count === 1 ? "" : "s"} added.`);
    render();
    showToast("Questionnaire imported.");
  } else {
    showToast("No questions found in import.");
  }

  elements.questionnaireInput.value = "";
}

function createEvidenceFromFile(name, text) {
  const excerpts = text
    .replace(/\r/g, "\n")
    .split(/[.\n]/)
    .map((line) => line.trim())
    .filter((line) => line.length > 24)
    .slice(0, 4);

  return {
    id: `doc-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: name.replace(/\.[^.]+$/, ""),
    type: name.split(".").pop()?.toUpperCase() ?? "File",
    updated: new Date().toISOString().slice(0, 10),
    owner: "Imported",
    tags: keywordTerms(text.toLowerCase()).slice(0, 12),
    excerpts: excerpts.length > 0 ? excerpts : ["Imported evidence file is available for reviewer validation."],
  };
}

function parseQuestionLines(text) {
  return text
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.replace(/^["'\s,]+|["'\s,]+$/g, "").trim())
    .filter((line) => line.length > 12)
    .filter((line) => line.endsWith("?") || /\b(do|does|is|are|can|what|how|describe|list|provide)\b/i.test(line))
    .slice(0, 40);
}

function refreshDrafts(showMessage = true) {
  state.questions.forEach((question) => {
    if (question.status === "approved") return;
    if (!question.custom && draftLibrary[question.id]) return;
    const draft = draftFromText(question.text);
    Object.assign(question, draft);
    question.approvedAt = null;
  });

  addAudit("Drafts refreshed", "Custom questions were matched against the current evidence vault.");
  render();
  if (showMessage) showToast("Drafts refreshed.");
}

function exportCsv() {
  const header = ["Question", "Status", "Owner", "Confidence", "Answer", "Sources", "Risks"];
  const rows = state.questions.map((question) => [
    question.text,
    formatStatus(question.status),
    question.owner,
    `${question.confidence}%`,
    question.answer,
    (question.sources ?? []).map((id) => getEvidenceById(id)?.title).filter(Boolean).join("; "),
    (question.risks ?? []).join("; "),
  ]);

  downloadBlob("answerseal-questionnaire.csv", toCsv([header, ...rows]), "text/csv");
  addAudit("CSV exported", "Questionnaire answers exported.");
  renderAudit();
  showToast("CSV exported.");
}

function exportReviewPack() {
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>AnswerSeal Review Pack</title>
        <style>
          body { font-family: Arial, sans-serif; color: #1f2926; }
          h1 { font-size: 24px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #cfd8d2; padding: 8px; vertical-align: top; }
          th { background: #eef3ef; text-align: left; }
          .risk { color: #9a6700; }
        </style>
      </head>
      <body>
        <h1>AnswerSeal Review Pack</h1>
        <p>Exported ${escapeHtml(formatDate(new Date()))}</p>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Status</th>
              <th>Answer</th>
              <th>Citations</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${state.questions
              .map(
                (question) => `
                  <tr>
                    <td>${escapeHtml(question.text)}</td>
                    <td>${escapeHtml(formatStatus(question.status))}</td>
                    <td>${escapeHtml(question.answer)}</td>
                    <td>${escapeHtml((question.sources ?? []).map((id) => getEvidenceById(id)?.title).filter(Boolean).join("; "))}</td>
                    <td class="risk">${escapeHtml((question.risks ?? []).join("; "))}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;

  downloadBlob("answerseal-review-pack.doc", html, "application/msword");
  addAudit("Review pack exported", "Word-compatible response pack created.");
  renderAudit();
  showToast("Review pack exported.");
}

function toCsv(rows) {
  return rows.map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
}

function downloadBlob(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

let persistTimer;
function schedulePersist(status = "Saving") {
  setMemoryStatus(status);
  clearTimeout(persistTimer);
  persistTimer = setTimeout(persistWorkspace, 240);
}

function persistWorkspace() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: BUILD_VERSION,
        savedAt: new Date().toISOString(),
        workspace: serializeWorkspace(),
      }),
    );
    setMemoryStatus(MEMORY_READY_LABEL);
  } catch {
    setMemoryStatus("Save blocked");
  }
}

function serializeWorkspace() {
  return {
    questions: state.questions,
    evidence: state.evidence,
    activeQuestionId: state.activeQuestionId,
    activeDocId: state.activeDocId,
    audit: state.audit,
  };
}

function resetWorkspace() {
  const shouldReset = window.confirm("Reset the demo workspace and clear saved approvals?");
  if (!shouldReset) return;

  const fresh = createInitialState();
  Object.assign(state, fresh);
  localStorage.removeItem(STORAGE_KEY);
  elements.questionSearch.value = "";
  elements.statusFilter.value = "all";
  elements.librarySearch.value = "";
  closeLibrary();
  render();
  setMemoryStatus("Reset");
  showToast("Demo workspace reset.");
}

function setMemoryStatus(label) {
  elements.memoryStatus.textContent = label;
}

function addAudit(action, detail) {
  state.audit.push({
    action,
    detail,
    at: new Date().toISOString(),
  });
  schedulePersist();
}

function bestExcerptForQuestion(doc, questionText) {
  const terms = keywordTerms(questionText.toLowerCase());
  const ranked = doc.excerpts
    .map((excerpt) => ({
      excerpt,
      score: terms.reduce((sum, term) => sum + (excerpt.toLowerCase().includes(term) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.excerpt ?? doc.excerpts[0] ?? "";
}

function sourceMatchScore(doc, questionText) {
  const terms = keywordTerms(questionText.toLowerCase());
  if (terms.length === 0) return 60;

  const haystack = `${doc.title} ${doc.type} ${doc.tags.join(" ")} ${doc.excerpts.join(" ")}`.toLowerCase();
  const matches = terms.filter((term) => haystack.includes(term)).length;
  return Math.max(55, Math.min(98, Math.round((matches / terms.length) * 100)));
}

function emptyState(text) {
  const div = document.createElement("div");
  div.className = "empty-state";
  div.textContent = text;
  return div;
}

function formatStatus(status) {
  const labels = {
    draft: "Draft",
    approved: "Approved",
    "needs-evidence": "Needs Evidence",
    blocked: "Blocked",
  };
  return labels[status] ?? status;
}

function nextActionLabel(question) {
  const verb = question.status === "needs-evidence" ? "Add evidence" : "Review";
  return `${verb}: ${question.category}`;
}

function formatShortDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function formatAuditTime(value) {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function confidenceClass(confidence) {
  if (confidence < 70) return "is-low";
  if (confidence < 85) return "is-medium";
  return "";
}

function freshnessLabel(value) {
  const age = daysSince(value);
  if (age < 90) return "Fresh";
  if (age < 365) return `${age}d old`;
  return "Stale";
}

function freshnessClass(value) {
  const age = daysSince(value);
  if (age < 90) return "is-fresh";
  if (age >= 365) return "is-stale";
  return "";
}

function daysSince(value) {
  if (!value) return 999;
  const diff = Date.now() - new Date(value).getTime();
  return Math.max(0, Math.round(diff / 86400000));
}

function shorten(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2600);
}

init();
