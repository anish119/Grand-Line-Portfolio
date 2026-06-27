import { motion, useScroll, useTransform } from "motion/react";

import { CTAButton } from "@/components/portfolio/CTAButton";
import { heroContent } from "@/data/hero";

interface HeroSectionProps {
  onScrollToEastBlue?: () => void;
  onScrollToLaughTale?: () => void;
}

export function HeroSection({ onScrollToEastBlue, onScrollToLaughTale }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      <motion.div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroContent.backgroundImage}')`,
          y: y1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10" />

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 mt-[-10vh]"
        style={{ y: y2, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-wrap justify-center gap-3 md:gap-6 text-[10px] md:text-sm font-['Inter'] tracking-[0.3em] uppercase text-sky-200/80"
        >
          {heroContent.roles.map((role, index) => (
            <div key={role} className="contents">
              <span>{role}</span>
              {index < heroContent.roles.length - 1 && <span className="hidden md:inline">•</span>}
            </div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-['Inter'] font-bold tracking-tighter text-white drop-shadow-2xl"
        >
          {heroContent.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl font-['Inter'] text-white/60 max-w-xl font-light tracking-wide leading-relaxed"
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center gap-6"
        >
          {heroContent.ctas.map((cta) => (
            <CTAButton
              key={cta.label}
              cta={cta}
              onClick={
                cta.action === "scrollToEastBlue"
                  ? onScrollToEastBlue
                  : cta.action === "scrollToLaughTale"
                    ? onScrollToLaughTale
                    : undefined
              }
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
