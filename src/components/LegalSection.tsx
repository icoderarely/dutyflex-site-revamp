import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  children?: ReactNode;
};

export function LegalSection({
  id,
  title,
  paragraphs,
  bullets,
  children,
}: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>

      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8 text-slate-600">
          {paragraph}
        </p>
      ))}

      {bullets?.length ? (
        <ul className="space-y-2 pl-5 text-base leading-8 text-slate-600 list-disc marker:text-slate-400">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {children}
    </section>
  );
}
