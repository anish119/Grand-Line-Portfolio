import { motion } from "motion/react";

import { SectionBackground } from "@/components/portfolio/SectionBackground";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SectionShell } from "@/components/portfolio/SectionShell";
import { aboutContent } from "@/data/about";

export function EastBlueSection() {
  return (
    <SectionShell className="py-32 flex items-center bg-black">
      <SectionBackground
        imageUrl={aboutContent.backgroundImage}
        imageClassName="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        overlays={[
          "absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10",
          "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10",
        ]}
      />

      <SectionContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <SectionHeader
            label={aboutContent.label}
            labelClassName="font-['Inter'] text-sky-400 tracking-[0.2em] text-xs uppercase font-medium"
            lineClassName="bg-sky-400"
            headingClassName="text-5xl md:text-7xl font-['Playfair_Display'] text-white leading-tight mb-8"
            emphasisClassName="italic text-sky-200"
            title={aboutContent.title}
          />

          <div className="space-y-6 text-lg md:text-xl font-['Inter'] text-white/70 font-light leading-relaxed">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <span className="block text-sky-400 text-3xl font-['Inter'] font-light">{stat.value}</span>
                <span className="block font-['Inter'] text-xs tracking-widest text-white/50 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionContent>
    </SectionShell>
  );
}
