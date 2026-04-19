import { useState } from "react";

import { DemoModal } from "../components/DemoModal";
import { Navbar } from "../components/Navbar";
import { ContactSection } from "../sections/ContactSection";
import { CoreFeatures } from "../sections/CoreFeatures";
import { FinalCTA } from "../sections/FinalCTA";
import { FooterSection } from "../sections/FooterSection";
import { Hero } from "../sections/Hero";
import { PlatformCapabilities } from "../sections/PlatformCapabilities";
import { TestimonialsSection } from "../sections/TestimonialsSection";

export function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />
      <main>
        <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />
        <CoreFeatures />
        <PlatformCapabilities />
        <TestimonialsSection />
        <FinalCTA onOpenDemo={() => setIsDemoModalOpen(true)} />
        <ContactSection />
      </main>
      <FooterSection />

      <DemoModal
        open={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
