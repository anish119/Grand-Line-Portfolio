import { useCallback, useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    sectionRefs.current.forEach((sectionRef) => {
      if (sectionRef) {
        observer.observe(sectionRef);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const setSectionRef = useCallback((index: number, element: HTMLElement | null) => {
    sectionRefs.current[index] = element;
  }, []);

  const scrollToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return {
    activeIndex,
    scrollToSection,
    setSectionRef,
  };
}
