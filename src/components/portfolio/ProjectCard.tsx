import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  delay: number;
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
  }, []);

  useEffect(() => {
    if (!isHovered || isTouchDevice || project.images.length <= 1) {
      setCurrentImageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [isHovered, isTouchDevice, project.images.length]);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 mb-8">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out relative">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1.00 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <span className="font-['Inter'] text-[10px] tracking-widest text-orange-400 uppercase block mb-3">
            {project.category}
          </span>
          <h3 className="text-3xl font-['Inter'] tracking-tight text-white mb-4 group-hover:text-orange-100 transition-colors">
            {project.title}
          </h3>
          <ul className="space-y-2 list-none">
            {project.description.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-base font-['Inter'] text-white/50 font-light leading-relaxed">
                <span className="text-orange-400/50 mt-[0.35em] shrink-0 text-xs">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:rotate-45 transition-transform duration-500"
          >
            <path
              d="M1 13L13 1M13 1H4M13 1V10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
