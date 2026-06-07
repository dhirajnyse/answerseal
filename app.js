const BUILD_VERSION = "v0.11 Alpha";
const STORAGE_KEY = "answerseal.workspace.v11";
const LEGACY_STORAGE_KEYS = [
  "answerseal.workspace.v10",
  "answerseal.workspace.v09",
  "answerseal.workspace.v08",
  "answerseal.workspace.v07",
  "answerseal.workspace.v06",
  "answerseal.workspace.v04",
];
const MEMORY_READY_LABEL = "Saved locally";

const workspaceAccount = {
  company: "Aster Health",
  workspaceId: "AS-PRV-2407",
  plan: "Private pilot",
  access: "Invite only",
  region: "Browser demo",
  currentRole: "Trust Lead",
  handoffUrl: "https://answerseal.app/secure/AS-HANDOFF-2407",
  expires: "June 14, 2026",
  members: [
    {
      id: "owner-security",
      name: "Maya Shah",
      team: "Security",
      role: "Approver",
      categories: ["Encryption", "Access", "Incident", "Security Testing"],
    },
    {
      id: "owner-ai",
      name: "Omar Khan",
      team: "AI Governance",
      role: "Reviewer",
      categories: ["AI Governance"],
    },
    {
      id: "owner-legal",
      name: "Nina Patel",
      team: "Legal",
      role: "Approver",
      categories: ["Privacy"],
    },
    {
      id: "owner-ops",
      name: "Leo Morgan",
      team: "Operations",
      role: "Reviewer",
      categories: ["Continuity"],
    },
  ],
};

const dataRoomFolders = [
  {
    id: "questionnaire",
    label: "Questionnaire",
    detail: "Buyer questions, owners, status, and portal handoff copy.",
    action: "review",
  },
  {
    id: "evidence-pack",
    label: "Evidence Pack",
    detail: "SOC reports, policies, standards, and reviewer notes.",
    action: "evidence",
  },
  {
    id: "contracts",
    label: "Contracts",
    detail: "DPA, subprocessor language, and legal-risk notes.",
    action: "library",
  },
  {
    id: "handoff",
    label: "Exports",
    detail: "Review Pack, portal copy, and secure workspace summary.",
    action: "workspace",
  },
];

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

const coverageRules = [
  { category: "Encryption", owner: "Security", terms: ["encrypt", "tls", "aes", "transit", "rest"] },
  { category: "Access", owner: "Security", terms: ["sso", "mfa", "access", "privileged", "role"] },
  { category: "Incident", owner: "Security", terms: ["incident", "notification", "breach", "response"] },
  { category: "AI Governance", owner: "AI Governance", terms: ["ai", "model", "training", "prompt"] },
  { category: "Privacy", owner: "Legal", terms: ["privacy", "subprocessor", "deletion", "export", "personal data"] },
  { category: "Continuity", owner: "Operations", terms: ["backup", "rto", "rpo", "disaster", "continuity"] },
  { category: "Security Testing", owner: "Security", terms: ["vulnerability", "penetration", "scan", "remediation"] },
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

const evidenceNoteSeeds = {
  soc2: {
    reviewer: "Maya Shah",
    status: "Buyer-ready",
    summary: "Use for encryption, access, vulnerability, and incident controls. Do not attach the full report to public portals.",
  },
  "security-policy": {
    reviewer: "Maya Shah",
    status: "Buyer-ready",
    summary: "Good primary source for SSO, MFA, least privilege, and administrative logging claims.",
  },
  bcp: {
    reviewer: "Leo Morgan",
    status: "Ready with context",
    summary: "RTO and RPO are safe to cite. Customer notification language still needs contract-specific confirmation.",
  },
  dpa: {
    reviewer: "Nina Patel",
    status: "Legal-approved",
    summary: "Use for deletion, export, subprocessors, and processing-purpose answers. Cite alongside the current trust center when requested.",
  },
  "ai-standard": {
    reviewer: "Omar Khan",
    status: "Buyer-ready",
    summary: "Primary AI governance source. Use this instead of legacy pilot terms for model training and human-review claims.",
  },
  "pilot-terms-2025": {
    reviewer: "Omar Khan",
    status: "Archived",
    summary: "Keep visible as conflict evidence only. Do not cite for current buyer answers unless asked about historical pilot terms.",
  },
};

const closeChecklistSeeds = [
  {
    id: "intake-complete",
    label: "Questionnaire and evidence intake reviewed",
    owner: "Trust Lead",
    completed: true,
  },
  {
    id: "owners-routed",
    label: "Open evidence gaps routed to named owners",
    owner: "Security",
    completed: true,
  },
  {
    id: "buyer-pack",
    label: "Buyer-facing Review Pack exported",
    owner: "Trust Lead",
    completed: false,
  },
  {
    id: "pilot-decision",
    label: "Pilot decision call scheduled",
    owner: "Sales",
    completed: false,
  },
];

function createSeedIntake() {
  return evidenceDocs.map((doc) => ({
    id: `seed-${doc.id}`,
    name: doc.title,
    type: doc.type,
    kind: "Evidence",
    status: "Indexed",
    category: categoryForEvidence(doc),
    matches: doc.tags.length,
    linkedDocId: doc.id,
    addedAt: doc.updated,
  }));
}

function createInitialState() {
  return {
    questions: questionSeeds.map((question) => ({
      ...question,
      ...draftLibrary[question.id],
      assigneeId: ownerToMemberId(question.owner),
      routeStatus: draftLibrary[question.id]?.status === "needs-evidence" ? "Needs owner" : "Assigned",
      routedAt: null,
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
    intake: createSeedIntake(),
    intakeOpen: false,
    dataRoomOpen: false,
    dataRoom: createInitialDataRoom(),
    accessOpen: false,
    access: createInitialAccessState(),
    workspaceOpen: false,
    portalOpen: false,
    handoff: createInitialHandoff(),
    audit: [
      {
        action: "Workspace created",
        detail: "Aster Health private workspace created with seeded evidence and owner routing.",
        at: new Date().toISOString(),
      },
    ],
  };
}

function createInitialHandoff() {
  return {
    status: "Draft",
    url: workspaceAccount.handoffUrl,
    expires: workspaceAccount.expires,
    preparedAt: null,
  };
}

function createInitialDataRoom() {
  return {
    notes: Object.fromEntries(evidenceDocs.map((doc) => [doc.id, createDataRoomNote(doc)])),
    checklist: closeChecklistSeeds.map((item) => ({ ...item })),
  };
}

function createInitialAccessState() {
  return {
    session: {
      currentMemberId: "owner-security",
      method: "SSO + MFA",
      status: "Verified",
      lastVerifiedAt: new Date().toISOString(),
    },
    cloud: {
      status: "Local pilot",
      checkpoint: "Awaiting secure sync",
      lastSyncedAt: null,
    },
    invites: [
      {
        id: "invite-legal",
        email: "legal@asterhealth.example",
        team: "Legal",
        role: "Approver",
        status: "Accepted",
        sentAt: "2026-06-07T08:30:00.000Z",
      },
      {
        id: "invite-sales",
        email: "sales-engineering@asterhealth.example",
        team: "Sales Engineering",
        role: "Viewer",
        status: "Invited",
        sentAt: "2026-06-07T09:10:00.000Z",
      },
    ],
  };
}

function createDataRoomNote(doc) {
  const seed = evidenceNoteSeeds[doc.id] ?? {
    reviewer: doc.owner || workspaceAccount.currentRole,
    status: "Review",
    summary: "Imported source is available for reviewer validation before buyer-facing reuse.",
  };

  return {
    reviewer: seed.reviewer,
    status: seed.status,
    summary: seed.summary,
    updatedAt: doc.updated,
  };
}

function loadWorkspaceState() {
  const fresh = createInitialState();
  try {
    const raw = [STORAGE_KEY, ...LEGACY_STORAGE_KEYS].map((key) => localStorage.getItem(key)).find(Boolean);
    if (!raw) return fresh;
    const saved = JSON.parse(raw);
    const workspace = saved?.workspace ?? saved;

    return {
      ...fresh,
      questions: Array.isArray(workspace.questions) ? workspace.questions.map(normalizeQuestion) : fresh.questions,
      evidence: Array.isArray(workspace.evidence) ? workspace.evidence.map(normalizeEvidence) : fresh.evidence,
      intake: Array.isArray(workspace.intake) ? workspace.intake.map(normalizeIntakeItem) : fresh.intake,
      activeQuestionId: workspace.activeQuestionId ?? fresh.activeQuestionId,
      activeDocId: workspace.activeDocId ?? fresh.activeDocId,
      audit: Array.isArray(workspace.audit) ? workspace.audit.map(normalizeAuditEntry) : fresh.audit,
      handoff: normalizeHandoff(workspace.handoff ?? fresh.handoff),
      dataRoom: normalizeDataRoom(workspace.dataRoom ?? fresh.dataRoom),
      access: normalizeAccess(workspace.access ?? fresh.access),
      search: "",
      filter: "all",
      librarySearch: "",
      libraryOpen: false,
      intakeOpen: false,
      dataRoomOpen: false,
      accessOpen: false,
      workspaceOpen: false,
      portalOpen: false,
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
    assigneeId: String(question.assigneeId ?? ownerToMemberId(question.owner ?? "Security")),
    routeStatus: String(question.routeStatus ?? (question.status === "needs-evidence" ? "Needs owner" : "Assigned")),
    routedAt: question.routedAt ?? null,
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

function normalizeIntakeItem(item) {
  return {
    id: String(item.id ?? `intake-saved-${Date.now()}`),
    name: String(item.name ?? "Imported file"),
    type: String(item.type ?? "File"),
    kind: String(item.kind ?? "Evidence"),
    status: String(item.status ?? "Indexed"),
    category: String(item.category ?? "Security"),
    matches: Number.isFinite(Number(item.matches)) ? Number(item.matches) : 0,
    linkedDocId: item.linkedDocId ? String(item.linkedDocId) : null,
    addedAt: item.addedAt ?? new Date().toISOString(),
  };
}

function normalizeAuditEntry(entry) {
  return {
    action: String(entry.action ?? "Workspace updated"),
    detail: String(entry.detail ?? "Saved workspace state restored."),
    at: entry.at ?? new Date().toISOString(),
  };
}

function normalizeHandoff(handoff) {
  const fresh = createInitialHandoff();
  return {
    status: String(handoff?.status ?? fresh.status),
    url: String(handoff?.url ?? fresh.url),
    expires: String(handoff?.expires ?? fresh.expires),
    preparedAt: handoff?.preparedAt ?? null,
  };
}

function normalizeDataRoom(dataRoom) {
  const fresh = createInitialDataRoom();
  const savedNotes = dataRoom?.notes && typeof dataRoom.notes === "object" ? dataRoom.notes : {};
  const notes = { ...fresh.notes };

  Object.entries(savedNotes).forEach(([docId, note]) => {
    notes[String(docId)] = normalizeDataRoomNote(note, notes[String(docId)]);
  });

  const savedChecklist = Array.isArray(dataRoom?.checklist) ? dataRoom.checklist : [];
  const savedById = new Map(savedChecklist.map((item) => [String(item.id), item]));
  const checklist = closeChecklistSeeds.map((item) => normalizeChecklistItem(savedById.get(item.id), item));

  return { notes, checklist };
}

function normalizeDataRoomNote(note, fallback) {
  const base = fallback ?? {
    reviewer: workspaceAccount.currentRole,
    status: "Review",
    summary: "Source note is ready for reviewer validation.",
    updatedAt: new Date().toISOString(),
  };

  return {
    reviewer: String(note?.reviewer ?? base.reviewer),
    status: String(note?.status ?? base.status),
    summary: String(note?.summary ?? base.summary),
    updatedAt: note?.updatedAt ?? base.updatedAt,
  };
}

function normalizeChecklistItem(item, fallback) {
  return {
    id: String(item?.id ?? fallback.id),
    label: String(item?.label ?? fallback.label),
    owner: String(item?.owner ?? fallback.owner),
    completed: Boolean(item?.completed ?? fallback.completed),
  };
}

function normalizeAccess(access) {
  const fresh = createInitialAccessState();
  return {
    session: {
      currentMemberId: String(access?.session?.currentMemberId ?? fresh.session.currentMemberId),
      method: String(access?.session?.method ?? fresh.session.method),
      status: String(access?.session?.status ?? fresh.session.status),
      lastVerifiedAt: access?.session?.lastVerifiedAt ?? fresh.session.lastVerifiedAt,
    },
    cloud: {
      status: String(access?.cloud?.status ?? fresh.cloud.status),
      checkpoint: String(access?.cloud?.checkpoint ?? fresh.cloud.checkpoint),
      lastSyncedAt: access?.cloud?.lastSyncedAt ?? fresh.cloud.lastSyncedAt,
    },
    invites: Array.isArray(access?.invites) ? access.invites.map(normalizeAccessInvite) : fresh.invites,
  };
}

function normalizeAccessInvite(invite) {
  return {
    id: String(invite?.id ?? `invite-${Date.now()}`),
    email: String(invite?.email ?? "reviewer@example.com"),
    team: String(invite?.team ?? "Reviewer"),
    role: String(invite?.role ?? "Viewer"),
    status: String(invite?.status ?? "Invited"),
    sentAt: invite?.sentAt ?? new Date().toISOString(),
  };
}

const state = loadWorkspaceState();

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  reviewNavButton: document.querySelector("#reviewNavButton"),
  workspaceNavButton: document.querySelector("#workspaceNavButton"),
  accessNavButton: document.querySelector("#accessNavButton"),
  dataRoomNavButton: document.querySelector("#dataRoomNavButton"),
  intakeNavButton: document.querySelector("#intakeNavButton"),
  evidenceNavButton: document.querySelector("#evidenceNavButton"),
  libraryNavButton: document.querySelector("#libraryNavButton"),
  metricReceived: document.querySelector("#metricReceived"),
  metricApproved: document.querySelector("#metricApproved"),
  metricNeedsEvidence: document.querySelector("#metricNeedsEvidence"),
  metricRouted: document.querySelector("#metricRouted"),
  metricCoverage: document.querySelector("#metricCoverage"),
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
  retrievalVerdict: document.querySelector("#retrievalVerdict"),
  retrievalMatch: document.querySelector("#retrievalMatch"),
  retrievalSelected: document.querySelector("#retrievalSelected"),
  retrievalDuplicate: document.querySelector("#retrievalDuplicate"),
  retrievalGate: document.querySelector("#retrievalGate"),
  retrievalInsight: document.querySelector("#retrievalInsight"),
  retrievalList: document.querySelector("#retrievalList"),
  runRetrievalButton: document.querySelector("#runRetrievalButton"),
  applyRetrievalButton: document.querySelector("#applyRetrievalButton"),
  copyRetrievalButton: document.querySelector("#copyRetrievalButton"),
  traceBound: document.querySelector("#traceBound"),
  traceConflicts: document.querySelector("#traceConflicts"),
  traceRank: document.querySelector("#traceRank"),
  traceDiff: document.querySelector("#traceDiff"),
  claimTraceCount: document.querySelector("#claimTraceCount"),
  claimTraceList: document.querySelector("#claimTraceList"),
  approveButton: document.querySelector("#approveButton"),
  needsEvidenceButton: document.querySelector("#needsEvidenceButton"),
  routeOwnerButton: document.querySelector("#routeOwnerButton"),
  copyButton: document.querySelector("#copyButton"),
  portalCopyButton: document.querySelector("#portalCopyButton"),
  copyTraceButton: document.querySelector("#copyTraceButton"),
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
  intakeBackdrop: document.querySelector("#intakeBackdrop"),
  intakeDrawer: document.querySelector("#intakeDrawer"),
  closeIntakeButton: document.querySelector("#closeIntakeButton"),
  intakeEvidenceButton: document.querySelector("#intakeEvidenceButton"),
  intakeQuestionnaireButton: document.querySelector("#intakeQuestionnaireButton"),
  intakeCount: document.querySelector("#intakeCount"),
  intakeCoverage: document.querySelector("#intakeCoverage"),
  coverageSummary: document.querySelector("#coverageSummary"),
  coverageMap: document.querySelector("#coverageMap"),
  intakeStatus: document.querySelector("#intakeStatus"),
  intakeList: document.querySelector("#intakeList"),
  workspaceBackdrop: document.querySelector("#workspaceBackdrop"),
  workspaceDrawer: document.querySelector("#workspaceDrawer"),
  closeWorkspaceButton: document.querySelector("#closeWorkspaceButton"),
  workspaceCompany: document.querySelector("#workspaceCompany"),
  workspaceId: document.querySelector("#workspaceId"),
  workspacePlan: document.querySelector("#workspacePlan"),
  workspaceAccess: document.querySelector("#workspaceAccess"),
  workspaceRole: document.querySelector("#workspaceRole"),
  workspaceRouted: document.querySelector("#workspaceRouted"),
  workspaceOpenRisks: document.querySelector("#workspaceOpenRisks"),
  workspaceReady: document.querySelector("#workspaceReady"),
  workspaceOwnerList: document.querySelector("#workspaceOwnerList"),
  handoffStatus: document.querySelector("#handoffStatus"),
  handoffExpiry: document.querySelector("#handoffExpiry"),
  handoffLink: document.querySelector("#handoffLink"),
  handoffSummary: document.querySelector("#handoffSummary"),
  prepareHandoffButton: document.querySelector("#prepareHandoffButton"),
  copyHandoffLinkButton: document.querySelector("#copyHandoffLinkButton"),
  copyHandoffSummaryButton: document.querySelector("#copyHandoffSummaryButton"),
  accessBackdrop: document.querySelector("#accessBackdrop"),
  accessDrawer: document.querySelector("#accessDrawer"),
  closeAccessButton: document.querySelector("#closeAccessButton"),
  accessSessionStatus: document.querySelector("#accessSessionStatus"),
  accessMemberCount: document.querySelector("#accessMemberCount"),
  accessVaultStatus: document.querySelector("#accessVaultStatus"),
  accessAuditCount: document.querySelector("#accessAuditCount"),
  accessCurrentUser: document.querySelector("#accessCurrentUser"),
  accessCurrentRole: document.querySelector("#accessCurrentRole"),
  accessMethod: document.querySelector("#accessMethod"),
  accessVerifiedAt: document.querySelector("#accessVerifiedAt"),
  accessRoleList: document.querySelector("#accessRoleList"),
  accessInviteForm: document.querySelector("#accessInviteForm"),
  accessInviteEmail: document.querySelector("#accessInviteEmail"),
  accessInviteRole: document.querySelector("#accessInviteRole"),
  accessInviteList: document.querySelector("#accessInviteList"),
  accessVaultSummary: document.querySelector("#accessVaultSummary"),
  accessCloudStatus: document.querySelector("#accessCloudStatus"),
  accessCloudCheckpoint: document.querySelector("#accessCloudCheckpoint"),
  syncCheckpointButton: document.querySelector("#syncCheckpointButton"),
  copyAuditButton: document.querySelector("#copyAuditButton"),
  accessAuditPreview: document.querySelector("#accessAuditPreview"),
  dataRoomBackdrop: document.querySelector("#dataRoomBackdrop"),
  dataRoomDrawer: document.querySelector("#dataRoomDrawer"),
  closeDataRoomButton: document.querySelector("#closeDataRoomButton"),
  dataRoomFolderCount: document.querySelector("#dataRoomFolderCount"),
  dataRoomNoteCount: document.querySelector("#dataRoomNoteCount"),
  dataRoomCloseProgress: document.querySelector("#dataRoomCloseProgress"),
  dataRoomFolders: document.querySelector("#dataRoomFolders"),
  dataRoomNotes: document.querySelector("#dataRoomNotes"),
  dataRoomTimeline: document.querySelector("#dataRoomTimeline"),
  dataRoomChecklist: document.querySelector("#dataRoomChecklist"),
  copyDataRoomBriefButton: document.querySelector("#copyDataRoomBriefButton"),
  libraryBackdrop: document.querySelector("#libraryBackdrop"),
  libraryDrawer: document.querySelector("#libraryDrawer"),
  closeLibraryButton: document.querySelector("#closeLibraryButton"),
  librarySearch: document.querySelector("#librarySearch"),
  libraryList: document.querySelector("#libraryList"),
  libraryCount: document.querySelector("#libraryCount"),
  memoryStatus: document.querySelector("#memoryStatus"),
  resetWorkspaceButton: document.querySelector("#resetWorkspaceButton"),
  portalBackdrop: document.querySelector("#portalBackdrop"),
  portalDrawer: document.querySelector("#portalDrawer"),
  closePortalButton: document.querySelector("#closePortalButton"),
  portalStatus: document.querySelector("#portalStatus"),
  portalConfidence: document.querySelector("#portalConfidence"),
  portalQuestion: document.querySelector("#portalQuestion"),
  portalAnswer: document.querySelector("#portalAnswer"),
  portalSourceCount: document.querySelector("#portalSourceCount"),
  portalCitations: document.querySelector("#portalCitations"),
  portalRiskStatus: document.querySelector("#portalRiskStatus"),
  copyPortalAnswerButton: document.querySelector("#copyPortalAnswerButton"),
  copyPortalCitationsButton: document.querySelector("#copyPortalCitationsButton"),
  copyPortalFullButton: document.querySelector("#copyPortalFullButton"),
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
  elements.workspaceCompany.textContent = workspaceAccount.company;
  elements.workspaceId.textContent = workspaceAccount.workspaceId;
  elements.workspacePlan.textContent = workspaceAccount.plan;
  elements.workspaceAccess.textContent = workspaceAccount.access;
  elements.workspaceRole.textContent = workspaceAccount.currentRole;
  setMemoryStatus(MEMORY_READY_LABEL);
  bindEvents();
  render();
  applyInitialHash();
}

function bindEvents() {
  elements.reviewNavButton.addEventListener("click", () => activateWorkspaceNav("review"));
  elements.workspaceNavButton.addEventListener("click", openWorkspace);
  elements.accessNavButton.addEventListener("click", openAccess);
  elements.dataRoomNavButton.addEventListener("click", openDataRoom);
  elements.intakeNavButton.addEventListener("click", openIntake);
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
    renderRetrieval(question);
    renderClaimTrace(question);
    renderIntake();
    renderWorkspace();
    renderAccess();
    renderLibrary();
    renderPortalCopy();
    schedulePersist();
  });

  elements.approveButton.addEventListener("click", approveActiveQuestion);
  elements.needsEvidenceButton.addEventListener("click", markActiveNeedsEvidence);
  elements.routeOwnerButton.addEventListener("click", routeActiveQuestion);
  elements.runRetrievalButton.addEventListener("click", runEvidenceRetrieval);
  elements.applyRetrievalButton.addEventListener("click", applyRetrievalSources);
  elements.copyRetrievalButton.addEventListener("click", copyRetrievalRationale);
  elements.copyButton.addEventListener("click", copyActiveAnswer);
  elements.copyTraceButton.addEventListener("click", copyClaimTrace);
  elements.portalCopyButton.addEventListener("click", openPortalCopy);
  elements.closeWorkspaceButton.addEventListener("click", closeWorkspace);
  elements.workspaceBackdrop.addEventListener("click", closeWorkspace);
  elements.prepareHandoffButton.addEventListener("click", prepareHandoff);
  elements.copyHandoffLinkButton.addEventListener("click", copyHandoffLink);
  elements.copyHandoffSummaryButton.addEventListener("click", copyHandoffSummary);
  elements.closeAccessButton.addEventListener("click", closeAccess);
  elements.accessBackdrop.addEventListener("click", closeAccess);
  elements.accessInviteForm.addEventListener("submit", addAccessInvite);
  elements.syncCheckpointButton.addEventListener("click", syncAccessCheckpoint);
  elements.copyAuditButton.addEventListener("click", copyAccessAudit);
  elements.closeDataRoomButton.addEventListener("click", closeDataRoom);
  elements.dataRoomBackdrop.addEventListener("click", closeDataRoom);
  elements.copyDataRoomBriefButton.addEventListener("click", copyDataRoomBrief);
  elements.closeIntakeButton.addEventListener("click", closeIntake);
  elements.intakeBackdrop.addEventListener("click", closeIntake);
  elements.intakeEvidenceButton.addEventListener("click", () => elements.evidenceInput.click());
  elements.intakeQuestionnaireButton.addEventListener("click", () => elements.questionnaireInput.click());
  elements.closeLibraryButton.addEventListener("click", closeLibrary);
  elements.libraryBackdrop.addEventListener("click", closeLibrary);
  elements.librarySearch.addEventListener("input", (event) => {
    state.librarySearch = event.target.value.trim().toLowerCase();
    renderLibrary();
  });
  elements.resetWorkspaceButton.addEventListener("click", resetWorkspace);
  elements.closePortalButton.addEventListener("click", closePortal);
  elements.portalBackdrop.addEventListener("click", closePortal);
  elements.copyPortalAnswerButton.addEventListener("click", copyPortalAnswer);
  elements.copyPortalCitationsButton.addEventListener("click", copyPortalCitations);
  elements.copyPortalFullButton.addEventListener("click", copyPortalFull);
  elements.uploadEvidenceButton.addEventListener("click", () => elements.evidenceInput.click());
  elements.uploadQuestionnaireButton.addEventListener("click", () => elements.questionnaireInput.click());
  elements.evidenceInput.addEventListener("change", importEvidenceFiles);
  elements.questionnaireInput.addEventListener("change", importQuestionnaireFiles);
  elements.refreshDraftsButton.addEventListener("click", refreshDrafts);
  elements.exportCsvButton.addEventListener("click", exportCsv);
  elements.exportDocButton.addEventListener("click", exportReviewPack);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (state.libraryOpen) closeLibrary();
    if (state.intakeOpen) closeIntake();
    if (state.dataRoomOpen) closeDataRoom();
    if (state.accessOpen) closeAccess();
    if (state.workspaceOpen) closeWorkspace();
    if (state.portalOpen) closePortal();
  });

  window.addEventListener("hashchange", applyInitialHash);
}

function applyInitialHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "workspace") openWorkspace();
  if (hash === "access" || hash === "accounts") openAccess();
  if (hash === "data-room" || hash === "dataroom") openDataRoom();
  if (hash === "intake") openIntake();
  if (hash === "library") openLibrary();
  if (hash === "portal") openPortalCopy();
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
  renderIntake();
  renderWorkspace();
  renderAccess();
  renderDataRoom();
  renderLibrary();
  renderPortalCopy();
}

function renderMetrics() {
  const received = state.questions.length;
  const approved = state.questions.filter((question) => question.status === "approved").length;
  const needsEvidence = state.questions.filter((question) => question.status === "needs-evidence").length;
  const routing = ownerRoutingSnapshot();
  const average =
    received === 0
      ? 0
      : Math.round(state.questions.reduce((sum, question) => sum + Number(question.confidence || 0), 0) / received);

  elements.metricReceived.textContent = received;
  elements.metricApproved.textContent = approved;
  elements.metricNeedsEvidence.textContent = needsEvidence;
  elements.metricRouted.textContent = `${routing.routed}/${received}`;
  elements.metricCoverage.textContent = `${coverageSnapshot().score}%`;
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
    const member = memberForQuestion(question);
    const button = document.createElement("button");
    button.className = `question-card${question.id === state.activeQuestionId ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <div class="question-meta">
        <span>${escapeHtml(question.category)}</span>
        <span>${escapeHtml(member.name)}</span>
        <span>${escapeHtml(question.portal)}</span>
      </div>
      <strong>${escapeHtml(question.text)}</strong>
      <div class="question-footer">
        <span class="question-status is-${question.status}">${formatStatus(question.status)}</span>
        <span class="route-mini ${routeStatusClass(question.routeStatus)}">${escapeHtml(routeStatusLabel(question.routeStatus))}</span>
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
      renderPortalCopy();
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
    elements.traceBound.textContent = "0/0";
    elements.traceConflicts.textContent = "0";
    elements.traceRank.textContent = "0%";
    elements.traceDiff.textContent = "Draft";
    elements.claimTraceCount.textContent = "0 claims";
    elements.claimTraceList.innerHTML = "";
    elements.retrievalVerdict.textContent = "Ready";
    elements.retrievalMatch.textContent = "0%";
    elements.retrievalSelected.textContent = "0 sources";
    elements.retrievalDuplicate.textContent = "None";
    elements.retrievalGate.textContent = "Review";
    elements.retrievalInsight.innerHTML = "";
    elements.retrievalList.innerHTML = "";
    return;
  }

  state.activeQuestionId = question.id;
  const member = memberForQuestion(question);
  elements.activeQuestionTitle.textContent = question.text;
  elements.activeQuestionMeta.textContent = `${question.category} | ${member.name} | ${member.role} | Due ${formatShortDate(question.due)}`;
  elements.answerDraft.value = question.answer ?? "";
  renderActiveStatus(question);
  renderConfidence(question);
  renderSealSummary(question);
  renderRetrieval(question);
  renderClaimTrace(question);
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

function renderRetrieval(question) {
  const retrieval = retrievalSnapshot(question);

  elements.retrievalVerdict.textContent = retrieval.verdictLabel;
  elements.retrievalMatch.textContent = `${retrieval.topScore}%`;
  elements.retrievalSelected.textContent = `${retrieval.selected.length} ${retrieval.selected.length === 1 ? "source" : "sources"}`;
  elements.retrievalDuplicate.textContent = retrieval.duplicate ? `${retrieval.duplicate.score}%` : "None";
  elements.retrievalGate.textContent = retrieval.gateLabel;
  elements.retrievalInsight.className = `retrieval-insight is-${retrieval.verdict}`;
  elements.retrievalInsight.innerHTML = `
    <strong>${escapeHtml(retrieval.headline)}</strong>
    <p>${escapeHtml(retrieval.reason)}</p>
  `;

  elements.retrievalList.innerHTML = "";
  if (retrieval.matches.length === 0) {
    elements.retrievalList.append(emptyState("No source candidates found"));
  }

  retrieval.matches.forEach((match) => {
    const card = document.createElement("article");
    card.className = `retrieval-card is-${match.tone}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(match.doc.title)}</strong>
        <span>${match.score}%</span>
      </header>
      <div class="retrieval-score-row">
        <span>${match.match}% text match</span>
        <span>${match.authority}% authority</span>
        <span>${match.freshness}% fresh</span>
      </div>
      <p>${escapeHtml(match.reason)}</p>
      <blockquote>${escapeHtml(match.excerpt)}</blockquote>
    `;
    card.addEventListener("click", () => {
      state.activeDocId = match.doc.id;
      renderEvidence();
      schedulePersist();
    });
    elements.retrievalList.append(card);
  });

  if (retrieval.duplicate) {
    const duplicate = document.createElement("article");
    duplicate.className = "retrieval-duplicate-card";
    duplicate.innerHTML = `
      <span class="label">Approved Memory</span>
      <strong>${escapeHtml(retrieval.duplicate.question.text)}</strong>
      <p>${escapeHtml(retrieval.duplicate.question.answer)}</p>
    `;
    elements.retrievalList.append(duplicate);
  }
}

function retrievalSnapshot(question) {
  const terms = retrievalTerms(question);
  const preferred = new Set(question.sources ?? []);
  const matches = state.evidence
    .map((doc) => retrievalMatch(question, doc, terms, preferred))
    .filter((match) => match.score >= 32 || preferred.has(match.doc.id))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  const selected = matches.filter((match) => match.score >= 58).slice(0, 3);
  const topScore = matches[0]?.score ?? 0;
  const duplicate = duplicateQuestionMatch(question);
  const verdict = retrievalVerdict(topScore, selected.length, duplicate);

  return {
    terms,
    matches,
    selected,
    topScore,
    duplicate,
    verdict,
    verdictLabel: retrievalVerdictLabel(verdict),
    gateLabel: retrievalGateLabel(verdict),
    ...retrievalCopy(verdict, topScore, selected, duplicate),
  };
}

function retrievalMatch(question, doc, terms, preferred) {
  const haystack = `${doc.title} ${doc.type} ${doc.owner} ${doc.tags.join(" ")} ${doc.excerpts.join(" ")}`.toLowerCase();
  const hits = terms.filter((term) => haystack.includes(term));
  const match = terms.length === 0 ? 0 : Math.round((hits.length / terms.length) * 100);
  const authority = sourceAuthorityScore(doc);
  const freshness = sourceFreshnessScore(doc.updated);
  const preferredBoost = preferred.has(doc.id) ? 8 : 0;
  const legacyPenalty = doc.type === "Legacy" ? 26 : 0;
  const score = Math.max(0, Math.min(99, Math.round(match * 0.54 + authority * 0.24 + freshness * 0.16 + preferredBoost - legacyPenalty)));
  const tone = score >= 72 ? "ready" : score >= 56 ? "weak" : "blocked";

  return {
    doc,
    score,
    match,
    authority,
    freshness,
    tone,
    excerpt: bestExcerptForQuestion(doc, question.text),
    reason: retrievalReason(doc, hits, score),
  };
}

function retrievalTerms(question) {
  const rawTerms = keywordTerms(`${question.text} ${question.category} ${question.owner}`.toLowerCase())
    .map((term) => term.toLowerCase())
    .filter((term) => term.length > 2);
  return [...new Set(rawTerms)].slice(0, 12);
}

function retrievalReason(doc, hits, score) {
  const hitText = hits.slice(0, 4).join(", ");
  if (score >= 72) return `Strong candidate because it matches ${hitText || doc.type} and has current ${doc.type} authority.`;
  if (score >= 56) return `Possible supporting source, but the match is partial: ${hitText || "few direct terms"}.`;
  return "Weak match. Keep it visible for context, but do not draft from it without a stronger source.";
}

function duplicateQuestionMatch(question) {
  const currentTerms = new Set(retrievalTerms(question));
  if (currentTerms.size === 0) return null;

  const candidates = state.questions
    .filter((candidate) => candidate.id !== question.id && candidate.answer)
    .map((candidate) => {
      const candidateTerms = new Set(retrievalTerms(candidate));
      const shared = [...currentTerms].filter((term) => candidateTerms.has(term)).length;
      const union = new Set([...currentTerms, ...candidateTerms]).size;
      const score = union === 0 ? 0 : Math.round((shared / union) * 100);
      return { question: candidate, score };
    })
    .sort((a, b) => b.score - a.score);

  const best = candidates[0];
  return best?.score >= 48 ? best : null;
}

function retrievalVerdict(topScore, selectedCount, duplicate) {
  if (topScore < 58 || selectedCount === 0) return "refuse";
  if (duplicate?.score >= 72) return "reuse";
  if (topScore < 72) return "review";
  return "ready";
}

function retrievalVerdictLabel(verdict) {
  const labels = {
    ready: "Evidence Ready",
    reuse: "Reuse Candidate",
    review: "Needs Review",
    refuse: "Refuse Draft",
  };
  return labels[verdict] ?? "Review";
}

function retrievalGateLabel(verdict) {
  if (verdict === "refuse") return "Blocked";
  if (verdict === "review") return "Human review";
  if (verdict === "reuse") return "Reuse check";
  return "Draft allowed";
}

function retrievalCopy(verdict, topScore, selected, duplicate) {
  if (verdict === "refuse") {
    return {
      headline: "No defensible source yet.",
      reason: "AnswerSeal should not draft this answer until stronger evidence is uploaded or an owner approves a source.",
    };
  }

  if (verdict === "reuse") {
    return {
      headline: "Approved memory may answer this faster.",
      reason: `A similar question is ${duplicate.score}% matched. Reuse only after confirming the same source evidence still applies.`,
    };
  }

  if (verdict === "review") {
    return {
      headline: "Evidence is partial.",
      reason: `Top source scored ${topScore}%. Route to the owner or attach another source before approval.`,
    };
  }

  return {
    headline: "Strong evidence found.",
    reason: `${selected.length} source${selected.length === 1 ? "" : "s"} can be applied to the draft with traceable rationale.`,
  };
}

function runEvidenceRetrieval() {
  const question = getActiveQuestion();
  if (!question) return;
  const retrieval = retrievalSnapshot(question);
  addAudit("Evidence retrieval run", `${shorten(question.text, 58)} returned ${retrieval.topScore}% top match and ${retrieval.gateLabel.toLowerCase()} gate.`);
  renderActiveQuestion();
  renderAudit();
  showToast("Retrieval rationale refreshed.");
}

function applyRetrievalSources() {
  const question = getActiveQuestion();
  if (!question) return;
  const retrieval = retrievalSnapshot(question);

  if (retrieval.verdict === "refuse") {
    question.status = "needs-evidence";
    question.routeStatus = "Needs owner";
    question.risks = [...new Set([...(question.risks ?? []), "Retrieval gate refused draft: no strong source match."])];
    addAudit("Retrieval gate blocked", `${shorten(question.text, 58)} needs stronger evidence before drafting.`);
    render();
    showToast("Retrieval blocked the draft.");
    return;
  }

  question.sources = [...new Set(retrieval.selected.map((match) => match.doc.id))];
  question.confidence = Math.max(question.confidence, Math.min(97, retrieval.topScore));
  if (question.status === "needs-evidence") question.status = "draft";
  question.routeStatus = retrieval.verdict === "review" ? "Owner review" : "Assigned";
  addAudit("Retrieval sources applied", `${retrieval.selected.length} source${retrieval.selected.length === 1 ? "" : "s"} applied to ${shorten(question.text, 54)}.`);
  render();
  showToast("Sources applied.");
}

function copyRetrievalRationale() {
  const question = getActiveQuestion();
  if (!question) return;
  copyText(retrievalRationaleText(question), "Retrieval rationale copied.");
}

function retrievalRationaleText(question) {
  const retrieval = retrievalSnapshot(question);
  const sourceLines = retrieval.matches
    .map((match, index) => `${index + 1}. ${match.doc.title} | ${match.score}% | ${match.reason}\n   ${match.excerpt}`)
    .join("\n");
  return [
    `AnswerSeal Evidence Retrieval - ${workspaceAccount.company}`,
    `Build: ${BUILD_VERSION}`,
    `Question: ${question.text}`,
    `Verdict: ${retrieval.verdictLabel} | Gate: ${retrieval.gateLabel} | Top match: ${retrieval.topScore}%`,
    retrieval.duplicate ? `Duplicate memory: ${retrieval.duplicate.score}% | ${retrieval.duplicate.question.text}` : "Duplicate memory: none",
    "",
    "Sources:",
    sourceLines || "No relevant sources found.",
  ].join("\n");
}

function renderClaimTrace(question) {
  const trace = claimTraceSnapshot(question);
  elements.traceBound.textContent = `${trace.bound}/${trace.claims.length}`;
  elements.traceConflicts.textContent = trace.conflicts;
  elements.traceRank.textContent = `${trace.averageRank}%`;
  elements.traceDiff.textContent = trace.answerDiff;
  elements.claimTraceCount.textContent = `${trace.claims.length} ${trace.claims.length === 1 ? "claim" : "claims"}`;
  elements.claimTraceList.innerHTML = "";

  if (trace.claims.length === 0) {
    elements.claimTraceList.append(emptyState("No answer claims to trace"));
    return;
  }

  trace.claims.forEach((claim, index) => {
    const card = document.createElement("article");
    card.className = `claim-card is-${claim.status}`;
    card.innerHTML = `
      <header>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(formatClaimStatus(claim.status))}</strong>
      </header>
      <p>${escapeHtml(claim.text)}</p>
      <div class="claim-source-row">
        <span>${escapeHtml(claim.sourceTitle)}</span>
        <span>${claim.rank}% source rank</span>
      </div>
      <blockquote>${escapeHtml(claim.excerpt)}</blockquote>
      ${claim.conflict ? `<div class="claim-conflict"><svg aria-hidden="true"><use href="#icon-warning"></use></svg><span>${escapeHtml(claim.conflict)}</span></div>` : ""}
    `;
    card.addEventListener("click", () => {
      if (!claim.sourceId) return;
      state.activeDocId = claim.sourceId;
      renderEvidence();
      schedulePersist();
    });
    elements.claimTraceList.append(card);
  });
}

function claimTraceSnapshot(question) {
  const claims = splitAnswerClaims(question.answer ?? question.text).map((claimText) => traceClaim(question, claimText));
  const bound = claims.filter((claim) => claim.status === "bound").length;
  const conflicts = claims.filter((claim) => claim.status === "conflict").length;
  const ranked = claims.filter((claim) => claim.rank > 0);
  const averageRank = ranked.length === 0 ? 0 : Math.round(ranked.reduce((sum, claim) => sum + claim.rank, 0) / ranked.length);

  return {
    claims,
    bound,
    conflicts,
    averageRank,
    answerDiff: answerDiffLabel(question),
  };
}

function traceClaim(question, claimText) {
  const ranked = rankedSourcesForClaim(question, claimText);
  const best = ranked[0];

  if (!best) {
    return {
      text: claimText,
      status: "open",
      sourceId: null,
      sourceTitle: "No source attached",
      rank: 0,
      excerpt: "Add a policy, report, contract clause, or reviewer-approved note before this claim can ship.",
      conflict: "",
    };
  }

  const conflict = conflictForClaim(claimText, best.doc, question);
  const status = conflict ? "conflict" : best.rank < 68 ? "weak" : "bound";

  return {
    text: claimText,
    status,
    sourceId: best.doc.id,
    sourceTitle: best.doc.title,
    rank: best.rank,
    excerpt: bestExcerptForQuestion(best.doc, claimText),
    conflict,
  };
}

function rankedSourcesForClaim(question, claimText) {
  const preferred = new Set(question.sources ?? []);
  const pool = state.evidence
    .map((doc) => {
      const match = sourceMatchScore(doc, claimText);
      const authority = sourceAuthorityScore(doc);
      const fresh = sourceFreshnessScore(doc.updated);
      const preferredBoost = preferred.has(doc.id) ? 8 : 0;
      const legacyPenalty = doc.type === "Legacy" ? 28 : 0;
      const rank = Math.max(0, Math.min(99, Math.round(match * 0.5 + authority * 0.3 + fresh * 0.2 + preferredBoost - legacyPenalty)));
      return { doc, rank };
    })
    .filter((item) => item.rank >= 46 || preferred.has(item.doc.id))
    .sort((a, b) => b.rank - a.rank);

  return pool;
}

function splitAnswerClaims(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((claim) => claim.trim())
    .filter((claim) => claim.length > 22)
    .slice(0, 6);
}

function conflictForClaim(claimText, source, question) {
  const lower = claimText.toLowerCase();
  const sourceText = `${source.title} ${source.type} ${source.excerpts.join(" ")}`.toLowerCase();
  const activeSources = question.sources ?? [];

  if ((lower.includes("not used") || lower.includes("no.")) && lower.includes("train")) {
    const legacy = state.evidence.find((doc) => doc.type === "Legacy" && `${doc.tags.join(" ")} ${doc.excerpts.join(" ")}`.toLowerCase().includes("anonymized"));
    if (legacy && activeSources.includes(legacy.id)) {
      return `Legacy conflict: ${legacy.title} contains older service-improvement language. Use the current AI Usage Standard as the controlling source.`;
    }
  }

  if (source.type === "Legacy") {
    return "Legacy source selected. Treat as conflict evidence, not buyer-ready proof.";
  }

  if (sourceText.includes("should not be used")) {
    return "Source contains a reuse warning. Route to owner before approval.";
  }

  if (daysSince(source.updated) >= 365) {
    return "Source is stale. Confirm current source before shipping this claim.";
  }

  return "";
}

function sourceAuthorityScore(doc) {
  const type = String(doc.type ?? "").toLowerCase();
  if (type.includes("soc")) return 96;
  if (type.includes("policy")) return 90;
  if (type.includes("ai")) return 92;
  if (type.includes("legal")) return 88;
  if (type.includes("bcp")) return 84;
  if (type.includes("legacy")) return 36;
  return 72;
}

function sourceFreshnessScore(value) {
  const age = daysSince(value);
  if (age < 90) return 98;
  if (age < 180) return 88;
  if (age < 365) return 72;
  return 38;
}

function answerDiffLabel(question) {
  const baseline = draftLibrary[question.id]?.answer;
  if (!baseline) return question.custom ? "New" : "Seed";
  const baselineWords = wordSet(baseline);
  const currentWords = wordSet(question.answer ?? "");
  if (baselineWords.size === 0 || currentWords.size === 0) return "Draft";

  const shared = [...currentWords].filter((word) => baselineWords.has(word)).length;
  const similarity = shared / Math.max(1, currentWords.size);
  const edited = Math.max(0, Math.min(99, Math.round((1 - similarity) * 100)));
  return edited <= 8 ? "Original" : `${edited}% edited`;
}

function wordSet(text) {
  return new Set(
    String(text ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3),
  );
}

function formatClaimStatus(status) {
  const labels = {
    bound: "Bound",
    conflict: "Conflict",
    weak: "Weak",
    open: "Open",
  };
  return labels[status] ?? "Review";
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
  closeWorkspace(false);
  closeAccess(false);
  closeLibrary(false);
  closeIntake(false);
  closeDataRoom(false);
  closePortal(false);
  const activeButton = target === "evidence" ? elements.evidenceNavButton : elements.reviewNavButton;
  setActiveNav(activeButton);

  if (target === "evidence") {
    elements.evidencePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  document.querySelector("#review-desk").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(activeButton) {
  [
    elements.reviewNavButton,
    elements.workspaceNavButton,
    elements.accessNavButton,
    elements.dataRoomNavButton,
    elements.intakeNavButton,
    elements.evidenceNavButton,
    elements.libraryNavButton,
  ].forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

function openWorkspace() {
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.workspaceOpen = true;
  setActiveNav(elements.workspaceNavButton);
  elements.workspaceBackdrop.hidden = false;
  elements.workspaceDrawer.classList.add("is-open");
  elements.workspaceDrawer.setAttribute("aria-hidden", "false");
  renderWorkspace();
}

function closeWorkspace(activateReview = true) {
  if (!state.workspaceOpen && elements.workspaceDrawer.getAttribute("aria-hidden") === "true") return;
  state.workspaceOpen = false;
  elements.workspaceDrawer.classList.remove("is-open");
  elements.workspaceDrawer.setAttribute("aria-hidden", "true");
  elements.workspaceBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openAccess() {
  closeWorkspace(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.accessOpen = true;
  setActiveNav(elements.accessNavButton);
  elements.accessBackdrop.hidden = false;
  elements.accessDrawer.classList.add("is-open");
  elements.accessDrawer.setAttribute("aria-hidden", "false");
  renderAccess();
}

function closeAccess(activateReview = true) {
  if (!state.accessOpen && elements.accessDrawer.getAttribute("aria-hidden") === "true") return;
  state.accessOpen = false;
  elements.accessDrawer.classList.remove("is-open");
  elements.accessDrawer.setAttribute("aria-hidden", "true");
  elements.accessBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openIntake() {
  closeWorkspace(false);
  closeAccess(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.intakeOpen = true;
  setActiveNav(elements.intakeNavButton);
  elements.intakeBackdrop.hidden = false;
  elements.intakeDrawer.classList.add("is-open");
  elements.intakeDrawer.setAttribute("aria-hidden", "false");
  renderIntake();
}

function closeIntake(activateReview = true) {
  if (!state.intakeOpen && elements.intakeDrawer.getAttribute("aria-hidden") === "true") return;
  state.intakeOpen = false;
  elements.intakeDrawer.classList.remove("is-open");
  elements.intakeDrawer.setAttribute("aria-hidden", "true");
  elements.intakeBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openDataRoom() {
  closeWorkspace(false);
  closeAccess(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.dataRoomOpen = true;
  setActiveNav(elements.dataRoomNavButton);
  elements.dataRoomBackdrop.hidden = false;
  elements.dataRoomDrawer.classList.add("is-open");
  elements.dataRoomDrawer.setAttribute("aria-hidden", "false");
  renderDataRoom();
}

function closeDataRoom(activateReview = true) {
  if (!state.dataRoomOpen && elements.dataRoomDrawer.getAttribute("aria-hidden") === "true") return;
  state.dataRoomOpen = false;
  elements.dataRoomDrawer.classList.remove("is-open");
  elements.dataRoomDrawer.setAttribute("aria-hidden", "true");
  elements.dataRoomBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openLibrary() {
  closeWorkspace(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closePortal(false);
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

function openPortalCopy() {
  closeWorkspace(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  state.portalOpen = true;
  elements.portalBackdrop.hidden = false;
  elements.portalDrawer.classList.add("is-open");
  elements.portalDrawer.setAttribute("aria-hidden", "false");
  renderPortalCopy();
  elements.portalAnswer.focus();
}

function closePortal(activateReview = true) {
  if (!state.portalOpen && elements.portalDrawer.getAttribute("aria-hidden") === "true") return;
  state.portalOpen = false;
  elements.portalDrawer.classList.remove("is-open");
  elements.portalDrawer.setAttribute("aria-hidden", "true");
  elements.portalBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function renderWorkspace() {
  const routing = ownerRoutingSnapshot();
  const handoff = handoffReadinessSnapshot();

  elements.workspaceRouted.textContent = `${routing.routed}/${state.questions.length}`;
  elements.workspaceOpenRisks.textContent = routing.openRisks;
  elements.workspaceReady.textContent = `${handoff.ready}%`;
  elements.handoffStatus.textContent = state.handoff.status;
  elements.handoffExpiry.textContent = state.handoff.expires;
  elements.handoffLink.textContent = state.handoff.url;
  elements.handoffSummary.textContent = handoffSummaryText();
  renderWorkspaceOwners(routing.groups);
}

function renderWorkspaceOwners(groups) {
  elements.workspaceOwnerList.innerHTML = "";

  workspaceAccount.members.forEach((member) => {
    const group = groups.find((item) => item.member.id === member.id) ?? {
      member,
      total: 0,
      openRisks: 0,
      needsOwner: 0,
      approved: 0,
    };
    const card = document.createElement("article");
    card.className = "owner-route-card";
    card.innerHTML = `
      <div class="role-avatar" aria-hidden="true">${escapeHtml(initials(member.name))}</div>
      <div>
        <header>
          <strong>${escapeHtml(member.name)}</strong>
          <span>${escapeHtml(member.role)}</span>
        </header>
        <p>${escapeHtml(member.team)} | ${group.total} ${group.total === 1 ? "question" : "questions"} | ${group.openRisks} open</p>
        <div class="owner-load">
          <span class="route-status ${group.needsOwner > 0 ? "is-needed" : "is-assigned"}">${group.needsOwner > 0 ? `${group.needsOwner} needs owner` : "Assigned"}</span>
          <span>${group.approved} approved</span>
        </div>
      </div>
    `;
    elements.workspaceOwnerList.append(card);
  });
}

function renderAccess() {
  const snapshot = accessSnapshot();
  const current = snapshot.currentMember;

  elements.accessSessionStatus.textContent = state.access.session.status;
  elements.accessMemberCount.textContent = snapshot.memberCount;
  elements.accessVaultStatus.textContent = state.access.cloud.status;
  elements.accessAuditCount.textContent = snapshot.auditCount;
  elements.accessCurrentUser.textContent = current.name;
  elements.accessCurrentRole.textContent = `${current.team} | ${current.role}`;
  elements.accessMethod.textContent = state.access.session.method;
  elements.accessVerifiedAt.textContent = formatAccessDate(state.access.session.lastVerifiedAt);
  elements.accessCloudStatus.textContent = state.access.cloud.status;
  elements.accessCloudCheckpoint.textContent = state.access.cloud.lastSyncedAt
    ? `${state.access.cloud.checkpoint} | ${formatAccessDate(state.access.cloud.lastSyncedAt)}`
    : state.access.cloud.checkpoint;
  elements.accessVaultSummary.innerHTML = `
    <div>
      <span class="label">Evidence Vault</span>
      <strong>${state.evidence.length} files</strong>
    </div>
    <div>
      <span class="label">Approved Answers</span>
      <strong>${snapshot.approvedAnswers}</strong>
    </div>
    <div>
      <span class="label">Claim Trace</span>
      <strong>${snapshot.claimCount} claims</strong>
    </div>
    <div>
      <span class="label">Invite Status</span>
      <strong>${snapshot.acceptedInvites}/${state.access.invites.length} accepted</strong>
    </div>
  `;

  renderAccessRoles(current.id);
  renderAccessInvites();
  renderAccessAuditPreview();
}

function renderAccessRoles(currentMemberId) {
  elements.accessRoleList.innerHTML = "";

  workspaceAccount.members.forEach((member) => {
    const button = document.createElement("button");
    button.className = `access-role-card${member.id === currentMemberId ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <div class="role-avatar" aria-hidden="true">${escapeHtml(initials(member.name))}</div>
      <div>
        <strong>${escapeHtml(member.name)}</strong>
        <span>${escapeHtml(member.team)} | ${escapeHtml(member.role)}</span>
      </div>
    `;
    button.addEventListener("click", () => switchAccessRole(member.id));
    elements.accessRoleList.append(button);
  });
}

function renderAccessInvites() {
  elements.accessInviteList.innerHTML = "";

  if (state.access.invites.length === 0) {
    elements.accessInviteList.append(emptyState("No invited teammates"));
    return;
  }

  state.access.invites.forEach((invite) => {
    const card = document.createElement("article");
    card.className = "access-invite-card";
    card.innerHTML = `
      <div>
        <strong>${escapeHtml(invite.email)}</strong>
        <span>${escapeHtml(invite.team)} | ${escapeHtml(invite.role)} | Sent ${escapeHtml(formatShortDate(invite.sentAt))}</span>
      </div>
      <button class="secondary-button" type="button" data-invite-toggle>
        <svg aria-hidden="true"><use href="#icon-check"></use></svg>
        <span>${invite.status === "Accepted" ? "Accepted" : "Mark Accepted"}</span>
      </button>
    `;
    card.querySelector("[data-invite-toggle]").addEventListener("click", () => toggleAccessInvite(invite.id));
    elements.accessInviteList.append(card);
  });
}

function renderAccessAuditPreview() {
  elements.accessAuditPreview.innerHTML = "";
  state.audit.slice(-5).reverse().forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${escapeHtml(entry.action)}</strong><span>${escapeHtml(formatAuditTime(entry.at))}</span><p>${escapeHtml(entry.detail)}</p>`;
    elements.accessAuditPreview.append(item);
  });
}

function accessSnapshot() {
  const currentMember = currentAccessMember();
  const acceptedInvites = state.access.invites.filter((invite) => invite.status === "Accepted").length;
  const approvedAnswers = state.questions.filter((question) => question.status === "approved").length;
  const claimCount = state.questions.reduce((sum, question) => sum + claimTraceSnapshot(question).claims.length, 0);

  return {
    currentMember,
    memberCount: workspaceAccount.members.length + state.access.invites.length,
    acceptedInvites,
    approvedAnswers,
    claimCount,
    auditCount: state.audit.length,
  };
}

function currentAccessMember() {
  return (
    workspaceAccount.members.find((member) => member.id === state.access.session.currentMemberId)
    ?? workspaceAccount.members[0]
  );
}

function switchAccessRole(memberId) {
  const member = workspaceAccount.members.find((item) => item.id === memberId);
  if (!member) return;

  state.access.session.currentMemberId = member.id;
  state.access.session.status = "Verified";
  state.access.session.lastVerifiedAt = new Date().toISOString();
  addAudit("Session role switched", `Workspace viewed as ${member.name} (${member.role}).`);
  renderAccess();
  renderAudit();
  renderDataRoom();
  showToast(`Viewing as ${member.name}.`);
}

function addAccessInvite(event) {
  event.preventDefault();
  const email = elements.accessInviteEmail.value.trim();
  const role = elements.accessInviteRole.value;
  if (!email) return;

  const exists = state.access.invites.some((invite) => invite.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    showToast("Invite already exists.");
    return;
  }

  state.access.invites.unshift({
    id: `invite-${Date.now()}`,
    email,
    team: accessTeamForRole(role),
    role,
    status: "Invited",
    sentAt: new Date().toISOString(),
  });
  elements.accessInviteEmail.value = "";
  addAudit("Workspace invite queued", `${email} invited as ${role}.`);
  renderAccess();
  renderAudit();
  renderDataRoom();
  showToast("Invite added.");
}

function toggleAccessInvite(inviteId) {
  const invite = state.access.invites.find((item) => item.id === inviteId);
  if (!invite || invite.status === "Accepted") return;

  invite.status = "Accepted";
  addAudit("Workspace invite accepted", `${invite.email} accepted ${invite.role} access.`);
  renderAccess();
  renderAudit();
  renderDataRoom();
  showToast("Invite marked accepted.");
}

function syncAccessCheckpoint() {
  const snapshot = accessSnapshot();
  state.access.cloud.status = "Synced";
  state.access.cloud.lastSyncedAt = new Date().toISOString();
  state.access.cloud.checkpoint = `${state.evidence.length} files, ${snapshot.approvedAnswers} approved answers, ${snapshot.claimCount} traced claims`;
  addAudit("Vault checkpoint synced", "Secure workspace checkpoint captured for pilot handoff.");
  renderAccess();
  renderAudit();
  renderDataRoom();
  showToast("Checkpoint synced.");
}

function copyAccessAudit() {
  copyText(accessAuditText(), "Access audit copied.");
}

function accessAuditText() {
  const snapshot = accessSnapshot();
  const inviteLines = state.access.invites
    .map((invite) => `- ${invite.email}: ${invite.role} | ${invite.team} | ${invite.status}`)
    .join("\n");
  const auditLines = state.audit
    .slice(-10)
    .reverse()
    .map((entry) => `- ${formatAccessDate(entry.at)} | ${entry.action}: ${entry.detail}`)
    .join("\n");

  return [
    `${workspaceAccount.company} - AnswerSeal Secure Workspace Accounts`,
    `Build: ${BUILD_VERSION}`,
    `Workspace ID: ${workspaceAccount.workspaceId}`,
    `Session: ${state.access.session.status} via ${state.access.session.method}`,
    `Current role: ${snapshot.currentMember.name} (${snapshot.currentMember.role})`,
    `Members and invites: ${snapshot.memberCount}`,
    `Vault checkpoint: ${state.access.cloud.status} | ${state.access.cloud.checkpoint}`,
    "",
    "Invites:",
    inviteLines || "No pending invites.",
    "",
    "Latest audit:",
    auditLines || "No audit events yet.",
  ].join("\n");
}

function accessTeamForRole(role) {
  if (role === "Admin") return "Security";
  if (role === "Approver") return "Legal";
  if (role === "Reviewer") return "AI Governance";
  return "Read Only";
}

function renderDataRoom() {
  const snapshot = dataRoomSnapshot();
  const noteCount = state.evidence.filter((doc) => Boolean(noteForEvidence(doc).summary.trim())).length;

  elements.dataRoomFolderCount.textContent = snapshot.folders.length;
  elements.dataRoomNoteCount.textContent = noteCount;
  elements.dataRoomCloseProgress.textContent = `${snapshot.closeProgress}%`;
  renderDataRoomFolders(snapshot.folders);
  renderDataRoomNotes();
  renderDataRoomTimeline(snapshot.timeline);
  renderCloseChecklist();
}

function renderDataRoomFolders(folders) {
  elements.dataRoomFolders.innerHTML = "";

  folders.forEach((folder) => {
    const card = document.createElement("button");
    card.className = `data-room-folder is-${folder.tone}`;
    card.type = "button";
    card.innerHTML = `
      <span class="folder-count">${escapeHtml(folder.count)}</span>
      <div>
        <strong>${escapeHtml(folder.label)}</strong>
        <p>${escapeHtml(folder.detail)}</p>
        <small>${escapeHtml(folder.status)}</small>
      </div>
    `;
    card.addEventListener("click", () => openDataRoomTarget(folder.action));
    elements.dataRoomFolders.append(card);
  });
}

function renderDataRoomNotes() {
  elements.dataRoomNotes.innerHTML = "";

  state.evidence.slice(0, 6).forEach((doc) => {
    const note = noteForEvidence(doc);
    const card = document.createElement("article");
    card.className = "data-note-card";
    card.innerHTML = `
      <header>
        <div>
          <strong>${escapeHtml(doc.title)}</strong>
          <span>${escapeHtml(doc.type)} | ${escapeHtml(note.status)}</span>
        </div>
        <span class="source-type">${escapeHtml(doc.owner)}</span>
      </header>
      <label>
        <span class="label">Reviewer note</span>
        <textarea rows="3" data-note-input>${escapeHtml(note.summary)}</textarea>
      </label>
      <footer>
        <span>By ${escapeHtml(note.reviewer)} | ${escapeHtml(formatShortDate(note.updatedAt))}</span>
        <button class="secondary-button" type="button" data-note-save>Save</button>
      </footer>
    `;

    card.querySelector("[data-note-save]").addEventListener("click", () => {
      const value = card.querySelector("[data-note-input]").value.trim();
      saveDataRoomNote(doc.id, value);
    });

    elements.dataRoomNotes.append(card);
  });
}

function renderDataRoomTimeline(timeline) {
  elements.dataRoomTimeline.innerHTML = "";

  if (timeline.length === 0) {
    elements.dataRoomTimeline.append(emptyState("No data room activity yet"));
    return;
  }

  timeline.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "timeline-item";
    item.innerHTML = `
      <span>${escapeHtml(entry.kind)}</span>
      <strong>${escapeHtml(entry.title)}</strong>
      <p>${escapeHtml(entry.detail)}</p>
      <time>${escapeHtml(formatAuditTime(entry.at))}</time>
    `;
    elements.dataRoomTimeline.append(item);
  });
}

function renderCloseChecklist() {
  elements.dataRoomChecklist.innerHTML = "";

  state.dataRoom.checklist.forEach((item) => {
    const button = document.createElement("button");
    button.className = `checklist-item${item.completed ? " is-done" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <svg aria-hidden="true"><use href="#icon-check"></use></svg>
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.owner)} | ${item.completed ? "Done" : "Open"}</span>
      </div>
    `;
    button.addEventListener("click", () => toggleCloseChecklist(item.id));
    elements.dataRoomChecklist.append(button);
  });
}

function dataRoomSnapshot() {
  const coverage = coverageSnapshot();
  const routing = ownerRoutingSnapshot();
  const handoff = handoffReadinessSnapshot();
  const approved = state.questions.filter((question) => question.status === "approved").length;
  const needsEvidence = state.questions.filter((question) => question.status === "needs-evidence").length;
  const legalDocs = state.evidence.filter((doc) => ["Legal", "DPA"].includes(doc.type) || doc.owner === "Legal").length;
  const closeProgress = closeChecklistProgress();
  const folders = dataRoomFolders.map((folder) => {
    if (folder.id === "questionnaire") {
      return {
        ...folder,
        count: String(state.questions.length),
        status: `${approved}/${state.questions.length} sealed | ${needsEvidence} gaps`,
        tone: needsEvidence > 0 ? "warning" : "ready",
      };
    }

    if (folder.id === "evidence-pack") {
      return {
        ...folder,
        count: String(state.evidence.length),
        status: `${coverage.score}% coverage | ${coverage.ready}/${coverage.items.length} ready`,
        tone: coverage.score >= 80 ? "ready" : "warning",
      };
    }

    if (folder.id === "contracts") {
      return {
        ...folder,
        count: String(legalDocs),
        status: `${routing.openRisks} open risk${routing.openRisks === 1 ? "" : "s"}`,
        tone: routing.openRisks > 0 ? "warning" : "ready",
      };
    }

    return {
      ...folder,
      count: state.handoff.status === "Prepared" ? "Ready" : "Draft",
      status: `${handoff.ready}% handoff | ${closeProgress}% close`,
      tone: state.handoff.status === "Prepared" ? "ready" : "neutral",
    };
  });

  return {
    folders,
    closeProgress,
    timeline: dataRoomTimeline(),
  };
}

function noteForEvidence(doc) {
  if (!state.dataRoom.notes[doc.id]) {
    state.dataRoom.notes[doc.id] = createDataRoomNote(doc);
  }
  return state.dataRoom.notes[doc.id];
}

function saveDataRoomNote(docId, summary) {
  const doc = getEvidenceById(docId);
  if (!doc) return;

  const current = noteForEvidence(doc);
  state.dataRoom.notes[docId] = {
    ...current,
    reviewer: workspaceAccount.currentRole,
    status: summary ? "Reviewed" : current.status,
    summary: summary || current.summary,
    updatedAt: new Date().toISOString(),
  };
  addAudit("Evidence note saved", `${doc.title} reviewer note updated.`);
  renderDataRoom();
  showToast("Evidence note saved.");
}

function toggleCloseChecklist(id) {
  const item = state.dataRoom.checklist.find((check) => check.id === id);
  if (!item) return;

  item.completed = !item.completed;
  addAudit("Pilot close updated", `${item.label} marked ${item.completed ? "done" : "open"}.`);
  renderDataRoom();
  showToast(item.completed ? "Checklist item closed." : "Checklist item reopened.");
}

function closeChecklistProgress() {
  const total = Math.max(1, state.dataRoom.checklist.length);
  const completed = state.dataRoom.checklist.filter((item) => item.completed).length;
  return Math.round((completed / total) * 100);
}

function dataRoomTimeline() {
  const auditEvents = state.audit.map((entry) => ({
    kind: "Review",
    title: entry.action,
    detail: entry.detail,
    at: entry.at,
  }));

  const intakeEvents = state.intake.map((item) => ({
    kind: item.kind,
    title: `${item.name} added`,
    detail: `${item.type} | ${item.status} | ${item.matches} ${item.kind === "Questionnaire" ? "questions" : "matches"}`,
    at: item.addedAt,
  }));

  return [...auditEvents, ...intakeEvents]
    .sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime())
    .slice(0, 9);
}

function openDataRoomTarget(action) {
  if (action === "evidence") {
    closeDataRoom(false);
    activateWorkspaceNav("evidence");
    return;
  }

  if (action === "workspace") {
    openWorkspace();
    return;
  }

  if (action === "library") {
    openLibrary();
    return;
  }

  closeDataRoom();
}

function copyDataRoomBrief() {
  copyText(dataRoomBriefText(), "Data room brief copied.");
}

function dataRoomBriefText() {
  const snapshot = dataRoomSnapshot();
  const access = accessSnapshot();
  const folderLines = snapshot.folders.map((folder) => `- ${folder.label}: ${folder.count} | ${folder.status}`).join("\n");
  const noteLines = state.evidence
    .slice(0, 5)
    .map((doc) => {
      const note = noteForEvidence(doc);
      return `- ${doc.title}: ${note.status} | ${note.summary}`;
    })
    .join("\n");
  const checklistLines = state.dataRoom.checklist
    .map((item) => `- ${item.completed ? "Done" : "Open"} | ${item.label} (${item.owner})`)
    .join("\n");

  return [
    `${workspaceAccount.company} - AnswerSeal Pilot Data Room`,
    `Build: ${BUILD_VERSION}`,
    `Workspace ID: ${workspaceAccount.workspaceId}`,
    `Access: ${state.access.cloud.status} | ${access.memberCount} members and invites`,
    `Close progress: ${snapshot.closeProgress}%`,
    "",
    "Folders:",
    folderLines,
    "",
    "Evidence notes:",
    noteLines,
    "",
    "Pilot close checklist:",
    checklistLines,
  ].join("\n");
}

function renderIntake() {
  const coverage = coverageSnapshot();
  elements.intakeCount.textContent = state.intake.length;
  elements.intakeCoverage.textContent = `${coverage.score}%`;
  elements.coverageSummary.textContent = `${coverage.ready}/${coverage.items.length} ready`;
  elements.intakeStatus.textContent = `${state.intake.filter((item) => item.status !== "Indexed").length} new`;

  renderCoverageMap(coverage.items);
  renderIntakeList();
}

function renderCoverageMap(items) {
  elements.coverageMap.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("button");
    card.className = `coverage-card is-${item.status}`;
    card.type = "button";
    card.innerHTML = `
      <span>${escapeHtml(item.category)}</span>
      <strong>${escapeHtml(formatCoverageStatus(item.status))}</strong>
      <small>${item.sources} ${item.sources === 1 ? "source" : "sources"} | ${item.openRisks} ${item.openRisks === 1 ? "risk" : "risks"}</small>
    `;
    card.addEventListener("click", () => {
      state.filter = item.openRisks > 0 ? "risk" : "all";
      state.search = item.category.toLowerCase();
      elements.statusFilter.value = state.filter;
      elements.questionSearch.value = state.search;
      closeIntake();
      renderQuestionList();
    });
    elements.coverageMap.append(card);
  });
}

function renderIntakeList() {
  elements.intakeList.innerHTML = "";
  const items = [...state.intake].sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());

  if (items.length === 0) {
    elements.intakeList.append(emptyState("No intake files"));
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "intake-item";
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(item.name)}</strong>
        <span class="source-type">${escapeHtml(item.type)}</span>
      </header>
      <div class="intake-meta">
        <span class="fact-chip">${escapeHtml(item.kind)}</span>
        <span class="fact-chip ${intakeStatusClass(item.status)}">${escapeHtml(item.status)}</span>
        <span class="fact-chip">${escapeHtml(item.category)}</span>
      </div>
      <footer>
        <span>${item.matches} ${item.kind === "Questionnaire" ? "questions" : "matches"}</span>
        ${item.linkedDocId ? '<button class="secondary-button" type="button" data-open-doc>Open</button>' : ""}
      </footer>
    `;

    const openButton = card.querySelector("[data-open-doc]");
    if (openButton) {
      openButton.addEventListener("click", () => {
        state.activeDocId = item.linkedDocId;
        closeIntake();
        renderEvidence();
        schedulePersist();
      });
    }

    elements.intakeList.append(card);
  });
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

function renderPortalCopy() {
  const question = getActiveQuestion();
  if (!question) return;

  const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  elements.portalStatus.textContent = formatStatus(question.status);
  elements.portalConfidence.textContent = `${question.confidence ?? 0}%`;
  elements.portalQuestion.textContent = question.text;
  elements.portalAnswer.value = question.answer ?? "";
  elements.portalSourceCount.textContent = `${sources.length} ${sources.length === 1 ? "source" : "sources"}`;
  elements.portalCitations.innerHTML = "";

  if (sources.length === 0) {
    elements.portalCitations.append(emptyState("No citations attached"));
  } else {
    sources.forEach((source) => {
      const citation = document.createElement("article");
      citation.className = "portal-citation";
      citation.innerHTML = `
        <strong>${escapeHtml(source.title)}</strong>
        <span>${escapeHtml(source.type)} | ${escapeHtml(freshnessLabel(source.updated))}</span>
        <p>${escapeHtml(bestExcerptForQuestion(source, question.text))}</p>
      `;
      elements.portalCitations.append(citation);
    });
  }

  const risks = question.risks ?? [];
  elements.portalRiskStatus.innerHTML = risks.length
    ? risks.map((risk) => `<div class="risk-item"><svg aria-hidden="true"><use href="#icon-warning"></use></svg><span>${escapeHtml(risk)}</span></div>`).join("")
    : '<div class="empty-state compact">No review notes</div>';
}

function copyPortalAnswer() {
  const question = getActiveQuestion();
  if (!question) return;
  copyText(question.answer ?? "", "Portal answer copied.");
}

function copyPortalCitations() {
  const question = getActiveQuestion();
  if (!question) return;
  copyText(portalCitationsText(question), "Portal citations copied.");
}

function copyPortalFull() {
  const question = getActiveQuestion();
  if (!question) return;
  copyText(portalFullText(question), "Full portal response copied.");
}

function portalCitationsText(question) {
  const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  return sources
    .map((source) => `${source.title} (${source.type}, ${freshnessLabel(source.updated)}): ${bestExcerptForQuestion(source, question.text)}`)
    .join("\n");
}

function portalFullText(question) {
  const risks = (question.risks ?? []).join("; ") || "No review notes";
  return [
    `Question: ${question.text}`,
    `Answer: ${question.answer ?? ""}`,
    `Citations:\n${portalCitationsText(question) || "No citations attached"}`,
    `Review status: ${formatStatus(question.status)} | Confidence: ${question.confidence ?? 0}% | ${risks}`,
  ].join("\n\n");
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

  const status = confidence >= 82 && risks.length === 0 ? "draft" : "needs-evidence";

  return {
    category,
    owner,
    assigneeId: ownerToMemberId(owner),
    routeStatus: status === "needs-evidence" ? "Needs owner" : "Assigned",
    routedAt: null,
    answer: composeGenericAnswer(text, sources, category),
    sources,
    confidence,
    status,
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

function ownerToMemberId(owner) {
  const normalized = String(owner ?? "Security").toLowerCase();
  if (normalized.includes("ai")) return "owner-ai";
  if (normalized.includes("legal") || normalized.includes("privacy")) return "owner-legal";
  if (normalized.includes("operations") || normalized.includes("continuity")) return "owner-ops";
  return "owner-security";
}

function memberById(id) {
  return workspaceAccount.members.find((member) => member.id === id) ?? workspaceAccount.members[0];
}

function memberForQuestion(question) {
  return memberById(question.assigneeId ?? ownerToMemberId(question.owner));
}

function ownerRoutingSnapshot() {
  const groups = workspaceAccount.members.map((member) => {
    const questions = state.questions.filter((question) => memberForQuestion(question).id === member.id);
    const openRisks = questions.filter((question) => question.status === "needs-evidence" || (question.risks ?? []).length > 0).length;
    const needsOwner = questions.filter((question) => ["Needs owner", "Owner review"].includes(question.routeStatus)).length;
    const approved = questions.filter((question) => question.status === "approved").length;
    return {
      member,
      questions,
      total: questions.length,
      openRisks,
      needsOwner,
      approved,
    };
  });

  return {
    routed: state.questions.filter((question) => Boolean(question.assigneeId)).length,
    openRisks: groups.reduce((sum, group) => sum + group.openRisks, 0),
    groups,
  };
}

function handoffReadinessSnapshot() {
  const total = Math.max(1, state.questions.length);
  const approved = state.questions.filter((question) => question.status === "approved").length;
  const sourced = state.questions.filter((question) => (question.sources ?? []).length > 0).length;
  const routed = state.questions.filter((question) => Boolean(question.assigneeId)).length;
  const coverage = coverageSnapshot().score;
  const score = Math.round((approved / total) * 35 + (sourced / total) * 25 + (routed / total) * 20 + coverage * 0.2);
  return {
    ready: Math.max(0, Math.min(100, score)),
    approved,
    sourced,
    routed,
    coverage,
  };
}

function handoffSummaryText() {
  const routing = ownerRoutingSnapshot();
  const handoff = handoffReadinessSnapshot();
  const ownerLines = routing.groups
    .filter((group) => group.total > 0)
    .map((group) => `${group.member.name} (${group.member.team}): ${group.total} assigned, ${group.openRisks} open risks`)
    .join("\n");

  return [
    `${workspaceAccount.company} - AnswerSeal Private Workspace`,
    `Build: ${BUILD_VERSION}`,
    `Workspace ID: ${workspaceAccount.workspaceId}`,
    `Handoff status: ${state.handoff.status}`,
    `Readiness: ${handoff.ready}%`,
    `Evidence coverage: ${handoff.coverage}%`,
    `Approved answers: ${handoff.approved}/${state.questions.length}`,
    `Owner routing: ${routing.routed}/${state.questions.length} assigned`,
    `Open risks: ${routing.openRisks}`,
    "",
    "Owners:",
    ownerLines || "No owner assignments yet.",
    "",
    `Secure handoff: ${state.handoff.url}`,
    `Expires: ${state.handoff.expires}`,
  ].join("\n");
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

function coverageSnapshot() {
  const items = coverageRules.map(coverageItem);
  const score = Math.round(items.reduce((sum, item) => sum + item.score, 0) / items.length);
  const ready = items.filter((item) => item.status === "ready").length;
  return { items, ready, score };
}

function coverageItem(rule) {
  const docs = state.evidence.filter((doc) => evidenceMatchesRule(doc, rule));
  const questions = state.questions.filter((question) => question.category === rule.category);
  const openRisks = questions.filter((question) => question.status === "needs-evidence" || (question.risks ?? []).length > 0).length;
  const staleSources = docs.filter((doc) => daysSince(doc.updated) >= 365).length;

  if (docs.length === 0) {
    return { ...rule, sources: 0, openRisks, status: "missing", score: 20 };
  }

  if (staleSources === docs.length) {
    return { ...rule, sources: docs.length, openRisks, status: "stale", score: 45 };
  }

  if (openRisks > 0 || docs.length < 2 || staleSources > 0) {
    return { ...rule, sources: docs.length, openRisks, status: "weak", score: 70 };
  }

  return { ...rule, sources: docs.length, openRisks, status: "ready", score: 100 };
}

function evidenceMatchesRule(doc, rule) {
  const haystack = `${doc.title} ${doc.type} ${doc.owner} ${doc.tags.join(" ")} ${doc.excerpts.join(" ")}`.toLowerCase();
  return rule.terms.some((term) => haystack.includes(term));
}

function categoryForEvidence(doc) {
  return coverageRules.find((rule) => evidenceMatchesRule(doc, rule))?.category ?? doc.owner ?? "Security";
}

function formatCoverageStatus(status) {
  const labels = {
    ready: "Ready",
    weak: "Weak",
    stale: "Stale",
    missing: "Missing",
  };
  return labels[status] ?? status;
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

  const trace = claimTraceSnapshot(question);
  if (trace.conflicts > 0) {
    question.status = "needs-evidence";
    question.routeStatus = "Needs owner";
    if (!question.risks.includes("Claim trace found conflicting or legacy source language.")) {
      question.risks.push("Claim trace found conflicting or legacy source language.");
    }
    addAudit("Approval blocked", "Claim Trace Engine found a source conflict.");
    render();
    showToast("Claim trace conflict found.");
    return;
  }

  question.status = "approved";
  question.approvedAt = new Date().toISOString();
  question.routeStatus = "Assigned";
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
  renderWorkspace();
  renderPortalCopy();
  schedulePersist();
}

function markActiveNeedsEvidence() {
  const question = getActiveQuestion();
  if (!question) return;
  question.status = "needs-evidence";
  question.approvedAt = null;
  question.routeStatus = "Needs owner";
  if (!question.risks.includes("Reviewer marked this answer as needing stronger evidence.")) {
    question.risks.push("Reviewer marked this answer as needing stronger evidence.");
  }
  addAudit("Evidence requested", shorten(question.text, 72));
  render();
  showToast("Marked for evidence.");
}

function routeActiveQuestion() {
  const question = getActiveQuestion();
  if (!question) return;

  const member = memberForQuestion(question);
  question.assigneeId = member.id;
  question.routeStatus = question.status === "needs-evidence" || (question.risks ?? []).length > 0 ? "Owner review" : "Assigned";
  question.routedAt = new Date().toISOString();
  addAudit("Owner routed", `${shorten(question.text, 62)} routed to ${member.name}.`);
  render();
  openWorkspace();
  showToast(`Routed to ${member.name}.`);
}

function prepareHandoff() {
  state.handoff.status = "Prepared";
  state.handoff.preparedAt = new Date().toISOString();
  addAudit("Handoff prepared", "Private workspace summary prepared for buyer-facing review.");
  renderWorkspace();
  renderDataRoom();
  showToast("Private handoff prepared.");
}

function copyHandoffLink() {
  copyText(state.handoff.url, "Secure handoff link copied.");
}

function copyHandoffSummary() {
  copyText(handoffSummaryText(), "Workspace handoff summary copied.");
}

async function copyActiveAnswer() {
  const question = getActiveQuestion();
  if (!question?.answer) return;
  copyText(question.answer, "Answer copied.");
}

function copyClaimTrace() {
  const question = getActiveQuestion();
  if (!question) return;
  copyText(claimTraceText(question), "Claim trace copied.");
}

function claimTraceText(question) {
  const trace = claimTraceSnapshot(question);
  const lines = trace.claims.map((claim, index) =>
    [
      `${index + 1}. ${claim.text}`,
      `Status: ${formatClaimStatus(claim.status)} | Source: ${claim.sourceTitle} | Rank: ${claim.rank}%`,
      `Excerpt: ${claim.excerpt}`,
      claim.conflict ? `Conflict: ${claim.conflict}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `AnswerSeal Claim Trace - ${workspaceAccount.company}`,
    `Build: ${BUILD_VERSION}`,
    `Question: ${question.text}`,
    `Trace: ${trace.bound}/${trace.claims.length} bound | ${trace.conflicts} conflicts | ${trace.averageRank}% average source rank | ${trace.answerDiff}`,
    "",
    lines.join("\n\n"),
  ].join("\n");
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
    const text = await readFilePreview(file);
    const doc = createEvidenceFromFile(file.name, text);
    state.evidence.unshift(doc);
    state.activeDocId = doc.id;
    state.dataRoom.notes[doc.id] = createDataRoomNote(doc);
    state.intake.unshift(createIntakeItem(file, "Evidence", text, doc.id, doc.tags.length));
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
    const text = await readFilePreview(file);
    const questions = parseQuestionLines(text);
    questions.forEach((questionText) => {
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
    state.intake.unshift(createIntakeItem(file, "Questionnaire", text, null, questions.length));
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

async function readFilePreview(file) {
  const extension = fileExtension(file.name);
  const metadata = `${file.name} ${extension} evidence questionnaire policy soc report dpa security privacy continuity access incident ai`;

  if (["pdf", "docx", "xlsx"].includes(extension)) {
    return metadata;
  }

  try {
    return await file.text();
  } catch {
    return metadata;
  }
}

function createIntakeItem(file, kind, text, linkedDocId, matches) {
  const extension = fileExtension(file.name).toUpperCase() || "File";
  const isPreview = ["PDF", "DOCX", "XLSX"].includes(extension);

  return {
    id: `intake-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name.replace(/\.[^.]+$/, ""),
    type: extension,
    kind,
    status: isPreview ? "Preview" : "Parsed",
    category: kind === "Questionnaire" ? "Buyer Review" : inferCategory(`${file.name} ${text}`.toLowerCase()),
    matches,
    linkedDocId,
    addedAt: new Date().toISOString(),
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
  const header = [
    "Question",
    "Status",
    "Owner",
    "Assignee",
    "Route Status",
    "Confidence",
    "Retrieval Gate",
    "Retrieval Match",
    "Retrieval Sources",
    "Trace",
    "Answer",
    "Sources",
    "Risks",
  ];
  const rows = state.questions.map((question) => {
    const trace = claimTraceSnapshot(question);
    const retrieval = retrievalSnapshot(question);
    return [
      question.text,
      formatStatus(question.status),
      question.owner,
      memberForQuestion(question).name,
      routeStatusLabel(question.routeStatus),
      `${question.confidence}%`,
      retrieval.gateLabel,
      `${retrieval.topScore}%`,
      retrieval.selected.map((match) => match.doc.title).join("; "),
      `${trace.bound}/${trace.claims.length} bound, ${trace.conflicts} conflicts, ${trace.averageRank}% rank`,
      question.answer,
      (question.sources ?? []).map((id) => getEvidenceById(id)?.title).filter(Boolean).join("; "),
      (question.risks ?? []).join("; "),
    ];
  });

  downloadBlob("answerseal-questionnaire.csv", toCsv([header, ...rows]), "text/csv");
  addAudit("CSV exported", "Questionnaire answers exported.");
  renderAudit();
  showToast("CSV exported.");
}

function exportReviewPack() {
  const coverage = coverageSnapshot();
  const routing = ownerRoutingSnapshot();
  const handoff = handoffReadinessSnapshot();
  const dataRoom = dataRoomSnapshot();
  const access = accessSnapshot();
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
          .ok { color: #00786d; }
        </style>
      </head>
      <body>
        <h1>AnswerSeal Review Pack v7</h1>
        <p>Exported ${escapeHtml(formatDate(new Date()))}</p>
        <h2>Private Workspace</h2>
        <p>${escapeHtml(workspaceAccount.company)} | ${escapeHtml(workspaceAccount.workspaceId)} | ${escapeHtml(workspaceAccount.plan)}</p>
        <p>Handoff readiness: ${handoff.ready}% | Owner routing: ${routing.routed}/${state.questions.length} assigned | Open risks: ${routing.openRisks}</p>
        <h2>Secure Workspace Accounts</h2>
        <p>Session: ${escapeHtml(state.access.session.status)} via ${escapeHtml(state.access.session.method)} | Current role: ${escapeHtml(access.currentMember.name)} | Vault: ${escapeHtml(state.access.cloud.status)}</p>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Members and invites</td>
              <td>${access.memberCount}</td>
            </tr>
            <tr>
              <td>Accepted invites</td>
              <td>${access.acceptedInvites}/${state.access.invites.length}</td>
            </tr>
            <tr>
              <td>Vault checkpoint</td>
              <td>${escapeHtml(state.access.cloud.checkpoint)}</td>
            </tr>
            <tr>
              <td>Latest sync</td>
              <td>${escapeHtml(formatAccessDate(state.access.cloud.lastSyncedAt))}</td>
            </tr>
          </tbody>
        </table>
        <h2>Workspace Invites</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Team</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${state.access.invites
              .map(
                (invite) => `
                  <tr>
                    <td>${escapeHtml(invite.email)}</td>
                    <td>${escapeHtml(invite.team)}</td>
                    <td>${escapeHtml(invite.role)}</td>
                    <td>${escapeHtml(invite.status)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Pilot Data Room</h2>
        <p>Close progress: ${dataRoom.closeProgress}% | Evidence notes: ${state.evidence.length} sources | Folders: ${dataRoom.folders.length}</p>
        <table>
          <thead>
            <tr>
              <th>Folder</th>
              <th>Count</th>
              <th>Status</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${dataRoom.folders
              .map(
                (folder) => `
                  <tr>
                    <td>${escapeHtml(folder.label)}</td>
                    <td>${escapeHtml(folder.count)}</td>
                    <td>${escapeHtml(folder.status)}</td>
                    <td>${escapeHtml(folder.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evidence Notes</h2>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Status</th>
              <th>Reviewer</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            ${state.evidence
              .map((doc) => {
                const note = noteForEvidence(doc);
                return `
                  <tr>
                    <td>${escapeHtml(doc.title)}</td>
                    <td>${escapeHtml(note.status)}</td>
                    <td>${escapeHtml(note.reviewer)}</td>
                    <td>${escapeHtml(note.summary)}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
        <h2>Pilot Close Checklist</h2>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${state.dataRoom.checklist
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.label)}</td>
                    <td>${escapeHtml(item.owner)}</td>
                    <td class="${item.completed ? "ok" : "risk"}">${item.completed ? "Done" : "Open"}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Owner Routing</h2>
        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Role</th>
              <th>Questions</th>
              <th>Open Risks</th>
            </tr>
          </thead>
          <tbody>
            ${routing.groups
              .map(
                (group) => `
                  <tr>
                    <td>${escapeHtml(group.member.name)}</td>
                    <td>${escapeHtml(`${group.member.team} ${group.member.role}`)}</td>
                    <td>${group.total}</td>
                    <td class="${group.openRisks > 0 ? "risk" : "ok"}">${group.openRisks}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evidence Coverage</h2>
        <p>${coverage.score}% coverage across ${coverage.items.length} trust categories.</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
              <th>Sources</th>
              <th>Open Risks</th>
            </tr>
          </thead>
          <tbody>
            ${coverage.items
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.category)}</td>
                    <td class="${item.status === "ready" ? "ok" : "risk"}">${escapeHtml(formatCoverageStatus(item.status))}</td>
                    <td>${item.sources}</td>
                    <td>${item.openRisks}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evidence Retrieval AI</h2>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Verdict</th>
              <th>Top Match</th>
              <th>Selected Sources</th>
              <th>Duplicate Memory</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            ${state.questions
              .map((question) => {
                const retrieval = retrievalSnapshot(question);
                return `
                  <tr>
                    <td>${escapeHtml(question.text)}</td>
                    <td class="${retrieval.verdict === "refuse" || retrieval.verdict === "review" ? "risk" : "ok"}">${escapeHtml(retrieval.verdictLabel)}</td>
                    <td>${retrieval.topScore}%</td>
                    <td>${escapeHtml(retrieval.selected.map((match) => match.doc.title).join("; ") || "None")}</td>
                    <td>${escapeHtml(retrieval.duplicate ? `${retrieval.duplicate.score}% | ${retrieval.duplicate.question.text}` : "None")}</td>
                    <td>${escapeHtml(`${retrieval.headline} ${retrieval.reason}`)}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
        <h2>Questionnaire Responses</h2>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Status</th>
              <th>Assignee</th>
              <th>Route</th>
              <th>Answer</th>
              <th>Citations</th>
              <th>Freshness</th>
              <th>Library Ref</th>
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
                    <td>${escapeHtml(memberForQuestion(question).name)}</td>
                    <td>${escapeHtml(routeStatusLabel(question.routeStatus))}</td>
                    <td>${escapeHtml(question.answer)}</td>
                    <td>${escapeHtml((question.sources ?? []).map((id) => getEvidenceById(id)?.title).filter(Boolean).join("; "))}</td>
                    <td>${escapeHtml(sourceFreshnessSummary((question.sources ?? []).map(getEvidenceById).filter(Boolean)))}</td>
                    <td>${escapeHtml(question.approvedAt ? `AS-LIB-${question.id}` : "Not approved")}</td>
                    <td class="risk">${escapeHtml((question.risks ?? []).join("; "))}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Claim Trace</h2>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Claim</th>
              <th>Status</th>
              <th>Source</th>
              <th>Rank</th>
              <th>Excerpt</th>
              <th>Conflict</th>
            </tr>
          </thead>
          <tbody>
            ${state.questions
              .flatMap((question) =>
                claimTraceSnapshot(question).claims.map(
                  (claim) => `
                    <tr>
                      <td>${escapeHtml(question.text)}</td>
                      <td>${escapeHtml(claim.text)}</td>
                      <td class="${claim.status === "bound" ? "ok" : "risk"}">${escapeHtml(formatClaimStatus(claim.status))}</td>
                      <td>${escapeHtml(claim.sourceTitle)}</td>
                      <td>${claim.rank}%</td>
                      <td>${escapeHtml(claim.excerpt)}</td>
                      <td class="risk">${escapeHtml(claim.conflict)}</td>
                    </tr>
                  `,
                ),
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;

  downloadBlob("answerseal-review-pack.doc", html, "application/msword");
  addAudit("Review pack exported", "Review Pack v7 created with evidence retrieval rationale, secure access, and claim trace.");
  renderAudit();
  renderAccess();
  renderDataRoom();
  showToast("Review Pack v7 exported.");
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
    intake: state.intake,
    dataRoom: state.dataRoom,
    access: state.access,
    handoff: state.handoff,
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
  LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  elements.questionSearch.value = "";
  elements.statusFilter.value = "all";
  elements.librarySearch.value = "";
  closeIntake(false);
  closeDataRoom(false);
  closeAccess(false);
  closePortal(false);
  closeWorkspace(false);
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

function routeStatusLabel(status) {
  const labels = {
    Assigned: "Assigned",
    "Needs owner": "Needs owner",
    "Owner review": "Owner review",
  };
  return labels[status] ?? "Assigned";
}

function routeStatusClass(status) {
  if (status === "Needs owner") return "is-needed";
  if (status === "Owner review") return "is-review";
  return "is-assigned";
}

function nextActionLabel(question) {
  const verb = question.status === "needs-evidence" ? "Add evidence" : "Review";
  return `${verb}: ${question.category} with ${memberForQuestion(question).name}`;
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

function formatAccessDate(value) {
  if (!value) return "Not synced";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
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

function intakeStatusClass(status) {
  if (status === "Parsed" || status === "Indexed") return "is-fresh";
  if (status === "Preview") return "is-medium";
  return "";
}

function fileExtension(name) {
  return name.split(".").pop()?.toLowerCase() ?? "";
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

function initials(name) {
  return String(name)
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
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
