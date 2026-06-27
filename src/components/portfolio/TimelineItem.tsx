import { motion } from "motion/react";

import type { ExperienceItem as ExperienceItemData } from "@/types/portfolio";

interface TimelineItemProps {
  experience: ExperienceItemData;
  delay: number;
}

export function TimelineItem({ experience, delay }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className="absolute -left-[33px] md:-left-[65px] top-2 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)] group-hover:scale-150 transition-transform duration-500" />

      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 mb-6">
        <h3 className="text-2xl md:text-4xl font-['Inter'] font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors duration-500">
          {experience.role}
        </h3>
        <span className="font-['Inter'] text-xs tracking-widest text-amber-500/80 uppercase whitespace-nowrap">
          {experience.period}
        </span>
      </div>

      <h4 className="text-xl font-['Playfair_Display'] text-white/60 mb-6 italic">{experience.company}</h4>

      <ul className="space-y-2 list-none">
        {experience.description.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-lg font-['Inter'] text-white/50 font-light leading-relaxed max-w-3xl">
            <span className="text-amber-500/50 mt-[0.35em] shrink-0 text-xs">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
