import type { ContactContent } from "@/types/portfolio";

export const contactContent: ContactContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1590237183042-9a1655de16ed?q=80&w=2000&auto=format&fit=crop",
  label: "Laugh Tale",
  title: {
    leading: "The end of the line.",
    emphasis: "The beginning of us.",
  },
  description:
    "I’m open to opportunities in software engineering, backend development, AI and secure product building. Reach out to start the conversation.",
  actions: [
    {
      label: "Download Resume",
      href: "/resume/Anish_Vijayvergia_Resume.pdf",
      displayValue: "Latest Resume",
      icon: "file-down",
      kind: "download",
    },
    {
      label: "Email Me",
      href: "mailto:anishmvijayvergia@gmail.com",
      displayValue: "anishmvijayvergia@gmail.com",
      icon: "mail",
      kind: "email",
    },
    {
      label: "Call Me",
      href: "tel:+919321503162",
      displayValue: "+91 93215 03162",
      icon: "phone",
      kind: "phone",
    },
    {
      label: "GitHub",
      href: "https://github.com/anish119",
      displayValue: "@anish119",
      icon: "github",
      kind: "external",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anishvijayvergia",
      displayValue: "Anish Vijayvergia",
      icon: "linkedin",
      kind: "external",
    },
  ],
  followupMessage:
    "Whether you have an exciting opportunity, an interesting project, or simply want to connect, I'd be happy to hear from you.",
  footerOwner: "Anish Vijayvergia",
};
