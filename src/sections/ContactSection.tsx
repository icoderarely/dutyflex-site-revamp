import { Mail } from "lucide-react";

import { ContactForm } from "../components/ContactForm";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.1)] backdrop-blur sm:p-8 lg:grid-cols-2 lg:p-10">
            <div className="space-y-5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <Mail className="h-7 w-7" />
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Get a free consultancy from our expert right now!
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-600">
                  Tell us about your operations and we will guide you on the
                  best way to digitize attendance, reporting, and guard
                  management workflows.
                </p>
              </div>
            </div>

            <div className="self-start rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm sm:p-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
