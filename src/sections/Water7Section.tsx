import { motion } from "motion/react";

import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionBackground } from "@/components/portfolio/SectionBackground";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SectionShell } from "@/components/portfolio/SectionShell";
import { projectsContent } from "@/data/projects";

export function Water7Section() {
  return (
    <SectionShell className="py-32 flex flex-col justify-center bg-[#050b14]">
      <SectionBackground
        imageUrl={projectsContent.backgroundImage}
        imageClassName="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen"
        overlays={["absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"]}
      />

      <SectionContent className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            label={projectsContent.label}
            labelClassName="font-['Inter'] text-orange-400 tracking-[0.2em] text-xs uppercase font-medium"
            lineClassName="bg-orange-400"
            headingClassName="text-5xl md:text-7xl font-['Playfair_Display'] text-white leading-tight"
            emphasisClassName="italic text-orange-200"
            title={projectsContent.title}
          />
        </motion.div>
      </SectionContent>

      <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {projectsContent.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={index * 0.2} />
        ))}
      </SectionContent>
    </SectionShell>
  );
}
