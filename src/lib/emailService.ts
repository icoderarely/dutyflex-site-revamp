import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const EMAILJS_ENV_MISSING_CODE = "EMAILJS_ENV_MISSING" as const;

export class EmailServiceConfigError extends Error {
  readonly code = EMAILJS_ENV_MISSING_CODE;

  constructor(message = "Missing EmailJS environment variables") {
    super(message);
    this.name = "EmailServiceConfigError";
  }
}

type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export function isEmailJsConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

function getEmailJsConfig(): EmailJsConfig {
  if (!isEmailJsConfigured()) {
    throw new EmailServiceConfigError();
  }

  return {
    serviceId: SERVICE_ID,
    templateId: TEMPLATE_ID,
    publicKey: PUBLIC_KEY,
  };
}

export function sendEmail(templateParams: Record<string, unknown>) {
  const config = getEmailJsConfig();

  return emailjs.send(
    config.serviceId,
    config.templateId,
    templateParams,
    config.publicKey,
  );
}
