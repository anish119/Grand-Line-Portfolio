import { Compass, Ship } from "lucide-react";
import { motion } from "motion/react";

import { navigationSections } from "@/data/sections";

interface BottomNavProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export function BottomNav({ activeIndex, onNavigate }: BottomNavProps) {
  const displayItems = navigationSections.filter((item) => item.showInNav);
  const displayActiveIndex = Math.max(0, activeIndex - 1);
  const isHero = activeIndex === 0;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3 text-white/90">
            <Compass size={18} className="text-sky-400" />
            <span className="font-['Inter'] font-semibold tracking-[0.2em] text-xs uppercase text-sky-100">
              Grand Line
            </span>
          </div>
          <span className="font-['Inter'] text-[10px] tracking-widest text-white/40 uppercase">
            Voyage Log
          </span>
        </div>

        <div className="relative flex items-center justify-between mt-2">
          <div className="absolute left-[5%] right-[5%] h-[2px] bg-white/10 rounded-full top-1/2 -translate-y-1/2" />

          <motion.div
            className="absolute left-[5%] h-[2px] bg-sky-400 rounded-full top-1/2 -translate-y-1/2"
            initial={{ width: "0%" }}
            animate={{ width: `${isHero ? 0 : (displayActiveIndex / (displayItems.length - 1)) * 90}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {displayItems.map((item, index) => {
            const isCompleted = !isHero && index < displayActiveIndex;
            const isCurrent = !isHero && index === displayActiveIndex;
            const realIndex = navigationSections.findIndex((section) => section.id === item.id);

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center gap-3 cursor-pointer group z-10"
                onClick={() => onNavigate(realIndex)}
              >
                <motion.div
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    isCurrent
                      ? "bg-sky-400 border-sky-400 scale-125 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                      : isCompleted
                        ? "bg-white border-white scale-100"
                        : "bg-black border-white/30 scale-75 group-hover:border-white/60"
                  }`}
                />

                <span
                  className={`absolute top-8 text-[10px] md:text-xs font-['Inter'] tracking-wider whitespace-nowrap transition-all duration-500 ${
                    isCurrent ? "text-sky-300 font-medium" : isCompleted ? "text-white/80" : "text-white/30"
                  }`}
                >
                  {item.label}
                </span>

                {isCurrent && (
                  <motion.div
                    layoutId="ship-indicator"
                    className="absolute -top-8 text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    <Ship size={20} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
