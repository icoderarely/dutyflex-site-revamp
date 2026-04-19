import { useState } from "react";

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

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setValues(initialValues);
      }}
      noValidate
    >
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
          placeholder="+91 8888888888"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
        />
      </label>

      <Button type="submit" size="lg" className="w-full">
        Get Free Consultancy
      </Button>

      <p className="text-xs text-slate-500">
        By submitting, you agree to be contacted about DutyFlex services.
      </p>
    </form>
  );
}
