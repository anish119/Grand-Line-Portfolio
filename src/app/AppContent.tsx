import type { ComponentType } from "react";

import { BottomNav } from "@/components/navigation/BottomNav";
import { sectionOrder } from "@/data/sections";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  AlabastaSection,
  EastBlueSection,
  EggheadSection,
  HeroSection,
  LaughTaleSection,
  ReverseMountainSection,
  Water7Section,
} from "@/sections";
import type { SectionId } from "@/types/portfolio";

const sectionComponents: Record<SectionId, ComponentType> = {
  hero: HeroSection,
  "east-blue": EastBlueSection,
  "reverse-mountain": ReverseMountainSection,
  alabasta: AlabastaSection,
  "water-7": Water7Section,
  egghead: EggheadSection,
  "laugh-tale": LaughTaleSection,
};

export default function AppContent() {
  const { activeIndex, scrollToSection, setSectionRef } = useActiveSection(sectionOrder);
  const eastBlueIndex = sectionOrder.indexOf("east-blue");
  const laughTaleIndex = sectionOrder.indexOf("laugh-tale");

  return (
    <div className="bg-black text-white selection:bg-sky-500/30 selection:text-sky-200">
      <BottomNav activeIndex={activeIndex} onNavigate={scrollToSection} />

      <main>
        {sectionOrder.map((sectionId, index) => {
          const SectionComponent = sectionComponents[sectionId];

          return (
            <section key={sectionId} id={sectionId} ref={(element) => setSectionRef(index, element)}>
              {sectionId === "hero" ? (
                <HeroSection
                  onScrollToEastBlue={() => {
                    if (eastBlueIndex !== -1) {
                      scrollToSection(eastBlueIndex);
                    }
                  }}
                  onScrollToLaughTale={() => {
                    if (laughTaleIndex !== -1) {
                      scrollToSection(laughTaleIndex);
                    }
                  }}
                />
              ) : (
                <SectionComponent />
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}
