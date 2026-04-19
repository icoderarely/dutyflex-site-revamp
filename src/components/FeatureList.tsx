import { CheckCircle2 } from "lucide-react";

type FeatureListItem = {
  title: string;
  description: string;
  bullets: string[];
};

type FeatureListProps = {
  items: FeatureListItem[];
};

export function FeatureList({ items }: FeatureListProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-950/5"
        >
          <h3 className="text-lg font-semibold tracking-tight text-slate-950">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {item.description}
          </p>
          <ul className="mt-4 space-y-2">
            {item.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
