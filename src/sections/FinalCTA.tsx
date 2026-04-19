import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/button";

type FinalCTAProps = {
  onOpenDemo: () => void;
};

export function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section id="cta" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-14 text-center text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:px-10 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
              Final Step
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to simplify your security operations?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              See how DutyFlex helps your team manage scheduling, attendance,
              billing, and payroll from one connected platform.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                type="button"
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-100"
                onClick={onOpenDemo}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
