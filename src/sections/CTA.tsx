import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/button";
import { ctaPoints } from "../data/landing";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-12 text-white shadow-[0_24px_90px_rgba(15,23,42,0.22)] sm:px-10 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                  Book a demo
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Replace manual guard operations with one connected platform.
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  See how DutyFlex handles scheduling, attendance, payroll-ready
                  reports, and invoicing in a single operational workflow.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <ul className="space-y-4 text-sm text-slate-200">
                  {ctaPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-950 hover:bg-slate-100"
                  >
                    <a href="mailto:hello@dutyflex.com">
                      Contact now <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="#capabilities">View capabilities</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
