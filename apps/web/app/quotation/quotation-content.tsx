import type { ChangeEvent, ReactNode } from "react";
import styles from "./quotation.module.css";
import {
  COMPLAINTS_PER_WARD_PER_MONTH,
  MAINTENANCE_COSTS,
  MAINTENANCE_TOTAL_ANNUAL,
  PROJECT_COST_LINE_ITEMS,
  SOFTWARE_CLOUD_MONTHLY_ONE_WARD,
  SOFTWARE_CLOUD_YEAR1_ONE_WARD,
  formatInr,
  formatInrTwoDecimals,
  getInfraPerGrievance,
  getProjectPerGrievanceExclGst,
  getProjectTotalExclGst,
} from "./quotation-pricing";

interface MetricCard {
  label: string;
  value: string;
  sub: string;
}

interface Deliverable {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

interface Integration {
  name: string;
  purpose: string;
  status: string;
}

interface SpecItem {
  layer: string;
  tech: string;
  note: string;
}

interface TimelineItem {
  phase: string;
  title: string;
  description: string;
  completed: boolean;
}

interface InfraRow {
  service: string;
  badge: string;
  badgeClass: "badgeBlue" | "badgeAmber" | "badgeGreen";
  billing: string;
  detail: string;
  plan: string;
  amount: string;
}

interface QuotationRow {
  item: string;
  note: string;
  basis: string;
  amount: string;
}

interface MaintenanceRow {
  item: string;
  scope: string;
  inclusion: string;
  annual: string;
}

interface CapabilityRow {
  capability: string;
  cpgrams: string;
  salesforce: string;
  jansamadhan: string;
}

export interface QuotationSection {
  id: string;
  label: string;
  title: string;
  summary: string;
  content: ReactNode;
}

export interface QuotationScaleModel {
  wardCount: number;
  onWardCountChange: (value: number) => void;
  zoneContext: string;
  monthlyCost: string;
  annualCost: string;
  yearlyComplaints: string;
  perGrievance: string;
}

export const quotationHero = {
  eyebrow: "Detailed Project Quotation · Solution Challenge 2026",
  title: "JanSamadhan — Citizen Resolution Platform",
  lead:
    "AI-assisted autonomous civic grievance management system for Indian urban local bodies. Built for 4,000+ ULBs, piloting in Delhi across 9 zones and 42+ complaint categories.",
  documentNumber: "DOC-JS-2026-Q1",
  status: "97% Complete · MVP Live",
};

export const quotationHeroChips = [
  "Team 404",
  "MVP Live",
  "SDG 11 · SDG 16",
  "9 months development",
  "19 April 2026",
];

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const PRIMARY_PILOT_WARDS = 1;
const PRIMARY_YEARLY_COMPLAINTS = COMPLAINTS_PER_WARD_PER_MONTH * 12;
const PRIMARY_YEAR1_SUBTOTAL = getProjectTotalExclGst(PRIMARY_PILOT_WARDS);
const PRIMARY_INFRA_PER_GRIEVANCE = getInfraPerGrievance(PRIMARY_PILOT_WARDS);
const PRIMARY_FULL_PER_GRIEVANCE = getProjectPerGrievanceExclGst(PRIMARY_PILOT_WARDS);
const CPGRAMS_MIN_PER_GRIEVANCE = 83;
const CPGRAMS_MAX_PER_GRIEVANCE = 250;
const MIN_ADVANTAGE_MULTIPLIER = CPGRAMS_MIN_PER_GRIEVANCE / PRIMARY_INFRA_PER_GRIEVANCE;
const MAX_ADVANTAGE_MULTIPLIER = CPGRAMS_MAX_PER_GRIEVANCE / PRIMARY_INFRA_PER_GRIEVANCE;

const overviewMetrics: MetricCard[] = [
  { label: "Routes", value: "39", sub: "Citizen + Authority + Admin" },
  { label: "DB Tables", value: "19", sub: "28 RLS policies" },
  { label: "API Endpoints", value: "56+", sub: "FastAPI + Next.js" },
  { label: "Languages", value: "10", sub: "Sarvam STT voice input" },
];

const frontendDeliverables: Deliverable[] = [
  {
    id: "01",
    title: "Citizen Portal",
    description:
      "9 routes. Seva AI chatbot complaint filing, geo-pin with DIGIPIN, real-time tracking, heatmap, upvoting, gamification, SLA escalation, closure confirmation.",
    badge: "Live",
  },
  {
    id: "02",
    title: "Authority Dashboard",
    description:
      "8 routes. Department-scoped view (RLS enforced), worker assignment, material request review, map visualization, performance reports.",
    badge: "Live",
  },
  {
    id: "03",
    title: "Worker Mobile Web",
    description:
      "3 routes. Task list with SLA countdown, proof photo upload, Google Maps navigation to 4m² DIGIPIN coordinates.",
    badge: "Live",
  },
  {
    id: "04",
    title: "Admin Control Panel",
    description:
      "11 routes. Platform-wide analytics, user management, CCTV surveillance dashboard, complaint moderation, wallet sync.",
    badge: "Live",
  },
  {
    id: "05",
    title: "Public Routes",
    description:
      "8 routes. Landing page, public heatmap, leaderboard, legal pages. No login required.",
    badge: "Live",
  },
];

const backendDeliverables: Deliverable[] = [
  {
    id: "06",
    title: "FastAPI Backend",
    description:
      "35+ endpoints. Complaint intake, authority ops, worker ops, admin dashboard, CCTV proxy, WhatsApp webhook, notifications.",
    badge: "Live",
  },
  {
    id: "07",
    title: "AI Service",
    description:
      "6 endpoints. YOLO v8 inference, CCTV multi-frame reliability engine, citizen corroboration, auto-ticket creation, geocoding proxy.",
    badge: "Live",
  },
  {
    id: "08",
    title: "Database Stack",
    description:
      "Supabase (Postgres 15 + PostGIS 3.4). 19 tables, 28 RLS policies, 14 RPC functions, 8 triggers, spatial GIST indexes, immutable audit trail.",
    badge: "Live",
  },
  {
    id: "09",
    title: "Integrations",
    description:
      "Gemini LLM, Mappls geocoding, Sarvam STT (10 languages), Meta WhatsApp Bot, Resend email, reCAPTCHA v2, Redis. All operational.",
    badge: "Live",
  },
  {
    id: "10",
    title: "GCP Deployment",
    description:
      "3 Cloud Run services (Web, API, AI) with Cloud Build CI/CD pipeline, Artifact Registry, GCP Secret Manager.",
    badge: "Live",
  },
];

const integrations: Integration[] = [
  { name: "Google Gemini", purpose: "Seva chatbot · Classification", status: "Live" },
  { name: "Mappls API", purpose: "Geocoding · Map visualization", status: "Live" },
  { name: "Sarvam STT", purpose: "Voice input · 10 languages", status: "Live" },
  { name: "WhatsApp (Meta)", purpose: "Bot intake · Notifications", status: "Live" },
  { name: "Resend", purpose: "Transactional email", status: "Live" },
  { name: "reCAPTCHA v2", purpose: "Spam prevention", status: "Live" },
  { name: "Redis (Upstash)", purpose: "Cache · Sessions", status: "Live" },
  { name: "Supabase", purpose: "DB · Auth · Storage", status: "Live" },
];

const specs: SpecItem[] = [
  {
    layer: "Presentation",
    tech: "Next.js 15 · React 19",
    note: "Desktop + mobile web interface. Hindi & English UI. No installation required. Tailwind CSS v4, Leaflet.js + Mappls maps.",
  },
  {
    layer: "Backend API",
    tech: "FastAPI (Python 3.10+)",
    note: "35+ REST endpoints on GCP Cloud Run. Auto-scaling, zero-downtime, 99.9% uptime SLA. JWT auth + reCAPTCHA on all public endpoints.",
  },
  {
    layer: "AI Service",
    tech: "Gemini Flash · YOLO v8",
    note: "Gemini classifies 42 complaint categories and 4 severity levels. YOLO v8 runs a multi-frame CCTV reliability engine with citizen corroboration.",
  },
  {
    layer: "Database",
    tech: "PostgreSQL 15 + PostGIS 3.4",
    note: "19 tables, 28 Row-Level Security policies, 14 stored RPC functions, and GIST spatial indexes.",
  },
  {
    layer: "Location",
    tech: "DIGIPIN (India Post)",
    note: "Official 10-character location code with 4m² precision. Works offline and helps prevent duplicate filings.",
  },
  {
    layer: "Deployment",
    tech: "GCP Cloud Run · Cloud Build",
    note: "3 services (Web, API, AI), CI/CD on push, secrets in GCP Secret Manager, and portable container deployment.",
  },
  {
    layer: "Security",
    tech: "JWT · RLS · reCAPTCHA",
    note: "Google OAuth + email/password with PostgreSQL RLS and controlled workflow transitions via ENUM state machine.",
  },
  {
    layer: "Voice Input",
    tech: "Sarvam STT — 10 Languages",
    note: "Hindi, English, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, and Punjabi.",
  },
];

const timelineA: TimelineItem[] = [
  {
    phase: "Months 1–2.5 · Complete",
    title: "Prototype & MVP Build",
    description:
      "Core architecture, all 4 portals, Seva chatbot, DIGIPIN integration, Supabase schema, and GCP Cloud Run deployment.",
    completed: true,
  },
  {
    phase: "Months 2.5–5.5 · Current",
    title: "Pilot Deployment",
    description:
      "1–5 ward pilot with real complaints, field worker onboarding, authority training, WhatsApp bot activation, and CCTV reliability tuning.",
    completed: true,
  },
];

const timelineB: TimelineItem[] = [
  {
    phase: "Months 5.5–8 · Planned",
    title: "Full Delhi Deployment",
    description:
      "Scale to 20+ wards across 1–2 zones, onboard all 9 zones, and expand multi-department authority operations.",
    completed: false,
  },
  {
    phase: "Month 9 · Planned",
    title: "DPCC / MCD Handover",
    description:
      "Documentation, admin training, infra transfer readiness, SLA finalization, and support transition.",
    completed: false,
  },
];

const permissionDeliverables: Deliverable[] = [
  {
    id: "R1",
    title: "Server deployment access",
    description:
      "Permission to deploy on NIC/MeghRaj infrastructure, or approval to continue on existing GCP setup.",
  },
  {
    id: "R2",
    title: "CCTV network integration",
    description:
      "Permission to integrate YOLO v8 model workflows against existing Delhi CCTV streams managed by relevant departments.",
  },
  {
    id: "R3",
    title: "Department onboarding",
    description:
      "Designation of authority accounts for participating departments with verified government email IDs.",
  },
];

const infraRows: InfraRow[] = [
  {
    service: "Software / Cloud Costs",
    badge: "Year-1 Baseline",
    badgeClass: "badgeBlue",
    billing: "Primary 1-ward quotation baseline",
    detail:
      "Includes GCP Cloud Run, Supabase, Redis, Mappls, Gemini, Sarvam STT, WhatsApp Cloud API, and email operations.",
    plan: `${formatInr(SOFTWARE_CLOUD_MONTHLY_ONE_WARD)} / month × 12 months`,
    amount: formatInr(SOFTWARE_CLOUD_YEAR1_ONE_WARD),
  },
];

const quotationRows: QuotationRow[] = [
  {
    item: "Prototype & Testing Cost",
    note: "MVP development + QA cycle",
    basis:
      "Full-stack implementation across web, API, and AI services, including end-to-end user-role integration testing.",
    amount: formatInr(PROJECT_COST_LINE_ITEMS.prototypeTesting),
  },
  {
    item: "Machinery / Hardware",
    note: "No proprietary hardware required",
    basis: "Cloud infrastructure provided by government data centres or GCP",
    amount: formatInr(PROJECT_COST_LINE_ITEMS.machineryHardware),
  },
  {
    item: "Team Stipends",
    note: "5 member implementation team",
    basis: "5 members × 9 months × ₹22,000 / month",
    amount: formatInr(PROJECT_COST_LINE_ITEMS.teamStipends),
  },
  {
    item: "Execution & Deployment",
    note: "Deployment readiness and field execution",
    basis:
      "Fixed execution allocation covering survey, commissioning, deployment configuration, and handover readiness activities.",
    amount: formatInr(PROJECT_COST_LINE_ITEMS.executionDeployment),
  },
  {
    item: "Cloud & Connectivity (Year 1)",
    note: "Primary 1-ward pilot software/cloud model",
    basis: `${formatInr(SOFTWARE_CLOUD_MONTHLY_ONE_WARD)} / month × 12 months × 1 ward`,
    amount: formatInr(SOFTWARE_CLOUD_YEAR1_ONE_WARD),
  },
  {
    item: "Dashboard & App Dev",
    note: "API toolkit + third-party development costs",
    basis: "Gemini, Sarvam STT, WhatsApp API, Mappls, and developer toolkit allocation",
    amount: formatInr(PROJECT_COST_LINE_ITEMS.dashboardAppDev),
  },
  {
    item: "Contingency Fund (10%)",
    note: "Risk reserve for internal implementation and scale-up contingencies",
    basis: "Approved contingency reserve aligned to internal project-cost coverage in the quotation sheet.",
    amount: formatInr(PROJECT_COST_LINE_ITEMS.contingencyFund),
  },
];

const maintenanceRows: MaintenanceRow[] = [
  {
    item: "Cloud Infrastructure",
    scope: "1-ward scale (expandable up to 7 wards)",
    inclusion:
      "GCP Cloud Run, Supabase Pro, Redis, domain renewal, and SSL baseline operations.",
    annual: formatInr(MAINTENANCE_COSTS.cloudInfrastructureAnnual),
  },
  {
    item: "Developer Support",
    scope: "Part-time retainer (3 days/week)",
    inclusion: "Security patches, dependency updates, bug fixes, and admin support.",
    annual: formatInr(MAINTENANCE_COSTS.developerSupportAnnual),
  },
  {
    item: "API Renewals",
    scope: "Third-party service continuity",
    inclusion: "Gemini, Sarvam STT, WhatsApp Cloud API, Mappls, and transactional email stack.",
    annual: formatInr(MAINTENANCE_COSTS.apiRenewalsAnnual),
  },
];

const maintenanceInclusions: Deliverable[] = [
  {
    id: "M1",
    title: "Cloud infrastructure operations",
    description: "Monitoring, uptime management, and auto-scaling configuration.",
  },
  {
    id: "M2",
    title: "Security and dependencies",
    description: "Security patches, dependency upgrades, and Supabase schema migrations.",
  },
  {
    id: "M3",
    title: "AI lifecycle management",
    description: "Gemini version upgrades and YOLO retraining for Delhi-specific CCTV patterns.",
  },
  {
    id: "M4",
    title: "WhatsApp policy compliance",
    description: "Meta policy alignment and integration maintenance.",
  },
  {
    id: "M5",
    title: "Dedicated support retainer",
    description: "One dedicated developer for fixes, requests, and SLA reporting.",
  },
];

const capabilityRows: CapabilityRow[] = [
  {
    capability: "AI complaint classification",
    cpgrams: "No",
    salesforce: "Partial",
    jansamadhan: "Yes — 42 categories, 4 severity levels",
  },
  {
    capability: "Spatial deduplication",
    cpgrams: "No",
    salesforce: "No",
    jansamadhan: "Yes — PostGIS 20m radius",
  },
  {
    capability: "Field worker dispatch + DIGIPIN navigation",
    cpgrams: "No",
    salesforce: "No",
    jansamadhan: "Yes — 4m² precision",
  },
  {
    capability: "WhatsApp bot intake",
    cpgrams: "No",
    salesforce: "No",
    jansamadhan: "Yes — full flow",
  },
  {
    capability: "CCTV auto-detection",
    cpgrams: "No",
    salesforce: "No",
    jansamadhan: "Yes — YOLO v8 + reliability engine",
  },
  {
    capability: "Community severity escalation",
    cpgrams: "No",
    salesforce: "No",
    jansamadhan: "Yes — upvote to severity bump",
  },
  {
    capability: "Indian language voice input",
    cpgrams: "No",
    salesforce: "No",
    jansamadhan: "Yes — 10 languages (Sarvam STT)",
  },
  {
    capability: "Per-grievance cost basis",
    cpgrams: "₹83–250",
    salesforce: "Typically license-heavy",
    jansamadhan: `${formatInrTwoDecimals(PRIMARY_INFRA_PER_GRIEVANCE)} infra-only · ${formatInrTwoDecimals(PRIMARY_FULL_PER_GRIEVANCE)} full-project`,
  },
];

function DeliverableList({ items }: { items: Deliverable[] }) {
  return (
    <ul className={styles.deliverableList}>
      {items.map((item) => (
        <li key={item.id}>
          <span className={styles.deliverableId}>{item.id}</span>
          <div className={styles.deliverableBody}>
            <p>
              <strong>{item.title}</strong> — {item.description}
            </p>
          </div>
          {item.badge ? <span className={cx(styles.badgeSmall, styles.badgeLive)}>{item.badge}</span> : null}
        </li>
      ))}
    </ul>
  );
}

function TimelineColumn({ items }: { items: TimelineItem[] }) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <article key={item.title} className={styles.timelineItem}>
          <span className={cx(styles.timelineDot, item.completed && styles.timelineDotDone)} />
          <p className={styles.timelinePhase}>{item.phase}</p>
          <h3 className={styles.timelineTitle}>{item.title}</h3>
          <p className={styles.timelineDescription}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function getQuotationSections(scale: QuotationScaleModel): QuotationSection[] {
  const {
    wardCount,
    onWardCountChange,
    zoneContext,
    monthlyCost,
    annualCost,
    yearlyComplaints,
    perGrievance,
  } = scale;

  const scaleCards = [
    {
      label: "Monthly infra cost",
      value: monthlyCost,
      sub: `${wardCount} ward${wardCount > 1 ? "s" : ""}`,
      highlight: false,
    },
    {
      label: "Annual infra cost",
      value: annualCost,
      sub: "cloud services only",
      highlight: true,
    },
    {
      label: "Complaints / year",
      value: yearlyComplaints,
      sub: "at 2% filing rate",
      highlight: false,
    },
    {
      label: "Per-grievance cost",
      value: perGrievance,
      sub: "infrastructure only",
      highlight: false,
    },
  ];

  const handleWardChange = (event: ChangeEvent<HTMLInputElement>) => {
    onWardCountChange(Number(event.target.value));
  };

  return [
    {
      id: "basics",
      label: "01",
      title: "Basic Details",
      summary: "",
      content: (
        <div className={styles.twoCol}>
          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Project Identity</h3>
            <table className={styles.simpleTable}>
              <tbody>
                <tr>
                  <th>Team Name</th>
                  <td>Team 404</td>
                </tr>
                <tr>
                  <th>Project Title</th>
                  <td>JanSamadhan — AI-Assisted Autonomous Civic System</td>
                </tr>
                <tr>
                  <th>Live URL</th>
                  <td>
                    <a href="https://jansamadhan.perkkk.dev/" target="_blank" rel="noreferrer">
                      jansamadhan.perkkk.dev
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>Smart Resource Allocation</td>
                </tr>
                <tr>
                  <th>SDG Targets</th>
                  <td>SDG 11 (Sustainable Cities), SDG 16 (Accountable Institutions)</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Platform at a Glance</h3>
            <div className={styles.metricGrid} data-metric-grid>
              {overviewMetrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard} data-metric>
                  <p className={styles.metricLabel}>{metric.label}</p>
                  <p className={styles.metricValue}>{metric.value}</p>
                  <p className={styles.metricSub}>{metric.sub}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      ),
    },
    {
      id: "scope",
      label: "02",
      title: "Scope of Work & Deliverables",
      summary:
        "All modules are production-complete and live. The platform covers every stakeholder — citizens, field workers, authorities, and administrators.",
      content: (
        <>
          <div className={styles.twoCol}>
            <article className={styles.card} data-reveal>
              <h3 className={styles.cardTitle}>Frontend Modules</h3>
              <DeliverableList items={frontendDeliverables} />
            </article>

            <article className={styles.card} data-reveal>
              <h3 className={styles.cardTitle}>Backend & AI Modules</h3>
              <DeliverableList items={backendDeliverables} />
            </article>
          </div>

          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Third-Party Integrations — All Operational</h3>
            <div className={styles.integrationGrid}>
              {integrations.map((integration) => (
                <div key={integration.name} className={styles.integrationRow}>
                  <div>
                    <p className={styles.integrationName}>{integration.name}</p>
                    <p className={styles.integrationPurpose}>{integration.purpose}</p>
                  </div>
                  <span className={cx(styles.badgeSmall, styles.badgeLive)}>{integration.status}</span>
                </div>
              ))}
            </div>
          </article>
        </>
      ),
    },
    {
      id: "tech",
      label: "03",
      title: "Technical Specifications",
      summary:
        "Four-layer architecture designed for Indian civic infrastructure — no proprietary hardware required, and portable to government data centres.",
      content: (
        <div className={styles.specGrid}>
          {specs.map((item) => (
            <article key={item.layer} className={styles.specItem} data-reveal>
              <p className={styles.specLayer}>{item.layer}</p>
              <h3 className={styles.specTech}>{item.tech}</h3>
              <p className={styles.specNote}>{item.note}</p>
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "timeline",
      label: "04",
      title: "Project Timeline",
      summary:
        "9-month development cycle from prototype to full Delhi deployment and DPCC handover.",
      content: (
        <div className={styles.twoCol}>
          <div data-reveal>
            <TimelineColumn items={timelineA} />
          </div>
          <div data-reveal>
            <TimelineColumn items={timelineB} />
          </div>
        </div>
      ),
    },
    {
      id: "resources",
      label: "05",
      title: "Resource Requirements",
      summary: "",
      content: (
        <div className={styles.twoCol}>
          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Government Permissions Required</h3>
            <DeliverableList items={permissionDeliverables} />
          </article>

          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Infrastructure & Hardware</h3>
            <div className={styles.callout}>
              No proprietary hardware is required. JanSamadhan runs fully on standard cloud infrastructure, and
              containers can migrate to NIC/MeghRaj with minimal configuration changes.
            </div>
          </article>
        </div>
      ),
    },
    {
      id: "costs",
      label: "06",
      title: "Cost Allocation",
      summary:
        "Primary quotation values are presented for a 1-ward pilot baseline using a 2% monthly complaint filing rate (1,860 complaints/ward/month).",
      content: (
        <>
          <div className={styles.callout} data-reveal>
            <strong>Primary baseline:</strong> This quotation uses 1 ward as the professional baseline for Year 1.
            Scale-up projections can be applied from the same software/cloud model without altering the quoted line
            item basis.
          </div>

          <p className={styles.tableLabel}>SOFTWARE / CLOUD COST MODEL — PRIMARY 1-WARD PILOT BASELINE</p>
          <div className={styles.tableWrap} data-reveal>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Billing basis</th>
                  <th>Reference model</th>
                  <th className={styles.right}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {infraRows.map((row) => (
                  <tr key={row.service}>
                    <td>
                      <span className={styles.serviceName}>{row.service}</span>
                      <span className={cx(styles.badge, styles[row.badgeClass])}>{row.badge}</span>
                    </td>
                    <td>
                      {row.billing}
                      <small>{row.detail}</small>
                    </td>
                    <td>{row.plan}</td>
                    <td className={styles.right}>{row.amount}</td>
                  </tr>
                ))}
                <tr className={styles.rowTotal}>
                  <td colSpan={3}>Software/cloud reference — 1 ward / month</td>
                  <td className={styles.right}>{formatInr(SOFTWARE_CLOUD_MONTHLY_ONE_WARD)}</td>
                </tr>
                <tr className={styles.rowTotal}>
                  <td colSpan={3}>Software/cloud reference — 1 ward / year</td>
                  <td className={styles.right}>{formatInr(SOFTWARE_CLOUD_YEAR1_ONE_WARD)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.tableLabel}>FULL YEAR-1 QUOTATION — PRIMARY 1-WARD PILOT (EXCL. GST)</p>
          <div className={styles.tableWrap} data-reveal>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Line item</th>
                  <th>Calculation basis</th>
                  <th className={styles.right}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {quotationRows.map((row) => (
                  <tr key={row.item}>
                    <td>
                      <strong>{row.item}</strong>
                      <small>{row.note}</small>
                    </td>
                    <td>{row.basis}</td>
                    <td className={styles.right}>{row.amount}</td>
                  </tr>
                ))}
                <tr className={styles.rowGrand}>
                  <td colSpan={2}>Total Estimated Cost — Year 1 · 1-Ward Pilot (Excl. GST)</td>
                  <td className={styles.right}>{formatInr(PRIMARY_YEAR1_SUBTOTAL)}</td>
                </tr>
                <tr className={styles.rowMaintenance}>
                  <td colSpan={2}>Per-grievance infrastructure cost (1-ward, software/cloud only)</td>
                  <td className={styles.right}>{formatInrTwoDecimals(PRIMARY_INFRA_PER_GRIEVANCE)}</td>
                </tr>
                <tr className={styles.rowMaintenance}>
                  <td colSpan={2}>Per-grievance full-project cost (1-ward, Excl. GST)</td>
                  <td className={styles.right}>{formatInrTwoDecimals(PRIMARY_FULL_PER_GRIEVANCE)}</td>
                </tr>
                <tr className={styles.rowMaintenance}>
                  <td colSpan={2}>Complaint volume basis (1 ward × 12 months)</td>
                  <td className={styles.right}>{PRIMARY_YEARLY_COMPLAINTS.toLocaleString("en-IN")}</td>
                </tr>
                <tr className={styles.rowMaintenance}>
                  <td colSpan={3}>GST is excluded from totals above and applied separately at invoicing as per applicable tax rules.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "scale",
      label: "07",
      title: "Scale Cost Model — Interactive",
      summary:
        "Drag the slider to project Year-1 software/cloud cost from the same 1-ward baseline used in this quotation.",
      content: (
        <>
          <div className={styles.sliderRow} data-reveal>
            <span className={styles.sliderLabel}>Wards:</span>
            <div className={styles.sliderInner}>
              <input
                type="range"
                min={1}
                max={250}
                value={wardCount}
                onChange={handleWardChange}
                className={styles.slider}
              />
              <span className={styles.sliderValue}>{wardCount}</span>
            </div>
            <span className={styles.sliderContext}>{zoneContext}</span>
          </div>

          <div className={styles.scaleGrid}>
            {scaleCards.map((item) => (
              <article
                key={item.label}
                className={cx(styles.scaleCard, item.highlight && styles.scaleCardHighlight)}
                data-scale-card
              >
                <p className={styles.scaleLabel}>{item.label}</p>
                <p className={styles.scaleValue}>{item.value}</p>
                <p className={styles.scaleSub}>{item.sub}</p>
              </article>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "maintenance",
      label: "08",
      title: "Annual Maintenance Cost",
      summary: "",
      content: (
        <div className={styles.twoCol}>
          <div className={styles.tableWrap} data-reveal>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Scope</th>
                  <th>What's included</th>
                  <th className={styles.right}>Annual Cost (₹)</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceRows.map((row) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>
                    <td>{row.scope}</td>
                    <td>{row.inclusion}</td>
                    <td className={styles.right}>{row.annual}</td>
                  </tr>
                ))}
                <tr className={styles.rowGrand}>
                  <td colSpan={3}>Annual Maintenance Total (Post Year-1)</td>
                  <td className={styles.right}>{formatInr(MAINTENANCE_TOTAL_ANNUAL)}</td>
                </tr>
                <tr className={styles.rowMaintenance}>
                  <td colSpan={4}>
                    Annual maintenance cloud baseline corresponds to approximately {formatInr(Math.round(MAINTENANCE_COSTS.cloudInfrastructureAnnual / 12))} per month.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Maintenance Inclusions</h3>
            <DeliverableList items={maintenanceInclusions} />
          </article>
        </div>
      ),
    },
    {
      id: "benchmark",
      label: "09",
      title: "Competitive Benchmark",
      summary:
        "JanSamadhan is purpose-built for urban local bodies that central systems and generic CRM vendors underserve, with a strong per-grievance cost advantage.",
      content: (
        <>
          <div className={styles.compareGrid}>
            <article className={styles.compareCard} data-reveal>
              <p className={styles.compareLabel}>CPGRAMS cost / grievance</p>
              <p className={styles.compareValue}>₹83–250</p>
              <p className={styles.compareSub}>National scale estimate · DARPG budget</p>
            </article>
            <article className={cx(styles.compareCard, styles.compareAccent)} data-reveal>
              <p className={styles.compareLabel}>JanSamadhan infra-only / grievance</p>
              <p className={styles.compareValue}>{formatInrTwoDecimals(PRIMARY_INFRA_PER_GRIEVANCE)}</p>
              <p className={styles.compareSub}>1-ward Year-1 software/cloud baseline</p>
            </article>
            <article className={styles.compareCard} data-reveal>
              <p className={styles.compareLabel}>Cost advantage</p>
              <p className={styles.compareValue}>{`${Math.round(MIN_ADVANTAGE_MULTIPLIER)}–${Math.round(MAX_ADVANTAGE_MULTIPLIER)}×`}</p>
              <p className={styles.compareSub}>Based on infra-only per-grievance baseline</p>
            </article>
            <article className={styles.compareCard} data-reveal>
              <p className={styles.compareLabel}>Traditional-vendor delta</p>
              <p className={styles.compareValue}>60–70%</p>
              <p className={styles.compareSub}>Lower estimated cost vs conventional builds</p>
            </article>
          </div>

          <div className={styles.tableWrap} data-reveal>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>CPGRAMS</th>
                  <th>Salesforce Gov Cloud</th>
                  <th>JanSamadhan</th>
                </tr>
              </thead>
              <tbody>
                {capabilityRows.map((row) => (
                  <tr key={row.capability}>
                    <td>{row.capability}</td>
                    <td className={styles.dimmedCell}>{row.cpgrams}</td>
                    <td className={styles.dimmedCell}>{row.salesforce}</td>
                    <td className={styles.positiveCell}>{row.jansamadhan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className={styles.documentFooter}>
            <p>
              All costs exclude GST · USD at ₹83.40 · GCP billed on actual CPU/memory seconds consumed
              <br />
              Ward population: 93,000 (Census 2011 interpolated) · Filing rate: 2% = 1,860 complaints/ward/month
            </p>
            <span className={styles.footerBrand}>Team 404 · JanSamadhan · 2026</span>
          </footer>
        </>
      ),
    },
  ];
}
