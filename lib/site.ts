export const brandName = "FreightAxis";
export const siteUrl = "https://www.freightaxis.io";
export const appUrl = "https://app.freightaxis.io";
export const contactPhoneDisplay = "(209) 214-9664";
export const contactPhoneE164 = "+12092149664";

export const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-brand bg-brand px-5 py-3 text-sm font-semibold text-graphite shadow-soft transition hover:border-brand-deep hover:bg-brand-deep hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite";
export const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-silver transition hover:border-brand/30 hover:bg-brand/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite";
export const ghostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-transparent bg-transparent px-5 py-3 text-sm font-semibold text-steel transition hover:text-silver focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite";

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export type PreviewMetric = {
  label: string;
  value: string;
};

export type PreviewRow = {
  name: string;
  detail: string;
  state: string;
};

export type PlatformModule = {
  slug: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  previewTitle: string;
  metrics: PreviewMetric[];
  rows: PreviewRow[];
  footer: string;
};

export const heroHighlights = [
  "Dispatch loads from one live board",
  "Guide drivers through every stop and document handoff",
  "Close invoices and pay statements without spreadsheet cleanup",
];

export const heroMetrics = [
  { value: "1", label: "shared platform for dispatch, billing, and driver pay" },
  { value: "5", label: "core workflows unified in one operating system" },
  { value: "24/7", label: "visibility into active freight and exceptions" },
];

export const platformModules: PlatformModule[] = [
  {
    slug: "dispatch-board",
    label: "Dispatch board",
    title: "Keep every active load visible from a single dispatch board.",
    description:
      "Move faster with a live board that shows the next action, current risk, and assignment status without bouncing between tabs or spreadsheets.",
    points: [
      "Track pickups, deliveries, and exceptions on one timeline",
      "Surface at-risk loads before they become phone calls",
      "Give dispatchers a shared operating picture across the fleet",
    ],
    previewTitle: "Today on the board",
    metrics: [
      { label: "Active loads", value: "18" },
      { label: "At risk", value: "2" },
      { label: "Available drivers", value: "6" },
    ],
    rows: [
      { name: "DAL to MEM", detail: "Pickup 10:15 AM", state: "Assigned" },
      { name: "PHX to LAX", detail: "Delivery 1:20 PM", state: "In transit" },
      { name: "ATL to CLT", detail: "POD pending", state: "Needs review" },
    ],
    footer: "2 documents waiting for approval",
  },
  {
    slug: "driver-workflow",
    label: "Driver workflow",
    title: "Give drivers a clear workflow from dispatch to proof of delivery.",
    description:
      "Standardize tasks, notes, and document collection so your team always knows what has been completed and what still needs attention.",
    points: [
      "Push stop-level instructions and updates in sequence",
      "Capture notes, delays, and POD requirements in one place",
      "Reduce handoff mistakes between dispatch and operations",
    ],
    previewTitle: "Driver task queue",
    metrics: [
      { label: "Stops today", value: "43" },
      { label: "Docs uploaded", value: "31" },
      { label: "Exceptions", value: "4" },
    ],
    rows: [
      { name: "Load 2448", detail: "Arrive shipper and upload BOL", state: "In progress" },
      { name: "Load 2412", detail: "Confirm ETA with dispatch", state: "Queued" },
      { name: "Load 2399", detail: "Collect signed POD", state: "Required" },
    ],
    footer: "Every task is timestamped for cleaner handoffs",
  },
  {
    slug: "invoicing",
    label: "Invoicing",
    title: "Turn completed freight into accurate invoices without back-office rework.",
    description:
      "FreightAxis brings together load details, customer records, and required documents so invoicing can happen right after delivery instead of days later.",
    points: [
      "Generate invoices from confirmed load and rate details",
      "Flag missing paperwork before billing goes out",
      "Shorten time from delivery to invoice release",
    ],
    previewTitle: "Billing queue",
    metrics: [
      { label: "Ready to bill", value: "12" },
      { label: "Held for docs", value: "3" },
      { label: "Released today", value: "9" },
    ],
    rows: [
      { name: "Atlas Foods", detail: "Invoice #10482", state: "Ready" },
      { name: "Westport Retail", detail: "Waiting on POD", state: "Hold" },
      { name: "Summit Metals", detail: "Invoice #10479", state: "Sent" },
    ],
    footer: "Document checks happen before the invoice leaves your team",
  },
  {
    slug: "driver-pay-statements",
    label: "Driver pay statements",
    title: "Create driver pay statements from operational data you already trust.",
    description:
      "Use completed trips, approved adjustments, and required documents to generate consistent statements without a separate spreadsheet process.",
    points: [
      "Compile pay details directly from dispatched and completed work",
      "Reduce disputes with clearer line-item visibility",
      "Help payroll close faster with fewer manual reconciliations",
    ],
    previewTitle: "Upcoming driver pay",
    metrics: [
      { label: "Statements drafted", value: "26" },
      { label: "Adjustments", value: "5" },
      { label: "Ready to review", value: "21" },
    ],
    rows: [
      { name: "Driver - M. Carter", detail: "Linehaul + stop pay", state: "Ready" },
      { name: "Driver - A. Lopez", detail: "Detention pending approval", state: "Review" },
      { name: "Driver - D. Brooks", detail: "Submitted for payroll", state: "Approved" },
    ],
    footer: "Approved adjustments stay attached to each statement",
  },
  {
    slug: "customer-management",
    label: "Customer management",
    title: "Keep customer records, billing rules, and account context connected to the work.",
    description:
      "FreightAxis centralizes customer details so dispatchers and billing teams are working from the same instructions, contacts, and service expectations.",
    points: [
      "Store customer contacts, billing preferences, and account notes together",
      "Standardize service expectations across repeat lanes and accounts",
      "Support faster responses for both operations and finance teams",
    ],
    previewTitle: "Customer view",
    metrics: [
      { label: "Active accounts", value: "84" },
      { label: "Special billing rules", value: "19" },
      { label: "Open issues", value: "7" },
    ],
    rows: [
      { name: "North River Foods", detail: "Requires POD before billing", state: "Account rule" },
      { name: "Blue Ridge Freight", detail: "Preferred delivery window", state: "Customer note" },
      { name: "Capital Steel", detail: "Collections status current", state: "Finance" },
    ],
    footer: "Every team sees the same customer context before acting",
  },
];

export const featurePillars = [
  {
    title: "One load record from dispatch to billing",
    description:
      "Connect load activity, customer information, documents, invoices, and pay statements so teams stop re-entering the same data.",
  },
  {
    title: "Driver workflow that mirrors the road",
    description:
      "Guide drivers through assignments, stop tasks, delays, and document submission with a workflow that is easy to follow on busy days.",
  },
  {
    title: "Billing control without manual cleanup",
    description:
      "Move from completed delivery to invoice draft with the right documents and account rules already attached to the record.",
  },
  {
    title: "Pay statements grounded in completed work",
    description:
      "Build driver compensation from approved trips, activity, and adjustments so payroll reviews are faster and more consistent.",
  },
  {
    title: "Customer management tied to operations",
    description:
      "Keep account-specific instructions, billing preferences, and service notes close to the freight instead of spread across inboxes.",
  },
  {
    title: "Production-safe workflows for growing teams",
    description:
      "Use clear statuses, shared visibility, and consistent handoffs so the system stays understandable as your team scales.",
  },
];

export const operatingPrinciples = [
  {
    title: "Built for daily operators",
    description:
      "Every screen is organized around the next operational decision, not around abstract configuration.",
  },
  {
    title: "Fast implementation path",
    description:
      "Start with dispatch and billing fundamentals, then layer in driver workflow and pay statement controls as the rollout expands.",
  },
  {
    title: "Simple enough to maintain",
    description:
      "The site and messaging are intentionally straightforward, making future edits safer for your team.",
  },
];

export type PricingTier = {
  name: string;
  description: string;
  price: string;
  emphasis?: boolean;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Dispatch Core",
    description:
      "For teams centralizing live dispatch, customer records, and shipment visibility in one operating layer.",
    price: "Custom quote",
    features: [
      "Dispatch board and shipment workflow",
      "Customer account and contact management",
      "Operational visibility for growing fleets",
      "Email-based implementation planning",
    ],
  },
  {
    name: "Operations Suite",
    description:
      "For teams that want dispatch, driver workflow, invoicing, and pay statements connected end to end.",
    price: "Custom quote",
    emphasis: true,
    features: [
      "Everything in Dispatch Core",
      "Driver workflow and document capture",
      "Invoice generation and billing queue",
      "Driver pay statement preparation",
    ],
  },
  {
    name: "Enterprise Rollout",
    description:
      "For larger or multi-terminal operations that need rollout planning, process mapping, and deeper account support.",
    price: "Custom quote",
    features: [
      "Everything in Operations Suite",
      "Rollout planning across teams or terminals",
      "Priority implementation coordination",
      "Commercial scoping for complex workflows",
    ],
  },
];

export const pricingIncludes = [
  "Mobile-responsive web experience",
  "Role-friendly operations layout",
  "App Router codebase with TypeScript and Tailwind CSS",
  "Simple marketing pages that are safe to extend",
];

export type ContactAction = {
  label: string;
  href: string;
};

export type ContactChannel = {
  title: string;
  description: string;
  actions: ContactAction[];
  number?: string;
};

export const contactChannels = [
  {
    title: "New business",
    description: "Talk through your rollout scope, team structure, and go-live goals.",
    number: contactPhoneDisplay,
    actions: [
      { label: "Call sales", href: `tel:${contactPhoneE164}` },
      { label: "Text sales", href: `sms:${contactPhoneE164}` },
    ],
  },
  {
    title: "Customer support",
    description: "Reach the team for account help, rollout questions, or workflow support.",
    number: contactPhoneDisplay,
    actions: [
      { label: "Call support", href: `tel:${contactPhoneE164}` },
      { label: "Text support", href: `sms:${contactPhoneE164}` },
    ],
  },
  {
    title: "Existing users",
    description: "Go straight to the FreightAxis application to manage daily operations.",
    actions: [{ label: "Open login", href: appUrl }],
  },
] satisfies ContactChannel[];

export const contactChecklist = [
  "Fleet size, dispatch team size, and billing workflow",
  "Whether you need dispatch only or full operations plus pay statements",
  "Current tools, spreadsheets, or process pain points",
  "Desired implementation timeline and primary internal owner",
];
