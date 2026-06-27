export type SectionId =
  | "hero"
  | "east-blue"
  | "reverse-mountain"
  | "alabasta"
  | "water-7"
  | "egghead"
  | "laugh-tale";

export interface SplitHeading {
  leading: string;
  emphasis: string;
  trailing?: string;
}

export interface NavigationSection {
  id: SectionId;
  label: string;
  showInNav: boolean;
}

export interface HeroCta {
  label: string;
  variant: "primary" | "secondary";
  action?: "scrollToLaughTale" | "scrollToEastBlue";
}

export interface HeroContent {
  backgroundImage: string;
  roles: string[];
  name: string;
  description: string;
  ctas: HeroCta[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  backgroundImage: string;
  label: string;
  title: SplitHeading;
  paragraphs: string[];
  stats: AboutStat[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface SkillsContent {
  backgroundImage: string;
  label: string;
  title: SplitHeading;
  description: string;
  groups: SkillGroup[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ExperienceContent {
  backgroundImage: string;
  label: string;
  title: SplitHeading;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string[];
  images: string[];
  url: string;
}

export interface ProjectsContent {
  backgroundImage: string;
  label: string;
  title: SplitHeading;
  items: ProjectItem[];
}

export interface SpecializationFeature {
  icon: "cpu" | "network";
  title: string;
  description: string;
}

export interface SpecializationContent {
  backgroundImage: string;
  label: string;
  title: SplitHeading;
  description: string;
  features: SpecializationFeature[];
}

export interface ContactAction {
  label: string;
  href: string;
  displayValue: string;
  icon: "file-down" | "mail" | "phone" | "github" | "linkedin";
  kind: "download" | "email" | "phone" | "external";
}

export interface ContactContent {
  backgroundImage: string;
  label: string;
  title: SplitHeading;
  description: string;
  actions: ContactAction[];
  followupMessage: string;
  footerOwner: string;
}
