export const myProjects = [
  {
    id: 1,
    title: "ResuMate AI",
    description:
      "An AI-powered career platform featuring a resume builder, ATS scorer, and interview simulator.",
    subDescription: [
      "Architected a full-stack career platform using React and Firebase, integrating three core AI-driven modules.",
      "Built a resume builder with AI-generated professional summaries and job descriptions tailored to industries and experience levels.",
      "Integrated a voice-based AI Interview Simulator using Speech Recognition with real-time feedback and performance scoring.",
      "Developed an ATS scorer leveraging Gemini API, increasing resume-to-job-description match scores by 30-40% for 15+ users.",
    ],
    href: "https://github.com/thevashuydv/AIResumeBUilder",
    logo: "",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Clerk", path: "/assets/logos/Clerk--Streamline-Simple-Icons.svg" },
      { id: 4, name: "Gemini API", path: "/assets/logos/google-gemini-icon.svg" },
    ],
  },
  {
    id: 2,
    title: "Flight Booking Management",
    description:
      "Backend system for scalable flight reservations with transactional integrity and relational DB support.",
    subDescription: [
      "Constructed a backend flight booking system using Node.js, Express, and MySQL.",
      "Implemented transaction locking (ACID properties) on critical payment endpoints to eliminate race conditions.",
      "Designed a relational database using Sequelize ORM with optimized one-to-many and many-to-one relationships.",
    ],
    href: "https://github.com/thevashuydv/Airline_Booking",
    logo: "",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs-logo-svgrepo-com.svg" },
      { id: 2, name: "Express", path: "/assets/logos/Express.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql-svgrepo-com.svg" },
      { id: 4, name: "Sequelize", path: "/assets/logos/sequelize-svgrepo-com.svg" },
    ],
  },
  {
    id: 3,
    title: "Chat Application with AI",
    description:
      "A real-time collaboration platform with AI-powered messaging and project-based chatrooms.",
    subDescription: [
      "Built a full-stack collaboration platform with real-time communication using WebSockets.",
      "Enabled project-based chatrooms where users can add collaborators and communicate seamlessly.",
      "Integrated an AI assistant using the Google Gemini API with ‘@ai’ command for smart replies, code generation, and execution.",
    ],
    href: "https://github.com/thevashuydv/SOEN",
    logo: "",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs-logo-svgrepo-com.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb-svgrepo-com.svg" },
      { id: 4, name: "Gemini API", path: "/assets/logos/google-gemini-icon.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vashu-yadav/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thevashuydv",
    icon: "/assets/socials/instagram.svg",
  },
];

