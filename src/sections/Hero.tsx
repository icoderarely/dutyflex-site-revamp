import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { DUTYFLEX_HERO_IMAGE_URL, HERO_IMAGE_CLASSES } from "../data/assets";
import { heroMetrics } from "../data/landing";

type HeroProps = {
  onOpenDemo: () => void;
};

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <Container className="grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <Badge variant="accent" className="w-fit">
              Built for Modern Security Teams
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-2xl font-display text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                A cloud-based Security Guard Management SaaS platform.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                DutyFlex helps security companies, residential teams, and
                corporate security operations run daily workflows from one
                unified dashboard.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" type="button" onClick={onOpenDemo}>
              Book a demo today
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#features">View product features</a>
            </Button>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <li
                key={metric.label}
                className="rounded-3xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm shadow-slate-950/5"
              >
                <p className="text-2xl font-semibold tracking-tight text-slate-950">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {metric.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-slate-200/70 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="flex justify-center overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2">
              <img
                src={DUTYFLEX_HERO_IMAGE_URL}
                alt="DutyFlex hero dashboard preview"
                className={HERO_IMAGE_CLASSES}
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-300">Workforce deployment</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  Live
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Track attendance and deployment health across every active
                  site.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">
                  Workflow snapshot
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center justify-between gap-3">
                    <span>Attendance monitoring</span>
                    <span className="font-medium text-slate-950">Active</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span>Billing automation</span>
                    <span className="font-medium text-slate-950">Enabled</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span>Audit logs</span>
                    <span className="font-medium text-slate-950">Ready</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
