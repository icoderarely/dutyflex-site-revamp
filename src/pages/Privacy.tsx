import { LegalLayout } from "../components/LegalLayout";
import { LegalSection } from "../components/LegalSection";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Data" },
  { id: "data-ownership", label: "Data Ownership" },
  { id: "cookies", label: "Cookies" },
  { id: "sharing", label: "Data Sharing" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "User Rights" },
  { id: "children", label: "Children" },
  { id: "transfers", label: "International Transfers" },
  { id: "updates", label: "Policy Updates" },
  { id: "contact", label: "Contact" },
];

export function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This policy explains how DutyFlex collects, uses, and safeguards data when you use our website, web application, and services."
      lastUpdated="07/02/2026"
      tocItems={tocItems}
    >
      <LegalSection
        id="introduction"
        title="Introduction"
        paragraphs={[
          'DutyFlex ("we", "our", or "us") respects your privacy and is committed to protecting the personal data of our users.',
          "By using DutyFlex, you agree to the collection and use of information in accordance with this Privacy Policy.",
        ]}
      />

      <LegalSection
        id="information-we-collect"
        title="Information We Collect"
        paragraphs={[
          "When you register or use DutyFlex, you may provide personal and business information.",
        ]}
      >
        <h3 className="text-lg font-semibold text-slate-900">
          Information You Provide
        </h3>
        <ul className="space-y-2 pl-5 text-base leading-8 text-slate-600 list-disc marker:text-slate-400">
          <li>Name, email address, phone number</li>
          <li>Company or organization details</li>
          <li>Login credentials</li>
          <li>
            Client, site, and employee information (including attendance and
            deployment data)
          </li>
          <li>Billing and invoicing details</li>
        </ul>

        <h3 className="pt-2 text-lg font-semibold text-slate-900">
          Automatically Collected Information
        </h3>
        <ul className="space-y-2 pl-5 text-base leading-8 text-slate-600 list-disc marker:text-slate-400">
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Log data, usage patterns, and access timestamps</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </LegalSection>

      <LegalSection
        id="how-we-use"
        title="How We Use Your Information"
        bullets={[
          "Provide, operate, and maintain the Service",
          "Manage user accounts and authentication",
          "Generate reports and invoices based on user input",
          "Improve platform performance and features",
          "Communicate service updates, alerts, and support responses",
          "Ensure security, prevent fraud, and enforce our Terms",
        ]}
      />

      <LegalSection
        id="data-ownership"
        title="Data Ownership and Responsibility"
        bullets={[
          "You retain ownership of all business and employee data uploaded to DutyFlex",
          "DutyFlex acts as a data processor, and you act as the data controller",
          "You are responsible for ensuring lawful collection and use of employee and client data, including obtaining required consents",
        ]}
      />

      <LegalSection
        id="cookies"
        title="Cookies and Tracking Technologies"
        paragraphs={[
          "DutyFlex uses cookies and similar technologies to maintain sessions, improve user experience, and analyze usage trends.",
          "You can control cookie preferences through your browser settings. Disabling cookies may affect certain features.",
        ]}
      />

      <LegalSection
        id="sharing"
        title="Data Sharing and Disclosure"
        paragraphs={["We do not sell or rent your personal data."]}
        bullets={[
          "With trusted service providers (hosting, analytics, email services) under confidentiality agreements",
          "When required by law or government authorities",
          "To protect our legal rights, users, or the security of the Service",
          "In case of a merger, acquisition, or business transfer",
        ]}
      />

      <LegalSection
        id="security"
        title="Data Security"
        paragraphs={[
          "We implement reasonable administrative, technical, and organizational measures to protect your data.",
        ]}
        bullets={[
          "Secure authentication mechanisms",
          "Access controls",
          "Encrypted communication where applicable",
        ]}
      >
        <p className="text-base leading-8 text-slate-600">
          However, no system is 100% secure, and we cannot guarantee absolute
          data security.
        </p>
      </LegalSection>

      <LegalSection
        id="retention"
        title="Data Retention"
        paragraphs={[
          "We retain personal and business data only as long as your account is active, as required to provide the Service, or as required by legal and regulatory obligations.",
          "Upon account termination, data may be deleted or anonymized as per internal retention policies.",
        ]}
      />

      <LegalSection
        id="rights"
        title="User Rights"
        paragraphs={[
          "Depending on applicable laws, you may have rights regarding your personal data.",
        ]}
        bullets={[
          "Access your personal data",
          "Request correction or deletion",
          "Withdraw consent (where applicable)",
          "Request data export",
        ]}
      >
        <p className="text-base leading-8 text-slate-600">
          Requests can be made by contacting us at the email listed below.
        </p>
      </LegalSection>

      <LegalSection
        id="children"
        title="Children's Privacy"
        paragraphs={[
          "DutyFlex is not intended for use by individuals under the age of 18.",
          "We do not knowingly collect personal data from minors.",
        ]}
      />

      <LegalSection
        id="transfers"
        title="International Data Transfers"
        paragraphs={[
          "Your data may be stored or processed on servers located outside your country of residence.",
          "By using DutyFlex, you consent to such transfers in accordance with this Privacy Policy.",
        ]}
      />

      <LegalSection
        id="updates"
        title="Changes to This Privacy Policy"
        paragraphs={[
          "We may update this Privacy Policy from time to time.",
          'Changes will be posted on this page with an updated "Last updated" date.',
          "Continued use of the Service constitutes acceptance of the revised policy.",
        ]}
      />

      <LegalSection
        id="contact"
        title="Contact Us"
        paragraphs={[
          "If you have questions, concerns, or requests regarding this Privacy Policy, contact us at:",
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
