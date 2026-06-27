import type { ProjectsContent } from "@/types/portfolio";

export const projectsContent: ProjectsContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1482690205767-61deebe15ef7?q=80&w=2000&auto=format&fit=crop",
  label: "Water 7",
  title: {
    leading: "Projects shaped by",
    emphasis: "real problems.",
  },
  items: [
    {
      title: "SafeHire",
      category: "Next.js • TypeScript • PostgreSQL • OCR • Authentication",
      description: [
        "Developed a privacy-first hiring platform using Zero-Knowledge Authentication for secure candidate verification.",
        "Integrated Aadhaar OCR and certificate verification to streamline identity validation.",
        "Built secure authentication workflows while preserving user privacy and sensitive information.",
        "Designed a scalable full-stack application for organizations to hire candidates securely.",
      ],
      images: [
        "/projects/safehire/home.jpeg",
        "/projects/safehire/jobs-opening.jpeg",
        "/projects/safehire/manage-events.jpeg",
        "/projects/safehire/rejection-feedback.jpeg",
        "/projects/safehire/resume-review.jpeg",
        "/projects/safehire/what-is-safehire.jpeg"
      ],
      url: "https://www.safe-hire.in/",
    },
    {
      title: "Voices Unchained",
      category: "React • Ethereum • Solidity • Hardhat • MongoDB",
      description: [
        "Built a decentralized anonymous incident reporting platform powered by blockchain technology.",
        "Implemented role-based access control for citizens, investigators and administrators.",
        "Stored reports securely using smart contracts to ensure transparency and tamper-proof records.",
        "Enabled anonymous reporting while maintaining a secure investigation workflow.",
      ],
      images: [
        "/projects/voices-unchained/home.png",
        "/projects/voices-unchained/submit-report.png",
        "/projects/voices-unchained/my-reports.png",
        "/projects/voices-unchained/investigator-view.png",
        "/projects/voices-unchained/blockchain-verification.png",
        "/projects/voices-unchained/metamask-request.png"
      ],
      url: "https://voices-unchained.vercel.app/",
    },
    {
      title: "Driver Drowsiness Detection",
      category: "Python • OpenCV • MediaPipe • Computer Vision",
      description: [
        "Developed an AI-powered driver fatigue detection system using OpenCV and MediaPipe.",
        "Monitored facial landmarks and Eye Aspect Ratio (EAR) in real time.",
        "Triggered instant audio alerts whenever driver drowsiness was detected.",
        "Improved road safety through continuous computer vision monitoring.",
      ],
      images: [
        "/projects/drowsiness/home.png",
        "/projects/drowsiness/camera-working.png"
      ],
      url: "https://github.com/anish119/Drowsiness",
    },
    {
      title: "Song Recommendation System",
      category: "Python • Machine Learning • Streamlit • Pandas",
      description: [
        "Built a content-based music recommendation engine using Machine Learning.",
        "Recommended similar songs using cosine similarity and feature extraction techniques.",
        "Designed an interactive interface for personalized music discovery.",
        "Improved recommendation quality through efficient similarity matching.",
      ],
      images: [
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop"
      ],
      url: "https://github.com/anish119/Song-recommendation-System",
    },
  ],
};
