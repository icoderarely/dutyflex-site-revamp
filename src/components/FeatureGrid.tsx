import type { LucideIcon } from "lucide-react";

import { FeatureItem } from "./FeatureItem";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  items: Feature[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {items.map((item) => (
        <FeatureItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
