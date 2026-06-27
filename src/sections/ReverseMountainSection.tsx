import { motion } from "motion/react";

import { GlassCard } from "@/components/portfolio/GlassCard";
import { SectionBackground } from "@/components/portfolio/SectionBackground";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SectionShell } from "@/components/portfolio/SectionShell";
import { skillsContent } from "@/data/skills";

export function ReverseMountainSection() {
  return (
    <SectionShell className="py-20 md:py-32 flex items-center bg-black">
      <SectionBackground
        imageUrl={skillsContent.backgroundImage}
        imageClassName="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen"
        overlays={["absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10"]}
      />

      <SectionContent className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/3"
        >
          <SectionHeader
            label={skillsContent.label}
            labelClassName="font-['Inter'] text-slate-400 tracking-[0.2em] text-xs uppercase font-medium"
            lineClassName="bg-slate-400"
            headingClassName="text-4xl md:text-7xl font-['Playfair_Display'] text-white leading-tight mb-8"
            emphasisClassName="italic text-slate-300"
            title={skillsContent.title}
          />

          <p className="text-base md:text-lg font-['Inter'] text-white/60 font-light leading-relaxed">{skillsContent.description}</p>
        </motion.div>

        <div className="md:w-2/3 flex flex-wrap items-start justify-center md:justify-start gap-x-8 gap-y-10 w-full">
          {skillsContent.groups.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.group}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:flex-1 sm:basis-[17.5rem] sm:max-w-[21.5rem]"
            >
              <GlassCard className="h-full bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-6 md:px-7 md:py-6 rounded-3xl">
                <h3 className="font-['Inter'] text-sm tracking-[0.2em] text-white/40 uppercase mb-6">
                  {skillGroup.group}
                </h3>
                <div className="flex flex-wrap gap-3 content-start">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2.5 rounded-full bg-white/10 text-white font-['Inter'] text-sm tracking-wide font-light border border-white/5 hover:bg-white/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionContent>
    </SectionShell>
  );
}
