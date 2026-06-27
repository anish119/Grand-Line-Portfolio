import { motion } from "motion/react";

import { SectionBackground } from "@/components/portfolio/SectionBackground";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SectionShell } from "@/components/portfolio/SectionShell";
import { TimelineItem } from "@/components/portfolio/TimelineItem";
import { experienceContent } from "@/data/experience";

export function AlabastaSection() {
  return (
    <SectionShell className="py-32 flex items-center bg-[#0a0500]">
      <SectionBackground
        imageUrl={experienceContent.backgroundImage}
        imageClassName="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen"
        overlays={[
          "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10",
          "absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10",
        ]}
      />

      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <SectionHeader
            label={experienceContent.label}
            labelClassName="font-['Inter'] text-amber-500 tracking-[0.2em] text-xs uppercase font-medium"
            lineClassName="bg-amber-500"
            headingClassName="text-5xl md:text-7xl font-['Playfair_Display'] text-white leading-tight"
            emphasisClassName="italic text-amber-200"
            title={experienceContent.title}
          />
        </motion.div>

        <div className="space-y-12 md:space-y-24 border-l border-white/10 pl-8 md:pl-16 relative">
          {experienceContent.items.map((experience, index) => (
            <TimelineItem key={`${experience.role}-${experience.company}`} experience={experience} delay={index * 0.2} />
          ))}
        </div>
      </SectionContent>
    </SectionShell>
  );
}
