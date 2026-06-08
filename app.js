const BUILD_VERSION = "v0.19 Alpha";
const STORAGE_KEY = "answerseal.workspace.v19";
const LEGACY_STORAGE_KEYS = [
  "answerseal.workspace.v18",
  "answerseal.workspace.v17",
  "answerseal.workspace.v16",
  "answerseal.workspace.v15",
  "answerseal.workspace.v14",
  "answerseal.workspace.v13",
  "answerseal.workspace.v12",
  "answerseal.workspace.v11",
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
  trustRoomUrl: "https://answerseal.app/room/AS-TRUST-2407",
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

const buyerPipelineSeeds = [
  {
    id: "northstar-payments",
    company: "Northstar Payments",
    buyer: "Fintech procurement",
    stage: "Legal security review",
    value: 72000,
    due: "2026-06-16",
    owner: "Nina Patel",
    status: "Legal review",
    readiness: 74,
    questions: 14,
    approved: 8,
    blockers: 3,
    reuse: ["dpa", "soc2", "security-policy"],
    nextAction: "Confirm subprocessor notice language before legal handoff.",
    portal: "Zip",
  },
  {
    id: "terra-logistics",
    company: "Terra Logistics",
    buyer: "Operations vendor desk",
    stage: "Security questionnaire",
    value: 56000,
    due: "2026-06-12",
    owner: "Leo Morgan",
    status: "SLA risk",
    readiness: 61,
    questions: 22,
    approved: 9,
    blockers: 6,
    reuse: ["bcp", "soc2", "security-policy"],
    nextAction: "Attach continuity test evidence and backup integrity proof.",
    portal: "Excel",
  },
  {
    id: "meridian-cloud",
    company: "Meridian Cloud",
    buyer: "Enterprise security",
    stage: "Final buyer portal",
    value: 94000,
    due: "2026-06-20",
    owner: "Maya Shah",
    status: "Ready soon",
    readiness: 88,
    questions: 18,
    approved: 15,
    blockers: 1,
    reuse: ["soc2", "ai-standard", "security-policy"],
    nextAction: "Copy approved AI and access answers into final portal sequence.",
    portal: "OneTrust",
  },
  {
    id: "brightpath-ai",
    company: "BrightPath AI",
    buyer: "AI governance team",
    stage: "Model-risk review",
    value: 64000,
    due: "2026-06-18",
    owner: "Omar Khan",
    status: "Evidence gap",
    readiness: 69,
    questions: 12,
    approved: 7,
    blockers: 4,
    reuse: ["ai-standard", "dpa", "pilot-terms-2025"],
    nextAction: "Remove legacy pilot language and attach current AI Usage Standard.",
    portal: "Buyer portal",
  },
];

const trustRoomReceiptSeeds = [
  {
    id: "receipt-created",
    actor: "Maya Shah",
    action: "Room drafted",
    detail: "Buyer-safe answer packet assembled from approved sources.",
    at: "2026-06-08T06:30:00.000Z",
  },
  {
    id: "receipt-opened",
    actor: "Aster Health security",
    action: "Buyer opened",
    detail: "Scoped room viewed with watermark and source-safe excerpts.",
    at: "2026-06-08T07:20:00.000Z",
  },
  {
    id: "receipt-copied",
    actor: "Aster Health security",
    action: "Answer copied",
    detail: "AI governance answer copied with citation note attached.",
    at: "2026-06-08T07:24:00.000Z",
  },
];

const followUpSeeds = [
  {
    id: "fu-ai-retention",
    buyer: "Aster Health security",
    room: "Aster Health Trust Room",
    comment: "Can you confirm whether AI prompts are retained by model providers after processing?",
    category: "AI Governance",
    ownerId: "owner-ai",
    questionId: "q-ai-training",
    sourceId: "ai-standard",
    status: "New",
    priority: "High",
    receivedAt: "2026-06-08T07:38:00.000Z",
    due: "2026-06-09",
    linkedTaskId: null,
  },
  {
    id: "fu-incident-sla",
    buyer: "Aster Health legal",
    room: "Aster Health Trust Room",
    comment: "The incident answer mentions annual testing. What is the customer notification timeline for a confirmed breach?",
    category: "Incident",
    ownerId: "owner-security",
    questionId: "q-incident",
    sourceId: "soc2",
    status: "Routed",
    priority: "High",
    receivedAt: "2026-06-08T08:04:00.000Z",
    due: "2026-06-10",
    linkedTaskId: null,
  },
  {
    id: "fu-subprocessor",
    buyer: "Aster Health privacy",
    room: "Aster Health Trust Room",
    comment: "Please share how customers are notified before subprocessor changes.",
    category: "Privacy",
    ownerId: "owner-legal",
    questionId: "q-privacy",
    sourceId: "dpa",
    status: "Answered",
    priority: "Medium",
    receivedAt: "2026-06-08T08:26:00.000Z",
    due: "2026-06-12",
    linkedTaskId: null,
  },
  {
    id: "fu-recovery-proof",
    buyer: "Aster Health security",
    room: "Aster Health Trust Room",
    comment: "Do you have a recent recovery test result that supports the RTO and RPO claims?",
    category: "Continuity",
    ownerId: "owner-ops",
    questionId: "q-backup",
    sourceId: "bcp",
    status: "Needs evidence",
    priority: "Medium",
    receivedAt: "2026-06-08T08:41:00.000Z",
    due: "2026-06-13",
    linkedTaskId: null,
  },
];

const connectorSeeds = [
  {
    id: "conn-drive-security",
    provider: "Google Drive",
    name: "Security Policies",
    ownerId: "owner-security",
    status: "Approved",
    lastSync: "2026-06-08T06:52:00.000Z",
    docs: 5,
    linkedEvidence: ["soc2", "security-policy"],
    freshness: "Fresh",
    issues: 0,
    nextAction: "Keep SOC 2 and policy folders approved for buyer-room reuse.",
  },
  {
    id: "conn-sharepoint-legal",
    provider: "SharePoint",
    name: "Legal Trust Docs",
    ownerId: "owner-legal",
    status: "Pending",
    lastSync: "2026-06-07T15:20:00.000Z",
    docs: 3,
    linkedEvidence: ["dpa"],
    freshness: "Current",
    issues: 1,
    nextAction: "Legal should approve DPA excerpts before the next trust room update.",
  },
  {
    id: "conn-notion-ai",
    provider: "Notion",
    name: "AI Governance Wiki",
    ownerId: "owner-ai",
    status: "Review",
    lastSync: "2026-06-06T10:10:00.000Z",
    docs: 4,
    linkedEvidence: ["ai-standard", "pilot-terms-2025"],
    freshness: "Mixed",
    issues: 2,
    nextAction: "Block legacy pilot language and approve the current AI Usage Standard.",
  },
  {
    id: "conn-confluence-ops",
    provider: "Confluence",
    name: "Continuity Runbooks",
    ownerId: "owner-ops",
    status: "Stale",
    lastSync: "2026-05-24T09:15:00.000Z",
    docs: 2,
    linkedEvidence: ["bcp"],
    freshness: "Stale",
    issues: 1,
    nextAction: "Operations should upload recent recovery test proof for RTO and RPO claims.",
  },
];

const importSampleText = `Question,Portal,Due,Buyer Notes
"Do you encrypt audit logs and backups at rest?",OneTrust,2026-06-15,"Buyer wants SOC 2 citation"
"How are customers notified before subprocessor changes?",Aster Portal,2026-06-12,"Legal review requested"
"Do you use customer data to train AI models?",Aster Portal,2026-06-12,"Likely duplicate"
"What is the RTO and RPO for core services?",Excel,2026-06-13,"Operations owner"
"Describe your annual penetration testing process.",Excel,2026-06-13,"Needs pentest evidence"
"Can customers request deletion or export of personal data?",Zip,2026-06-14,"Privacy answer memory exists"`;

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
    pipelineOpen: false,
    trustRoomOpen: false,
    trustRoom: createInitialTrustRoom(),
    followUpOpen: false,
    followUps: createInitialFollowUps(),
    connectorOpen: false,
    connectors: createInitialConnectors(),
    importOpen: false,
    importStudio: createInitialImportStudio(),
    gapOpen: false,
    gapActions: {},
    analyticsOpen: false,
    portalOpen: false,
    portal: createInitialPortalState(),
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

function createInitialTrustRoom() {
  return {
    status: "Draft",
    buyer: "Aster Health security team",
    url: workspaceAccount.trustRoomUrl,
    expires: "2026-06-21",
    preparedAt: null,
    views: 1,
    copies: 1,
    receipts: trustRoomReceiptSeeds.map((event) => ({ ...event })),
  };
}

function createInitialFollowUps() {
  return followUpSeeds.map((item) => ({ ...item }));
}

function createInitialConnectors() {
  return connectorSeeds.map((item) => ({ ...item, linkedEvidence: [...item.linkedEvidence] }));
}

function createInitialImportStudio() {
  return {
    text: importSampleText,
    rows: [],
    importedIds: [],
    lastAnalyzedAt: null,
  };
}

function createInitialDataRoom() {
  return {
    notes: Object.fromEntries(evidenceDocs.map((doc) => [doc.id, createDataRoomNote(doc)])),
    checklist: closeChecklistSeeds.map((item) => ({ ...item })),
  };
}

function createInitialPortalState() {
  return {
    copied: {},
    packetPreparedAt: null,
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
      portal: normalizePortal(workspace.portal ?? fresh.portal),
      trustRoom: normalizeTrustRoom(workspace.trustRoom ?? fresh.trustRoom),
      followUps: Array.isArray(workspace.followUps) ? workspace.followUps.map(normalizeFollowUp) : fresh.followUps,
      connectors: Array.isArray(workspace.connectors) ? workspace.connectors.map(normalizeConnector) : fresh.connectors,
      importStudio: normalizeImportStudio(workspace.importStudio ?? fresh.importStudio),
      gapActions: normalizeGapActions(workspace.gapActions ?? fresh.gapActions),
      search: "",
      filter: "all",
      librarySearch: "",
      libraryOpen: false,
      intakeOpen: false,
      dataRoomOpen: false,
      accessOpen: false,
      workspaceOpen: false,
      pipelineOpen: false,
      trustRoomOpen: false,
      followUpOpen: false,
      connectorOpen: false,
      importOpen: false,
      gapOpen: false,
      analyticsOpen: false,
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

function normalizePortal(portal) {
  const copied = portal?.copied && typeof portal.copied === "object" ? portal.copied : {};
  return {
    copied,
    packetPreparedAt: portal?.packetPreparedAt ?? null,
  };
}

function normalizeTrustRoom(trustRoom) {
  const fresh = createInitialTrustRoom();
  const receipts = Array.isArray(trustRoom?.receipts) ? trustRoom.receipts.map(normalizeTrustRoomReceipt) : fresh.receipts;
  return {
    status: String(trustRoom?.status ?? fresh.status),
    buyer: String(trustRoom?.buyer ?? fresh.buyer),
    url: String(trustRoom?.url ?? fresh.url),
    expires: String(trustRoom?.expires ?? fresh.expires),
    preparedAt: trustRoom?.preparedAt ?? null,
    views: Number.isFinite(Number(trustRoom?.views)) ? Number(trustRoom.views) : fresh.views,
    copies: Number.isFinite(Number(trustRoom?.copies)) ? Number(trustRoom.copies) : fresh.copies,
    receipts,
  };
}

function normalizeTrustRoomReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `receipt-${Date.now()}`),
    actor: String(receipt?.actor ?? "Buyer"),
    action: String(receipt?.action ?? "Room activity"),
    detail: String(receipt?.detail ?? "Buyer trust room activity recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeFollowUp(item) {
  const fallback = followUpSeeds.find((seed) => seed.id === item?.id) ?? followUpSeeds[0];
  return {
    id: String(item?.id ?? `fu-${Date.now()}`),
    buyer: String(item?.buyer ?? fallback.buyer),
    room: String(item?.room ?? fallback.room),
    comment: String(item?.comment ?? fallback.comment),
    category: String(item?.category ?? fallback.category),
    ownerId: String(item?.ownerId ?? fallback.ownerId),
    questionId: item?.questionId ? String(item.questionId) : fallback.questionId,
    sourceId: item?.sourceId ? String(item.sourceId) : fallback.sourceId,
    status: String(item?.status ?? fallback.status),
    priority: String(item?.priority ?? fallback.priority),
    receivedAt: item?.receivedAt ?? fallback.receivedAt,
    due: String(item?.due ?? fallback.due),
    linkedTaskId: item?.linkedTaskId ? String(item.linkedTaskId) : null,
  };
}

function normalizeConnector(item) {
  const fallback = connectorSeeds.find((seed) => seed.id === item?.id) ?? connectorSeeds[0];
  return {
    id: String(item?.id ?? `conn-${Date.now()}`),
    provider: String(item?.provider ?? fallback.provider),
    name: String(item?.name ?? fallback.name),
    ownerId: String(item?.ownerId ?? fallback.ownerId),
    status: String(item?.status ?? fallback.status),
    lastSync: item?.lastSync ?? fallback.lastSync,
    docs: Number.isFinite(Number(item?.docs)) ? Number(item.docs) : fallback.docs,
    linkedEvidence: Array.isArray(item?.linkedEvidence) ? item.linkedEvidence.map(String) : [...fallback.linkedEvidence],
    freshness: String(item?.freshness ?? fallback.freshness),
    issues: Number.isFinite(Number(item?.issues)) ? Number(item.issues) : fallback.issues,
    nextAction: String(item?.nextAction ?? fallback.nextAction),
  };
}

function normalizeImportStudio(item) {
  const text = String(item?.text ?? importSampleText);
  const rows = Array.isArray(item?.rows) ? item.rows.map(normalizeImportRow) : [];
  return {
    text,
    rows,
    importedIds: Array.isArray(item?.importedIds) ? item.importedIds.map(String) : [],
    lastAnalyzedAt: item?.lastAnalyzedAt ?? null,
  };
}

function normalizeGapActions(actions) {
  if (!actions || typeof actions !== "object") return {};
  return Object.fromEntries(
    Object.entries(actions).map(([id, action]) => [
      String(id),
      {
        status: String(action?.status ?? "Open"),
        requestedAt: action?.requestedAt ?? null,
        routedAt: action?.routedAt ?? null,
        fallbackCopiedAt: action?.fallbackCopiedAt ?? null,
      },
    ]),
  );
}

function normalizeImportRow(row) {
  const text = String(row?.question ?? row?.text ?? "Imported buyer question");
  const category = String(row?.category ?? inferCategory(text.toLowerCase()));
  const owner = String(row?.owner ?? inferOwner(category));
  return {
    id: String(row?.id ?? `import-${Date.now()}`),
    question: text,
    portal: String(row?.portal ?? "Import"),
    due: String(row?.due ?? "2026-06-14"),
    notes: String(row?.notes ?? ""),
    category,
    owner,
    assigneeId: String(row?.assigneeId ?? ownerToMemberId(owner)),
    sources: Array.isArray(row?.sources) ? row.sources.map(String) : [],
    confidence: Number.isFinite(Number(row?.confidence)) ? Number(row.confidence) : 0,
    importConfidence: Number.isFinite(Number(row?.importConfidence)) ? Number(row.importConfidence) : 0,
    duplicateId: row?.duplicateId ? String(row.duplicateId) : "",
    duplicateScore: Number.isFinite(Number(row?.duplicateScore)) ? Number(row.duplicateScore) : 0,
    status: String(row?.status ?? "Ready"),
    issues: Array.isArray(row?.issues) ? row.issues.map(String) : [],
    mappedAt: row?.mappedAt ?? null,
    importedQuestionId: row?.importedQuestionId ? String(row.importedQuestionId) : "",
  };
}

const state = loadWorkspaceState();

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  reviewNavButton: document.querySelector("#reviewNavButton"),
  importNavButton: document.querySelector("#importNavButton"),
  gapNavButton: document.querySelector("#gapNavButton"),
  workspaceNavButton: document.querySelector("#workspaceNavButton"),
  pipelineNavButton: document.querySelector("#pipelineNavButton"),
  trustRoomNavButton: document.querySelector("#trustRoomNavButton"),
  followUpNavButton: document.querySelector("#followUpNavButton"),
  connectorNavButton: document.querySelector("#connectorNavButton"),
  analyticsNavButton: document.querySelector("#analyticsNavButton"),
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
  pipelineBackdrop: document.querySelector("#pipelineBackdrop"),
  pipelineDrawer: document.querySelector("#pipelineDrawer"),
  closePipelineButton: document.querySelector("#closePipelineButton"),
  pipelineValue: document.querySelector("#pipelineValue"),
  pipelineActive: document.querySelector("#pipelineActive"),
  pipelineSlaRisk: document.querySelector("#pipelineSlaRisk"),
  pipelineReuse: document.querySelector("#pipelineReuse"),
  pipelineAccountList: document.querySelector("#pipelineAccountList"),
  pipelineReuseGraph: document.querySelector("#pipelineReuseGraph"),
  pipelineSlaList: document.querySelector("#pipelineSlaList"),
  pipelineDigest: document.querySelector("#pipelineDigest"),
  copyPipelineDigestButton: document.querySelector("#copyPipelineDigestButton"),
  trustRoomBackdrop: document.querySelector("#trustRoomBackdrop"),
  trustRoomDrawer: document.querySelector("#trustRoomDrawer"),
  closeTrustRoomButton: document.querySelector("#closeTrustRoomButton"),
  trustRoomStatus: document.querySelector("#trustRoomStatus"),
  trustRoomScore: document.querySelector("#trustRoomScore"),
  trustRoomShared: document.querySelector("#trustRoomShared"),
  trustRoomReceipts: document.querySelector("#trustRoomReceipts"),
  trustRoomExpiry: document.querySelector("#trustRoomExpiry"),
  trustRoomLink: document.querySelector("#trustRoomLink"),
  trustRoomPolicyList: document.querySelector("#trustRoomPolicyList"),
  trustRoomAnswerList: document.querySelector("#trustRoomAnswerList"),
  trustRoomEvidenceList: document.querySelector("#trustRoomEvidenceList"),
  trustRoomReceiptList: document.querySelector("#trustRoomReceiptList"),
  trustRoomDigest: document.querySelector("#trustRoomDigest"),
  prepareTrustRoomButton: document.querySelector("#prepareTrustRoomButton"),
  copyTrustRoomLinkButton: document.querySelector("#copyTrustRoomLinkButton"),
  copyTrustRoomPacketButton: document.querySelector("#copyTrustRoomPacketButton"),
  recordTrustRoomViewButton: document.querySelector("#recordTrustRoomViewButton"),
  followUpBackdrop: document.querySelector("#followUpBackdrop"),
  followUpDrawer: document.querySelector("#followUpDrawer"),
  closeFollowUpButton: document.querySelector("#closeFollowUpButton"),
  followUpOpenCount: document.querySelector("#followUpOpenCount"),
  followUpRoutedCount: document.querySelector("#followUpRoutedCount"),
  followUpEvidenceCount: document.querySelector("#followUpEvidenceCount"),
  followUpSlaCount: document.querySelector("#followUpSlaCount"),
  followUpList: document.querySelector("#followUpList"),
  followUpOwnerList: document.querySelector("#followUpOwnerList"),
  followUpLoopList: document.querySelector("#followUpLoopList"),
  followUpDigest: document.querySelector("#followUpDigest"),
  copyFollowUpDigestButton: document.querySelector("#copyFollowUpDigestButton"),
  connectorBackdrop: document.querySelector("#connectorBackdrop"),
  connectorDrawer: document.querySelector("#connectorDrawer"),
  closeConnectorButton: document.querySelector("#closeConnectorButton"),
  connectorSourceCount: document.querySelector("#connectorSourceCount"),
  connectorApprovedCount: document.querySelector("#connectorApprovedCount"),
  connectorStaleCount: document.querySelector("#connectorStaleCount"),
  connectorVaultScore: document.querySelector("#connectorVaultScore"),
  connectorList: document.querySelector("#connectorList"),
  connectorFreshnessList: document.querySelector("#connectorFreshnessList"),
  connectorOwnerList: document.querySelector("#connectorOwnerList"),
  connectorDigest: document.querySelector("#connectorDigest"),
  copyConnectorDigestButton: document.querySelector("#copyConnectorDigestButton"),
  importBackdrop: document.querySelector("#importBackdrop"),
  importDrawer: document.querySelector("#importDrawer"),
  closeImportButton: document.querySelector("#closeImportButton"),
  importTextArea: document.querySelector("#importTextArea"),
  loadImportSampleButton: document.querySelector("#loadImportSampleButton"),
  analyzeImportButton: document.querySelector("#analyzeImportButton"),
  addReadyImportsButton: document.querySelector("#addReadyImportsButton"),
  importRowCount: document.querySelector("#importRowCount"),
  importReadyCount: document.querySelector("#importReadyCount"),
  importDuplicateCount: document.querySelector("#importDuplicateCount"),
  importConfidenceScore: document.querySelector("#importConfidenceScore"),
  importMappingList: document.querySelector("#importMappingList"),
  importRowList: document.querySelector("#importRowList"),
  importDuplicateList: document.querySelector("#importDuplicateList"),
  importOwnerList: document.querySelector("#importOwnerList"),
  importDigest: document.querySelector("#importDigest"),
  copyImportDigestButton: document.querySelector("#copyImportDigestButton"),
  gapBackdrop: document.querySelector("#gapBackdrop"),
  gapDrawer: document.querySelector("#gapDrawer"),
  closeGapButton: document.querySelector("#closeGapButton"),
  gapTaskCount: document.querySelector("#gapTaskCount"),
  gapHighRiskCount: document.querySelector("#gapHighRiskCount"),
  gapOwnerCount: document.querySelector("#gapOwnerCount"),
  gapFallbackCount: document.querySelector("#gapFallbackCount"),
  gapTaskList: document.querySelector("#gapTaskList"),
  gapRequestList: document.querySelector("#gapRequestList"),
  gapOwnerList: document.querySelector("#gapOwnerList"),
  gapFallbackList: document.querySelector("#gapFallbackList"),
  gapDigest: document.querySelector("#gapDigest"),
  copyGapDigestButton: document.querySelector("#copyGapDigestButton"),
  analyticsBackdrop: document.querySelector("#analyticsBackdrop"),
  analyticsDrawer: document.querySelector("#analyticsDrawer"),
  closeAnalyticsButton: document.querySelector("#closeAnalyticsButton"),
  analyticsDealRisk: document.querySelector("#analyticsDealRisk"),
  analyticsTimeSaved: document.querySelector("#analyticsTimeSaved"),
  analyticsEvidenceRoi: document.querySelector("#analyticsEvidenceRoi"),
  analyticsNextOwner: document.querySelector("#analyticsNextOwner"),
  analyticsBlockers: document.querySelector("#analyticsBlockers"),
  analyticsEvidenceRoiList: document.querySelector("#analyticsEvidenceRoiList"),
  analyticsTimeSavedList: document.querySelector("#analyticsTimeSavedList"),
  analyticsDigest: document.querySelector("#analyticsDigest"),
  copyAnalyticsDigestButton: document.querySelector("#copyAnalyticsDigestButton"),
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
  portalFieldCount: document.querySelector("#portalFieldCount"),
  portalReadyCount: document.querySelector("#portalReadyCount"),
  portalQuestion: document.querySelector("#portalQuestion"),
  portalSequenceStatus: document.querySelector("#portalSequenceStatus"),
  portalFieldList: document.querySelector("#portalFieldList"),
  portalAnswer: document.querySelector("#portalAnswer"),
  portalSourceCount: document.querySelector("#portalSourceCount"),
  portalCitations: document.querySelector("#portalCitations"),
  portalCheckStatus: document.querySelector("#portalCheckStatus"),
  portalRiskStatus: document.querySelector("#portalRiskStatus"),
  portalChecklist: document.querySelector("#portalChecklist"),
  copyPortalNextButton: document.querySelector("#copyPortalNextButton"),
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
  elements.importNavButton.addEventListener("click", openImportStudio);
  elements.gapNavButton.addEventListener("click", openGapAutopilot);
  elements.workspaceNavButton.addEventListener("click", openWorkspace);
  elements.pipelineNavButton.addEventListener("click", openPipeline);
  elements.trustRoomNavButton.addEventListener("click", openTrustRoom);
  elements.followUpNavButton.addEventListener("click", openFollowUp);
  elements.connectorNavButton.addEventListener("click", openConnectors);
  elements.analyticsNavButton.addEventListener("click", openAnalytics);
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
    renderPipeline();
    renderTrustRoom();
    renderFollowUps();
    renderConnectors();
    renderGapAutopilot();
    renderAnalytics();
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
  elements.closePipelineButton.addEventListener("click", closePipeline);
  elements.pipelineBackdrop.addEventListener("click", closePipeline);
  elements.copyPipelineDigestButton.addEventListener("click", copyPipelineDigest);
  elements.closeTrustRoomButton.addEventListener("click", closeTrustRoom);
  elements.trustRoomBackdrop.addEventListener("click", closeTrustRoom);
  elements.prepareTrustRoomButton.addEventListener("click", prepareTrustRoom);
  elements.copyTrustRoomLinkButton.addEventListener("click", copyTrustRoomLink);
  elements.copyTrustRoomPacketButton.addEventListener("click", copyTrustRoomPacket);
  elements.recordTrustRoomViewButton.addEventListener("click", recordTrustRoomView);
  elements.closeFollowUpButton.addEventListener("click", closeFollowUp);
  elements.followUpBackdrop.addEventListener("click", closeFollowUp);
  elements.copyFollowUpDigestButton.addEventListener("click", copyFollowUpDigest);
  elements.closeConnectorButton.addEventListener("click", closeConnectors);
  elements.connectorBackdrop.addEventListener("click", closeConnectors);
  elements.copyConnectorDigestButton.addEventListener("click", copyConnectorDigest);
  elements.closeImportButton.addEventListener("click", closeImportStudio);
  elements.importBackdrop.addEventListener("click", closeImportStudio);
  elements.loadImportSampleButton.addEventListener("click", loadImportSample);
  elements.analyzeImportButton.addEventListener("click", analyzeImportStudio);
  elements.addReadyImportsButton.addEventListener("click", addReadyImportRows);
  elements.copyImportDigestButton.addEventListener("click", copyImportDigest);
  elements.closeGapButton.addEventListener("click", closeGapAutopilot);
  elements.gapBackdrop.addEventListener("click", closeGapAutopilot);
  elements.copyGapDigestButton.addEventListener("click", copyGapDigest);
  elements.closeAnalyticsButton.addEventListener("click", closeAnalytics);
  elements.analyticsBackdrop.addEventListener("click", closeAnalytics);
  elements.copyAnalyticsDigestButton.addEventListener("click", copyAnalyticsDigest);
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
  elements.copyPortalNextButton.addEventListener("click", copyNextPortalField);
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
    if (state.pipelineOpen) closePipeline();
    if (state.trustRoomOpen) closeTrustRoom();
    if (state.followUpOpen) closeFollowUp();
    if (state.connectorOpen) closeConnectors();
    if (state.importOpen) closeImportStudio();
    if (state.gapOpen) closeGapAutopilot();
    if (state.analyticsOpen) closeAnalytics();
    if (state.portalOpen) closePortal();
  });

  window.addEventListener("hashchange", applyInitialHash);
}

function applyInitialHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "workspace") openWorkspace();
  if (hash === "pipeline" || hash === "buyers") openPipeline();
  if (hash === "trust-room" || hash === "room" || hash === "rooms") openTrustRoom();
  if (hash === "follow-up" || hash === "followups" || hash === "inbox") openFollowUp();
  if (hash === "connectors" || hash === "vault" || hash === "sources") openConnectors();
  if (hash === "import" || hash === "imports" || hash === "studio") openImportStudio();
  if (hash === "gaps" || hash === "gap" || hash === "autopilot") openGapAutopilot();
  if (hash === "analytics" || hash === "deal-desk") openAnalytics();
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
  renderPipeline();
  renderTrustRoom();
  renderFollowUps();
  renderConnectors();
  renderImportStudio();
  renderGapAutopilot();
  renderAnalytics();
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
      renderPipeline();
      renderTrustRoom();
      renderFollowUps();
      renderConnectors();
      renderGapAutopilot();
      renderAnalytics();
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
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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
    elements.importNavButton,
    elements.gapNavButton,
    elements.workspaceNavButton,
    elements.pipelineNavButton,
    elements.trustRoomNavButton,
    elements.followUpNavButton,
    elements.connectorNavButton,
    elements.analyticsNavButton,
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
  closeImportStudio(false);
  closeGapAutopilot(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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

function openPipeline() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.pipelineOpen = true;
  setActiveNav(elements.pipelineNavButton);
  elements.pipelineBackdrop.hidden = false;
  elements.pipelineDrawer.classList.add("is-open");
  elements.pipelineDrawer.setAttribute("aria-hidden", "false");
  renderPipeline();
  elements.copyPipelineDigestButton.focus();
}

function closePipeline(activateReview = true) {
  if (!state.pipelineOpen && elements.pipelineDrawer.getAttribute("aria-hidden") === "true") return;
  state.pipelineOpen = false;
  elements.pipelineDrawer.classList.remove("is-open");
  elements.pipelineDrawer.setAttribute("aria-hidden", "true");
  elements.pipelineBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openTrustRoom() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.trustRoomOpen = true;
  setActiveNav(elements.trustRoomNavButton);
  elements.trustRoomBackdrop.hidden = false;
  elements.trustRoomDrawer.classList.add("is-open");
  elements.trustRoomDrawer.setAttribute("aria-hidden", "false");
  renderTrustRoom();
  elements.copyTrustRoomLinkButton.focus();
}

function closeTrustRoom(activateReview = true) {
  if (!state.trustRoomOpen && elements.trustRoomDrawer.getAttribute("aria-hidden") === "true") return;
  state.trustRoomOpen = false;
  elements.trustRoomDrawer.classList.remove("is-open");
  elements.trustRoomDrawer.setAttribute("aria-hidden", "true");
  elements.trustRoomBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openFollowUp() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.followUpOpen = true;
  setActiveNav(elements.followUpNavButton);
  elements.followUpBackdrop.hidden = false;
  elements.followUpDrawer.classList.add("is-open");
  elements.followUpDrawer.setAttribute("aria-hidden", "false");
  renderFollowUps();
  elements.copyFollowUpDigestButton.focus();
}

function closeFollowUp(activateReview = true) {
  if (!state.followUpOpen && elements.followUpDrawer.getAttribute("aria-hidden") === "true") return;
  state.followUpOpen = false;
  elements.followUpDrawer.classList.remove("is-open");
  elements.followUpDrawer.setAttribute("aria-hidden", "true");
  elements.followUpBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openConnectors() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeAnalytics(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.connectorOpen = true;
  setActiveNav(elements.connectorNavButton);
  elements.connectorBackdrop.hidden = false;
  elements.connectorDrawer.classList.add("is-open");
  elements.connectorDrawer.setAttribute("aria-hidden", "false");
  renderConnectors();
  elements.copyConnectorDigestButton.focus();
}

function closeConnectors(activateReview = true) {
  if (!state.connectorOpen && elements.connectorDrawer.getAttribute("aria-hidden") === "true") return;
  state.connectorOpen = false;
  elements.connectorDrawer.classList.remove("is-open");
  elements.connectorDrawer.setAttribute("aria-hidden", "true");
  elements.connectorBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openImportStudio() {
  closeWorkspace(false);
  closeGapAutopilot(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.importOpen = true;
  setActiveNav(elements.importNavButton);
  elements.importBackdrop.hidden = false;
  elements.importDrawer.classList.add("is-open");
  elements.importDrawer.setAttribute("aria-hidden", "false");
  renderImportStudio();
  elements.importTextArea.focus();
}

function closeImportStudio(activateReview = true) {
  if (!state.importOpen && elements.importDrawer.getAttribute("aria-hidden") === "true") return;
  state.importOpen = false;
  elements.importDrawer.classList.remove("is-open");
  elements.importDrawer.setAttribute("aria-hidden", "true");
  elements.importBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openGapAutopilot() {
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeImportStudio(false);
  closeAnalytics(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.gapOpen = true;
  setActiveNav(elements.gapNavButton);
  elements.gapBackdrop.hidden = false;
  elements.gapDrawer.classList.add("is-open");
  elements.gapDrawer.setAttribute("aria-hidden", "false");
  renderGapAutopilot();
  elements.copyGapDigestButton.focus();
}

function closeGapAutopilot(activateReview = true) {
  if (!state.gapOpen && elements.gapDrawer.getAttribute("aria-hidden") === "true") return;
  state.gapOpen = false;
  elements.gapDrawer.classList.remove("is-open");
  elements.gapDrawer.setAttribute("aria-hidden", "true");
  elements.gapBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openAnalytics() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAccess(false);
  closeIntake(false);
  closeDataRoom(false);
  closeLibrary(false);
  closePortal(false);
  state.analyticsOpen = true;
  setActiveNav(elements.analyticsNavButton);
  elements.analyticsBackdrop.hidden = false;
  elements.analyticsDrawer.classList.add("is-open");
  elements.analyticsDrawer.setAttribute("aria-hidden", "false");
  renderAnalytics();
  elements.copyAnalyticsDigestButton.focus();
}

function closeAnalytics(activateReview = true) {
  if (!state.analyticsOpen && elements.analyticsDrawer.getAttribute("aria-hidden") === "true") return;
  state.analyticsOpen = false;
  elements.analyticsDrawer.classList.remove("is-open");
  elements.analyticsDrawer.setAttribute("aria-hidden", "true");
  elements.analyticsBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openAccess() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
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

function renderPipeline() {
  const pipeline = pipelineSnapshot();

  elements.pipelineValue.textContent = formatMoney(pipeline.totalValue);
  elements.pipelineActive.textContent = pipeline.accounts.length;
  elements.pipelineSlaRisk.textContent = pipeline.slaRiskCount;
  elements.pipelineReuse.textContent = `${pipeline.reuseRate}%`;
  elements.pipelineDigest.textContent = pipelineDigestText(pipeline);

  elements.pipelineAccountList.innerHTML = "";
  pipeline.accounts.forEach((account) => {
    const card = document.createElement("article");
    card.className = `pipeline-account-card${account.slaRisk ? " is-risk" : ""}${account.active ? " is-active-account" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(account.stage)}</span>
          <strong>${escapeHtml(account.company)}</strong>
        </div>
        <b>${formatMoney(account.value)}</b>
      </header>
      <div class="pipeline-progress" aria-label="${escapeHtml(account.company)} readiness">
        <span style="width: ${Math.max(0, Math.min(100, account.readiness))}%"></span>
      </div>
      <div class="pipeline-account-meta">
        <span>${account.readiness}% ready</span>
        <span>${account.approved}/${account.questions} approved</span>
        <span>${account.blockers} blockers</span>
        <span>${account.daysLeft}d left</span>
      </div>
      <p>${escapeHtml(account.nextAction)}</p>
      <footer>
        <span class="route-status ${account.slaRisk ? "is-needed" : "is-assigned"}">${escapeHtml(account.slaRisk ? "SLA risk" : account.status)}</span>
        <span>${escapeHtml(account.owner)} | ${escapeHtml(account.portal)}</span>
        <button class="secondary-button compact-button" type="button" data-pipeline-brief="${escapeHtml(account.id)}">
          <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
          <span>Brief</span>
        </button>
        ${
          account.active
            ? `<button class="primary-button compact-button" type="button" data-pipeline-open="${escapeHtml(account.id)}">
                <svg aria-hidden="true"><use href="#icon-shield"></use></svg>
                <span>Open</span>
              </button>`
            : ""
        }
      </footer>
    `;
    card.querySelector("[data-pipeline-brief]")?.addEventListener("click", () => copyText(pipelineAccountBrief(account), "Buyer pipeline brief copied."));
    card.querySelector("[data-pipeline-open]")?.addEventListener("click", () => {
      closePipeline(false);
      activateWorkspaceNav("review");
      showToast("Active buyer review opened.");
    });
    elements.pipelineAccountList.append(card);
  });

  elements.pipelineReuseGraph.innerHTML = "";
  pipeline.reuseGraph.slice(0, 6).forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "pipeline-reuse-card";
    card.innerHTML = `
      <span class="field-index">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <header>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${item.accounts} buyers</span>
        </header>
        <p>${formatMoney(item.value)} in influenced pipeline | ${escapeHtml(item.owner)}</p>
      </div>
    `;
    elements.pipelineReuseGraph.append(card);
  });

  elements.pipelineSlaList.innerHTML = "";
  pipeline.slaRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = `pipeline-sla-row${row.slaRisk ? " is-risk" : ""}`;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(row.company)}</strong>
        <span>${escapeHtml(row.owner)} | ${row.daysLeft}d left | ${row.readiness}% ready</span>
      </div>
      <b>${escapeHtml(row.slaRisk ? "Escalate" : "On track")}</b>
    `;
    elements.pipelineSlaList.append(item);
  });
}

function pipelineSnapshot() {
  const deal = dealAnalyticsSnapshot();
  const handoff = handoffReadinessSnapshot();
  const activeReuse = deal.evidenceRoi.slice(0, 3).map((item) => item.doc.id);
  const currentAccount = {
    id: "aster-health",
    company: workspaceAccount.company,
    buyer: "Healthcare vendor review",
    stage: "Security questionnaire",
    value: 48000,
    due: "2026-06-14",
    owner: deal.nextOwner.name,
    status: deal.riskLabel === "High" ? "At risk" : deal.riskLabel === "Medium" ? "Active risk" : "On track",
    readiness: handoff.ready,
    questions: state.questions.length,
    approved: deal.approved,
    blockers: deal.needsEvidence + deal.portalBlocked + deal.conflictClaims,
    reuse: activeReuse.length > 0 ? activeReuse : ["soc2", "security-policy", "ai-standard"],
    nextAction: deal.nextAction,
    portal: "Aster Portal",
    active: true,
  };
  const accounts = [currentAccount, ...buyerPipelineSeeds].map((account) => normalizePipelineAccount(account));
  const totalValue = accounts.reduce((sum, account) => sum + account.value, 0);
  const slaRiskCount = accounts.filter((account) => account.slaRisk).length;
  const reusedSlots = accounts.reduce((sum, account) => sum + account.reuse.filter((id) => getEvidenceById(id)).length, 0);
  const reuseRate = Math.round((reusedSlots / Math.max(1, accounts.length * 3)) * 100);
  const reuseGraph = pipelineReuseGraph(accounts);
  const slaRows = [...accounts].sort((a, b) => {
    if (a.slaRisk !== b.slaRisk) return a.slaRisk ? -1 : 1;
    return a.daysLeft - b.daysLeft;
  });

  return {
    accounts,
    totalValue,
    blockedValue: accounts.filter((account) => account.slaRisk).reduce((sum, account) => sum + account.value, 0),
    slaRiskCount,
    reuseRate,
    reuseGraph,
    slaRows,
    topAccount: slaRows[0],
  };
}

function normalizePipelineAccount(account) {
  const daysLeft = daysUntil(account.due);
  const slaRisk = account.readiness < 70 || account.blockers >= 4 || daysLeft <= 3;
  return {
    ...account,
    value: Number(account.value) || 0,
    readiness: Math.max(0, Math.min(100, Math.round(Number(account.readiness) || 0))),
    questions: Number(account.questions) || 0,
    approved: Number(account.approved) || 0,
    blockers: Number(account.blockers) || 0,
    reuse: Array.isArray(account.reuse) ? account.reuse : [],
    daysLeft,
    slaRisk,
  };
}

function pipelineReuseGraph(accounts) {
  return state.evidence
    .map((doc) => {
      const linked = accounts.filter((account) => account.reuse.includes(doc.id));
      return {
        id: doc.id,
        title: doc.title,
        owner: doc.owner,
        accounts: linked.length,
        value: linked.reduce((sum, account) => sum + account.value, 0),
      };
    })
    .filter((item) => item.accounts > 0)
    .sort((a, b) => b.accounts - a.accounts || b.value - a.value || a.title.localeCompare(b.title));
}

function pipelineDigestText(pipeline = pipelineSnapshot()) {
  const riskLines = pipeline.slaRows
    .slice(0, 4)
    .map((account, index) => `${index + 1}. ${account.company}: ${account.readiness}% ready, ${account.daysLeft}d left, ${account.blockers} blockers, owner ${account.owner}`)
    .join("\n");
  const reuseLines = pipeline.reuseGraph
    .slice(0, 4)
    .map((item, index) => `${index + 1}. ${item.title}: ${item.accounts} buyers, ${formatMoney(item.value)} influenced`)
    .join("\n");

  return [
    "AnswerSeal Multi-Buyer Pipeline",
    `Build: ${BUILD_VERSION}`,
    `Active reviews: ${pipeline.accounts.length}`,
    `Pipeline protected: ${formatMoney(pipeline.totalValue)}`,
    `SLA risk: ${pipeline.slaRiskCount} reviews | ${formatMoney(pipeline.blockedValue)} exposed`,
    `Proof reuse rate: ${pipeline.reuseRate}%`,
    "",
    "SLA priority:",
    riskLines || "No SLA risk.",
    "",
    "Proof reuse graph:",
    reuseLines || "No reusable proof yet.",
    "",
    "Recommended motion:",
    "- Work the nearest SLA risk first.",
    "- Reuse the highest-impact proof bundle before drafting new answers.",
    "- Escalate any buyer review below 70% readiness inside the daily sales/security handoff.",
  ].join("\n");
}

function pipelineAccountBrief(account) {
  const sources = account.reuse.map((id) => getEvidenceById(id)?.title).filter(Boolean).join("; ") || "No mapped proof yet";
  return [
    `${account.company} - AnswerSeal Buyer Pipeline Brief`,
    `Build: ${BUILD_VERSION}`,
    `Stage: ${account.stage}`,
    `Pipeline value: ${formatMoney(account.value)}`,
    `Due: ${formatShortDate(account.due)} (${account.daysLeft} days left)`,
    `Readiness: ${account.readiness}%`,
    `Approved answers: ${account.approved}/${account.questions}`,
    `Blockers: ${account.blockers}`,
    `Owner: ${account.owner}`,
    `Portal: ${account.portal}`,
    `Reusable proof: ${sources}`,
    `Next action: ${account.nextAction}`,
  ].join("\n");
}

function copyPipelineDigest() {
  copyText(pipelineDigestText(), "Pipeline digest copied.");
}

function renderTrustRoom() {
  const room = trustRoomSnapshot();

  elements.trustRoomStatus.textContent = room.status;
  elements.trustRoomScore.textContent = `${room.score}%`;
  elements.trustRoomShared.textContent = `${room.sharedCount}/${room.answers.length}`;
  elements.trustRoomReceipts.textContent = `${room.views} views`;
  elements.trustRoomExpiry.textContent = room.expiryLabel;
  elements.trustRoomLink.textContent = room.url;
  elements.trustRoomDigest.textContent = trustRoomDigestText(room);

  elements.trustRoomPolicyList.innerHTML = "";
  room.policies.forEach((policy) => {
    const card = document.createElement("article");
    card.className = "trust-policy-card";
    card.innerHTML = `
      <span class="label">${escapeHtml(policy.label)}</span>
      <strong>${escapeHtml(policy.value)}</strong>
      <p>${escapeHtml(policy.detail)}</p>
    `;
    elements.trustRoomPolicyList.append(card);
  });

  elements.trustRoomAnswerList.innerHTML = "";
  if (room.answers.length === 0) {
    elements.trustRoomAnswerList.append(emptyState("No source-safe answers yet"));
  } else {
    room.answers.forEach((item) => {
      const card = document.createElement("article");
      card.className = `trust-answer-card${item.shared ? " is-shared" : " is-gated"}`;
      card.innerHTML = `
        <header>
          <div>
            <span class="label">${escapeHtml(item.question.category)}</span>
            <strong>${escapeHtml(item.question.text)}</strong>
          </div>
          <span class="route-status ${item.shared ? "is-assigned" : "is-needed"}">${escapeHtml(item.gate)}</span>
        </header>
        <p>${escapeHtml(shorten(item.question.answer, 260))}</p>
        <footer>
          <span>${item.docs.length} source${item.docs.length === 1 ? "" : "s"} | ${item.question.confidence}% confidence</span>
          <button class="secondary-button compact-button" type="button" data-trust-answer="${escapeHtml(item.question.id)}">
            <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
            <span>Answer</span>
          </button>
        </footer>
      `;
      card.querySelector("[data-trust-answer]")?.addEventListener("click", () => copyText(trustRoomAnswerText(item), "Buyer-safe answer copied."));
      elements.trustRoomAnswerList.append(card);
    });
  }

  elements.trustRoomEvidenceList.innerHTML = "";
  if (room.evidencePackets.length === 0) {
    elements.trustRoomEvidenceList.append(emptyState("No source-safe excerpts yet"));
  } else {
    room.evidencePackets.forEach((packet) => {
      const card = document.createElement("article");
      card.className = "trust-evidence-card";
      card.innerHTML = `
        <header>
          <div>
            <span class="label">${escapeHtml(packet.doc.type)} | ${escapeHtml(packet.visibility)}</span>
            <strong>${escapeHtml(packet.doc.title)}</strong>
          </div>
          <span class="freshness ${freshnessClass(packet.doc.updated)}">${escapeHtml(freshnessLabel(packet.doc.updated))}</span>
        </header>
        <p>${escapeHtml(packet.excerpt)}</p>
        <footer>
          <span>${packet.uses} answer${packet.uses === 1 ? "" : "s"} | ${escapeHtml(packet.doc.owner)}</span>
          <button class="secondary-button compact-button" type="button" data-trust-evidence="${escapeHtml(packet.doc.id)}">
            <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
            <span>Excerpt</span>
          </button>
        </footer>
      `;
      card.querySelector("[data-trust-evidence]")?.addEventListener("click", () => copyText(trustRoomEvidenceText(packet), "Source-safe excerpt copied."));
      elements.trustRoomEvidenceList.append(card);
    });
  }

  elements.trustRoomReceiptList.innerHTML = "";
  room.receipts.slice(0, 7).forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "trust-receipt-row";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(receipt.action)}</strong>
        <span>${escapeHtml(receipt.actor)} | ${escapeHtml(formatAccessDate(receipt.at))}</span>
      </div>
      <p>${escapeHtml(receipt.detail)}</p>
    `;
    elements.trustRoomReceiptList.append(item);
  });
}

function trustRoomSnapshot() {
  const handoff = handoffReadinessSnapshot();
  const candidates = state.questions
    .map(trustRoomAnswerCandidate)
    .filter((item) => item.sourceSafe)
    .sort((a, b) => Number(b.shared) - Number(a.shared) || b.question.confidence - a.question.confidence || a.question.text.localeCompare(b.question.text));
  const shared = candidates.filter((item) => item.shared);
  const queued = candidates.filter((item) => !item.shared);
  const answers = [...shared, ...queued].slice(0, 6);
  const evidencePackets = trustRoomEvidencePackets(answers);
  const blockedCount = state.questions.length - candidates.length;
  const daysLeft = daysUntil(state.trustRoom.expires);
  const coverageBoost = Math.min(15, evidencePackets.length * 3);
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(handoff.ready * 0.45 + (candidates.length / Math.max(1, state.questions.length)) * 25 + coverageBoost + (state.trustRoom.status === "Live" ? 15 : 6)),
    ),
  );
  const status = state.trustRoom.status === "Live" ? "Live" : shared.length > 0 ? "Ready" : "Draft";
  const receipts = [...state.trustRoom.receipts].sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());

  return {
    status,
    score,
    buyer: state.trustRoom.buyer,
    url: state.trustRoom.url,
    expires: state.trustRoom.expires,
    expiryLabel: daysLeft <= 0 ? "Expired" : `${daysLeft}d`,
    views: state.trustRoom.views,
    copies: state.trustRoom.copies,
    answers,
    sharedCount: shared.length,
    approvalReadyCount: queued.length,
    blockedCount,
    evidencePackets,
    receipts,
    policies: trustRoomPolicies(status, daysLeft, evidencePackets.length),
  };
}

function trustRoomAnswerCandidate(question) {
  const docs = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  const trace = claimTraceSnapshot(question);
  const sourceSafe = docs.length > 0 && Number(question.confidence) >= 70 && trace.conflicts === 0;
  const shared = question.status === "approved" && sourceSafe;
  return {
    question,
    docs,
    trace,
    sourceSafe,
    shared,
    gate: shared ? "Shared" : sourceSafe ? "Approval gate" : "Blocked",
  };
}

function trustRoomEvidencePackets(answers) {
  const packets = new Map();
  answers.forEach((item) => {
    item.docs.forEach((doc) => {
      const existing = packets.get(doc.id) ?? {
        doc,
        uses: 0,
        questions: [],
        excerpt: sourceSafeExcerpt(doc, item.question.text),
        visibility: doc.id === "pilot-terms-2025" ? "Blocked legacy" : "Source-safe",
      };
      existing.uses += 1;
      existing.questions.push(item.question.text);
      packets.set(doc.id, existing);
    });
  });

  return [...packets.values()].sort((a, b) => b.uses - a.uses || a.doc.title.localeCompare(b.doc.title));
}

function trustRoomPolicies(status, daysLeft, evidenceCount) {
  return [
    {
      label: "Scope",
      value: "Approved answers only",
      detail: "Draft, weak, stale, or conflicting claims stay hidden from the buyer packet.",
    },
    {
      label: "Access",
      value: status === "Live" ? "Scoped link active" : "Draft link",
      detail: "Room access is represented as a buyer-specific URL with watermark and receipt trail.",
    },
    {
      label: "Expiry",
      value: daysLeft <= 0 ? "Expired" : `${daysLeft} days left`,
      detail: "The buyer room is time boxed so old proof does not drift into future reviews.",
    },
    {
      label: "Evidence",
      value: `${evidenceCount} source-safe excerpts`,
      detail: "Buyers see excerpts and citation titles, not raw internal notes or legacy files.",
    },
  ];
}

function sourceSafeExcerpt(doc, questionText) {
  if (doc.id === "pilot-terms-2025") {
    return "Legacy pilot language is blocked from buyer-facing trust rooms.";
  }
  const excerpt = bestExcerptForQuestion(doc, questionText);
  return excerpt.replace(/customer data/gi, "customer data").replace(/foundation models/gi, "foundation models");
}

function trustRoomDigestText(room = trustRoomSnapshot()) {
  const answerLines = room.answers
    .slice(0, 5)
    .map((item, index) => `${index + 1}. ${item.question.category}: ${item.gate} | ${item.docs.length} sources | ${item.question.confidence}% confidence`)
    .join("\n");
  const evidenceLines = room.evidencePackets
    .slice(0, 5)
    .map((packet, index) => `${index + 1}. ${packet.doc.title}: ${packet.uses} linked answers | ${packet.visibility}`)
    .join("\n");

  return [
    "AnswerSeal Buyer Trust Room",
    `Build: ${BUILD_VERSION}`,
    `Buyer: ${room.buyer}`,
    `Status: ${room.status}`,
    `Room score: ${room.score}%`,
    `Scoped link: ${room.url}`,
    `Expires: ${formatShortDate(room.expires)} (${room.expiryLabel})`,
    `Shared answers: ${room.sharedCount}`,
    `Approval-ready answers: ${room.approvalReadyCount}`,
    `Blocked claims: ${room.blockedCount}`,
    `Buyer activity: ${room.views} views, ${room.copies} copies, ${room.receipts.length} receipts`,
    "",
    "Answer packet:",
    answerLines || "No source-safe answers yet.",
    "",
    "Source-safe evidence:",
    evidenceLines || "No buyer-safe evidence excerpts yet.",
    "",
    "Access policy:",
    "- Share approved answers only.",
    "- Show citations and safe excerpts, not internal source files.",
    "- Track buyer opens, copies, and packet handoff receipts.",
  ].join("\n");
}

function trustRoomAnswerText(item) {
  const sources = item.docs.map((doc) => `${doc.title} (${formatShortDate(doc.updated)})`).join("; ");
  return [
    `${workspaceAccount.company} - Buyer-safe answer`,
    `Build: ${BUILD_VERSION}`,
    `Gate: ${item.gate}`,
    `Question: ${item.question.text}`,
    `Answer: ${item.question.answer}`,
    `Sources: ${sources}`,
  ].join("\n");
}

function trustRoomEvidenceText(packet) {
  return [
    `${packet.doc.title} - Source-safe excerpt`,
    `Type: ${packet.doc.type}`,
    `Owner: ${packet.doc.owner}`,
    `Updated: ${formatShortDate(packet.doc.updated)}`,
    `Visibility: ${packet.visibility}`,
    `Excerpt: ${packet.excerpt}`,
  ].join("\n");
}

function prepareTrustRoom() {
  state.trustRoom.status = "Live";
  state.trustRoom.preparedAt = new Date().toISOString();
  addTrustRoomReceipt("Room published", workspaceAccount.currentRole, "Scoped buyer trust room prepared with source-safe answer packet.");
  addAudit("Trust room prepared", "Buyer-facing room prepared with scoped link, source-safe excerpts, and receipt trail.");
  renderTrustRoom();
  renderWorkspace();
  showToast("Buyer Trust Room prepared.");
}

function copyTrustRoomLink() {
  const room = trustRoomSnapshot();
  state.trustRoom.copies += 1;
  addTrustRoomReceipt("Link copied", workspaceAccount.currentRole, "Scoped trust room link copied for buyer handoff.");
  renderTrustRoom();
  copyText(room.url, "Trust Room link copied.");
}

function copyTrustRoomPacket() {
  const room = trustRoomSnapshot();
  state.trustRoom.copies += 1;
  addTrustRoomReceipt("Packet copied", workspaceAccount.currentRole, "Buyer-safe packet copied with answers, citations, and access policy.");
  renderTrustRoom();
  copyText(trustRoomPacketText(room), "Buyer Trust Room packet copied.");
}

function recordTrustRoomView() {
  state.trustRoom.views += 1;
  addTrustRoomReceipt("Buyer viewed", state.trustRoom.buyer, "Buyer opened the scoped room and viewed source-safe excerpts.");
  renderTrustRoom();
  showToast("Buyer view recorded.");
}

function addTrustRoomReceipt(action, actor, detail) {
  state.trustRoom.receipts.unshift({
    id: `receipt-${Date.now()}`,
    actor,
    action,
    detail,
    at: new Date().toISOString(),
  });
  schedulePersist();
}

function trustRoomPacketText(room = trustRoomSnapshot()) {
  const answers = room.answers
    .map((item, index) => {
      const sources = item.docs.map((doc) => `${doc.title} (${formatShortDate(doc.updated)})`).join("; ");
      return [`${index + 1}. ${item.question.text}`, `Gate: ${item.gate}`, `Answer: ${item.question.answer}`, `Sources: ${sources}`].join("\n");
    })
    .join("\n\n");
  const evidence = room.evidencePackets
    .map((packet, index) => `${index + 1}. ${packet.doc.title}: ${packet.excerpt}`)
    .join("\n");

  return [
    "AnswerSeal Buyer Trust Room Packet",
    `Build: ${BUILD_VERSION}`,
    `Buyer: ${room.buyer}`,
    `Scoped link: ${room.url}`,
    `Expires: ${formatShortDate(room.expires)}`,
    "",
    "Answers:",
    answers || "No source-safe answers yet.",
    "",
    "Source-safe evidence excerpts:",
    evidence || "No source-safe evidence excerpts yet.",
    "",
    "Policy: Only approved answers should be shared externally. Approval-gated answers remain internal until reviewer approval.",
  ].join("\n");
}

function renderFollowUps() {
  const inbox = followUpSnapshot();

  elements.followUpOpenCount.textContent = inbox.openCount;
  elements.followUpRoutedCount.textContent = inbox.routedCount;
  elements.followUpEvidenceCount.textContent = inbox.evidenceCount;
  elements.followUpSlaCount.textContent = inbox.slaCount;
  elements.followUpDigest.textContent = followUpDigestText(inbox);

  elements.followUpList.innerHTML = "";
  inbox.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `follow-up-card ${followUpStatusClass(item.status)}${item.slaRisk ? " is-sla-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(item.category)} | ${escapeHtml(item.priority)}</span>
          <strong>${escapeHtml(item.comment)}</strong>
        </div>
        <span class="route-status ${item.statusClass}">${escapeHtml(item.status)}</span>
      </header>
      <p>${escapeHtml(item.context)}</p>
      <div class="follow-up-meta">
        <span>${escapeHtml(item.owner.name)}</span>
        <span>${escapeHtml(item.sourceTitle)}</span>
        <span>${item.daysLeft}d left</span>
        <span>${escapeHtml(item.linkedTaskId ? "Task linked" : "No task")}</span>
      </div>
      <footer>
        <button class="secondary-button compact-button" type="button" data-follow-brief="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
          <span>Brief</span>
        </button>
        <button class="secondary-button compact-button" type="button" data-follow-route="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-users"></use></svg>
          <span>Route</span>
        </button>
        <button class="primary-button compact-button" type="button" data-follow-task="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-file"></use></svg>
          <span>Task</span>
        </button>
        <button class="secondary-button compact-button" type="button" data-follow-resolve="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-check"></use></svg>
          <span>Resolve</span>
        </button>
      </footer>
    `;
    card.querySelector("[data-follow-brief]")?.addEventListener("click", () => copyFollowUpBrief(item.id));
    card.querySelector("[data-follow-route]")?.addEventListener("click", () => routeFollowUp(item.id));
    card.querySelector("[data-follow-task]")?.addEventListener("click", () => createFollowUpTask(item.id));
    card.querySelector("[data-follow-resolve]")?.addEventListener("click", () => resolveFollowUp(item.id));
    elements.followUpList.append(card);
  });

  elements.followUpOwnerList.innerHTML = "";
  inbox.ownerRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = "follow-up-owner-card";
    item.innerHTML = `
      <span class="role-avatar">${escapeHtml(initials(row.member.name))}</span>
      <div>
        <header>
          <strong>${escapeHtml(row.member.name)}</strong>
          <b>${row.open} open</b>
        </header>
        <p>${escapeHtml(row.member.team)} | ${row.routed} routed | ${row.evidence} evidence gaps</p>
      </div>
    `;
    elements.followUpOwnerList.append(item);
  });

  elements.followUpLoopList.innerHTML = "";
  inbox.loopRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = "follow-up-loop-row";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.detail)}</span>
      </div>
      <b>${escapeHtml(row.value)}</b>
    `;
    elements.followUpLoopList.append(item);
  });
}

function followUpSnapshot() {
  const items = state.followUps
    .map(enrichFollowUp)
    .sort((a, b) => {
      if (a.status === "Answered" && b.status !== "Answered") return 1;
      if (b.status === "Answered" && a.status !== "Answered") return -1;
      if (a.slaRisk !== b.slaRisk) return a.slaRisk ? -1 : 1;
      return new Date(a.due).getTime() - new Date(b.due).getTime();
    });
  const open = items.filter((item) => item.status !== "Answered");
  const ownerRows = workspaceAccount.members
    .map((member) => {
      const owned = items.filter((item) => item.owner.id === member.id);
      return {
        member,
        open: owned.filter((item) => item.status !== "Answered").length,
        routed: owned.filter((item) => item.status === "Routed").length,
        evidence: owned.filter((item) => item.status === "Needs evidence").length,
      };
    })
    .filter((row) => row.open > 0 || row.routed > 0 || row.evidence > 0);
  const loopRows = [
    {
      label: "Room comments",
      value: `${items.length}`,
      detail: "Buyer follow-ups captured from scoped trust room activity.",
    },
    {
      label: "Owner routing",
      value: `${items.filter((item) => item.status === "Routed").length}/${open.length}`,
      detail: "Open comments with a named internal owner.",
    },
    {
      label: "Evidence gaps",
      value: `${items.filter((item) => item.status === "Needs evidence").length}`,
      detail: "Follow-ups that require stronger proof before buyer response.",
    },
    {
      label: "Room loop",
      value: `${items.filter((item) => item.linkedTaskId).length}`,
      detail: "Comments converted into review tasks for updated proof.",
    },
  ];

  return {
    items,
    openCount: open.length,
    routedCount: items.filter((item) => item.status === "Routed").length,
    evidenceCount: items.filter((item) => item.status === "Needs evidence").length,
    slaCount: open.filter((item) => item.slaRisk).length,
    ownerRows,
    loopRows,
  };
}

function enrichFollowUp(item) {
  const owner = workspaceAccount.members.find((member) => member.id === item.ownerId) ?? workspaceAccount.members[0];
  const question = state.questions.find((entry) => entry.id === item.questionId);
  const source = getEvidenceById(item.sourceId);
  const daysLeft = daysUntil(item.due);
  const needsEvidence = item.status === "Needs evidence" || !source;
  return {
    ...item,
    owner,
    question,
    source,
    sourceTitle: source?.title ?? "No source mapped",
    context: question
      ? `Linked to "${shorten(question.text, 86)}" from ${item.room}.`
      : `Captured from ${item.room}; no internal answer is linked yet.`,
    daysLeft,
    slaRisk: item.status !== "Answered" && (daysLeft <= 2 || needsEvidence),
    statusClass: item.status === "Needs evidence" ? "is-needed" : item.status === "Answered" ? "is-assigned" : "is-review",
  };
}

function followUpStatusClass(status) {
  if (status === "Answered") return "is-answered";
  if (status === "Needs evidence") return "is-evidence";
  if (status === "Routed") return "is-routed";
  return "is-new";
}

function routeFollowUp(id) {
  const item = state.followUps.find((entry) => entry.id === id);
  if (!item) return;
  if (item.status !== "Answered") item.status = item.sourceId ? "Routed" : "Needs evidence";
  const owner = workspaceAccount.members.find((member) => member.id === item.ownerId) ?? workspaceAccount.members[0];
  addTrustRoomReceipt("Follow-up routed", owner.name, `${shorten(item.comment, 86)} routed from Buyer Follow-Up Inbox.`);
  addAudit("Follow-up routed", `${shorten(item.comment, 72)} routed to ${owner.name}.`);
  renderFollowUps();
  renderTrustRoom();
  showToast(`Follow-up routed to ${owner.name}.`);
}

function createFollowUpTask(id) {
  const item = state.followUps.find((entry) => entry.id === id);
  if (!item) return;

  const existing = item.linkedTaskId ? state.questions.find((question) => question.id === item.linkedTaskId) : null;
  if (existing) {
    state.activeQuestionId = existing.id;
    state.activeDocId = existing.sources?.[0] ?? state.evidence[0]?.id;
    closeFollowUp(false);
    activateWorkspaceNav("review");
    render();
    showToast("Linked follow-up task opened.");
    return;
  }

  const owner = workspaceAccount.members.find((member) => member.id === item.ownerId) ?? workspaceAccount.members[0];
  const sourceIds = [item.sourceId].filter((sourceId) => getEvidenceById(sourceId));
  const draft = draftFromText(item.comment);
  const sources = sourceIds.length > 0 ? sourceIds : draft.sources;
  const taskId = `q-follow-${Date.now()}-${state.questions.length}`;
  const task = {
    id: taskId,
    text: `Buyer follow-up: ${item.comment}`,
    category: item.category,
    owner: owner.team,
    due: item.due,
    portal: "Trust Room",
    priority: item.priority,
    answer: composeGenericAnswer(item.comment, sources, item.category),
    sources,
    confidence: calculateConfidence(item.comment.toLowerCase(), sources),
    status: sources.length > 0 ? "draft" : "needs-evidence",
    risks: sources.length > 0 ? [] : ["Buyer follow-up needs a stronger evidence source before room update."],
    assigneeId: owner.id,
    routeStatus: sources.length > 0 ? "Owner review" : "Needs owner",
    routedAt: new Date().toISOString(),
    custom: true,
    approvedAt: null,
  };

  state.questions.push(task);
  item.linkedTaskId = taskId;
  item.status = sources.length > 0 ? "Routed" : "Needs evidence";
  state.activeQuestionId = taskId;
  state.activeDocId = sources[0] ?? state.evidence[0]?.id;
  addTrustRoomReceipt("Follow-up task created", owner.name, `${shorten(item.comment, 86)} converted into an internal answer review task.`);
  addAudit("Follow-up task created", `${shorten(item.comment, 72)} converted into a review task for ${owner.name}.`);
  closeFollowUp(false);
  activateWorkspaceNav("review");
  render();
  showToast("Follow-up review task created.");
}

function resolveFollowUp(id) {
  const item = state.followUps.find((entry) => entry.id === id);
  if (!item) return;
  item.status = "Answered";
  addTrustRoomReceipt("Follow-up answered", item.buyer, `${shorten(item.comment, 86)} marked answered for buyer room loop.`);
  addAudit("Follow-up answered", shorten(item.comment, 72));
  renderFollowUps();
  renderTrustRoom();
  showToast("Follow-up marked answered.");
}

function copyFollowUpBrief(id) {
  const item = followUpSnapshot().items.find((entry) => entry.id === id);
  if (!item) return;
  copyText(followUpBriefText(item), "Follow-up brief copied.");
}

function copyFollowUpDigest() {
  copyText(followUpDigestText(), "Follow-up inbox digest copied.");
}

function followUpBriefText(item) {
  return [
    `${workspaceAccount.company} - Buyer Follow-Up Brief`,
    `Build: ${BUILD_VERSION}`,
    `Buyer: ${item.buyer}`,
    `Room: ${item.room}`,
    `Status: ${item.status}`,
    `Priority: ${item.priority}`,
    `Owner: ${item.owner.name} (${item.owner.team})`,
    `Due: ${formatShortDate(item.due)} (${item.daysLeft} days left)`,
    `Source: ${item.sourceTitle}`,
    `Linked answer: ${item.question?.text ?? "No internal answer linked"}`,
    `Comment: ${item.comment}`,
    `Next motion: ${item.status === "Needs evidence" ? "Attach stronger evidence before updating the room." : item.linkedTaskId ? "Finish linked review task and update the room receipt." : "Create a review task or route owner response."}`,
  ].join("\n");
}

function followUpDigestText(inbox = followUpSnapshot()) {
  const priority = inbox.items
    .slice(0, 5)
    .map((item, index) => `${index + 1}. ${item.status} | ${item.owner.name} | ${item.daysLeft}d | ${item.comment}`)
    .join("\n");
  const ownerLines = inbox.ownerRows
    .map((row) => `${row.member.name}: ${row.open} open, ${row.routed} routed, ${row.evidence} evidence gaps`)
    .join("\n");

  return [
    "AnswerSeal Buyer Follow-Up Inbox",
    `Build: ${BUILD_VERSION}`,
    `Open follow-ups: ${inbox.openCount}`,
    `Routed: ${inbox.routedCount}`,
    `Evidence gaps: ${inbox.evidenceCount}`,
    `SLA risk: ${inbox.slaCount}`,
    "",
    "Priority queue:",
    priority || "No open buyer follow-ups.",
    "",
    "Owner load:",
    ownerLines || "No owner load.",
    "",
    "Recommended motion:",
    "- Convert high-priority buyer comments into review tasks.",
    "- Attach fresh evidence before reopening the trust room.",
    "- Mark answered only after the room receipt reflects the update.",
  ].join("\n");
}

function renderImportStudio() {
  if (!state.importStudio.rows.length) {
    state.importStudio.rows = createImportRows(state.importStudio.text);
    state.importStudio.lastAnalyzedAt = new Date().toISOString();
  }

  const studio = importSnapshot();
  elements.importTextArea.value = state.importStudio.text;
  elements.importRowCount.textContent = studio.rowCount;
  elements.importReadyCount.textContent = studio.readyCount;
  elements.importDuplicateCount.textContent = studio.duplicateCount;
  elements.importConfidenceScore.textContent = `${studio.averageConfidence}%`;
  elements.importDigest.textContent = importDigestText(studio);

  elements.importMappingList.innerHTML = "";
  studio.mapping.forEach((field) => {
    const item = document.createElement("article");
    item.className = `import-mapping-card is-${field.status}`;
    item.innerHTML = `
      <span class="label">${escapeHtml(field.label)}</span>
      <strong>${escapeHtml(field.value)}</strong>
      <p>${escapeHtml(field.detail)}</p>
    `;
    elements.importMappingList.append(item);
  });

  elements.importRowList.innerHTML = "";
  if (studio.rows.length === 0) {
    elements.importRowList.append(emptyState("Paste buyer questions to analyze"));
  }

  studio.rows.forEach((row) => {
    const card = document.createElement("article");
    card.className = `import-row-card ${importRowStatusClass(row)}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(row.portal)} | ${escapeHtml(row.category)} | Due ${escapeHtml(formatShortDate(row.due))}</span>
          <strong>${escapeHtml(row.question)}</strong>
        </div>
        <b>${row.importConfidence}%</b>
      </header>
      <div class="import-row-meta">
        <span>${escapeHtml(row.statusLabel)}</span>
        <span>${escapeHtml(row.member.name)}</span>
        <span>${row.sources.length} source${row.sources.length === 1 ? "" : "s"}</span>
        <span>${row.duplicateScore ? `${row.duplicateScore}% duplicate` : "unique"}</span>
      </div>
      ${row.issues.length ? `<ul>${row.issues.map((issue) => `<li>${escapeHtml(issue)}</li>`).join("")}</ul>` : "<p>Mapped cleanly and ready for review queue.</p>"}
      <footer>
        <span>${escapeHtml(row.notes || "No buyer note")}</span>
        <button class="secondary-button compact-button" type="button" data-import-copy="${escapeHtml(row.id)}">
          <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
          <span>Brief</span>
        </button>
        <button class="primary-button compact-button" type="button" data-import-add="${escapeHtml(row.id)}" ${row.canAdd ? "" : "disabled"}>
          <svg aria-hidden="true"><use href="#icon-plus"></use></svg>
          <span>Add</span>
        </button>
      </footer>
    `;
    card.querySelector("[data-import-copy]")?.addEventListener("click", () => copyImportRowBrief(row.id));
    card.querySelector("[data-import-add]")?.addEventListener("click", () => addImportRow(row.id));
    elements.importRowList.append(card);
  });

  elements.importDuplicateList.innerHTML = "";
  if (studio.duplicates.length === 0) {
    elements.importDuplicateList.append(emptyState("No strong duplicates"));
  }
  studio.duplicates.forEach((row) => {
    const item = document.createElement("article");
    item.className = "import-duplicate-card";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(row.question)}</strong>
        <span>${row.duplicateScore}% match to ${escapeHtml(shorten(row.duplicateQuestion?.text ?? "existing queue item", 72))}</span>
      </div>
      <b>${escapeHtml(row.duplicateQuestion?.status ? formatStatus(row.duplicateQuestion.status) : "Memory")}</b>
    `;
    elements.importDuplicateList.append(item);
  });

  elements.importOwnerList.innerHTML = "";
  studio.ownerRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = "import-owner-card";
    item.innerHTML = `
      <span class="role-avatar">${escapeHtml(initials(row.member.name))}</span>
      <div>
        <header>
          <strong>${escapeHtml(row.member.name)}</strong>
          <b>${row.ready} ready</b>
        </header>
        <p>${escapeHtml(row.member.team)} | ${row.rows} imported rows | ${row.cleanup} cleanup</p>
      </div>
    `;
    elements.importOwnerList.append(item);
  });
}

function importSnapshot() {
  const imported = new Set(state.importStudio.importedIds);
  const rows = state.importStudio.rows.map((row) => {
    const duplicateQuestion = state.questions.find((question) => question.id === row.duplicateId);
    const importedQuestion = row.importedQuestionId ? state.questions.find((question) => question.id === row.importedQuestionId) : null;
    const wasImported = imported.has(row.id) || Boolean(importedQuestion);
    return {
      ...row,
      member: memberById(row.assigneeId),
      duplicateQuestion,
      wasImported,
      canAdd: row.status === "Ready" && !wasImported,
      statusLabel: wasImported ? "Imported" : row.status,
    };
  });
  const rowCount = rows.length;
  const readyCount = rows.filter((row) => row.canAdd).length;
  const duplicateCount = rows.filter((row) => row.status === "Duplicate").length;
  const cleanupCount = rows.filter((row) => ["Cleanup", "Weak Evidence"].includes(row.status)).length;
  const averageConfidence = rowCount === 0 ? 0 : Math.round(rows.reduce((sum, row) => sum + row.importConfidence, 0) / rowCount);
  const ownerRows = workspaceAccount.members
    .map((member) => {
      const owned = rows.filter((row) => row.assigneeId === member.id);
      return {
        member,
        rows: owned.length,
        ready: owned.filter((row) => row.canAdd).length,
        cleanup: owned.filter((row) => ["Cleanup", "Weak Evidence"].includes(row.status)).length,
      };
    })
    .filter((row) => row.rows > 0);

  return {
    rows,
    rowCount,
    readyCount,
    duplicateCount,
    cleanupCount,
    averageConfidence,
    mapping: importMappingForText(state.importStudio.text),
    duplicates: rows.filter((row) => row.duplicateScore >= 72).sort((a, b) => b.duplicateScore - a.duplicateScore),
    ownerRows,
    importedCount: rows.filter((row) => row.wasImported).length,
  };
}

function createImportRows(text, existingQuestions = state.questions) {
  return parseImportRecords(text).map((record, index) => mapImportRecord(record, index, existingQuestions));
}

function parseImportRecords(text) {
  const normalized = String(text ?? "").replace(/\r/g, "\n").trim();
  if (!normalized) return [];

  const lines = normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length === 0) return [];

  const delimiter = detectImportDelimiter(lines[0]);
  if (!delimiter) {
    return lines
      .map((line) => ({ question: cleanImportQuestion(line), portal: "Portal paste", due: "2026-06-14", notes: "" }))
      .filter((row) => row.question);
  }

  const records = lines.map((line) => parseDelimitedLine(line, delimiter));
  const header = isImportHeader(records[0]) ? records.shift() : null;
  const headerMap = header ? mapImportHeaders(header) : {};

  return records
    .map((cells) => recordFromCells(cells, headerMap))
    .filter((row) => row.question);
}

function detectImportDelimiter(line) {
  if (line.includes("\t")) return "\t";
  if ((line.match(/,/g) ?? []).length >= 2) return ",";
  if ((line.match(/\|/g) ?? []).length >= 2) return "|";
  return "";
}

function parseDelimitedLine(line, delimiter) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
      continue;
    }
    if (char === '"') {
      quoted = !quoted;
      continue;
    }
    if (char === delimiter && !quoted) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current.trim());
  return cells;
}

function isImportHeader(cells) {
  const headerWords = ["question", "prompt", "control", "requirement", "portal", "due", "deadline", "notes"];
  return cells.some((cell) => headerWords.includes(normalizeImportHeader(cell)));
}

function mapImportHeaders(cells) {
  return cells.reduce((map, cell, index) => {
    const header = normalizeImportHeader(cell);
    if (["question", "prompt", "control", "requirement"].includes(header)) map.question = index;
    if (["portal", "system", "destination"].includes(header)) map.portal = index;
    if (["due", "deadline", "date"].includes(header)) map.due = index;
    if (["notes", "note", "context", "buyer notes"].includes(header)) map.notes = index;
    if (["owner", "assignee"].includes(header)) map.owner = index;
    if (["category", "domain", "topic"].includes(header)) map.category = index;
    return map;
  }, {});
}

function normalizeImportHeader(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ");
}

function recordFromCells(cells, headerMap) {
  const questionIndex = headerMap.question ?? 0;
  return {
    question: cleanImportQuestion(cells[questionIndex] ?? ""),
    portal: cells[headerMap.portal] || "Import Studio",
    due: normalizeImportDue(cells[headerMap.due]),
    notes: cells[headerMap.notes] || "",
    owner: cells[headerMap.owner] || "",
    category: cells[headerMap.category] || "",
  };
}

function cleanImportQuestion(value) {
  return String(value ?? "")
    .replace(/^\s*(q(uestion)?|prompt|control|requirement)\s*[:#-]\s*/i, "")
    .replace(/^\s*\d+[\).:-]\s*/, "")
    .trim();
}

function normalizeImportDue(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "2026-06-14";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "2026-06-14";
  return parsed.toISOString().slice(0, 10);
}

function mapImportRecord(record, index, existingQuestions) {
  const question = cleanImportQuestion(record.question);
  const draft = draftFromText(question);
  const duplicate = bestImportDuplicate(question, existingQuestions);
  const category = record.category || draft.category;
  const owner = record.owner || draft.owner;
  const row = {
    id: `import-${index}-${slugify(question).slice(0, 42) || Date.now()}`,
    question,
    portal: record.portal || "Import Studio",
    due: normalizeImportDue(record.due),
    notes: record.notes || "",
    category,
    owner,
    assigneeId: ownerToMemberId(owner),
    sources: draft.sources,
    confidence: draft.confidence,
    duplicateId: duplicate?.question.id ?? "",
    duplicateScore: duplicate?.score ?? 0,
    issues: [],
    mappedAt: new Date().toISOString(),
    importedQuestionId: "",
  };
  row.importConfidence = importConfidenceForRow(record, draft, duplicate);
  row.issues = importIssuesForRow(row, draft, duplicate);
  row.status = importStatusForRow(row, draft, duplicate);
  return row;
}

function importConfidenceForRow(record, draft, duplicate) {
  const hasQuestion = cleanImportQuestion(record.question).length >= 24;
  const fieldScore = (hasQuestion ? 22 : 0) + (record.portal ? 8 : 0) + (record.due ? 10 : 0) + (record.notes ? 4 : 0) + (draft.owner ? 8 : 0);
  const duplicatePenalty = duplicate?.score >= 88 ? 28 : duplicate?.score >= 72 ? 12 : 0;
  return Math.max(20, Math.min(98, Math.round(draft.confidence * 0.56 + fieldScore - duplicatePenalty)));
}

function importIssuesForRow(row, draft, duplicate) {
  const issues = [];
  if (row.question.length < 24) issues.push("Question text is too short to trust without cleanup.");
  if (!/[?]$/.test(row.question) && !/^(describe|list|explain|provide|confirm|what|how|do|can|does|is|are|when|where)\b/i.test(row.question)) {
    issues.push("Question wording may need cleanup before routing.");
  }
  if (draft.sources.length === 0) issues.push("No matching evidence source found in the vault.");
  if (draft.confidence < 68) issues.push("Evidence match is weak; route for human cleanup.");
  if (duplicate?.score >= 88) issues.push("Strong duplicate found. Reuse approved memory or existing queue item.");
  if (duplicate?.score >= 72 && duplicate.score < 88) issues.push("Possible duplicate; review before adding.");
  return issues;
}

function importStatusForRow(row, draft, duplicate) {
  if (duplicate?.score >= 88) return "Duplicate";
  if (row.question.length < 24 || row.importConfidence < 68) return "Cleanup";
  if (draft.sources.length === 0 || draft.confidence < 68) return "Weak Evidence";
  return "Ready";
}

function bestImportDuplicate(questionText, existingQuestions = state.questions) {
  const words = wordSet(questionText);
  if (words.size === 0) return null;
  return (
    existingQuestions
      .map((question) => {
        const target = wordSet(question.text);
        const shared = [...words].filter((word) => target.has(word)).length;
        const score = Math.round((shared * 2 * 100) / Math.max(1, words.size + target.size));
        return { question, score };
      })
      .filter((item) => item.score >= 58)
      .sort((a, b) => b.score - a.score)[0] ?? null
  );
}

function importMappingForText(text) {
  const records = String(text ?? "")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const first = records[0] ?? "";
  const delimiter = detectImportDelimiter(first);
  const header = delimiter ? parseDelimitedLine(first, delimiter) : [];
  const headerMap = isImportHeader(header) ? mapImportHeaders(header) : {};
  const mapped = (key) => Number.isInteger(headerMap[key]);
  return [
    {
      label: "Question",
      value: mapped("question") ? `Column ${headerMap.question + 1}` : delimiter ? "Column 1 inferred" : "Line text",
      status: mapped("question") || !delimiter ? "mapped" : "inferred",
      detail: "Buyer prompt becomes the review queue title.",
    },
    {
      label: "Portal",
      value: mapped("portal") ? `Column ${headerMap.portal + 1}` : "Inferred",
      status: mapped("portal") ? "mapped" : "inferred",
      detail: "Destination system is kept for portal handoff.",
    },
    {
      label: "Due Date",
      value: mapped("due") ? `Column ${headerMap.due + 1}` : "Default Jun 14",
      status: mapped("due") ? "mapped" : "inferred",
      detail: "Missing dates are defaulted but visible before import.",
    },
    {
      label: "Owner",
      value: mapped("owner") ? `Column ${headerMap.owner + 1}` : "AI-routed",
      status: mapped("owner") ? "mapped" : "inferred",
      detail: "Owner is suggested from trust category and evidence match.",
    },
    {
      label: "Notes",
      value: mapped("notes") ? `Column ${headerMap.notes + 1}` : "Optional",
      status: mapped("notes") ? "mapped" : "missing",
      detail: "Buyer notes are preserved for reviewer context.",
    },
  ];
}

function importRowStatusClass(row) {
  if (row.wasImported) return "is-imported";
  if (row.status === "Ready") return "is-ready";
  if (row.status === "Duplicate") return "is-duplicate";
  if (row.status === "Weak Evidence") return "is-weak";
  return "is-cleanup";
}

function analyzeImportStudio() {
  state.importStudio.text = elements.importTextArea.value.trim() || importSampleText;
  state.importStudio.rows = createImportRows(state.importStudio.text);
  state.importStudio.lastAnalyzedAt = new Date().toISOString();
  addAudit("Questionnaire import analyzed", `${state.importStudio.rows.length} row${state.importStudio.rows.length === 1 ? "" : "s"} mapped in Import Studio.`);
  renderImportStudio();
  showToast("Questionnaire import analyzed.");
}

function loadImportSample() {
  state.importStudio.text = importSampleText;
  state.importStudio.rows = createImportRows(importSampleText);
  state.importStudio.lastAnalyzedAt = new Date().toISOString();
  renderImportStudio();
  showToast("Sample questionnaire loaded.");
}

function addReadyImportRows() {
  const ready = importSnapshot().rows.filter((row) => row.canAdd);
  if (ready.length === 0) {
    showToast("No ready import rows to add.");
    return;
  }
  ready.slice().reverse().forEach((row, index) => promoteImportRow(row, index));
  state.activeQuestionId = ready[0].importedQuestionId || state.questions[0]?.id;
  state.activeDocId = getActiveQuestion()?.sources?.[0] ?? state.evidence[0]?.id;
  state.intake.unshift({
    id: `intake-import-${Date.now()}`,
    name: "Questionnaire Import Studio",
    type: "Mapped rows",
    kind: "Questionnaire",
    status: "Imported",
    category: "Questionnaire",
    matches: ready.length,
    linkedDocId: null,
    addedAt: new Date().toISOString(),
  });
  addAudit("Import rows added", `${ready.length} ready question${ready.length === 1 ? "" : "s"} added to the review queue.`);
  render();
  showToast(`${ready.length} ready question${ready.length === 1 ? "" : "s"} added.`);
}

function addImportRow(id) {
  const row = importSnapshot().rows.find((item) => item.id === id);
  if (!row?.canAdd) {
    showToast("Row needs cleanup before adding.");
    return;
  }
  promoteImportRow(row, 0);
  state.activeQuestionId = row.importedQuestionId;
  state.activeDocId = getActiveQuestion()?.sources?.[0] ?? state.evidence[0]?.id;
  addAudit("Import row added", shorten(row.question, 72));
  render();
  showToast("Import row added to queue.");
}

function promoteImportRow(row, index) {
  const draft = draftFromText(row.question);
  const id = `q-import-studio-${Date.now()}-${index}`;
  const question = {
    id,
    text: row.question,
    category: row.category,
    owner: row.owner,
    due: row.due,
    portal: row.portal,
    priority: row.importConfidence >= 82 ? "Medium" : "High",
    custom: true,
    approvedAt: null,
    importRowId: row.id,
    ...draft,
    assigneeId: row.assigneeId,
    routeStatus: draft.status === "needs-evidence" ? "Needs owner" : "Assigned",
  };
  state.questions.unshift(question);
  const savedRow = state.importStudio.rows.find((item) => item.id === row.id);
  if (savedRow) savedRow.importedQuestionId = id;
  if (!state.importStudio.importedIds.includes(row.id)) state.importStudio.importedIds.push(row.id);
  row.importedQuestionId = id;
}

function copyImportRowBrief(id) {
  const row = importSnapshot().rows.find((item) => item.id === id);
  if (!row) return;
  copyText(importRowBriefText(row), "Import row brief copied.");
}

function copyImportDigest() {
  copyText(importDigestText(), "Import digest copied.");
}

function importRowBriefText(row) {
  const sources = row.sources.map((id) => getEvidenceById(id)?.title).filter(Boolean).join("; ") || "No source matched";
  return [
    `${workspaceAccount.company} - Import Row Brief`,
    `Build: ${BUILD_VERSION}`,
    `Status: ${row.statusLabel}`,
    `Question: ${row.question}`,
    `Portal: ${row.portal}`,
    `Due: ${formatShortDate(row.due)}`,
    `Owner: ${row.member.name} (${row.member.team})`,
    `Category: ${row.category}`,
    `Import confidence: ${row.importConfidence}%`,
    `Evidence: ${sources}`,
    `Duplicate: ${row.duplicateScore ? `${row.duplicateScore}% ${row.duplicateQuestion?.text ?? ""}` : "None"}`,
    `Issues: ${row.issues.join("; ") || "None"}`,
    `Buyer notes: ${row.notes || "None"}`,
  ].join("\n");
}

function importDigestText(studio = importSnapshot()) {
  const readyLines = studio.rows
    .filter((row) => row.canAdd)
    .slice(0, 5)
    .map((row, index) => `${index + 1}. ${row.category}: ${shorten(row.question, 82)} | ${row.member.name} | ${row.importConfidence}%`)
    .join("\n");
  const cleanupLines = studio.rows
    .filter((row) => ["Cleanup", "Weak Evidence", "Duplicate"].includes(row.status))
    .slice(0, 5)
    .map((row, index) => `${index + 1}. ${row.status}: ${shorten(row.question, 82)} | ${row.issues[0] ?? "Review needed"}`)
    .join("\n");

  return [
    "AnswerSeal Questionnaire Import Studio",
    `Build: ${BUILD_VERSION}`,
    `Rows: ${studio.rowCount}`,
    `Ready to add: ${studio.readyCount}`,
    `Duplicates: ${studio.duplicateCount}`,
    `Needs cleanup: ${studio.cleanupCount}`,
    `Average import confidence: ${studio.averageConfidence}%`,
    `Already imported: ${studio.importedCount}`,
    "",
    "Ready rows:",
    readyLines || "No ready rows yet.",
    "",
    "Rows needing attention:",
    cleanupLines || "No cleanup required.",
    "",
    "Recommended motion:",
    "- Add ready rows to the review queue.",
    "- Reuse duplicate answers from approved memory.",
    "- Route weak evidence rows to source owners before buyer submission.",
  ].join("\n");
}

function renderGapAutopilot() {
  const gaps = gapAutopilotSnapshot();

  elements.gapTaskCount.textContent = gaps.taskCount;
  elements.gapHighRiskCount.textContent = gaps.highRiskCount;
  elements.gapOwnerCount.textContent = gaps.ownerRows.length;
  elements.gapFallbackCount.textContent = gaps.fallbackRows.length;
  elements.gapDigest.textContent = gapDigestText(gaps);

  elements.gapTaskList.innerHTML = "";
  if (gaps.tasks.length === 0) {
    elements.gapTaskList.append(emptyState("No evidence gaps detected"));
  }

  gaps.tasks.forEach((task) => {
    const card = document.createElement("article");
    card.className = `gap-task-card ${gapSeverityClass(task.severity)}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(task.question.category)} | ${escapeHtml(task.owner.name)} | Due ${escapeHtml(formatShortDate(task.question.due))}</span>
          <strong>${escapeHtml(task.question.text)}</strong>
        </div>
        <b>${task.score}</b>
      </header>
      <div class="gap-task-meta">
        <span>${escapeHtml(task.severity)}</span>
        <span>${escapeHtml(task.status)}</span>
        <span>${task.daysLeft}d left</span>
        <span>${task.confidence}% confidence</span>
      </div>
      <p>${escapeHtml(task.reason)}</p>
      <ul>${task.gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("")}</ul>
      <footer>
        <span>${escapeHtml(task.request.title)}</span>
        <button class="secondary-button compact-button" type="button" data-gap-copy="${escapeHtml(task.id)}">
          <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
          <span>Fallback</span>
        </button>
        <button class="secondary-button compact-button" type="button" data-gap-route="${escapeHtml(task.id)}">
          <svg aria-hidden="true"><use href="#icon-users"></use></svg>
          <span>Route</span>
        </button>
        <button class="primary-button compact-button" type="button" data-gap-request="${escapeHtml(task.id)}">
          <svg aria-hidden="true"><use href="#icon-plus"></use></svg>
          <span>Request</span>
        </button>
      </footer>
    `;
    card.querySelector("[data-gap-copy]")?.addEventListener("click", () => copyGapFallback(task.id));
    card.querySelector("[data-gap-route]")?.addEventListener("click", () => routeGapTask(task.id));
    card.querySelector("[data-gap-request]")?.addEventListener("click", () => requestGapEvidence(task.id));
    elements.gapTaskList.append(card);
  });

  elements.gapRequestList.innerHTML = "";
  if (gaps.requestRows.length === 0) {
    elements.gapRequestList.append(emptyState("No evidence requests needed"));
  }
  gaps.requestRows.forEach((request) => {
    const item = document.createElement("article");
    item.className = `gap-request-card ${gapSeverityClass(request.severity)}`;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(request.title)}</strong>
        <span>${escapeHtml(request.owner.name)} | ${request.count} linked gap${request.count === 1 ? "" : "s"} | ${escapeHtml(request.sourceHint)}</span>
      </div>
      <b>${escapeHtml(request.severity)}</b>
    `;
    elements.gapRequestList.append(item);
  });

  elements.gapOwnerList.innerHTML = "";
  if (gaps.ownerRows.length === 0) {
    elements.gapOwnerList.append(emptyState("No owner load"));
  }
  gaps.ownerRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = "gap-owner-card";
    item.innerHTML = `
      <span class="role-avatar">${escapeHtml(initials(row.member.name))}</span>
      <div>
        <header>
          <strong>${escapeHtml(row.member.name)}</strong>
          <b>${row.highRisk} high</b>
        </header>
        <p>${escapeHtml(row.member.team)} | ${row.tasks} gaps | ${row.averageScore}% avg risk | ${row.requested} requested</p>
      </div>
    `;
    elements.gapOwnerList.append(item);
  });

  elements.gapFallbackList.innerHTML = "";
  if (gaps.fallbackRows.length === 0) {
    elements.gapFallbackList.append(emptyState("No fallback language needed"));
  }
  gaps.fallbackRows.slice(0, 4).forEach((task) => {
    const item = document.createElement("article");
    item.className = "gap-fallback-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(shorten(task.question.text, 86))}</strong>
        <button class="secondary-button compact-button" type="button" data-gap-fallback="${escapeHtml(task.id)}">
          <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
          <span>Copy</span>
        </button>
      </header>
      <p>${escapeHtml(task.fallback)}</p>
    `;
    item.querySelector("[data-gap-fallback]")?.addEventListener("click", () => copyGapFallback(task.id));
    elements.gapFallbackList.append(item);
  });
}

function gapAutopilotSnapshot() {
  const tasks = state.questions
    .map(gapTaskForQuestion)
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.daysLeft - b.daysLeft || a.question.text.localeCompare(b.question.text));
  const requestRows = gapRequestRows(tasks);
  const ownerRows = workspaceAccount.members
    .map((member) => {
      const owned = tasks.filter((task) => task.owner.id === member.id);
      return {
        member,
        tasks: owned.length,
        highRisk: owned.filter((task) => task.severity === "High").length,
        requested: owned.filter((task) => task.status === "Requested").length,
        averageScore: owned.length ? Math.round(owned.reduce((sum, task) => sum + task.score, 0) / owned.length) : 0,
      };
    })
    .filter((row) => row.tasks > 0);
  const fallbackRows = tasks.filter((task) => task.needsFallback);

  return {
    tasks,
    taskCount: tasks.length,
    highRiskCount: tasks.filter((task) => task.severity === "High").length,
    requestRows,
    ownerRows,
    fallbackRows,
    requestedCount: tasks.filter((task) => task.status === "Requested").length,
    fallbackCount: fallbackRows.length,
  };
}

function gapTaskForQuestion(question) {
  if (question.status === "approved") return null;

  const docs = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  const trace = claimTraceSnapshot(question);
  const retrieval = retrievalSnapshot(question);
  const gaps = [];
  const staleDocs = docs.filter((doc) => daysSince(doc.updated) >= 365);
  const missingSources = docs.length === 0;
  const weakSources = retrieval.topScore < 70 || Number(question.confidence || 0) < 75;
  const conflicts = trace.conflicts > 0;
  const openRisks = question.risks ?? [];

  if (question.status === "needs-evidence") gaps.push("Question is blocked by evidence review.");
  if (missingSources) gaps.push("No source is attached.");
  if (weakSources) gaps.push("Source match or answer confidence is below approval threshold.");
  if (staleDocs.length) gaps.push(`${staleDocs.length} attached source${staleDocs.length === 1 ? " is" : "s are"} stale.`);
  if (conflicts) gaps.push("Claim trace found conflicting or legacy source language.");
  openRisks.forEach((risk) => gaps.push(risk));

  if (gaps.length === 0) return null;

  const daysLeft = daysUntil(question.due);
  const owner = memberForQuestion(question);
  const request = evidenceRequestForQuestion(question, gaps);
  const status = state.gapActions[question.id]?.status ?? "Open";
  const score = gapRiskScore(question, { missingSources, weakSources, conflicts, staleDocs, openRisks, daysLeft });
  const severity = score >= 78 ? "High" : score >= 58 ? "Medium" : "Low";
  return {
    id: question.id,
    question,
    owner,
    docs,
    trace,
    retrieval,
    gaps: [...new Set(gaps)],
    daysLeft,
    request,
    status,
    score,
    severity,
    confidence: Number(question.confidence || 0),
    reason: gapReason(question, score, request),
    fallback: buyerSafeFallback(question, request),
    needsFallback: daysLeft <= 3 || severity === "High" || status === "Requested",
  };
}

function gapRiskScore(question, context) {
  const statusRisk = question.status === "needs-evidence" ? 22 : 8;
  const confidenceRisk = Math.max(0, 85 - Number(question.confidence || 0));
  const sourceRisk = context.missingSources ? 24 : context.weakSources ? 14 : 0;
  const staleRisk = context.staleDocs.length * 10;
  const conflictRisk = context.conflicts ? 24 : 0;
  const noteRisk = Math.min(16, context.openRisks.length * 6);
  const deadlineRisk = context.daysLeft <= 1 ? 18 : context.daysLeft <= 3 ? 12 : context.daysLeft <= 5 ? 6 : 0;
  return Math.max(0, Math.min(100, Math.round(statusRisk + confidenceRisk + sourceRisk + staleRisk + conflictRisk + noteRisk + deadlineRisk)));
}

function evidenceRequestForQuestion(question, gaps) {
  const category = question.category;
  const catalog = {
    Encryption: {
      title: "Current encryption control evidence",
      sourceHint: "SOC 2 control excerpt or encryption policy section",
    },
    Access: {
      title: "Access review and MFA evidence",
      sourceHint: "SSO/MFA policy plus latest privileged access review",
    },
    Incident: {
      title: "Incident notification SLA proof",
      sourceHint: "Incident response policy, customer notice clause, or tabletop test",
    },
    "AI Governance": {
      title: "Current AI usage approval",
      sourceHint: "AI Usage Standard, model provider policy, or human-review control",
    },
    Privacy: {
      title: "Privacy and DPA proof",
      sourceHint: "DPA clause, subprocessor list, deletion/export procedure",
    },
    Continuity: {
      title: "Continuity test evidence",
      sourceHint: "BCP test, backup integrity report, or RTO/RPO runbook",
    },
    "Security Testing": {
      title: "Penetration testing attestation",
      sourceHint: "Latest pentest letter, remediation summary, or vuln scan report",
    },
  };
  const fallback = {
    title: `${category} owner-approved evidence`,
    sourceHint: "Policy, report, contract clause, or owner-approved note",
  };
  const request = catalog[category] ?? fallback;
  if (gaps.some((gap) => gap.toLowerCase().includes("conflict") || gap.toLowerCase().includes("legacy"))) {
    return {
      title: `Conflict-safe ${request.title}`,
      sourceHint: `${request.sourceHint}; archive or replace conflicting source language`,
    };
  }
  return request;
}

function gapReason(question, score, request) {
  if ((question.risks ?? []).length > 0) return `Open reviewer note requires ${request.title.toLowerCase()} before approval.`;
  if (!(question.sources ?? []).length) return `No attached proof. Request ${request.sourceHint.toLowerCase()}.`;
  if (score >= 78) return `High-risk proof gap because deadline, confidence, or claim trace needs owner action.`;
  return `Route ${request.title.toLowerCase()} to the owner before buyer-facing reuse.`;
}

function buyerSafeFallback(question, request) {
  return `We are validating the current ${question.category.toLowerCase()} evidence before final submission. The request is with ${memberForQuestion(question).name} for ${request.sourceHint.toLowerCase()}, and we will provide a sourced answer once the control owner confirms the latest proof.`;
}

function gapRequestRows(tasks) {
  const rows = new Map();
  tasks.forEach((task) => {
    const key = `${task.owner.id}-${task.request.title}`;
    const existing = rows.get(key) ?? {
      id: key,
      title: task.request.title,
      sourceHint: task.request.sourceHint,
      owner: task.owner,
      count: 0,
      score: 0,
      severity: "Low",
    };
    existing.count += 1;
    existing.score = Math.max(existing.score, task.score);
    existing.severity = existing.score >= 78 ? "High" : existing.score >= 58 ? "Medium" : "Low";
    rows.set(key, existing);
  });
  return [...rows.values()].sort((a, b) => b.score - a.score || b.count - a.count || a.title.localeCompare(b.title));
}

function gapSeverityClass(severity) {
  if (severity === "High") return "is-high";
  if (severity === "Medium") return "is-medium";
  return "is-low";
}

function requestGapEvidence(id) {
  const task = gapAutopilotSnapshot().tasks.find((item) => item.id === id);
  if (!task) return;
  const action = state.gapActions[id] ?? {};
  state.gapActions[id] = {
    ...action,
    status: "Requested",
    requestedAt: new Date().toISOString(),
  };
  task.question.status = "needs-evidence";
  task.question.routeStatus = "Owner review";
  task.question.assigneeId = task.owner.id;
  const risk = `Evidence Gap Autopilot requested: ${task.request.title}.`;
  task.question.risks = task.question.risks ?? [];
  if (!task.question.risks.includes(risk)) task.question.risks.push(risk);
  addAudit("Gap evidence requested", `${task.request.title} requested from ${task.owner.name}.`);
  render();
  showToast(`Evidence requested from ${task.owner.name}.`);
}

function routeGapTask(id) {
  const task = gapAutopilotSnapshot().tasks.find((item) => item.id === id);
  if (!task) return;
  const action = state.gapActions[id] ?? {};
  state.gapActions[id] = {
    ...action,
    status: action.status === "Requested" ? "Requested" : "Routed",
    routedAt: new Date().toISOString(),
  };
  task.question.assigneeId = task.owner.id;
  task.question.routeStatus = "Owner review";
  task.question.routedAt = new Date().toISOString();
  addAudit("Gap routed", `${shorten(task.question.text, 62)} routed to ${task.owner.name}.`);
  render();
  showToast(`Gap routed to ${task.owner.name}.`);
}

function copyGapFallback(id) {
  const task = gapAutopilotSnapshot().tasks.find((item) => item.id === id);
  if (!task) return;
  const action = state.gapActions[id] ?? {};
  state.gapActions[id] = {
    ...action,
    fallbackCopiedAt: new Date().toISOString(),
  };
  addAudit("Gap fallback copied", `${shorten(task.question.text, 62)} buyer-safe fallback copied.`);
  renderGapAutopilot();
  copyText(gapFallbackText(task), "Buyer-safe fallback copied.");
}

function copyGapDigest() {
  copyText(gapDigestText(), "Evidence gap digest copied.");
}

function gapFallbackText(task) {
  return [
    `${workspaceAccount.company} - Buyer-safe gap fallback`,
    `Build: ${BUILD_VERSION}`,
    `Question: ${task.question.text}`,
    `Owner: ${task.owner.name} (${task.owner.team})`,
    `Gap: ${task.request.title}`,
    `Requested proof: ${task.request.sourceHint}`,
    `Fallback: ${task.fallback}`,
  ].join("\n");
}

function gapDigestText(gaps = gapAutopilotSnapshot()) {
  const taskLines = gaps.tasks
    .slice(0, 6)
    .map((task, index) => `${index + 1}. ${task.severity} ${task.score}: ${task.question.category} | ${task.owner.name} | ${task.daysLeft}d | ${shorten(task.question.text, 76)}`)
    .join("\n");
  const requestLines = gaps.requestRows
    .slice(0, 5)
    .map((request, index) => `${index + 1}. ${request.title}: ${request.count} gap${request.count === 1 ? "" : "s"}, owner ${request.owner.name}`)
    .join("\n");

  return [
    "AnswerSeal Evidence Gap Autopilot",
    `Build: ${BUILD_VERSION}`,
    `Open gaps: ${gaps.taskCount}`,
    `High risk: ${gaps.highRiskCount}`,
    `Evidence requested: ${gaps.requestedCount}`,
    `Fallbacks ready: ${gaps.fallbackCount}`,
    "",
    "Priority gaps:",
    taskLines || "No evidence gaps detected.",
    "",
    "Evidence requests:",
    requestLines || "No evidence requests needed.",
    "",
    "Recommended motion:",
    "- Request the exact proof artifact before approving weak answers.",
    "- Route high-risk gaps to named owners today.",
    "- Use fallback language only while evidence is being collected.",
  ].join("\n");
}

function renderConnectors() {
  const vault = connectorSnapshot();

  elements.connectorSourceCount.textContent = vault.connectorCount;
  elements.connectorApprovedCount.textContent = vault.approvedCount;
  elements.connectorStaleCount.textContent = vault.staleCount;
  elements.connectorVaultScore.textContent = `${vault.score}%`;
  elements.connectorDigest.textContent = connectorDigestText(vault);

  elements.connectorList.innerHTML = "";
  vault.connectors.forEach((item) => {
    const card = document.createElement("article");
    card.className = `connector-card ${connectorStatusClass(item.status)}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(item.provider)} | ${escapeHtml(item.status)}</span>
          <strong>${escapeHtml(item.name)}</strong>
        </div>
        <b>${item.health}%</b>
      </header>
      <div class="connector-progress" aria-label="${escapeHtml(item.name)} health">
        <span style="width: ${Math.max(0, Math.min(100, item.health))}%"></span>
      </div>
      <div class="connector-meta">
        <span>${item.docs} docs</span>
        <span>${item.linkedEvidence.length} linked</span>
        <span>${item.issues} issues</span>
        <span>${escapeHtml(item.syncAge)}</span>
      </div>
      <p>${escapeHtml(item.nextAction)}</p>
      <footer>
        <span>${escapeHtml(item.owner.name)} | ${escapeHtml(item.freshness)}</span>
        <button class="secondary-button compact-button" type="button" data-connector-brief="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-copy"></use></svg>
          <span>Brief</span>
        </button>
        <button class="secondary-button compact-button" type="button" data-connector-sync="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-refresh"></use></svg>
          <span>Sync</span>
        </button>
        <button class="primary-button compact-button" type="button" data-connector-approve="${escapeHtml(item.id)}">
          <svg aria-hidden="true"><use href="#icon-check"></use></svg>
          <span>Approve</span>
        </button>
      </footer>
    `;
    card.querySelector("[data-connector-brief]")?.addEventListener("click", () => copyConnectorBrief(item.id));
    card.querySelector("[data-connector-sync]")?.addEventListener("click", () => syncConnector(item.id));
    card.querySelector("[data-connector-approve]")?.addEventListener("click", () => approveConnector(item.id));
    elements.connectorList.append(card);
  });

  elements.connectorFreshnessList.innerHTML = "";
  vault.freshnessRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = `connector-freshness-row ${row.risk ? "is-risk" : ""}`;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <span>${escapeHtml(row.connectorName)} | ${escapeHtml(row.owner)} | ${escapeHtml(row.updated)}</span>
      </div>
      <b>${escapeHtml(row.status)}</b>
    `;
    elements.connectorFreshnessList.append(item);
  });

  elements.connectorOwnerList.innerHTML = "";
  vault.ownerRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = "connector-owner-card";
    item.innerHTML = `
      <span class="role-avatar">${escapeHtml(initials(row.member.name))}</span>
      <div>
        <header>
          <strong>${escapeHtml(row.member.name)}</strong>
          <b>${row.pending} pending</b>
        </header>
        <p>${escapeHtml(row.member.team)} | ${row.sources} sources | ${row.issues} issues</p>
      </div>
    `;
    elements.connectorOwnerList.append(item);
  });
}

function connectorSnapshot() {
  const connectors = state.connectors.map(enrichConnector).sort((a, b) => {
    if (a.status === "Stale" && b.status !== "Stale") return -1;
    if (b.status === "Stale" && a.status !== "Stale") return 1;
    if (a.issues !== b.issues) return b.issues - a.issues;
    return a.name.localeCompare(b.name);
  });
  const connectorCount = connectors.length;
  const approvedCount = connectors.filter((item) => item.status === "Approved").length;
  const staleCount = connectors.filter((item) => item.freshness === "Stale" || item.status === "Stale").length;
  const issueCount = connectors.reduce((sum, item) => sum + item.issues, 0);
  const totalDocs = connectors.reduce((sum, item) => sum + item.docs, 0);
  const score = Math.max(
    0,
    Math.min(100, Math.round((approvedCount / Math.max(1, connectorCount)) * 46 + ((connectorCount - staleCount) / Math.max(1, connectorCount)) * 34 + Math.max(0, 20 - issueCount * 4))),
  );
  const freshnessRows = connectors
    .flatMap((connector) =>
      connector.linkedEvidence.map((docId) => {
        const doc = getEvidenceById(docId);
        const status = doc ? freshnessLabel(doc.updated) : "Missing";
        return {
          title: doc?.title ?? docId,
          connectorName: connector.name,
          owner: connector.owner.name,
          updated: doc ? formatShortDate(doc.updated) : "No file",
          status,
          risk: status === "Stale" || status === "Missing" || connector.status === "Stale",
        };
      }),
    )
    .sort((a, b) => Number(b.risk) - Number(a.risk) || a.title.localeCompare(b.title));
  const ownerRows = workspaceAccount.members
    .map((member) => {
      const owned = connectors.filter((connector) => connector.owner.id === member.id);
      return {
        member,
        sources: owned.length,
        pending: owned.filter((connector) => connector.status !== "Approved").length,
        issues: owned.reduce((sum, connector) => sum + connector.issues, 0),
      };
    })
    .filter((row) => row.sources > 0);

  return {
    connectors,
    connectorCount,
    approvedCount,
    staleCount,
    pendingCount: connectors.filter((item) => item.status !== "Approved").length,
    issueCount,
    totalDocs,
    score,
    freshnessRows,
    ownerRows,
  };
}

function enrichConnector(item) {
  const owner = workspaceAccount.members.find((member) => member.id === item.ownerId) ?? workspaceAccount.members[0];
  const linkedDocs = item.linkedEvidence.map(getEvidenceById).filter(Boolean);
  const staleDocs = linkedDocs.filter((doc) => daysSince(doc.updated) >= 365).length;
  const syncAgeDays = daysSince(item.lastSync);
  const statusPenalty = item.status === "Approved" ? 0 : item.status === "Pending" ? 10 : item.status === "Review" ? 16 : 24;
  const health = Math.max(35, Math.min(100, 92 - statusPenalty - item.issues * 8 - staleDocs * 12 - Math.max(0, syncAgeDays - 3)));
  return {
    ...item,
    owner,
    linkedDocs,
    staleDocs,
    health,
    syncAge: syncAgeDays === 0 ? "synced today" : `${syncAgeDays}d sync age`,
  };
}

function connectorStatusClass(status) {
  if (status === "Approved") return "is-approved";
  if (status === "Stale") return "is-stale";
  if (status === "Review") return "is-review";
  return "is-pending";
}

function syncConnector(id) {
  const connector = state.connectors.find((item) => item.id === id);
  if (!connector) return;
  connector.lastSync = new Date().toISOString();
  connector.freshness = connector.status === "Stale" ? "Current" : connector.freshness;
  connector.status = connector.status === "Stale" ? "Review" : connector.status;
  connector.issues = Math.max(0, connector.issues - 1);
  addAudit("Connector synced", `${connector.provider} ${connector.name} synced into the evidence vault.`);
  renderConnectors();
  renderDataRoom();
  showToast("Connector synced.");
}

function approveConnector(id) {
  const connector = state.connectors.find((item) => item.id === id);
  if (!connector) return;
  connector.status = "Approved";
  connector.freshness = connector.freshness === "Stale" ? "Current" : connector.freshness;
  connector.issues = Math.max(0, connector.issues - 1);
  connector.lastSync = new Date().toISOString();
  addAudit("Connector approved", `${connector.provider} ${connector.name} approved for buyer-room evidence reuse.`);
  renderConnectors();
  renderTrustRoom();
  showToast("Connector approved.");
}

function copyConnectorBrief(id) {
  const connector = connectorSnapshot().connectors.find((item) => item.id === id);
  if (!connector) return;
  copyText(connectorBriefText(connector), "Connector brief copied.");
}

function copyConnectorDigest() {
  copyText(connectorDigestText(), "Evidence vault digest copied.");
}

function connectorBriefText(connector) {
  const docs = connector.linkedDocs.map((doc) => `${doc.title} (${freshnessLabel(doc.updated)})`).join("; ") || "No linked evidence";
  return [
    `${workspaceAccount.company} - Evidence Connector Brief`,
    `Build: ${BUILD_VERSION}`,
    `Connector: ${connector.provider} / ${connector.name}`,
    `Owner: ${connector.owner.name} (${connector.owner.team})`,
    `Status: ${connector.status}`,
    `Health: ${connector.health}%`,
    `Docs: ${connector.docs}`,
    `Linked evidence: ${docs}`,
    `Issues: ${connector.issues}`,
    `Last sync: ${formatAccessDate(connector.lastSync)}`,
    `Next action: ${connector.nextAction}`,
  ].join("\n");
}

function connectorDigestText(vault = connectorSnapshot()) {
  const sourceLines = vault.connectors
    .slice(0, 5)
    .map((item, index) => `${index + 1}. ${item.provider} / ${item.name}: ${item.status}, ${item.health}% health, ${item.issues} issues, owner ${item.owner.name}`)
    .join("\n");
  const freshnessLines = vault.freshnessRows
    .slice(0, 5)
    .map((item, index) => `${index + 1}. ${item.title}: ${item.status}, ${item.connectorName}, owner ${item.owner}`)
    .join("\n");

  return [
    "AnswerSeal Evidence Vault Connectors",
    `Build: ${BUILD_VERSION}`,
    `Vault score: ${vault.score}%`,
    `Connectors: ${vault.connectorCount}`,
    `Approved: ${vault.approvedCount}`,
    `Pending/review: ${vault.pendingCount}`,
    `Stale sources: ${vault.staleCount}`,
    `Open issues: ${vault.issueCount}`,
    `Connected docs: ${vault.totalDocs}`,
    "",
    "Connector priority:",
    sourceLines || "No connected sources.",
    "",
    "Freshness watch:",
    freshnessLines || "No freshness risks.",
    "",
    "Recommended motion:",
    "- Sync stale or review-state connectors before buyer-room updates.",
    "- Ask owners to approve pending evidence before reuse.",
    "- Replace legacy or missing evidence before answering buyer follow-ups.",
  ].join("\n");
}

function renderAnalytics() {
  const analytics = dealAnalyticsSnapshot();

  elements.analyticsDealRisk.textContent = `${analytics.riskLabel} ${analytics.riskScore}`;
  elements.analyticsTimeSaved.textContent = `${analytics.timeSavedHours}h`;
  elements.analyticsEvidenceRoi.textContent = analytics.evidenceRoi[0]?.doc.title ?? "No evidence";
  elements.analyticsNextOwner.textContent = analytics.nextOwner.name;
  elements.analyticsDigest.textContent = dealDigestText(analytics);

  elements.analyticsBlockers.innerHTML = "";
  analytics.blockers.forEach((blocker) => {
    const card = document.createElement("article");
    card.className = `analytics-card is-${blocker.level}`;
    card.innerHTML = `
      <header>
        <span>${escapeHtml(blocker.label)}</span>
        <strong>${escapeHtml(blocker.value)}</strong>
      </header>
      <p>${escapeHtml(blocker.detail)}</p>
    `;
    elements.analyticsBlockers.append(card);
  });

  elements.analyticsEvidenceRoiList.innerHTML = "";
  analytics.evidenceRoi.slice(0, 5).forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "analytics-roi-card";
    card.innerHTML = `
      <span class="field-index">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <header>
          <strong>${escapeHtml(item.doc.title)}</strong>
          <span>${item.impactScore} impact</span>
        </header>
        <p>${item.directUses} selected answers | ${item.retrievalHits} retrieval hits | ${item.claimHits} traced claims</p>
        <small>${escapeHtml(item.categories.join(", ") || item.doc.owner)} | Updated ${escapeHtml(formatShortDate(item.doc.updated))}</small>
      </div>
    `;
    elements.analyticsEvidenceRoiList.append(card);
  });

  elements.analyticsTimeSavedList.innerHTML = "";
  analytics.timeSavedBreakdown.forEach((item) => {
    const row = document.createElement("article");
    row.className = "analytics-time-row";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.detail)}</span>
      </div>
      <b>${formatHours(item.hours)}h</b>
    `;
    elements.analyticsTimeSavedList.append(row);
  });
}

function dealAnalyticsSnapshot() {
  const total = Math.max(1, state.questions.length);
  const coverage = coverageSnapshot();
  const routing = ownerRoutingSnapshot();
  const handoff = handoffReadinessSnapshot();
  const portalItems = state.questions.map((question) => ({ question, snapshot: portalSnapshot(question) }));
  const traceItems = state.questions.map((question) => ({ question, trace: claimTraceSnapshot(question) }));
  const retrievalItems = state.questions.map((question) => ({ question, retrieval: retrievalSnapshot(question) }));

  const approved = state.questions.filter((question) => question.status === "approved").length;
  const needsEvidence = state.questions.filter((question) => question.status === "needs-evidence").length;
  const unresolved = state.questions.length - approved;
  const portalBlocked = portalItems.filter((item) => !item.snapshot.readyForSubmit).length;
  const conflictClaims = traceItems.reduce((sum, item) => sum + item.trace.conflicts, 0);
  const weakClaims = traceItems.reduce(
    (sum, item) => sum + item.trace.claims.filter((claim) => ["open", "weak", "conflict"].includes(claim.status)).length,
    0,
  );
  const weakCoverage = coverage.items.filter((item) => item.status !== "ready").length;
  const riskScore = Math.min(
    100,
    Math.round(
      (needsEvidence / total) * 32
        + (routing.openRisks / total) * 22
        + (portalBlocked / total) * 18
        + ((100 - coverage.score) * 0.22)
        + conflictClaims * 5
        + (unresolved / total) * 12,
    ),
  );

  const ownerRanking = [...routing.groups].sort((a, b) => {
    const left = b.openRisks - a.openRisks;
    if (left !== 0) return left;
    const needs = b.needsOwner - a.needsOwner;
    if (needs !== 0) return needs;
    return b.total - a.total;
  });
  const nextQuestion =
    state.questions.find((question) => question.status === "needs-evidence")
    ?? state.questions.find((question) => question.status === "draft")
    ?? state.questions.find((question) => question.status !== "approved")
    ?? state.questions[0];
  const nextOwner = nextQuestion ? memberForQuestion(nextQuestion) : ownerRanking[0]?.member ?? workspaceAccount.members[0];
  const evidenceRoi = evidenceRoiSnapshot(retrievalItems, traceItems);
  const timeSavedBreakdown = timeSavedSnapshot(portalItems, retrievalItems);
  const blockers = dealBlockerSnapshot({
    coverage,
    routing,
    handoff,
    portalBlocked,
    conflictClaims,
    weakClaims,
    weakCoverage,
    nextQuestion,
  });

  return {
    approved,
    needsEvidence,
    unresolved,
    total,
    coverage,
    routing,
    handoff,
    portalBlocked,
    conflictClaims,
    weakClaims,
    weakCoverage,
    riskScore,
    riskLabel: dealRiskLabel(riskScore),
    nextQuestion,
    nextOwner,
    nextAction: nextQuestion ? nextActionLabel(nextQuestion) : "Export approved pack",
    blockers,
    evidenceRoi,
    timeSavedBreakdown,
    timeSavedHours: formatHours(timeSavedBreakdown.reduce((sum, item) => sum + item.hours, 0)),
  };
}

function dealBlockerSnapshot({ coverage, routing, handoff, portalBlocked, conflictClaims, weakClaims, weakCoverage, nextQuestion }) {
  const categoryBlockers = coverage.items.map((item) => ({
    label: item.category,
    value: formatCoverageStatus(item.status),
    detail: `${item.sources} sources, ${item.openRisks} open risks, ${item.score}% coverage contribution.`,
    weight: (item.status === "ready" ? 0 : 18) + item.openRisks * 9 + (100 - item.score) * 0.14,
  }));

  const ownerBlockers = routing.groups
    .filter((group) => group.total > 0)
    .map((group) => ({
      label: group.member.name,
      value: `${group.openRisks} open`,
      detail: `${group.member.team} owns ${group.total} questions and ${group.needsOwner} owner-review routes.`,
      weight: group.openRisks * 13 + group.needsOwner * 8,
    }));

  return [
    ...categoryBlockers,
    ...ownerBlockers,
    {
      label: "Portal handoff",
      value: `${portalBlocked} blocked`,
      detail: `${handoff.ready}% handoff readiness. Copy sequence must be complete before buyer submission.`,
      weight: portalBlocked * 8,
    },
    {
      label: "Claim trace",
      value: `${weakClaims} weak`,
      detail: `${conflictClaims} conflicts and ${weakCoverage} weak coverage areas are visible before approval.`,
      weight: weakClaims * 6 + conflictClaims * 14,
    },
    {
      label: "Next action",
      value: nextQuestion ? memberForQuestion(nextQuestion).name : "Ready",
      detail: nextQuestion ? nextActionLabel(nextQuestion) : "All buyer questions are ready for final export.",
      weight: nextQuestion ? 22 : 0,
    },
  ]
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 6)
    .map((item) => ({
      ...item,
      level: item.weight >= 44 ? "high" : item.weight >= 22 ? "medium" : "low",
    }));
}

function evidenceRoiSnapshot(retrievalItems, traceItems) {
  return state.evidence
    .map((doc) => {
      const directUses = state.questions.filter((question) => (question.sources ?? []).includes(doc.id)).length;
      const retrievalHits = retrievalItems.filter((item) => item.retrieval.matches.some((match) => match.doc.id === doc.id && match.score >= 58)).length;
      const claimHits = traceItems.reduce(
        (sum, item) => sum + item.trace.claims.filter((claim) => claim.sourceId === doc.id && claim.status !== "open").length,
        0,
      );
      const categories = [...new Set(state.questions.filter((question) => (question.sources ?? []).includes(doc.id)).map((question) => question.category))];
      const freshnessBoost = sourceFreshnessScore(doc.updated) >= 88 ? 8 : 0;
      const impactScore = directUses * 28 + retrievalHits * 16 + claimHits * 10 + freshnessBoost + sourceAuthorityScore(doc) * 0.12;
      return {
        doc,
        directUses,
        retrievalHits,
        claimHits,
        categories,
        impactScore: Math.round(impactScore),
      };
    })
    .sort((a, b) => b.impactScore - a.impactScore || a.doc.title.localeCompare(b.doc.title));
}

function timeSavedSnapshot(portalItems, retrievalItems) {
  const drafted = state.questions.filter((question) => question.answer).length;
  const retrievalReady = retrievalItems.filter((item) => item.retrieval.verdict !== "refuse").length;
  const duplicateMemory = retrievalItems.filter((item) => item.retrieval.duplicate).length;
  const portalFields = portalItems.reduce((sum, item) => sum + item.snapshot.fields.length, 0);
  const portalReady = portalItems.reduce((sum, item) => sum + item.snapshot.readyFields, 0);

  return [
    {
      label: "First drafts",
      hours: drafted * 0.38,
      detail: `${drafted} answers generated from reusable evidence language.`,
    },
    {
      label: "Evidence retrieval",
      hours: retrievalReady * 0.22,
      detail: `${retrievalReady} questions have source-ranking context before review.`,
    },
    {
      label: "Approved memory",
      hours: duplicateMemory * 0.35,
      detail: `${duplicateMemory} similar approved answers surfaced for reuse checks.`,
    },
    {
      label: "Portal sequencing",
      hours: portalFields * 0.04 + portalReady * 0.02,
      detail: `${portalReady}/${portalFields} buyer portal fields are ready to paste.`,
    },
  ];
}

function dealRiskLabel(score) {
  if (score >= 68) return "High";
  if (score >= 36) return "Medium";
  return "Low";
}

function formatHours(value) {
  return Number(value).toFixed(1);
}

function dealDigestText(analytics = dealAnalyticsSnapshot()) {
  const topBlockers = analytics.blockers
    .slice(0, 3)
    .map((blocker, index) => `${index + 1}. ${blocker.label}: ${blocker.value} - ${blocker.detail}`)
    .join("\n");
  const topEvidence = analytics.evidenceRoi
    .slice(0, 3)
    .map((item, index) => `${index + 1}. ${item.doc.title}: ${item.impactScore} impact, ${item.directUses} selected answers, ${item.retrievalHits} retrieval hits`)
    .join("\n");

  return [
    `${workspaceAccount.company} - AnswerSeal Deal Desk Analytics`,
    `Build: ${BUILD_VERSION}`,
    `Deal risk: ${analytics.riskLabel} (${analytics.riskScore}/100)`,
    `Estimated time saved: ${analytics.timeSavedHours} hours`,
    `Evidence coverage: ${analytics.coverage.score}%`,
    `Approved answers: ${analytics.approved}/${analytics.total}`,
    `Portal blockers: ${analytics.portalBlocked}`,
    `Next owner: ${analytics.nextOwner.name}`,
    `Next action: ${analytics.nextAction}`,
    "",
    "Top blockers:",
    topBlockers || "No active blockers.",
    "",
    "Evidence ROI:",
    topEvidence || "No evidence impact yet.",
    "",
    "Recommended motion:",
    "- Resolve the highest-risk blocker before sending buyer-facing answers.",
    "- Reuse the top evidence documents in the next questionnaire first.",
    "- Send the Review Pack only after claim trace and portal checks are clean.",
  ].join("\n");
}

function copyAnalyticsDigest() {
  copyText(dealDigestText(), "Deal desk digest copied.");
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
  const snapshot = portalSnapshot(question);
  elements.portalStatus.textContent = formatStatus(question.status);
  elements.portalConfidence.textContent = `${question.confidence ?? 0}%`;
  elements.portalFieldCount.textContent = snapshot.fields.length;
  elements.portalReadyCount.textContent = `${snapshot.readyFields}/${snapshot.fields.length}`;
  elements.portalQuestion.textContent = question.text;
  elements.portalSequenceStatus.textContent = `${snapshot.copiedFields}/${snapshot.fields.length} copied`;
  elements.portalAnswer.value = question.answer ?? "";
  elements.portalSourceCount.textContent = `${sources.length} ${sources.length === 1 ? "source" : "sources"}`;
  elements.portalCheckStatus.textContent = snapshot.readyForSubmit ? "Ready" : "Review";
  renderPortalFields(question, snapshot.fields);
  renderPortalChecklist(snapshot.checks);
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

function renderPortalFields(question, fields) {
  elements.portalFieldList.innerHTML = "";

  fields.forEach((field, index) => {
    const card = document.createElement("button");
    card.className = `portal-field-card is-${field.status.toLowerCase()}${field.copied ? " is-copied" : ""}`;
    card.type = "button";
    card.innerHTML = `
      <span class="field-index">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <header>
          <strong>${escapeHtml(field.label)}</strong>
          <span>${escapeHtml(field.statusLabel)}</span>
        </header>
        <p>${escapeHtml(field.target)}</p>
        <small>${escapeHtml(field.preview)}</small>
      </div>
    `;
    card.addEventListener("click", () => copyPortalField(question, field));
    elements.portalFieldList.append(card);
  });
}

function renderPortalChecklist(checks) {
  elements.portalChecklist.innerHTML = "";

  checks.forEach((check) => {
    const item = document.createElement("div");
    item.className = `portal-check is-${check.status}`;
    item.innerHTML = `
      <svg aria-hidden="true"><use href="#${check.status === "ready" ? "icon-check" : "icon-warning"}"></use></svg>
      <div>
        <strong>${escapeHtml(check.label)}</strong>
        <span>${escapeHtml(check.detail)}</span>
      </div>
    `;
    elements.portalChecklist.append(item);
  });
}

function portalSnapshot(question) {
  const fields = portalFields(question);
  const checks = portalChecks(question);
  const readyFields = fields.filter((field) => field.status === "ready").length;
  const copiedFields = fields.filter((field) => field.copied).length;

  return {
    fields,
    checks,
    readyFields,
    copiedFields,
    readyForSubmit: checks.every((check) => check.status === "ready"),
  };
}

function portalFields(question) {
  const copied = state.portal.copied[question.id] ?? {};
  const citations = portalCitationsText(question);
  const retrieval = retrievalSnapshot(question);
  const risks = question.risks ?? [];
  const isBlocked = question.status === "needs-evidence" || question.status === "blocked" || retrieval.verdict === "refuse" || risks.length > 0;
  const answerStatus = question.answer && !isBlocked ? "ready" : "blocked";
  const citationStatus = citations ? "ready" : "blocked";
  const approvalStatus = question.status === "approved" ? "ready" : "review";
  const packetStatus = answerStatus === "ready" && citationStatus === "ready" && approvalStatus !== "blocked" ? "ready" : "review";
  const fields = [
    {
      id: "prompt",
      label: "Buyer prompt",
      target: `${question.portal} > Question text`,
      content: question.text,
      status: "ready",
      preview: question.text,
    },
    {
      id: "answer",
      label: "Answer field",
      target: `${question.portal} > Response`,
      content: question.answer ?? "",
      status: answerStatus,
      preview: question.answer || "No answer drafted yet.",
    },
    {
      id: "citations",
      label: "Evidence notes",
      target: `${question.portal} > Supporting evidence`,
      content: citations,
      status: citationStatus,
      preview: citations || "No citations attached.",
    },
    {
      id: "approval",
      label: "Reviewer note",
      target: `${question.portal} > Internal note`,
      content: portalReviewerNote(question, retrieval),
      status: approvalStatus,
      preview: portalReviewerNote(question, retrieval),
    },
    {
      id: "packet",
      label: "Buyer-ready packet",
      target: `${question.portal} > Final handoff`,
      content: portalPacketSummaryText(question),
      status: packetStatus,
      preview: `${formatStatus(question.status)} | ${question.confidence ?? 0}% confidence | ${retrieval.gateLabel}`,
    },
  ];

  return fields.map((field) => ({
    ...field,
    copied: Boolean(copied[field.id]),
    statusLabel: portalFieldStatusLabel(field.status, Boolean(copied[field.id])),
    preview: shorten(String(field.preview ?? ""), 120),
  }));
}

function portalChecks(question) {
  const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  const risks = question.risks ?? [];
  const retrieval = retrievalSnapshot(question);
  const trace = claimTraceSnapshot(question);
  const staleSources = sources.filter((source) => daysSince(source.updated) >= 365);

  return [
    {
      label: "Answer drafted",
      status: question.answer ? "ready" : "blocked",
      detail: question.answer ? "Response text is available for portal paste." : "Draft an answer before portal handoff.",
    },
    {
      label: "Citations attached",
      status: sources.length > 0 ? "ready" : "blocked",
      detail: sources.length > 0 ? `${sources.length} source${sources.length === 1 ? "" : "s"} attached.` : "Attach at least one evidence source.",
    },
    {
      label: "Retrieval gate",
      status: retrieval.verdict === "refuse" ? "blocked" : "ready",
      detail: `${retrieval.verdictLabel} | ${retrieval.topScore}% top match.`,
    },
    {
      label: "Claim trace",
      status: trace.conflicts === 0 ? "ready" : "blocked",
      detail: trace.conflicts === 0 ? `${trace.bound}/${trace.claims.length} claims bound.` : `${trace.conflicts} conflict${trace.conflicts === 1 ? "" : "s"} must be reviewed.`,
    },
    {
      label: "Fresh sources",
      status: staleSources.length === 0 ? "ready" : "blocked",
      detail: staleSources.length === 0 ? "No stale source attached." : `${staleSources.length} stale source${staleSources.length === 1 ? "" : "s"} attached.`,
    },
    {
      label: "Reviewer blockers",
      status: risks.length === 0 ? "ready" : "blocked",
      detail: risks.length === 0 ? "No open review notes." : `${risks.length} blocker${risks.length === 1 ? "" : "s"} visible.`,
    },
    {
      label: "Reviewer approval",
      status: question.status === "approved" ? "ready" : "blocked",
      detail: question.status === "approved" ? "Answer is approved for buyer handoff." : "Approve before final buyer submission.",
    },
  ];
}

function portalFieldStatusLabel(status, copied) {
  if (copied) return "Copied";
  if (status === "ready") return "Ready";
  if (status === "review") return "Review";
  return "Blocked";
}

function copyPortalAnswer() {
  const question = getActiveQuestion();
  if (!question) return;
  const field = portalFields(question).find((item) => item.id === "answer");
  if (!field) return;
  copyPortalField(question, field);
}

function copyNextPortalField() {
  const question = getActiveQuestion();
  if (!question) return;
  const fields = portalFields(question);
  const next = fields.find((field) => field.status === "ready" && !field.copied)
    ?? fields.find((field) => field.status === "review" && !field.copied)
    ?? fields.find((field) => field.status === "ready")
    ?? fields[0];
  if (!next) return;
  copyPortalField(question, next);
}

function copyPortalField(question, field) {
  if (field.status === "blocked") {
    showToast("Resolve blocker before copying.");
    return;
  }

  if (!field.content) {
    showToast("No portal content to copy.");
    return;
  }

  state.portal.copied[question.id] = {
    ...(state.portal.copied[question.id] ?? {}),
    [field.id]: new Date().toISOString(),
  };
  copyText(field.content, `${field.label} copied.`);
  addAudit("Portal field copied", `${field.label} copied for ${shorten(question.text, 58)}.`);
  renderPortalCopy();
}

function copyPortalCitations() {
  const question = getActiveQuestion();
  if (!question) return;
  const field = portalFields(question).find((item) => item.id === "citations");
  if (!field) return;
  copyPortalField(question, field);
}

function copyPortalFull() {
  const question = getActiveQuestion();
  if (!question) return;
  state.portal.copied[question.id] = {
    ...(state.portal.copied[question.id] ?? {}),
    packet: new Date().toISOString(),
  };
  state.portal.packetPreparedAt = new Date().toISOString();
  copyText(portalFullText(question), "Buyer portal packet copied.");
  addAudit("Portal packet prepared", `${shorten(question.text, 58)} portal packet prepared for buyer handoff.`);
  renderPortalCopy();
}

function portalCitationsText(question) {
  const sources = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
  return sources
    .map((source) => `${source.title} (${source.type}, ${freshnessLabel(source.updated)}): ${bestExcerptForQuestion(source, question.text)}`)
    .join("\n");
}

function portalFullText(question) {
  const snapshot = portalSnapshot(question);
  const risks = (question.risks ?? []).join("; ") || "No review notes";
  const fields = snapshot.fields.map((field) => `- ${field.label}: ${field.statusLabel} | ${field.target}`).join("\n");
  const checks = snapshot.checks.map((check) => `- ${check.status === "ready" ? "Ready" : "Blocked"} | ${check.label}: ${check.detail}`).join("\n");
  return [
    `${workspaceAccount.company} - AnswerSeal Buyer Portal Autofill`,
    `Build: ${BUILD_VERSION}`,
    `Portal: ${question.portal}`,
    `Submit readiness: ${snapshot.readyForSubmit ? "Ready" : "Review required"} | ${snapshot.readyFields}/${snapshot.fields.length} fields ready`,
    "",
    "Field sequence:",
    fields,
    "",
    `Question: ${question.text}`,
    `Answer: ${question.answer ?? ""}`,
    `Citations:\n${portalCitationsText(question) || "No citations attached"}`,
    `Review status: ${formatStatus(question.status)} | Confidence: ${question.confidence ?? 0}% | ${risks}`,
    "",
    "Submission checks:",
    checks,
  ].join("\n\n");
}

function portalReviewerNote(question, retrieval) {
  const trace = claimTraceSnapshot(question);
  return [
    `${formatStatus(question.status)} by AnswerSeal`,
    `Confidence: ${question.confidence ?? 0}%`,
    `Retrieval: ${retrieval.verdictLabel} (${retrieval.topScore}% top match)`,
    `Claim trace: ${trace.bound}/${trace.claims.length} bound`,
  ].join(" | ");
}

function portalPacketSummaryText(question) {
  const retrieval = retrievalSnapshot(question);
  const trace = claimTraceSnapshot(question);
  return [
    `Question: ${question.text}`,
    `Answer: ${question.answer ?? ""}`,
    `Citations: ${portalCitationsText(question) || "No citations attached"}`,
    `Retrieval: ${retrieval.verdictLabel} | ${retrieval.topScore}% top match`,
    `Claim trace: ${trace.bound}/${trace.claims.length} bound | ${trace.conflicts} conflicts`,
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
  renderAnalytics();
  renderTrustRoom();
  renderFollowUps();
  renderGapAutopilot();
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
    "Portal Ready",
    "Portal Fields",
    "Deal Risk",
    "Deal Next Owner",
    "Pipeline Reviews",
    "Pipeline SLA Risk",
    "Trust Room",
    "Trust Shared",
    "Trust Views",
    "Follow-Ups Open",
    "Follow-Ups Routed",
    "Follow-Ups Evidence Gaps",
    "Follow-Ups SLA Risk",
    "Vault Score",
    "Connectors Approved",
    "Connectors Stale",
    "Connector Issues",
    "Import Rows",
    "Import Ready",
    "Import Duplicates",
    "Import Confidence",
    "Gap Tasks",
    "Gap High Risk",
    "Gap Requested",
    "Gap Fallbacks",
    "Trace",
    "Answer",
    "Sources",
    "Risks",
  ];
  const rows = state.questions.map((question) => {
    const trace = claimTraceSnapshot(question);
    const retrieval = retrievalSnapshot(question);
    const portal = portalSnapshot(question);
    const analytics = dealAnalyticsSnapshot();
    const pipeline = pipelineSnapshot();
    const trustRoom = trustRoomSnapshot();
    const followUps = followUpSnapshot();
    const connectors = connectorSnapshot();
    const importStudio = importSnapshot();
    const gaps = gapAutopilotSnapshot();
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
      portal.readyForSubmit ? "Ready" : "Review required",
      `${portal.readyFields}/${portal.fields.length} ready, ${portal.copiedFields} copied`,
      `${analytics.riskLabel} ${analytics.riskScore}/100`,
      analytics.nextOwner.name,
      pipeline.accounts.length,
      pipeline.slaRiskCount,
      trustRoom.status,
      `${trustRoom.sharedCount}/${trustRoom.answers.length}`,
      trustRoom.views,
      followUps.openCount,
      followUps.routedCount,
      followUps.evidenceCount,
      followUps.slaCount,
      `${connectors.score}%`,
      `${connectors.approvedCount}/${connectors.connectorCount}`,
      connectors.staleCount,
      connectors.issueCount,
      importStudio.rowCount,
      importStudio.readyCount,
      importStudio.duplicateCount,
      `${importStudio.averageConfidence}%`,
      gaps.taskCount,
      gaps.highRiskCount,
      gaps.requestedCount,
      gaps.fallbackCount,
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
  const deal = dealAnalyticsSnapshot();
  const pipeline = pipelineSnapshot();
  const trustRoom = trustRoomSnapshot();
  const followUps = followUpSnapshot();
  const connectors = connectorSnapshot();
  const importStudio = importSnapshot();
  const gaps = gapAutopilotSnapshot();
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
        <h1>AnswerSeal Review Pack v15</h1>
        <p>Exported ${escapeHtml(formatDate(new Date()))}</p>
        <h2>Private Workspace</h2>
        <p>${escapeHtml(workspaceAccount.company)} | ${escapeHtml(workspaceAccount.workspaceId)} | ${escapeHtml(workspaceAccount.plan)}</p>
        <p>Handoff readiness: ${handoff.ready}% | Owner routing: ${routing.routed}/${state.questions.length} assigned | Open risks: ${routing.openRisks}</p>
        <h2>Evidence Gap Autopilot</h2>
        <p>Open gaps: ${gaps.taskCount} | High risk: ${gaps.highRiskCount} | Evidence requested: ${gaps.requestedCount} | Fallbacks ready: ${gaps.fallbackCount}</p>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Severity</th>
              <th>Owner</th>
              <th>Request</th>
              <th>Risk</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${gaps.tasks
              .map(
                (task) => `
                  <tr>
                    <td>${escapeHtml(task.question.text)}</td>
                    <td class="${task.severity === "High" ? "risk" : "ok"}">${escapeHtml(task.severity)}</td>
                    <td>${escapeHtml(task.owner.name)}</td>
                    <td>${escapeHtml(task.request.title)}</td>
                    <td>${task.score}</td>
                    <td>${escapeHtml(task.status)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evidence Gap Digest</h2>
        <pre>${escapeHtml(gapDigestText(gaps))}</pre>
        <h2>Questionnaire Import Studio</h2>
        <p>Rows: ${importStudio.rowCount} | Ready: ${importStudio.readyCount} | Duplicates: ${importStudio.duplicateCount} | Cleanup: ${importStudio.cleanupCount} | Confidence: ${importStudio.averageConfidence}%</p>
        <table>
          <thead>
            <tr>
              <th>Imported Question</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Portal</th>
              <th>Confidence</th>
              <th>Issues</th>
            </tr>
          </thead>
          <tbody>
            ${importStudio.rows
              .map(
                (row) => `
                  <tr>
                    <td>${escapeHtml(row.question)}</td>
                    <td class="${row.canAdd ? "ok" : "risk"}">${escapeHtml(row.statusLabel)}</td>
                    <td>${escapeHtml(row.member.name)}</td>
                    <td>${escapeHtml(row.portal)}</td>
                    <td>${row.importConfidence}%</td>
                    <td>${escapeHtml(row.issues.join("; ") || "None")}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Import Digest</h2>
        <pre>${escapeHtml(importDigestText(importStudio))}</pre>
        <h2>Multi-Buyer Pipeline</h2>
        <p>Pipeline protected: ${formatMoney(pipeline.totalValue)} | Active reviews: ${pipeline.accounts.length} | SLA risk: ${pipeline.slaRiskCount} reviews | Proof reuse: ${pipeline.reuseRate}%</p>
        <table>
          <thead>
            <tr>
              <th>Buyer</th>
              <th>Stage</th>
              <th>Value</th>
              <th>Readiness</th>
              <th>SLA</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            ${pipeline.accounts
              .map(
                (account) => `
                  <tr>
                    <td>${escapeHtml(account.company)}</td>
                    <td>${escapeHtml(account.stage)}</td>
                    <td>${formatMoney(account.value)}</td>
                    <td>${account.readiness}%</td>
                    <td class="${account.slaRisk ? "risk" : "ok"}">${account.daysLeft} days left | ${account.slaRisk ? "Escalate" : "On track"}</td>
                    <td>${escapeHtml(account.nextAction)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Proof Reuse Graph</h2>
        <table>
          <thead>
            <tr>
              <th>Evidence</th>
              <th>Buyer Reviews</th>
              <th>Influenced Pipeline</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            ${pipeline.reuseGraph
              .slice(0, 6)
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.title)}</td>
                    <td>${item.accounts}</td>
                    <td>${formatMoney(item.value)}</td>
                    <td>${escapeHtml(item.owner)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Pipeline Digest</h2>
        <pre>${escapeHtml(pipelineDigestText(pipeline))}</pre>
        <h2>Buyer Trust Room</h2>
        <p>Status: ${escapeHtml(trustRoom.status)} | Room score: ${trustRoom.score}% | Shared answers: ${trustRoom.sharedCount} | Approval-ready: ${trustRoom.approvalReadyCount} | Buyer views: ${trustRoom.views}</p>
        <p>Scoped link: ${escapeHtml(trustRoom.url)} | Expires: ${escapeHtml(formatShortDate(trustRoom.expires))}</p>
        <table>
          <thead>
            <tr>
              <th>Answer</th>
              <th>Gate</th>
              <th>Sources</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            ${trustRoom.answers
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.question.text)}</td>
                    <td>${escapeHtml(item.gate)}</td>
                    <td>${escapeHtml(item.docs.map((doc) => doc.title).join("; "))}</td>
                    <td>${item.question.confidence}%</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Trust Room Evidence</h2>
        <table>
          <thead>
            <tr>
              <th>Evidence</th>
              <th>Visibility</th>
              <th>Safe Excerpt</th>
              <th>Uses</th>
            </tr>
          </thead>
          <tbody>
            ${trustRoom.evidencePackets
              .map(
                (packet) => `
                  <tr>
                    <td>${escapeHtml(packet.doc.title)}</td>
                    <td>${escapeHtml(packet.visibility)}</td>
                    <td>${escapeHtml(packet.excerpt)}</td>
                    <td>${packet.uses}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Trust Room Receipts</h2>
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Actor</th>
              <th>Time</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${trustRoom.receipts
              .slice(0, 7)
              .map(
                (receipt) => `
                  <tr>
                    <td>${escapeHtml(receipt.action)}</td>
                    <td>${escapeHtml(receipt.actor)}</td>
                    <td>${escapeHtml(formatAccessDate(receipt.at))}</td>
                    <td>${escapeHtml(receipt.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Trust Room Digest</h2>
        <pre>${escapeHtml(trustRoomDigestText(trustRoom))}</pre>
        <h2>Buyer Follow-Up Inbox</h2>
        <p>Open follow-ups: ${followUps.openCount} | Routed: ${followUps.routedCount} | Evidence gaps: ${followUps.evidenceCount} | SLA risk: ${followUps.slaCount}</p>
        <table>
          <thead>
            <tr>
              <th>Buyer Comment</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Due</th>
              <th>Source</th>
              <th>Linked Task</th>
            </tr>
          </thead>
          <tbody>
            ${followUps.items
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.comment)}</td>
                    <td class="${item.status === "Needs evidence" ? "risk" : "ok"}">${escapeHtml(item.status)}</td>
                    <td>${escapeHtml(item.owner.name)}</td>
                    <td>${escapeHtml(formatShortDate(item.due))} | ${item.daysLeft} days</td>
                    <td>${escapeHtml(item.sourceTitle)}</td>
                    <td>${escapeHtml(item.linkedTaskId ?? "Not linked")}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Follow-Up Digest</h2>
        <pre>${escapeHtml(followUpDigestText(followUps))}</pre>
        <h2>Evidence Vault Connectors</h2>
        <p>Vault score: ${connectors.score}% | Connectors: ${connectors.connectorCount} | Approved: ${connectors.approvedCount} | Stale: ${connectors.staleCount} | Issues: ${connectors.issueCount}</p>
        <table>
          <thead>
            <tr>
              <th>Connector</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Docs</th>
              <th>Health</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            ${connectors.connectors
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.provider)} / ${escapeHtml(item.name)}</td>
                    <td class="${item.status === "Approved" ? "ok" : "risk"}">${escapeHtml(item.status)}</td>
                    <td>${escapeHtml(item.owner.name)}</td>
                    <td>${item.docs}</td>
                    <td>${item.health}%</td>
                    <td>${escapeHtml(item.nextAction)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Vault Freshness Watch</h2>
        <table>
          <thead>
            <tr>
              <th>Evidence</th>
              <th>Connector</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${connectors.freshnessRows
              .slice(0, 8)
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.title)}</td>
                    <td>${escapeHtml(item.connectorName)}</td>
                    <td>${escapeHtml(item.owner)}</td>
                    <td class="${item.risk ? "risk" : "ok"}">${escapeHtml(item.status)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evidence Vault Digest</h2>
        <pre>${escapeHtml(connectorDigestText(connectors))}</pre>
        <h2>Deal Desk Analytics</h2>
        <p>Deal risk: ${escapeHtml(deal.riskLabel)} ${deal.riskScore}/100 | Time saved estimate: ${deal.timeSavedHours} hours | Next owner: ${escapeHtml(deal.nextOwner.name)}</p>
        <table>
          <thead>
            <tr>
              <th>Blocker</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${deal.blockers
              .map(
                (blocker) => `
                  <tr>
                    <td>${escapeHtml(blocker.label)}</td>
                    <td class="${blocker.level === "high" ? "risk" : "ok"}">${escapeHtml(blocker.value)}</td>
                    <td>${escapeHtml(blocker.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evidence ROI</h2>
        <table>
          <thead>
            <tr>
              <th>Evidence</th>
              <th>Impact</th>
              <th>Selected Answers</th>
              <th>Retrieval Hits</th>
              <th>Claim Hits</th>
            </tr>
          </thead>
          <tbody>
            ${deal.evidenceRoi
              .slice(0, 6)
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.doc.title)}</td>
                    <td>${item.impactScore}</td>
                    <td>${item.directUses}</td>
                    <td>${item.retrievalHits}</td>
                    <td>${item.claimHits}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Time Saved Estimate</h2>
        <table>
          <thead>
            <tr>
              <th>Motion</th>
              <th>Hours</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            ${deal.timeSavedBreakdown
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.label)}</td>
                    <td>${formatHours(item.hours)}</td>
                    <td>${escapeHtml(item.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Executive Digest</h2>
        <pre>${escapeHtml(dealDigestText(deal))}</pre>
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
        <h2>Buyer Portal Autofill</h2>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Portal</th>
              <th>Readiness</th>
              <th>Fields</th>
              <th>Submission Checks</th>
            </tr>
          </thead>
          <tbody>
            ${state.questions
              .map((question) => {
                const portal = portalSnapshot(question);
                const checks = portal.checks.map((check) => `${check.label}: ${check.status === "ready" ? "Ready" : "Blocked"}`).join("; ");
                return `
                  <tr>
                    <td>${escapeHtml(question.text)}</td>
                    <td>${escapeHtml(question.portal)}</td>
                    <td class="${portal.readyForSubmit ? "ok" : "risk"}">${portal.readyForSubmit ? "Ready" : "Review required"}</td>
                    <td>${portal.readyFields}/${portal.fields.length} ready | ${portal.copiedFields} copied</td>
                    <td>${escapeHtml(checks)}</td>
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
  addAudit("Review pack exported", "Review Pack v15 created with evidence gap autopilot, questionnaire import studio, evidence vault connectors, buyer follow-up inbox, trust room, multi-buyer pipeline, deal analytics, buyer portal autofill, retrieval rationale, and claim trace.");
  renderAudit();
  renderAccess();
  renderDataRoom();
  renderImportStudio();
  renderGapAutopilot();
  renderPipeline();
  renderTrustRoom();
  renderFollowUps();
  renderConnectors();
  renderAnalytics();
  showToast("Review Pack v15 exported.");
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
    portal: state.portal,
    handoff: state.handoff,
    trustRoom: state.trustRoom,
    followUps: state.followUps,
    connectors: state.connectors,
    importStudio: state.importStudio,
    gapActions: state.gapActions,
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
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeImportStudio(false);
  closeGapAutopilot(false);
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

function formatMoney(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
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

function daysUntil(value) {
  if (!value) return 999;
  const diff = new Date(value).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86400000));
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

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
