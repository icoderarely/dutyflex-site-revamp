import {
  BellRing,
  BarChart3,
  BriefcaseBusiness,
  ClipboardList,
  FileSpreadsheet,
  Fingerprint,
  Globe,
  LayoutDashboard,
  MapPinned,
  ReceiptText,
  Shield,
  ShieldCheck,
  SmartphoneNfc,
  UsersRound,
  WalletCards,
  Smartphone,
} from "lucide-react";

export const navigation = [
  { label: "Features", href: "#features" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics = [
  { value: "70%", label: "cost reduction vs manual workflows" },
  { value: "24/7", label: "attendance visibility across sites" },
  { value: "100%", label: "audit-ready activity traceability" },
];

export const coreFeatures = [
  {
    icon: LayoutDashboard,
    title: "Centralized operations dashboard",
    description:
      "Manage sites, shifts, and guard activity from one live command view.",
  },
  {
    icon: BarChart3,
    title: "Real-time attendance tracking",
    description:
      "Track guard attendance and site coverage in real time with export-ready logs.",
  },
  {
    icon: ReceiptText,
    title: "Automated invoicing and billing",
    description:
      "Convert verified attendance records into invoice-ready client billing automatically.",
  },
  {
    icon: WalletCards,
    title: "Payroll and payslip automation",
    description:
      "Prepare payroll from attendance data and distribute digital payslips without manual calculations.",
  },
  {
    icon: Smartphone,
    title: "QR and GPS guard check-ins",
    description:
      "Validate every check-in with geofencing and QR checkpoints to prevent proxy attendance.",
  },
  {
    icon: ShieldCheck,
    title: "Audit logs and compliance tracking",
    description:
      "Keep a complete history of attendance and admin actions for compliance and dispute resolution.",
  },
];

export const platformCapabilities = {
  web: {
    title: "Web Dashboard Capabilities",
    description:
      "A central workspace for operations, HR, and finance teams managing multiple client sites.",
    points: [
      {
        title: "Operational visibility",
        description:
          "Monitor shift coverage and attendance consistency across all client locations.",
        bullets: [
          "Dashboard insights and trend analytics",
          "Workforce deployment status by site",
          "Live attendance tracking and export",
        ],
      },
      {
        title: "Administrative control",
        description:
          "Control access, client onboarding, and site setup with role-based permissions.",
        bullets: [
          "Admin panel with role-based permissions",
          "Client onboarding and lifecycle management",
          "Client-site mapping and configuration",
        ],
      },
      {
        title: "Business workflows",
        description:
          "Generate reporting, billing, and payroll inputs directly from verified attendance.",
        bullets: [
          "Invoice-ready attendance reporting",
          "Payroll preparation and reconciliation",
          "Compliance-oriented audit trails",
        ],
      },
    ],
  },
  mobile: {
    title: "Mobile App Capabilities",
    description:
      "Built for guards and field supervisors who need fast, verifiable workflows on duty.",
    points: [
      {
        title: "Verified attendance in the field",
        description:
          "Record attendance at the correct place and time with minimal effort for guards.",
        bullets: [
          "GPS-verified attendance tracking",
          "QR checkpoint scanning",
          "Attendance logs and history access",
        ],
      },
      {
        title: "Daily operational context",
        description:
          "Give teams site and assignment context without routing every update through dispatch.",
        bullets: [
          "Site information and assignment details",
          "HR profile and role information",
          "Structured shift records for accountability",
        ],
      },
      {
        title: "Adoption across teams",
        description:
          "Support multilingual teams with a clean interface that is easy to onboard quickly.",
        bullets: [
          "Multi-language interface support",
          "Low-friction daily usage",
          "Consistent workflows across sites",
        ],
      },
    ],
  },
};

export const testimonials = [
  {
    quote: "Track deployments across sites in real time from one dashboard.",
    name: "Operations Teams",
    role: "Central monitoring",
  },
  {
    quote:
      "Turn attendance records into invoice-ready and payroll-ready reports automatically.",
    name: "Finance and HR",
    role: "Billing and payroll workflows",
  },
  {
    quote:
      "Maintain compliance with audit logs for every attendance and admin action.",
    name: "Compliance Teams",
    role: "Audit traceability",
  },
];

export const ctaPoints = [
  "Cloud-based deployment for multi-site security teams",
  "Attendance to billing and payroll in one workflow",
  "Designed for residential and corporate security operations",
];

export const capabilityVisualHighlights = {
  web: [
    { icon: BriefcaseBusiness, label: "Central operations" },
    { icon: MapPinned, label: "Client-site mapping" },
    { icon: BellRing, label: "Live attendance alerts" },
  ],
  mobile: [
    { icon: SmartphoneNfc, label: "QR checkpoints" },
    { icon: Fingerprint, label: "GPS verification" },
    { icon: Globe, label: "Multi-language support" },
  ],
};

export const capabilityVisualStats = {
  web: [
    { icon: ClipboardList, value: "Real-Time", label: "attendance overview" },
    { icon: FileSpreadsheet, value: "Export", label: "invoice-ready logs" },
  ],
  mobile: [
    { icon: Shield, value: "Verified", label: "GPS and QR check-ins" },
    { icon: UsersRound, value: "Field-Ready", label: "daily guard workflows" },
  ],
};

export const footerLinks = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];
