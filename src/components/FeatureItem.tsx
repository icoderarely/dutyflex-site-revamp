import type { LucideIcon } from "lucide-react";

import { cn } from "../lib/utils";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureItem({
  icon: Icon,
  title,
  description,
  className,
}: FeatureItemProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-slate-200/90 bg-white/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300/80 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]",
        className,
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-teal-700 transition-colors duration-200 group-hover:border-teal-300 group-hover:bg-teal-50 group-hover:text-teal-800">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
