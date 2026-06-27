import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  delay: number;
}

// Preload all images for a project eagerly on mount
function preloadImages(urls: string[]) {
  urls.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isVisibleRef = useRef(true);
  const isMountedRef = useRef(true);

  const images = project.images;
  const hasMultiple = images.length > 1;

  // Preload all images on mount
  useEffect(() => {
    preloadImages(images);
  }, [images]);

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const advanceSlide = useCallback(() => {
    if (!isMountedRef.current || !isVisibleRef.current) return;

    // Start crossfade: fade out current
    setIsFading(true);

    // After half of the transition, swap the image (mid-fade)
    timerRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        setDisplayIndex(next);
        return next;
      });
      // Fade back in
      setIsFading(false);
    }, 300);
  }, [images.length]);

  const startSlideshow = useCallback(() => {
    if (!hasMultiple) return;
    clearTimers();

    // Each card gets a random interval between 2500-3000ms
    const baseInterval = 2500 + Math.random() * 500;

    intervalRef.current = setInterval(() => {
      if (isVisibleRef.current && isMountedRef.current) {
        advanceSlide();
      }
    }, baseInterval);
  }, [hasMultiple, advanceSlide, clearTimers]);

  // Initialise slideshow with a randomised delay (200-800ms)
  useEffect(() => {
    if (!hasMultiple) return;

    const initDelay = 200 + Math.random() * 600;
    timerRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        startSlideshow();
      }
    }, initDelay);

    return () => {
      isMountedRef.current = false;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally run only once on mount

  // Page Visibility API - pause when tab hidden, resume when visible
  useEffect(() => {
    if (!hasMultiple) return;

    const handleVisibility = () => {
      if (document.hidden) {
        isVisibleRef.current = false;
        clearTimers();
      } else {
        isVisibleRef.current = true;
        startSlideshow();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [hasMultiple, startSlideshow, clearTimers]);

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
    >
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 mb-8">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out relative">
          {/* Base image layer - always visible underneath */}
          <img
            src={images[displayIndex]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal"
          />

          {/* Crossfade overlay - the current image fades in/out over the base */}
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal"
            style={{
              opacity: isFading ? 0 : 1,
              transform: isFading ? "scale(1.03)" : "scale(1.00)",
              transition: isFading
                ? "opacity 300ms ease-in-out, transform 300ms ease-in-out"
                : "opacity 600ms ease-in-out, transform 600ms ease-in-out",
            }}
          />
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
                <span className="text-orange-400/50 mt-[0.35em] shrink-0 text-xs">&#9658;</span>
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
