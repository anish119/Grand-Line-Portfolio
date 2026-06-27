import { Cpu, Network, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { GlassCard } from "@/components/portfolio/GlassCard";
import { SectionBackground } from "@/components/portfolio/SectionBackground";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SectionShell } from "@/components/portfolio/SectionShell";
import { specializationContent } from "@/data/specialization";
import type { SpecializationFeature } from "@/types/portfolio";

const featureIcons: Record<SpecializationFeature["icon"], typeof Cpu> = {
  cpu: Cpu,
  network: Network,
};

export function EggheadSection() {
  return (
    <SectionShell className="py-20 md:py-32 flex items-center bg-[#020813]">
      <SectionBackground
        imageUrl={specializationContent.backgroundImage}
        imageClassName="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen"
        overlays={["absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black z-10"]}
        extraLayers={
          <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        }
      />

      <SectionContent className="flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/2"
        >
          <SectionHeader
            label={specializationContent.label}
            labelClassName="font-['Inter'] text-cyan-400 tracking-[0.2em] text-xs uppercase font-medium"
            lineClassName="bg-cyan-400"
            headingClassName="text-4xl md:text-7xl font-['Inter'] font-light tracking-tighter text-white leading-tight mb-8"
            emphasisClassName="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500"
            title={specializationContent.title}
          />

          <p className="text-base md:text-lg font-['Inter'] text-cyan-50/60 font-light leading-relaxed mb-12">
            {specializationContent.description}
          </p>

          <div className="space-y-6">
            {specializationContent.features.map((feature) => {
              const Icon = featureIcons[feature.icon];

              return (
                <GlassCard
                  key={feature.title}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 backdrop-blur-md"
                >
                  <Icon className="text-cyan-400 w-8 h-8" />
                  <div>
                    <h4 className="text-white font-['Inter'] font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-cyan-200/50">{feature.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/2 w-full aspect-square relative flex items-center justify-center max-h-64 md:max-h-none"
        >
          <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute w-48 h-48 bg-blue-500/30 rounded-full blur-[60px] animate-pulse" />

          <div className="relative w-full max-w-sm aspect-square border border-cyan-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="absolute inset-4 border border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-dashed border-cyan-300/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <Sparkles className="w-16 h-16 text-cyan-300" />
          </div>
        </motion.div>
      </SectionContent>
    </SectionShell>
  );
}
