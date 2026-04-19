import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Card, CardContent } from "../components/ui/card";
import { testimonials } from "../data/landing";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Proof"
            title="Outcomes teams expect from DutyFlex"
            description="Each capability is designed to reduce manual admin, improve coverage visibility, and keep compliance records audit-ready."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 70}>
              <Card className="h-full">
                <CardContent className="space-y-6 pt-6">
                  <p className="text-base leading-7 text-slate-700">
                    “{testimonial.quote}”
                  </p>
                  <div>
                    <p className="font-semibold text-slate-950">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
