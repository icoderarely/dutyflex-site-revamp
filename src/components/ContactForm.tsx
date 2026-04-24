import { type FormEvent, useState } from "react";

import { EMAILJS_ENV_MISSING_CODE, sendEmail } from "../lib/emailService";
import { Button } from "./ui/button";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
};

const NAME_REGEX = /^[A-Za-z ]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

function getContactFormError(values: ContactFormValues) {
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();

  if (!name) {
    return "Please enter your name.";
  }

  if (!NAME_REGEX.test(name)) {
    return "Name can only contain letters and spaces.";
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!PHONE_REGEX.test(phone)) {
    return "Phone number must be exactly 10 digits.";
  }

  return null;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setErrorMessage(null);
    setSuccessMessage(null);

    const validationError = getContactFormError(values);

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail({
        type: "Contact Form",
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
      });

      setValues(initialValues);
      setSuccessMessage("Thank you. Your message has been sent successfully.");
    } catch (error) {
      if (
        import.meta.env.DEV &&
        error &&
        typeof error === "object" &&
        "code" in error &&
        error.code === EMAILJS_ENV_MISSING_CODE
      ) {
        setErrorMessage("Email service is not configured.");
      } else {
        setErrorMessage(
          "Unable to submit your request right now. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          Talk to our team
        </h3>
        <p className="text-sm leading-6 text-slate-600">
          Fill in your details and our consultants will reach out within one
          business day.
        </p>
      </div>

      <div className="h-px w-full bg-slate-200" />

      <label className="block space-y-1.5 text-sm font-medium text-slate-700">
        <span>Name</span>
        <input
          required
          type="text"
          name="name"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="John Doe"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
        />
      </label>

      <label className="block space-y-1.5 text-sm font-medium text-slate-700">
        <span>Email</span>
        <input
          required
          type="email"
          name="email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="john@company.com"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
        />
      </label>

      <label className="block space-y-1.5 text-sm font-medium text-slate-700">
        <span>Phone</span>
        <input
          required
          type="tel"
          name="phone"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
          inputMode="numeric"
          pattern="\\d{10}"
          maxLength={10}
          placeholder="8888888888"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
        />
      </label>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Get Free Consultancy"}
      </Button>

      {errorMessage ? (
        <p className="text-sm text-red-600" role="alert" aria-live="polite">
          {errorMessage}
        </p>
      ) : null}

      {successMessage ? (
        <p className="text-sm text-teal-700" role="status" aria-live="polite">
          {successMessage}
        </p>
      ) : null}

      <p className="text-xs text-slate-500">
        By submitting, you agree to be contacted about DutyFlex services.
      </p>
    </form>
  );
}
