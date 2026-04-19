import { LegalLayout } from "../components/LegalLayout";
import { LegalSection } from "../components/LegalSection";

const tocItems = [
  { id: "about", label: "About DutyFlex" },
  { id: "eligibility", label: "Eligibility" },
  { id: "registration", label: "Account Registration" },
  { id: "service-use", label: "Use of Service" },
  { id: "data-responsibility", label: "Data Responsibilities" },
  { id: "reports", label: "Reports and Invoices" },
  { id: "fees", label: "Fees and Payments" },
  { id: "ip", label: "Intellectual Property" },
  { id: "availability", label: "Service Availability" },
  { id: "termination", label: "Termination" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "updates", label: "Changes to Terms" },
  { id: "law", label: "Governing Law" },
  { id: "contact", label: "Contact" },
];

export function Terms() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      subtitle="These terms govern access to and use of the DutyFlex website, web application, and services."
      lastUpdated="07/02/2026"
      tocItems={tocItems}
    >
      <LegalSection
        id="about"
        title="1. About DutyFlex"
        paragraphs={[
          "DutyFlex is a cloud-based Security Guard Management SaaS platform designed to help security agencies, residential societies, and corporate security teams manage guard deployment, attendance, reporting, and invoicing through a unified dashboard.",
        ]}
      />

      <LegalSection
        id="eligibility"
        title="2. Eligibility"
        paragraphs={[
          "You must be at least 18 years old and legally capable of entering into a binding contract to use DutyFlex.",
          "By using the Service, you represent that you meet these requirements.",
        ]}
      />

      <LegalSection
        id="registration"
        title="3. Account Registration"
        paragraphs={[
          "To access certain features, you must create an account.",
          "DutyFlex is not liable for any loss or damage arising from unauthorized access to your account.",
        ]}
        bullets={[
          "Provide accurate and complete information",
          "Maintain the confidentiality of your login credentials",
          "Be responsible for all activities under your account",
        ]}
      />

      <LegalSection
        id="service-use"
        title="4. Use of the Service"
        paragraphs={[
          "You agree to use DutyFlex only for lawful business purposes.",
          "We reserve the right to suspend or terminate access if these Terms are violated.",
        ]}
        bullets={[
          "Use the Service for any illegal or unauthorized activity",
          "Attempt to gain unauthorized access to systems or data",
          "Upload malicious code, viruses, or harmful content",
          "Misuse or abuse platform features",
        ]}
      />

      <LegalSection
        id="data-responsibility"
        title="5. Data and User Responsibilities"
        paragraphs={[
          "You retain ownership of all data you upload, including employee, client, site, attendance, and billing information.",
          "DutyFlex acts only as a technology platform and is not responsible for employment, payroll, or statutory compliance decisions made using the Service.",
        ]}
        bullets={[
          "Accuracy of the data entered",
          "Ensuring compliance with applicable labor, payroll, and data protection laws",
          "Obtaining necessary consents from employees and clients",
        ]}
      />

      <LegalSection
        id="reports"
        title="6. Reports and Invoices"
        paragraphs={[
          "DutyFlex provides tools to generate attendance reports and invoices based on data entered by users.",
        ]}
        bullets={[
          "Generated reports and invoices are system-assisted outputs",
          "DutyFlex does not guarantee financial, legal, or tax accuracy",
          "Users must review and validate all reports before use or sharing",
        ]}
      />

      <LegalSection
        id="fees"
        title="7. Subscription, Fees and Payments"
        paragraphs={[
          "Some features of DutyFlex may require a paid subscription.",
        ]}
        bullets={[
          "Pricing details will be communicated separately or displayed on the platform",
          "All fees are non-refundable unless explicitly stated",
          "Failure to pay may result in suspension or termination of access",
          "DutyFlex may revise pricing with prior notice",
        ]}
      />

      <LegalSection
        id="ip"
        title="8. Intellectual Property"
        paragraphs={[
          "All intellectual property related to DutyFlex, including software, design, logos, and content, is owned by DutyFlex.",
          "You are granted a limited, non-exclusive, non-transferable license to use the Service during your subscription period.",
          "You may not copy, modify, distribute, or reverse engineer any part of the Service.",
        ]}
      />

      <LegalSection
        id="availability"
        title="9. Service Availability"
        paragraphs={[
          "While we strive for high availability, DutyFlex does not guarantee uninterrupted or error-free service.",
          "We are not liable for downtime, data loss, or business interruption.",
        ]}
        bullets={[
          "Perform maintenance or updates",
          "Temporarily suspend access due to technical issues",
        ]}
      />

      <LegalSection
        id="termination"
        title="10. Termination"
        paragraphs={[
          "You may stop using DutyFlex at any time.",
          "Upon termination, access to your account and data may be restricted or deleted as per our data retention policies.",
        ]}
        bullets={[
          "You violate these Terms",
          "Required payments are overdue",
          "Continued use poses legal or security risks",
        ]}
      />

      <LegalSection
        id="liability"
        title="11. Limitation of Liability"
        paragraphs={[
          "To the maximum extent permitted by law, DutyFlex shall not be liable for indirect, incidental, or consequential damages, loss of profits, data, or business opportunities, or errors arising from user-provided data.",
          "Use of the Service is at your own risk.",
        ]}
      />

      <LegalSection
        id="indemnification"
        title="12. Indemnification"
        paragraphs={[
          "You agree to indemnify and hold DutyFlex harmless from any claims, damages, or liabilities arising from:",
        ]}
        bullets={[
          "Your use of the Service",
          "Violation of laws or third-party rights",
          "Data provided by you",
        ]}
      />

      <LegalSection
        id="updates"
        title="13. Changes to These Terms"
        paragraphs={[
          "We may update these Terms from time to time.",
          "Changes will be effective upon posting on the website.",
          "Continued use of DutyFlex after updates constitutes acceptance of the revised Terms.",
        ]}
      />

      <LegalSection
        id="law"
        title="14. Governing Law"
        paragraphs={[
          "These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles.",
        ]}
      />

      <LegalSection
        id="contact"
        title="15. Contact Us"
        paragraphs={[
          "If you have questions about these Terms, please contact us at:",
        ]}
      >
        <div className="space-y-2 text-base leading-8 text-slate-600">
          <p>
            Email:{" "}
            <a
              href="mailto:support@dutyflex.com"
              className="text-teal-700 hover:text-teal-800"
            >
              support@dutyflex.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.dutyflex.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800"
            >
              https://www.dutyflex.com
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
