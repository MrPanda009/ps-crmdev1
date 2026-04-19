import type { ReactNode } from "react";
import styles from "./documentation.module.css";

export interface DocumentationSection {
  id: string;
  label: string;
  title: string;
  summary: string;
  content: ReactNode;
}

const snapshotStats: Array<{ label: string; value: string; note: string }> = [
  { label: "Complaint categories", value: "42+", note: "Mapped across major Delhi civic authorities." },
  { label: "Authority zones", value: "9", note: "Department-aware routing and visibility." },
  { label: "API endpoints", value: "56+", note: "FastAPI, Next.js handlers, and AI service." },
  { label: "RLS policies", value: "28", note: "Department isolation at database layer." },
  { label: "Role portals", value: "4", note: "Citizen, Authority, Worker, and Admin." },
  { label: "Voice languages", value: "10", note: "Multilingual STT for complaint intake." },
];

const problemRows: Array<{ pain: string; reality: string; designResponse: string }> = [
  {
    pain: "No single window",
    reality: "Citizens must already know which department handles which issue.",
    designResponse: "Unified intake with AI-assisted category and authority prediction.",
  },
  {
    pain: "Zero visibility",
    reality: "Complaints disappear without status context or timeline confidence.",
    designResponse: "Lifecycle state machine with immutable ticket history.",
  },
  {
    pain: "Duplicate noise",
    reality: "One pothole can create dozens of separate complaints.",
    designResponse: "PostGIS radius-based dedup with upvote merge behavior.",
  },
  {
    pain: "Language barrier",
    reality: "English-only forms block broad participation.",
    designResponse: "Hindi and multilingual voice ingestion via STT pipeline.",
  },
  {
    pain: "No spatial intelligence",
    reality: "Authorities cannot identify hotspot clusters early.",
    designResponse: "DIGIPIN + map-first dashboards + nearby complaint discovery.",
  },
  {
    pain: "Worker context gap",
    reality: "Field teams get vague assignments with little proof context.",
    designResponse: "Mobile-first worker dashboard with maps, SLA timer, and proof upload.",
  },
  {
    pain: "Jurisdiction overlap",
    reality: "Wrong-department routing delays closure and accountability.",
    designResponse: "Department-scoped authority view enforced by JWT-backed RLS.",
  },
];

const differentiatorRows: Array<{ capability: string; implementation: string; impact: string }> = [
  {
    capability: "AI complaint intake",
    implementation: "Gemini classifies category, severity, and likely authority from free text.",
    impact: "Reduces form friction and improves first-route accuracy.",
  },
  {
    capability: "DIGIPIN location identity",
    implementation: "10-character India Post code generated from pin-selected coordinates.",
    impact: "Improves field navigation precision and address stability.",
  },
  {
    capability: "PostGIS duplicate suppression",
    implementation: "20m radius check before insert; existing complaint can be upvoted instead.",
    impact: "Prevents spam-like duplication and amplifies signal quality.",
  },
  {
    capability: "DB-level department isolation",
    implementation: "RLS policies enforce row visibility using role and department claims.",
    impact: "Blocks cross-department leakage even if UI logic is bypassed.",
  },
  {
    capability: "Race-safe assignment",
    implementation: "FOR UPDATE locking inside assignment RPC.",
    impact: "Prevents concurrent worker double-assignment.",
  },
  {
    capability: "Auto-escalation on breach",
    implementation: "Cron-callable RPC escalates overdue in-progress tickets.",
    impact: "Removes dependency on manual deadline monitoring.",
  },
  {
    capability: "CCTV reliability engine",
    implementation: "Burst-based multi-frame consensus before auto ticket creation.",
    impact: "Reduces false positives from single noisy frames.",
  },
  {
    capability: "Immutable audit trail",
    implementation: "Ticket history rows persist key state and action transitions.",
    impact: "Improves traceability for citizen trust and admin review.",
  },
];

const journeySteps = [
  "Citizen reports issue in Hindi, English, or voice through Seva or manual form.",
  "System enriches payload with category, severity, authority hint, and DIGIPIN coordinates.",
  "Duplicate check runs with PostGIS distance logic before complaint creation.",
  "Ticket is created with SLA deadline and notification payloads for citizen tracking.",
  "Authority dashboard surfaces ticket in department-scoped queue and assigns field worker.",
  "Worker navigates to location, updates status, and uploads proof evidence on completion.",
  "Citizen receives closure message and can confirm or reopen within policy limits.",
  "Ticket history preserves every transition for analytics and accountability.",
];

const guaranteeRows = [
  "No duplicate ticket is inserted for the same category inside configured distance checks.",
  "Invalid lifecycle transitions are blocked by trigger-level checks before commit.",
  "Authorities cannot query complaints outside their department scope via RLS.",
  "Assignment race conditions are blocked with row locks in assignment RPC logic.",
  "SLA breach escalation can run from cron without frontend or API availability.",
  "Severity escalation from community upvotes is monotonic and never decreases.",
  "DIGIPIN location encoding does not require an online geocoding API call.",
];

const systemRows: Array<{ system: string; behavior: string; operationalValue: string }> = [
  {
    system: "AI intake and Seva chatbot",
    behavior: "Classifies complaint text, proposes category and priority, supports multilingual prompts.",
    operationalValue: "Higher completion rate for non-technical citizens.",
  },
  {
    system: "DIGIPIN and map intelligence",
    behavior: "Converts pin location to stable code and supports map-driven workflow routing.",
    operationalValue: "Accurate field navigation and geospatial analytics.",
  },
  {
    system: "Duplicate and upvote engine",
    behavior: "Identifies proximity duplicates and shifts users to vote-based amplification.",
    operationalValue: "Cleaner queue quality and better prioritization signal.",
  },
  {
    system: "SLA and escalation engine",
    behavior: "Evaluates deadlines and escalates pending tickets via background function.",
    operationalValue: "Consistent deadline governance with minimal manual intervention.",
  },
  {
    system: "CCTV and verification loop",
    behavior: "Analyzes camera bursts, proposes incidents, supports repaired/not-repaired verification.",
    operationalValue: "Extends detection coverage beyond manual citizen reports.",
  },
  {
    system: "Gamification and wallet",
    behavior: "Awards points for constructive participation and applies penalties for abuse.",
    operationalValue: "Promotes participation while deterring spam behavior.",
  },
  {
    system: "Notification pipeline",
    behavior: "Sends email and WhatsApp events with deep links and closure prompts.",
    operationalValue: "Maintains citizen loop continuity after submission.",
  },
  {
    system: "Admin analytics and governance",
    behavior: "Aggregates platform metrics, department performance, and operational health.",
    operationalValue: "Supports planning, staffing, and policy interventions.",
  },
];

const roleFlowRows: Array<{ role: string; canDo: string; cannotDo: string }> = [
  {
    role: "Citizen",
    canDo: "Create complaints, track status, upvote, rate resolution, reopen within policy.",
    cannotDo: "Assign workers, view internal authority notes, change department ownership.",
  },
  {
    role: "Authority",
    canDo: "Review department tickets, assign workers, escalate, add internal notes.",
    cannotDo: "View other departments when RLS constraints are active.",
  },
  {
    role: "Worker",
    canDo: "View assigned tickets, update status, upload proof, request materials.",
    cannotDo: "Self-assign tickets or access unrelated workers' queues.",
  },
  {
    role: "Admin",
    canDo: "Cross-platform moderation, analytics, user management, and CCTV operations.",
    cannotDo: "Bypass accountability records; ticket history remains auditable.",
  },
];

const architectureRows: Array<{ layer: string; stack: string; notes: string }> = [
  {
    layer: "Client",
    stack: "Next.js 15 + React 19",
    notes: "Role-specific portals, map workflows, and citizen-facing accountability views.",
  },
  {
    layer: "Application APIs",
    stack: "FastAPI + Next.js route handlers + AI microservice",
    notes: "Complaint intake, role workflows, notifications, CCTV processing, and admin controls.",
  },
  {
    layer: "Data",
    stack: "PostgreSQL 15 + PostGIS + Supabase Storage + Redis",
    notes: "RLS, triggers, RPC transactions, spatial indexing, and cache/session support.",
  },
  {
    layer: "External integrations",
    stack: "Google Gemini, Sarvam STT, Mappls, WhatsApp Cloud API, Resend",
    notes: "Gemini use assumes paid API access; no free-tier dependency is documented.",
  },
  {
    layer: "Infrastructure",
    stack: "GCP Cloud Run + Cloud Build + Secret Manager",
    notes: "Three-service deployment topology with containerized release workflow.",
  },
];

const rpcRows: Array<{ name: string; purpose: string }> = [
  { name: "check_for_duplicate_report", purpose: "20m duplicate detection before complaint insert." },
  { name: "find_duplicate_complaints_v2", purpose: "Extended duplicate scan with status and radius controls." },
  { name: "increment_upvote_count", purpose: "Atomic upvote plus effective severity recalculation." },
  { name: "assign_worker_to_complaint", purpose: "Assignment with row locking for race protection." },
  { name: "check_sla_breaches", purpose: "Escalates overdue assigned or in-progress complaints." },
  { name: "nearest_urgent_complaint", purpose: "Proximity and urgency-aware dispatch helper." },
  { name: "get_nearby_complaints", purpose: "Distance-ranked complaint discovery for maps." },
  { name: "award_points", purpose: "Gamification point updates in a single transaction." },
  { name: "redeem_reward", purpose: "Atomic reward redemption and balance validation." },
  { name: "update_complaint_status_citizen", purpose: "Citizen confirm/reopen action with policy checks." },
];

const fastApiRows: Array<{ endpoint: string; method: string; purpose: string }> = [
  { endpoint: "/analyze", method: "POST", purpose: "AI-assisted complaint preview and routing suggestion." },
  { endpoint: "/confirm", method: "POST", purpose: "Complaint creation, routing, dedup, and notifications." },
  { endpoint: "/citizen/tickets", method: "GET", purpose: "Citizen ticket feed with status visibility." },
  { endpoint: "/citizen/nearby", method: "GET", purpose: "Map-based nearby issue discovery." },
  { endpoint: "/api/authority/assign", method: "PATCH", purpose: "Authority worker assignment operation." },
  { endpoint: "/api/authority/dashboard", method: "GET", purpose: "Authority queue and SLA dashboard data." },
  { endpoint: "/api/worker/dashboard", method: "GET", purpose: "Worker task list and execution context." },
  { endpoint: "/api/admin/analytics", method: "GET", purpose: "Platform-level operational analytics." },
  { endpoint: "/whatsapp/webhook", method: "GET/POST", purpose: "WhatsApp verification and bot message handling." },
  { endpoint: "/cctv/analyze_live", method: "POST", purpose: "CCTV frame burst analysis with reliability checks." },
  { endpoint: "/cctv/verify", method: "POST", purpose: "Verification feedback for camera-detected incidents." },
];

const nextApiRows: Array<{ endpoint: string; method: string; purpose: string }> = [
  { endpoint: "/api/complaints", method: "POST/PATCH", purpose: "Complaint create, update, and upvote operations." },
  { endpoint: "/api/chat", method: "POST", purpose: "Gemini proxy with fallback model handling." },
  { endpoint: "/api/stt", method: "POST", purpose: "Sarvam STT proxy for multilingual voice submission." },
  { endpoint: "/api/verify-recaptcha", method: "POST", purpose: "Server-side captcha verification." },
  { endpoint: "/api/citizen/wallet", method: "GET/POST", purpose: "Wallet points, rewards, and redemption state." },
  { endpoint: "/api/citizen/leaderboard", method: "GET", purpose: "Public engagement leaderboard data." },
  { endpoint: "/api/admin/authorities", method: "GET/POST/PATCH", purpose: "Authority account management." },
  { endpoint: "/api/admin/workers", method: "GET/POST/PATCH", purpose: "Worker account management." },
  { endpoint: "/api/admin/complaints/spam", method: "POST", purpose: "Spam moderation and penalty flow." },
  { endpoint: "/api/admin/system/sync-wallets", method: "POST", purpose: "Backfill wallet balances for existing users." },
];

const envRows: Array<{ keyName: string; purpose: string }> = [
  { keyName: "NEXT_PUBLIC_SUPABASE_URL", purpose: "Supabase project URL for client access." },
  { keyName: "NEXT_PUBLIC_SUPABASE_ANON_KEY", purpose: "Public key for browser-level Supabase operations." },
  { keyName: "SUPABASE_SERVICE_ROLE_KEY", purpose: "Privileged server-side key for administrative actions." },
  { keyName: "GEMINI_API_KEY", purpose: "Google Gemini key for paid API usage." },
  { keyName: "GEMINI_PRIMARY_MODEL", purpose: "Optional primary model override." },
  { keyName: "GEMINI_FALLBACK_MODEL", purpose: "Fallback model for quota/model errors." },
  { keyName: "MAPPLS_API_KEY", purpose: "India-focused geocoding and map enrichment." },
  { keyName: "NEXT_PUBLIC_API_URL", purpose: "Backend API base URL consumed by web clients." },
  { keyName: "NEXT_PUBLIC_RECAPTCHA_SITE_KEY", purpose: "Public reCAPTCHA site key." },
  { keyName: "RECAPTCHA_SECRET_KEY", purpose: "Server-side captcha verification key." },
  { keyName: "SARVAM_API_KEY", purpose: "Speech-to-text service authentication." },
  { keyName: "RESEND_API_KEY", purpose: "Transactional email service key." },
  { keyName: "FRONTEND_BASE_URL", purpose: "Canonical deep-link origin for messages and notifications." },
  { keyName: "AI_SERVICE_URL", purpose: "AI service endpoint for CCTV proxy operations." },
  { keyName: "REDIS_URL", purpose: "Cache and session backend URL." },
  { keyName: "WHATSAPP_TOKEN", purpose: "Meta WhatsApp Cloud API token." },
  { keyName: "WHATSAPP_PHONE_NUMBER_ID", purpose: "WhatsApp sender configuration." },
  { keyName: "WHATSAPP_VERIFY_TOKEN", purpose: "Webhook verification token." },
];

const securityRows: Array<{ control: string; detail: string }> = [
  { control: "RLS role isolation", detail: "Row access constrained by role and department claims." },
  { control: "Status transition validation", detail: "Trigger checks block invalid status transitions." },
  { control: "Captcha abuse prevention", detail: "Server-side reCAPTCHA verification for public intake paths." },
  { control: "Assignment lock safety", detail: "FOR UPDATE locking prevents concurrent assignment conflicts." },
  { control: "Audit trail persistence", detail: "State and action records retained for review and governance." },
  { control: "Secret management", detail: "Runtime secret injection through cloud secret stores." },
  { control: "Moderation and penalties", detail: "Spam flagging and wallet penalties deter abuse patterns." },
];

const failureRows: Array<{ scenario: string; response: string }> = [
  { scenario: "Gemini quota or model failure", response: "Fallback to manual submission or fallback model path." },
  { scenario: "Duplicate complaint attempt", response: "Pre-submit dedup guides citizen to upvote existing ticket." },
  { scenario: "Worker unavailable mid-task", response: "Authority can reassign; overdue tickets escalate automatically." },
  { scenario: "SLA breach with no manual review", response: "Cron RPC escalates to high-priority authority queue." },
  { scenario: "Single-frame CCTV false positive", response: "Burst consensus threshold suppresses low-confidence incidents." },
  { scenario: "Spam submission bursts", response: "Captcha, moderation queue, and penalties limit abuse impact." },
  { scenario: "Broken deep link", response: "FRONTEND_BASE_URL validation and UUID-based detail links." },
  { scenario: "Concurrent assignment attempts", response: "Second transaction is rejected by lock conflict semantics." },
];

const comparisonRows: Array<{ dimension: string; legacy: string; jansamadhan: string }> = [
  {
    dimension: "Language and accessibility",
    legacy: "English-heavy forms with high form literacy requirement.",
    jansamadhan: "Hindi and multilingual voice-assisted intake with guided flow.",
  },
  {
    dimension: "Duplicate handling",
    legacy: "Repeated records for same incident in dense areas.",
    jansamadhan: "Distance-aware dedup and upvote aggregation.",
  },
  {
    dimension: "Department isolation",
    legacy: "Soft segregation; frequent routing confusion.",
    jansamadhan: "RLS-backed department boundaries and role isolation.",
  },
  {
    dimension: "SLA governance",
    legacy: "Manual follow-up and limited breach visibility.",
    jansamadhan: "Automated escalation and dashboard-level breach surfacing.",
  },
  {
    dimension: "Resolution proof",
    legacy: "Closure may happen without contextual field evidence.",
    jansamadhan: "Worker proof artifacts and closure confirmation loop.",
  },
  {
    dimension: "Citizen accountability view",
    legacy: "Sparse status context.",
    jansamadhan: "Trackable lifecycle with audit-friendly status history.",
  },
];

const scopeRows: Array<{ feature: string; status: string; notes: string }> = [
  { feature: "Citizen, Authority, Worker, Admin portals", status: "Live", notes: "Role-specific production interfaces are active." },
  { feature: "Seva chatbot and multilingual voice intake", status: "Live", notes: "Gemini and Sarvam flows are integrated in active runtime." },
  { feature: "DIGIPIN and map-first workflows", status: "Live", notes: "Complaint creation and worker navigation pipelines use map coordinates." },
  { feature: "WhatsApp intake and closure loop", status: "Live (v1)", notes: "Menu-driven intake and closure reminders are shipped." },
  { feature: "CCTV reliability and verification", status: "Live", notes: "Burst analysis and verification outcomes are available." },
  { feature: "Infrastructure-as-code scaffolding", status: "Partial", notes: "Folder scaffolds exist; full Terraform rollout remains pending." },
  { feature: "Service worker offline caching", status: "Planned", notes: "Planned enhancement; worker portal is currently web mobile-first, not a PWA." },
  { feature: "Multi-city rollout", status: "Planned", notes: "Current scope emphasizes Delhi confidence before expansion." },
  { feature: "CPGRAMS bridge integration", status: "Planned", notes: "Future interoperability phase." },
];

const roadmapRows: Array<{ phase: string; title: string; status: string }> = [
  { phase: "Phase 1", title: "Delhi pilot with all role portals and core governance controls.", status: "Complete" },
  { phase: "Phase 2", title: "City expansion playbook for Mumbai, Bengaluru, and Chennai.", status: "Planned" },
  { phase: "Phase 3", title: "Offline caching and resilience improvements for low-connectivity areas.", status: "Planned" },
  { phase: "Phase 4", title: "WhatsApp conversational depth expansion beyond v1 flow.", status: "In progress" },
  { phase: "Phase 5", title: "Cross-platform escalation bridge and inter-jurisdiction routing.", status: "Planned" },
  { phase: "Phase 6", title: "Future DIGIPIN API alignment and national-scale integrations.", status: "Planned" },
];

const glossaryRows: Array<{ term: string; plain: string; technical: string }> = [
  {
    term: "DIGIPIN",
    plain: "India's location code system.",
    technical: "10-character location identity from India Post used for precise mapping.",
  },
  {
    term: "RLS",
    plain: "Database row-level access walls.",
    technical: "PostgreSQL policy layer that constrains row visibility by role claims.",
  },
  {
    term: "PostGIS",
    plain: "Spatial extension for PostgreSQL.",
    technical: "Adds geospatial functions such as distance checks for dedup logic.",
  },
  {
    term: "SLA",
    plain: "Complaint deadline contract.",
    technical: "Timing policy for escalation, prioritization, and closure accountability.",
  },
  {
    term: "RPC",
    plain: "Atomic database function call.",
    technical: "Server-side function that runs as a single transaction.",
  },
  {
    term: "FOR UPDATE",
    plain: "Row reservation lock.",
    technical: "Concurrency control used during worker assignment operations.",
  },
  {
    term: "YOLO",
    plain: "Real-time vision model.",
    technical: "Model family used for CCTV incident detection in AI service workflows.",
  },
  {
    term: "pending_closure",
    plain: "Waiting for citizen confirmation.",
    technical: "Lifecycle state between worker resolution and citizen final closure decision.",
  },
];

export const documentationSections: DocumentationSection[] = [
  {
    id: "snapshot",
    label: "01",
    title: "Executive Snapshot",
    summary:
      "High-speed briefing on platform scope, guarantees, and why this implementation is operationally distinct.",
    content: (
      <>
        <div className={styles.metricsGrid}>
          {snapshotStats.map((item) => (
            <article key={item.label} className={styles.metricCard}>
              <p className={styles.metricLabel}>{item.label}</p>
              <p className={styles.metricValue}>{item.value}</p>
              <p className={styles.metricSub}>{item.note}</p>
            </article>
          ))}
        </div>
        <div className={styles.callout}>
          Core design principle: high-impact rules are enforced at transaction and database policy level,
          not only at interface level.
        </div>
      </>
    ),
  },
  {
    id: "problem",
    label: "02",
    title: "Problem Definition",
    summary:
      "The system addresses fragmentation, low transparency, duplicate noise, and weak closure accountability in civic operations.",
    content: (
      <>
        <div className={styles.prose}>
          <p>
            The operational failure mode in legacy civic systems is not only ticket intake. It is the disconnected
            chain from complaint submission to assignment, field execution, and closure verification.
          </p>
          <p>
            Citizens lose confidence when timelines are opaque. Authorities lose efficiency when duplicates flood the
            queue. Workers lose time when location and context are weak. This documentation focuses on structural
            controls that directly address those gaps.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>Pain point</th>
                <th>Ground reality</th>
                <th>Design response</th>
              </tr>
            </thead>
            <tbody>
              {problemRows.map((row) => (
                <tr key={row.pain}>
                  <td>{row.pain}</td>
                  <td>{row.reality}</td>
                  <td>{row.designResponse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "solution",
    label: "03",
    title: "Platform Solution",
    summary:
      "Four role portals share one lifecycle model, one source of truth, and enforcement controls at the database layer.",
    content: (
      <>
        <div className={styles.roleGrid}>
          <article className={styles.roleCard}>
            <h3 className={styles.roleTitle}>Citizen portal</h3>
            <p className={styles.roleText}>Complaint filing via Seva, voice, map pin, status tracking, and rating loop.</p>
          </article>
          <article className={styles.roleCard}>
            <h3 className={styles.roleTitle}>Authority dashboard</h3>
            <p className={styles.roleText}>Department-scoped triage, worker assignment, escalation, and internal notes.</p>
          </article>
          <article className={styles.roleCard}>
            <h3 className={styles.roleTitle}>Worker interface</h3>
            <p className={styles.roleText}>Mobile-first web task execution with navigation, SLA countdown, and proof upload.</p>
          </article>
          <article className={styles.roleCard}>
            <h3 className={styles.roleTitle}>Admin control panel</h3>
            <p className={styles.roleText}>Cross-system moderation, analytics, CCTV oversight, and account governance.</p>
          </article>
        </div>
        <div className={styles.callout}>
          One citizen-facing intake surface, isolated authority views, and centralized governance data for admin operations.
        </div>
      </>
    ),
  },
  {
    id: "usps",
    label: "04",
    title: "Why This Is Different",
    summary:
      "Differentiators are tied to enforceable implementation choices, not cosmetic feature claims.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>Capability</th>
              <th>Implementation</th>
              <th>Operational impact</th>
            </tr>
          </thead>
          <tbody>
            {differentiatorRows.map((row) => (
              <tr key={row.capability}>
                <td>{row.capability}</td>
                <td>{row.implementation}</td>
                <td>{row.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "journey",
    label: "05",
    title: "End-to-End Complaint Journey",
    summary:
      "A deterministic lifecycle path from citizen intake to field proof and confirmation feedback.",
    content: (
      <>
        <ol className={styles.flowList}>
          {journeySteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className={styles.callout}>
          Example target outcome: issue reported, routed, assigned, resolved with proof, and citizen-confirmed within SLA.
        </div>
      </>
    ),
  },
  {
    id: "guarantees",
    label: "06",
    title: "Trust and Accountability",
    summary:
      "Key guarantees are anchored in policies, triggers, and transactional functions that are hard to bypass.",
    content: (
      <ul className={styles.signalList}>
        {guaranteeRows.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "systems",
    label: "07",
    title: "Core Systems Breakdown",
    summary:
      "Subsystem-level view of intake, spatial logic, escalation, surveillance, engagement, and governance.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>System</th>
              <th>Behavior</th>
              <th>Operational value</th>
            </tr>
          </thead>
          <tbody>
            {systemRows.map((row) => (
              <tr key={row.system}>
                <td>{row.system}</td>
                <td>{row.behavior}</td>
                <td>{row.operationalValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "flows",
    label: "08",
    title: "Role Flows and Boundaries",
    summary:
      "Responsibilities and boundaries per role to preserve clarity, safety, and operational ownership.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>Role</th>
              <th>Can do</th>
              <th>Cannot do</th>
            </tr>
          </thead>
          <tbody>
            {roleFlowRows.map((row) => (
              <tr key={row.role}>
                <td>{row.role}</td>
                <td>{row.canDo}</td>
                <td>{row.cannotDo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "architecture",
    label: "09",
    title: "System Architecture",
    summary:
      "Layered architecture with explicit boundaries for client, APIs, data, integrations, and cloud runtime.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>Layer</th>
              <th>Stack</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {architectureRows.map((row) => (
              <tr key={row.layer}>
                <td>{row.layer}</td>
                <td>{row.stack}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "database",
    label: "10",
    title: "Data Model and RPCs",
    summary:
      "Enums, triggers, RLS, and RPC transactions form the core integrity model of the platform.",
    content: (
      <>
        <div className={styles.chipGroup}>
          <span className={styles.chip}>complaint_status</span>
          <span className={styles.chip}>severity_level</span>
          <span className={styles.chip}>worker_availability</span>
        </div>
        <div className={styles.prose}>
          <p>
            Core setup sequence: define enum types, create dependency-ordered tables, apply spatial indexes,
            register triggers, create RPC functions, then enable and verify RLS policies.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>RPC</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {rpcRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "api",
    label: "11",
    title: "API Surface",
    summary:
      "Representative endpoint inventory across FastAPI, Next.js routes, and environment contract requirements.",
    content: (
      <>
        <div className={styles.prose}>
          <p>FastAPI core endpoints</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Method</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {fastApiRows.map((row) => (
                <tr key={row.endpoint + row.method}>
                  <td>{row.endpoint}</td>
                  <td>{row.method}</td>
                  <td>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>Next.js app route handlers</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Method</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {nextApiRows.map((row) => (
                <tr key={row.endpoint + row.method}>
                  <td>{row.endpoint}</td>
                  <td>{row.method}</td>
                  <td>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>Key environment variables</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>Variable</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {envRows.map((row) => (
                <tr key={row.keyName}>
                  <td>{row.keyName}</td>
                  <td>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "security",
    label: "12",
    title: "Security and Integrity",
    summary:
      "Security model combines authentication, RLS, anti-abuse controls, and enforceable transition integrity.",
    content: (
      <>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>Control</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {securityRows.map((row) => (
                <tr key={row.control}>
                  <td>{row.control}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.callout}>
          Security guarantees are strongest when enforcement resides in DB policy and transaction logic, not just client code.
        </div>
      </>
    ),
  },
  {
    id: "operations",
    label: "13",
    title: "Operations and Deployment",
    summary:
      "Operational model is containerized and split across web, API, and AI services with cloud-native deployment controls.",
    content: (
      <div className={styles.prose}>
        <p>
          Deployment topology uses three services: web, API, and AI. Local simulation uses Docker Compose, while
          production uses Cloud Run with Cloud Build and managed secret injection.
        </p>
        <p>
          Pre-release checks should validate complaint intake, assignment transactions, deep-link generation,
          notification channels, and AI-service health before rollout approval.
        </p>
        <ul className={styles.signalList}>
          <li>Validate FRONTEND_BASE_URL before sending any notification links.</li>
          <li>Ensure pending_closure migration is applied in the target database.</li>
          <li>Verify model and API credentials are loaded from secret manager.</li>
          <li>Run smoke checks for /analyze, /confirm, /api/authority/assign, and /cctv/analyze_live.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "failures",
    label: "14",
    title: "Failure Handling / Edge Cases",
    summary:
      "Production posture requires explicit responses to common failure and abuse scenarios.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>System response</th>
            </tr>
          </thead>
          <tbody>
            {failureRows.map((row) => (
              <tr key={row.scenario}>
                <td>{row.scenario}</td>
                <td>{row.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "comparison",
    label: "15",
    title: "Comparative Positioning",
    summary:
      "Comparison against common grievance baseline behavior across accessibility, governance, and closure reliability.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Legacy portals</th>
              <th>JanSamadhan</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.dimension}>
                <td>{row.dimension}</td>
                <td>{row.legacy}</td>
                <td>{row.jansamadhan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "scope",
    label: "16",
    title: "Current Scope and Limits",
    summary:
      "Live, partial, and planned items are separated to prevent ambiguity about production readiness.",
    content: (
      <>
        <div className={styles.tableWrap}>
          <table className={styles.docsTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {scopeRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.status}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.callout}>
          Worker operations currently use a mobile-first web dashboard. A dedicated worker PWA is not shipped in current scope.
        </div>
      </>
    ),
  },
  {
    id: "roadmap",
    label: "17",
    title: "Roadmap",
    summary:
      "Roadmap phases are additive and move from city confidence to interoperability and scale.",
    content: (
      <div className={styles.roadmap}>
        {roadmapRows.map((row) => (
          <article key={row.phase} className={styles.roadmapItem}>
            <p className={styles.roadmapPhase}>{row.phase}</p>
            <p>{row.title}</p>
            <p className={styles.metricSub}>Status: {row.status}</p>
          </article>
        ))}
      </div>
    ),
  },
  {
    id: "glossary",
    label: "18",
    title: "Glossary",
    summary:
      "Plain-language definitions for recurring technical terms used throughout this document.",
    content: (
      <div className={styles.tableWrap}>
        <table className={styles.docsTable}>
          <thead>
            <tr>
              <th>Term</th>
              <th>Plain meaning</th>
              <th>Technical meaning</th>
            </tr>
          </thead>
          <tbody>
            {glossaryRows.map((row) => (
              <tr key={row.term}>
                <td>{row.term}</td>
                <td>{row.plain}</td>
                <td>{row.technical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
];
