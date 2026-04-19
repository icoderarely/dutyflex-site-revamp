import { Container } from "../components/Container";
import { FeatureGrid } from "../components/FeatureGrid";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { coreFeatures } from "../data/landing";

export function CoreFeatures() {
  return (
    <section id="features" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Core Features"
            title="The essentials for modern guard operations"
            description="DutyFlex gives security teams one connected system for live monitoring, verified attendance, invoicing, payroll, and compliance records."
          />
        </Reveal>

        <Reveal delay={90} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_34%)]" />
            <div className="relative">
              <FeatureGrid items={coreFeatures} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
