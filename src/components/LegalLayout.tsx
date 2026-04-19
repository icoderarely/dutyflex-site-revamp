import { useState, type ReactNode } from "react";

import { Navbar } from "./Navbar";
import { DemoModal } from "./DemoModal";
import { FooterSection } from "../sections/FooterSection";

type TocItem = {
  id: string;
  label: string;
};

type LegalLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  tocItems: TocItem[];
  children: ReactNode;
};

export function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  tocItems,
  children,
}: LegalLayoutProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main className="mx-auto w-full max-w-4xl px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pt-36">
        <header className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-950/5 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Legal
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
          <p className="text-sm font-medium text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        <nav className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-950/5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg border border-slate-200/80 bg-white px-3 py-2 text-sm text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="mt-10 space-y-10 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-950/5 sm:p-8">
          {children}
        </article>
      </main>

      <FooterSection />

      <DemoModal
        open={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
