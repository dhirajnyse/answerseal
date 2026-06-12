const BUILD_VERSION = "v0.34 Alpha";
const STORAGE_KEY = "answerseal.workspace.v34";
const LEGACY_STORAGE_KEYS = [
  "answerseal.workspace.v33",
  "answerseal.workspace.v32",
  "answerseal.workspace.v31",
  "answerseal.workspace.v30",
  "answerseal.workspace.v29",
  "answerseal.workspace.v28",
  "answerseal.workspace.v27",
  "answerseal.workspace.v26",
  "answerseal.workspace.v25",
  "answerseal.workspace.v24",
  "answerseal.workspace.v23",
  "answerseal.workspace.v22",
  "answerseal.workspace.v21",
  "answerseal.workspace.v20",
  "answerseal.workspace.v19",
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
    runOpen: false,
    runActions: createInitialRunActions(),
    launchOpen: false,
    launchActions: createInitialLaunchActions(),
    networkOpen: false,
    networkActions: createInitialNetworkActions(),
    coachOpen: false,
    coachActions: createInitialCoachActions(),
    agentOpen: false,
    agentActions: createInitialAgentActions(),
    outcomeOpen: false,
    outcomeActions: createInitialOutcomeActions(),
    playbookOpen: false,
    playbookActions: createInitialPlaybookActions(),
    benchmarkOpen: false,
    benchmarkActions: createInitialBenchmarkActions(),
    orchestratorOpen: false,
    orchestratorActions: createInitialOrchestratorActions(),
    graphOpen: false,
    graphActions: createInitialGraphActions(),
    simulatorOpen: false,
    simulatorActions: createInitialSimulatorActions(),
    reinforcementOpen: false,
    reinforcementActions: createInitialReinforcementActions(),
    evaluationOpen: false,
    evaluationActions: createInitialEvaluationActions(),
    ledgerOpen: false,
    ledgerActions: createInitialLedgerActions(),
    policyOpen: false,
    policyActions: createInitialPolicyActions(),
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

function createInitialRunActions() {
  return {
    status: "Draft",
    startedAt: null,
    approvedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialLaunchActions() {
  return {
    status: "Draft",
    preparedAt: null,
    learningAppliedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialNetworkActions() {
  return {
    status: "Draft",
    exchangePreparedAt: null,
    signalAppliedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialCoachActions() {
  return {
    status: "Draft",
    generatedAt: null,
    appliedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialAgentActions() {
  return {
    status: "Draft",
    plannedAt: null,
    approvedAt: null,
    refreshedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialOutcomeActions() {
  return {
    status: "Draft",
    capturedAt: null,
    tunedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialPlaybookActions() {
  return {
    status: "Draft",
    generatedAt: null,
    appliedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialBenchmarkActions() {
  return {
    status: "Draft",
    preparedAt: null,
    appliedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialOrchestratorActions() {
  return {
    status: "Draft",
    plannedAt: null,
    executedAt: null,
    gateApprovedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialGraphActions() {
  return {
    status: "Draft",
    mappedAt: null,
    promotedAt: null,
    gateApprovedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialSimulatorActions() {
  return {
    status: "Draft",
    simulatedAt: null,
    appliedAt: null,
    gateApprovedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialReinforcementActions() {
  return {
    status: "Draft",
    replayedAt: null,
    tunedAt: null,
    networkPreparedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialEvaluationActions() {
  return {
    status: "Draft",
    evaluatedAt: null,
    testedAt: null,
    calibratedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialLedgerActions() {
  return {
    status: "Draft",
    recordedAt: null,
    approvedAt: null,
    publishedAt: null,
    lastCopiedAt: null,
    receipts: [],
  };
}

function createInitialPolicyActions() {
  return {
    status: "Draft",
    savedAt: null,
    simulatedAt: null,
    approvedAt: null,
    lastCopiedAt: null,
    receipts: [],
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
      runActions: normalizeRunActions(workspace.runActions ?? fresh.runActions),
      launchActions: normalizeLaunchActions(workspace.launchActions ?? fresh.launchActions),
      networkActions: normalizeNetworkActions(workspace.networkActions ?? fresh.networkActions),
      coachActions: normalizeCoachActions(workspace.coachActions ?? fresh.coachActions),
      agentActions: normalizeAgentActions(workspace.agentActions ?? fresh.agentActions),
      outcomeActions: normalizeOutcomeActions(workspace.outcomeActions ?? fresh.outcomeActions),
      playbookActions: normalizePlaybookActions(workspace.playbookActions ?? fresh.playbookActions),
      benchmarkActions: normalizeBenchmarkActions(workspace.benchmarkActions ?? fresh.benchmarkActions),
      orchestratorActions: normalizeOrchestratorActions(workspace.orchestratorActions ?? fresh.orchestratorActions),
      graphActions: normalizeGraphActions(workspace.graphActions ?? fresh.graphActions),
      simulatorActions: normalizeSimulatorActions(workspace.simulatorActions ?? fresh.simulatorActions),
      reinforcementActions: normalizeReinforcementActions(workspace.reinforcementActions ?? fresh.reinforcementActions),
      evaluationActions: normalizeEvaluationActions(workspace.evaluationActions ?? fresh.evaluationActions),
      ledgerActions: normalizeLedgerActions(workspace.ledgerActions ?? fresh.ledgerActions),
      policyActions: normalizePolicyActions(workspace.policyActions ?? fresh.policyActions),
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
      runOpen: false,
      launchOpen: false,
      networkOpen: false,
      coachOpen: false,
      agentOpen: false,
      outcomeOpen: false,
      playbookOpen: false,
      benchmarkOpen: false,
      orchestratorOpen: false,
      graphOpen: false,
      simulatorOpen: false,
      reinforcementOpen: false,
      evaluationOpen: false,
      ledgerOpen: false,
      policyOpen: false,
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

function normalizeRunActions(actions) {
  const status = ["Draft", "Running", "Human gate approved"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    startedAt: actions?.startedAt ?? null,
    approvedAt: actions?.approvedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeRunReceipt) : [],
  };
}

function normalizeRunReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `run-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Run planned"),
    detail: String(receipt?.detail ?? "Autonomous review run was planned with human gates."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeLaunchActions(actions) {
  const status = ["Draft", "Ready to launch", "Learning applied"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    preparedAt: actions?.preparedAt ?? null,
    learningAppliedAt: actions?.learningAppliedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeLaunchReceipt) : [],
  };
}

function normalizeLaunchReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `launch-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Launch planned"),
    detail: String(receipt?.detail ?? "Trust center launch action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeNetworkActions(actions) {
  const status = ["Draft", "Exchange prepared", "Signal applied"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    exchangePreparedAt: actions?.exchangePreparedAt ?? null,
    signalAppliedAt: actions?.signalAppliedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeNetworkReceipt) : [],
  };
}

function normalizeNetworkReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `network-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Network action planned"),
    detail: String(receipt?.detail ?? "Privacy-safe network learning action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeCoachActions(actions) {
  const status = ["Draft", "Plan generated", "Recommendation applied"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    generatedAt: actions?.generatedAt ?? null,
    appliedAt: actions?.appliedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeCoachReceipt) : [],
  };
}

function normalizeCoachReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `coach-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Coach action planned"),
    detail: String(receipt?.detail ?? "Adaptive proof coach action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeAgentActions(actions) {
  const status = ["Draft", "Plan prepared", "Human approved", "Refresh queued"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    plannedAt: actions?.plannedAt ?? null,
    approvedAt: actions?.approvedAt ?? null,
    refreshedAt: actions?.refreshedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeAgentReceipt) : [],
  };
}

function normalizeAgentReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `agent-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Agent action planned"),
    detail: String(receipt?.detail ?? "Governed evidence agent action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeOutcomeActions(actions) {
  const status = ["Draft", "Outcomes captured", "Memory tuned"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    capturedAt: actions?.capturedAt ?? null,
    tunedAt: actions?.tunedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeOutcomeReceipt) : [],
  };
}

function normalizeOutcomeReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `outcome-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Outcome memory action"),
    detail: String(receipt?.detail ?? "Trust outcome memory action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizePlaybookActions(actions) {
  const status = ["Draft", "Playbooks generated", "Strategy applied"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    generatedAt: actions?.generatedAt ?? null,
    appliedAt: actions?.appliedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizePlaybookReceipt) : [],
  };
}

function normalizePlaybookReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `playbook-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Playbook action"),
    detail: String(receipt?.detail ?? "Adaptive trust playbook action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeBenchmarkActions(actions) {
  const status = ["Draft", "Benchmarks prepared", "Benchmark applied"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    preparedAt: actions?.preparedAt ?? null,
    appliedAt: actions?.appliedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeBenchmarkReceipt) : [],
  };
}

function normalizeBenchmarkReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `benchmark-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Benchmark action"),
    detail: String(receipt?.detail ?? "Trust benchmark network action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeOrchestratorActions(actions) {
  const status = ["Draft", "Plan prepared", "Work routed", "Gate approved"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    plannedAt: actions?.plannedAt ?? null,
    executedAt: actions?.executedAt ?? null,
    gateApprovedAt: actions?.gateApprovedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeOrchestratorReceipt) : [],
  };
}

function normalizeOrchestratorReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `orchestrator-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Orchestrator action"),
    detail: String(receipt?.detail ?? "Autonomous trust orchestration action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeGraphActions(actions) {
  const status = ["Draft", "Graph mapped", "Pattern promoted", "Gate approved"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    mappedAt: actions?.mappedAt ?? null,
    promotedAt: actions?.promotedAt ?? null,
    gateApprovedAt: actions?.gateApprovedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeGraphReceipt) : [],
  };
}

function normalizeGraphReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `graph-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Trust graph action"),
    detail: String(receipt?.detail ?? "Federated trust graph action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeSimulatorActions(actions) {
  const status = ["Draft", "Simulated", "Recommendation queued", "Gate approved"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    simulatedAt: actions?.simulatedAt ?? null,
    appliedAt: actions?.appliedAt ?? null,
    gateApprovedAt: actions?.gateApprovedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeSimulatorReceipt) : [],
  };
}

function normalizeSimulatorReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `simulator-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Simulation action"),
    detail: String(receipt?.detail ?? "Trust policy simulation action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeReinforcementActions(actions) {
  const status = ["Draft", "Replay complete", "Rewards tuned", "Network package prepared"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    replayedAt: actions?.replayedAt ?? null,
    tunedAt: actions?.tunedAt ?? null,
    networkPreparedAt: actions?.networkPreparedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeReinforcementReceipt) : [],
  };
}

function normalizeReinforcementReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `reinforcement-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Reinforcement action"),
    detail: String(receipt?.detail ?? "Reinforcement control action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeEvaluationActions(actions) {
  const status = ["Draft", "Evaluation run", "Reward policy tested", "Reviewers calibrated"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    evaluatedAt: actions?.evaluatedAt ?? null,
    testedAt: actions?.testedAt ?? null,
    calibratedAt: actions?.calibratedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeEvaluationReceipt) : [],
  };
}

function normalizeEvaluationReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `evaluation-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Evaluation action"),
    detail: String(receipt?.detail ?? "Evaluation lab action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizeLedgerActions(actions) {
  const status = ["Draft", "Learning recorded", "Ledger approved", "Network package published"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    recordedAt: actions?.recordedAt ?? null,
    approvedAt: actions?.approvedAt ?? null,
    publishedAt: actions?.publishedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizeLedgerReceipt) : [],
  };
}

function normalizeLedgerReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `ledger-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Ledger action"),
    detail: String(receipt?.detail ?? "Learning ledger action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
}

function normalizePolicyActions(actions) {
  const status = ["Draft", "Policies saved", "Policy simulation run", "Policy approved"].includes(actions?.status) ? actions.status : "Draft";
  return {
    status,
    savedAt: actions?.savedAt ?? null,
    simulatedAt: actions?.simulatedAt ?? null,
    approvedAt: actions?.approvedAt ?? null,
    lastCopiedAt: actions?.lastCopiedAt ?? null,
    receipts: Array.isArray(actions?.receipts) ? actions.receipts.map(normalizePolicyReceipt) : [],
  };
}

function normalizePolicyReceipt(receipt) {
  return {
    id: String(receipt?.id ?? `policy-receipt-${Date.now()}`),
    action: String(receipt?.action ?? "Policy action"),
    detail: String(receipt?.detail ?? "Learning policy governor action was recorded."),
    at: receipt?.at ?? new Date().toISOString(),
  };
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
  runNavButton: document.querySelector("#runNavButton"),
  launchNavButton: document.querySelector("#launchNavButton"),
  networkNavButton: document.querySelector("#networkNavButton"),
  coachNavButton: document.querySelector("#coachNavButton"),
  agentNavButton: document.querySelector("#agentNavButton"),
  outcomeNavButton: document.querySelector("#outcomeNavButton"),
  playbookNavButton: document.querySelector("#playbookNavButton"),
  benchmarkNavButton: document.querySelector("#benchmarkNavButton"),
  orchestratorNavButton: document.querySelector("#orchestratorNavButton"),
  graphNavButton: document.querySelector("#graphNavButton"),
  simulatorNavButton: document.querySelector("#simulatorNavButton"),
  reinforcementNavButton: document.querySelector("#reinforcementNavButton"),
  evaluationNavButton: document.querySelector("#evaluationNavButton"),
  ledgerNavButton: document.querySelector("#ledgerNavButton"),
  policyNavButton: document.querySelector("#policyNavButton"),
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
  runBackdrop: document.querySelector("#runBackdrop"),
  runDrawer: document.querySelector("#runDrawer"),
  closeRunButton: document.querySelector("#closeRunButton"),
  runScore: document.querySelector("#runScore"),
  runStepCount: document.querySelector("#runStepCount"),
  runGateCount: document.querySelector("#runGateCount"),
  runReceiptCount: document.querySelector("#runReceiptCount"),
  runRecommended: document.querySelector("#runRecommended"),
  runStepList: document.querySelector("#runStepList"),
  runGateList: document.querySelector("#runGateList"),
  runReceiptList: document.querySelector("#runReceiptList"),
  runNextList: document.querySelector("#runNextList"),
  runDigest: document.querySelector("#runDigest"),
  startRunButton: document.querySelector("#startRunButton"),
  approveRunGateButton: document.querySelector("#approveRunGateButton"),
  copyRunDigestButton: document.querySelector("#copyRunDigestButton"),
  launchBackdrop: document.querySelector("#launchBackdrop"),
  launchDrawer: document.querySelector("#launchDrawer"),
  closeLaunchButton: document.querySelector("#closeLaunchButton"),
  launchScore: document.querySelector("#launchScore"),
  launchPacketCount: document.querySelector("#launchPacketCount"),
  launchSignalCount: document.querySelector("#launchSignalCount"),
  launchLearningCount: document.querySelector("#launchLearningCount"),
  launchStatus: document.querySelector("#launchStatus"),
  launchPacketList: document.querySelector("#launchPacketList"),
  launchAudienceList: document.querySelector("#launchAudienceList"),
  launchSignalList: document.querySelector("#launchSignalList"),
  launchLearningList: document.querySelector("#launchLearningList"),
  launchReceiptList: document.querySelector("#launchReceiptList"),
  launchDigest: document.querySelector("#launchDigest"),
  prepareLaunchButton: document.querySelector("#prepareLaunchButton"),
  applyLearningButton: document.querySelector("#applyLearningButton"),
  copyLaunchDigestButton: document.querySelector("#copyLaunchDigestButton"),
  networkBackdrop: document.querySelector("#networkBackdrop"),
  networkDrawer: document.querySelector("#networkDrawer"),
  closeNetworkButton: document.querySelector("#closeNetworkButton"),
  networkPrivacyScore: document.querySelector("#networkPrivacyScore"),
  networkPatternCount: document.querySelector("#networkPatternCount"),
  networkRewardCount: document.querySelector("#networkRewardCount"),
  networkTenantCount: document.querySelector("#networkTenantCount"),
  networkStatus: document.querySelector("#networkStatus"),
  networkPatternList: document.querySelector("#networkPatternList"),
  networkGuardrailList: document.querySelector("#networkGuardrailList"),
  networkRewardList: document.querySelector("#networkRewardList"),
  networkTenantList: document.querySelector("#networkTenantList"),
  networkReceiptList: document.querySelector("#networkReceiptList"),
  networkDigest: document.querySelector("#networkDigest"),
  prepareNetworkButton: document.querySelector("#prepareNetworkButton"),
  applyNetworkButton: document.querySelector("#applyNetworkButton"),
  copyNetworkDigestButton: document.querySelector("#copyNetworkDigestButton"),
  coachBackdrop: document.querySelector("#coachBackdrop"),
  coachDrawer: document.querySelector("#coachDrawer"),
  closeCoachButton: document.querySelector("#closeCoachButton"),
  coachScore: document.querySelector("#coachScore"),
  coachProofCount: document.querySelector("#coachProofCount"),
  coachRewriteCount: document.querySelector("#coachRewriteCount"),
  coachRouteCount: document.querySelector("#coachRouteCount"),
  coachStatus: document.querySelector("#coachStatus"),
  coachProofList: document.querySelector("#coachProofList"),
  coachRewriteList: document.querySelector("#coachRewriteList"),
  coachRouteList: document.querySelector("#coachRouteList"),
  coachOutcomeList: document.querySelector("#coachOutcomeList"),
  coachReceiptList: document.querySelector("#coachReceiptList"),
  coachDigest: document.querySelector("#coachDigest"),
  generateCoachButton: document.querySelector("#generateCoachButton"),
  applyCoachButton: document.querySelector("#applyCoachButton"),
  copyCoachDigestButton: document.querySelector("#copyCoachDigestButton"),
  agentBackdrop: document.querySelector("#agentBackdrop"),
  agentDrawer: document.querySelector("#agentDrawer"),
  closeAgentButton: document.querySelector("#closeAgentButton"),
  agentControlScore: document.querySelector("#agentControlScore"),
  agentTaskCount: document.querySelector("#agentTaskCount"),
  agentLimitCount: document.querySelector("#agentLimitCount"),
  agentReceiptCount: document.querySelector("#agentReceiptCount"),
  agentStatus: document.querySelector("#agentStatus"),
  agentTaskList: document.querySelector("#agentTaskList"),
  agentLimitList: document.querySelector("#agentLimitList"),
  agentReceiptList: document.querySelector("#agentReceiptList"),
  agentRefreshList: document.querySelector("#agentRefreshList"),
  agentImpactList: document.querySelector("#agentImpactList"),
  agentDigest: document.querySelector("#agentDigest"),
  prepareAgentButton: document.querySelector("#prepareAgentButton"),
  approveAgentButton: document.querySelector("#approveAgentButton"),
  queueRefreshButton: document.querySelector("#queueRefreshButton"),
  copyAgentDigestButton: document.querySelector("#copyAgentDigestButton"),
  outcomeBackdrop: document.querySelector("#outcomeBackdrop"),
  outcomeDrawer: document.querySelector("#outcomeDrawer"),
  closeOutcomeButton: document.querySelector("#closeOutcomeButton"),
  outcomeMemoryScore: document.querySelector("#outcomeMemoryScore"),
  outcomeEventCount: document.querySelector("#outcomeEventCount"),
  outcomeRewardCount: document.querySelector("#outcomeRewardCount"),
  outcomePatternCount: document.querySelector("#outcomePatternCount"),
  outcomeStatus: document.querySelector("#outcomeStatus"),
  outcomeEventList: document.querySelector("#outcomeEventList"),
  outcomeRewardList: document.querySelector("#outcomeRewardList"),
  outcomeGuardrailList: document.querySelector("#outcomeGuardrailList"),
  outcomePlaybookList: document.querySelector("#outcomePlaybookList"),
  outcomeReceiptList: document.querySelector("#outcomeReceiptList"),
  outcomeDigest: document.querySelector("#outcomeDigest"),
  captureOutcomeButton: document.querySelector("#captureOutcomeButton"),
  tuneMemoryButton: document.querySelector("#tuneMemoryButton"),
  copyOutcomeDigestButton: document.querySelector("#copyOutcomeDigestButton"),
  playbookBackdrop: document.querySelector("#playbookBackdrop"),
  playbookDrawer: document.querySelector("#playbookDrawer"),
  closePlaybookButton: document.querySelector("#closePlaybookButton"),
  playbookStrategyScore: document.querySelector("#playbookStrategyScore"),
  playbookCount: document.querySelector("#playbookCount"),
  playbookGateCount: document.querySelector("#playbookGateCount"),
  playbookReceiptCount: document.querySelector("#playbookReceiptCount"),
  playbookStatus: document.querySelector("#playbookStatus"),
  playbookList: document.querySelector("#playbookList"),
  playbookSequenceList: document.querySelector("#playbookSequenceList"),
  playbookGateList: document.querySelector("#playbookGateList"),
  playbookReceiptList: document.querySelector("#playbookReceiptList"),
  playbookDigest: document.querySelector("#playbookDigest"),
  generatePlaybookButton: document.querySelector("#generatePlaybookButton"),
  applyPlaybookButton: document.querySelector("#applyPlaybookButton"),
  copyPlaybookDigestButton: document.querySelector("#copyPlaybookDigestButton"),
  benchmarkBackdrop: document.querySelector("#benchmarkBackdrop"),
  benchmarkDrawer: document.querySelector("#benchmarkDrawer"),
  closeBenchmarkButton: document.querySelector("#closeBenchmarkButton"),
  benchmarkReadinessScore: document.querySelector("#benchmarkReadinessScore"),
  benchmarkBandCount: document.querySelector("#benchmarkBandCount"),
  benchmarkFrictionCount: document.querySelector("#benchmarkFrictionCount"),
  benchmarkReceiptCount: document.querySelector("#benchmarkReceiptCount"),
  benchmarkStatus: document.querySelector("#benchmarkStatus"),
  benchmarkBandList: document.querySelector("#benchmarkBandList"),
  benchmarkFrictionList: document.querySelector("#benchmarkFrictionList"),
  benchmarkInvestmentList: document.querySelector("#benchmarkInvestmentList"),
  benchmarkGuardrailList: document.querySelector("#benchmarkGuardrailList"),
  benchmarkReceiptList: document.querySelector("#benchmarkReceiptList"),
  benchmarkDigest: document.querySelector("#benchmarkDigest"),
  prepareBenchmarkButton: document.querySelector("#prepareBenchmarkButton"),
  applyBenchmarkButton: document.querySelector("#applyBenchmarkButton"),
  copyBenchmarkDigestButton: document.querySelector("#copyBenchmarkDigestButton"),
  orchestratorBackdrop: document.querySelector("#orchestratorBackdrop"),
  orchestratorDrawer: document.querySelector("#orchestratorDrawer"),
  closeOrchestratorButton: document.querySelector("#closeOrchestratorButton"),
  orchestratorScore: document.querySelector("#orchestratorScore"),
  orchestratorPlanCount: document.querySelector("#orchestratorPlanCount"),
  orchestratorGateCount: document.querySelector("#orchestratorGateCount"),
  orchestratorReceiptCount: document.querySelector("#orchestratorReceiptCount"),
  orchestratorStatus: document.querySelector("#orchestratorStatus"),
  orchestratorPriorityList: document.querySelector("#orchestratorPriorityList"),
  orchestratorPlanList: document.querySelector("#orchestratorPlanList"),
  orchestratorGateList: document.querySelector("#orchestratorGateList"),
  orchestratorLearningList: document.querySelector("#orchestratorLearningList"),
  orchestratorReceiptList: document.querySelector("#orchestratorReceiptList"),
  orchestratorDigest: document.querySelector("#orchestratorDigest"),
  prepareOrchestratorButton: document.querySelector("#prepareOrchestratorButton"),
  executeOrchestratorButton: document.querySelector("#executeOrchestratorButton"),
  approveOrchestratorGateButton: document.querySelector("#approveOrchestratorGateButton"),
  copyOrchestratorDigestButton: document.querySelector("#copyOrchestratorDigestButton"),
  graphBackdrop: document.querySelector("#graphBackdrop"),
  graphDrawer: document.querySelector("#graphDrawer"),
  closeGraphButton: document.querySelector("#closeGraphButton"),
  graphScore: document.querySelector("#graphScore"),
  graphNodeCount: document.querySelector("#graphNodeCount"),
  graphEdgeCount: document.querySelector("#graphEdgeCount"),
  graphDriftCount: document.querySelector("#graphDriftCount"),
  graphStatus: document.querySelector("#graphStatus"),
  graphNodeList: document.querySelector("#graphNodeList"),
  graphEdgeList: document.querySelector("#graphEdgeList"),
  graphPromotionList: document.querySelector("#graphPromotionList"),
  graphDriftList: document.querySelector("#graphDriftList"),
  graphGateList: document.querySelector("#graphGateList"),
  graphReceiptList: document.querySelector("#graphReceiptList"),
  graphDigest: document.querySelector("#graphDigest"),
  mapGraphButton: document.querySelector("#mapGraphButton"),
  promoteGraphButton: document.querySelector("#promoteGraphButton"),
  approveGraphGateButton: document.querySelector("#approveGraphGateButton"),
  copyGraphDigestButton: document.querySelector("#copyGraphDigestButton"),
  simulatorBackdrop: document.querySelector("#simulatorBackdrop"),
  simulatorDrawer: document.querySelector("#simulatorDrawer"),
  closeSimulatorButton: document.querySelector("#closeSimulatorButton"),
  simulatorScore: document.querySelector("#simulatorScore"),
  simulatorScenarioCount: document.querySelector("#simulatorScenarioCount"),
  simulatorLift: document.querySelector("#simulatorLift"),
  simulatorBlockCount: document.querySelector("#simulatorBlockCount"),
  simulatorStatus: document.querySelector("#simulatorStatus"),
  simulatorScenarioList: document.querySelector("#simulatorScenarioList"),
  simulatorForecastList: document.querySelector("#simulatorForecastList"),
  simulatorGateList: document.querySelector("#simulatorGateList"),
  simulatorActionList: document.querySelector("#simulatorActionList"),
  simulatorReceiptList: document.querySelector("#simulatorReceiptList"),
  simulatorDigest: document.querySelector("#simulatorDigest"),
  runSimulatorButton: document.querySelector("#runSimulatorButton"),
  applySimulationButton: document.querySelector("#applySimulationButton"),
  approveSimulationGateButton: document.querySelector("#approveSimulationGateButton"),
  copySimulatorDigestButton: document.querySelector("#copySimulatorDigestButton"),
  reinforcementBackdrop: document.querySelector("#reinforcementBackdrop"),
  reinforcementDrawer: document.querySelector("#reinforcementDrawer"),
  closeReinforcementButton: document.querySelector("#closeReinforcementButton"),
  reinforcementScore: document.querySelector("#reinforcementScore"),
  reinforcementReplayCount: document.querySelector("#reinforcementReplayCount"),
  reinforcementRewardCount: document.querySelector("#reinforcementRewardCount"),
  reinforcementNetworkLift: document.querySelector("#reinforcementNetworkLift"),
  reinforcementStatus: document.querySelector("#reinforcementStatus"),
  reinforcementReplayList: document.querySelector("#reinforcementReplayList"),
  reinforcementRewardList: document.querySelector("#reinforcementRewardList"),
  reinforcementBoundaryList: document.querySelector("#reinforcementBoundaryList"),
  reinforcementActionList: document.querySelector("#reinforcementActionList"),
  reinforcementReceiptList: document.querySelector("#reinforcementReceiptList"),
  reinforcementDigest: document.querySelector("#reinforcementDigest"),
  replayReinforcementButton: document.querySelector("#replayReinforcementButton"),
  tuneRewardButton: document.querySelector("#tuneRewardButton"),
  prepareNetworkLearningButton: document.querySelector("#prepareNetworkLearningButton"),
  copyReinforcementDigestButton: document.querySelector("#copyReinforcementDigestButton"),
  evaluationBackdrop: document.querySelector("#evaluationBackdrop"),
  evaluationDrawer: document.querySelector("#evaluationDrawer"),
  closeEvaluationButton: document.querySelector("#closeEvaluationButton"),
  evaluationScore: document.querySelector("#evaluationScore"),
  evaluationSetCount: document.querySelector("#evaluationSetCount"),
  evaluationRegressionCount: document.querySelector("#evaluationRegressionCount"),
  evaluationCalibrationScore: document.querySelector("#evaluationCalibrationScore"),
  evaluationStatus: document.querySelector("#evaluationStatus"),
  evaluationSetList: document.querySelector("#evaluationSetList"),
  evaluationRewardTestList: document.querySelector("#evaluationRewardTestList"),
  evaluationRegressionList: document.querySelector("#evaluationRegressionList"),
  evaluationCalibrationList: document.querySelector("#evaluationCalibrationList"),
  evaluationActionList: document.querySelector("#evaluationActionList"),
  evaluationReceiptList: document.querySelector("#evaluationReceiptList"),
  evaluationDigest: document.querySelector("#evaluationDigest"),
  runEvaluationButton: document.querySelector("#runEvaluationButton"),
  testRewardPolicyButton: document.querySelector("#testRewardPolicyButton"),
  calibrateReviewersButton: document.querySelector("#calibrateReviewersButton"),
  copyEvaluationDigestButton: document.querySelector("#copyEvaluationDigestButton"),
  ledgerBackdrop: document.querySelector("#ledgerBackdrop"),
  ledgerDrawer: document.querySelector("#ledgerDrawer"),
  closeLedgerButton: document.querySelector("#closeLedgerButton"),
  ledgerScore: document.querySelector("#ledgerScore"),
  ledgerEntryCount: document.querySelector("#ledgerEntryCount"),
  ledgerNetworkLift: document.querySelector("#ledgerNetworkLift"),
  ledgerGateCount: document.querySelector("#ledgerGateCount"),
  ledgerStatus: document.querySelector("#ledgerStatus"),
  ledgerEntryList: document.querySelector("#ledgerEntryList"),
  ledgerBenefitList: document.querySelector("#ledgerBenefitList"),
  ledgerProvenanceList: document.querySelector("#ledgerProvenanceList"),
  ledgerGateList: document.querySelector("#ledgerGateList"),
  ledgerAccountingList: document.querySelector("#ledgerAccountingList"),
  ledgerActionList: document.querySelector("#ledgerActionList"),
  ledgerReceiptList: document.querySelector("#ledgerReceiptList"),
  ledgerDigest: document.querySelector("#ledgerDigest"),
  recordLedgerButton: document.querySelector("#recordLedgerButton"),
  approveLedgerButton: document.querySelector("#approveLedgerButton"),
  publishLedgerButton: document.querySelector("#publishLedgerButton"),
  copyLedgerDigestButton: document.querySelector("#copyLedgerDigestButton"),
  policyBackdrop: document.querySelector("#policyBackdrop"),
  policyDrawer: document.querySelector("#policyDrawer"),
  closePolicyButton: document.querySelector("#closePolicyButton"),
  policyScore: document.querySelector("#policyScore"),
  policyRuleCount: document.querySelector("#policyRuleCount"),
  policyStopCount: document.querySelector("#policyStopCount"),
  policySimulationLift: document.querySelector("#policySimulationLift"),
  policyStatus: document.querySelector("#policyStatus"),
  policyRuleList: document.querySelector("#policyRuleList"),
  policyRoleList: document.querySelector("#policyRoleList"),
  policyStopList: document.querySelector("#policyStopList"),
  policySimulationList: document.querySelector("#policySimulationList"),
  policyExceptionList: document.querySelector("#policyExceptionList"),
  policyActionList: document.querySelector("#policyActionList"),
  policyReceiptList: document.querySelector("#policyReceiptList"),
  policyDigest: document.querySelector("#policyDigest"),
  savePolicyButton: document.querySelector("#savePolicyButton"),
  simulatePolicyButton: document.querySelector("#simulatePolicyButton"),
  approvePolicyButton: document.querySelector("#approvePolicyButton"),
  copyPolicyDigestButton: document.querySelector("#copyPolicyDigestButton"),
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
  elements.runNavButton.addEventListener("click", openAutonomousRuns);
  elements.launchNavButton.addEventListener("click", openTrustLaunchpad);
  elements.networkNavButton.addEventListener("click", openLearningNetwork);
  elements.coachNavButton.addEventListener("click", openAdaptiveCoach);
  elements.agentNavButton.addEventListener("click", openEvidenceAgent);
  elements.outcomeNavButton.addEventListener("click", openOutcomeMemory);
  elements.playbookNavButton.addEventListener("click", openAdaptivePlaybooks);
  elements.benchmarkNavButton.addEventListener("click", openTrustBenchmarks);
  elements.orchestratorNavButton.addEventListener("click", openTrustOrchestrator);
  elements.graphNavButton.addEventListener("click", openFederatedGraph);
  elements.simulatorNavButton.addEventListener("click", openPolicySimulator);
  elements.reinforcementNavButton.addEventListener("click", openReinforcementControl);
  elements.evaluationNavButton.addEventListener("click", openEvaluationLab);
  elements.ledgerNavButton.addEventListener("click", openLearningLedger);
  elements.policyNavButton.addEventListener("click", openLearningPolicyGovernor);
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
    renderAutonomousRuns();
    renderTrustLaunchpad();
    renderLearningNetwork();
    renderAdaptiveCoach();
    renderEvidenceAgent();
    renderOutcomeMemory();
    renderAdaptivePlaybooks();
    renderTrustBenchmarks();
    renderTrustOrchestrator();
    renderFederatedGraph();
    renderPolicySimulator();
    renderReinforcementControl();
    renderEvaluationLab();
    renderLearningLedger();
    renderLearningPolicyGovernor();
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
  elements.closeRunButton.addEventListener("click", closeAutonomousRuns);
  elements.runBackdrop.addEventListener("click", closeAutonomousRuns);
  elements.startRunButton.addEventListener("click", startAutonomousRun);
  elements.approveRunGateButton.addEventListener("click", approveRunGate);
  elements.copyRunDigestButton.addEventListener("click", copyRunDigest);
  elements.closeLaunchButton.addEventListener("click", closeTrustLaunchpad);
  elements.launchBackdrop.addEventListener("click", closeTrustLaunchpad);
  elements.prepareLaunchButton.addEventListener("click", prepareTrustLaunch);
  elements.applyLearningButton.addEventListener("click", applyLearningLoop);
  elements.copyLaunchDigestButton.addEventListener("click", copyLaunchDigest);
  elements.closeNetworkButton.addEventListener("click", closeLearningNetwork);
  elements.networkBackdrop.addEventListener("click", closeLearningNetwork);
  elements.prepareNetworkButton.addEventListener("click", prepareNetworkExchange);
  elements.applyNetworkButton.addEventListener("click", applyNetworkSignal);
  elements.copyNetworkDigestButton.addEventListener("click", copyNetworkDigest);
  elements.closeCoachButton.addEventListener("click", closeAdaptiveCoach);
  elements.coachBackdrop.addEventListener("click", closeAdaptiveCoach);
  elements.generateCoachButton.addEventListener("click", generateCoachPlan);
  elements.applyCoachButton.addEventListener("click", applyCoachRecommendation);
  elements.copyCoachDigestButton.addEventListener("click", copyCoachDigest);
  elements.closeAgentButton.addEventListener("click", closeEvidenceAgent);
  elements.agentBackdrop.addEventListener("click", closeEvidenceAgent);
  elements.prepareAgentButton.addEventListener("click", prepareAgentPlan);
  elements.approveAgentButton.addEventListener("click", approveAgentPlan);
  elements.queueRefreshButton.addEventListener("click", queueAgentRefresh);
  elements.copyAgentDigestButton.addEventListener("click", copyAgentDigest);
  elements.closeOutcomeButton.addEventListener("click", closeOutcomeMemory);
  elements.outcomeBackdrop.addEventListener("click", closeOutcomeMemory);
  elements.captureOutcomeButton.addEventListener("click", captureOutcomes);
  elements.tuneMemoryButton.addEventListener("click", tuneOutcomeMemory);
  elements.copyOutcomeDigestButton.addEventListener("click", copyOutcomeDigest);
  elements.closePlaybookButton.addEventListener("click", closeAdaptivePlaybooks);
  elements.playbookBackdrop.addEventListener("click", closeAdaptivePlaybooks);
  elements.generatePlaybookButton.addEventListener("click", generateTrustPlaybooks);
  elements.applyPlaybookButton.addEventListener("click", applyTopPlaybook);
  elements.copyPlaybookDigestButton.addEventListener("click", copyPlaybookDigest);
  elements.closeBenchmarkButton.addEventListener("click", closeTrustBenchmarks);
  elements.benchmarkBackdrop.addEventListener("click", closeTrustBenchmarks);
  elements.prepareBenchmarkButton.addEventListener("click", prepareTrustBenchmarks);
  elements.applyBenchmarkButton.addEventListener("click", applyBenchmarkInsight);
  elements.copyBenchmarkDigestButton.addEventListener("click", copyBenchmarkDigest);
  elements.closeOrchestratorButton.addEventListener("click", closeTrustOrchestrator);
  elements.orchestratorBackdrop.addEventListener("click", closeTrustOrchestrator);
  elements.prepareOrchestratorButton.addEventListener("click", prepareTrustOrchestrator);
  elements.executeOrchestratorButton.addEventListener("click", executeTrustOrchestrator);
  elements.approveOrchestratorGateButton.addEventListener("click", approveOrchestratorGate);
  elements.copyOrchestratorDigestButton.addEventListener("click", copyOrchestratorDigest);
  elements.closeGraphButton.addEventListener("click", closeFederatedGraph);
  elements.graphBackdrop.addEventListener("click", closeFederatedGraph);
  elements.mapGraphButton.addEventListener("click", mapFederatedGraph);
  elements.promoteGraphButton.addEventListener("click", promoteGraphPattern);
  elements.approveGraphGateButton.addEventListener("click", approveGraphGate);
  elements.copyGraphDigestButton.addEventListener("click", copyGraphDigest);
  elements.closeSimulatorButton.addEventListener("click", closePolicySimulator);
  elements.simulatorBackdrop.addEventListener("click", closePolicySimulator);
  elements.runSimulatorButton.addEventListener("click", runPolicySimulations);
  elements.applySimulationButton.addEventListener("click", applyPolicySimulation);
  elements.approveSimulationGateButton.addEventListener("click", approveSimulationGate);
  elements.copySimulatorDigestButton.addEventListener("click", copySimulatorDigest);
  elements.closeReinforcementButton.addEventListener("click", closeReinforcementControl);
  elements.reinforcementBackdrop.addEventListener("click", closeReinforcementControl);
  elements.replayReinforcementButton.addEventListener("click", replayReinforcementPredictions);
  elements.tuneRewardButton.addEventListener("click", tuneReinforcementRewards);
  elements.prepareNetworkLearningButton.addEventListener("click", prepareReinforcementNetworkPackage);
  elements.copyReinforcementDigestButton.addEventListener("click", copyReinforcementDigest);
  elements.closeEvaluationButton.addEventListener("click", closeEvaluationLab);
  elements.evaluationBackdrop.addEventListener("click", closeEvaluationLab);
  elements.runEvaluationButton.addEventListener("click", runEvaluationLab);
  elements.testRewardPolicyButton.addEventListener("click", testEvaluationRewardPolicy);
  elements.calibrateReviewersButton.addEventListener("click", calibrateEvaluationReviewers);
  elements.copyEvaluationDigestButton.addEventListener("click", copyEvaluationDigest);
  elements.closeLedgerButton.addEventListener("click", closeLearningLedger);
  elements.ledgerBackdrop.addEventListener("click", closeLearningLedger);
  elements.recordLedgerButton.addEventListener("click", recordLearningLedger);
  elements.approveLedgerButton.addEventListener("click", approveLearningLedger);
  elements.publishLedgerButton.addEventListener("click", publishLearningLedger);
  elements.copyLedgerDigestButton.addEventListener("click", copyLearningLedgerDigest);
  elements.closePolicyButton.addEventListener("click", closeLearningPolicyGovernor);
  elements.policyBackdrop.addEventListener("click", closeLearningPolicyGovernor);
  elements.savePolicyButton.addEventListener("click", saveLearningPolicy);
  elements.simulatePolicyButton.addEventListener("click", simulateLearningPolicy);
  elements.approvePolicyButton.addEventListener("click", approveLearningPolicy);
  elements.copyPolicyDigestButton.addEventListener("click", copyLearningPolicyDigest);
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
    if (state.runOpen) closeAutonomousRuns();
    if (state.launchOpen) closeTrustLaunchpad();
    if (state.networkOpen) closeLearningNetwork();
    if (state.coachOpen) closeAdaptiveCoach();
    if (state.agentOpen) closeEvidenceAgent();
    if (state.outcomeOpen) closeOutcomeMemory();
    if (state.playbookOpen) closeAdaptivePlaybooks();
    if (state.benchmarkOpen) closeTrustBenchmarks();
    if (state.orchestratorOpen) closeTrustOrchestrator();
    if (state.graphOpen) closeFederatedGraph();
    if (state.simulatorOpen) closePolicySimulator();
    if (state.reinforcementOpen) closeReinforcementControl();
    if (state.evaluationOpen) closeEvaluationLab();
    if (state.ledgerOpen) closeLearningLedger();
    if (state.policyOpen) closeLearningPolicyGovernor();
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
  if (hash === "runs" || hash === "run" || hash === "agent") openAutonomousRuns();
  if (hash === "launch" || hash === "trust-center" || hash === "learning") openTrustLaunchpad();
  if (hash === "network" || hash === "learning-network" || hash === "privacy-network") openLearningNetwork();
  if (hash === "coach" || hash === "proof-coach" || hash === "adaptive-coach") openAdaptiveCoach();
  if (hash === "agent" || hash === "evidence-agent" || hash === "governed-agent") openEvidenceAgent();
  if (hash === "outcomes" || hash === "outcome-memory" || hash === "trust-memory" || hash === "memory") openOutcomeMemory();
  if (hash === "playbooks" || hash === "trust-playbooks" || hash === "adaptive-playbooks" || hash === "strategy") openAdaptivePlaybooks();
  if (hash === "benchmarks" || hash === "benchmark" || hash === "trust-benchmarks" || hash === "readiness") openTrustBenchmarks();
  if (hash === "orchestrator" || hash === "orchestration" || hash === "autonomous-orchestrator" || hash === "work-plan") openTrustOrchestrator();
  if (hash === "graph" || hash === "trust-graph" || hash === "federated-graph" || hash === "federation") openFederatedGraph();
  if (hash === "simulator" || hash === "policy-simulator" || hash === "simulation" || hash === "rehearsal") openPolicySimulator();
  if (hash === "control" || hash === "reinforcement" || hash === "reinforcement-control" || hash === "control-room") openReinforcementControl();
  if (hash === "evaluation" || hash === "eval" || hash === "evaluation-lab" || hash === "eval-lab") openEvaluationLab();
  if (hash === "ledger" || hash === "learning-ledger" || hash === "learning-receipts" || hash === "closed-loop-ledger") openLearningLedger();
  if (hash === "policy" || hash === "learning-policy" || hash === "policy-governor" || hash === "governor") openLearningPolicyGovernor();
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
  renderAutonomousRuns();
  renderTrustLaunchpad();
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  renderAdaptivePlaybooks();
  renderTrustBenchmarks();
  renderTrustOrchestrator();
  renderFederatedGraph();
  renderPolicySimulator();
  renderReinforcementControl();
  renderEvaluationLab();
  renderLearningLedger();
  renderLearningPolicyGovernor();
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
      renderAutonomousRuns();
      renderTrustLaunchpad();
      renderLearningNetwork();
      renderAdaptiveCoach();
      renderEvidenceAgent();
      renderOutcomeMemory();
      renderReinforcementControl();
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
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
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closePolicySimulator(false);
  closeReinforcementControl(false);
  closeEvaluationLab(false);
  closeLearningLedger(false);
  closeLearningPolicyGovernor(false);
  const activeButton = target === "evidence" ? elements.evidenceNavButton : elements.reviewNavButton;
  setActiveNav(activeButton);

  if (target === "evidence") {
    elements.evidencePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  document.querySelector("#review-desk").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(activeButton) {
  if (activeButton !== elements.outcomeNavButton && state.outcomeOpen) {
    closeOutcomeMemory(false);
  }
  if (activeButton !== elements.playbookNavButton && state.playbookOpen) {
    closeAdaptivePlaybooks(false);
  }
  if (activeButton !== elements.benchmarkNavButton && state.benchmarkOpen) {
    closeTrustBenchmarks(false);
  }
  if (activeButton !== elements.orchestratorNavButton && state.orchestratorOpen) {
    closeTrustOrchestrator(false);
  }
  if (activeButton !== elements.graphNavButton && state.graphOpen) {
    closeFederatedGraph(false);
  }
  if (activeButton !== elements.simulatorNavButton && state.simulatorOpen) {
    closePolicySimulator(false);
  }
  if (activeButton !== elements.reinforcementNavButton && state.reinforcementOpen) {
    closeReinforcementControl(false);
  }
  if (activeButton !== elements.evaluationNavButton && state.evaluationOpen) {
    closeEvaluationLab(false);
  }
  if (activeButton !== elements.ledgerNavButton && state.ledgerOpen) {
    closeLearningLedger(false);
  }
  if (activeButton !== elements.policyNavButton && state.policyOpen) {
    closeLearningPolicyGovernor(false);
  }

  [
    elements.reviewNavButton,
    elements.importNavButton,
    elements.gapNavButton,
    elements.runNavButton,
    elements.launchNavButton,
    elements.networkNavButton,
    elements.coachNavButton,
    elements.agentNavButton,
    elements.outcomeNavButton,
    elements.playbookNavButton,
    elements.benchmarkNavButton,
    elements.orchestratorNavButton,
    elements.graphNavButton,
    elements.simulatorNavButton,
    elements.reinforcementNavButton,
    elements.evaluationNavButton,
    elements.ledgerNavButton,
    elements.policyNavButton,
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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

function openAutonomousRuns() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closePortal(false);
  state.runOpen = true;
  setActiveNav(elements.runNavButton);
  elements.runBackdrop.hidden = false;
  elements.runDrawer.classList.add("is-open");
  elements.runDrawer.setAttribute("aria-hidden", "false");
  renderAutonomousRuns();
  elements.startRunButton.focus();
}

function closeAutonomousRuns(activateReview = true) {
  if (!state.runOpen && elements.runDrawer.getAttribute("aria-hidden") === "true") return;
  state.runOpen = false;
  elements.runDrawer.classList.remove("is-open");
  elements.runDrawer.setAttribute("aria-hidden", "true");
  elements.runBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openTrustLaunchpad() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeWorkspace(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  state.launchOpen = true;
  setActiveNav(elements.launchNavButton);
  elements.launchBackdrop.hidden = false;
  elements.launchDrawer.classList.add("is-open");
  elements.launchDrawer.setAttribute("aria-hidden", "false");
  renderTrustLaunchpad();
  elements.prepareLaunchButton.focus();
}

function closeTrustLaunchpad(activateReview = true) {
  if (!state.launchOpen && elements.launchDrawer.getAttribute("aria-hidden") === "true") return;
  state.launchOpen = false;
  elements.launchDrawer.classList.remove("is-open");
  elements.launchDrawer.setAttribute("aria-hidden", "true");
  elements.launchBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openLearningNetwork() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closePortal(false);
  state.networkOpen = true;
  setActiveNav(elements.networkNavButton);
  elements.networkBackdrop.hidden = false;
  elements.networkDrawer.classList.add("is-open");
  elements.networkDrawer.setAttribute("aria-hidden", "false");
  renderLearningNetwork();
  elements.prepareNetworkButton.focus();
}

function closeLearningNetwork(activateReview = true) {
  if (!state.networkOpen && elements.networkDrawer.getAttribute("aria-hidden") === "true") return;
  state.networkOpen = false;
  elements.networkDrawer.classList.remove("is-open");
  elements.networkDrawer.setAttribute("aria-hidden", "true");
  elements.networkBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openAdaptiveCoach() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeEvidenceAgent(false);
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
  closePortal(false);
  state.coachOpen = true;
  setActiveNav(elements.coachNavButton);
  elements.coachBackdrop.hidden = false;
  elements.coachDrawer.classList.add("is-open");
  elements.coachDrawer.setAttribute("aria-hidden", "false");
  renderAdaptiveCoach();
  elements.generateCoachButton.focus();
}

function closeAdaptiveCoach(activateReview = true) {
  if (!state.coachOpen && elements.coachDrawer.getAttribute("aria-hidden") === "true") return;
  state.coachOpen = false;
  elements.coachDrawer.classList.remove("is-open");
  elements.coachDrawer.setAttribute("aria-hidden", "true");
  elements.coachBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openEvidenceAgent() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
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
  closePortal(false);
  state.agentOpen = true;
  setActiveNav(elements.agentNavButton);
  elements.agentBackdrop.hidden = false;
  elements.agentDrawer.classList.add("is-open");
  elements.agentDrawer.setAttribute("aria-hidden", "false");
  renderEvidenceAgent();
  elements.prepareAgentButton.focus();
}

function closeEvidenceAgent(activateReview = true) {
  if (!state.agentOpen && elements.agentDrawer.getAttribute("aria-hidden") === "true") return;
  state.agentOpen = false;
  elements.agentDrawer.classList.remove("is-open");
  elements.agentDrawer.setAttribute("aria-hidden", "true");
  elements.agentBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openOutcomeMemory() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closePortal(false);
  state.outcomeOpen = true;
  setActiveNav(elements.outcomeNavButton);
  elements.outcomeBackdrop.hidden = false;
  elements.outcomeDrawer.classList.add("is-open");
  elements.outcomeDrawer.setAttribute("aria-hidden", "false");
  renderOutcomeMemory();
  elements.captureOutcomeButton.focus();
}

function closeOutcomeMemory(activateReview = true) {
  if (!state.outcomeOpen && elements.outcomeDrawer.getAttribute("aria-hidden") === "true") return;
  state.outcomeOpen = false;
  elements.outcomeDrawer.classList.remove("is-open");
  elements.outcomeDrawer.setAttribute("aria-hidden", "true");
  elements.outcomeBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openAdaptivePlaybooks() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
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
  closePortal(false);
  state.playbookOpen = true;
  setActiveNav(elements.playbookNavButton);
  elements.playbookBackdrop.hidden = false;
  elements.playbookDrawer.classList.add("is-open");
  elements.playbookDrawer.setAttribute("aria-hidden", "false");
  renderAdaptivePlaybooks();
  elements.generatePlaybookButton.focus();
}

function closeAdaptivePlaybooks(activateReview = true) {
  if (!state.playbookOpen && elements.playbookDrawer.getAttribute("aria-hidden") === "true") return;
  state.playbookOpen = false;
  elements.playbookDrawer.classList.remove("is-open");
  elements.playbookDrawer.setAttribute("aria-hidden", "true");
  elements.playbookBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openTrustBenchmarks() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
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
  closePortal(false);
  state.benchmarkOpen = true;
  setActiveNav(elements.benchmarkNavButton);
  elements.benchmarkBackdrop.hidden = false;
  elements.benchmarkDrawer.classList.add("is-open");
  elements.benchmarkDrawer.setAttribute("aria-hidden", "false");
  renderTrustBenchmarks();
  elements.prepareBenchmarkButton.focus();
}

function closeTrustBenchmarks(activateReview = true) {
  if (!state.benchmarkOpen && elements.benchmarkDrawer.getAttribute("aria-hidden") === "true") return;
  state.benchmarkOpen = false;
  elements.benchmarkDrawer.classList.remove("is-open");
  elements.benchmarkDrawer.setAttribute("aria-hidden", "true");
  elements.benchmarkBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openTrustOrchestrator() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeFederatedGraph(false);
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
  closePortal(false);
  state.orchestratorOpen = true;
  setActiveNav(elements.orchestratorNavButton);
  elements.orchestratorBackdrop.hidden = false;
  elements.orchestratorDrawer.classList.add("is-open");
  elements.orchestratorDrawer.setAttribute("aria-hidden", "false");
  renderTrustOrchestrator();
  elements.prepareOrchestratorButton.focus();
}

function closeTrustOrchestrator(activateReview = true) {
  if (!state.orchestratorOpen && elements.orchestratorDrawer.getAttribute("aria-hidden") === "true") return;
  state.orchestratorOpen = false;
  elements.orchestratorDrawer.classList.remove("is-open");
  elements.orchestratorDrawer.setAttribute("aria-hidden", "true");
  elements.orchestratorBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openFederatedGraph() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closePolicySimulator(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeDataRoom(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.graphOpen = true;
  setActiveNav(elements.graphNavButton);
  elements.graphBackdrop.hidden = false;
  elements.graphDrawer.classList.add("is-open");
  elements.graphDrawer.setAttribute("aria-hidden", "false");
  renderFederatedGraph();
}

function closeFederatedGraph(activateReview = true) {
  if (!state.graphOpen && elements.graphDrawer.getAttribute("aria-hidden") === "true") return;
  state.graphOpen = false;
  elements.graphDrawer.classList.remove("is-open");
  elements.graphDrawer.setAttribute("aria-hidden", "true");
  elements.graphBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openPolicySimulator() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeDataRoom(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.simulatorOpen = true;
  setActiveNav(elements.simulatorNavButton);
  elements.simulatorBackdrop.hidden = false;
  elements.simulatorDrawer.classList.add("is-open");
  elements.simulatorDrawer.setAttribute("aria-hidden", "false");
  renderPolicySimulator();
}

function closePolicySimulator(activateReview = true) {
  if (!state.simulatorOpen && elements.simulatorDrawer.getAttribute("aria-hidden") === "true") return;
  state.simulatorOpen = false;
  elements.simulatorDrawer.classList.remove("is-open");
  elements.simulatorDrawer.setAttribute("aria-hidden", "true");
  elements.simulatorBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openReinforcementControl() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closePolicySimulator(false);
  closeReinforcementControl(false);
  closeLearningPolicyGovernor(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeDataRoom(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.reinforcementOpen = true;
  setActiveNav(elements.reinforcementNavButton);
  elements.reinforcementBackdrop.hidden = false;
  elements.reinforcementDrawer.classList.add("is-open");
  elements.reinforcementDrawer.setAttribute("aria-hidden", "false");
  renderReinforcementControl();
}

function closeReinforcementControl(activateReview = true) {
  if (!state.reinforcementOpen && elements.reinforcementDrawer.getAttribute("aria-hidden") === "true") return;
  state.reinforcementOpen = false;
  elements.reinforcementDrawer.classList.remove("is-open");
  elements.reinforcementDrawer.setAttribute("aria-hidden", "true");
  elements.reinforcementBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openEvaluationLab() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closePolicySimulator(false);
  closeReinforcementControl(false);
  closeLearningLedger(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeDataRoom(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.evaluationOpen = true;
  setActiveNav(elements.evaluationNavButton);
  elements.evaluationBackdrop.hidden = false;
  elements.evaluationDrawer.classList.add("is-open");
  elements.evaluationDrawer.setAttribute("aria-hidden", "false");
  renderEvaluationLab();
}

function closeEvaluationLab(activateReview = true) {
  if (!state.evaluationOpen && elements.evaluationDrawer.getAttribute("aria-hidden") === "true") return;
  state.evaluationOpen = false;
  elements.evaluationDrawer.classList.remove("is-open");
  elements.evaluationDrawer.setAttribute("aria-hidden", "true");
  elements.evaluationBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openLearningLedger() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closePolicySimulator(false);
  closeReinforcementControl(false);
  closeEvaluationLab(false);
  closeLearningPolicyGovernor(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeDataRoom(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.ledgerOpen = true;
  setActiveNav(elements.ledgerNavButton);
  elements.ledgerBackdrop.hidden = false;
  elements.ledgerDrawer.classList.add("is-open");
  elements.ledgerDrawer.setAttribute("aria-hidden", "false");
  renderLearningLedger();
}

function closeLearningLedger(activateReview = true) {
  if (!state.ledgerOpen && elements.ledgerDrawer.getAttribute("aria-hidden") === "true") return;
  state.ledgerOpen = false;
  elements.ledgerDrawer.classList.remove("is-open");
  elements.ledgerDrawer.setAttribute("aria-hidden", "true");
  elements.ledgerBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openLearningPolicyGovernor() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closePolicySimulator(false);
  closeReinforcementControl(false);
  closeEvaluationLab(false);
  closeLearningLedger(false);
  closeWorkspace(false);
  closePipeline(false);
  closeTrustRoom(false);
  closeFollowUp(false);
  closeConnectors(false);
  closeAnalytics(false);
  closeAccess(false);
  closeDataRoom(false);
  closeIntake(false);
  closeLibrary(false);
  closePortal(false);
  state.policyOpen = true;
  setActiveNav(elements.policyNavButton);
  elements.policyBackdrop.hidden = false;
  elements.policyDrawer.classList.add("is-open");
  elements.policyDrawer.setAttribute("aria-hidden", "false");
  renderLearningPolicyGovernor();
}

function closeLearningPolicyGovernor(activateReview = true) {
  if (!state.policyOpen && elements.policyDrawer.getAttribute("aria-hidden") === "true") return;
  state.policyOpen = false;
  elements.policyDrawer.classList.remove("is-open");
  elements.policyDrawer.setAttribute("aria-hidden", "true");
  elements.policyBackdrop.hidden = true;
  if (activateReview) setActiveNav(elements.reviewNavButton);
}

function openAnalytics() {
  closeImportStudio(false);
  closeGapAutopilot(false);
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeLearningPolicyGovernor(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
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
  renderAutonomousRuns();
  renderTrustLaunchpad();
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  renderAdaptivePlaybooks();
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

function renderAutonomousRuns() {
  const run = autonomousRunSnapshot();

  elements.runScore.textContent = `${run.score}%`;
  elements.runStepCount.textContent = run.steps.length;
  elements.runGateCount.textContent = run.openGateCount;
  elements.runReceiptCount.textContent = run.receipts.length;
  elements.runDigest.textContent = runDigestText(run);
  elements.startRunButton.disabled = run.steps.length === 0;
  elements.approveRunGateButton.disabled = state.runActions.status === "Human gate approved";

  elements.runRecommended.innerHTML = `
    <header>
      <div>
        <span class="label">${escapeHtml(run.status)}</span>
        <strong>${escapeHtml(run.recommended.title)}</strong>
      </div>
      <b>${run.score}%</b>
    </header>
    <p>${escapeHtml(run.recommended.detail)}</p>
    <div class="run-recommendation-meta">
      <span>${run.gapCount} gaps</span>
      <span>${run.importCount} imports</span>
      <span>${run.followUpCount} follow-ups</span>
      <span>${run.connectorIssueCount} source issues</span>
    </div>
  `;

  elements.runStepList.innerHTML = "";
  run.steps.forEach((step, index) => {
    const item = document.createElement("article");
    item.className = `run-step-card ${runStatusClass(step.status)}`;
    item.innerHTML = `
      <div class="run-step-number">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <header>
          <strong>${escapeHtml(step.title)}</strong>
          <span>${escapeHtml(step.status)}</span>
        </header>
        <p>${escapeHtml(step.detail)}</p>
        <footer>
          <span>${escapeHtml(step.owner)} | Gate: ${escapeHtml(step.gate)}</span>
          <button class="secondary-button compact-button" type="button" data-run-open="${escapeHtml(step.target)}">
            <svg aria-hidden="true"><use href="#icon-link"></use></svg>
            <span>Open</span>
          </button>
        </footer>
      </div>
    `;
    item.querySelector("[data-run-open]")?.addEventListener("click", () => openRunTarget(step.target));
    elements.runStepList.append(item);
  });

  elements.runGateList.innerHTML = "";
  run.gates.forEach((gate) => {
    const item = document.createElement("article");
    item.className = `run-gate-card ${gate.open ? "is-open" : "is-closed"}`;
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(gate.title)}</strong>
        <span>${escapeHtml(gate.open ? "Gate open" : "Cleared")}</span>
      </header>
      <p>${escapeHtml(gate.detail)}</p>
    `;
    elements.runGateList.append(item);
  });

  elements.runReceiptList.innerHTML = "";
  if (run.receipts.length === 0) {
    elements.runReceiptList.append(emptyState("No run receipts yet"));
  }
  run.receipts.forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "run-receipt-card";
    item.innerHTML = `
      <span>${escapeHtml(formatAuditTime(receipt.at))}</span>
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
    `;
    elements.runReceiptList.append(item);
  });

  elements.runNextList.innerHTML = "";
  run.nextActions.forEach((action) => {
    const item = document.createElement("article");
    item.className = "run-next-card";
    item.innerHTML = `
      <strong>${escapeHtml(action.title)}</strong>
      <p>${escapeHtml(action.detail)}</p>
      <button class="secondary-button compact-button" type="button" data-run-next="${escapeHtml(action.target)}">
        <svg aria-hidden="true"><use href="#icon-link"></use></svg>
        <span>Open</span>
      </button>
    `;
    item.querySelector("[data-run-next]")?.addEventListener("click", () => openRunTarget(action.target));
    elements.runNextList.append(item);
  });
}

function autonomousRunSnapshot() {
  const gaps = gapAutopilotSnapshot();
  const imports = importSnapshot();
  const connectors = connectorSnapshot();
  const followUps = followUpSnapshot();
  const handoff = handoffReadinessSnapshot();
  const routing = ownerRoutingSnapshot();
  const coverage = coverageSnapshot();
  const openGateCount = [
    gaps.highRiskCount > 0,
    imports.cleanupCount > 0,
    connectors.issueCount > 0,
    followUps.slaCount > 0,
    state.runActions.status !== "Human gate approved",
  ].filter(Boolean).length;
  const recommended = recommendedRun({ gaps, imports, connectors, followUps, handoff, coverage });
  const steps = runPlanSteps({ gaps, imports, connectors, followUps, handoff, routing });
  const gates = runGates({ gaps, imports, connectors, followUps });
  const nextActions = runNextActions({ gaps, imports, connectors, followUps, handoff });
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(handoff.ready * 0.34 + coverage.score * 0.24 + connectors.score * 0.18 + Math.max(0, 100 - gaps.highRiskCount * 16 - imports.cleanupCount * 7 - followUps.slaCount * 8) * 0.24),
    ),
  );

  return {
    status: state.runActions.status,
    score,
    recommended,
    steps,
    gates,
    nextActions,
    receipts: state.runActions.receipts.slice(-8).reverse(),
    openGateCount,
    gapCount: gaps.taskCount,
    importCount: imports.readyCount,
    followUpCount: followUps.openCount,
    connectorIssueCount: connectors.issueCount,
    gaps,
    imports,
    connectors,
    followUps,
    handoff,
    routing,
    coverage,
  };
}

function recommendedRun({ gaps, imports, connectors, followUps, handoff }) {
  if (gaps.highRiskCount > 0) {
    return {
      title: "Evidence gap sweep",
      detail: `${gaps.highRiskCount} high-risk proof gap${gaps.highRiskCount === 1 ? "" : "s"} can block buyer submission. Run owner routing and fallback language before approvals.`,
    };
  }
  if (imports.readyCount > 0) {
    return {
      title: "Questionnaire intake run",
      detail: `${imports.readyCount} mapped buyer row${imports.readyCount === 1 ? "" : "s"} can enter the review desk with owner routing and source checks.`,
    };
  }
  if (followUps.slaCount > 0) {
    return {
      title: "Buyer follow-up run",
      detail: `${followUps.slaCount} buyer follow-up${followUps.slaCount === 1 ? "" : "s"} are near SLA risk. Route evidence responses before the room loop slows down.`,
    };
  }
  if (handoff.ready >= 75) {
    return {
      title: "Review pack seal run",
      detail: "The workspace is close to handoff-ready. Prepare the review pack, copy portal answers, and keep buyer-facing output behind approval gates.",
    };
  }
  return {
    title: "Source readiness run",
    detail: "Improve evidence coverage, connector health, and owner routing before attempting buyer-facing handoff.",
  };
}

function runPlanSteps({ gaps, imports, connectors, followUps, handoff, routing }) {
  return [
    {
      id: "import",
      title: "Intake buyer rows",
      detail: imports.readyCount > 0 ? `Add ${imports.readyCount} ready mapped row${imports.readyCount === 1 ? "" : "s"} after duplicate review.` : "No mapped import rows are ready; keep sample parser available for the next buyer file.",
      owner: "Trust Lead",
      gate: "Mapped rows reviewed",
      status: imports.readyCount > 0 ? "Ready" : "Idle",
      target: "import",
    },
    {
      id: "gaps",
      title: "Route proof gaps",
      detail: gaps.taskCount > 0 ? `Route ${gaps.taskCount} evidence gap${gaps.taskCount === 1 ? "" : "s"} to named owners with exact proof requests.` : "No open evidence gaps detected from current answers.",
      owner: "AnswerSeal Autopilot",
      gate: "Owner proof required",
      status: gaps.highRiskCount > 0 ? "Blocked" : gaps.taskCount > 0 ? "Ready" : "Clear",
      target: "gaps",
    },
    {
      id: "connectors",
      title: "Refresh source health",
      detail: connectors.issueCount > 0 ? `Review ${connectors.issueCount} connector issue${connectors.issueCount === 1 ? "" : "s"} and ${connectors.staleCount} stale source${connectors.staleCount === 1 ? "" : "s"}.` : "Connector health is clean enough for the next review cycle.",
      owner: "Evidence Owners",
      gate: "Approved sources only",
      status: connectors.issueCount > 0 ? "Review" : "Clear",
      target: "connectors",
    },
    {
      id: "followups",
      title: "Close buyer loops",
      detail: followUps.openCount > 0 ? `Resolve ${followUps.openCount} open buyer follow-up${followUps.openCount === 1 ? "" : "s"} before room handoff.` : "No open buyer-room follow-ups need routing.",
      owner: "Sales Engineering",
      gate: "Buyer-safe response",
      status: followUps.slaCount > 0 ? "SLA risk" : followUps.openCount > 0 ? "Ready" : "Clear",
      target: "followups",
    },
    {
      id: "handoff",
      title: "Prepare sealed handoff",
      detail: `Handoff readiness is ${handoff.ready}%; ${routing.openRisks} open risk${routing.openRisks === 1 ? "" : "s"} remain before broad buyer reuse.`,
      owner: "Trust Lead",
      gate: "Human approval",
      status: handoff.ready >= 75 && routing.openRisks === 0 ? "Ready" : "Gated",
      target: "workspace",
    },
  ];
}

function runGates({ gaps, imports, connectors, followUps }) {
  const approvedLabel = state.runActions.approvedAt ? formatAuditTime(state.runActions.approvedAt) : "this session";
  return [
    {
      title: "Human approval before buyer-facing output",
      detail: state.runActions.status === "Human gate approved" ? `Approved ${approvedLabel} for this demo run.` : "Autonomous runs can plan, route, and draft internally, but buyer-facing answers remain blocked until reviewed.",
      open: state.runActions.status !== "Human gate approved",
    },
    {
      title: "High-risk proof gaps cleared",
      detail: gaps.highRiskCount > 0 ? `${gaps.highRiskCount} high-risk gap${gaps.highRiskCount === 1 ? "" : "s"} still require owner evidence.` : "No high-risk proof gaps detected.",
      open: gaps.highRiskCount > 0,
    },
    {
      title: "Import cleanup reviewed",
      detail: imports.cleanupCount > 0 ? `${imports.cleanupCount} imported row${imports.cleanupCount === 1 ? "" : "s"} need cleanup or stronger evidence.` : "Import rows are either ready, duplicate, or already handled.",
      open: imports.cleanupCount > 0,
    },
    {
      title: "Source freshness acceptable",
      detail: connectors.issueCount > 0 ? `${connectors.issueCount} connector issue${connectors.issueCount === 1 ? "" : "s"} remain across the evidence vault.` : "Evidence connectors have no open source issues.",
      open: connectors.issueCount > 0,
    },
    {
      title: "Buyer follow-up SLA safe",
      detail: followUps.slaCount > 0 ? `${followUps.slaCount} follow-up${followUps.slaCount === 1 ? "" : "s"} are near SLA risk.` : "Buyer follow-ups are not at SLA risk.",
      open: followUps.slaCount > 0,
    },
  ];
}

function runNextActions({ gaps, imports, connectors, followUps, handoff }) {
  const actions = [];
  if (gaps.tasks[0]) {
    actions.push({
      title: `Request ${gaps.tasks[0].request.title.toLowerCase()}`,
      detail: `${gaps.tasks[0].owner.name} owns the highest-risk proof gap: ${shorten(gaps.tasks[0].question.text, 88)}.`,
      target: "gaps",
    });
  }
  if (imports.readyCount > 0) {
    actions.push({
      title: "Promote ready import rows",
      detail: `${imports.readyCount} mapped buyer row${imports.readyCount === 1 ? "" : "s"} can be added after duplicate review.`,
      target: "import",
    });
  }
  if (connectors.issueCount > 0) {
    actions.push({
      title: "Refresh source connectors",
      detail: "Connector issues can create stale or conflicting citations inside buyer answers.",
      target: "connectors",
    });
  }
  if (followUps.slaCount > 0) {
    actions.push({
      title: "Protect buyer follow-up SLA",
      detail: `${followUps.slaCount} follow-up${followUps.slaCount === 1 ? "" : "s"} should be routed before the trust room loop slows down.`,
      target: "followups",
    });
  }
  if (actions.length === 0) {
    actions.push({
      title: handoff.ready >= 75 ? "Prepare review pack" : "Improve handoff readiness",
      detail: handoff.ready >= 75 ? "Workspace is close to handoff-ready; export the review pack after approval." : `Current readiness is ${handoff.ready}%; route owners and improve source coverage first.`,
      target: "workspace",
    });
  }
  return actions.slice(0, 4);
}

function runStatusClass(status) {
  if (["Blocked", "SLA risk", "Gated"].includes(status)) return "is-blocked";
  if (["Ready", "Review"].includes(status)) return "is-ready";
  return "is-clear";
}

function startAutonomousRun() {
  const run = autonomousRunSnapshot();
  const detail = `${run.recommended.title} started with ${run.steps.length} steps, ${run.openGateCount} open gates, and ${run.gapCount} evidence gaps.`;
  state.runActions.status = "Running";
  state.runActions.startedAt = new Date().toISOString();
  addRunReceipt("Run started", detail);
  addAudit("Autonomous run started", detail);
  render();
  showToast("Autonomous review run started.");
}

function approveRunGate() {
  const run = autonomousRunSnapshot();
  const detail = `${run.recommended.title} human gate approved with ${run.openGateCount} remaining system gates visible.`;
  state.runActions.status = "Human gate approved";
  state.runActions.approvedAt = new Date().toISOString();
  addRunReceipt("Human gate approved", detail);
  addAudit("Run gate approved", detail);
  render();
  showToast("Human gate approved for this run.");
}

function copyRunDigest() {
  const run = autonomousRunSnapshot();
  state.runActions.lastCopiedAt = new Date().toISOString();
  addRunReceipt("Run digest copied", `${run.recommended.title} digest copied for internal review.`);
  addAudit("Run digest copied", "Autonomous review run digest copied.");
  renderAutonomousRuns();
  renderTrustLaunchpad();
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  copyText(runDigestText(run), "Autonomous run digest copied.");
}

function addRunReceipt(action, detail) {
  state.runActions.receipts = [
    ...(state.runActions.receipts ?? []),
    {
      id: `run-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
}

function openRunTarget(target) {
  if (target === "import") openImportStudio();
  if (target === "gaps") openGapAutopilot();
  if (target === "connectors") openConnectors();
  if (target === "followups") openFollowUp();
  if (target === "workspace") openWorkspace();
}

function runDigestText(run = autonomousRunSnapshot()) {
  const stepLines = run.steps.map((step, index) => `${index + 1}. ${step.status}: ${step.title} | ${step.owner} | ${step.gate}`).join("\n");
  const gateLines = run.gates.map((gate, index) => `${index + 1}. ${gate.open ? "OPEN" : "CLEARED"}: ${gate.title} - ${gate.detail}`).join("\n");
  const nextLines = run.nextActions.map((action, index) => `${index + 1}. ${action.title}: ${action.detail}`).join("\n");
  const receiptLines = run.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Autonomous Review Run",
    `Build: ${BUILD_VERSION}`,
    `Status: ${run.status}`,
    `Recommended run: ${run.recommended.title}`,
    `Run score: ${run.score}%`,
    `Open gates: ${run.openGateCount}`,
    `Handoff readiness: ${run.handoff.ready}%`,
    `Evidence gaps: ${run.gapCount}`,
    "",
    "Run plan:",
    stepLines || "No steps planned.",
    "",
    "Human gates:",
    gateLines || "No gates open.",
    "",
    "Next actions:",
    nextLines || "No next actions.",
    "",
    "Run receipts:",
    receiptLines || "No run receipts yet.",
    "",
    "Policy:",
    "- Plan and route internally.",
    "- Keep buyer-facing output behind human approval.",
    "- Record every run action as a receipt.",
  ].join("\n");
}

function renderTrustLaunchpad() {
  const launch = trustLaunchSnapshot();

  elements.launchScore.textContent = `${launch.score}%`;
  elements.launchPacketCount.textContent = launch.packetCount;
  elements.launchSignalCount.textContent = launch.signalCount;
  elements.launchLearningCount.textContent = launch.learningRows.length;
  elements.launchStatus.textContent = launch.statusLabel;
  elements.launchDigest.textContent = launchDigestText(launch);
  elements.applyLearningButton.disabled = state.launchActions.status === "Learning applied";

  elements.launchPacketList.innerHTML = "";
  launch.packets.forEach((packet) => {
    const item = document.createElement("article");
    item.className = `launch-packet-card ${packet.ready ? "is-ready" : "is-gated"}`;
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(packet.type)}</span>
          <strong>${escapeHtml(packet.title)}</strong>
        </div>
        <b>${escapeHtml(packet.ready ? "Ready" : "Gated")}</b>
      </header>
      <p>${escapeHtml(packet.detail)}</p>
      <footer>
        <span>${packet.count} item${packet.count === 1 ? "" : "s"}</span>
        <span>${escapeHtml(packet.visibility)}</span>
      </footer>
    `;
    elements.launchPacketList.append(item);
  });

  elements.launchAudienceList.innerHTML = "";
  launch.audiences.forEach((audience) => {
    const item = document.createElement("article");
    item.className = "launch-audience-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(audience.name)}</strong>
        <span>${escapeHtml(audience.access)}</span>
      </header>
      <p>${escapeHtml(audience.detail)}</p>
    `;
    elements.launchAudienceList.append(item);
  });

  elements.launchSignalList.innerHTML = "";
  launch.signals.forEach((signal) => {
    const item = document.createElement("article");
    item.className = "launch-signal-card";
    item.innerHTML = `
      <span>${escapeHtml(signal.source)}</span>
      <strong>${escapeHtml(signal.value)}</strong>
      <p>${escapeHtml(signal.detail)}</p>
    `;
    elements.launchSignalList.append(item);
  });

  elements.launchLearningList.innerHTML = "";
  launch.learningRows.forEach((row) => {
    const item = document.createElement("article");
    item.className = `launch-learning-card ${row.scope === "Network" ? "is-network" : "is-local"}`;
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(row.scope)} learning</span>
          <strong>${escapeHtml(row.title)}</strong>
        </div>
        <b>${row.impact}</b>
      </header>
      <p>${escapeHtml(row.detail)}</p>
      <footer>
        <span>${escapeHtml(row.guardrail)}</span>
      </footer>
    `;
    elements.launchLearningList.append(item);
  });

  elements.launchReceiptList.innerHTML = "";
  if (launch.receipts.length === 0) {
    elements.launchReceiptList.append(emptyState("No launch receipts yet"));
  }
  launch.receipts.forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "launch-receipt-card";
    item.innerHTML = `
      <span>${escapeHtml(formatAuditTime(receipt.at))}</span>
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
    `;
    elements.launchReceiptList.append(item);
  });
}

function trustLaunchSnapshot() {
  const trustRoom = trustRoomSnapshot();
  const coverage = coverageSnapshot();
  const connectors = connectorSnapshot();
  const gaps = gapAutopilotSnapshot();
  const run = autonomousRunSnapshot();
  const approvedAnswers = state.questions.filter((question) => question.status === "approved");
  const safeAnswers = trustRoom.answers.filter((item) => item.sourceSafe);
  const packets = launchPackets({ trustRoom, coverage, connectors, gaps, approvedAnswers, safeAnswers });
  const audiences = launchAudiences({ trustRoom, gaps, run });
  const signals = launchSignals({ trustRoom, gaps, run, connectors });
  const learningRows = launchLearningRows({ trustRoom, coverage, connectors, gaps, run });
  const readinessPenalty = gaps.highRiskCount * 8 + connectors.staleCount * 5 + Math.max(0, 3 - approvedAnswers.length) * 6;
  const score = Math.max(0, Math.min(100, Math.round(trustRoom.score * 0.3 + coverage.score * 0.24 + connectors.score * 0.2 + run.score * 0.16 + Math.max(0, 100 - readinessPenalty) * 0.1)));
  const statusLabel = state.launchActions.status === "Draft" ? (score >= 72 ? "Launch candidate" : "Needs proof") : state.launchActions.status;

  return {
    score,
    statusLabel,
    packets,
    audiences,
    signals,
    learningRows,
    receipts: state.launchActions.receipts.slice(-8).reverse(),
    packetCount: packets.filter((packet) => packet.ready).length,
    signalCount: signals.length,
    trustRoom,
    coverage,
    connectors,
    gaps,
    run,
    approvedAnswers,
    safeAnswers,
  };
}

function launchPackets({ trustRoom, coverage, connectors, gaps, approvedAnswers, safeAnswers }) {
  return [
    {
      type: "Answers",
      title: "Buyer-safe answer library",
      count: safeAnswers.length,
      ready: safeAnswers.length > 0 && gaps.highRiskCount === 0,
      visibility: "External buyer packet",
      detail: `${safeAnswers.length}/${trustRoom.answers.length} answers have source-safe citations and can be packaged when open proof gates are cleared.`,
    },
    {
      type: "Evidence",
      title: "Approved evidence excerpts",
      count: trustRoom.evidencePackets.length,
      ready: trustRoom.evidencePackets.length > 0 && connectors.staleCount === 0,
      visibility: "Scoped excerpts only",
      detail: `${trustRoom.evidencePackets.length} evidence packet${trustRoom.evidencePackets.length === 1 ? "" : "s"} are mapped with citation excerpts; stale connector issues stay gated.`,
    },
    {
      type: "Governance",
      title: "AI and privacy trust notes",
      count: coverage.items.filter((item) => ["AI Governance", "Privacy"].includes(item.category)).length,
      ready: coverage.items.filter((item) => ["AI Governance", "Privacy"].includes(item.category) && item.status === "ready").length >= 1,
      visibility: "Reviewer approved",
      detail: "AI governance, privacy, subprocessor, and human-review claims are separated from generic security proof.",
    },
    {
      type: "Receipts",
      title: "Launch receipts and room activity",
      count: trustRoom.receipts.length + state.launchActions.receipts.length,
      ready: state.launchActions.status !== "Draft",
      visibility: "Internal audit",
      detail: "Room activity, copied packets, launch preparation, and learning-loop actions are preserved for handoff.",
    },
  ];
}

function launchAudiences({ trustRoom, gaps, run }) {
  return [
    {
      name: "Founder / CEO",
      access: "Executive digest",
      detail: `Sees launch score, open gates, and buyer risk without raw evidence clutter. Current run score: ${run.score}%.`,
    },
    {
      name: "Sales Engineering",
      access: "Buyer packet",
      detail: `Can reuse approved answer language, fallback copy, and room links while ${gaps.taskCount} proof gap${gaps.taskCount === 1 ? "" : "s"} remain internal.`,
    },
    {
      name: "Security Reviewer",
      access: "Source room",
      detail: `Can inspect ${trustRoom.evidencePackets.length} evidence packet${trustRoom.evidencePackets.length === 1 ? "" : "s"}, claim trace, and freshness gates before publication.`,
    },
    {
      name: "External Buyer",
      access: "Scoped trust center",
      detail: "Receives approved answers, safe excerpts, expiry, and citations only after internal launch approval.",
    },
  ];
}

function launchSignals({ trustRoom, gaps, run, connectors }) {
  return [
    {
      source: "Buyer room",
      value: `${trustRoom.views} views / ${trustRoom.copies} copies`,
      detail: "Engagement signals show which trust content buyers return to before close.",
    },
    {
      source: "Review run",
      value: `${run.openGateCount} open gates`,
      detail: "Run gates become reinforcement targets for the next questionnaire cycle.",
    },
    {
      source: "Evidence gaps",
      value: `${gaps.taskCount} gaps`,
      detail: "Repeated proof gaps teach which trust assets should be prepared before the next buyer asks.",
    },
    {
      source: "Source health",
      value: `${connectors.issueCount} issues`,
      detail: "Connector and freshness issues become source operations tasks, not hidden answer risk.",
    },
  ];
}

function launchLearningRows({ trustRoom, coverage, connectors, gaps, run }) {
  const topGap = gaps.tasks[0];
  return [
    {
      scope: "Local",
      title: topGap ? `Pre-build ${topGap.request.title.toLowerCase()}` : "Promote sealed answers into launch content",
      impact: topGap ? `${topGap.score}%` : `${trustRoom.sharedCount}`,
      detail: topGap ? `${topGap.owner.name} repeatedly blocks buyer readiness for ${topGap.question.category}. Prepare the proof asset before the next review.` : "Approved answers should graduate into reusable trust center content once their citations are stable.",
      guardrail: "Uses only this workspace's approved evidence and reviewer actions.",
    },
    {
      scope: "Local",
      title: "Refresh stale source operations",
      impact: `${connectors.staleCount}`,
      detail: connectors.staleCount > 0 ? "Stale source issues should trigger source-owner reminders before they weaken buyer-facing proof." : "No stale source issues; keep connector freshness monitoring active.",
      guardrail: "No buyer data leaves the organization workspace.",
    },
    {
      scope: "Network",
      title: "Anonymized buyer-question pattern",
      impact: `${coverage.ready}/${coverage.items.length}`,
      detail: "Across organizations, only abstract patterns should improve suggestions: categories asked, proof types needed, freshness windows, and safe answer structure.",
      guardrail: "No raw answers, customer names, contracts, prompts, or evidence files are shared.",
    },
    {
      scope: "Network",
      title: "Reinforcement reward signal",
      impact: `${run.score}%`,
      detail: "Positive signals should come from faster approvals, fewer reopened claims, fewer buyer follow-ups, and higher source confidence after human review.",
      guardrail: "Humans approve outcomes; the model learns from labels and metrics, not private documents.",
    },
  ];
}

function prepareTrustLaunch() {
  const launch = trustLaunchSnapshot();
  const detail = `Trust center launch prepared with ${launch.packetCount} ready packets, ${launch.signalCount} learning signals, and ${launch.gaps.taskCount} open proof gaps.`;
  state.launchActions.status = "Ready to launch";
  state.launchActions.preparedAt = new Date().toISOString();
  addLaunchReceipt("Launch prepared", detail);
  addAudit("Trust launch prepared", detail);
  render();
  showToast("Trust center launch prepared.");
}

function applyLearningLoop() {
  const launch = trustLaunchSnapshot();
  const detail = `Learning loop applied from ${launch.signalCount} signals and ${launch.learningRows.length} reinforcement recommendations.`;
  state.launchActions.status = "Learning applied";
  state.launchActions.learningAppliedAt = new Date().toISOString();
  addLaunchReceipt("Learning loop applied", detail);
  addAudit("Learning loop applied", detail);
  render();
  showToast("Learning loop applied.");
}

function copyLaunchDigest() {
  const launch = trustLaunchSnapshot();
  state.launchActions.lastCopiedAt = new Date().toISOString();
  addLaunchReceipt("Launch digest copied", "Trust center launch and learning-loop digest copied.");
  addAudit("Launch digest copied", "Trust center launch digest copied.");
  renderTrustLaunchpad();
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  copyText(launchDigestText(launch), "Trust launch digest copied.");
}

function addLaunchReceipt(action, detail) {
  state.launchActions.receipts = [
    ...(state.launchActions.receipts ?? []),
    {
      id: `launch-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
}

function launchDigestText(launch = trustLaunchSnapshot()) {
  const packetLines = launch.packets.map((packet, index) => `${index + 1}. ${packet.ready ? "READY" : "GATED"}: ${packet.title} | ${packet.count} ${packet.type.toLowerCase()} | ${packet.visibility}`).join("\n");
  const signalLines = launch.signals.map((signal, index) => `${index + 1}. ${signal.source}: ${signal.value} - ${signal.detail}`).join("\n");
  const learningLines = launch.learningRows.map((row, index) => `${index + 1}. ${row.scope}: ${row.title} | impact ${row.impact} | ${row.guardrail}`).join("\n");
  const receiptLines = launch.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Trust Center Launchpad",
    `Build: ${BUILD_VERSION}`,
    `Launch status: ${launch.statusLabel}`,
    `Launch score: ${launch.score}%`,
    `Ready packets: ${launch.packetCount}/${launch.packets.length}`,
    `Learning signals: ${launch.signalCount}`,
    `Network learning rows: ${launch.learningRows.filter((row) => row.scope === "Network").length}`,
    "",
    "Launch packet:",
    packetLines,
    "",
    "Learning signals:",
    signalLines,
    "",
    "Reinforcement recommendations:",
    learningLines,
    "",
    "Launch receipts:",
    receiptLines || "No launch receipts yet.",
    "",
    "Privacy guardrail:",
    "- Organization learning stays inside the workspace.",
    "- Network learning uses only anonymized patterns and aggregate reward signals.",
    "- No raw answers, evidence, customer names, contracts, prompts, or private files are shared.",
  ].join("\n");
}

function renderLearningNetwork() {
  const network = learningNetworkSnapshot();

  elements.networkPrivacyScore.textContent = `${network.privacyScore}%`;
  elements.networkPatternCount.textContent = `${network.readyPatternCount}/${network.patterns.length}`;
  elements.networkRewardCount.textContent = network.rewards.length;
  elements.networkTenantCount.textContent = network.tenants.length;
  elements.networkStatus.textContent = network.statusLabel;
  elements.networkDigest.textContent = networkDigestText(network);
  elements.applyNetworkButton.disabled = state.networkActions.status === "Signal applied";

  elements.networkPatternList.innerHTML = "";
  network.patterns.forEach((pattern) => {
    const item = document.createElement("article");
    item.className = `network-pattern-card ${pattern.ready ? "is-ready" : "is-gated"}`;
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(pattern.kind)}</span>
          <strong>${escapeHtml(pattern.title)}</strong>
        </div>
        <b>${escapeHtml(pattern.ready ? "Shareable" : "Local only")}</b>
      </header>
      <p>${escapeHtml(pattern.detail)}</p>
      <footer>
        <span>${escapeHtml(pattern.signal)}</span>
        <span>${escapeHtml(pattern.output)}</span>
      </footer>
    `;
    elements.networkPatternList.append(item);
  });

  elements.networkGuardrailList.innerHTML = "";
  network.guardrails.forEach((guardrail) => {
    const item = document.createElement("article");
    item.className = "network-guardrail-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(guardrail.title)}</strong>
        <span>${escapeHtml(guardrail.status)}</span>
      </header>
      <p>${escapeHtml(guardrail.detail)}</p>
    `;
    elements.networkGuardrailList.append(item);
  });

  elements.networkRewardList.innerHTML = "";
  network.rewards.forEach((reward) => {
    const item = document.createElement("article");
    item.className = "network-reward-card";
    item.innerHTML = `
      <span>${escapeHtml(reward.source)}</span>
      <strong>${escapeHtml(reward.value)}</strong>
      <p>${escapeHtml(reward.detail)}</p>
    `;
    elements.networkRewardList.append(item);
  });

  elements.networkTenantList.innerHTML = "";
  network.tenants.forEach((tenant) => {
    const item = document.createElement("article");
    item.className = "network-tenant-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(tenant.name)}</strong>
        <span>${escapeHtml(tenant.mode)}</span>
      </header>
      <p>${escapeHtml(tenant.detail)}</p>
    `;
    elements.networkTenantList.append(item);
  });

  elements.networkReceiptList.innerHTML = "";
  if (network.receipts.length === 0) {
    elements.networkReceiptList.append(emptyState("No network receipts yet"));
  }
  network.receipts.forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "network-receipt-card";
    item.innerHTML = `
      <span>${escapeHtml(formatAuditTime(receipt.at))}</span>
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
    `;
    elements.networkReceiptList.append(item);
  });
}

function learningNetworkSnapshot() {
  const launch = trustLaunchSnapshot();
  const coverage = coverageSnapshot();
  const connectors = connectorSnapshot();
  const gaps = gapAutopilotSnapshot();
  const run = autonomousRunSnapshot();
  const trustRoom = trustRoomSnapshot();
  const patterns = networkPatterns({ launch, coverage, connectors, gaps, run, trustRoom });
  const guardrails = networkGuardrails({ patterns, connectors, gaps });
  const rewards = networkRewards({ launch, run, trustRoom, gaps, connectors });
  const tenants = networkTenants();
  const readyPatternCount = patterns.filter((pattern) => pattern.ready).length;
  const privacyScore = Math.max(0, Math.min(100, Math.round(96 - Math.max(0, 3 - readyPatternCount) * 4 - connectors.issueCount * 2 - gaps.highRiskCount * 2)));
  const statusLabel = state.networkActions.status === "Draft" ? (readyPatternCount >= 3 && privacyScore >= 86 ? "Exchange candidate" : "Needs abstraction") : state.networkActions.status;

  return {
    statusLabel,
    privacyScore,
    patterns,
    readyPatternCount,
    guardrails,
    rewards,
    tenants,
    receipts: state.networkActions.receipts.slice(-8).reverse(),
    launch,
    coverage,
    connectors,
    gaps,
    run,
    trustRoom,
  };
}

function networkPatterns({ launch, coverage, connectors, gaps, run, trustRoom }) {
  const categories = [...new Set(state.questions.map((question) => question.category))];
  const topGap = gaps.tasks[0];
  const approvedCount = state.questions.filter((question) => question.status === "approved").length;
  return [
    {
      kind: "Taxonomy",
      title: "Buyer-question pattern",
      ready: categories.length >= 4,
      signal: `${categories.length} abstract categories`,
      output: "Question clustering",
      detail: `Shares only category demand, proof type, and review stage. Current categories: ${categories.slice(0, 5).join(", ")}.`,
    },
    {
      kind: "Evidence",
      title: "Proof freshness benchmark",
      ready: connectors.staleCount === 0 && connectors.issueCount <= 2,
      signal: `${connectors.score}% source health`,
      output: "Freshness window",
      detail: "Contributes source freshness windows and proof-type coverage, not document text or file names.",
    },
    {
      kind: "Reward",
      title: "Approval outcome signal",
      ready: approvedCount > 0 || run.status === "Human gate approved",
      signal: `${approvedCount}/${state.questions.length} approved`,
      output: "Human reward label",
      detail: "Teaches which answer structures survive human review, approval gates, and buyer handoff.",
    },
    {
      kind: "Prevention",
      title: topGap ? `${topGap.question.category} gap prevention` : "Proof gap prevention",
      ready: gaps.taskCount > 0 || launch.packetCount > 0,
      signal: topGap ? `${topGap.score}% risk` : `${launch.packetCount} launch packets`,
      output: "Next-best proof task",
      detail: topGap ? `Turns the ${topGap.request.title.toLowerCase()} blocker into an anonymized prevention pattern.` : "Uses ready launch packets to suggest which proof assets similar teams should prepare earlier.",
    },
  ];
}

function networkGuardrails({ patterns, connectors, gaps }) {
  return [
    {
      title: "Tenant boundary",
      status: "Enforced",
      detail: "Raw answers, evidence, prompts, contracts, buyer names, and customer names stay inside the organization workspace.",
    },
    {
      title: "Pattern abstraction",
      status: `${patterns.filter((pattern) => pattern.ready).length}/${patterns.length} ready`,
      detail: "Only proof category, outcome label, freshness window, confidence band, and review friction are eligible for network learning.",
    },
    {
      title: "Threshold release",
      status: "K-anonymity simulated",
      detail: "Cross-organization recommendations should activate only when a pattern appears across enough similar tenants.",
    },
    {
      title: "Human reward control",
      status: connectors.issueCount + gaps.highRiskCount > 0 ? "Needs reviewer" : "Clean",
      detail: "The system learns from approved outcomes, copied packets, fewer reopen events, and lower buyer friction after human review.",
    },
  ];
}

function networkRewards({ launch, run, trustRoom, gaps, connectors }) {
  const reopened = state.audit.filter((entry) => entry.action === "Approval reopened").length;
  return [
    {
      source: "Human approvals",
      value: `${state.questions.filter((question) => question.status === "approved").length} approved`,
      detail: "Approved answers become positive reward labels only after citation and human review gates pass.",
    },
    {
      source: "Buyer engagement",
      value: `${trustRoom.views} views / ${trustRoom.copies} copies`,
      detail: "Room views and copied packets indicate which proof buyers actually use before close.",
    },
    {
      source: "Review stability",
      value: `${reopened} reopened`,
      detail: "Fewer reopened claims increases confidence that a pattern is useful and stable.",
    },
    {
      source: "Operations friction",
      value: `${gaps.taskCount + connectors.issueCount} blockers`,
      detail: "Open evidence gaps and source issues become negative reward signals for future preparation.",
    },
    {
      source: "Launch readiness",
      value: `${launch.score}% launch / ${run.score}% run`,
      detail: "Launch and autonomous run scores tune which recommendations appear first in the next review.",
    },
  ];
}

function networkTenants() {
  return [
    {
      name: workspaceAccount.company,
      mode: "Private tenant",
      detail: "All source files, answer drafts, reviewer notes, and buyer identifiers remain local to this workspace.",
    },
    {
      name: "AnswerSeal pattern network",
      mode: "Aggregate only",
      detail: "Receives anonymized categories, confidence bands, freshness windows, and outcome labels after guardrails pass.",
    },
    {
      name: "Peer recommendation layer",
      mode: "Threshold gated",
      detail: "Suggests proof tasks only after enough similar organizations produce the same abstract pattern.",
    },
  ];
}

function prepareNetworkExchange() {
  const network = learningNetworkSnapshot();
  const detail = `Privacy-safe exchange prepared with ${network.readyPatternCount}/${network.patterns.length} shareable patterns, ${network.rewards.length} reward signals, and ${network.privacyScore}% privacy score.`;
  state.networkActions.status = "Exchange prepared";
  state.networkActions.exchangePreparedAt = new Date().toISOString();
  addNetworkReceipt("Pattern exchange prepared", detail);
  addAudit("Learning network prepared", detail);
  render();
  showToast("Privacy-safe learning exchange prepared.");
}

function applyNetworkSignal() {
  const network = learningNetworkSnapshot();
  const detail = `Network signal applied from ${network.readyPatternCount} shareable patterns and ${network.rewards.length} reward signals without sharing raw customer data.`;
  state.networkActions.status = "Signal applied";
  state.networkActions.signalAppliedAt = new Date().toISOString();
  addNetworkReceipt("Reward signal applied", detail);
  addAudit("Network reward signal applied", detail);
  render();
  showToast("Network reward signal applied.");
}

function copyNetworkDigest() {
  const network = learningNetworkSnapshot();
  state.networkActions.lastCopiedAt = new Date().toISOString();
  addNetworkReceipt("Network digest copied", "Privacy-safe learning network digest copied.");
  addAudit("Network digest copied", "Privacy-safe learning network digest copied.");
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  copyText(networkDigestText(network), "Learning network digest copied.");
}

function addNetworkReceipt(action, detail) {
  state.networkActions.receipts = [
    ...(state.networkActions.receipts ?? []),
    {
      id: `network-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
}

function networkDigestText(network = learningNetworkSnapshot()) {
  const patternLines = network.patterns.map((pattern, index) => `${index + 1}. ${pattern.ready ? "SHAREABLE" : "LOCAL"}: ${pattern.title} | ${pattern.signal} | ${pattern.output}`).join("\n");
  const guardrailLines = network.guardrails.map((guardrail, index) => `${index + 1}. ${guardrail.title}: ${guardrail.status} - ${guardrail.detail}`).join("\n");
  const rewardLines = network.rewards.map((reward, index) => `${index + 1}. ${reward.source}: ${reward.value} - ${reward.detail}`).join("\n");
  const tenantLines = network.tenants.map((tenant, index) => `${index + 1}. ${tenant.name}: ${tenant.mode} - ${tenant.detail}`).join("\n");
  const receiptLines = network.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Privacy-Safe Learning Network",
    `Build: ${BUILD_VERSION}`,
    `Network status: ${network.statusLabel}`,
    `Privacy score: ${network.privacyScore}%`,
    `Shareable patterns: ${network.readyPatternCount}/${network.patterns.length}`,
    `Reward signals: ${network.rewards.length}`,
    "",
    "Pattern exchange:",
    patternLines,
    "",
    "Guardrails:",
    guardrailLines,
    "",
    "Reward signals:",
    rewardLines,
    "",
    "Tenant controls:",
    tenantLines,
    "",
    "Receipts:",
    receiptLines || "No network receipts yet.",
    "",
    "Network rule:",
    "- Learn from patterns, labels, friction, and outcomes.",
    "- Keep raw documents, answers, prompts, contracts, buyer names, and customer names inside the tenant.",
    "- Use reviewer approval and threshold gates before any cross-organization recommendation.",
  ].join("\n");
}

function renderAdaptiveCoach() {
  const coach = adaptiveCoachSnapshot();

  elements.coachScore.textContent = `${coach.score}%`;
  elements.coachProofCount.textContent = coach.proofs.length;
  elements.coachRewriteCount.textContent = coach.rewrites.length;
  elements.coachRouteCount.textContent = coach.routes.length;
  elements.coachStatus.textContent = coach.statusLabel;
  elements.coachDigest.textContent = coachDigestText(coach);
  elements.applyCoachButton.disabled = state.coachActions.status === "Recommendation applied";

  elements.coachProofList.innerHTML = "";
  coach.proofs.forEach((proof) => {
    const item = document.createElement("article");
    item.className = `coach-proof-card ${proof.priority === "High" ? "is-high" : ""}`;
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(proof.priority)} impact</span>
          <strong>${escapeHtml(proof.title)}</strong>
        </div>
        <b>${escapeHtml(proof.owner)}</b>
      </header>
      <p>${escapeHtml(proof.detail)}</p>
      <footer>
        <span>${escapeHtml(proof.action)}</span>
        <span>${escapeHtml(proof.guardrail)}</span>
      </footer>
    `;
    elements.coachProofList.append(item);
  });

  elements.coachRewriteList.innerHTML = "";
  coach.rewrites.forEach((rewrite) => {
    const item = document.createElement("article");
    item.className = "coach-rewrite-card";
    item.innerHTML = `
      <span>${escapeHtml(rewrite.question)}</span>
      <strong>${escapeHtml(rewrite.title)}</strong>
      <p>${escapeHtml(rewrite.before)}</p>
      <p>${escapeHtml(rewrite.after)}</p>
    `;
    elements.coachRewriteList.append(item);
  });

  elements.coachRouteList.innerHTML = "";
  coach.routes.forEach((route) => {
    const item = document.createElement("article");
    item.className = "coach-route-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(route.owner)}</strong>
        <span>${escapeHtml(route.due)}</span>
      </header>
      <p>${escapeHtml(route.reason)}</p>
      <b>${escapeHtml(route.expectedProof)}</b>
    `;
    elements.coachRouteList.append(item);
  });

  elements.coachOutcomeList.innerHTML = "";
  coach.outcomes.forEach((outcome) => {
    const item = document.createElement("article");
    item.className = "coach-outcome-card";
    item.innerHTML = `
      <span>${escapeHtml(outcome.signal)}</span>
      <strong>${escapeHtml(outcome.weight)}</strong>
      <p>${escapeHtml(outcome.tuning)}</p>
    `;
    elements.coachOutcomeList.append(item);
  });

  elements.coachReceiptList.innerHTML = "";
  if (coach.receipts.length === 0) {
    elements.coachReceiptList.append(emptyState("No coach receipts yet"));
  }
  coach.receipts.forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "coach-receipt-card";
    item.innerHTML = `
      <span>${escapeHtml(formatAuditTime(receipt.at))}</span>
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
    `;
    elements.coachReceiptList.append(item);
  });
}

function adaptiveCoachSnapshot() {
  const coverage = coverageSnapshot();
  const connectors = connectorSnapshot();
  const gaps = gapAutopilotSnapshot();
  const run = autonomousRunSnapshot();
  const launch = trustLaunchSnapshot();
  const network = learningNetworkSnapshot();
  const proofs = coachProofRecommendations({ coverage, connectors, gaps, launch, network });
  const rewrites = coachRewriteSuggestions({ gaps });
  const routes = coachRouteRecommendations({ gaps });
  const outcomes = coachOutcomeTuning({ network, run, launch, gaps, connectors });
  const score = Math.max(
    0,
    Math.min(100, Math.round(network.privacyScore * 0.24 + launch.score * 0.2 + run.score * 0.2 + coverage.score * 0.18 + connectors.score * 0.12 + Math.max(0, 100 - gaps.highRiskCount * 12) * 0.06)),
  );
  const statusLabel = state.coachActions.status === "Draft" ? (proofs.length && rewrites.length ? "Ready to coach" : "Needs signals") : state.coachActions.status;

  return {
    score,
    statusLabel,
    proofs,
    rewrites,
    routes,
    outcomes,
    receipts: state.coachActions.receipts.slice(-8).reverse(),
    coverage,
    connectors,
    gaps,
    run,
    launch,
    network,
  };
}

function coachProofRecommendations({ coverage, connectors, gaps, launch, network }) {
  const topGap = gaps.tasks[0];
  const weakCoverage = coverage.items.find((item) => item.status !== "ready");
  const staleConnector = connectors.connectors.find((item) => item.freshness === "Stale" || item.status === "Stale" || item.issues > 0);
  const pattern = network.patterns.find((item) => item.ready) ?? network.patterns[0];
  return [
    {
      id: topGap?.id ?? "",
      priority: topGap?.severity ?? "Medium",
      title: topGap ? topGap.request.title : "Promote launch-ready answer library",
      owner: topGap ? topGap.owner.name : workspaceAccount.currentRole,
      detail: topGap ? topGap.reason : `${launch.packetCount}/${launch.packets.length} launch packets are ready. Promote the highest-confidence answers into reusable buyer proof.`,
      action: topGap ? topGap.request.sourceHint : "Turn approved answers into source-bound buyer snippets.",
      guardrail: "Do not draft buyer-facing copy until the proof source is attached.",
    },
    {
      id: weakCoverage?.category ?? "coverage",
      priority: weakCoverage?.status === "missing" ? "High" : "Medium",
      title: weakCoverage ? `Prepare ${weakCoverage.category} coverage` : "Maintain complete proof coverage",
      owner: weakCoverage ? inferOwner(weakCoverage.category) : "Security",
      detail: weakCoverage ? `${weakCoverage.category} coverage is ${formatCoverageStatus(weakCoverage.status).toLowerCase()} with ${weakCoverage.sources} source${weakCoverage.sources === 1 ? "" : "s"}.` : "All coverage categories are ready; keep freshness monitoring active.",
      action: weakCoverage ? `Collect ${weakCoverage.category.toLowerCase()} policy, report, clause, or reviewer-approved note.` : "Review the next buyer category before it becomes urgent.",
      guardrail: "Use category-level coaching; no network data contains source text.",
    },
    {
      id: staleConnector?.id ?? "connectors",
      priority: staleConnector ? "High" : "Low",
      title: staleConnector ? `Refresh ${staleConnector.name}` : "Keep vault connectors healthy",
      owner: staleConnector?.owner.name ?? "Operations",
      detail: staleConnector ? `${staleConnector.name} has ${staleConnector.issues} issue${staleConnector.issues === 1 ? "" : "s"} and ${staleConnector.health}% health.` : "Connector health is stable; schedule periodic sync and owner review.",
      action: staleConnector ? staleConnector.nextAction : "Keep Drive, SharePoint, Notion, and Confluence sources current.",
      guardrail: "Coach source operations, not hidden answer changes.",
    },
    {
      id: "network-pattern",
      priority: pattern?.ready ? "Medium" : "Low",
      title: pattern ? `Reuse ${pattern.title.toLowerCase()}` : "Wait for safe network patterns",
      owner: "Trust Lead",
      detail: pattern ? pattern.detail : "No safe network pattern is ready yet.",
      action: pattern ? pattern.output : "Keep learning local until thresholds pass.",
      guardrail: "Recommendations use abstract patterns and reward labels only.",
    },
  ];
}

function coachRewriteSuggestions({ gaps }) {
  const active = getActiveQuestion();
  const risky = gaps.tasks.map((task) => task.question).find(Boolean) ?? active;
  const candidates = [active, risky, state.questions.find((question) => Number(question.confidence) < 85) ?? active]
    .filter(Boolean)
    .filter((question, index, items) => items.findIndex((item) => item.id === question.id) === index)
    .slice(0, 3);

  return candidates.map((question) => {
    const docs = (question.sources ?? []).map(getEvidenceById).filter(Boolean);
    const sourceLabel = docs[0]?.title ?? "approved evidence";
    return {
      question: shorten(question.text, 74),
      title: question.status === "needs-evidence" ? "Use evidence-pending language" : "Make the answer citation-first",
      before: shorten(question.answer || "No approved answer has been drafted yet.", 170),
      after: coachRewriteText(question, sourceLabel),
    };
  });
}

function coachRewriteText(question, sourceLabel) {
  if (!question.sources?.length) {
    return `Safer draft: We cannot confirm this claim yet. Add approved ${question.category.toLowerCase()} evidence before sending a buyer-facing answer.`;
  }
  if (question.status === "needs-evidence") {
    return `Safer draft: Based on ${sourceLabel}, we can answer part of this request, but final approval is pending stronger ${question.category.toLowerCase()} proof.`;
  }
  return `Safer draft: Based on ${sourceLabel}, the approved response is limited to the cited control language and should not add claims beyond the attached evidence.`;
}

function coachRouteRecommendations({ gaps }) {
  const tasks = gaps.tasks.slice(0, 3);
  const fallback = state.questions
    .filter((question) => question.status !== "approved")
    .slice(0, 3)
    .map((question) => ({
      question,
      owner: memberForQuestion(question),
      request: evidenceRequestForQuestion(question, ["Needs reviewer validation."]),
      daysLeft: daysUntil(question.due),
      reason: `${question.category} answer needs reviewer validation before buyer handoff.`,
    }));

  return (tasks.length ? tasks : fallback).map((task) => ({
    owner: task.owner.name,
    due: task.daysLeft <= 0 ? "Due now" : `${task.daysLeft}d left`,
    reason: task.reason,
    expectedProof: task.request.sourceHint,
    questionId: task.question.id,
  }));
}

function coachOutcomeTuning({ network, run, launch, gaps, connectors }) {
  const reopened = state.audit.filter((entry) => entry.action === "Approval reopened").length;
  return [
    {
      signal: "Approval reward",
      weight: `${state.questions.filter((question) => question.status === "approved").length}/${state.questions.length}`,
      tuning: "Prioritize answer shapes that reached human approval with citations and no claim conflicts.",
    },
    {
      signal: "Buyer friction",
      weight: `${gaps.taskCount} gaps`,
      tuning: "Move repeated evidence gaps into pre-built proof assets before the next buyer review.",
    },
    {
      signal: "Network safety",
      weight: `${network.privacyScore}%`,
      tuning: "Use network recommendations only when tenant guardrails and pattern thresholds stay healthy.",
    },
    {
      signal: "Run quality",
      weight: `${run.score}% run / ${launch.score}% launch`,
      tuning: "Boost recommendations that improve autonomous run score and trust-center launch readiness together.",
    },
    {
      signal: "Stability penalty",
      weight: `${reopened + connectors.issueCount} events`,
      tuning: "Lower confidence for reopened answers and unhealthy sources until owners resolve them.",
    },
  ];
}

function generateCoachPlan() {
  const coach = adaptiveCoachSnapshot();
  const top = coach.proofs[0];
  const detail = `Adaptive coach plan generated with ${coach.proofs.length} proof recommendations, ${coach.rewrites.length} rewrite suggestions, ${coach.routes.length} reviewer routes, and ${coach.score}% coach score.`;
  state.coachActions.status = "Plan generated";
  state.coachActions.generatedAt = new Date().toISOString();
  addCoachReceipt("Coach plan generated", top ? `${detail} Top action: ${top.title}.` : detail);
  addAudit("Coach plan generated", detail);
  render();
  showToast("Adaptive proof coach plan generated.");
}

function applyCoachRecommendation() {
  const coach = adaptiveCoachSnapshot();
  const top = coach.proofs.find((proof) => proof.id && state.questions.some((question) => question.id === proof.id)) ?? coach.proofs[0];
  const question = state.questions.find((item) => item.id === top?.id);
  if (question) {
    const action = state.gapActions[question.id] ?? {};
    state.gapActions[question.id] = {
      ...action,
      status: "Routed",
      routedAt: new Date().toISOString(),
    };
    question.routeStatus = "Routed";
    question.routedAt = new Date().toISOString();
  }
  const detail = top ? `Applied coach recommendation: ${top.title}. ${top.action}` : "Applied coach recommendation from the current review signals.";
  state.coachActions.status = "Recommendation applied";
  state.coachActions.appliedAt = new Date().toISOString();
  addCoachReceipt("Recommendation applied", detail);
  addAudit("Coach recommendation applied", detail);
  render();
  showToast("Coach recommendation applied.");
}

function copyCoachDigest() {
  const coach = adaptiveCoachSnapshot();
  state.coachActions.lastCopiedAt = new Date().toISOString();
  addCoachReceipt("Coach digest copied", "Adaptive proof coach digest copied.");
  addAudit("Coach digest copied", "Adaptive proof coach digest copied.");
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  copyText(coachDigestText(coach), "Adaptive proof coach digest copied.");
}

function addCoachReceipt(action, detail) {
  state.coachActions.receipts = [
    ...(state.coachActions.receipts ?? []),
    {
      id: `coach-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
}

function coachDigestText(coach = adaptiveCoachSnapshot()) {
  const proofLines = coach.proofs.map((proof, index) => `${index + 1}. ${proof.priority}: ${proof.title} | ${proof.owner} | ${proof.action}`).join("\n");
  const rewriteLines = coach.rewrites.map((rewrite, index) => `${index + 1}. ${rewrite.title}: ${rewrite.question} - ${rewrite.after}`).join("\n");
  const routeLines = coach.routes.map((route, index) => `${index + 1}. ${route.owner}: ${route.reason} | ${route.expectedProof}`).join("\n");
  const outcomeLines = coach.outcomes.map((outcome, index) => `${index + 1}. ${outcome.signal}: ${outcome.weight} - ${outcome.tuning}`).join("\n");
  const receiptLines = coach.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Adaptive Proof Coach",
    `Build: ${BUILD_VERSION}`,
    `Coach status: ${coach.statusLabel}`,
    `Coach score: ${coach.score}%`,
    `Proof recommendations: ${coach.proofs.length}`,
    `Rewrite suggestions: ${coach.rewrites.length}`,
    `Reviewer routes: ${coach.routes.length}`,
    "",
    "Next-best proof:",
    proofLines,
    "",
    "Rewrite coach:",
    rewriteLines,
    "",
    "Reviewer routing:",
    routeLines,
    "",
    "Outcome tuning:",
    outcomeLines,
    "",
    "Coach receipts:",
    receiptLines || "No coach receipts yet.",
    "",
    "Coach guardrail:",
    "- Recommendations explain the source signal, expected proof, and human approval gate.",
    "- Network learning informs priority only through privacy-safe patterns and reward labels.",
    "- Buyer-facing copy remains gated until evidence and reviewer approval are attached.",
  ].join("\n");
}

function renderEvidenceAgent() {
  const agent = governedAgentSnapshot();

  elements.agentControlScore.textContent = `${agent.controlScore}%`;
  elements.agentTaskCount.textContent = agent.tasks.length;
  elements.agentLimitCount.textContent = agent.limits.length;
  elements.agentReceiptCount.textContent = agent.receipts.length;
  elements.agentStatus.textContent = agent.statusLabel;
  elements.agentDigest.textContent = agentDigestText(agent);
  elements.approveAgentButton.disabled = state.agentActions.status === "Human approved";

  elements.agentTaskList.innerHTML = "";
  agent.tasks.forEach((task) => {
    const item = document.createElement("article");
    item.className = `agent-task-card ${task.mode === "Approval required" ? "is-gated" : ""}`;
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(task.mode)}</span>
          <strong>${escapeHtml(task.title)}</strong>
        </div>
        <b>${escapeHtml(task.owner)}</b>
      </header>
      <p>${escapeHtml(task.detail)}</p>
      <footer>
        <span>${escapeHtml(task.action)}</span>
        <span>${escapeHtml(task.risk)}</span>
      </footer>
    `;
    elements.agentTaskList.append(item);
  });

  elements.agentLimitList.innerHTML = "";
  agent.limits.forEach((limit) => {
    const item = document.createElement("article");
    item.className = "agent-limit-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(limit.action)}</strong>
        <span>${escapeHtml(limit.permission)}</span>
      </header>
      <p>${escapeHtml(limit.detail)}</p>
    `;
    elements.agentLimitList.append(item);
  });

  elements.agentRefreshList.innerHTML = "";
  agent.refreshes.forEach((refresh) => {
    const item = document.createElement("article");
    item.className = "agent-refresh-card";
    item.innerHTML = `
      <header>
        <strong>${escapeHtml(refresh.source)}</strong>
        <span>${escapeHtml(refresh.status)}</span>
      </header>
      <p>${escapeHtml(refresh.reason)}</p>
      <b>${escapeHtml(refresh.owner)}</b>
    `;
    elements.agentRefreshList.append(item);
  });

  elements.agentImpactList.innerHTML = "";
  agent.impacts.forEach((impact) => {
    const item = document.createElement("article");
    item.className = "agent-impact-card";
    item.innerHTML = `
      <span>${escapeHtml(impact.metric)}</span>
      <strong>${escapeHtml(impact.value)}</strong>
      <p>${escapeHtml(impact.detail)}</p>
    `;
    elements.agentImpactList.append(item);
  });

  elements.agentReceiptList.innerHTML = "";
  if (agent.receipts.length === 0) {
    elements.agentReceiptList.append(emptyState("No agent receipts yet"));
  }
  agent.receipts.forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "agent-receipt-card";
    item.innerHTML = `
      <span>${escapeHtml(formatAuditTime(receipt.at))}</span>
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
    `;
    elements.agentReceiptList.append(item);
  });
}

function governedAgentSnapshot() {
  const coach = adaptiveCoachSnapshot();
  const connectors = connectorSnapshot();
  const gaps = gapAutopilotSnapshot();
  const coverage = coverageSnapshot();
  const tasks = agentTasks({ coach, gaps, connectors });
  const limits = agentLimits();
  const refreshes = agentRefreshQueue({ connectors, gaps });
  const impacts = agentImpactMap({ coach, coverage, connectors, gaps, tasks, refreshes });
  const controlScore = Math.max(0, Math.min(100, Math.round(coach.score * 0.34 + connectors.score * 0.2 + coverage.score * 0.18 + Math.max(0, 100 - gaps.highRiskCount * 12) * 0.16 + Math.max(0, 100 - refreshes.length * 8) * 0.12)));
  const statusLabel = state.agentActions.status === "Draft" ? (tasks.length ? "Ready for approval" : "No agent work") : state.agentActions.status;

  return {
    statusLabel,
    controlScore,
    tasks,
    limits,
    refreshes,
    impacts,
    receipts: state.agentActions.receipts.slice(-8).reverse(),
    coach,
    connectors,
    gaps,
    coverage,
  };
}

function agentTasks({ coach, gaps, connectors }) {
  const proofTasks = coach.proofs.slice(0, 3).map((proof, index) => ({
    id: proof.id || `proof-${index}`,
    title: proof.title,
    owner: proof.owner,
    detail: proof.detail,
    action: proof.action,
    mode: proof.priority === "High" ? "Approval required" : "Agent draft",
    risk: proof.priority === "High" ? "High-risk proof change" : "Internal evidence task",
  }));
  const topGap = gaps.tasks[0];
  const staleConnector = connectors.connectors.find((item) => item.freshness === "Stale" || item.status === "Stale" || item.issues > 0);
  const governed = [
    topGap
      ? {
          id: `request-${topGap.id}`,
          title: `Request ${topGap.request.title.toLowerCase()}`,
          owner: topGap.owner.name,
          detail: topGap.reason,
          action: topGap.request.sourceHint,
          mode: "Approval required",
          risk: `${topGap.severity} proof gap`,
        }
      : null,
    staleConnector
      ? {
          id: `refresh-${staleConnector.id}`,
          title: `Prepare ${staleConnector.name} refresh`,
          owner: staleConnector.owner.name,
          detail: `${staleConnector.name} has ${staleConnector.issues} issue${staleConnector.issues === 1 ? "" : "s"} and ${staleConnector.health}% health.`,
          action: staleConnector.nextAction,
          mode: "Agent draft",
          risk: "Source freshness",
        }
      : null,
  ].filter(Boolean);

  return [...governed, ...proofTasks].filter((task, index, items) => items.findIndex((item) => item.id === task.id) === index).slice(0, 5);
}

function agentLimits() {
  return [
    {
      action: "Draft evidence request",
      permission: "Allowed",
      detail: "The agent may prepare an internal source request with owner, expected proof, risk, and deadline.",
    },
    {
      action: "Refresh source metadata",
      permission: "Allowed with receipt",
      detail: "The agent may queue freshness checks and owner review, but it cannot replace source text automatically.",
    },
    {
      action: "Change buyer-facing claim",
      permission: "Blocked",
      detail: "Buyer-facing answers remain unchanged until evidence is attached and a human reviewer approves the response.",
    },
    {
      action: "Share across tenants",
      permission: "Aggregate only",
      detail: "Only privacy-safe patterns and reward labels can participate in network learning.",
    },
  ];
}

function agentRefreshQueue({ connectors, gaps }) {
  const staleDocs = state.evidence
    .filter((doc) => daysSince(doc.updated) >= 120)
    .slice(0, 4)
    .map((doc) => ({
      id: doc.id,
      source: doc.title,
      owner: doc.owner,
      status: daysSince(doc.updated) >= 365 ? "Stale" : "Review freshness",
      reason: `${doc.title} was last updated ${formatShortDate(doc.updated)} and supports ${state.questions.filter((question) => question.sources?.includes(doc.id)).length} buyer question${state.questions.filter((question) => question.sources?.includes(doc.id)).length === 1 ? "" : "s"}.`,
    }));
  const connectorRows = connectors.connectors
    .filter((item) => item.freshness === "Stale" || item.issues > 0)
    .slice(0, 2)
    .map((item) => ({
      id: item.id,
      source: item.name,
      owner: item.owner.name,
      status: item.status,
      reason: item.nextAction,
    }));
  const gapRows = gaps.tasks.slice(0, 2).map((task) => ({
    id: task.id,
    source: task.request.title,
    owner: task.owner.name,
    status: task.severity,
    reason: task.request.sourceHint,
  }));

  return [...connectorRows, ...gapRows, ...staleDocs].filter((item, index, items) => items.findIndex((row) => row.id === item.id) === index).slice(0, 6);
}

function agentImpactMap({ coach, coverage, connectors, gaps, tasks, refreshes }) {
  return [
    {
      metric: "Coach handoff",
      value: `${coach.score}%`,
      detail: "Agent work starts only from explainable coach recommendations.",
    },
    {
      metric: "Evidence coverage",
      value: `${coverage.ready}/${coverage.items.length}`,
      detail: "Governed source tasks target weak, stale, or missing coverage before the next buyer asks.",
    },
    {
      metric: "Source health",
      value: `${connectors.score}%`,
      detail: "Refresh queue improves connector health without rewriting buyer answers automatically.",
    },
    {
      metric: "Open risk",
      value: `${gaps.highRiskCount} high`,
      detail: "High-risk proof work requires human approval before any buyer-facing reuse.",
    },
    {
      metric: "Agent workload",
      value: `${tasks.length} tasks / ${refreshes.length} refreshes`,
      detail: "The agent keeps the work operational: owner, due date, expected proof, permission, and receipt.",
    },
  ];
}

function prepareAgentPlan() {
  const agent = governedAgentSnapshot();
  const detail = `Governed evidence plan prepared with ${agent.tasks.length} tasks, ${agent.refreshes.length} refresh items, ${agent.limits.length} permission limits, and ${agent.controlScore}% control score.`;
  state.agentActions.status = "Plan prepared";
  state.agentActions.plannedAt = new Date().toISOString();
  addAgentReceipt("Agent plan prepared", detail);
  addAudit("Evidence agent plan prepared", detail);
  render();
  showToast("Governed evidence agent plan prepared.");
}

function approveAgentPlan() {
  const agent = governedAgentSnapshot();
  const task = agent.tasks[0];
  if (task?.id && state.questions.some((question) => question.id === task.id)) {
    const question = state.questions.find((item) => item.id === task.id);
    question.routeStatus = "Routed";
    question.routedAt = new Date().toISOString();
    state.gapActions[question.id] = {
      ...(state.gapActions[question.id] ?? {}),
      status: "Requested",
      requestedAt: new Date().toISOString(),
    };
  }
  const detail = task ? `Human approved governed agent task: ${task.title}. ${task.action}` : "Human approved governed agent plan.";
  state.agentActions.status = "Human approved";
  state.agentActions.approvedAt = new Date().toISOString();
  addAgentReceipt("Human approved", detail);
  addAudit("Evidence agent approved", detail);
  render();
  showToast("Governed agent task approved.");
}

function queueAgentRefresh() {
  const agent = governedAgentSnapshot();
  const refresh = agent.refreshes[0];
  const detail = refresh ? `Queued source refresh: ${refresh.source} for ${refresh.owner}. ${refresh.reason}` : "No source refresh item is currently available.";
  state.agentActions.status = "Refresh queued";
  state.agentActions.refreshedAt = new Date().toISOString();
  addAgentReceipt("Refresh queued", detail);
  addAudit("Evidence refresh queued", detail);
  render();
  showToast("Evidence refresh queued.");
}

function copyAgentDigest() {
  const agent = governedAgentSnapshot();
  state.agentActions.lastCopiedAt = new Date().toISOString();
  addAgentReceipt("Agent digest copied", "Governed evidence agent digest copied.");
  addAudit("Agent digest copied", "Governed evidence agent digest copied.");
  renderEvidenceAgent();
  renderOutcomeMemory();
  copyText(agentDigestText(agent), "Governed evidence agent digest copied.");
}

function addAgentReceipt(action, detail) {
  state.agentActions.receipts = [
    ...(state.agentActions.receipts ?? []),
    {
      id: `agent-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
}

function agentDigestText(agent = governedAgentSnapshot()) {
  const taskLines = agent.tasks.map((task, index) => `${index + 1}. ${task.mode}: ${task.title} | ${task.owner} | ${task.action}`).join("\n");
  const limitLines = agent.limits.map((limit, index) => `${index + 1}. ${limit.action}: ${limit.permission} - ${limit.detail}`).join("\n");
  const refreshLines = agent.refreshes.map((refresh, index) => `${index + 1}. ${refresh.source}: ${refresh.status} | ${refresh.owner} | ${refresh.reason}`).join("\n");
  const impactLines = agent.impacts.map((impact, index) => `${index + 1}. ${impact.metric}: ${impact.value} - ${impact.detail}`).join("\n");
  const receiptLines = agent.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Governed Evidence Agent",
    `Build: ${BUILD_VERSION}`,
    `Agent status: ${agent.statusLabel}`,
    `Control score: ${agent.controlScore}%`,
    `Governed tasks: ${agent.tasks.length}`,
    `Refresh queue: ${agent.refreshes.length}`,
    "",
    "Agent tasks:",
    taskLines,
    "",
    "Permission limits:",
    limitLines,
    "",
    "Safe refresh queue:",
    refreshLines || "No refresh items.",
    "",
    "Impact map:",
    impactLines,
    "",
    "Agent receipts:",
    receiptLines || "No agent receipts yet.",
    "",
    "Agent rule:",
    "- The agent may draft internal evidence work and queue refreshes.",
    "- The agent may not change buyer-facing claims without evidence and human approval.",
    "- Every governed action needs an owner, permission mode, and receipt.",
  ].join("\n");
}

function renderOutcomeMemory() {
  const memory = trustOutcomeMemorySnapshot();

  elements.outcomeMemoryScore.textContent = `${memory.score}%`;
  elements.outcomeEventCount.textContent = memory.events.length;
  elements.outcomeRewardCount.textContent = memory.rewards.length;
  elements.outcomePatternCount.textContent = `${memory.shareablePatterns}/${memory.patterns.length}`;
  elements.outcomeStatus.textContent = memory.statusLabel;
  elements.outcomeDigest.textContent = outcomeDigestText(memory);
  elements.tuneMemoryButton.disabled = state.outcomeActions.status === "Memory tuned";

  elements.outcomeEventList.innerHTML = "";
  memory.events.forEach((event) => {
    const item = document.createElement("article");
    item.className = `outcome-event-card ${event.sentiment === "Negative" ? "is-risk" : ""}`;
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${event.scope}</span>
          <strong>${event.title}</strong>
        </div>
        <b>${event.outcome}</b>
      </header>
      <p>${event.detail}</p>
      <footer>
        <span>${event.signal}</span>
        <span>${event.memory}</span>
      </footer>
    `;
    elements.outcomeEventList.append(item);
  });

  elements.outcomeRewardList.innerHTML = "";
  memory.rewards.forEach((reward) => {
    const item = document.createElement("article");
    item.className = "outcome-reward-card";
    item.innerHTML = `
      <header>
        <strong>${reward.signal}</strong>
        <b>${reward.weight}</b>
      </header>
      <p>${reward.learning}</p>
      <span>${reward.apply}</span>
    `;
    elements.outcomeRewardList.append(item);
  });

  elements.outcomeGuardrailList.innerHTML = "";
  memory.guardrails.forEach((guardrail) => {
    const item = document.createElement("article");
    item.className = `outcome-guardrail-card ${guardrail.status === "Blocked" ? "is-blocked" : ""}`;
    item.innerHTML = `
      <header>
        <strong>${guardrail.title}</strong>
        <b>${guardrail.status}</b>
      </header>
      <p>${guardrail.detail}</p>
    `;
    elements.outcomeGuardrailList.append(item);
  });

  elements.outcomePlaybookList.innerHTML = "";
  memory.playbooks.forEach((playbook) => {
    const item = document.createElement("article");
    item.className = "outcome-playbook-card";
    item.innerHTML = `
      <header>
        <div>
          <span class="label">${playbook.trigger}</span>
          <strong>${playbook.title}</strong>
        </div>
        <b>${playbook.confidence}%</b>
      </header>
      <p>${playbook.action}</p>
      <footer>
        <span>${playbook.privateUse}</span>
        <span>${playbook.networkUse}</span>
      </footer>
    `;
    elements.outcomePlaybookList.append(item);
  });

  elements.outcomeReceiptList.innerHTML = "";
  if (memory.receipts.length === 0) {
    elements.outcomeReceiptList.append(emptyState("No outcome receipts yet"));
  }
  memory.receipts.forEach((receipt) => {
    const item = document.createElement("article");
    item.className = "outcome-receipt-card";
    item.innerHTML = `
      <strong>${receipt.action}</strong>
      <p>${receipt.detail}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.outcomeReceiptList.append(item);
  });
}

function trustOutcomeMemorySnapshot() {
  const coverage = coverageSnapshot();
  const trustRoom = trustRoomSnapshot();
  const followUps = followUpSnapshot();
  const network = learningNetworkSnapshot();
  const coach = adaptiveCoachSnapshot();
  const agent = governedAgentSnapshot();
  const events = outcomeEvents({ trustRoom, followUps, agent, coach });
  const rewards = outcomeRewards({ events, coverage, trustRoom, followUps, agent, network });
  const guardrails = outcomeGuardrails({ network, agent });
  const patterns = outcomePatterns({ events, rewards, guardrails });
  const playbooks = outcomePlaybooks({ events, rewards, coverage, agent, network });
  const shareablePatterns = patterns.filter((pattern) => pattern.shareable).length;
  const score = Math.min(
    100,
    Math.round(
      coverage.score * 0.22 +
        trustRoom.score * 0.22 +
        agent.controlScore * 0.2 +
        network.privacyScore * 0.18 +
        Math.max(0, 100 - followUps.slaCount * 12) * 0.1 +
        Math.min(100, rewards.length * 18) * 0.08,
    ),
  );
  const statusLabel = state.outcomeActions.status === "Draft" ? "Ready to capture" : state.outcomeActions.status;

  return {
    score,
    events,
    rewards,
    guardrails,
    patterns,
    playbooks,
    shareablePatterns,
    statusLabel,
    receipts: state.outcomeActions.receipts.slice(-8).reverse(),
    trustRoom,
    followUps,
    network,
    agent,
  };
}

function outcomeEvents({ trustRoom, followUps, agent, coach }) {
  const challenged = followUps.items.find((item) => item.status === "Needs evidence") ?? followUps.items[0];
  return [
    {
      id: "accepted-room",
      scope: "Private workspace",
      title: "Buyer reused sealed AI answer",
      outcome: trustRoom.views > 1 ? "Accepted" : "Viewed",
      sentiment: "Positive",
      detail: `${trustRoom.buyer} viewed the scoped room and copied ${trustRoom.copies} sealed answer packet.`,
      signal: "Reward source-backed AI governance language.",
      memory: "Local memory strengthens AI Usage Standard for similar buyer questions.",
    },
    {
      id: "challenged-proof",
      scope: "Private workspace",
      title: challenged ? `Buyer challenged ${challenged.category.toLowerCase()} proof` : "Buyer challenged proof",
      outcome: challenged?.status ?? "Needs evidence",
      sentiment: challenged?.status === "Needs evidence" ? "Negative" : "Neutral",
      detail: challenged ? challenged.comment : "No unresolved buyer challenge is currently open.",
      signal: "Penalize weak or stale proof paths before the next review.",
      memory: "Local memory routes similar questions earlier to the evidence owner.",
    },
    {
      id: "agent-approved",
      scope: "Governed agent",
      title: "Human-approved agent task",
      outcome: state.agentActions.status,
      sentiment: state.agentActions.status === "Human approved" ? "Positive" : "Neutral",
      detail: `${agent.tasks.length} governed tasks and ${agent.refreshes.length} refresh checks are available with permission limits.`,
      signal: "Reward human-approved execution, not silent automation.",
      memory: "Local memory keeps agent actions behind approval gates for buyer-facing claims.",
    },
    {
      id: "coach-improved",
      scope: "Adaptive coach",
      title: "Coach guidance became outcome-aware",
      outcome: `${coach.score}% coach score`,
      sentiment: "Positive",
      detail: `${coach.proofs.length} proof moves, ${coach.rewrites.length} rewrites, and ${coach.routes.length} routes now feed outcome memory.`,
      signal: "Tune future recommendations using accepted, challenged, and delayed outcomes.",
      memory: "Local memory ranks next-best proof by actual review result.",
    },
  ];
}

function outcomeRewards({ events, coverage, trustRoom, followUps, agent, network }) {
  return [
    {
      signal: "Accepted sealed answer",
      weight: trustRoom.sharedCount > 0 ? "+24" : "+12",
      learning: "Answers with citations and current source coverage should be promoted for similar buyer questions.",
      apply: "Increase approved-answer reuse when claim trace and source freshness are healthy.",
    },
    {
      signal: "Buyer challenge",
      weight: followUps.evidenceCount ? "-18" : "-6",
      learning: "Open evidence comments should reduce confidence until the owner adds stronger proof.",
      apply: "Route similar categories earlier and require fresh source review before approval.",
    },
    {
      signal: "Human-approved agent action",
      weight: state.agentActions.status === "Human approved" ? "+18" : "+8",
      learning: "Governed execution improves trust when each task has owner, permission mode, and receipt.",
      apply: "Prefer agent tasks that preserve human approval before buyer-facing changes.",
    },
    {
      signal: "Network-safe pattern",
      weight: `${network.readyPatternCount}/${network.patterns.length}`,
      learning: "Only aggregate category, freshness, confidence, and friction labels can improve cross-tenant recommendations.",
      apply: `Share ${coverage.ready} ready categories as abstract patterns, never raw evidence or buyer text.`,
    },
  ];
}

function outcomeGuardrails({ network, agent }) {
  return [
    {
      title: "Raw evidence stays tenant-private",
      status: "Enforced",
      detail: "Policies, SOC excerpts, prompts, buyer names, and customer names do not enter cross-organization memory.",
    },
    {
      title: "Outcome labels can aggregate",
      status: network.privacyScore >= 90 ? "Allowed" : "Review",
      detail: "Accepted, challenged, delayed, reused, and blocked labels may improve pattern recommendations after privacy checks.",
    },
    {
      title: "Buyer-facing claims need approval",
      status: "Blocked",
      detail: "Outcome memory may suggest a playbook, but it cannot approve new buyer-facing claims without evidence and a human reviewer.",
    },
    {
      title: "Agent actions remain receipted",
      status: agent.controlScore >= 80 ? "Enforced" : "Review",
      detail: "Every governed execution signal must retain owner, permission, timestamp, and reason.",
    },
  ];
}

function outcomePatterns({ events, rewards, guardrails }) {
  return [
    {
      title: "AI governance accepted answer pattern",
      shareable: true,
      detail: "Questions about model training respond well to concise no-training language plus human approval proof.",
    },
    {
      title: "Incident timeline evidence gap pattern",
      shareable: true,
      detail: "Incident notification answers need current policy plus customer-facing escalation wording.",
    },
    {
      title: "Owner routing friction pattern",
      shareable: true,
      detail: "Security-owned access and encryption answers move faster when routed before questionnaire import is complete.",
    },
    {
      title: "Raw buyer challenge text",
      shareable: false,
      detail: `${events.length} local events and ${rewards.length} reward signals remain private when guardrails block raw text sharing.`,
    },
  ].map((pattern) => ({
    ...pattern,
    guardrail: guardrails.find((item) => item.status === "Blocked")?.title ?? "Privacy checked",
  }));
}

function outcomePlaybooks({ events, rewards, coverage, agent, network }) {
  const challenge = events.find((event) => event.sentiment === "Negative");
  const accepted = events.find((event) => event.outcome === "Accepted" || event.outcome === "Viewed");
  return [
    {
      trigger: "Accepted answer",
      title: "Promote sealed answer memory",
      confidence: Math.min(96, 74 + coverage.score / 5),
      action: accepted ? `Reuse the accepted pattern behind "${accepted.title}" when source freshness and claim trace stay healthy.` : "Wait for accepted buyer outcome before promoting reusable answer memory.",
      privateUse: "Local workspace can reuse exact approved wording.",
      networkUse: "Network can learn only category and outcome label.",
    },
    {
      trigger: "Buyer challenge",
      title: "Pre-route weak proof before next review",
      confidence: challenge ? 88 : 68,
      action: challenge ? `Route similar ${challenge.title.toLowerCase()} to the owner before approval.` : "No active challenge is severe enough to change routing.",
      privateUse: "Local workspace sees exact buyer issue and owner.",
      networkUse: "Network receives abstract friction type only.",
    },
    {
      trigger: "Governed execution",
      title: "Prefer approved agent tasks",
      confidence: agent.controlScore,
      action: "Rank agent-created evidence requests higher when a human approved the task and a receipt exists.",
      privateUse: "Local workspace can use task owner and source details.",
      networkUse: "Network can learn permission mode and outcome band.",
    },
    {
      trigger: "Peer-safe pattern",
      title: "Apply aggregate trust benchmark",
      confidence: network.privacyScore,
      action: "Use peer-safe freshness and confidence bands to warn when an answer is likely to be challenged.",
      privateUse: "Local workspace keeps source text private.",
      networkUse: "Network shares only aggregate benchmark ranges.",
    },
  ];
}

function captureOutcomes() {
  const memory = trustOutcomeMemorySnapshot();
  const detail = `Captured ${memory.events.length} outcome events, ${memory.rewards.length} reward signals, and ${memory.shareablePatterns}/${memory.patterns.length} privacy-safe patterns.`;
  state.outcomeActions.status = "Outcomes captured";
  state.outcomeActions.capturedAt = new Date().toISOString();
  addOutcomeReceipt("Outcomes captured", detail);
  addAudit("Outcome memory captured", detail);
  renderOutcomeMemory();
  renderAdaptivePlaybooks();
  renderLearningNetwork();
  renderAdaptiveCoach();
  showToast("Trust outcomes captured.");
}

function tuneOutcomeMemory() {
  const memory = trustOutcomeMemorySnapshot();
  const playbook = memory.playbooks[0];
  state.outcomeActions.status = "Memory tuned";
  state.outcomeActions.tunedAt = new Date().toISOString();
  const detail = playbook ? `Outcome memory tuned: ${playbook.title}. ${playbook.action}` : "Outcome memory tuned from current buyer review signals.";
  addOutcomeReceipt("Memory tuned", detail);
  addAudit("Outcome memory tuned", detail);
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  renderAdaptivePlaybooks();
  showToast("Outcome memory tuned.");
}

function copyOutcomeDigest() {
  const memory = trustOutcomeMemorySnapshot();
  state.outcomeActions.lastCopiedAt = new Date().toISOString();
  addOutcomeReceipt("Outcome digest copied", "Trust outcome memory digest copied.");
  addAudit("Outcome digest copied", "Trust outcome memory digest copied.");
  renderOutcomeMemory();
  renderAdaptivePlaybooks();
  copyText(outcomeDigestText(memory), "Outcome memory digest copied.");
}

function addOutcomeReceipt(action, detail) {
  state.outcomeActions.receipts = [
    ...(state.outcomeActions.receipts ?? []),
    {
      id: `outcome-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ];
  schedulePersist();
}

function outcomeDigestText(memory = trustOutcomeMemorySnapshot()) {
  const eventLines = memory.events.map((event, index) => `${index + 1}. ${event.outcome}: ${event.title} | ${event.signal}`).join("\n");
  const rewardLines = memory.rewards.map((reward, index) => `${index + 1}. ${reward.signal}: ${reward.weight} - ${reward.learning}`).join("\n");
  const guardrailLines = memory.guardrails.map((guardrail, index) => `${index + 1}. ${guardrail.title}: ${guardrail.status} - ${guardrail.detail}`).join("\n");
  const patternLines = memory.patterns.map((pattern, index) => `${index + 1}. ${pattern.shareable ? "SHAREABLE" : "PRIVATE"}: ${pattern.title} - ${pattern.detail}`).join("\n");
  const playbookLines = memory.playbooks.map((playbook, index) => `${index + 1}. ${playbook.title}: ${playbook.confidence}% - ${playbook.action}`).join("\n");
  const receiptLines = memory.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Trust Outcome Memory",
    `Build: ${BUILD_VERSION}`,
    `Memory status: ${memory.statusLabel}`,
    `Memory score: ${memory.score}%`,
    `Outcome events: ${memory.events.length}`,
    `Reward signals: ${memory.rewards.length}`,
    `Shareable patterns: ${memory.shareablePatterns}/${memory.patterns.length}`,
    "",
    "Outcome events:",
    eventLines,
    "",
    "Reward signals:",
    rewardLines,
    "",
    "Privacy guardrails:",
    guardrailLines,
    "",
    "Pattern memory:",
    patternLines,
    "",
    "Adaptive playbooks:",
    playbookLines,
    "",
    "Outcome receipts:",
    receiptLines || "No outcome receipts yet.",
    "",
    "Learning boundary:",
    "- Local workspace may learn exact approved wording, owner route, source, and buyer outcome.",
    "- Network may learn only aggregate category, freshness, confidence, friction, and reward labels.",
    "- Raw evidence, buyer text, contracts, prompts, and customer names remain tenant-private.",
  ].join("\n");
}

function renderAdaptivePlaybooks() {
  const strategy = adaptivePlaybookSnapshot();

  elements.playbookStrategyScore.textContent = `${strategy.score}%`;
  elements.playbookCount.textContent = strategy.playbooks.length;
  elements.playbookGateCount.textContent = strategy.gates.length;
  elements.playbookReceiptCount.textContent = strategy.receipts.length;
  elements.playbookStatus.textContent = strategy.statusLabel;
  elements.playbookDigest.textContent = playbookDigestText(strategy);
  elements.applyPlaybookButton.disabled = strategy.playbooks.length === 0;

  elements.playbookList.innerHTML = "";
  strategy.playbooks.forEach((playbook) => {
    const card = document.createElement("article");
    card.className = "playbook-card";
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(playbook.motion)}</span>
          <strong>${escapeHtml(playbook.title)}</strong>
        </div>
        <b>${playbook.confidence}%</b>
      </header>
      <p>${escapeHtml(playbook.action)}</p>
      <footer>
        <span>${escapeHtml(playbook.trigger)}</span>
        <span>${escapeHtml(playbook.learning)}</span>
      </footer>
    `;
    elements.playbookList.append(card);
  });

  elements.playbookSequenceList.innerHTML = "";
  strategy.sequence.forEach((step) => {
    const card = document.createElement("article");
    card.className = "playbook-step-card";
    card.innerHTML = `
      <span>${escapeHtml(step.step)}</span>
      <div>
        <strong>${escapeHtml(step.title)}</strong>
        <p>${escapeHtml(step.detail)}</p>
      </div>
      <b>${escapeHtml(step.owner)}</b>
    `;
    elements.playbookSequenceList.append(card);
  });

  elements.playbookGateList.innerHTML = "";
  strategy.gates.forEach((gate) => {
    const card = document.createElement("article");
    card.className = `playbook-gate-card ${gate.status === "Blocked" ? "is-blocked" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(gate.title)}</strong>
        <b>${escapeHtml(gate.status)}</b>
      </header>
      <p>${escapeHtml(gate.detail)}</p>
    `;
    elements.playbookGateList.append(card);
  });

  elements.playbookReceiptList.innerHTML = "";
  if (strategy.receipts.length === 0) {
    elements.playbookReceiptList.append(emptyState("No playbook receipts yet"));
  }
  strategy.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "playbook-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.playbookReceiptList.append(card);
  });
}

function adaptivePlaybookSnapshot() {
  const coverage = coverageSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const gaps = gapAutopilotSnapshot();
  const run = autonomousRunSnapshot();
  const launch = trustLaunchSnapshot();
  const network = learningNetworkSnapshot();
  const coach = adaptiveCoachSnapshot();
  const agent = governedAgentSnapshot();
  const trustRoom = trustRoomSnapshot();
  const followUps = followUpSnapshot();
  const pipeline = pipelineSnapshot();
  const playbooks = trustPlaybooks({ coverage, outcomes, gaps, run, launch, network, coach, agent, trustRoom, followUps, pipeline });
  const sequence = proofSequence(playbooks[0], { gaps, agent, trustRoom, outcomes });
  const gates = playbookGates({ network, agent, trustRoom, pipeline, gaps });
  const score = Math.min(
    100,
    Math.round(
      coverage.score * 0.2 +
        outcomes.score * 0.22 +
        network.privacyScore * 0.18 +
        agent.controlScore * 0.14 +
        trustRoom.score * 0.12 +
        Math.max(0, 100 - gaps.highRiskCount * 10 - followUps.slaCount * 6) * 0.1 +
        Math.min(100, playbooks.length * 16) * 0.04,
    ),
  );
  const statusLabel = state.playbookActions.status === "Draft" ? "Ready to generate" : state.playbookActions.status;

  return {
    score,
    statusLabel,
    playbooks,
    sequence,
    gates,
    receipts: state.playbookActions.receipts.slice(-8).reverse(),
    coverage,
    outcomes,
    gaps,
    run,
    launch,
    network,
    coach,
    agent,
    trustRoom,
    followUps,
    pipeline,
  };
}

function trustPlaybooks({ coverage, outcomes, gaps, network, coach, agent, trustRoom, followUps, pipeline }) {
  const aiQuestion = state.questions.find((question) => question.category === "AI Governance") ?? getActiveQuestion();
  const topGap = gaps.tasks[0];
  const challenged = outcomes.events.find((event) => event.sentiment === "Negative");
  const activeTrace = claimTraceSnapshot(getActiveQuestion());
  const staleCount = state.evidence.filter((doc) => daysSince(doc.updated) >= 365).length;

  const playbooks = [
    {
      id: "ai-fast-answer",
      title: "AI governance fast-answer motion",
      motion: "Answer now",
      buyer: workspaceAccount.company,
      confidence: Math.min(97, Math.round(76 + coverage.score / 5 + outcomes.shareablePatterns * 2)),
      trigger: "Accepted AI answer plus current source coverage",
      action: `Reuse the approved ${aiQuestion.category} answer with citations, then keep human approval before release.`,
      learning: "Local memory reuses exact approved wording; network memory learns only category and outcome band.",
      questionId: aiQuestion.id,
      priority: 82,
    },
    {
      id: "proof-recovery",
      title: "Evidence gap recovery motion",
      motion: "Request proof",
      buyer: workspaceAccount.company,
      confidence: topGap ? Math.min(96, 84 + gaps.highRiskCount * 3) : 68,
      trigger: topGap ? `${topGap.severity} gap in ${topGap.question.category}` : "No severe gap currently open",
      action: topGap
        ? `Ask ${topGap.owner.name} for ${topGap.request.title.toLowerCase()} before answering "${topGap.question.text}".`
        : "Keep a proof request ready only when the confidence or freshness gate weakens.",
      learning: challenged ? challenged.signal : "Weak proof paths are routed earlier before buyer friction appears.",
      questionId: topGap?.question.id ?? getActiveQuestion().id,
      priority: topGap ? 96 : 52,
    },
    {
      id: "trust-room-accelerator",
      title: "Trust room acceleration motion",
      motion: "Open trust room",
      buyer: trustRoom.buyer,
      confidence: Math.min(95, Math.round(70 + trustRoom.score / 4 + trustRoom.sharedCount * 2)),
      trigger: `${trustRoom.sharedCount}/${trustRoom.answers.length} sealed answers are room-ready`,
      action: "Send a scoped trust room instead of scattered attachments when the buyer needs multiple approved answers.",
      learning: "Room views, copies, and reopened questions become private outcome signals.",
      questionId: aiQuestion.id,
      priority: trustRoom.score >= 80 ? 88 : 64,
    },
    {
      id: "sla-owner-route",
      title: "SLA rescue motion",
      motion: "Route owner",
      buyer: pipeline.accounts[0]?.company ?? workspaceAccount.company,
      confidence: Math.min(94, 72 + followUps.slaCount * 8 + pipeline.slaRiskCount * 5),
      trigger: `${followUps.slaCount + pipeline.slaRiskCount} deadline risks across reviews`,
      action: "Route owner before the draft is edited again, then attach the needed source or fallback wording.",
      learning: "Outcome memory rewards earlier owner routing when it prevents buyer reopen cycles.",
      questionId: topGap?.question.id ?? aiQuestion.id,
      priority: followUps.slaCount || pipeline.slaRiskCount ? 90 : 58,
    },
    {
      id: "unsupported-claim-block",
      title: "Unsupported claim block motion",
      motion: "Block claim",
      buyer: workspaceAccount.company,
      confidence: Math.min(96, 70 + activeTrace.conflicts * 12 + staleCount * 3 + (network.privacyScore < 90 ? 6 : 0)),
      trigger: `${activeTrace.conflicts} conflicts and ${staleCount} stale sources detected`,
      action: "Block buyer-ready copy until a fresh source, owner approval, and claim trace agree.",
      learning: "The system learns that blocked claims are wins when they prevent unsupported security commitments.",
      questionId: getActiveQuestion().id,
      priority: activeTrace.conflicts ? 94 : 60,
    },
  ];

  if (agent.controlScore >= 88 || coach.score >= 80) {
    playbooks.push({
      id: "agent-coach-loop",
      title: "Agent and coach closed-loop motion",
      motion: "Sequence work",
      buyer: workspaceAccount.company,
      confidence: Math.min(95, Math.round((agent.controlScore + coach.score) / 2)),
      trigger: "Governed agent and adaptive coach both have usable signals",
      action: "Let the agent queue internal evidence work, then let the coach rewrite only after sources pass approval gates.",
      learning: "Reinforcement stays useful because every action has owner, permission, and result receipts.",
      questionId: getActiveQuestion().id,
      priority: 86,
    });
  }

  return playbooks.sort((a, b) => b.priority - a.priority || b.confidence - a.confidence).slice(0, 5);
}

function proofSequence(playbook, { gaps, agent, trustRoom, outcomes }) {
  const topGap = gaps.tasks[0];
  const topTask = agent.tasks[0];
  return [
    {
      step: "01",
      title: "Pick the trust motion",
      owner: "AnswerSeal",
      detail: playbook ? `${playbook.motion}: ${playbook.title} at ${playbook.confidence}% confidence.` : "Generate playbooks from current workspace signals.",
    },
    {
      step: "02",
      title: "Bind the proof",
      owner: topGap?.owner.name ?? workspaceAccount.currentRole,
      detail: topGap ? `Resolve ${topGap.question.category} proof gap with ${topGap.request.title}.` : "Use the highest-authority source already attached to the answer.",
    },
    {
      step: "03",
      title: "Run the human gate",
      owner: topTask?.owner ?? workspaceAccount.currentRole,
      detail: topTask ? `${topTask.mode}: ${topTask.action}` : "Reviewer approves or blocks buyer-facing copy before submission.",
    },
    {
      step: "04",
      title: "Ship buyer-safe handoff",
      owner: "Trust Lead",
      detail: trustRoom.sharedCount > 1 ? "Use the trust room or portal copy with citations attached." : "Use portal-ready copy only after source confidence is healthy.",
    },
    {
      step: "05",
      title: "Record the outcome",
      owner: "Learning loop",
      detail: `${outcomes.events.length} outcome events feed local memory; only privacy-safe labels can improve network recommendations.`,
    },
  ];
}

function playbookGates({ network, agent, trustRoom, pipeline, gaps }) {
  return [
    {
      title: "Buyer-facing answer change",
      status: "Human gate",
      detail: "Any changed answer must keep a reviewer, source citation, and approval receipt before buyer submission.",
    },
    {
      title: "Raw evidence sharing",
      status: "Blocked",
      detail: "Policies, SOC excerpts, customer names, contracts, prompts, and buyer text stay tenant-private.",
    },
    {
      title: "Network learning promotion",
      status: network.privacyScore >= 90 ? "Allowed" : "Review",
      detail: "Only category, freshness band, confidence band, friction label, and outcome label may aggregate.",
    },
    {
      title: "Agent execution",
      status: agent.controlScore >= 85 ? "Human gate" : "Review",
      detail: "The agent can queue internal work, but cannot alter buyer-facing commitments without approval.",
    },
    {
      title: "External trust room share",
      status: trustRoom.score >= 80 ? "Allowed" : "Review",
      detail: `${trustRoom.sharedCount}/${trustRoom.answers.length} answers are sealed for room handoff.`,
    },
    {
      title: "Deadline override",
      status: pipeline.slaRiskCount || gaps.highRiskCount ? "Review" : "Allowed",
      detail: "SLA pressure cannot bypass evidence gaps, owner routing, or conflict checks.",
    },
  ];
}

function generateTrustPlaybooks() {
  const strategy = adaptivePlaybookSnapshot();
  const top = strategy.playbooks[0];
  const detail = top
    ? `Generated ${strategy.playbooks.length} playbooks. Recommended ${top.motion}: ${top.title} at ${top.confidence}% confidence.`
    : "Generated adaptive trust playbooks from the current workspace.";
  state.playbookActions.status = "Playbooks generated";
  state.playbookActions.generatedAt = new Date().toISOString();
  addPlaybookReceipt("Playbooks generated", detail);
  addAudit("Adaptive playbooks generated", detail);
  renderAdaptivePlaybooks();
  renderAudit();
  showToast("Adaptive trust playbooks generated.");
}

function applyTopPlaybook() {
  const strategy = adaptivePlaybookSnapshot();
  const top = strategy.playbooks[0];
  if (!top) return;

  const question = state.questions.find((item) => item.id === top.questionId) ?? getActiveQuestion();
  state.activeQuestionId = question.id;
  question.routedAt = new Date().toISOString();

  if (top.motion === "Request proof") {
    question.status = "needs-evidence";
    question.routeStatus = "Needs owner";
  } else if (top.motion === "Route owner") {
    question.routeStatus = "Assigned";
  } else if (top.motion === "Block claim") {
    question.status = "blocked";
    question.routeStatus = "Needs owner";
  } else if (top.motion === "Open trust room") {
    state.trustRoom.status = "Live";
    state.trustRoom.preparedAt = state.trustRoom.preparedAt ?? new Date().toISOString();
  }

  const detail = `Applied ${top.motion}: ${top.title}. ${top.action}`;
  state.playbookActions.status = "Strategy applied";
  state.playbookActions.appliedAt = new Date().toISOString();
  addPlaybookReceipt("Strategy applied", detail);
  addAudit("Adaptive playbook applied", detail);
  render();
  showToast("Top trust playbook applied.");
}

function copyPlaybookDigest() {
  const strategy = adaptivePlaybookSnapshot();
  state.playbookActions.lastCopiedAt = new Date().toISOString();
  addPlaybookReceipt("Playbook digest copied", "Adaptive trust playbook digest copied.");
  addAudit("Playbook digest copied", "Adaptive trust playbook digest copied.");
  renderAdaptivePlaybooks();
  renderAudit();
  copyText(playbookDigestText(strategy), "Adaptive trust playbook digest copied.");
}

function addPlaybookReceipt(action, detail) {
  state.playbookActions.receipts = [
    ...(state.playbookActions.receipts ?? []),
    {
      id: `playbook-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function playbookDigestText(strategy = adaptivePlaybookSnapshot()) {
  const playbookLines = strategy.playbooks.map((playbook, index) => `${index + 1}. ${playbook.motion}: ${playbook.title} | ${playbook.confidence}% | ${playbook.action}`).join("\n");
  const sequenceLines = strategy.sequence.map((step) => `${step.step}. ${step.title} | ${step.owner} | ${step.detail}`).join("\n");
  const gateLines = strategy.gates.map((gate, index) => `${index + 1}. ${gate.status}: ${gate.title} - ${gate.detail}`).join("\n");
  const receiptLines = strategy.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Adaptive Trust Playbooks",
    `Build: ${BUILD_VERSION}`,
    `Strategy status: ${strategy.statusLabel}`,
    `Strategy score: ${strategy.score}%`,
    `Recommended playbooks: ${strategy.playbooks.length}`,
    `Human gates: ${strategy.gates.length}`,
    "",
    "Buyer playbooks:",
    playbookLines,
    "",
    "Proof sequence:",
    sequenceLines,
    "",
    "Human gates:",
    gateLines,
    "",
    "Playbook receipts:",
    receiptLines || "No playbook receipts yet.",
    "",
    "Closed-loop rule:",
    "- Local workspace learns exact approved wording, owner route, and outcome.",
    "- Network learning receives only privacy-safe bands and labels.",
    "- A strategy can recommend action, but proof and human approval decide what ships.",
  ].join("\n");
}

function renderTrustBenchmarks() {
  const benchmark = trustBenchmarkSnapshot();

  elements.benchmarkReadinessScore.textContent = `${benchmark.score}%`;
  elements.benchmarkBandCount.textContent = `${benchmark.aheadCount}/${benchmark.bands.length}`;
  elements.benchmarkFrictionCount.textContent = benchmark.frictionRows.length;
  elements.benchmarkReceiptCount.textContent = benchmark.receipts.length;
  elements.benchmarkStatus.textContent = benchmark.statusLabel;
  elements.benchmarkDigest.textContent = benchmarkDigestText(benchmark);
  elements.applyBenchmarkButton.disabled = benchmark.investments.length === 0;

  elements.benchmarkBandList.innerHTML = "";
  benchmark.bands.forEach((band) => {
    const card = document.createElement("article");
    card.className = `benchmark-band-card ${band.statusClass}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(band.category)}</span>
          <strong>${escapeHtml(band.statusLabel)}</strong>
        </div>
        <b>${band.localScore}%</b>
      </header>
      <div class="benchmark-range" aria-label="${escapeHtml(band.category)} benchmark">
        <div><span style="width: ${Math.max(0, Math.min(100, band.localScore))}%"></span></div>
        <em>Strong peer band ${band.peerStrong}%</em>
      </div>
      <p>${escapeHtml(band.detail)}</p>
      <footer>
        <span>Peer median ${band.peerMedian}%</span>
        <span>${escapeHtml(band.deltaLabel)}</span>
      </footer>
    `;
    elements.benchmarkBandList.append(card);
  });

  elements.benchmarkFrictionList.innerHTML = "";
  benchmark.frictionRows.forEach((row) => {
    const card = document.createElement("article");
    card.className = `benchmark-friction-card ${row.severity === "High" ? "is-high" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(row.title)}</strong>
        <b>${escapeHtml(row.severity)}</b>
      </header>
      <p>${escapeHtml(row.detail)}</p>
      <span>${escapeHtml(row.signal)}</span>
    `;
    elements.benchmarkFrictionList.append(card);
  });

  elements.benchmarkInvestmentList.innerHTML = "";
  benchmark.investments.forEach((investment) => {
    const card = document.createElement("article");
    card.className = "benchmark-investment-card";
    card.innerHTML = `
      <span>${escapeHtml(investment.category)}</span>
      <strong>${escapeHtml(investment.title)}</strong>
      <p>${escapeHtml(investment.detail)}</p>
      <b>${escapeHtml(investment.impact)}</b>
    `;
    elements.benchmarkInvestmentList.append(card);
  });

  elements.benchmarkGuardrailList.innerHTML = "";
  benchmark.guardrails.forEach((guardrail) => {
    const card = document.createElement("article");
    card.className = "benchmark-guardrail-card";
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(guardrail.title)}</strong>
        <span>${escapeHtml(guardrail.status)}</span>
      </header>
      <p>${escapeHtml(guardrail.detail)}</p>
    `;
    elements.benchmarkGuardrailList.append(card);
  });

  elements.benchmarkReceiptList.innerHTML = "";
  if (benchmark.receipts.length === 0) {
    elements.benchmarkReceiptList.append(emptyState("No benchmark receipts yet"));
  }
  benchmark.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "benchmark-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.benchmarkReceiptList.append(card);
  });
}

function trustBenchmarkSnapshot() {
  const coverage = coverageSnapshot();
  const network = learningNetworkSnapshot();
  const playbooks = adaptivePlaybookSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const gaps = gapAutopilotSnapshot();
  const connectors = connectorSnapshot();
  const followUps = followUpSnapshot();
  const pipeline = pipelineSnapshot();
  const trustRoom = trustRoomSnapshot();
  const bands = benchmarkBands({ coverage, gaps, connectors, outcomes });
  const frictionRows = benchmarkFrictionRows({ bands, gaps, followUps, pipeline, connectors });
  const investments = benchmarkInvestments({ bands, gaps, connectors, trustRoom, playbooks });
  const guardrails = benchmarkGuardrails({ network, bands });
  const aheadCount = bands.filter((band) => band.delta >= 0 && band.localScore >= 75).length;
  const frictionPenalty = Math.min(32, frictionRows.filter((row) => row.severity === "High").length * 9 + frictionRows.length * 3);
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(coverage.score * 0.28 + network.privacyScore * 0.22 + playbooks.score * 0.18 + connectors.score * 0.14 + trustRoom.score * 0.1 + Math.max(0, 100 - frictionPenalty) * 0.08),
    ),
  );
  const statusLabel = state.benchmarkActions.status === "Draft" ? "Ready to benchmark" : state.benchmarkActions.status;

  return {
    score,
    statusLabel,
    bands,
    aheadCount,
    frictionRows,
    investments,
    guardrails,
    receipts: state.benchmarkActions.receipts.slice(-8).reverse(),
    coverage,
    network,
    playbooks,
    outcomes,
    gaps,
    connectors,
    followUps,
    pipeline,
    trustRoom,
  };
}

function benchmarkBands({ coverage, gaps, connectors, outcomes }) {
  return coverage.items.map((item) => {
    const peer = peerBenchmarkForCategory(item.category);
    const categoryGaps = gaps.tasks.filter((task) => task.question.category === item.category);
    const localScore = Math.max(0, Math.min(100, Math.round(item.score - categoryGaps.length * 4 - (item.status === "stale" ? 8 : 0))));
    const delta = localScore - peer.median;
    const friction = benchmarkFrictionLabel({ item, categoryGaps, connectors, outcomes });
    const statusLabel = delta >= 8 ? "Ahead of peer band" : delta >= -6 ? "Inside peer band" : "Below peer band";
    const statusClass = delta >= 8 ? "is-ahead" : delta >= -6 ? "is-even" : "is-behind";
    const deltaLabel = delta >= 0 ? `+${delta} vs peer` : `${delta} vs peer`;
    return {
      category: item.category,
      localScore,
      peerMedian: peer.median,
      peerStrong: peer.strong,
      delta,
      deltaLabel,
      friction,
      statusLabel,
      statusClass,
      detail: `${formatCoverageStatus(item.status)} coverage with ${item.sources} source${item.sources === 1 ? "" : "s"}, ${item.openRisks} open risk${item.openRisks === 1 ? "" : "s"}, and ${friction}.`,
      recommendation: peer.recommendation,
      proofType: peer.proofType,
    };
  });
}

function peerBenchmarkForCategory(category) {
  const peerBands = {
    "AI Governance": {
      median: 78,
      strong: 92,
      proofType: "AI usage policy and model-training language",
      recommendation: "Keep no-training language current and pair it with human approval evidence.",
    },
    Privacy: {
      median: 74,
      strong: 90,
      proofType: "DPA, retention, deletion, and subprocessors",
      recommendation: "Attach DPA and deletion evidence before legal review.",
    },
    Incident: {
      median: 71,
      strong: 88,
      proofType: "Incident notification SLA",
      recommendation: "Refresh customer-facing incident notification proof before buyer escalation.",
    },
    Access: {
      median: 82,
      strong: 94,
      proofType: "SSO, MFA, and access review",
      recommendation: "Show current access review evidence with SSO/MFA policy language.",
    },
    Encryption: {
      median: 84,
      strong: 95,
      proofType: "Encryption at rest and transit controls",
      recommendation: "Pair SOC 2 control evidence with concise encryption claims.",
    },
    Continuity: {
      median: 76,
      strong: 90,
      proofType: "BCP, backups, RTO, and RPO",
      recommendation: "Prepare RTO/RPO proof before continuity questions enter buyer portals.",
    },
    "Security Testing": {
      median: 79,
      strong: 91,
      proofType: "Pen test and vulnerability management",
      recommendation: "Attach latest testing evidence and remediation cadence.",
    },
  };

  return (
    peerBands[category] ?? {
      median: 75,
      strong: 88,
      proofType: "Approved policy evidence",
      recommendation: "Attach current source evidence and owner approval before buyer handoff.",
    }
  );
}

function benchmarkFrictionLabel({ item, categoryGaps, connectors, outcomes }) {
  if (categoryGaps.some((gap) => gap.severity === "High")) return "high challenge likelihood";
  if (item.status === "missing") return "missing proof friction";
  if (item.status === "stale" || connectors.staleCount > 0) return "freshness friction";
  if (item.openRisks > 0) return "reviewer friction";
  if (outcomes.shareablePatterns >= 3 && item.status === "ready") return "low friction pattern";
  return "normal buyer friction";
}

function benchmarkFrictionRows({ bands, gaps, followUps, pipeline, connectors }) {
  const rows = bands
    .filter((band) => band.delta < -6 || band.friction.includes("friction") || band.friction.includes("challenge"))
    .map((band) => ({
      title: `${band.category} benchmark gap`,
      severity: band.delta < -16 || band.friction.includes("high") ? "High" : "Medium",
      detail: `${band.category} is ${band.deltaLabel}; ${band.recommendation}`,
      signal: `${band.proofType} | ${band.friction}`,
      category: band.category,
    }));

  if (followUps.slaCount > 0 || pipeline.slaRiskCount > 0) {
    rows.unshift({
      title: "Deadline friction signal",
      severity: "High",
      detail: `${followUps.slaCount + pipeline.slaRiskCount} SLA risk signal${followUps.slaCount + pipeline.slaRiskCount === 1 ? "" : "s"} could force weak answers into buyer portals.`,
      signal: "Peer-safe label: deadline pressure",
      category: "SLA",
    });
  }

  if (connectors.staleCount > 0) {
    rows.push({
      title: "Source freshness signal",
      severity: connectors.staleCount > 1 ? "High" : "Medium",
      detail: `${connectors.staleCount} stale source signal${connectors.staleCount === 1 ? "" : "s"} may lower benchmark readiness before the next buyer review.`,
      signal: "Peer-safe label: stale proof",
      category: "Evidence",
    });
  }

  if (gaps.highRiskCount > 0) {
    rows.unshift({
      title: "High-risk proof gap signal",
      severity: "High",
      detail: `${gaps.highRiskCount} high-risk proof gap${gaps.highRiskCount === 1 ? "" : "s"} should be fixed before the pattern is promoted.`,
      signal: "Peer-safe label: proof gap",
      category: gaps.tasks[0]?.question.category ?? "Evidence",
    });
  }

  return rows.slice(0, 6);
}

function benchmarkInvestments({ bands, gaps, connectors, trustRoom, playbooks }) {
  const behind = bands.filter((band) => band.delta < -6).sort((a, b) => a.delta - b.delta);
  const investments = behind.map((band) => ({
    category: band.category,
    title: `Lift ${band.category} into peer band`,
    detail: band.recommendation,
    impact: `Expected lift ${Math.min(24, Math.max(8, Math.abs(band.delta)))} pts`,
    questionId: state.questions.find((question) => question.category === band.category)?.id ?? getActiveQuestion().id,
  }));

  if (gaps.tasks[0]) {
    investments.unshift({
      category: gaps.tasks[0].question.category,
      title: gaps.tasks[0].request.title,
      detail: `Route ${gaps.tasks[0].owner.name} to collect ${gaps.tasks[0].request.sourceHint}.`,
      impact: `Removes ${gaps.tasks[0].score}% proof risk`,
      questionId: gaps.tasks[0].question.id,
    });
  }

  if (connectors.staleCount > 0) {
    investments.push({
      category: "Evidence",
      title: "Refresh stale benchmark sources",
      detail: "Refresh stale connector-backed documents before their weak freshness band becomes a buyer challenge.",
      impact: `${connectors.staleCount} freshness signal${connectors.staleCount === 1 ? "" : "s"}`,
      questionId: getActiveQuestion().id,
    });
  }

  if (trustRoom.score >= 80 && playbooks.playbooks.some((playbook) => playbook.motion === "Open trust room")) {
    investments.push({
      category: "Trust Room",
      title: "Promote trust room benchmark",
      detail: "Use scoped room handoff when multiple sealed answers are ready; record views and copies as private outcome signals.",
      impact: `${trustRoom.score}% room readiness`,
      questionId: getActiveQuestion().id,
    });
  }

  return investments.slice(0, 5);
}

function benchmarkGuardrails({ network, bands }) {
  return [
    {
      title: "No raw proof leaves tenant",
      status: "Enforced",
      detail: "Benchmarking uses categories, bands, friction labels, and outcome labels. It never uses raw answers, files, prompts, contracts, or buyer names.",
    },
    {
      title: "Cohort threshold",
      status: "Simulated",
      detail: "Peer comparisons are shown as readiness bands only after enough similar organizations produce the same abstract pattern.",
    },
    {
      title: "Reviewer control",
      status: "Human gate",
      detail: "Benchmarks can suggest proof investments, but cannot approve buyer-facing claims or share evidence.",
    },
    {
      title: "Network privacy",
      status: `${network.privacyScore}%`,
      detail: `${bands.filter((band) => band.delta >= 0).length}/${bands.length} categories are at or above peer median without exposing customer data.`,
    },
  ];
}

function prepareTrustBenchmarks() {
  const benchmark = trustBenchmarkSnapshot();
  const detail = `Trust benchmarks prepared with ${benchmark.aheadCount}/${benchmark.bands.length} categories at or above peer band, ${benchmark.frictionRows.length} friction signals, and ${benchmark.score}% readiness.`;
  state.benchmarkActions.status = "Benchmarks prepared";
  state.benchmarkActions.preparedAt = new Date().toISOString();
  addBenchmarkReceipt("Benchmarks prepared", detail);
  addAudit("Trust benchmarks prepared", detail);
  renderTrustBenchmarks();
  renderAudit();
  showToast("Trust benchmark network prepared.");
}

function applyBenchmarkInsight() {
  const benchmark = trustBenchmarkSnapshot();
  const investment = benchmark.investments[0];
  if (!investment) return;
  const question = state.questions.find((item) => item.id === investment.questionId) ?? getActiveQuestion();
  state.activeQuestionId = question.id;
  question.routeStatus = "Owner review";
  question.routedAt = new Date().toISOString();
  if (question.status === "draft" && question.confidence < 85) question.status = "needs-evidence";

  const detail = `Applied benchmark insight: ${investment.title}. ${investment.detail}`;
  state.benchmarkActions.status = "Benchmark applied";
  state.benchmarkActions.appliedAt = new Date().toISOString();
  addBenchmarkReceipt("Benchmark applied", detail);
  addAudit("Benchmark insight applied", detail);
  render();
  showToast("Benchmark insight applied.");
}

function copyBenchmarkDigest() {
  const benchmark = trustBenchmarkSnapshot();
  state.benchmarkActions.lastCopiedAt = new Date().toISOString();
  addBenchmarkReceipt("Benchmark digest copied", "Trust benchmark network digest copied.");
  addAudit("Benchmark digest copied", "Trust benchmark network digest copied.");
  renderTrustBenchmarks();
  renderAudit();
  copyText(benchmarkDigestText(benchmark), "Trust benchmark digest copied.");
}

function addBenchmarkReceipt(action, detail) {
  state.benchmarkActions.receipts = [
    ...(state.benchmarkActions.receipts ?? []),
    {
      id: `benchmark-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function benchmarkDigestText(benchmark = trustBenchmarkSnapshot()) {
  const bandLines = benchmark.bands.map((band, index) => `${index + 1}. ${band.category}: ${band.localScore}% local | peer ${band.peerMedian}% | ${band.deltaLabel} | ${band.friction}`).join("\n");
  const frictionLines = benchmark.frictionRows.map((row, index) => `${index + 1}. ${row.severity}: ${row.title} - ${row.detail}`).join("\n");
  const investmentLines = benchmark.investments.map((investment, index) => `${index + 1}. ${investment.category}: ${investment.title} | ${investment.impact} | ${investment.detail}`).join("\n");
  const guardrailLines = benchmark.guardrails.map((guardrail, index) => `${index + 1}. ${guardrail.title}: ${guardrail.status} - ${guardrail.detail}`).join("\n");
  const receiptLines = benchmark.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Trust Benchmark Network",
    `Build: ${BUILD_VERSION}`,
    `Benchmark status: ${benchmark.statusLabel}`,
    `Readiness score: ${benchmark.score}%`,
    `Categories at or above peer band: ${benchmark.aheadCount}/${benchmark.bands.length}`,
    `Friction signals: ${benchmark.frictionRows.length}`,
    "",
    "Readiness bands:",
    bandLines,
    "",
    "Friction signals:",
    frictionLines || "No severe friction signals.",
    "",
    "Proof investments:",
    investmentLines || "No benchmark investments needed.",
    "",
    "Guardrails:",
    guardrailLines,
    "",
    "Benchmark receipts:",
    receiptLines || "No benchmark receipts yet.",
    "",
    "Benchmark rule:",
    "- Local tenant learns exact source, owner, answer, and outcome details.",
    "- Network benchmarks learn only privacy-safe bands, friction labels, proof types, and outcome labels.",
    "- Benchmarks guide investment; human reviewers decide what ships.",
  ].join("\n");
}

function renderTrustOrchestrator() {
  const orchestration = trustOrchestratorSnapshot();

  elements.orchestratorScore.textContent = `${orchestration.score}%`;
  elements.orchestratorPlanCount.textContent = orchestration.plan.length;
  elements.orchestratorGateCount.textContent = orchestration.gates.filter((gate) => gate.status !== "Approved").length;
  elements.orchestratorReceiptCount.textContent = orchestration.receipts.length;
  elements.orchestratorStatus.textContent = orchestration.statusLabel;
  elements.orchestratorDigest.textContent = orchestratorDigestText(orchestration);
  elements.executeOrchestratorButton.disabled = orchestration.priorities.length === 0;

  elements.orchestratorPriorityList.innerHTML = "";
  orchestration.priorities.forEach((priority) => {
    const card = document.createElement("article");
    card.className = `orchestrator-priority-card ${priority.severity === "High" ? "is-high" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(priority.signal)}</span>
          <strong>${escapeHtml(priority.title)}</strong>
        </div>
        <b>${priority.impact}</b>
      </header>
      <p>${escapeHtml(priority.detail)}</p>
      <footer>
        <span>${escapeHtml(priority.owner)}</span>
        <span>${escapeHtml(priority.gate)}</span>
      </footer>
    `;
    elements.orchestratorPriorityList.append(card);
  });

  elements.orchestratorPlanList.innerHTML = "";
  orchestration.plan.forEach((step) => {
    const card = document.createElement("article");
    card.className = "orchestrator-step-card";
    card.innerHTML = `
      <span>${escapeHtml(step.step)}</span>
      <div>
        <strong>${escapeHtml(step.title)}</strong>
        <p>${escapeHtml(step.detail)}</p>
      </div>
      <b>${escapeHtml(step.mode)}</b>
    `;
    elements.orchestratorPlanList.append(card);
  });

  elements.orchestratorGateList.innerHTML = "";
  orchestration.gates.forEach((gate) => {
    const card = document.createElement("article");
    card.className = `orchestrator-gate-card ${gate.status === "Blocked" || gate.status === "Review" ? "is-blocked" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(gate.title)}</strong>
        <b>${escapeHtml(gate.status)}</b>
      </header>
      <p>${escapeHtml(gate.detail)}</p>
    `;
    elements.orchestratorGateList.append(card);
  });

  elements.orchestratorLearningList.innerHTML = "";
  orchestration.learningRows.forEach((row) => {
    const card = document.createElement("article");
    card.className = "orchestrator-learning-card";
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(row.scope)}</strong>
        <span>${escapeHtml(row.boundary)}</span>
      </header>
      <p>${escapeHtml(row.detail)}</p>
    `;
    elements.orchestratorLearningList.append(card);
  });

  elements.orchestratorReceiptList.innerHTML = "";
  if (orchestration.receipts.length === 0) {
    elements.orchestratorReceiptList.append(emptyState("No orchestration receipts yet"));
  }
  orchestration.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "orchestrator-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.orchestratorReceiptList.append(card);
  });
}

function trustOrchestratorSnapshot() {
  const benchmarks = trustBenchmarkSnapshot();
  const playbooks = adaptivePlaybookSnapshot();
  const run = autonomousRunSnapshot();
  const gaps = gapAutopilotSnapshot();
  const agent = governedAgentSnapshot();
  const followUps = followUpSnapshot();
  const pipeline = pipelineSnapshot();
  const trustRoom = trustRoomSnapshot();
  const connectors = connectorSnapshot();
  const routing = ownerRoutingSnapshot();
  const coverage = coverageSnapshot();
  const network = learningNetworkSnapshot();
  const priorities = orchestrationPriorities({ benchmarks, gaps, followUps, pipeline, connectors, playbooks, trustRoom, agent });
  const plan = orchestrationPlan(priorities, { benchmarks, run, gaps, agent, trustRoom, network });
  const gates = orchestrationGates({ benchmarks, run, gaps, agent, trustRoom, network, pipeline });
  const learningRows = orchestrationLearningRows({ benchmarks, priorities, network, coverage, routing });
  const blockedPenalty = gates.filter((gate) => gate.status === "Blocked").length * 10;
  const highPriorityPenalty = priorities.filter((priority) => priority.severity === "High").length * 8;
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        benchmarks.score * 0.26
          + agent.controlScore * 0.18
          + coverage.score * 0.16
          + network.privacyScore * 0.18
          + Math.max(0, 100 - blockedPenalty) * 0.12
          + Math.max(0, 100 - highPriorityPenalty) * 0.1,
      ),
    ),
  );
  const statusLabel = state.orchestratorActions.status === "Draft" ? "Ready to orchestrate" : state.orchestratorActions.status;

  return {
    score,
    statusLabel,
    priorities,
    plan,
    gates,
    learningRows,
    receipts: state.orchestratorActions.receipts.slice(-8).reverse(),
    benchmarks,
    playbooks,
    run,
    gaps,
    agent,
    followUps,
    pipeline,
    trustRoom,
    connectors,
    routing,
    coverage,
    network,
  };
}

function orchestrationPriorities({ benchmarks, gaps, followUps, pipeline, connectors, playbooks, trustRoom, agent }) {
  const priorities = [];

  if (gaps.tasks[0]) {
    const task = gaps.tasks[0];
    priorities.push({
      title: task.request.title,
      detail: `Collect ${task.request.sourceHint} for ${task.question.category} before this answer reaches the buyer.`,
      signal: "Proof gap",
      severity: task.severity,
      impact: `${task.score}% risk`,
      owner: task.owner.name,
      gate: "Human evidence approval",
      questionId: task.question.id,
      priority: 100 + task.score,
    });
  }

  if (benchmarks.investments[0]) {
    const investment = benchmarks.investments[0];
    priorities.push({
      title: investment.title,
      detail: investment.detail,
      signal: "Benchmark gap",
      severity: investment.impact.includes("24") ? "High" : "Medium",
      impact: investment.impact,
      owner: memberForQuestion(state.questions.find((question) => question.id === investment.questionId) ?? getActiveQuestion()).name,
      gate: "Reviewer approves proof investment",
      questionId: investment.questionId,
      priority: 92,
    });
  }

  if (followUps.slaCount > 0 || pipeline.slaRiskCount > 0) {
    const account = pipeline.accounts.find((item) => item.slaRisk) ?? pipeline.accounts[0];
    priorities.push({
      title: "Protect buyer deadline",
      detail: `${followUps.slaCount + pipeline.slaRiskCount} deadline signal${followUps.slaCount + pipeline.slaRiskCount === 1 ? "" : "s"} require owner routing before weak answers are submitted.`,
      signal: "SLA pressure",
      severity: "High",
      impact: `${account?.daysLeft ?? 0} days`,
      owner: account?.owner ?? "Sales engineering",
      gate: "Deadline override approval",
      questionId: getActiveQuestion().id,
      priority: 88,
    });
  }

  if (connectors.staleCount > 0) {
    priorities.push({
      title: "Refresh stale evidence sources",
      detail: `${connectors.staleCount} source freshness signal${connectors.staleCount === 1 ? "" : "s"} should be refreshed before network learning promotes the pattern.`,
      signal: "Source freshness",
      severity: connectors.staleCount > 1 ? "High" : "Medium",
      impact: `${connectors.staleCount} stale`,
      owner: "Evidence owner",
      gate: "No silent answer changes",
      questionId: getActiveQuestion().id,
      priority: 76,
    });
  }

  if (playbooks.playbooks[0]) {
    const playbook = playbooks.playbooks[0];
    priorities.push({
      title: playbook.title,
      detail: playbook.action,
      signal: playbook.motion,
      severity: playbook.confidence >= 86 ? "Medium" : "High",
      impact: `${playbook.confidence}%`,
      owner: playbook.buyer,
      gate: "Trust motion approval",
      questionId: getActiveQuestion().id,
      priority: 70 + Math.round(playbook.confidence / 10),
    });
  }

  if (trustRoom.score >= 80) {
    priorities.push({
      title: "Use scoped trust room handoff",
      detail: "Package sealed answers, source-safe excerpts, and receipt trail when multiple buyer answers are ready.",
      signal: "Buyer room",
      severity: "Medium",
      impact: `${trustRoom.score}% ready`,
      owner: "Sales engineering",
      gate: "External sharing approval",
      questionId: getActiveQuestion().id,
      priority: 64,
    });
  }

  if (agent.tasks[0]) {
    priorities.push({
      title: agent.tasks[0].title,
      detail: agent.tasks[0].detail,
      signal: "Governed agent",
      severity: agent.tasks[0].risk,
      impact: agent.tasks[0].mode,
      owner: agent.tasks[0].owner,
      gate: agent.tasks[0].mode,
      questionId: getActiveQuestion().id,
      priority: 62,
    });
  }

  return priorities.sort((a, b) => b.priority - a.priority).slice(0, 6);
}

function orchestrationPlan(priorities, { benchmarks, run, gaps, agent, trustRoom, network }) {
  const top = priorities[0];
  return [
    {
      step: "01",
      title: top ? `Route ${top.signal.toLowerCase()} work` : "Wait for the next buyer signal",
      detail: top ? `${top.title}: ${top.detail}` : "No urgent orchestration priority is currently active.",
      mode: "Route",
    },
    {
      step: "02",
      title: "Collect governed proof",
      detail: gaps.tasks[0] ? `${gaps.tasks[0].owner.name} collects ${gaps.tasks[0].request.sourceHint}.` : "Use approved evidence and connector freshness before changing any buyer-facing answer.",
      mode: "Request",
    },
    {
      step: "03",
      title: "Run human approval gates",
      detail: `${run.openGateCount} run gate${run.openGateCount === 1 ? "" : "s"} and ${agent.tasks.length} governed agent task${agent.tasks.length === 1 ? "" : "s"} remain controlled by reviewers.`,
      mode: "Approve",
    },
    {
      step: "04",
      title: "Prepare buyer-safe handoff",
      detail: trustRoom.score >= 80 ? "Use the scoped trust room and source-safe excerpts for approved answers." : "Keep answers in review until trust room readiness and source confidence improve.",
      mode: "Package",
    },
    {
      step: "05",
      title: "Write closed-loop learning receipt",
      detail: `Local memory keeps exact outcomes; network learning receives only ${benchmarks.bands.length} category bands, friction labels, proof types, and outcome labels at ${network.privacyScore}% privacy.`,
      mode: "Learn",
    },
  ];
}

function orchestrationGates({ benchmarks, run, gaps, agent, trustRoom, network, pipeline }) {
  return [
    {
      title: "Buyer-facing claim changes",
      status: gaps.highRiskCount > 0 || benchmarks.frictionRows.some((row) => row.severity === "High") ? "Blocked" : "Review",
      detail: "No drafted answer can change externally until evidence is attached and a reviewer approves the claim.",
    },
    {
      title: "Agent execution",
      status: state.orchestratorActions.gateApprovedAt || agent.statusLabel === "Human approved" ? "Approved" : "Review",
      detail: "The agent can prepare requests and refresh queues, but cannot submit buyer-facing text without approval.",
    },
    {
      title: "External trust room share",
      status: trustRoom.score >= 80 ? "Review" : "Blocked",
      detail: "Scoped trust rooms require buyer-safe source excerpts, access policy, and receipt trail.",
    },
    {
      title: "Deadline override",
      status: pipeline.slaRiskCount > 0 || run.openGateCount > 0 ? "Review" : "Approved",
      detail: "Deadline pressure cannot bypass proof quality, claim trace, or reviewer approval.",
    },
    {
      title: "Network learning promotion",
      status: network.privacyScore >= 90 ? "Approved" : "Review",
      detail: "Only abstract labels, readiness bands, proof types, and outcomes can enter cross-tenant learning.",
    },
  ];
}

function orchestrationLearningRows({ benchmarks, priorities, network, coverage, routing }) {
  return [
    {
      scope: "Local exact memory",
      boundary: "Private",
      detail: `Learns approved wording, owner route, evidence source, and outcome for ${routing.routed} routed question${routing.routed === 1 ? "" : "s"}.`,
    },
    {
      scope: "Workspace improvement",
      boundary: "Organization",
      detail: `Uses ${priorities.length} priority signal${priorities.length === 1 ? "" : "s"} to improve coverage, owner load, deadline handling, and reuse.`,
    },
    {
      scope: "Network benchmark",
      boundary: "Aggregate",
      detail: `${benchmarks.aheadCount}/${benchmarks.bands.length} categories are at or above peer band; shared learning remains category and friction only.`,
    },
    {
      scope: "Safety feedback",
      boundary: "Governed",
      detail: `${network.privacyScore}% privacy score with ${coverage.score}% coverage; no raw customer material is promoted.`,
    },
  ];
}

function prepareTrustOrchestrator() {
  const orchestration = trustOrchestratorSnapshot();
  const detail = `Autonomous trust plan prepared with ${orchestration.plan.length} steps, ${orchestration.priorities.length} priorities, ${orchestration.gates.length} gates, and ${orchestration.score}% orchestration score.`;
  state.orchestratorActions.status = "Plan prepared";
  state.orchestratorActions.plannedAt = new Date().toISOString();
  addOrchestratorReceipt("Plan prepared", detail);
  addAudit("Trust orchestrator prepared", detail);
  renderTrustOrchestrator();
  renderAudit();
  showToast("Autonomous trust plan prepared.");
}

function executeTrustOrchestrator() {
  const orchestration = trustOrchestratorSnapshot();
  const priority = orchestration.priorities[0];
  if (!priority) return;
  const question = state.questions.find((item) => item.id === priority.questionId) ?? getActiveQuestion();
  state.activeQuestionId = question.id;
  question.routeStatus = "Owner review";
  question.assigneeId = ownerToMemberId(question.owner);
  question.routedAt = new Date().toISOString();
  if (question.status === "draft" && (question.confidence < 90 || priority.severity === "High")) {
    question.status = "needs-evidence";
  }

  const detail = `Routed top orchestration priority: ${priority.title}. Owner: ${priority.owner}. Gate: ${priority.gate}.`;
  state.orchestratorActions.status = "Work routed";
  state.orchestratorActions.executedAt = new Date().toISOString();
  addOrchestratorReceipt("Work routed", detail);
  addAudit("Trust orchestrator routed work", detail);
  render();
  showToast("Top orchestration work routed.");
}

function approveOrchestratorGate() {
  const orchestration = trustOrchestratorSnapshot();
  const gate = orchestration.gates.find((item) => item.status !== "Approved");
  const detail = gate ? `Human gate approved for orchestration: ${gate.title}. ${gate.detail}` : "All orchestration gates already approved.";
  state.orchestratorActions.status = "Gate approved";
  state.orchestratorActions.gateApprovedAt = new Date().toISOString();
  addOrchestratorReceipt("Gate approved", detail);
  addAudit("Orchestration gate approved", detail);
  renderTrustOrchestrator();
  renderAudit();
  showToast("Orchestration gate approved.");
}

function copyOrchestratorDigest() {
  const orchestration = trustOrchestratorSnapshot();
  state.orchestratorActions.lastCopiedAt = new Date().toISOString();
  addOrchestratorReceipt("Orchestrator digest copied", "Autonomous trust orchestration digest copied.");
  addAudit("Orchestrator digest copied", "Autonomous trust orchestration digest copied.");
  renderTrustOrchestrator();
  renderAudit();
  copyText(orchestratorDigestText(orchestration), "Autonomous trust digest copied.");
}

function addOrchestratorReceipt(action, detail) {
  state.orchestratorActions.receipts = [
    ...(state.orchestratorActions.receipts ?? []),
    {
      id: `orchestrator-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function orchestratorDigestText(orchestration = trustOrchestratorSnapshot()) {
  const priorityLines = orchestration.priorities.map((priority, index) => `${index + 1}. ${priority.signal}: ${priority.title} | ${priority.impact} | ${priority.owner} | ${priority.gate}`).join("\n");
  const planLines = orchestration.plan.map((step) => `${step.step}. ${step.title} | ${step.mode} | ${step.detail}`).join("\n");
  const gateLines = orchestration.gates.map((gate, index) => `${index + 1}. ${gate.title}: ${gate.status} - ${gate.detail}`).join("\n");
  const learningLines = orchestration.learningRows.map((row, index) => `${index + 1}. ${row.scope}: ${row.boundary} - ${row.detail}`).join("\n");
  const receiptLines = orchestration.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Autonomous Trust Orchestrator",
    `Build: ${BUILD_VERSION}`,
    `Orchestration status: ${orchestration.statusLabel}`,
    `Orchestration score: ${orchestration.score}%`,
    `Plan steps: ${orchestration.plan.length}`,
    `Open gates: ${orchestration.gates.filter((gate) => gate.status !== "Approved").length}`,
    "",
    "Priority queue:",
    priorityLines || "No orchestration priorities yet.",
    "",
    "Governed plan:",
    planLines,
    "",
    "Human gates:",
    gateLines,
    "",
    "Closed-loop learning:",
    learningLines,
    "",
    "Receipts:",
    receiptLines || "No orchestration receipts yet.",
    "",
    "Autonomy boundary:",
    "- The orchestrator can route work, prepare requests, and explain next actions.",
    "- It cannot submit buyer-facing claims, share evidence, or promote network learning without human-approved gates.",
    "- Local exact learning stays inside the organization; cross-tenant benefit uses only aggregate labels and bands.",
  ].join("\n");
}

function renderFederatedGraph() {
  const graph = federatedGraphSnapshot();

  elements.graphScore.textContent = `${graph.score}%`;
  elements.graphNodeCount.textContent = graph.nodes.length;
  elements.graphEdgeCount.textContent = graph.edges.length;
  elements.graphDriftCount.textContent = graph.drift.length;
  elements.graphStatus.textContent = graph.statusLabel;
  elements.graphDigest.textContent = graphDigestText(graph);
  elements.promoteGraphButton.disabled = !graph.promotions.some((promotion) => promotion.status === "Eligible");

  elements.graphNodeList.innerHTML = "";
  graph.nodes.forEach((node) => {
    const card = document.createElement("article");
    card.className = `graph-node-card ${node.boundary === "Private" ? "is-private" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(node.scope)}</span>
          <strong>${escapeHtml(node.title)}</strong>
        </div>
        <b>${escapeHtml(node.boundary)}</b>
      </header>
      <p>${escapeHtml(node.detail)}</p>
      <footer>
        <span>${escapeHtml(node.signal)}</span>
        <span>${escapeHtml(node.share)}</span>
      </footer>
    `;
    elements.graphNodeList.append(card);
  });

  elements.graphEdgeList.innerHTML = "";
  graph.edges.forEach((edge) => {
    const card = document.createElement("article");
    card.className = "graph-edge-card";
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(edge.source)} -> ${escapeHtml(edge.target)}</strong>
        <b>${escapeHtml(edge.strength)}</b>
      </header>
      <p>${escapeHtml(edge.detail)}</p>
      <span>${escapeHtml(edge.mode)}</span>
    `;
    elements.graphEdgeList.append(card);
  });

  elements.graphPromotionList.innerHTML = "";
  graph.promotions.forEach((promotion) => {
    const card = document.createElement("article");
    card.className = `graph-promotion-card ${promotion.status === "Eligible" ? "is-ready" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(promotion.kind)}</span>
          <strong>${escapeHtml(promotion.title)}</strong>
        </div>
        <b>${escapeHtml(promotion.status)}</b>
      </header>
      <p>${escapeHtml(promotion.detail)}</p>
      <footer>
        <span>${escapeHtml(promotion.evidence)}</span>
        <span>${escapeHtml(promotion.guardrail)}</span>
      </footer>
    `;
    elements.graphPromotionList.append(card);
  });

  elements.graphDriftList.innerHTML = "";
  if (graph.drift.length === 0) {
    elements.graphDriftList.append(emptyState("No graph drift detected"));
  }
  graph.drift.forEach((drift) => {
    const card = document.createElement("article");
    card.className = `graph-drift-card ${drift.severity === "High" ? "is-high" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(drift.severity)} drift</span>
          <strong>${escapeHtml(drift.title)}</strong>
        </div>
        <b>${escapeHtml(drift.owner)}</b>
      </header>
      <p>${escapeHtml(drift.detail)}</p>
      <span>${escapeHtml(drift.action)}</span>
    `;
    elements.graphDriftList.append(card);
  });

  elements.graphGateList.innerHTML = "";
  graph.gates.forEach((gate) => {
    const card = document.createElement("article");
    card.className = `graph-gate-card ${gate.status === "Blocked" || gate.status === "Review" ? "is-blocked" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(gate.title)}</strong>
        <b>${escapeHtml(gate.status)}</b>
      </header>
      <p>${escapeHtml(gate.detail)}</p>
    `;
    elements.graphGateList.append(card);
  });

  elements.graphReceiptList.innerHTML = "";
  if (graph.receipts.length === 0) {
    elements.graphReceiptList.append(emptyState("No graph receipts yet"));
  }
  graph.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "graph-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.graphReceiptList.append(card);
  });
}

function federatedGraphSnapshot() {
  const coverage = coverageSnapshot();
  const routing = ownerRoutingSnapshot();
  const connectors = connectorSnapshot();
  const gaps = gapAutopilotSnapshot();
  const network = learningNetworkSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const benchmarks = trustBenchmarkSnapshot();
  const orchestrator = trustOrchestratorSnapshot();
  const nodes = graphNodes({ coverage, routing, network, outcomes, benchmarks, orchestrator });
  const edges = graphEdges({ coverage, routing, connectors, gaps, network, outcomes, benchmarks, orchestrator });
  const promotions = graphPromotions({ network, outcomes, benchmarks, connectors, gaps });
  const drift = graphDrift({ connectors, gaps, benchmarks, outcomes, orchestrator });
  const gates = graphGates({ network, promotions, drift });
  const eligible = promotions.filter((promotion) => promotion.status === "Eligible").length;
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        network.privacyScore * 0.24
          + outcomes.score * 0.2
          + benchmarks.score * 0.18
          + orchestrator.score * 0.16
          + coverage.score * 0.12
          + Math.min(100, eligible * 24) * 0.06
          + Math.max(0, 100 - drift.length * 11) * 0.04,
      ),
    ),
  );
  const statusLabel = state.graphActions.status === "Draft" ? (eligible > 0 && network.privacyScore >= 90 ? "Promotion candidate" : "Mapping local graph") : state.graphActions.status;

  return {
    score,
    statusLabel,
    nodes,
    edges,
    promotions,
    drift,
    gates,
    receipts: state.graphActions.receipts.slice(-8).reverse(),
    coverage,
    routing,
    connectors,
    gaps,
    network,
    outcomes,
    benchmarks,
    orchestrator,
  };
}

function graphNodes({ coverage, routing, network, outcomes, benchmarks, orchestrator }) {
  const categories = [...new Set(state.questions.map((question) => question.category))];
  return [
    {
      scope: "Tenant-local",
      title: "Questions and claims",
      boundary: "Private",
      signal: `${state.questions.length} questions / ${categories.length} categories`,
      share: "Only category bands can aggregate",
      detail: "Exact buyer text, claim wording, answer drafts, and reviewer notes stay inside this workspace.",
    },
    {
      scope: "Tenant-local",
      title: "Evidence and source freshness",
      boundary: "Private",
      signal: `${state.evidence.length} sources / ${coverage.score}% coverage`,
      share: "Proof type and freshness band only",
      detail: "Policy text, SOC excerpts, DPAs, and file names remain tenant-private while freshness windows can become aggregate guidance.",
    },
    {
      scope: "Tenant-local",
      title: "Owners and approval gates",
      boundary: "Organization",
      signal: `${routing.routed}/${state.questions.length} routed`,
      share: "Role and gate label only",
      detail: "Named reviewers remain private; aggregate learning can use role categories such as Security, Legal, or AI Governance.",
    },
    {
      scope: "Outcome memory",
      title: "Accepted and challenged outcomes",
      boundary: "Hybrid",
      signal: `${outcomes.events.length} events / ${outcomes.rewards.length} rewards`,
      share: "Outcome label only",
      detail: "Local memory keeps exact buyer outcomes while the network learns only accepted, challenged, delayed, reused, or blocked labels.",
    },
    {
      scope: "Peer-safe",
      title: "Trust benchmark bands",
      boundary: "Aggregate",
      signal: `${benchmarks.aheadCount}/${benchmarks.bands.length} at peer band`,
      share: "Category band",
      detail: "Benchmark nodes compare category readiness to peer medians without raw answers, files, prompts, contracts, or buyer names.",
    },
    {
      scope: "Autonomy",
      title: "Governed work plan",
      boundary: "Governed",
      signal: `${orchestrator.priorities.length} priorities / ${orchestrator.gates.length} gates`,
      share: "Action type and gate status",
      detail: "The graph can recommend work, but buyer-facing claims, external sharing, and network promotion remain gated.",
    },
    {
      scope: "Federated",
      title: "Pattern network",
      boundary: "Aggregate",
      signal: `${network.readyPatternCount}/${network.patterns.length} ready patterns`,
      share: "Threshold-gated patterns",
      detail: "Cross-organization recommendations activate only after abstraction, privacy checks, reviewer consent, and enough similar tenants.",
    },
  ];
}

function graphEdges({ coverage, routing, connectors, gaps, network, outcomes, benchmarks, orchestrator }) {
  const topGap = gaps.tasks[0];
  const topBand = benchmarks.bands.find((band) => band.status === "Behind") ?? benchmarks.bands[0];
  return [
    {
      source: "Question",
      target: "Evidence",
      strength: `${coverage.score}%`,
      mode: "Local binding",
      detail: "Each answer edge points to selected sources and claim trace before approval.",
    },
    {
      source: "Evidence",
      target: "Freshness",
      strength: `${connectors.score}%`,
      mode: "Private source health",
      detail: `${connectors.staleCount} stale source signal${connectors.staleCount === 1 ? "" : "s"} affect graph confidence before promotion.`,
    },
    {
      source: "Owner",
      target: "Approval gate",
      strength: `${routing.routed}/${state.questions.length}`,
      mode: "Organization gate",
      detail: "Owner routing connects trust categories to accountable reviewers before buyer handoff.",
    },
    {
      source: "Outcome",
      target: "Recommendation",
      strength: `${outcomes.score}%`,
      mode: "Reward edge",
      detail: "Accepted, challenged, and delayed outcomes tune local recommendations without exposing exact buyer content.",
    },
    {
      source: "Benchmark",
      target: "Proof investment",
      strength: topBand ? `${topBand.localScore}%` : "0%",
      mode: "Aggregate comparison",
      detail: topBand ? `${topBand.category} uses peer-safe bands to suggest proof improvement.` : "No benchmark band is available yet.",
    },
    {
      source: "Orchestrator",
      target: topGap ? topGap.owner.name : "Trust Lead",
      strength: `${orchestrator.score}%`,
      mode: "Governed work",
      detail: topGap ? `Routes ${topGap.question.category} evidence work before weak proof leaves the tenant.` : "Routes the next safest task from graph priorities.",
    },
    {
      source: "Local graph",
      target: "Federated pattern",
      strength: `${network.privacyScore}%`,
      mode: "Privacy threshold",
      detail: "Only abstract labels, role types, proof categories, readiness bands, and outcome labels can cross the tenant boundary.",
    },
  ];
}

function graphPromotions({ network, outcomes, benchmarks, connectors, gaps }) {
  const acceptedPattern = outcomes.patterns.find((pattern) => pattern.shareable) ?? outcomes.patterns[0];
  const behindBand = benchmarks.bands.find((band) => band.status === "Behind") ?? benchmarks.bands[0];
  return [
    {
      kind: "Outcome pattern",
      title: acceptedPattern ? acceptedPattern.title : "Accepted answer pattern",
      status: acceptedPattern?.shareable && network.privacyScore >= 90 ? "Eligible" : "Hold",
      evidence: `${outcomes.shareablePatterns}/${outcomes.patterns.length} shareable`,
      guardrail: "Outcome label only",
      detail: acceptedPattern ? acceptedPattern.detail : "Wait for a shareable outcome pattern before promotion.",
    },
    {
      kind: "Benchmark pattern",
      title: behindBand ? `${behindBand.category} readiness band` : "Readiness band",
      status: benchmarks.score >= 70 ? "Eligible" : "Hold",
      evidence: `${benchmarks.aheadCount}/${benchmarks.bands.length} peer-ready`,
      guardrail: "Category band only",
      detail: behindBand ? `${behindBand.recommendation} The graph shares only aggregate readiness and friction labels.` : "No benchmark band is ready.",
    },
    {
      kind: "Freshness pattern",
      title: "Source freshness window",
      status: connectors.staleCount === 0 && connectors.issueCount <= 1 ? "Eligible" : "Hold",
      evidence: `${connectors.score}% source health`,
      guardrail: "No file names or excerpts",
      detail: "Freshness windows can help similar tenants prepare source refreshes earlier without exposing documents.",
    },
    {
      kind: "Gap prevention",
      title: gaps.tasks[0] ? `${gaps.tasks[0].question.category} gap prevention` : "Proof gap prevention",
      status: gaps.highRiskCount > 0 ? "Local only" : "Eligible",
      evidence: `${gaps.taskCount} gap tasks`,
      guardrail: "Reviewer consent required",
      detail: gaps.tasks[0] ? `Keep the exact blocker private while sharing abstract proof type and friction label.` : "No high-risk blocker is currently restricting promotion.",
    },
  ];
}

function graphDrift({ connectors, gaps, benchmarks, outcomes, orchestrator }) {
  const rows = [];
  const staleDocs = state.evidence.filter((doc) => daysSince(doc.updated) > 120 || doc.type === "Legacy");
  const staleConnector = connectors.connectors.find((item) => item.freshness === "Stale" || item.status === "Stale" || item.issues > 0);
  const behindBand = benchmarks.bands.find((band) => band.status === "Behind");
  const openGate = orchestrator.gates.find((gate) => gate.status === "Blocked" || gate.status === "Review");

  if (staleDocs.length) {
    rows.push({
      severity: staleDocs.some((doc) => doc.type === "Legacy") ? "High" : "Medium",
      title: "Source age drift",
      owner: "Evidence owner",
      detail: `${staleDocs.length} source${staleDocs.length === 1 ? "" : "s"} are old or legacy and can weaken repeated graph recommendations.`,
      action: "Refresh source metadata before promoting related patterns.",
    });
  }

  if (staleConnector) {
    rows.push({
      severity: "High",
      title: `${staleConnector.name} connector drift`,
      owner: staleConnector.owner.name,
      detail: `${staleConnector.provider} has ${staleConnector.issues} issue${staleConnector.issues === 1 ? "" : "s"} and ${staleConnector.health}% health.`,
      action: staleConnector.nextAction,
    });
  }

  if (gaps.highRiskCount > 0) {
    rows.push({
      severity: "High",
      title: "Evidence gap drift",
      owner: gaps.tasks[0]?.owner.name ?? "Trust Lead",
      detail: `${gaps.highRiskCount} high-risk proof gap${gaps.highRiskCount === 1 ? "" : "s"} can pollute local memory if answers are reused too early.`,
      action: "Keep pattern local until stronger proof is attached.",
    });
  }

  if (behindBand) {
    rows.push({
      severity: "Medium",
      title: `${behindBand.category} peer-band drift`,
      owner: inferOwner(behindBand.category),
      detail: `${behindBand.category} is ${behindBand.deltaLabel.toLowerCase()} versus peer-safe benchmark medians.`,
      action: behindBand.recommendation,
    });
  }

  if (outcomes.events.some((event) => event.sentiment === "Negative")) {
    rows.push({
      severity: "Medium",
      title: "Buyer challenge drift",
      owner: "Reviewer",
      detail: "A challenged outcome should reduce confidence for similar future answers until the evidence path improves.",
      action: "Convert the challenge into a local proof task before network promotion.",
    });
  }

  if (openGate) {
    rows.push({
      severity: openGate.status === "Blocked" ? "High" : "Medium",
      title: `${openGate.title} gate still open`,
      owner: "Trust Lead",
      detail: openGate.detail,
      action: "Resolve the gate before external sharing or federated promotion.",
    });
  }

  return rows.slice(0, 6);
}

function graphGates({ network, promotions, drift }) {
  const eligibleCount = promotions.filter((promotion) => promotion.status === "Eligible").length;
  return [
    {
      title: "Tenant-local exact graph",
      status: "Enforced",
      detail: "Raw documents, answers, prompts, buyer names, reviewer names, and contracts stay inside the organization.",
    },
    {
      title: "Reviewer consent",
      status: state.graphActions.gateApprovedAt ? "Approved" : "Review",
      detail: "Pattern promotion needs an explicit human receipt before any cross-tenant recommendation can use it.",
    },
    {
      title: "Privacy threshold",
      status: network.privacyScore >= 90 ? "Approved" : "Review",
      detail: `${network.privacyScore}% privacy score; only aggregate labels, proof types, freshness windows, and outcome bands are eligible.`,
    },
    {
      title: "Pattern readiness",
      status: eligibleCount >= 2 ? "Approved" : "Review",
      detail: `${eligibleCount}/${promotions.length} patterns are eligible for promotion after abstraction and threshold checks.`,
    },
    {
      title: "Drift quarantine",
      status: drift.some((item) => item.severity === "High") ? "Blocked" : "Approved",
      detail: "High drift keeps related patterns local until stale sources, proof gaps, or open gates are resolved.",
    },
  ];
}

function mapFederatedGraph() {
  const graph = federatedGraphSnapshot();
  const detail = `Federated graph mapped with ${graph.nodes.length} nodes, ${graph.edges.length} edges, ${graph.promotions.length} promotion candidates, and ${graph.drift.length} drift alerts.`;
  state.graphActions.status = "Graph mapped";
  state.graphActions.mappedAt = new Date().toISOString();
  addGraphReceipt("Graph mapped", detail);
  addAudit("Federated trust graph mapped", detail);
  renderFederatedGraph();
  renderAudit();
  showToast("Federated trust graph mapped.");
}

function promoteGraphPattern() {
  const graph = federatedGraphSnapshot();
  const promotion = graph.promotions.find((item) => item.status === "Eligible");
  if (!promotion) return;
  const detail = `Promotion prepared: ${promotion.title}. ${promotion.detail} Guardrail: ${promotion.guardrail}.`;
  state.graphActions.status = "Pattern promoted";
  state.graphActions.promotedAt = new Date().toISOString();
  state.networkActions.status = "Signal applied";
  state.networkActions.signalAppliedAt = new Date().toISOString();
  addGraphReceipt("Pattern promoted", detail);
  addNetworkReceipt("Graph pattern promoted", detail);
  addAudit("Federated pattern promoted", detail);
  render();
  showToast("Privacy-safe graph pattern promoted.");
}

function approveGraphGate() {
  const graph = federatedGraphSnapshot();
  const gate = graph.gates.find((item) => item.status === "Review" || item.status === "Blocked");
  const detail = gate ? `Federated graph gate reviewed: ${gate.title}. ${gate.detail}` : "All federated graph gates already passed.";
  state.graphActions.status = "Gate approved";
  state.graphActions.gateApprovedAt = new Date().toISOString();
  addGraphReceipt("Gate approved", detail);
  addAudit("Federated graph gate approved", detail);
  renderFederatedGraph();
  renderAudit();
  showToast("Federated graph gate approved.");
}

function copyGraphDigest() {
  const graph = federatedGraphSnapshot();
  state.graphActions.lastCopiedAt = new Date().toISOString();
  addGraphReceipt("Graph digest copied", "Federated trust graph digest copied.");
  addAudit("Federated graph digest copied", "Federated trust graph digest copied.");
  renderFederatedGraph();
  renderAudit();
  copyText(graphDigestText(graph), "Federated graph digest copied.");
}

function addGraphReceipt(action, detail) {
  state.graphActions.receipts = [
    ...(state.graphActions.receipts ?? []),
    {
      id: `graph-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function graphDigestText(graph = federatedGraphSnapshot()) {
  const nodeLines = graph.nodes.map((node, index) => `${index + 1}. ${node.scope}: ${node.title} | ${node.boundary} | ${node.signal} | ${node.share}`).join("\n");
  const edgeLines = graph.edges.map((edge, index) => `${index + 1}. ${edge.source} -> ${edge.target}: ${edge.strength} | ${edge.mode} | ${edge.detail}`).join("\n");
  const promotionLines = graph.promotions.map((promotion, index) => `${index + 1}. ${promotion.status}: ${promotion.title} | ${promotion.evidence} | ${promotion.guardrail}`).join("\n");
  const driftLines = graph.drift.map((drift, index) => `${index + 1}. ${drift.severity}: ${drift.title} | ${drift.owner} | ${drift.action}`).join("\n");
  const gateLines = graph.gates.map((gate, index) => `${index + 1}. ${gate.title}: ${gate.status} - ${gate.detail}`).join("\n");
  const receiptLines = graph.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Federated Trust Graph",
    `Build: ${BUILD_VERSION}`,
    `Graph status: ${graph.statusLabel}`,
    `Graph score: ${graph.score}%`,
    `Nodes: ${graph.nodes.length}`,
    `Edges: ${graph.edges.length}`,
    `Drift alerts: ${graph.drift.length}`,
    "",
    "Tenant and network nodes:",
    nodeLines,
    "",
    "Learning edges:",
    edgeLines,
    "",
    "Promotion candidates:",
    promotionLines,
    "",
    "Drift alerts:",
    driftLines || "No graph drift detected.",
    "",
    "Human and privacy gates:",
    gateLines,
    "",
    "Receipts:",
    receiptLines || "No graph receipts yet.",
    "",
    "Federation rule:",
    "- Exact organizational memory stays tenant-local.",
    "- Cross-tenant benefit uses only aggregate labels, bands, role types, proof categories, and outcome classes.",
    "- High drift quarantines related patterns until human review and stronger proof resolve the risk.",
  ].join("\n");
}

function renderPolicySimulator() {
  const simulator = policySimulatorSnapshot();

  elements.simulatorScore.textContent = `${simulator.score}%`;
  elements.simulatorScenarioCount.textContent = simulator.scenarios.length;
  elements.simulatorLift.textContent = `+${simulator.bestLift}`;
  elements.simulatorBlockCount.textContent = simulator.blockedCount;
  elements.simulatorStatus.textContent = simulator.statusLabel;
  elements.simulatorDigest.textContent = simulatorDigestText(simulator);
  elements.applySimulationButton.disabled = !simulator.scenarios.some((scenario) => scenario.status === "Recommended");

  elements.simulatorScenarioList.innerHTML = "";
  simulator.scenarios.forEach((scenario) => {
    const card = document.createElement("article");
    card.className = `simulator-scenario-card ${scenario.status === "Blocked" ? "is-blocked" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(scenario.type)}</span>
          <strong>${escapeHtml(scenario.title)}</strong>
        </div>
        <b>${escapeHtml(scenario.status)}</b>
      </header>
      <p>${escapeHtml(scenario.detail)}</p>
      <div class="simulator-before-after">
        <span>${escapeHtml(scenario.before)}</span>
        <span>${escapeHtml(scenario.after)}</span>
      </div>
      <footer>
        <span>${escapeHtml(scenario.owner)}</span>
        <span>${scenario.lift >= 0 ? "+" : ""}${scenario.lift} forecast</span>
        <span>${escapeHtml(scenario.guardrail)}</span>
      </footer>
    `;
    elements.simulatorScenarioList.append(card);
  });

  elements.simulatorForecastList.innerHTML = "";
  simulator.forecasts.forEach((forecast) => {
    const card = document.createElement("article");
    card.className = `simulator-forecast-card ${forecast.direction === "Risk" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(forecast.metric)}</strong>
        <b>${escapeHtml(forecast.delta)}</b>
      </header>
      <p>${escapeHtml(forecast.detail)}</p>
    `;
    elements.simulatorForecastList.append(card);
  });

  elements.simulatorGateList.innerHTML = "";
  simulator.gates.forEach((gate) => {
    const card = document.createElement("article");
    card.className = `simulator-gate-card ${gate.status === "Blocked" || gate.status === "Review" ? "is-blocked" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(gate.title)}</strong>
        <b>${escapeHtml(gate.status)}</b>
      </header>
      <p>${escapeHtml(gate.detail)}</p>
    `;
    elements.simulatorGateList.append(card);
  });

  elements.simulatorActionList.innerHTML = "";
  simulator.actions.forEach((action) => {
    const card = document.createElement("article");
    card.className = "simulator-action-card";
    card.innerHTML = `
      <span>${escapeHtml(action.step)}</span>
      <div>
        <strong>${escapeHtml(action.title)}</strong>
        <p>${escapeHtml(action.detail)}</p>
      </div>
      <b>${escapeHtml(action.mode)}</b>
    `;
    elements.simulatorActionList.append(card);
  });

  elements.simulatorReceiptList.innerHTML = "";
  if (simulator.receipts.length === 0) {
    elements.simulatorReceiptList.append(emptyState("No simulation receipts yet"));
  }
  simulator.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "simulator-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.simulatorReceiptList.append(card);
  });
}

function policySimulatorSnapshot() {
  const coverage = coverageSnapshot();
  const gaps = gapAutopilotSnapshot();
  const connectors = connectorSnapshot();
  const network = learningNetworkSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const benchmarks = trustBenchmarkSnapshot();
  const graph = federatedGraphSnapshot();
  const orchestrator = trustOrchestratorSnapshot();
  const scenarios = policySimulationScenarios({ coverage, gaps, connectors, network, outcomes, benchmarks, graph, orchestrator });
  const forecasts = policySimulationForecasts({ scenarios, gaps, connectors, network, graph, outcomes });
  const gates = policySimulationGates({ scenarios, graph, network, gaps });
  const actions = policySimulationActions({ scenarios, forecasts, gates });
  const bestLift = Math.max(0, ...scenarios.filter((scenario) => scenario.status === "Recommended").map((scenario) => scenario.lift));
  const blockedCount = scenarios.filter((scenario) => scenario.status === "Blocked").length + gates.filter((gate) => gate.status === "Blocked").length;
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        graph.score * 0.24
          + network.privacyScore * 0.18
          + outcomes.score * 0.16
          + benchmarks.score * 0.14
          + coverage.score * 0.12
          + Math.min(100, bestLift * 4) * 0.08
          + Math.max(0, 100 - blockedCount * 10) * 0.08,
      ),
    ),
  );
  const statusLabel = state.simulatorActions.status === "Draft" ? "Ready to simulate" : state.simulatorActions.status;

  return {
    score,
    statusLabel,
    scenarios,
    forecasts,
    gates,
    actions,
    bestLift,
    blockedCount,
    receipts: state.simulatorActions.receipts.slice(-8).reverse(),
    coverage,
    gaps,
    connectors,
    network,
    outcomes,
    benchmarks,
    graph,
    orchestrator,
  };
}

function policySimulationScenarios({ coverage, gaps, connectors, network, outcomes, benchmarks, graph, orchestrator }) {
  const active = getActiveQuestion();
  const aiQuestion = state.questions.find((question) => question.category === "AI Governance") ?? active;
  const incidentGap = gaps.tasks.find((task) => task.question.category === "Incident") ?? gaps.tasks[0];
  const staleConnector = connectors.connectors.find((item) => item.freshness === "Stale" || item.status === "Stale" || item.issues > 0);
  const promotion = graph.promotions.find((item) => item.status === "Eligible") ?? graph.promotions[0];
  const behindBand = benchmarks.bands.find((band) => band.status === "Behind") ?? benchmarks.bands[0];
  const challenged = outcomes.events.find((event) => event.sentiment === "Negative");
  const openGate = orchestrator.gates.find((gate) => gate.status === "Blocked" || gate.status === "Review");

  return [
    {
      id: "ai-policy-tighten",
      type: "Policy rehearsal",
      title: "Tighten AI model-training language",
      status: aiQuestion.sources?.length ? "Recommended" : "Review",
      lift: aiQuestion.sources?.length ? 18 : 9,
      confidence: aiQuestion.confidence,
      owner: memberForQuestion(aiQuestion).name,
      questionId: aiQuestion.id,
      before: shorten(aiQuestion.answer || "No answer drafted.", 130),
      after: "No customer content trains foundation models; customer-facing AI answers require human approval and redaction controls.",
      detail: "Rehearses the approved AI Usage Standard wording before it becomes reusable local memory or a network-safe outcome label.",
      guardrail: "Human approval before buyer-facing reuse",
    },
    {
      id: "incident-proof-refresh",
      type: "Source refresh",
      title: incidentGap ? `Refresh ${incidentGap.question.category} proof before reuse` : "Refresh incident response proof",
      status: incidentGap ? "Recommended" : "Review",
      lift: incidentGap ? 16 : 6,
      confidence: incidentGap ? incidentGap.score : coverage.score,
      owner: incidentGap ? incidentGap.owner.name : "Security",
      questionId: incidentGap?.question.id ?? active.id,
      before: incidentGap ? incidentGap.reason : "No critical incident gap is active.",
      after: incidentGap ? `Attach ${incidentGap.request.sourceHint} before approving similar buyer answers.` : "Keep source freshness monitoring active.",
      detail: "Forecasts whether adding the missing proof will reduce buyer challenge risk and improve benchmark readiness.",
      guardrail: "Proof source required",
    },
    {
      id: "network-pattern-promotion",
      type: "Federated learning",
      title: promotion ? `Promote ${promotion.title.toLowerCase()}` : "Promote network-safe pattern",
      status: promotion?.status === "Eligible" && network.privacyScore >= 90 ? "Recommended" : "Review",
      lift: promotion?.status === "Eligible" ? 12 : 4,
      confidence: network.privacyScore,
      owner: "Trust Lead",
      questionId: active.id,
      before: promotion ? promotion.detail : "No promotion candidate has passed abstraction.",
      after: "Share only aggregate label, proof type, readiness band, role type, and outcome class.",
      detail: "Tests whether a graph pattern can improve peer recommendations without raw evidence, buyer text, prompts, or contract language.",
      guardrail: "Privacy threshold and reviewer consent",
    },
    {
      id: "legacy-terms-block",
      type: "Counterfactual block",
      title: "Block legacy pilot terms from answer memory",
      status: "Blocked",
      lift: -24,
      confidence: 96,
      owner: "Legal",
      questionId: aiQuestion.id,
      before: "Legacy pilot terms allowed anonymized usage data for service-quality improvement.",
      after: "Keep archived terms quarantined from new enterprise security answers.",
      detail: "Shows the system can rehearse a bad option and explain why it must not influence local or federated learning.",
      guardrail: "Legacy source quarantine",
    },
    {
      id: "deadline-override-block",
      type: "Deadline rehearsal",
      title: "Reject deadline override without proof",
      status: gaps.highRiskCount > 0 || openGate ? "Blocked" : "Review",
      lift: gaps.highRiskCount > 0 ? -18 : 2,
      confidence: orchestrator.score,
      owner: "Sales Engineering",
      questionId: active.id,
      before: "Submit quickly because the buyer deadline is close.",
      after: "Route proof first; deadline pressure cannot bypass claim trace, source freshness, or human approval.",
      detail: "Simulates the tempting shortcut and keeps the recommendation from becoming a production action.",
      guardrail: "No proof bypass",
    },
    {
      id: "source-freshness-window",
      type: "Drift rehearsal",
      title: staleConnector ? `Refresh ${staleConnector.name} before graph promotion` : "Keep source freshness window current",
      status: staleConnector ? "Recommended" : "Review",
      lift: staleConnector ? 11 : 5,
      confidence: connectors.score,
      owner: staleConnector?.owner.name ?? "Operations",
      questionId: active.id,
      before: staleConnector ? `${staleConnector.provider} source health is ${staleConnector.health}%.` : "Connector health is stable.",
      after: staleConnector ? staleConnector.nextAction : "Schedule periodic freshness review before source age drift appears.",
      detail: behindBand ? `Also protects ${behindBand.category} readiness against peer-band drift.` : "Keeps source drift from weakening repeated answer memory.",
      guardrail: "Refresh metadata, not answer claims",
    },
    {
      id: "challenge-recovery",
      type: "Outcome rehearsal",
      title: challenged ? "Convert buyer challenge into prevention rule" : "Wait for stronger buyer outcome signal",
      status: challenged ? "Recommended" : "Review",
      lift: challenged ? 13 : 3,
      confidence: outcomes.score,
      owner: "Reviewer",
      questionId: active.id,
      before: challenged ? challenged.detail : "No buyer challenge needs recovery.",
      after: challenged ? "Create a local prevention rule and share only abstract friction type after approval." : "Keep outcome learning local until a stronger signal exists.",
      detail: "Forecasts how challenged outcomes should penalize future recommendations before weak proof repeats.",
      guardrail: "Exact buyer text stays private",
    },
  ].sort((a, b) => b.lift - a.lift);
}

function policySimulationForecasts({ scenarios, gaps, connectors, network, graph, outcomes }) {
  const recommendedLift = scenarios.filter((scenario) => scenario.status === "Recommended").reduce((total, scenario) => total + Math.max(0, scenario.lift), 0);
  const blockedRisk = Math.abs(scenarios.filter((scenario) => scenario.status === "Blocked").reduce((total, scenario) => total + Math.min(0, scenario.lift), 0));
  const eligiblePromotions = graph.promotions.filter((promotion) => promotion.status === "Eligible").length;
  const challengeCount = outcomes.events.filter((event) => event.sentiment === "Negative").length;

  return [
    {
      metric: "Approval odds",
      delta: `+${Math.min(34, Math.round(recommendedLift / 2))}%`,
      direction: "Lift",
      detail: "Recommended simulations improve approval odds when source refresh, AI wording, and challenge recovery pass proof gates.",
    },
    {
      metric: "Buyer friction",
      delta: `-${Math.min(28, gaps.highRiskCount * 8 + challengeCount * 6)}%`,
      direction: "Lift",
      detail: "Pre-routing weak proof and challenged categories should reduce buyer follow-up loops.",
    },
    {
      metric: "Network shareability",
      delta: `+${Math.min(22, eligiblePromotions * 7 + (network.privacyScore >= 90 ? 6 : 0))}%`,
      direction: "Lift",
      detail: "Only abstract labels, proof types, readiness bands, and outcome classes become safer for federation.",
    },
    {
      metric: "Drift risk",
      delta: `-${Math.min(30, connectors.staleCount * 9 + graph.drift.length * 4)}%`,
      direction: "Lift",
      detail: "Refreshing stale sources and quarantining legacy evidence lowers the chance of bad memory reuse.",
    },
    {
      metric: "Blocked shortcut risk",
      delta: `${blockedRisk}`,
      direction: "Risk",
      detail: "Blocked counterfactuals show the cost of deadline overrides, legacy evidence reuse, or unsupported claim changes.",
    },
  ];
}

function policySimulationGates({ scenarios, graph, network, gaps }) {
  return [
    {
      title: "Simulation is not production",
      status: "Enforced",
      detail: "Counterfactual recommendations do not change buyer-facing answers, approved memory, or network learning until a reviewer acts.",
    },
    {
      title: "Reviewer approval",
      status: state.simulatorActions.gateApprovedAt ? "Approved" : "Review",
      detail: "A human must approve the rehearsal result before applying the recommendation to a route, answer, or graph promotion.",
    },
    {
      title: "Proof freshness",
      status: scenarios.some((scenario) => scenario.id === "source-freshness-window" && scenario.status === "Recommended") ? "Review" : "Approved",
      detail: "Source refresh simulations can queue owner work, but they cannot silently alter approved answer language.",
    },
    {
      title: "Privacy threshold",
      status: network.privacyScore >= 90 ? "Approved" : "Review",
      detail: `${network.privacyScore}% privacy score; federated learning remains aggregate-only.`,
    },
    {
      title: "Drift quarantine",
      status: graph.drift.some((drift) => drift.severity === "High") || gaps.highRiskCount > 0 ? "Blocked" : "Approved",
      detail: "High drift or high-risk proof gaps keep related patterns local until proof improves.",
    },
  ];
}

function policySimulationActions({ scenarios, forecasts, gates }) {
  const best = scenarios.find((scenario) => scenario.status === "Recommended");
  const blocked = gates.find((gate) => gate.status === "Blocked");
  return [
    {
      step: "01",
      title: best ? `Queue ${best.title.toLowerCase()}` : "Wait for a stronger recommendation",
      detail: best ? `${best.owner} owns the safest simulated move with ${best.lift >= 0 ? "+" : ""}${best.lift} forecast lift.` : "No recommended scenario is strong enough to queue.",
      mode: "Queue",
    },
    {
      step: "02",
      title: "Keep blocked shortcuts visible",
      detail: `${scenarios.filter((scenario) => scenario.status === "Blocked").length} blocked scenario${scenarios.filter((scenario) => scenario.status === "Blocked").length === 1 ? "" : "s"} explain why speed cannot bypass proof.`,
      mode: "Block",
    },
    {
      step: "03",
      title: "Review forecast deltas",
      detail: forecasts.slice(0, 3).map((forecast) => `${forecast.metric} ${forecast.delta}`).join(", "),
      mode: "Forecast",
    },
    {
      step: "04",
      title: blocked ? `Resolve ${blocked.title.toLowerCase()}` : "Approve rehearsal gate",
      detail: blocked ? blocked.detail : "Once approval passes, the best simulated move can become a governed task.",
      mode: blocked ? "Resolve" : "Approve",
    },
    {
      step: "05",
      title: "Write counterfactual receipt",
      detail: "Record why the system recommended change, block, or wait before any production memory is updated.",
      mode: "Receipt",
    },
  ];
}

function runPolicySimulations() {
  const simulator = policySimulatorSnapshot();
  const detail = `Policy simulator ran ${simulator.scenarios.length} scenarios with +${simulator.bestLift} best lift, ${simulator.blockedCount} blocked signals, and ${simulator.score}% simulator score.`;
  state.simulatorActions.status = "Simulated";
  state.simulatorActions.simulatedAt = new Date().toISOString();
  addSimulatorReceipt("Simulations run", detail);
  addAudit("Trust policy simulations run", detail);
  renderPolicySimulator();
  renderReinforcementControl();
  renderAudit();
  showToast("Trust policy simulations run.");
}

function applyPolicySimulation() {
  const simulator = policySimulatorSnapshot();
  const scenario = simulator.scenarios.find((item) => item.status === "Recommended");
  if (!scenario) return;
  const question = state.questions.find((item) => item.id === scenario.questionId) ?? getActiveQuestion();
  state.activeQuestionId = question.id;
  question.routeStatus = "Simulation queued";
  question.assigneeId = ownerToMemberId(question.owner);
  question.routedAt = new Date().toISOString();
  if (question.status === "draft" && scenario.id !== "ai-policy-tighten") {
    question.status = "needs-evidence";
  }

  const detail = `Queued simulated recommendation: ${scenario.title}. Owner: ${scenario.owner}. Forecast lift: ${scenario.lift >= 0 ? "+" : ""}${scenario.lift}.`;
  state.simulatorActions.status = "Recommendation queued";
  state.simulatorActions.appliedAt = new Date().toISOString();
  addSimulatorReceipt("Recommendation queued", detail);
  addAudit("Simulation recommendation queued", detail);
  render();
  showToast("Simulation recommendation queued.");
}

function approveSimulationGate() {
  const simulator = policySimulatorSnapshot();
  const gate = simulator.gates.find((item) => item.status === "Review" || item.status === "Blocked");
  const detail = gate ? `Simulation gate reviewed: ${gate.title}. ${gate.detail}` : "All simulation gates already passed.";
  state.simulatorActions.status = "Gate approved";
  state.simulatorActions.gateApprovedAt = new Date().toISOString();
  addSimulatorReceipt("Gate approved", detail);
  addAudit("Simulation gate approved", detail);
  renderPolicySimulator();
  renderReinforcementControl();
  renderAudit();
  showToast("Simulation gate approved.");
}

function copySimulatorDigest() {
  const simulator = policySimulatorSnapshot();
  state.simulatorActions.lastCopiedAt = new Date().toISOString();
  addSimulatorReceipt("Simulator digest copied", "Trust policy simulator digest copied.");
  addAudit("Simulator digest copied", "Trust policy simulator digest copied.");
  renderPolicySimulator();
  renderReinforcementControl();
  renderAudit();
  copyText(simulatorDigestText(simulator), "Trust policy simulator digest copied.");
}

function addSimulatorReceipt(action, detail) {
  state.simulatorActions.receipts = [
    ...(state.simulatorActions.receipts ?? []),
    {
      id: `simulator-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function simulatorDigestText(simulator = policySimulatorSnapshot()) {
  const scenarioLines = simulator.scenarios.map((scenario, index) => `${index + 1}. ${scenario.status}: ${scenario.title} | ${scenario.type} | ${scenario.lift >= 0 ? "+" : ""}${scenario.lift} | ${scenario.guardrail}`).join("\n");
  const forecastLines = simulator.forecasts.map((forecast, index) => `${index + 1}. ${forecast.metric}: ${forecast.delta} - ${forecast.detail}`).join("\n");
  const gateLines = simulator.gates.map((gate, index) => `${index + 1}. ${gate.title}: ${gate.status} - ${gate.detail}`).join("\n");
  const actionLines = simulator.actions.map((action) => `${action.step}. ${action.title} | ${action.mode} | ${action.detail}`).join("\n");
  const receiptLines = simulator.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Trust Policy Simulator",
    `Build: ${BUILD_VERSION}`,
    `Simulator status: ${simulator.statusLabel}`,
    `Simulator score: ${simulator.score}%`,
    `Scenarios: ${simulator.scenarios.length}`,
    `Best forecast lift: +${simulator.bestLift}`,
    `Blocked signals: ${simulator.blockedCount}`,
    "",
    "Counterfactual scenarios:",
    scenarioLines,
    "",
    "Forecast deltas:",
    forecastLines,
    "",
    "Human and privacy gates:",
    gateLines,
    "",
    "Recommended actions:",
    actionLines,
    "",
    "Receipts:",
    receiptLines || "No simulation receipts yet.",
    "",
    "Simulation rule:",
    "- Simulations do not change production memory by themselves.",
    "- Recommended moves become governed tasks only after human approval.",
    "- Blocked counterfactuals are valuable because they teach the system what not to repeat.",
  ].join("\n");
}

function renderReinforcementControl() {
  const control = reinforcementControlSnapshot();

  elements.reinforcementScore.textContent = `${control.score}%`;
  elements.reinforcementReplayCount.textContent = control.replays.length;
  elements.reinforcementRewardCount.textContent = control.rewards.length;
  elements.reinforcementNetworkLift.textContent = `+${control.networkLift}`;
  elements.reinforcementStatus.textContent = control.statusLabel;
  elements.reinforcementDigest.textContent = reinforcementDigestText(control);

  elements.reinforcementReplayList.innerHTML = "";
  control.replays.forEach((replay) => {
    const card = document.createElement("article");
    card.className = `reinforcement-replay-card ${replay.accuracy === "Low" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(replay.source)}</span>
          <strong>${escapeHtml(replay.title)}</strong>
        </div>
        <b>${escapeHtml(replay.accuracy)}</b>
      </header>
      <p>${escapeHtml(replay.detail)}</p>
      <div class="reinforcement-before-after">
        <span>${escapeHtml(replay.predicted)}</span>
        <span>${escapeHtml(replay.actual)}</span>
      </div>
      <footer>
        <span>${escapeHtml(replay.adjustment)}</span>
        <span>${escapeHtml(replay.guardrail)}</span>
      </footer>
    `;
    elements.reinforcementReplayList.append(card);
  });

  elements.reinforcementRewardList.innerHTML = "";
  control.rewards.forEach((reward) => {
    const card = document.createElement("article");
    card.className = `reinforcement-reward-card ${String(reward.weight).startsWith("-") ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(reward.mode)}</span>
          <strong>${escapeHtml(reward.signal)}</strong>
        </div>
        <b>${escapeHtml(reward.weight)}</b>
      </header>
      <p>${escapeHtml(reward.learning)}</p>
      <span>${escapeHtml(reward.guardrail)}</span>
    `;
    elements.reinforcementRewardList.append(card);
  });

  elements.reinforcementBoundaryList.innerHTML = "";
  control.boundaries.forEach((boundary) => {
    const card = document.createElement("article");
    card.className = `reinforcement-boundary-card ${boundary.status === "Blocked" || boundary.status === "Review" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(boundary.title)}</strong>
        <b>${escapeHtml(boundary.status)}</b>
      </header>
      <p>${escapeHtml(boundary.detail)}</p>
      <span>${escapeHtml(boundary.allowed)}</span>
    `;
    elements.reinforcementBoundaryList.append(card);
  });

  elements.reinforcementActionList.innerHTML = "";
  control.actions.forEach((action) => {
    const card = document.createElement("article");
    card.className = "reinforcement-action-card";
    card.innerHTML = `
      <span>${escapeHtml(action.step)}</span>
      <div>
        <strong>${escapeHtml(action.title)}</strong>
        <p>${escapeHtml(action.detail)}</p>
      </div>
      <b>${escapeHtml(action.mode)}</b>
    `;
    elements.reinforcementActionList.append(card);
  });

  elements.reinforcementReceiptList.innerHTML = "";
  if (control.receipts.length === 0) {
    elements.reinforcementReceiptList.append(emptyState("No reinforcement receipts yet"));
  }
  control.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "reinforcement-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.reinforcementReceiptList.append(card);
  });
}

function reinforcementControlSnapshot() {
  const simulator = policySimulatorSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const network = learningNetworkSnapshot();
  const graph = federatedGraphSnapshot();
  const orchestrator = trustOrchestratorSnapshot();
  const coverage = coverageSnapshot();
  const followUps = followUpSnapshot();
  const connectors = connectorSnapshot();
  const replays = reinforcementPredictionReplays({ simulator, outcomes, followUps, graph });
  const rewards = reinforcementRewardSignals({ simulator, outcomes, network, coverage, connectors });
  const boundaries = reinforcementLearningBoundaries({ network, graph, outcomes });
  const actions = reinforcementControlActions({ replays, rewards, boundaries, orchestrator });
  const networkLift = rewards
    .filter((reward) => reward.mode === "Network-safe")
    .reduce((sum, reward) => sum + Math.max(0, Number(String(reward.weight).replace(/[^\d-]/g, "")) || 0), 0);
  const score = Math.min(
    100,
    Math.round(
      simulator.score * 0.22
        + outcomes.score * 0.24
        + network.privacyScore * 0.2
        + graph.score * 0.14
        + coverage.score * 0.12
        + Math.max(0, 100 - followUps.evidenceCount * 10 - connectors.staleCount * 5) * 0.08,
    ),
  );
  const statusLabel = state.reinforcementActions.status === "Draft" ? "Ready to replay" : state.reinforcementActions.status;

  return {
    score,
    statusLabel,
    replays,
    rewards,
    boundaries,
    actions,
    networkLift,
    blockedCount: boundaries.filter((boundary) => boundary.status === "Blocked").length,
    receipts: state.reinforcementActions.receipts.slice(-8).reverse(),
    simulator,
    outcomes,
    network,
    graph,
    orchestrator,
  };
}

function reinforcementPredictionReplays({ simulator, outcomes, followUps, graph }) {
  const topScenario = simulator.scenarios.find((scenario) => scenario.status === "Recommended") ?? simulator.scenarios[0];
  const challenged = outcomes.events.find((event) => event.sentiment === "Negative");
  const accepted = outcomes.events.find((event) => event.sentiment === "Positive");
  const drift = graph.drift[0];
  const eligiblePromotions = simulator.graph.promotions.filter((promotion) => promotion.status === "Eligible").length;
  return [
    {
      source: "Simulator",
      title: topScenario ? topScenario.title : "No simulator recommendation",
      predicted: topScenario ? `Predicted ${topScenario.lift >= 0 ? "+" : ""}${topScenario.lift} lift` : "No forecast",
      actual: accepted ? `${accepted.outcome}: ${accepted.title}` : "Waiting for accepted outcome",
      accuracy: topScenario && accepted ? "High" : "Medium",
      adjustment: "Reward source-backed moves that improve approval without weakening guardrails.",
      guardrail: "Prediction cannot update approved language until reviewer action.",
      detail: topScenario ? topScenario.detail : "Run simulations before evaluating outcome fit.",
    },
    {
      source: "Buyer challenge",
      title: challenged ? challenged.title : "No unresolved challenge",
      predicted: followUps.evidenceCount > 0 ? "Forecast friction" : "Forecast low friction",
      actual: challenged ? challenged.outcome : "No negative outcome captured",
      accuracy: challenged ? "High" : "Medium",
      adjustment: challenged ? "Penalize similar weak proof paths earlier." : "Keep challenge weight low until a buyer pushes back.",
      guardrail: "Exact buyer comments stay tenant-private.",
      detail: challenged ? challenged.detail : "No active buyer challenge needs reinforcement tuning.",
    },
    {
      source: "Network pattern",
      title: "Privacy-safe peer recommendation",
      predicted: `${eligiblePromotions} eligible graph pattern${eligiblePromotions === 1 ? "" : "s"}`,
      actual: `${outcomes.shareablePatterns}/${outcomes.patterns.length} outcome patterns shareable`,
      accuracy: outcomes.shareablePatterns > 0 ? "High" : "Medium",
      adjustment: "Promote only category, proof type, freshness band, and outcome label.",
      guardrail: "No raw answers, files, prompts, buyer names, or contract text.",
      detail: "Checks whether aggregate learning can help other tenants without exposing the local workspace.",
    },
    {
      source: "Drift guard",
      title: drift ? drift.title : "No graph drift detected",
      predicted: drift ? "Forecast quarantine" : "Forecast safe reuse",
      actual: drift ? drift.severity : "No drift event",
      accuracy: drift?.severity === "High" ? "High" : "Medium",
      adjustment: drift ? "Reduce confidence for stale, conflicting, or reopened source paths." : "Keep drift penalty light while sources are fresh.",
      guardrail: "High-drift patterns cannot enter network learning.",
      detail: drift ? drift.detail : "Current graph drift does not block reinforcement sharing.",
    },
  ];
}

function reinforcementRewardSignals({ simulator, outcomes, network, coverage, connectors }) {
  return [
    {
      signal: "Accepted sealed answer",
      weight: outcomes.events.some((event) => event.sentiment === "Positive") ? "+26" : "+12",
      mode: "Tenant-local",
      learning: "Exact approved wording, owner route, source links, and buyer result improve this workspace first.",
      guardrail: "Exact answer memory remains inside the tenant.",
    },
    {
      signal: "Buyer challenge",
      weight: outcomes.events.some((event) => event.sentiment === "Negative") ? "-20" : "-6",
      mode: "Tenant-local",
      learning: "Weak proof, stale evidence, or reopened answers reduce confidence until an owner fixes the source.",
      guardrail: "Raw challenge text is never exported to network learning.",
    },
    {
      signal: "Simulator accuracy",
      weight: `+${Math.min(18, Math.max(8, Math.round(simulator.bestLift / 2)))}`,
      mode: "Control",
      learning: "Forecasts earn trust only when replayed against approval, friction, and deal-progress outcomes.",
      guardrail: "Simulation remains rehearsal until human approval.",
    },
    {
      signal: "Network-safe pattern",
      weight: `+${Math.min(18, network.readyPatternCount * 6 + Math.max(0, coverage.ready - connectors.staleCount))}`,
      mode: "Network-safe",
      learning: "Aggregate category, confidence band, proof type, freshness window, and outcome label can improve recommendations elsewhere.",
      guardrail: `${network.privacyScore}% privacy score required before sharing.`,
    },
    {
      signal: "Drift or stale source",
      weight: connectors.staleCount > 0 ? `-${connectors.staleCount * 7}` : "+4",
      mode: "Control",
      learning: "Stale source paths reduce promotion confidence and trigger source-owner work.",
      guardrail: "No silent production answer mutation.",
    },
  ];
}

function reinforcementLearningBoundaries({ network, graph, outcomes }) {
  const highDrift = graph.drift.some((drift) => drift.severity === "High");
  return [
    {
      title: "Tenant exact memory",
      status: "Approved",
      allowed: "Exact answer, source, owner, buyer, and outcome detail",
      detail: "Used only inside the current workspace for reusable answer memory, owner routing, and proof quality.",
    },
    {
      title: "Network learning threshold",
      status: network.privacyScore >= 90 && outcomes.shareablePatterns > 0 ? "Approved" : "Review",
      allowed: "Aggregate category, proof type, freshness band, confidence band, and outcome label",
      detail: `${network.privacyScore}% privacy score with ${outcomes.shareablePatterns} shareable outcome pattern${outcomes.shareablePatterns === 1 ? "" : "s"}.`,
    },
    {
      title: "Production mutation",
      status: state.reinforcementActions.tunedAt ? "Review" : "Blocked",
      allowed: "Only after reviewer approval and evidence trace",
      detail: "Reward tuning can recommend priority changes, but it cannot edit buyer-facing answers or approved policies by itself.",
    },
    {
      title: "Drift quarantine",
      status: highDrift ? "Blocked" : "Approved",
      allowed: "Low-drift aggregate patterns only",
      detail: highDrift ? "High-drift graph signals remain quarantined until source freshness and conflicts are resolved." : "No high-drift graph signal is blocking aggregate learning.",
    },
  ];
}

function reinforcementControlActions({ replays, rewards, boundaries, orchestrator }) {
  const blocked = boundaries.filter((boundary) => boundary.status === "Blocked");
  const strongestReward = rewards
    .filter((reward) => !String(reward.weight).startsWith("-"))
    .sort((a, b) => (Number(String(b.weight).replace(/[^\d]/g, "")) || 0) - (Number(String(a.weight).replace(/[^\d]/g, "")) || 0))[0];
  return [
    {
      step: "01",
      title: "Replay predictions",
      mode: "Replay",
      detail: `Compare ${replays.length} simulator, buyer, network, and drift predictions against current outcome memory.`,
    },
    {
      step: "02",
      title: "Tune reward weights",
      mode: "Tune",
      detail: strongestReward ? `Strengthen ${strongestReward.signal.toLowerCase()} while preserving its guardrail.` : "No positive reward is strong enough to tune yet.",
    },
    {
      step: "03",
      title: "Route blocked learning",
      mode: "Gate",
      detail: blocked.length > 0 ? `${blocked.length} learning boundary needs reviewer or source-owner action.` : "All learning boundaries are ready for reviewer inspection.",
    },
    {
      step: "04",
      title: "Prepare network package",
      mode: "Share",
      detail: "Package only aggregate outcome labels, proof type, category, freshness, and confidence bands.",
    },
    {
      step: "05",
      title: "Send work to orchestrator",
      mode: "Operate",
      detail: `${orchestrator.priorities.length} governed work priorit${orchestrator.priorities.length === 1 ? "y" : "ies"} can absorb the tuned signal without automatic buyer-facing edits.`,
    },
  ];
}

function replayReinforcementPredictions() {
  const control = reinforcementControlSnapshot();
  const detail = `Replayed ${control.replays.length} predictions against ${control.outcomes.events.length} outcome events with ${control.score}% reinforcement score.`;
  state.reinforcementActions.status = "Replay complete";
  state.reinforcementActions.replayedAt = new Date().toISOString();
  addReinforcementReceipt("Predictions replayed", detail);
  addAudit("Reinforcement predictions replayed", detail);
  renderReinforcementControl();
  renderAudit();
  showToast("Reinforcement predictions replayed.");
}

function tuneReinforcementRewards() {
  const control = reinforcementControlSnapshot();
  const positive = control.rewards.filter((reward) => !String(reward.weight).startsWith("-")).length;
  const negative = control.rewards.length - positive;
  const detail = `Reward tuning prepared with ${positive} positive signal${positive === 1 ? "" : "s"}, ${negative} penalty signal${negative === 1 ? "" : "s"}, and ${control.blockedCount} blocked boundar${control.blockedCount === 1 ? "y" : "ies"}.`;
  state.reinforcementActions.status = "Rewards tuned";
  state.reinforcementActions.tunedAt = new Date().toISOString();
  addReinforcementReceipt("Rewards tuned", detail);
  addAudit("Reinforcement rewards tuned", detail);
  render();
  showToast("Reinforcement rewards tuned.");
}

function prepareReinforcementNetworkPackage() {
  const control = reinforcementControlSnapshot();
  const detail = `Prepared network learning package with +${control.networkLift} safe lift, ${control.outcomes.shareablePatterns} shareable outcome patterns, and ${control.network.privacyScore}% privacy score.`;
  state.reinforcementActions.status = "Network package prepared";
  state.reinforcementActions.networkPreparedAt = new Date().toISOString();
  addReinforcementReceipt("Network package prepared", detail);
  addAudit("Network learning package prepared", detail);
  render();
  showToast("Network learning package prepared.");
}

function copyReinforcementDigest() {
  const control = reinforcementControlSnapshot();
  state.reinforcementActions.lastCopiedAt = new Date().toISOString();
  addReinforcementReceipt("Reinforcement digest copied", "Reinforcement control digest copied.");
  addAudit("Reinforcement digest copied", "Reinforcement control digest copied.");
  renderReinforcementControl();
  renderAudit();
  copyText(reinforcementDigestText(control), "Reinforcement digest copied.");
}

function addReinforcementReceipt(action, detail) {
  state.reinforcementActions.receipts = [
    ...(state.reinforcementActions.receipts ?? []),
    {
      id: `reinforcement-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function reinforcementDigestText(control = reinforcementControlSnapshot()) {
  const replayLines = control.replays.map((replay, index) => `${index + 1}. ${replay.accuracy}: ${replay.title} | ${replay.predicted} -> ${replay.actual} | ${replay.adjustment}`).join("\n");
  const rewardLines = control.rewards.map((reward, index) => `${index + 1}. ${reward.mode}: ${reward.signal} ${reward.weight} | ${reward.guardrail}`).join("\n");
  const boundaryLines = control.boundaries.map((boundary, index) => `${index + 1}. ${boundary.title}: ${boundary.status} | ${boundary.allowed} | ${boundary.detail}`).join("\n");
  const actionLines = control.actions.map((action) => `${action.step}. ${action.title} | ${action.mode} | ${action.detail}`).join("\n");
  const receiptLines = control.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Reinforcement Control Room",
    `Build: ${BUILD_VERSION}`,
    `Status: ${control.statusLabel}`,
    `Reinforcement score: ${control.score}%`,
    `Prediction replays: ${control.replays.length}`,
    `Reward signals: ${control.rewards.length}`,
    `Network-safe lift: +${control.networkLift}`,
    `Blocked boundaries: ${control.blockedCount}`,
    "",
    "Prediction replay:",
    replayLines,
    "",
    "Reward tuning:",
    rewardLines,
    "",
    "Learning boundaries:",
    boundaryLines,
    "",
    "Control actions:",
    actionLines,
    "",
    "Receipts:",
    receiptLines || "No reinforcement receipts yet.",
    "",
    "Closed-loop rule:",
    "- Local tenant memory may learn exact answers, sources, owners, buyer outcomes, and approval trails.",
    "- Network learning may use only aggregate categories, proof types, freshness bands, confidence bands, and outcome labels.",
    "- Reward tuning cannot change buyer-facing answers, approved evidence, or production policy without human approval.",
  ].join("\n");
}

function renderEvaluationLab() {
  const lab = evaluationLabSnapshot();

  elements.evaluationScore.textContent = `${lab.score}%`;
  elements.evaluationSetCount.textContent = `${lab.passedCount}/${lab.evalSets.length}`;
  elements.evaluationRegressionCount.textContent = lab.regressionCount;
  elements.evaluationCalibrationScore.textContent = `${lab.calibrationScore}%`;
  elements.evaluationStatus.textContent = lab.statusLabel;
  elements.evaluationDigest.textContent = evaluationDigestText(lab);

  elements.evaluationSetList.innerHTML = "";
  lab.evalSets.forEach((item) => {
    const card = document.createElement("article");
    card.className = `evaluation-set-card ${item.status === "Pass" ? "" : "is-risk"}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(item.area)}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </div>
        <b>${escapeHtml(item.status)}</b>
      </header>
      <p>${escapeHtml(item.detail)}</p>
      <footer>
        <span>${escapeHtml(item.expected)}</span>
        <span>${escapeHtml(item.actual)}</span>
      </footer>
    `;
    elements.evaluationSetList.append(card);
  });

  elements.evaluationRewardTestList.innerHTML = "";
  lab.rewardTests.forEach((test) => {
    const card = document.createElement("article");
    card.className = `evaluation-reward-card ${test.result === "Risk" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(test.variant)}</span>
          <strong>${escapeHtml(test.title)}</strong>
        </div>
        <b>${escapeHtml(test.score)}</b>
      </header>
      <p>${escapeHtml(test.detail)}</p>
      <span>${escapeHtml(test.guardrail)}</span>
    `;
    elements.evaluationRewardTestList.append(card);
  });

  elements.evaluationRegressionList.innerHTML = "";
  lab.regressions.forEach((regression) => {
    const card = document.createElement("article");
    card.className = `evaluation-regression-card ${regression.status === "Pass" ? "" : "is-risk"}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(regression.title)}</strong>
        <b>${escapeHtml(regression.status)}</b>
      </header>
      <p>${escapeHtml(regression.detail)}</p>
      <span>${escapeHtml(regression.action)}</span>
    `;
    elements.evaluationRegressionList.append(card);
  });

  elements.evaluationCalibrationList.innerHTML = "";
  lab.calibrations.forEach((calibration) => {
    const card = document.createElement("article");
    card.className = `evaluation-calibration-card ${calibration.agreement < 80 ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(calibration.role)}</span>
          <strong>${escapeHtml(calibration.topic)}</strong>
        </div>
        <b>${calibration.agreement}%</b>
      </header>
      <p>${escapeHtml(calibration.detail)}</p>
      <span>${escapeHtml(calibration.action)}</span>
    `;
    elements.evaluationCalibrationList.append(card);
  });

  elements.evaluationActionList.innerHTML = "";
  lab.actions.forEach((action) => {
    const card = document.createElement("article");
    card.className = "evaluation-action-card";
    card.innerHTML = `
      <span>${escapeHtml(action.step)}</span>
      <div>
        <strong>${escapeHtml(action.title)}</strong>
        <p>${escapeHtml(action.detail)}</p>
      </div>
      <b>${escapeHtml(action.mode)}</b>
    `;
    elements.evaluationActionList.append(card);
  });

  elements.evaluationReceiptList.innerHTML = "";
  if (lab.receipts.length === 0) {
    elements.evaluationReceiptList.append(emptyState("No evaluation receipts yet"));
  }
  lab.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "evaluation-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.evaluationReceiptList.append(card);
  });
}

function evaluationLabSnapshot() {
  const reinforcement = reinforcementControlSnapshot();
  const simulator = policySimulatorSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const network = learningNetworkSnapshot();
  const graph = federatedGraphSnapshot();
  const coverage = coverageSnapshot();
  const connectors = connectorSnapshot();
  const followUps = followUpSnapshot();
  const routing = ownerRoutingSnapshot();
  const activeQuestion = getActiveQuestion();
  const trace = claimTraceSnapshot(activeQuestion);
  const retrieval = retrievalSnapshot(activeQuestion);
  const evalSets = evaluationSets({ coverage, connectors, trace, retrieval, network, reinforcement });
  const rewardTests = evaluationRewardPolicyTests({ reinforcement, simulator, outcomes, network, graph, followUps });
  const regressions = evaluationRegressions({ connectors, followUps, graph, trace, retrieval, coverage });
  const calibrations = evaluationReviewerCalibration({ routing, coverage, followUps, outcomes, trace });
  const actions = evaluationLabActions({ evalSets, rewardTests, regressions, calibrations, reinforcement });
  const passedCount = evalSets.filter((item) => item.status === "Pass").length;
  const regressionCount = regressions.filter((item) => item.status !== "Pass").length;
  const calibrationScore = Math.round(calibrations.reduce((sum, item) => sum + item.agreement, 0) / Math.max(1, calibrations.length));
  const score = Math.min(
    100,
    Math.round(
      (passedCount / Math.max(1, evalSets.length)) * 32
        + Math.max(0, 100 - regressionCount * 16) * 0.22
        + calibrationScore * 0.2
        + reinforcement.score * 0.16
        + network.privacyScore * 0.1,
    ),
  );
  const statusLabel = state.evaluationActions.status === "Draft" ? "Ready to evaluate" : state.evaluationActions.status;

  return {
    score,
    statusLabel,
    evalSets,
    rewardTests,
    regressions,
    calibrations,
    actions,
    passedCount,
    regressionCount,
    calibrationScore,
    receipts: state.evaluationActions.receipts.slice(-8).reverse(),
    reinforcement,
    simulator,
    outcomes,
    network,
    graph,
  };
}

function evaluationSets({ coverage, connectors, trace, retrieval, network, reinforcement }) {
  return [
    {
      area: "Source coverage",
      title: "Every answer has approved proof",
      status: coverage.score >= 80 ? "Pass" : "Review",
      expected: "Coverage >= 80%",
      actual: `${coverage.score}% coverage`,
      detail: `${coverage.ready}/${coverage.items.length} trust categories are evidence-ready before answer reuse.`,
    },
    {
      area: "Citation quality",
      title: "Claims trace to ranked sources",
      status: trace.averageRank >= 72 && trace.conflicts === 0 ? "Pass" : "Review",
      expected: "Rank >= 72%, no conflicts",
      actual: `${trace.averageRank}% rank, ${trace.conflicts} conflicts`,
      detail: `${trace.bound}/${trace.claims.length} claims bind to source excerpts for the active answer.`,
    },
    {
      area: "Retrieval safety",
      title: "Weak matches are blocked",
      status: retrieval.verdict === "refuse" ? "Review" : "Pass",
      expected: "No unsupported approval",
      actual: `${retrieval.gateLabel}, ${retrieval.topScore}% match`,
      detail: "The eval checks whether answer drafting refuses weak evidence instead of inventing confidence.",
    },
    {
      area: "Source freshness",
      title: "Stale evidence does not improve rewards",
      status: connectors.staleCount === 0 ? "Pass" : "Watch",
      expected: "0 stale source signals",
      actual: `${connectors.staleCount} stale`,
      detail: "Freshness issues reduce reward confidence before patterns can move into reusable memory.",
    },
    {
      area: "Privacy boundary",
      title: "Network learning stays aggregate",
      status: network.privacyScore >= 90 && reinforcement.blockedCount <= 1 ? "Pass" : "Review",
      expected: "Privacy >= 90%, <= 1 block",
      actual: `${network.privacyScore}% privacy, ${reinforcement.blockedCount} blocks`,
      detail: "The lab confirms exact tenant memory and aggregate network learning remain separated.",
    },
  ];
}

function evaluationRewardPolicyTests({ reinforcement, simulator, outcomes, network, graph, followUps }) {
  const positiveSignals = reinforcement.rewards.filter((reward) => !String(reward.weight).startsWith("-")).length;
  const driftBlocks = graph.drift.filter((item) => item.severity === "High").length;
  return [
    {
      variant: "Baseline",
      title: "Source-first policy",
      score: `${Math.min(98, 70 + reinforcement.score / 4)}%`,
      result: "Pass",
      detail: "Prioritizes source coverage, claim trace, and human approval over speed.",
      guardrail: "Cannot reward unsupported answers.",
    },
    {
      variant: "Tuned",
      title: "Outcome-aware policy",
      score: `${Math.min(96, 66 + positiveSignals * 7 + outcomes.shareablePatterns * 3)}%`,
      result: outcomes.shareablePatterns > 0 ? "Pass" : "Watch",
      detail: "Rewards accepted answers and penalizes buyer challenges after outcomes are captured.",
      guardrail: "Exact buyer details stay local.",
    },
    {
      variant: "Network",
      title: "Aggregate learning policy",
      score: `${Math.min(94, network.privacyScore - driftBlocks * 12)}%`,
      result: network.privacyScore >= 90 && driftBlocks === 0 ? "Pass" : "Risk",
      detail: "Tests whether network-safe patterns improve recommendations without leaking source material.",
      guardrail: "Shares only category, proof type, freshness band, confidence band, and outcome label.",
    },
    {
      variant: "Speed",
      title: "Deadline-pressure policy",
      score: `${Math.max(52, 88 - followUps.slaCount * 12 - simulator.blockedCount * 4)}%`,
      result: followUps.slaCount > 0 || simulator.blockedCount > 2 ? "Risk" : "Pass",
      detail: "Prevents urgent deals from rewarding shortcuts that bypass evidence gates.",
      guardrail: "Deadline pressure cannot override proof quality.",
    },
  ];
}

function evaluationRegressions({ connectors, followUps, graph, trace, retrieval, coverage }) {
  return [
    {
      title: "Source freshness regression",
      status: connectors.staleCount > 0 ? "Watch" : "Pass",
      detail: `${connectors.staleCount} source freshness signal${connectors.staleCount === 1 ? "" : "s"} can weaken answer reuse.`,
      action: connectors.staleCount > 0 ? "Route source-owner refresh before reward promotion." : "Keep connector freshness monitoring active.",
    },
    {
      title: "Buyer challenge regression",
      status: followUps.evidenceCount > 0 ? "Watch" : "Pass",
      detail: `${followUps.evidenceCount} buyer follow-up${followUps.evidenceCount === 1 ? "" : "s"} need stronger evidence.`,
      action: followUps.evidenceCount > 0 ? "Reduce confidence for similar categories until evidence improves." : "No buyer challenge regression is active.",
    },
    {
      title: "Graph drift regression",
      status: graph.drift.some((item) => item.severity === "High") ? "Blocked" : "Pass",
      detail: `${graph.drift.length} graph drift signal${graph.drift.length === 1 ? "" : "s"} detected.`,
      action: "Quarantine high-drift patterns from network learning.",
    },
    {
      title: "Citation regression",
      status: trace.conflicts > 0 || retrieval.verdict === "refuse" || coverage.score < 70 ? "Blocked" : "Pass",
      detail: `${trace.conflicts} claim conflict${trace.conflicts === 1 ? "" : "s"}, retrieval gate ${retrieval.gateLabel}.`,
      action: "Block approval when citations, retrieval, or coverage fall below eval thresholds.",
    },
  ];
}

function evaluationReviewerCalibration({ routing, coverage, followUps, outcomes, trace }) {
  return [
    {
      role: "Security",
      topic: "Source freshness and SOC proof",
      agreement: Math.max(64, Math.min(96, 92 - followUps.evidenceCount * 4)),
      detail: "Security reviewers should agree when stale evidence needs owner refresh before reuse.",
      action: "Use freshness regression results in security review.",
    },
    {
      role: "Legal",
      topic: "Privacy and network learning",
      agreement: Math.max(70, Math.min(98, 86 + outcomes.shareablePatterns * 2)),
      detail: "Legal calibration checks what can aggregate without raw buyer, contract, prompt, or evidence text.",
      action: "Review network-safe fields before promotion.",
    },
    {
      role: "Sales Engineering",
      topic: "Deal speed versus proof quality",
      agreement: Math.max(62, Math.min(94, 90 - routing.openRisks * 3)),
      detail: "Sales engineering should not approve deadline shortcuts when proof gates fail.",
      action: "Use eval status in buyer handoff.",
    },
    {
      role: "AI Governance",
      topic: "Claim trace and model behavior",
      agreement: Math.max(68, Math.min(97, 72 + trace.averageRank / 4 + coverage.ready)),
      detail: "AI governance calibration catches unsupported generated claims before reward changes learn from them.",
      action: "Compare answer evals before policy tuning.",
    },
  ];
}

function evaluationLabActions({ evalSets, rewardTests, regressions, calibrations, reinforcement }) {
  const failedEval = evalSets.find((item) => item.status !== "Pass");
  const riskyReward = rewardTests.find((item) => item.result === "Risk");
  const regression = regressions.find((item) => item.status === "Blocked" || item.status === "Watch");
  const calibration = [...calibrations].sort((a, b) => a.agreement - b.agreement)[0];
  return [
    {
      step: "01",
      title: failedEval ? `Fix ${failedEval.area.toLowerCase()} eval` : "Approve answer eval set",
      mode: failedEval ? "Fix" : "Pass",
      detail: failedEval ? failedEval.detail : `${evalSets.length} evals are ready for reward testing.`,
    },
    {
      step: "02",
      title: riskyReward ? `Hold ${riskyReward.variant.toLowerCase()} reward policy` : "Compare reward policies",
      mode: riskyReward ? "Hold" : "Test",
      detail: riskyReward ? riskyReward.guardrail : `${rewardTests.length} reward policies can be compared before production use.`,
    },
    {
      step: "03",
      title: regression ? `Watch ${regression.title.toLowerCase()}` : "Clear regression watch",
      mode: regression ? "Watch" : "Clear",
      detail: regression ? regression.action : "No blocking regression is currently active.",
    },
    {
      step: "04",
      title: `Calibrate ${calibration.role}`,
      mode: "Calibrate",
      detail: `${calibration.agreement}% agreement on ${calibration.topic.toLowerCase()}.`,
    },
    {
      step: "05",
      title: "Feed safe result to reinforcement",
      mode: "Learn",
      detail: `Only passing evals can tune the ${reinforcement.statusLabel.toLowerCase()} control loop.`,
    },
  ];
}

function runEvaluationLab() {
  const lab = evaluationLabSnapshot();
  const detail = `Evaluation lab ran ${lab.evalSets.length} evals with ${lab.passedCount} passing, ${lab.regressionCount} regression watches, and ${lab.score}% lab score.`;
  state.evaluationActions.status = "Evaluation run";
  state.evaluationActions.evaluatedAt = new Date().toISOString();
  addEvaluationReceipt("Evaluation run", detail);
  addAudit("Evaluation lab run", detail);
  renderEvaluationLab();
  renderAudit();
  showToast("Evaluation lab run.");
}

function testEvaluationRewardPolicy() {
  const lab = evaluationLabSnapshot();
  const risky = lab.rewardTests.filter((test) => test.result === "Risk").length;
  const detail = `Reward policies tested: ${lab.rewardTests.length} variants, ${risky} risky, ${lab.reinforcement.networkLift} network-safe lift baseline.`;
  state.evaluationActions.status = "Reward policy tested";
  state.evaluationActions.testedAt = new Date().toISOString();
  addEvaluationReceipt("Reward policy tested", detail);
  addAudit("Reward policy tested", detail);
  render();
  showToast("Reward policy tested.");
}

function calibrateEvaluationReviewers() {
  const lab = evaluationLabSnapshot();
  const detail = `Reviewer calibration recorded at ${lab.calibrationScore}% average agreement across ${lab.calibrations.length} roles.`;
  state.evaluationActions.status = "Reviewers calibrated";
  state.evaluationActions.calibratedAt = new Date().toISOString();
  addEvaluationReceipt("Reviewers calibrated", detail);
  addAudit("Reviewers calibrated", detail);
  render();
  showToast("Reviewers calibrated.");
}

function copyEvaluationDigest() {
  const lab = evaluationLabSnapshot();
  state.evaluationActions.lastCopiedAt = new Date().toISOString();
  addEvaluationReceipt("Evaluation digest copied", "Evaluation lab digest copied.");
  addAudit("Evaluation digest copied", "Evaluation lab digest copied.");
  renderEvaluationLab();
  renderAudit();
  copyText(evaluationDigestText(lab), "Evaluation digest copied.");
}

function addEvaluationReceipt(action, detail) {
  state.evaluationActions.receipts = [
    ...(state.evaluationActions.receipts ?? []),
    {
      id: `evaluation-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function evaluationDigestText(lab = evaluationLabSnapshot()) {
  const evalLines = lab.evalSets.map((item, index) => `${index + 1}. ${item.status}: ${item.title} | ${item.actual} | ${item.detail}`).join("\n");
  const rewardLines = lab.rewardTests.map((test, index) => `${index + 1}. ${test.result}: ${test.variant} ${test.score} | ${test.guardrail}`).join("\n");
  const regressionLines = lab.regressions.map((regression, index) => `${index + 1}. ${regression.status}: ${regression.title} | ${regression.action}`).join("\n");
  const calibrationLines = lab.calibrations.map((calibration, index) => `${index + 1}. ${calibration.role}: ${calibration.agreement}% | ${calibration.topic} | ${calibration.action}`).join("\n");
  const actionLines = lab.actions.map((action) => `${action.step}. ${action.title} | ${action.mode} | ${action.detail}`).join("\n");
  const receiptLines = lab.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Evaluation Lab",
    `Build: ${BUILD_VERSION}`,
    `Status: ${lab.statusLabel}`,
    `Lab score: ${lab.score}%`,
    `Passing evals: ${lab.passedCount}/${lab.evalSets.length}`,
    `Regression watches: ${lab.regressionCount}`,
    `Reviewer calibration: ${lab.calibrationScore}%`,
    "",
    "Answer evals:",
    evalLines,
    "",
    "Reward policy tests:",
    rewardLines,
    "",
    "Regression watch:",
    regressionLines,
    "",
    "Reviewer calibration:",
    calibrationLines,
    "",
    "Lab actions:",
    actionLines,
    "",
    "Receipts:",
    receiptLines || "No evaluation receipts yet.",
    "",
    "Evaluation rule:",
    "- Reward-policy changes must pass evals before they influence production recommendation queues.",
    "- Regression watches block shortcuts when citation quality, source freshness, privacy, or drift gets worse.",
    "- Reviewer calibration keeps security, legal, sales, and AI governance aligned before the loop learns.",
  ].join("\n");
}

function renderLearningLedger() {
  const ledger = learningLedgerSnapshot();

  elements.ledgerScore.textContent = `${ledger.score}%`;
  elements.ledgerEntryCount.textContent = ledger.entries.length;
  elements.ledgerNetworkLift.textContent = `+${ledger.networkLift}`;
  elements.ledgerGateCount.textContent = ledger.openGateCount;
  elements.ledgerStatus.textContent = ledger.statusLabel;
  elements.ledgerDigest.textContent = learningLedgerDigestText(ledger);

  elements.ledgerEntryList.innerHTML = "";
  ledger.entries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = `ledger-entry-card ${entry.status === "Blocked" || entry.scope === "Local only" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(entry.scope)}</span>
          <strong>${escapeHtml(entry.title)}</strong>
        </div>
        <b>${escapeHtml(entry.status)}</b>
      </header>
      <p>${escapeHtml(entry.detail)}</p>
      <footer>
        <span>${escapeHtml(entry.source)}</span>
        <span>${escapeHtml(entry.benefit)}</span>
      </footer>
    `;
    elements.ledgerEntryList.append(card);
  });

  elements.ledgerBenefitList.innerHTML = "";
  ledger.benefits.forEach((benefit) => {
    const card = document.createElement("article");
    card.className = `ledger-benefit-card ${benefit.mode === "Blocked" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(benefit.scope)}</strong>
        <b>${escapeHtml(benefit.value)}</b>
      </header>
      <p>${escapeHtml(benefit.detail)}</p>
      <span>${escapeHtml(benefit.mode)}</span>
    `;
    elements.ledgerBenefitList.append(card);
  });

  elements.ledgerProvenanceList.innerHTML = "";
  ledger.provenance.forEach((item) => {
    const card = document.createElement("article");
    card.className = "ledger-provenance-card";
    card.innerHTML = `
      <span>${escapeHtml(item.step)}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <b>${escapeHtml(item.owner)}</b>
    `;
    elements.ledgerProvenanceList.append(card);
  });

  elements.ledgerGateList.innerHTML = "";
  ledger.gates.forEach((gate) => {
    const card = document.createElement("article");
    card.className = `ledger-gate-card ${gate.status === "Blocked" || gate.status === "Review" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(gate.title)}</strong>
        <b>${escapeHtml(gate.status)}</b>
      </header>
      <p>${escapeHtml(gate.detail)}</p>
      <span>${escapeHtml(gate.action)}</span>
    `;
    elements.ledgerGateList.append(card);
  });

  elements.ledgerAccountingList.innerHTML = "";
  ledger.accounting.forEach((row) => {
    const card = document.createElement("article");
    card.className = `ledger-accounting-card ${row.status === "Held" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(row.metric)}</strong>
        <b>${escapeHtml(row.value)}</b>
      </header>
      <p>${escapeHtml(row.detail)}</p>
      <span>${escapeHtml(row.status)}</span>
    `;
    elements.ledgerAccountingList.append(card);
  });

  elements.ledgerActionList.innerHTML = "";
  ledger.actions.forEach((action) => {
    const card = document.createElement("article");
    card.className = "ledger-action-card";
    card.innerHTML = `
      <span>${escapeHtml(action.step)}</span>
      <div>
        <strong>${escapeHtml(action.title)}</strong>
        <p>${escapeHtml(action.detail)}</p>
      </div>
      <b>${escapeHtml(action.mode)}</b>
    `;
    elements.ledgerActionList.append(card);
  });

  elements.ledgerReceiptList.innerHTML = "";
  if (ledger.receipts.length === 0) {
    elements.ledgerReceiptList.append(emptyState("No learning ledger receipts yet"));
  }
  ledger.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "ledger-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.ledgerReceiptList.append(card);
  });
}

function learningLedgerSnapshot() {
  const evaluation = evaluationLabSnapshot();
  const reinforcement = reinforcementControlSnapshot();
  const network = learningNetworkSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const graph = federatedGraphSnapshot();
  const orchestrator = trustOrchestratorSnapshot();
  const connectors = connectorSnapshot();
  const followUps = followUpSnapshot();
  const entries = learningLedgerEntries({ evaluation, reinforcement, network, outcomes, graph, connectors, followUps });
  const benefits = learningLedgerBenefits({ entries, evaluation, reinforcement, network, outcomes, graph });
  const provenance = learningLedgerProvenance({ evaluation, reinforcement, network, outcomes, graph });
  const gates = learningLedgerGates({ evaluation, reinforcement, network, graph, orchestrator });
  const accounting = learningLedgerAccounting({ entries, benefits, evaluation, reinforcement, network, outcomes, graph });
  const actions = learningLedgerActions({ entries, gates, accounting, evaluation });
  const approvedEntries = entries.filter((entry) => entry.status === "Approved" || entry.status === "Network ready").length;
  const openGateCount = gates.filter((gate) => gate.status !== "Approved").length;
  const networkLift = Math.max(0, reinforcement.networkLift + Math.max(0, network.readyPatternCount - graph.drift.length) + approvedEntries - openGateCount);
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        evaluation.score * 0.28
          + reinforcement.score * 0.2
          + network.privacyScore * 0.18
          + Math.max(0, 100 - openGateCount * 14) * 0.16
          + Math.min(100, approvedEntries * 20) * 0.1
          + Math.max(0, 100 - graph.drift.length * 12) * 0.08,
      ),
    ),
  );
  const statusLabel = state.ledgerActions.status === "Draft" ? "Ready to record" : state.ledgerActions.status;

  return {
    score,
    statusLabel,
    entries,
    benefits,
    provenance,
    gates,
    accounting,
    actions,
    approvedEntries,
    openGateCount,
    networkLift,
    receipts: state.ledgerActions.receipts.slice(-8).reverse(),
    evaluation,
    reinforcement,
    network,
    outcomes,
    graph,
  };
}

function learningLedgerEntries({ evaluation, reinforcement, network, outcomes, graph, connectors, followUps }) {
  const passing = evaluation.passedCount === evaluation.evalSets.length && evaluation.regressionCount === 0;
  const driftBlocked = graph.drift.some((item) => item.severity === "High");
  return [
    {
      scope: "Local memory",
      title: "Approved answer pattern",
      status: passing ? "Approved" : "Review",
      source: `${evaluation.passedCount}/${evaluation.evalSets.length} evals passed`,
      benefit: "Faster future drafts",
      detail: "Approved answer structure can improve this tenant's response memory after eval and reviewer checks.",
    },
    {
      scope: "Network candidate",
      title: "Aggregate proof pattern",
      status: network.privacyScore >= 90 && network.readyPatternCount > 0 && !driftBlocked ? "Network ready" : "Review",
      source: `${network.readyPatternCount}/${network.patterns.length} patterns`,
      benefit: "Peer-safe recommendations",
      detail: "Only category, proof type, freshness band, confidence band, and outcome label can leave the tenant boundary.",
    },
    {
      scope: "Local only",
      title: "Buyer challenge correction",
      status: followUps.evidenceCount > 0 ? "Review" : "Approved",
      source: `${followUps.evidenceCount} evidence follow-ups`,
      benefit: "Safer weak-proof handling",
      detail: "Buyer challenges update local routing and confidence without exposing buyer-specific text to the network.",
    },
    {
      scope: "Penalty",
      title: "Stale source penalty",
      status: connectors.staleCount > 0 ? "Blocked" : "Approved",
      source: `${connectors.staleCount} stale sources`,
      benefit: "Prevents outdated learning",
      detail: "Stale evidence can lower local confidence but cannot become a positive network reward.",
    },
    {
      scope: "Calibration",
      title: "Reviewer agreement signal",
      status: evaluation.calibrationScore >= 82 ? "Approved" : "Review",
      source: `${evaluation.calibrationScore}% agreement`,
      benefit: "Consistent human gates",
      detail: "Security, legal, sales, and AI governance alignment becomes a training signal for future handoffs.",
    },
    {
      scope: "Reinforcement",
      title: "Reward tuning receipt",
      status: reinforcement.blockedCount === 0 ? "Approved" : "Review",
      source: `${reinforcement.rewards.length} reward signals`,
      benefit: `+${reinforcement.networkLift} safe lift`,
      detail: "Reward changes are ledgered only after the eval lab confirms they do not weaken source-backed answers.",
    },
  ];
}

function learningLedgerBenefits({ entries, evaluation, reinforcement, network, outcomes, graph }) {
  const approved = entries.filter((entry) => entry.status === "Approved" || entry.status === "Network ready").length;
  return [
    {
      scope: "Organization",
      value: `${approved}/${entries.length}`,
      mode: "Tenant exact",
      detail: "Exact answers, owners, buyer history, and source excerpts improve only the current workspace.",
    },
    {
      scope: "Buyer segment",
      value: `${evaluation.calibrationScore}%`,
      mode: "Calibrated",
      detail: "Reviewer agreement improves future routing for similar enterprise security reviews.",
    },
    {
      scope: "Network",
      value: `+${Math.max(0, reinforcement.networkLift + outcomes.shareablePatterns)}`,
      mode: network.privacyScore >= 90 ? "Aggregate only" : "Held",
      detail: "Only privacy-safe labels can benefit other organizations through the network learning layer.",
    },
    {
      scope: "Blocked learning",
      value: `${graph.drift.length + evaluation.regressionCount}`,
      mode: graph.drift.length + evaluation.regressionCount > 0 ? "Blocked" : "Clear",
      detail: "Regression, drift, and stale evidence stop unsafe lessons from becoming recommendations.",
    },
  ];
}

function learningLedgerProvenance({ evaluation, reinforcement, network, outcomes, graph }) {
  return [
    {
      step: "01",
      title: "Question and evidence",
      owner: workspaceAccount.currentRole,
      detail: "Buyer question, draft answer, source excerpts, and reviewer notes are captured inside tenant memory.",
    },
    {
      step: "02",
      title: "Evaluation result",
      owner: "AI Governance",
      detail: `${evaluation.passedCount}/${evaluation.evalSets.length} evals passed with ${evaluation.score}% lab score.`,
    },
    {
      step: "03",
      title: "Reward decision",
      owner: "Security",
      detail: `${reinforcement.rewards.length} reward signals and ${reinforcement.blockedCount} learning boundary blocks are reviewed.`,
    },
    {
      step: "04",
      title: "Privacy scope",
      owner: "Legal",
      detail: `${network.privacyScore}% privacy score with ${network.readyPatternCount} aggregate-ready patterns.`,
    },
    {
      step: "05",
      title: "Outcome evidence",
      owner: "Sales Engineering",
      detail: `${outcomes.events.length} outcome events and ${outcomes.shareablePatterns}/${outcomes.patterns.length} shareable patterns are recorded.`,
    },
    {
      step: "06",
      title: "Graph guardrail",
      owner: "AI Governance",
      detail: `${graph.promotions.filter((promotion) => promotion.status === "Eligible").length} eligible graph promotions and ${graph.drift.length} drift signals.`,
    },
  ];
}

function learningLedgerGates({ evaluation, reinforcement, network, graph, orchestrator }) {
  return [
    {
      title: "Evaluation pass",
      status: evaluation.regressionCount === 0 && evaluation.passedCount === evaluation.evalSets.length ? "Approved" : "Review",
      detail: `${evaluation.passedCount}/${evaluation.evalSets.length} evals passed; ${evaluation.regressionCount} regression watches remain.`,
      action: "Run or fix evals before learning can publish.",
    },
    {
      title: "Privacy threshold",
      status: network.privacyScore >= 90 ? "Approved" : "Review",
      detail: `${network.privacyScore}% privacy score controls whether aggregate patterns can leave the tenant.`,
      action: "Hold network promotion until privacy threshold passes.",
    },
    {
      title: "Human approval",
      status: orchestrator.gates.filter((gate) => gate.status !== "Approved").length <= 2 ? "Approved" : "Review",
      detail: `${orchestrator.gates.filter((gate) => gate.status !== "Approved").length} orchestrator gates are still open.`,
      action: "Route remaining gates to owners before production mutation.",
    },
    {
      title: "Drift quarantine",
      status: graph.drift.some((item) => item.severity === "High") ? "Blocked" : "Approved",
      detail: `${graph.drift.length} graph drift signals are watched before network promotion.`,
      action: "Keep high-drift patterns local until repaired.",
    },
    {
      title: "Reward boundary",
      status: reinforcement.blockedCount === 0 ? "Approved" : "Review",
      detail: `${reinforcement.blockedCount} reinforcement boundary blocks remain.`,
      action: "Only evaluated reward changes can influence future recommendations.",
    },
  ];
}

function learningLedgerAccounting({ entries, benefits, evaluation, reinforcement, network, outcomes, graph }) {
  return [
    {
      metric: "Local learning",
      value: `${entries.filter((entry) => entry.scope !== "Network candidate").length} receipts`,
      status: "Tenant exact",
      detail: "Exact answers, evidence, owners, and buyer history stay inside the current organization.",
    },
    {
      metric: "Network learning",
      value: `${network.readyPatternCount} patterns`,
      status: network.privacyScore >= 90 ? "Aggregate" : "Held",
      detail: "Aggregate categories, proof types, freshness bands, confidence bands, and outcome labels may improve peer recommendations.",
    },
    {
      metric: "Quality gate",
      value: `${evaluation.score}%`,
      status: evaluation.regressionCount === 0 ? "Clear" : "Held",
      detail: "The eval score decides whether new learning can influence reward tuning.",
    },
    {
      metric: "Network lift",
      value: `+${Math.max(0, reinforcement.networkLift + outcomes.shareablePatterns - graph.drift.length)}`,
      status: "Measured",
      detail: "Lift is counted only after subtracting drift, blocked learning, and failed evals.",
    },
    {
      metric: "Blocked benefit",
      value: benefits.find((benefit) => benefit.scope === "Blocked learning")?.value ?? "0",
      status: "Held",
      detail: "Unsafe learning remains visible as blocked value instead of disappearing from the audit trail.",
    },
  ];
}

function learningLedgerActions({ entries, gates, accounting, evaluation }) {
  const reviewEntry = entries.find((entry) => entry.status === "Review" || entry.status === "Blocked");
  const openGate = gates.find((gate) => gate.status !== "Approved");
  const heldAccounting = accounting.find((row) => row.status === "Held");
  return [
    {
      step: "01",
      title: "Record learning receipt",
      mode: "Record",
      detail: `${entries.length} learning events are ready for ledger capture from evals, rewards, outcomes, and graph gates.`,
    },
    {
      step: "02",
      title: reviewEntry ? `Review ${reviewEntry.title.toLowerCase()}` : "Approve safe entries",
      mode: reviewEntry ? "Review" : "Approve",
      detail: reviewEntry ? reviewEntry.detail : "All ledger entries are safe enough for approval review.",
    },
    {
      step: "03",
      title: openGate ? `Resolve ${openGate.title.toLowerCase()}` : "Clear approval gates",
      mode: openGate ? openGate.status : "Clear",
      detail: openGate ? openGate.action : "Human, privacy, eval, drift, and reward gates are aligned.",
    },
    {
      step: "04",
      title: heldAccounting ? `Hold ${heldAccounting.metric.toLowerCase()}` : "Publish benefit map",
      mode: heldAccounting ? "Hold" : "Publish",
      detail: heldAccounting ? heldAccounting.detail : "Approved local and aggregate benefits can be explained to customers.",
    },
    {
      step: "05",
      title: "Feed evaluated learning",
      mode: "Learn",
      detail: `${evaluation.score}% lab score controls whether the closed loop can improve recommendations.`,
    },
  ];
}

function recordLearningLedger() {
  const ledger = learningLedgerSnapshot();
  const detail = `Recorded ${ledger.entries.length} learning entries with ${ledger.score}% ledger score and ${ledger.openGateCount} open gates.`;
  state.ledgerActions.status = "Learning recorded";
  state.ledgerActions.recordedAt = new Date().toISOString();
  addLedgerReceipt("Learning recorded", detail);
  addAudit("Learning ledger recorded", detail);
  renderLearningLedger();
  renderAudit();
  showToast("Learning ledger recorded.");
}

function approveLearningLedger() {
  const ledger = learningLedgerSnapshot();
  const detail = `Approved ledger review for ${ledger.approvedEntries}/${ledger.entries.length} safe entries with ${ledger.openGateCount} gates still visible.`;
  state.ledgerActions.status = "Ledger approved";
  state.ledgerActions.approvedAt = new Date().toISOString();
  addLedgerReceipt("Ledger approved", detail);
  addAudit("Learning ledger approved", detail);
  render();
  showToast("Learning ledger approved.");
}

function publishLearningLedger() {
  const ledger = learningLedgerSnapshot();
  const detail = `Published network-safe learning package with +${ledger.networkLift} measured lift, ${ledger.network.readyPatternCount} aggregate patterns, and ${ledger.network.privacyScore}% privacy score.`;
  state.ledgerActions.status = "Network package published";
  state.ledgerActions.publishedAt = new Date().toISOString();
  addLedgerReceipt("Network package published", detail);
  addAudit("Network learning package published", detail);
  render();
  showToast("Network package published.");
}

function copyLearningLedgerDigest() {
  const ledger = learningLedgerSnapshot();
  state.ledgerActions.lastCopiedAt = new Date().toISOString();
  addLedgerReceipt("Ledger digest copied", "Learning ledger digest copied.");
  addAudit("Learning ledger copied", "Learning ledger digest copied.");
  renderLearningLedger();
  renderAudit();
  copyText(learningLedgerDigestText(ledger), "Learning ledger digest copied.");
}

function addLedgerReceipt(action, detail) {
  state.ledgerActions.receipts = [
    ...(state.ledgerActions.receipts ?? []),
    {
      id: `ledger-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function learningLedgerDigestText(ledger = learningLedgerSnapshot()) {
  const entryLines = ledger.entries.map((entry, index) => `${index + 1}. ${entry.status}: ${entry.title} | ${entry.scope} | ${entry.benefit} | ${entry.detail}`).join("\n");
  const benefitLines = ledger.benefits.map((benefit, index) => `${index + 1}. ${benefit.scope}: ${benefit.value} | ${benefit.mode} | ${benefit.detail}`).join("\n");
  const provenanceLines = ledger.provenance.map((item) => `${item.step}. ${item.title} | ${item.owner} | ${item.detail}`).join("\n");
  const gateLines = ledger.gates.map((gate, index) => `${index + 1}. ${gate.status}: ${gate.title} | ${gate.action}`).join("\n");
  const accountingLines = ledger.accounting.map((row, index) => `${index + 1}. ${row.metric}: ${row.value} | ${row.status} | ${row.detail}`).join("\n");
  const actionLines = ledger.actions.map((action) => `${action.step}. ${action.title} | ${action.mode} | ${action.detail}`).join("\n");
  const receiptLines = ledger.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Learning Ledger",
    `Build: ${BUILD_VERSION}`,
    `Status: ${ledger.statusLabel}`,
    `Ledger score: ${ledger.score}%`,
    `Learning entries: ${ledger.entries.length}`,
    `Network-safe lift: +${ledger.networkLift}`,
    `Open gates: ${ledger.openGateCount}`,
    "",
    "Learning entries:",
    entryLines,
    "",
    "Benefit map:",
    benefitLines,
    "",
    "Provenance chain:",
    provenanceLines,
    "",
    "Approval gates:",
    gateLines,
    "",
    "Network accounting:",
    accountingLines,
    "",
    "Ledger actions:",
    actionLines,
    "",
    "Receipts:",
    receiptLines || "No learning ledger receipts yet.",
    "",
    "Ledger rule:",
    "- Exact organization memory stays tenant-local.",
    "- Network learning can use only approved aggregate labels, proof types, freshness bands, confidence bands, and outcome classes.",
    "- Every improvement must show source, eval result, human gate, privacy scope, and measured benefit before it can influence another customer.",
  ].join("\n");
}

function renderLearningPolicyGovernor() {
  const policy = learningPolicySnapshot();

  elements.policyScore.textContent = `${policy.score}%`;
  elements.policyRuleCount.textContent = policy.rules.length;
  elements.policyStopCount.textContent = policy.openStopCount;
  elements.policySimulationLift.textContent = `+${policy.simulationLift}`;
  elements.policyStatus.textContent = policy.statusLabel;
  elements.policyDigest.textContent = learningPolicyDigestText(policy);

  elements.policyRuleList.innerHTML = "";
  policy.rules.forEach((rule) => {
    const card = document.createElement("article");
    card.className = `policy-rule-card ${rule.status !== "Active" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(rule.scope)}</span>
          <strong>${escapeHtml(rule.title)}</strong>
        </div>
        <b>${escapeHtml(rule.status)}</b>
      </header>
      <p>${escapeHtml(rule.detail)}</p>
      <footer>
        <span>${escapeHtml(rule.owner)}</span>
        <span>${escapeHtml(rule.proof)}</span>
      </footer>
    `;
    elements.policyRuleList.append(card);
  });

  elements.policyRoleList.innerHTML = "";
  policy.roles.forEach((role) => {
    const card = document.createElement("article");
    card.className = `policy-role-card ${role.status === "Needs backup" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(role.scope)}</span>
          <strong>${escapeHtml(role.role)}</strong>
        </div>
        <b>${escapeHtml(role.status)}</b>
      </header>
      <p>${escapeHtml(role.detail)}</p>
      <footer>
        <span>${escapeHtml(role.owner)}</span>
        <span>${escapeHtml(role.authority)}</span>
      </footer>
    `;
    elements.policyRoleList.append(card);
  });

  elements.policyStopList.innerHTML = "";
  policy.stops.forEach((stop) => {
    const card = document.createElement("article");
    card.className = `policy-stop-card ${stop.status !== "Clear" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <strong>${escapeHtml(stop.title)}</strong>
        <b>${escapeHtml(stop.status)}</b>
      </header>
      <p>${escapeHtml(stop.detail)}</p>
      <footer>
        <span>${escapeHtml(stop.threshold)}</span>
        <span>${escapeHtml(stop.action)}</span>
      </footer>
    `;
    elements.policyStopList.append(card);
  });

  elements.policySimulationList.innerHTML = "";
  policy.simulations.forEach((simulation) => {
    const card = document.createElement("article");
    card.className = `policy-simulation-card ${simulation.status === "Gated" || simulation.status === "Blocked" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(simulation.policy)}</span>
          <strong>${escapeHtml(simulation.result)}</strong>
        </div>
        <b>+${simulation.lift}</b>
      </header>
      <p>${escapeHtml(simulation.detail)}</p>
      <footer>
        <span>${escapeHtml(simulation.status)}</span>
        <span>${escapeHtml(simulation.tradeoff)}</span>
      </footer>
    `;
    elements.policySimulationList.append(card);
  });

  elements.policyExceptionList.innerHTML = "";
  policy.exceptions.forEach((exception) => {
    const card = document.createElement("article");
    card.className = `policy-exception-card ${exception.status !== "Available" ? "is-risk" : ""}`;
    card.innerHTML = `
      <header>
        <div>
          <span class="label">${escapeHtml(exception.owner)}</span>
          <strong>${escapeHtml(exception.title)}</strong>
        </div>
        <b>${escapeHtml(exception.status)}</b>
      </header>
      <p>${escapeHtml(exception.detail)}</p>
      <span>${escapeHtml(exception.safeguard)}</span>
    `;
    elements.policyExceptionList.append(card);
  });

  elements.policyActionList.innerHTML = "";
  policy.actions.forEach((action) => {
    const card = document.createElement("article");
    card.className = "policy-action-card";
    card.innerHTML = `
      <span>${escapeHtml(action.step)}</span>
      <div>
        <strong>${escapeHtml(action.title)}</strong>
        <p>${escapeHtml(action.detail)}</p>
      </div>
      <b>${escapeHtml(action.mode)}</b>
    `;
    elements.policyActionList.append(card);
  });

  elements.policyReceiptList.innerHTML = "";
  if (policy.receipts.length === 0) {
    elements.policyReceiptList.append(emptyState("No learning policy receipts yet"));
  }
  policy.receipts.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "policy-receipt-card";
    card.innerHTML = `
      <strong>${escapeHtml(receipt.action)}</strong>
      <p>${escapeHtml(receipt.detail)}</p>
      <span>${formatAuditTime(receipt.at)}</span>
    `;
    elements.policyReceiptList.append(card);
  });
}

function learningPolicySnapshot() {
  const ledger = learningLedgerSnapshot();
  const evaluation = ledger.evaluation;
  const reinforcement = ledger.reinforcement;
  const network = ledger.network;
  const outcomes = ledger.outcomes;
  const graph = ledger.graph;
  const orchestrator = trustOrchestratorSnapshot();
  const connectors = connectorSnapshot();
  const routing = ownerRoutingSnapshot();
  const simulator = policySimulatorSnapshot();
  const highDrift = graph.drift.some((item) => item.severity === "High");
  const rules = learningPolicyRules({ ledger, evaluation, reinforcement, network, graph, connectors, highDrift });
  const roles = learningPolicyRoles({ routing, evaluation, network, ledger });
  const stops = learningPolicyStops({ ledger, evaluation, network, graph, connectors, routing, highDrift });
  const openStopCount = stops.filter((stop) => stop.status !== "Clear").length;
  const simulations = learningPolicySimulations({ ledger, evaluation, reinforcement, network, outcomes, graph, simulator, openStopCount, highDrift });
  const exceptions = learningPolicyExceptions({ ledger, evaluation, network, connectors, highDrift });
  const actions = learningPolicyActions({ rules, roles, stops, simulations, exceptions, orchestrator });
  const approvedRoles = roles.filter((role) => role.status !== "Needs backup").length;
  const simulationLift = Math.max(0, ...simulations.map((simulation) => simulation.lift));
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        ledger.score * 0.28
          + network.privacyScore * 0.22
          + evaluation.score * 0.18
          + Math.max(0, 100 - openStopCount * 16) * 0.18
          + Math.min(100, approvedRoles * 20) * 0.14,
      ),
    ),
  );
  const statusLabel = state.policyActions.status === "Draft" ? "Ready to govern" : state.policyActions.status;

  return {
    score,
    statusLabel,
    rules,
    roles,
    stops,
    simulations,
    exceptions,
    actions,
    openStopCount,
    simulationLift,
    receipts: state.policyActions.receipts.slice(-8).reverse(),
    ledger,
    evaluation,
    network,
    graph,
  };
}

function learningPolicyRules({ ledger, evaluation, reinforcement, network, graph, connectors, highDrift }) {
  const passing = evaluation.regressionCount === 0 && evaluation.passedCount === evaluation.evalSets.length;
  return [
    {
      scope: "Tenant exact",
      title: "Local answer memory may learn from approved work",
      status: ledger.approvedEntries > 0 && passing ? "Active" : "Review",
      owner: "Security",
      proof: `${ledger.approvedEntries}/${ledger.entries.length} ledger entries safe`,
      detail: "Exact answers, owners, buyer text, and source excerpts improve only the current organization.",
    },
    {
      scope: "Network aggregate",
      title: "Cross-customer learning requires privacy and drift clearance",
      status: network.privacyScore >= 90 && !highDrift && network.readyPatternCount > 0 ? "Active" : "Review",
      owner: "Legal",
      proof: `${network.privacyScore}% privacy score`,
      detail: "Only categories, proof types, freshness bands, confidence bands, and outcome labels can benefit other organizations.",
    },
    {
      scope: "Buyer quarantine",
      title: "Buyer-specific wording never leaves the tenant",
      status: "Active",
      owner: "Sales Engineering",
      proof: `${state.questions.length} buyer questions scoped`,
      detail: "Buyer names, portal text, contracts, prompts, and raw evidence stay tenant-local even when aggregate learning is enabled.",
    },
    {
      scope: "Reward tuning",
      title: "Reinforcement changes must pass evals first",
      status: passing && reinforcement.blockedCount === 0 ? "Active" : "Review",
      owner: "AI Governance",
      proof: `${evaluation.passedCount}/${evaluation.evalSets.length} evals passed`,
      detail: "Reward signals can influence future recommendations only after eval and reviewer gates stay clean.",
    },
    {
      scope: "Freshness penalty",
      title: "Stale sources can penalize confidence but cannot teach positive patterns",
      status: connectors.staleCount > 0 ? "Review" : "Active",
      owner: "Operations",
      proof: `${connectors.staleCount} stale sources`,
      detail: "Legacy or stale source use becomes a local warning signal until the source is refreshed and approved.",
    },
    {
      scope: "Graph guardrail",
      title: "High-drift graph edges stay quarantined",
      status: graph.drift.length > 0 ? "Review" : "Active",
      owner: "AI Governance",
      proof: `${graph.drift.length} drift signals`,
      detail: "Drift, benchmark movement, buyer challenges, and open gates are visible before network promotion.",
    },
  ];
}

function learningPolicyRoles({ routing, evaluation, network, ledger }) {
  return [
    {
      role: "Security Approver",
      owner: "Maya Shah",
      scope: "Local memory",
      authority: "Approve source-backed local learning",
      status: routing.openRisks <= 3 ? "Assigned" : "Needs backup",
      detail: `${routing.routed}/${state.questions.length} questions are assigned before local memory can learn safely.`,
    },
    {
      role: "Legal Approver",
      owner: "Nina Patel",
      scope: "Network promotion",
      authority: "Approve aggregate learning boundaries",
      status: network.privacyScore >= 90 ? "Assigned" : "Needs backup",
      detail: `${network.privacyScore}% privacy score controls whether aggregate labels can move outside the tenant.`,
    },
    {
      role: "AI Governance Reviewer",
      owner: "Omar Khan",
      scope: "Reward policy",
      authority: "Approve eval, reward, and drift gates",
      status: evaluation.calibrationScore >= 82 ? "Assigned" : "Needs backup",
      detail: `${evaluation.calibrationScore}% reviewer calibration is used before reward tuning changes recommendations.`,
    },
    {
      role: "Sales Engineering Reviewer",
      owner: workspaceAccount.currentRole,
      scope: "Buyer handoff",
      authority: "Approve portal-ready response language",
      status: ledger.openGateCount <= 2 ? "Assigned" : "Needs backup",
      detail: `${ledger.openGateCount} learning gates remain visible before buyer-facing language can ship.`,
    },
  ];
}

function learningPolicyStops({ ledger, evaluation, network, graph, connectors, routing, highDrift }) {
  return [
    {
      title: "Privacy threshold",
      threshold: "Network learning requires 90%+ privacy score",
      status: network.privacyScore >= 90 ? "Clear" : "Stop",
      action: "Hold network promotion",
      detail: `${network.privacyScore}% privacy score is currently measured across aggregate pattern controls.`,
    },
    {
      title: "Evaluation regression",
      threshold: "No active regression watches",
      status: evaluation.regressionCount === 0 ? "Clear" : "Stop",
      action: "Run eval repair",
      detail: `${evaluation.regressionCount} regression watches can block reward changes.`,
    },
    {
      title: "Graph drift",
      threshold: "No high-severity drift before promotion",
      status: highDrift ? "Stop" : graph.drift.length > 0 ? "Watch" : "Clear",
      action: "Keep pattern local",
      detail: `${graph.drift.length} graph drift signals are visible before network use.`,
    },
    {
      title: "Source freshness",
      threshold: "No stale approved source used as positive signal",
      status: connectors.staleCount > 0 ? "Watch" : "Clear",
      action: "Refresh source or penalize confidence",
      detail: `${connectors.staleCount} stale connector-backed sources are watched by policy.`,
    },
    {
      title: "Reviewer calibration",
      threshold: "Reviewer agreement must stay above 82%",
      status: evaluation.calibrationScore >= 82 ? "Clear" : "Watch",
      action: "Route disagreement to AI governance",
      detail: `${evaluation.calibrationScore}% calibration controls whether human feedback can become a reward signal.`,
    },
    {
      title: "Open gate backlog",
      threshold: "No more than two open learning gates",
      status: ledger.openGateCount <= 2 && routing.openRisks <= 3 ? "Clear" : "Watch",
      action: "Resolve owners before approval",
      detail: `${ledger.openGateCount} ledger gates and ${routing.openRisks} open risks remain in the workspace.`,
    },
  ];
}

function learningPolicySimulations({ ledger, evaluation, reinforcement, network, outcomes, graph, simulator, openStopCount, highDrift }) {
  return [
    {
      policy: "Strict customer policy",
      result: "Local-only learning",
      lift: Math.max(1, evaluation.passedCount - openStopCount),
      status: "Ready",
      tradeoff: "Highest control",
      detail: "Only exact tenant memory learns until every network, drift, and reviewer gate is clear.",
    },
    {
      policy: "Balanced learning policy",
      result: "Tenant plus aggregate labels",
      lift: Math.max(0, ledger.networkLift - openStopCount),
      status: openStopCount <= 2 ? "Ready" : "Gated",
      tradeoff: "Best default",
      detail: "Local memory learns immediately while network learning waits for privacy, eval, and drift clearance.",
    },
    {
      policy: "Growth learning policy",
      result: "Faster recommendations",
      lift: Math.max(0, reinforcement.networkLift + outcomes.shareablePatterns - graph.drift.length),
      status: openStopCount === 0 ? "Ready" : "Gated",
      tradeoff: "More review pressure",
      detail: "Uses accepted answers, buyer outcomes, and aggregate patterns after the policy stops are cleared.",
    },
    {
      policy: "Network publish policy",
      result: "Cross-customer benefit",
      lift: network.privacyScore >= 90 && !highDrift ? Math.max(0, ledger.networkLift + network.readyPatternCount) : 0,
      status: network.privacyScore >= 90 && !highDrift ? "Ready" : "Blocked",
      tradeoff: "Requires legal approval",
      detail: `${network.readyPatternCount}/${network.patterns.length} aggregate patterns and ${simulator.blockedCount} simulated blocks inform the publish decision.`,
    },
  ];
}

function learningPolicyExceptions({ ledger, evaluation, network, connectors, highDrift }) {
  return [
    {
      title: "Deadline override",
      owner: "Sales Engineering",
      status: ledger.openGateCount <= 2 ? "Available" : "Review",
      detail: "A buyer deadline can allow a local answer workflow to continue, but it cannot relax evidence or network boundaries.",
      safeguard: "Requires owner receipt and buyer-safe fallback text.",
    },
    {
      title: "Legacy evidence reuse",
      owner: "Security",
      status: connectors.staleCount > 0 ? "Blocked" : "Available",
      detail: "Stale source reuse is blocked from positive learning and can only create a local risk penalty.",
      safeguard: "Refresh or replace the source before promotion.",
    },
    {
      title: "Network promotion exception",
      owner: "Legal",
      status: network.privacyScore >= 90 && !highDrift ? "Available" : "Blocked",
      detail: "Aggregate promotion can be considered only when privacy, drift, and human gates all pass.",
      safeguard: "No raw answers, evidence, prompts, contracts, buyer names, or customer names.",
    },
    {
      title: "Reviewer disagreement",
      owner: "AI Governance",
      status: evaluation.calibrationScore >= 82 ? "Available" : "Review",
      detail: "Low agreement pauses reward tuning until the roles converge on the safe answer standard.",
      safeguard: "Route disagreement to calibration before the loop learns.",
    },
  ];
}

function learningPolicyActions({ rules, roles, stops, simulations, exceptions, orchestrator }) {
  const reviewRule = rules.find((rule) => rule.status !== "Active");
  const stop = stops.find((item) => item.status !== "Clear");
  const gatedSimulation = simulations.find((item) => item.status === "Gated" || item.status === "Blocked");
  const exception = exceptions.find((item) => item.status !== "Available");
  return [
    {
      step: "01",
      title: "Save customer learning policy",
      mode: "Policy",
      detail: `${rules.length} rules define what may learn locally, what may aggregate, and what must remain quarantined.`,
    },
    {
      step: "02",
      title: reviewRule ? `Review ${reviewRule.title.toLowerCase()}` : "Approve active rules",
      mode: reviewRule ? "Review" : "Clear",
      detail: reviewRule ? reviewRule.detail : `${roles.filter((role) => role.status !== "Needs backup").length}/${roles.length} approval roles are assigned.`,
    },
    {
      step: "03",
      title: stop ? `Resolve ${stop.title.toLowerCase()}` : "Run policy simulation",
      mode: stop ? stop.status : "Simulate",
      detail: stop ? stop.action : "Preview answer speed, proof quality, network lift, and customer trust before the loop changes.",
    },
    {
      step: "04",
      title: gatedSimulation ? `Hold ${gatedSimulation.policy.toLowerCase()}` : "Approve balanced policy",
      mode: gatedSimulation ? gatedSimulation.status : "Approve",
      detail: gatedSimulation ? gatedSimulation.detail : `${orchestrator.score}% orchestration score supports governed execution.`,
    },
    {
      step: "05",
      title: exception ? `Track ${exception.title.toLowerCase()}` : "Publish governance receipt",
      mode: exception ? exception.status : "Receipt",
      detail: exception ? exception.safeguard : "Customer-controlled learning policy is ready for security, legal, and AI governance review.",
    },
  ];
}

function saveLearningPolicy() {
  const policy = learningPolicySnapshot();
  const detail = `Saved ${policy.rules.length} learning policies with ${policy.score}% governor score and ${policy.openStopCount} active stop conditions.`;
  state.policyActions.status = "Policies saved";
  state.policyActions.savedAt = new Date().toISOString();
  addPolicyReceipt("Policies saved", detail);
  addAudit("Learning policies saved", detail);
  renderLearningPolicyGovernor();
  renderAudit();
  showToast("Learning policies saved.");
}

function simulateLearningPolicy() {
  const policy = learningPolicySnapshot();
  const detail = `Ran ${policy.simulations.length} policy simulations; best safe lift is +${policy.simulationLift} with ${policy.openStopCount} stop conditions visible.`;
  state.policyActions.status = "Policy simulation run";
  state.policyActions.simulatedAt = new Date().toISOString();
  addPolicyReceipt("Policy simulation run", detail);
  addAudit("Learning policy simulated", detail);
  render();
  showToast("Learning policy simulation run.");
}

function approveLearningPolicy() {
  const policy = learningPolicySnapshot();
  const detail = `Approved learning policy governor at ${policy.score}% with ${policy.rules.length} rules, ${policy.roles.length} approval roles, and ${policy.openStopCount} stop conditions tracked.`;
  state.policyActions.status = "Policy approved";
  state.policyActions.approvedAt = new Date().toISOString();
  addPolicyReceipt("Policy approved", detail);
  addAudit("Learning policy approved", detail);
  render();
  showToast("Learning policy approved.");
}

function copyLearningPolicyDigest() {
  const policy = learningPolicySnapshot();
  state.policyActions.lastCopiedAt = new Date().toISOString();
  addPolicyReceipt("Policy digest copied", "Learning policy governor digest copied.");
  addAudit("Learning policy copied", "Learning policy governor digest copied.");
  renderLearningPolicyGovernor();
  renderAudit();
  copyText(learningPolicyDigestText(policy), "Learning policy digest copied.");
}

function addPolicyReceipt(action, detail) {
  state.policyActions.receipts = [
    ...(state.policyActions.receipts ?? []),
    {
      id: `policy-receipt-${Date.now()}`,
      action,
      detail,
      at: new Date().toISOString(),
    },
  ].slice(-12);
  schedulePersist();
}

function learningPolicyDigestText(policy = learningPolicySnapshot()) {
  const ruleLines = policy.rules.map((rule, index) => `${index + 1}. ${rule.status}: ${rule.title} | ${rule.scope} | ${rule.proof} | ${rule.detail}`).join("\n");
  const roleLines = policy.roles.map((role, index) => `${index + 1}. ${role.status}: ${role.role} | ${role.owner} | ${role.authority}`).join("\n");
  const stopLines = policy.stops.map((stop, index) => `${index + 1}. ${stop.status}: ${stop.title} | ${stop.threshold} | ${stop.action}`).join("\n");
  const simulationLines = policy.simulations.map((simulation, index) => `${index + 1}. ${simulation.status}: ${simulation.policy} | +${simulation.lift} | ${simulation.tradeoff} | ${simulation.detail}`).join("\n");
  const exceptionLines = policy.exceptions.map((exception, index) => `${index + 1}. ${exception.status}: ${exception.title} | ${exception.owner} | ${exception.safeguard}`).join("\n");
  const actionLines = policy.actions.map((action) => `${action.step}. ${action.title} | ${action.mode} | ${action.detail}`).join("\n");
  const receiptLines = policy.receipts.map((receipt, index) => `${index + 1}. ${receipt.action} - ${formatAuditTime(receipt.at)} - ${receipt.detail}`).join("\n");

  return [
    "AnswerSeal Learning Policy Governor",
    `Build: ${BUILD_VERSION}`,
    `Status: ${policy.statusLabel}`,
    `Governor score: ${policy.score}%`,
    `Policy rules: ${policy.rules.length}`,
    `Active stop conditions: ${policy.openStopCount}`,
    `Best simulated lift: +${policy.simulationLift}`,
    "",
    "Learning policies:",
    ruleLines,
    "",
    "Approval roles:",
    roleLines,
    "",
    "Stop conditions:",
    stopLines,
    "",
    "Policy simulations:",
    simulationLines,
    "",
    "Exceptions:",
    exceptionLines,
    "",
    "Policy actions:",
    actionLines,
    "",
    "Receipts:",
    receiptLines || "No learning policy receipts yet.",
    "",
    "Governor rule:",
    "- The customer defines what the loop may learn.",
    "- Tenant exact memory, buyer-specific text, raw evidence, prompts, contracts, buyer names, and customer names never become cross-customer learning.",
    "- Cross-customer benefit requires aggregate-only data, privacy threshold, eval pass, drift clearance, role approval, and a receipt.",
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
    const needsOwner = questions.filter((question) => ["Needs owner", "Owner review", "Simulation queued"].includes(question.routeStatus)).length;
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
  renderAutonomousRuns();
  renderTrustLaunchpad();
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
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
    "Run Status",
    "Run Score",
    "Run Gates",
    "Run Next Action",
    "Launch Status",
    "Launch Score",
    "Learning Signals",
    "Network Learning",
    "Network Status",
    "Network Privacy",
    "Network Patterns",
    "Network Rewards",
    "Coach Status",
    "Coach Score",
    "Coach Proofs",
    "Coach Rewrites",
    "Coach Routes",
    "Agent Status",
    "Agent Control",
    "Agent Tasks",
    "Agent Refreshes",
    "Agent Receipts",
    "Outcome Status",
    "Outcome Memory",
    "Outcome Events",
    "Outcome Rewards",
    "Outcome Patterns",
    "Playbook Status",
    "Playbook Score",
    "Playbooks",
    "Playbook Gates",
    "Playbook Receipts",
    "Benchmark Status",
    "Benchmark Score",
    "Benchmark Bands",
    "Benchmark Friction",
    "Benchmark Receipts",
    "Orchestrator Status",
    "Orchestrator Score",
    "Orchestrator Priorities",
    "Orchestrator Gates",
    "Orchestrator Receipts",
    "Graph Status",
    "Graph Score",
    "Graph Nodes",
    "Graph Edges",
    "Graph Drift",
    "Graph Promotions",
    "Graph Receipts",
    "Simulator Status",
    "Simulator Score",
    "Simulator Scenarios",
    "Simulator Best Lift",
    "Simulator Blocks",
    "Simulator Receipts",
    "Reinforcement Status",
    "Reinforcement Score",
    "Prediction Replays",
    "Reward Signals",
    "Network-Safe Lift",
    "Learning Boundary Blocks",
    "Reinforcement Receipts",
    "Evaluation Status",
    "Evaluation Score",
    "Evaluation Passes",
    "Reward Tests",
    "Regression Watch",
    "Reviewer Calibration",
    "Evaluation Receipts",
    "Learning Ledger Status",
    "Ledger Score",
    "Ledger Entries",
    "Ledger Network Lift",
    "Ledger Open Gates",
    "Ledger Receipts",
    "Policy Status",
    "Policy Score",
    "Policy Rules",
    "Policy Stop Conditions",
    "Policy Simulations",
    "Policy Receipts",
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
    const run = autonomousRunSnapshot();
    const launch = trustLaunchSnapshot();
    const network = learningNetworkSnapshot();
    const coach = adaptiveCoachSnapshot();
    const agent = governedAgentSnapshot();
    const outcomes = trustOutcomeMemorySnapshot();
    const playbooks = adaptivePlaybookSnapshot();
    const benchmarks = trustBenchmarkSnapshot();
    const orchestrator = trustOrchestratorSnapshot();
    const graph = federatedGraphSnapshot();
    const simulator = policySimulatorSnapshot();
    const reinforcement = reinforcementControlSnapshot();
    const evaluation = evaluationLabSnapshot();
    const ledger = learningLedgerSnapshot();
    const policy = learningPolicySnapshot();
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
      run.status,
      `${run.score}%`,
      run.openGateCount,
      run.nextActions[0]?.title ?? "No next action",
      launch.statusLabel,
      `${launch.score}%`,
      launch.signalCount,
      launch.learningRows.filter((row) => row.scope === "Network").length,
      network.statusLabel,
      `${network.privacyScore}%`,
      `${network.readyPatternCount}/${network.patterns.length}`,
      network.rewards.length,
      coach.statusLabel,
      `${coach.score}%`,
      coach.proofs.length,
      coach.rewrites.length,
      coach.routes.length,
      agent.statusLabel,
      `${agent.controlScore}%`,
      agent.tasks.length,
      agent.refreshes.length,
      agent.receipts.length,
      outcomes.statusLabel,
      `${outcomes.score}%`,
      outcomes.events.length,
      outcomes.rewards.length,
      `${outcomes.shareablePatterns}/${outcomes.patterns.length}`,
      playbooks.statusLabel,
      `${playbooks.score}%`,
      playbooks.playbooks.length,
      playbooks.gates.length,
      playbooks.receipts.length,
      benchmarks.statusLabel,
      `${benchmarks.score}%`,
      `${benchmarks.aheadCount}/${benchmarks.bands.length}`,
      benchmarks.frictionRows.length,
      benchmarks.receipts.length,
      orchestrator.statusLabel,
      `${orchestrator.score}%`,
      orchestrator.priorities.length,
      orchestrator.gates.filter((gate) => gate.status !== "Approved").length,
      orchestrator.receipts.length,
      graph.statusLabel,
      `${graph.score}%`,
      graph.nodes.length,
      graph.edges.length,
      graph.drift.length,
      graph.promotions.filter((promotion) => promotion.status === "Eligible").length,
      graph.receipts.length,
      simulator.statusLabel,
      `${simulator.score}%`,
      simulator.scenarios.length,
      `+${simulator.bestLift}`,
      simulator.blockedCount,
      simulator.receipts.length,
      reinforcement.statusLabel,
      `${reinforcement.score}%`,
      reinforcement.replays.length,
      reinforcement.rewards.length,
      `+${reinforcement.networkLift}`,
      reinforcement.blockedCount,
      reinforcement.receipts.length,
      evaluation.statusLabel,
      `${evaluation.score}%`,
      `${evaluation.passedCount}/${evaluation.evalSets.length}`,
      evaluation.rewardTests.length,
      evaluation.regressionCount,
      `${evaluation.calibrationScore}%`,
      evaluation.receipts.length,
      ledger.statusLabel,
      `${ledger.score}%`,
      ledger.entries.length,
      `+${ledger.networkLift}`,
      ledger.openGateCount,
      ledger.receipts.length,
      policy.statusLabel,
      `${policy.score}%`,
      policy.rules.length,
      policy.openStopCount,
      policy.simulations.length,
      policy.receipts.length,
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
  const run = autonomousRunSnapshot();
  const launch = trustLaunchSnapshot();
  const network = learningNetworkSnapshot();
  const coach = adaptiveCoachSnapshot();
  const agent = governedAgentSnapshot();
  const outcomes = trustOutcomeMemorySnapshot();
  const playbooks = adaptivePlaybookSnapshot();
  const benchmarks = trustBenchmarkSnapshot();
  const orchestrator = trustOrchestratorSnapshot();
  const graph = federatedGraphSnapshot();
  const simulator = policySimulatorSnapshot();
  const reinforcement = reinforcementControlSnapshot();
  const evaluation = evaluationLabSnapshot();
  const ledger = learningLedgerSnapshot();
  const policy = learningPolicySnapshot();
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
        <h1>AnswerSeal Review Pack v30</h1>
        <p>Exported ${escapeHtml(formatDate(new Date()))}</p>
        <h2>Private Workspace</h2>
        <p>${escapeHtml(workspaceAccount.company)} | ${escapeHtml(workspaceAccount.workspaceId)} | ${escapeHtml(workspaceAccount.plan)}</p>
        <p>Handoff readiness: ${handoff.ready}% | Owner routing: ${routing.routed}/${state.questions.length} assigned | Open risks: ${routing.openRisks}</p>
        <h2>Trust Center Launchpad</h2>
        <p>Status: ${escapeHtml(launch.statusLabel)} | Launch score: ${launch.score}% | Ready packets: ${launch.packetCount}/${launch.packets.length} | Learning signals: ${launch.signalCount}</p>
        <table>
          <thead>
            <tr>
              <th>Packet</th>
              <th>Status</th>
              <th>Visibility</th>
              <th>Count</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${launch.packets
              .map(
                (packet) => `
                  <tr>
                    <td>${escapeHtml(packet.title)}</td>
                    <td class="${packet.ready ? "ok" : "risk"}">${escapeHtml(packet.ready ? "Ready" : "Gated")}</td>
                    <td>${escapeHtml(packet.visibility)}</td>
                    <td>${packet.count}</td>
                    <td>${escapeHtml(packet.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Learning Loop</h2>
        <table>
          <thead>
            <tr>
              <th>Scope</th>
              <th>Recommendation</th>
              <th>Impact</th>
              <th>Privacy Guardrail</th>
            </tr>
          </thead>
          <tbody>
            ${launch.learningRows
              .map(
                (row) => `
                  <tr>
                    <td>${escapeHtml(row.scope)}</td>
                    <td>${escapeHtml(row.title)}<br />${escapeHtml(row.detail)}</td>
                    <td>${escapeHtml(String(row.impact))}</td>
                    <td>${escapeHtml(row.guardrail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Privacy-Safe Learning Network</h2>
        <p>Status: ${escapeHtml(network.statusLabel)} | Privacy score: ${network.privacyScore}% | Shareable patterns: ${network.readyPatternCount}/${network.patterns.length} | Reward signals: ${network.rewards.length}</p>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Status</th>
              <th>Signal</th>
              <th>Output</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${network.patterns
              .map(
                (pattern) => `
                  <tr>
                    <td>${escapeHtml(pattern.title)}</td>
                    <td class="${pattern.ready ? "ok" : "risk"}">${escapeHtml(pattern.ready ? "Shareable" : "Local only")}</td>
                    <td>${escapeHtml(pattern.signal)}</td>
                    <td>${escapeHtml(pattern.output)}</td>
                    <td>${escapeHtml(pattern.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Network Guardrails</h2>
        <table>
          <thead>
            <tr>
              <th>Guardrail</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${network.guardrails
              .map(
                (guardrail) => `
                  <tr>
                    <td>${escapeHtml(guardrail.title)}</td>
                    <td>${escapeHtml(guardrail.status)}</td>
                    <td>${escapeHtml(guardrail.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Network Reward Signals</h2>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Value</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${network.rewards
              .map(
                (reward) => `
                  <tr>
                    <td>${escapeHtml(reward.source)}</td>
                    <td>${escapeHtml(reward.value)}</td>
                    <td>${escapeHtml(reward.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Network Digest</h2>
        <pre>${escapeHtml(networkDigestText(network))}</pre>
        <h2>Adaptive Proof Coach</h2>
        <p>Status: ${escapeHtml(coach.statusLabel)} | Coach score: ${coach.score}% | Proof recommendations: ${coach.proofs.length} | Rewrite suggestions: ${coach.rewrites.length} | Reviewer routes: ${coach.routes.length}</p>
        <table>
          <thead>
            <tr>
              <th>Recommendation</th>
              <th>Priority</th>
              <th>Owner</th>
              <th>Action</th>
              <th>Guardrail</th>
            </tr>
          </thead>
          <tbody>
            ${coach.proofs
              .map(
                (proof) => `
                  <tr>
                    <td>${escapeHtml(proof.title)}<br />${escapeHtml(proof.detail)}</td>
                    <td>${escapeHtml(proof.priority)}</td>
                    <td>${escapeHtml(proof.owner)}</td>
                    <td>${escapeHtml(proof.action)}</td>
                    <td>${escapeHtml(proof.guardrail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Coach Rewrite Guidance</h2>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Guidance</th>
              <th>Safer Draft</th>
            </tr>
          </thead>
          <tbody>
            ${coach.rewrites
              .map(
                (rewrite) => `
                  <tr>
                    <td>${escapeHtml(rewrite.question)}</td>
                    <td>${escapeHtml(rewrite.title)}</td>
                    <td>${escapeHtml(rewrite.after)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Coach Outcome Tuning</h2>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Weight</th>
              <th>Tuning</th>
            </tr>
          </thead>
          <tbody>
            ${coach.outcomes
              .map(
                (outcome) => `
                  <tr>
                    <td>${escapeHtml(outcome.signal)}</td>
                    <td>${escapeHtml(outcome.weight)}</td>
                    <td>${escapeHtml(outcome.tuning)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Coach Digest</h2>
        <pre>${escapeHtml(coachDigestText(coach))}</pre>
        <h2>Governed Evidence Agent</h2>
        <p>Status: ${escapeHtml(agent.statusLabel)} | Control score: ${agent.controlScore}% | Governed tasks: ${agent.tasks.length} | Refresh queue: ${agent.refreshes.length} | Receipts: ${agent.receipts.length}</p>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Mode</th>
              <th>Owner</th>
              <th>Due</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${agent.tasks
              .map(
                (task) => `
                  <tr>
                    <td>${escapeHtml(task.title)}<br />${escapeHtml(task.detail)}</td>
                    <td class="${task.mode === "Approval required" ? "risk" : "ok"}">${escapeHtml(task.mode)}</td>
                    <td>${escapeHtml(task.owner)}</td>
                    <td>${escapeHtml(task.due)}</td>
                    <td>${escapeHtml(task.action)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Agent Permission Limits</h2>
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Permission</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${agent.limits
              .map(
                (limit) => `
                  <tr>
                    <td>${escapeHtml(limit.action)}</td>
                    <td class="${limit.permission === "Blocked" ? "risk" : "ok"}">${escapeHtml(limit.permission)}</td>
                    <td>${escapeHtml(limit.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Agent Safe Refresh Queue</h2>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            ${agent.refreshes
              .map(
                (refresh) => `
                  <tr>
                    <td>${escapeHtml(refresh.source)}</td>
                    <td class="${refresh.status === "Human review" ? "risk" : "ok"}">${escapeHtml(refresh.status)}</td>
                    <td>${escapeHtml(refresh.owner)}</td>
                    <td>${escapeHtml(refresh.reason)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Agent Digest</h2>
        <pre>${escapeHtml(agentDigestText(agent))}</pre>
        <h2>Trust Outcome Memory</h2>
        <p>Status: ${escapeHtml(outcomes.statusLabel)} | Memory score: ${outcomes.score}% | Outcome events: ${outcomes.events.length} | Reward signals: ${outcomes.rewards.length} | Shareable patterns: ${outcomes.shareablePatterns}/${outcomes.patterns.length}</p>
        <table>
          <thead>
            <tr>
              <th>Outcome</th>
              <th>Scope</th>
              <th>Signal</th>
              <th>Memory</th>
            </tr>
          </thead>
          <tbody>
            ${outcomes.events
              .map(
                (event) => `
                  <tr>
                    <td class="${event.sentiment === "Negative" ? "risk" : "ok"}">${escapeHtml(event.outcome)}<br />${escapeHtml(event.title)}</td>
                    <td>${escapeHtml(event.scope)}</td>
                    <td>${escapeHtml(event.signal)}</td>
                    <td>${escapeHtml(event.memory)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Outcome Reward Signals</h2>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Weight</th>
              <th>Learning</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            ${outcomes.rewards
              .map(
                (reward) => `
                  <tr>
                    <td>${escapeHtml(reward.signal)}</td>
                    <td>${escapeHtml(reward.weight)}</td>
                    <td>${escapeHtml(reward.learning)}</td>
                    <td>${escapeHtml(reward.apply)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Outcome Privacy Guardrails</h2>
        <table>
          <thead>
            <tr>
              <th>Guardrail</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${outcomes.guardrails
              .map(
                (guardrail) => `
                  <tr>
                    <td>${escapeHtml(guardrail.title)}</td>
                    <td class="${guardrail.status === "Blocked" ? "risk" : "ok"}">${escapeHtml(guardrail.status)}</td>
                    <td>${escapeHtml(guardrail.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Outcome Digest</h2>
        <pre>${escapeHtml(outcomeDigestText(outcomes))}</pre>
        <h2>Adaptive Trust Playbooks</h2>
        <p>Status: ${escapeHtml(playbooks.statusLabel)} | Strategy score: ${playbooks.score}% | Playbooks: ${playbooks.playbooks.length} | Human gates: ${playbooks.gates.length} | Receipts: ${playbooks.receipts.length}</p>
        <table>
          <thead>
            <tr>
              <th>Playbook</th>
              <th>Motion</th>
              <th>Buyer</th>
              <th>Confidence</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${playbooks.playbooks
              .map(
                (playbook) => `
                  <tr>
                    <td>${escapeHtml(playbook.title)}<br />${escapeHtml(playbook.trigger)}</td>
                    <td>${escapeHtml(playbook.motion)}</td>
                    <td>${escapeHtml(playbook.buyer)}</td>
                    <td>${playbook.confidence}%</td>
                    <td>${escapeHtml(playbook.action)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Playbook Proof Sequence</h2>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Owner</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${playbooks.sequence
              .map(
                (step) => `
                  <tr>
                    <td>${escapeHtml(step.step)} ${escapeHtml(step.title)}</td>
                    <td>${escapeHtml(step.owner)}</td>
                    <td>${escapeHtml(step.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Playbook Human Gates</h2>
        <table>
          <thead>
            <tr>
              <th>Gate</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${playbooks.gates
              .map(
                (gate) => `
                  <tr>
                    <td>${escapeHtml(gate.title)}</td>
                    <td class="${gate.status === "Blocked" || gate.status === "Review" ? "risk" : "ok"}">${escapeHtml(gate.status)}</td>
                    <td>${escapeHtml(gate.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Playbook Digest</h2>
        <pre>${escapeHtml(playbookDigestText(playbooks))}</pre>
        <h2>Trust Benchmark Network</h2>
        <p>Status: ${escapeHtml(benchmarks.statusLabel)} | Readiness score: ${benchmarks.score}% | At or above peer band: ${benchmarks.aheadCount}/${benchmarks.bands.length} | Friction signals: ${benchmarks.frictionRows.length} | Receipts: ${benchmarks.receipts.length}</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Local</th>
              <th>Peer Median</th>
              <th>Delta</th>
              <th>Friction</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            ${benchmarks.bands
              .map(
                (band) => `
                  <tr>
                    <td>${escapeHtml(band.category)}</td>
                    <td>${band.localScore}%</td>
                    <td>${band.peerMedian}%</td>
                    <td class="${band.status === "Behind" ? "risk" : "ok"}">${escapeHtml(band.deltaLabel)}</td>
                    <td>${escapeHtml(band.friction)}</td>
                    <td>${escapeHtml(band.recommendation)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Benchmark Friction Signals</h2>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Severity</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${benchmarks.frictionRows
              .map(
                (row) => `
                  <tr>
                    <td>${escapeHtml(row.title)}</td>
                    <td class="${row.severity === "High" ? "risk" : "ok"}">${escapeHtml(row.severity)}</td>
                    <td>${escapeHtml(row.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Benchmark Proof Investments</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Investment</th>
              <th>Impact</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${benchmarks.investments
              .map(
                (investment) => `
                  <tr>
                    <td>${escapeHtml(investment.category)}</td>
                    <td>${escapeHtml(investment.title)}</td>
                    <td>${escapeHtml(investment.impact)}</td>
                    <td>${escapeHtml(investment.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Benchmark Guardrails</h2>
        <table>
          <thead>
            <tr>
              <th>Guardrail</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${benchmarks.guardrails
              .map(
                (guardrail) => `
                  <tr>
                    <td>${escapeHtml(guardrail.title)}</td>
                    <td>${escapeHtml(guardrail.status)}</td>
                    <td>${escapeHtml(guardrail.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Benchmark Digest</h2>
        <pre>${escapeHtml(benchmarkDigestText(benchmarks))}</pre>
        <h2>Autonomous Trust Orchestrator</h2>
        <p>Status: ${escapeHtml(orchestrator.statusLabel)} | Orchestration score: ${orchestrator.score}% | Priorities: ${orchestrator.priorities.length} | Plan steps: ${orchestrator.plan.length} | Open gates: ${orchestrator.gates.filter((gate) => gate.status !== "Approved").length} | Receipts: ${orchestrator.receipts.length}</p>
        <table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Signal</th>
              <th>Owner</th>
              <th>Impact</th>
              <th>Gate</th>
            </tr>
          </thead>
          <tbody>
            ${orchestrator.priorities
              .map(
                (priority) => `
                  <tr>
                    <td>${escapeHtml(priority.title)}<br />${escapeHtml(priority.detail)}</td>
                    <td>${escapeHtml(priority.signal)}</td>
                    <td>${escapeHtml(priority.owner)}</td>
                    <td>${escapeHtml(priority.impact)}</td>
                    <td>${escapeHtml(priority.gate)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Orchestrator Governed Plan</h2>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Mode</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${orchestrator.plan
              .map(
                (step) => `
                  <tr>
                    <td>${escapeHtml(step.step)} ${escapeHtml(step.title)}</td>
                    <td>${escapeHtml(step.mode)}</td>
                    <td>${escapeHtml(step.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Orchestrator Human Gates</h2>
        <table>
          <thead>
            <tr>
              <th>Gate</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${orchestrator.gates
              .map(
                (gate) => `
                  <tr>
                    <td>${escapeHtml(gate.title)}</td>
                    <td class="${gate.status === "Blocked" || gate.status === "Review" ? "risk" : "ok"}">${escapeHtml(gate.status)}</td>
                    <td>${escapeHtml(gate.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Orchestrator Learning Boundary</h2>
        <table>
          <thead>
            <tr>
              <th>Scope</th>
              <th>Boundary</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${orchestrator.learningRows
              .map(
                (row) => `
                  <tr>
                    <td>${escapeHtml(row.scope)}</td>
                    <td>${escapeHtml(row.boundary)}</td>
                    <td>${escapeHtml(row.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Orchestrator Digest</h2>
        <pre>${escapeHtml(orchestratorDigestText(orchestrator))}</pre>
        <h2>Federated Trust Graph</h2>
        <p>Status: ${escapeHtml(graph.statusLabel)} | Graph score: ${graph.score}% | Nodes: ${graph.nodes.length} | Edges: ${graph.edges.length} | Drift alerts: ${graph.drift.length} | Eligible promotions: ${graph.promotions.filter((promotion) => promotion.status === "Eligible").length}</p>
        <table>
          <thead>
            <tr>
              <th>Node</th>
              <th>Boundary</th>
              <th>Signal</th>
              <th>Share Rule</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${graph.nodes
              .map(
                (node) => `
                  <tr>
                    <td>${escapeHtml(node.scope)}<br />${escapeHtml(node.title)}</td>
                    <td class="${node.boundary === "Private" ? "risk" : "ok"}">${escapeHtml(node.boundary)}</td>
                    <td>${escapeHtml(node.signal)}</td>
                    <td>${escapeHtml(node.share)}</td>
                    <td>${escapeHtml(node.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Graph Learning Edges</h2>
        <table>
          <thead>
            <tr>
              <th>Edge</th>
              <th>Strength</th>
              <th>Mode</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${graph.edges
              .map(
                (edge) => `
                  <tr>
                    <td>${escapeHtml(edge.source)} -> ${escapeHtml(edge.target)}</td>
                    <td>${escapeHtml(edge.strength)}</td>
                    <td>${escapeHtml(edge.mode)}</td>
                    <td>${escapeHtml(edge.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Graph Promotion Candidates</h2>
        <table>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Status</th>
              <th>Evidence</th>
              <th>Guardrail</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${graph.promotions
              .map(
                (promotion) => `
                  <tr>
                    <td>${escapeHtml(promotion.kind)}<br />${escapeHtml(promotion.title)}</td>
                    <td class="${promotion.status === "Eligible" ? "ok" : "risk"}">${escapeHtml(promotion.status)}</td>
                    <td>${escapeHtml(promotion.evidence)}</td>
                    <td>${escapeHtml(promotion.guardrail)}</td>
                    <td>${escapeHtml(promotion.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Graph Drift Quarantine</h2>
        <table>
          <thead>
            <tr>
              <th>Drift</th>
              <th>Severity</th>
              <th>Owner</th>
              <th>Action</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${graph.drift
              .map(
                (drift) => `
                  <tr>
                    <td>${escapeHtml(drift.title)}</td>
                    <td class="${drift.severity === "High" ? "risk" : "ok"}">${escapeHtml(drift.severity)}</td>
                    <td>${escapeHtml(drift.owner)}</td>
                    <td>${escapeHtml(drift.action)}</td>
                    <td>${escapeHtml(drift.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Graph Human Gates</h2>
        <table>
          <thead>
            <tr>
              <th>Gate</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${graph.gates
              .map(
                (gate) => `
                  <tr>
                    <td>${escapeHtml(gate.title)}</td>
                    <td class="${gate.status === "Blocked" || gate.status === "Review" ? "risk" : "ok"}">${escapeHtml(gate.status)}</td>
                    <td>${escapeHtml(gate.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Graph Digest</h2>
        <pre>${escapeHtml(graphDigestText(graph))}</pre>
        <h2>Trust Policy Simulator</h2>
        <p>Status: ${escapeHtml(simulator.statusLabel)} | Simulator score: ${simulator.score}% | Scenarios: ${simulator.scenarios.length} | Best lift: +${simulator.bestLift} | Blocked signals: ${simulator.blockedCount} | Receipts: ${simulator.receipts.length}</p>
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Forecast</th>
              <th>Guardrail</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${simulator.scenarios
              .map(
                (scenario) => `
                  <tr>
                    <td>${escapeHtml(scenario.type)}<br />${escapeHtml(scenario.title)}</td>
                    <td class="${scenario.status === "Blocked" ? "risk" : "ok"}">${escapeHtml(scenario.status)}</td>
                    <td>${escapeHtml(scenario.owner)}</td>
                    <td>${scenario.lift >= 0 ? "+" : ""}${scenario.lift}</td>
                    <td>${escapeHtml(scenario.guardrail)}</td>
                    <td>${escapeHtml(scenario.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Simulator Forecast Deltas</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Delta</th>
              <th>Direction</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${simulator.forecasts
              .map(
                (forecast) => `
                  <tr>
                    <td>${escapeHtml(forecast.metric)}</td>
                    <td>${escapeHtml(forecast.delta)}</td>
                    <td class="${forecast.direction === "Risk" ? "risk" : "ok"}">${escapeHtml(forecast.direction)}</td>
                    <td>${escapeHtml(forecast.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Simulator Gates</h2>
        <table>
          <thead>
            <tr>
              <th>Gate</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${simulator.gates
              .map(
                (gate) => `
                  <tr>
                    <td>${escapeHtml(gate.title)}</td>
                    <td class="${gate.status === "Blocked" || gate.status === "Review" ? "risk" : "ok"}">${escapeHtml(gate.status)}</td>
                    <td>${escapeHtml(gate.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Simulator Recommended Actions</h2>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Mode</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${simulator.actions
              .map(
                (action) => `
                  <tr>
                    <td>${escapeHtml(action.step)} ${escapeHtml(action.title)}</td>
                    <td>${escapeHtml(action.mode)}</td>
                    <td>${escapeHtml(action.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Simulator Digest</h2>
        <pre>${escapeHtml(simulatorDigestText(simulator))}</pre>
        <h2>Reinforcement Control Room</h2>
        <p>Status: ${escapeHtml(reinforcement.statusLabel)} | Reinforcement score: ${reinforcement.score}% | Prediction replays: ${reinforcement.replays.length} | Reward signals: ${reinforcement.rewards.length} | Network-safe lift: +${reinforcement.networkLift} | Boundary blocks: ${reinforcement.blockedCount}</p>
        <table>
          <thead>
            <tr>
              <th>Replay</th>
              <th>Accuracy</th>
              <th>Prediction</th>
              <th>Outcome</th>
              <th>Adjustment</th>
              <th>Guardrail</th>
            </tr>
          </thead>
          <tbody>
            ${reinforcement.replays
              .map(
                (replay) => `
                  <tr>
                    <td>${escapeHtml(replay.source)}<br />${escapeHtml(replay.title)}</td>
                    <td class="${replay.accuracy === "Low" ? "risk" : "ok"}">${escapeHtml(replay.accuracy)}</td>
                    <td>${escapeHtml(replay.predicted)}</td>
                    <td>${escapeHtml(replay.actual)}</td>
                    <td>${escapeHtml(replay.adjustment)}</td>
                    <td>${escapeHtml(replay.guardrail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Reinforcement Reward Signals</h2>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Weight</th>
              <th>Mode</th>
              <th>Learning</th>
              <th>Guardrail</th>
            </tr>
          </thead>
          <tbody>
            ${reinforcement.rewards
              .map(
                (reward) => `
                  <tr>
                    <td>${escapeHtml(reward.signal)}</td>
                    <td class="${String(reward.weight).startsWith("-") ? "risk" : "ok"}">${escapeHtml(reward.weight)}</td>
                    <td>${escapeHtml(reward.mode)}</td>
                    <td>${escapeHtml(reward.learning)}</td>
                    <td>${escapeHtml(reward.guardrail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Reinforcement Learning Boundaries</h2>
        <table>
          <thead>
            <tr>
              <th>Boundary</th>
              <th>Status</th>
              <th>Allowed Learning</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${reinforcement.boundaries
              .map(
                (boundary) => `
                  <tr>
                    <td>${escapeHtml(boundary.title)}</td>
                    <td class="${boundary.status === "Blocked" || boundary.status === "Review" ? "risk" : "ok"}">${escapeHtml(boundary.status)}</td>
                    <td>${escapeHtml(boundary.allowed)}</td>
                    <td>${escapeHtml(boundary.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Reinforcement Digest</h2>
        <pre>${escapeHtml(reinforcementDigestText(reinforcement))}</pre>
        <h2>Evaluation Lab</h2>
        <p>Status: ${escapeHtml(evaluation.statusLabel)} | Lab score: ${evaluation.score}% | Passing evals: ${evaluation.passedCount}/${evaluation.evalSets.length} | Regression watches: ${evaluation.regressionCount} | Reviewer calibration: ${evaluation.calibrationScore}%</p>
        <table>
          <thead>
            <tr>
              <th>Eval</th>
              <th>Status</th>
              <th>Expected</th>
              <th>Actual</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${evaluation.evalSets
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.area)}<br />${escapeHtml(item.title)}</td>
                    <td class="${item.status === "Pass" ? "ok" : "risk"}">${escapeHtml(item.status)}</td>
                    <td>${escapeHtml(item.expected)}</td>
                    <td>${escapeHtml(item.actual)}</td>
                    <td>${escapeHtml(item.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evaluation Reward Tests</h2>
        <table>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Score</th>
              <th>Result</th>
              <th>Detail</th>
              <th>Guardrail</th>
            </tr>
          </thead>
          <tbody>
            ${evaluation.rewardTests
              .map(
                (test) => `
                  <tr>
                    <td>${escapeHtml(test.variant)}<br />${escapeHtml(test.title)}</td>
                    <td>${escapeHtml(test.score)}</td>
                    <td class="${test.result === "Risk" ? "risk" : "ok"}">${escapeHtml(test.result)}</td>
                    <td>${escapeHtml(test.detail)}</td>
                    <td>${escapeHtml(test.guardrail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evaluation Regression Watch</h2>
        <table>
          <thead>
            <tr>
              <th>Regression</th>
              <th>Status</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${evaluation.regressions
              .map(
                (regression) => `
                  <tr>
                    <td>${escapeHtml(regression.title)}</td>
                    <td class="${regression.status === "Pass" ? "ok" : "risk"}">${escapeHtml(regression.status)}</td>
                    <td>${escapeHtml(regression.detail)}</td>
                    <td>${escapeHtml(regression.action)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Reviewer Calibration</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Topic</th>
              <th>Agreement</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${evaluation.calibrations
              .map(
                (calibration) => `
                  <tr>
                    <td>${escapeHtml(calibration.role)}</td>
                    <td>${escapeHtml(calibration.topic)}</td>
                    <td class="${calibration.agreement < 80 ? "risk" : "ok"}">${calibration.agreement}%</td>
                    <td>${escapeHtml(calibration.action)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Evaluation Digest</h2>
        <pre>${escapeHtml(evaluationDigestText(evaluation))}</pre>
        <h2>Learning Ledger</h2>
        <p>Status: ${escapeHtml(ledger.statusLabel)} | Ledger score: ${ledger.score}% | Entries: ${ledger.entries.length} | Network-safe lift: +${ledger.networkLift} | Open gates: ${ledger.openGateCount}</p>
        <table>
          <thead>
            <tr>
              <th>Entry</th>
              <th>Scope</th>
              <th>Status</th>
              <th>Source</th>
              <th>Benefit</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${ledger.entries
              .map(
                (entry) => `
                  <tr>
                    <td>${escapeHtml(entry.title)}</td>
                    <td>${escapeHtml(entry.scope)}</td>
                    <td class="${entry.status === "Blocked" || entry.status === "Review" ? "risk" : "ok"}">${escapeHtml(entry.status)}</td>
                    <td>${escapeHtml(entry.source)}</td>
                    <td>${escapeHtml(entry.benefit)}</td>
                    <td>${escapeHtml(entry.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Learning Benefit Map</h2>
        <table>
          <thead>
            <tr>
              <th>Scope</th>
              <th>Value</th>
              <th>Mode</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${ledger.benefits
              .map(
                (benefit) => `
                  <tr>
                    <td>${escapeHtml(benefit.scope)}</td>
                    <td>${escapeHtml(benefit.value)}</td>
                    <td class="${benefit.mode === "Blocked" || benefit.mode === "Held" ? "risk" : "ok"}">${escapeHtml(benefit.mode)}</td>
                    <td>${escapeHtml(benefit.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Learning Provenance Chain</h2>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Owner</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${ledger.provenance
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.step)} ${escapeHtml(item.title)}</td>
                    <td>${escapeHtml(item.owner)}</td>
                    <td>${escapeHtml(item.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Learning Approval Gates</h2>
        <table>
          <thead>
            <tr>
              <th>Gate</th>
              <th>Status</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${ledger.gates
              .map(
                (gate) => `
                  <tr>
                    <td>${escapeHtml(gate.title)}</td>
                    <td class="${gate.status === "Approved" ? "ok" : "risk"}">${escapeHtml(gate.status)}</td>
                    <td>${escapeHtml(gate.detail)}</td>
                    <td>${escapeHtml(gate.action)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Learning Ledger Digest</h2>
        <pre>${escapeHtml(learningLedgerDigestText(ledger))}</pre>
        <h2>Learning Policy Governor</h2>
        <p>Status: ${escapeHtml(policy.statusLabel)} | Governor score: ${policy.score}% | Policy rules: ${policy.rules.length} | Stop conditions: ${policy.openStopCount} | Best simulated lift: +${policy.simulationLift}</p>
        <table>
          <thead>
            <tr>
              <th>Rule</th>
              <th>Scope</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Proof</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${policy.rules
              .map(
                (rule) => `
                  <tr>
                    <td>${escapeHtml(rule.title)}</td>
                    <td>${escapeHtml(rule.scope)}</td>
                    <td class="${rule.status === "Active" ? "ok" : "risk"}">${escapeHtml(rule.status)}</td>
                    <td>${escapeHtml(rule.owner)}</td>
                    <td>${escapeHtml(rule.proof)}</td>
                    <td>${escapeHtml(rule.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Policy Approval Roles</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Owner</th>
              <th>Scope</th>
              <th>Authority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${policy.roles
              .map(
                (role) => `
                  <tr>
                    <td>${escapeHtml(role.role)}</td>
                    <td>${escapeHtml(role.owner)}</td>
                    <td>${escapeHtml(role.scope)}</td>
                    <td>${escapeHtml(role.authority)}</td>
                    <td class="${role.status === "Needs backup" ? "risk" : "ok"}">${escapeHtml(role.status)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Policy Stop Conditions</h2>
        <table>
          <thead>
            <tr>
              <th>Stop</th>
              <th>Status</th>
              <th>Threshold</th>
              <th>Action</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${policy.stops
              .map(
                (stop) => `
                  <tr>
                    <td>${escapeHtml(stop.title)}</td>
                    <td class="${stop.status === "Clear" ? "ok" : "risk"}">${escapeHtml(stop.status)}</td>
                    <td>${escapeHtml(stop.threshold)}</td>
                    <td>${escapeHtml(stop.action)}</td>
                    <td>${escapeHtml(stop.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Policy Simulations</h2>
        <table>
          <thead>
            <tr>
              <th>Policy</th>
              <th>Result</th>
              <th>Lift</th>
              <th>Status</th>
              <th>Tradeoff</th>
            </tr>
          </thead>
          <tbody>
            ${policy.simulations
              .map(
                (simulation) => `
                  <tr>
                    <td>${escapeHtml(simulation.policy)}</td>
                    <td>${escapeHtml(simulation.result)}</td>
                    <td>+${simulation.lift}</td>
                    <td class="${simulation.status === "Ready" ? "ok" : "risk"}">${escapeHtml(simulation.status)}</td>
                    <td>${escapeHtml(simulation.tradeoff)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Policy Digest</h2>
        <pre>${escapeHtml(learningPolicyDigestText(policy))}</pre>
        <h2>Launch Digest</h2>
        <pre>${escapeHtml(launchDigestText(launch))}</pre>
        <h2>Autonomous Review Run</h2>
        <p>Status: ${escapeHtml(run.status)} | Recommended run: ${escapeHtml(run.recommended.title)} | Run score: ${run.score}% | Open gates: ${run.openGateCount}</p>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Gate</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${run.steps
              .map(
                (step) => `
                  <tr>
                    <td>${escapeHtml(step.title)}</td>
                    <td class="${["Blocked", "SLA risk", "Gated"].includes(step.status) ? "risk" : "ok"}">${escapeHtml(step.status)}</td>
                    <td>${escapeHtml(step.owner)}</td>
                    <td>${escapeHtml(step.gate)}</td>
                    <td>${escapeHtml(step.detail)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
        <h2>Run Digest</h2>
        <pre>${escapeHtml(runDigestText(run))}</pre>
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
  addAudit("Review pack exported", "Review Pack v30 created with learning policy governor, learning ledger, evaluation lab, reinforcement control room, trust policy simulator, federated trust graph, autonomous trust orchestrator, trust benchmark network, adaptive trust playbooks, trust outcome memory, governed evidence agent, adaptive proof coach, privacy-safe learning network, trust center launchpad, learning loop, autonomous review runs, evidence gap autopilot, questionnaire import studio, evidence vault connectors, buyer follow-up inbox, trust room, multi-buyer pipeline, deal analytics, buyer portal autofill, retrieval rationale, and claim trace.");
  renderAudit();
  renderAccess();
  renderDataRoom();
  renderImportStudio();
  renderGapAutopilot();
  renderAutonomousRuns();
  renderTrustLaunchpad();
  renderLearningNetwork();
  renderAdaptiveCoach();
  renderEvidenceAgent();
  renderOutcomeMemory();
  renderAdaptivePlaybooks();
  renderTrustBenchmarks();
  renderTrustOrchestrator();
  renderFederatedGraph();
  renderPolicySimulator();
  renderReinforcementControl();
  renderEvaluationLab();
  renderLearningLedger();
  renderPipeline();
  renderTrustRoom();
  renderFollowUps();
  renderConnectors();
  renderAnalytics();
  showToast("Review Pack v30 exported.");
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
    runActions: state.runActions,
    launchActions: state.launchActions,
    networkActions: state.networkActions,
    coachActions: state.coachActions,
    agentActions: state.agentActions,
    outcomeActions: state.outcomeActions,
    playbookActions: state.playbookActions,
    benchmarkActions: state.benchmarkActions,
    orchestratorActions: state.orchestratorActions,
    graphActions: state.graphActions,
    simulatorActions: state.simulatorActions,
    reinforcementActions: state.reinforcementActions,
    evaluationActions: state.evaluationActions,
    ledgerActions: state.ledgerActions,
    policyActions: state.policyActions,
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
  closeAutonomousRuns(false);
  closeTrustLaunchpad(false);
  closeLearningNetwork(false);
  closeAdaptiveCoach(false);
  closeEvidenceAgent(false);
  closeOutcomeMemory(false);
  closeAdaptivePlaybooks(false);
  closeTrustBenchmarks(false);
  closeTrustOrchestrator(false);
  closeFederatedGraph(false);
  closePolicySimulator(false);
  closeReinforcementControl(false);
  closeEvaluationLab(false);
  closeLearningLedger(false);
  closeLearningPolicyGovernor(false);
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
    "Simulation queued": "Simulation queued",
  };
  return labels[status] ?? "Assigned";
}

function routeStatusClass(status) {
  if (status === "Needs owner") return "is-needed";
  if (status === "Owner review") return "is-review";
  if (status === "Simulation queued") return "is-simulation";
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
