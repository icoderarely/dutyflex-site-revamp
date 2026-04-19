import type { LucideIcon } from "lucide-react";

import { cn } from "../lib/utils";
import { FeatureList } from "./FeatureList";

type CapabilityPoint = {
  title: string;
  description: string;
  bullets: string[];
};

type VisualHighlight = {
  icon: LucideIcon;
  label: string;
};

type VisualStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type TwoColumnFeaturesProps = {
  heading: string;
  description: string;
  points: CapabilityPoint[];
  visualHighlights: VisualHighlight[];
  visualStats: VisualStat[];
  visualTitle: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName: string;
  imageSide?: "left" | "right";
};

export function TwoColumnFeatures({
  heading,
  description,
  points,
  visualHighlights,
  visualStats,
  visualTitle,
  imageSrc,
  imageAlt,
  imageClassName,
  imageSide = "right",
}: TwoColumnFeaturesProps) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={cn(imageSide === "left" && "lg:order-2")}>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          {heading}
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
        <div className="mt-6">
          <FeatureList items={points} />
        </div>
      </div>

      <div className={cn(imageSide === "left" && "lg:order-1")}>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={cn("mx-auto", imageClassName)}
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {visualHighlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2"
              >
                <item.icon className="h-4 w-4 text-slate-700" />
                <span className="text-xs font-medium text-slate-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {visualStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
              >
                <div className="flex items-center gap-2 text-slate-500">
                  <stat.icon className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.2em]">
                    {visualTitle}
                  </span>
                </div>
                <p className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
