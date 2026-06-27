import type { SpecializationContent } from "@/types/portfolio";

export const specializationContent: SpecializationContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=2000&auto=format&fit=crop",
  label: "Egghead",
  title: {
    leading: "Focused on",
    emphasis: "high-impact systems.",
  },
  description:
    "I work at the intersection of backend engineering, AI, blockchain and secure application design, building practical systems that are scalable, resilient and user-focused.",
  features: [
    {
      icon: "cpu",
      title: "Backend & API Engineering",
      description: "Backend development, REST API design, secure authentication systems and database-driven applications.",
    },
    {
      icon: "network",
      title: "AI, Vision & Blockchain",
      description: "Artificial intelligence, computer vision, blockchain development and cybersecurity fundamentals.",
    },
    {
      icon: "cpu",
      title: "Secure Architecture",
      description: "Authentication, authorization, database design and modern web technologies built for real-world reliability.",
    },
    {
      icon: "network",
      title: "Applied Problem Solving",
      description: "Scalable web applications, secure workflows and product-minded engineering across emerging technologies.",
    },
  ],
};
