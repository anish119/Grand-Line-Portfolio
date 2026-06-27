import type { SkillsContent } from "@/types/portfolio";

export const skillsContent: SkillsContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1509711575058-3967b95ff004?q=80&w=2000&auto=format&fit=crop",
  label: "Reverse Mountain",
  title: {
    leading: "Built across",
    emphasis: "modern stacks.",
  },
  description:
    "My toolkit spans backend engineering, AI, blockchain and secure web development, grounded in practical project work and production-focused problem solving.",
  groups: [
    { group: "Programming Languages", items: ["Java", "Python", "JavaScript", "HTML5", "CSS", "SQL", "Solidity"] },
    // { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive Web Design"] },
    { group: "Backend", items: ["Spring Boot", "Node.js", "REST APIs", "Authentication & Authorization"] },
    //{ group: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { group: "Artificial Intelligence", items: ["Machine Learning", "OpenCV", "MediaPipe", "Computer Vision"] },
    { group: "Blockchain", items: ["Ethereum", "Smart Contracts", "Hardhat", "Pinata", "Zero-Knowledge Authentication"] },
    {
      group: "Cybersecurity",
      items: [
        "Burp Suite",
        "Kali Linux",
        "Network Security Fundamentals",
        "Web Application Security Fundamentals",
        "Basic Vulnerability Assessment",
      ],
    },
    // { group: "Cloud & Deployment", items: ["Vercel", "Render", "Netlify"] },
    // {
    //   group: "Developer Tools",
    //   items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Android Studio", "Postman", "Jupyter Notebook", "Figma"],
    // },
  ],
};
