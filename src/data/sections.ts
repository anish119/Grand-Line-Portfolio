import type { NavigationSection, SectionId } from "@/types/portfolio";

export const sectionOrder: readonly SectionId[] = [
  "hero",
  "east-blue",
  "reverse-mountain",
  "alabasta",
  "water-7",
  "egghead",
  "laugh-tale",
];

export const navigationSections: readonly NavigationSection[] = [
  { id: "hero", label: "Hero", showInNav: false },
  { id: "east-blue", label: "East Blue", showInNav: true },
  { id: "reverse-mountain", label: "Reverse Mountain", showInNav: true },
  { id: "alabasta", label: "Alabasta", showInNav: true },
  { id: "water-7", label: "Water 7", showInNav: true },
  { id: "egghead", label: "Egghead", showInNav: true },
  { id: "laugh-tale", label: "Laugh Tale", showInNav: true },
];
