export const siteConfig = {
  name: "Paul Mo",
  title: "Full-stack Web Developer",
  description:
    "Full-stack web developer portfolio for Paul Mo, focused on React, .NET, Azure, and scalable web applications.",
  accentColor: "#1d4ed8",
  social: {
    email: "paul.mo1@outlook.com",
    linkedin: "https://www.linkedin.com/in/yutaomo/",
    github: "https://github.com/Paulmooo",
  },
  aboutMe:
    "Full-stack web developer with hands-on experience delivering interactive and scalable web applications. I work across React, TypeScript, C#, ASP.NET Core, Azure, and SQL Server, with a focus on clean API design, reusable UI components, testing, and collaborative delivery.",
  skills: [
    "TypeScript",
    "React",
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "Azure",
    "JWT",
    "Jest",
    "xUnit",
  ],
  projects: [
    {
      name: "REMP - Real Estate Media Delivery Platform",
      description:
        "Built a layered ASP.NET Core Web API backend for real-estate media delivery workflows, including Identity/JWT authentication, EF Core data models and migrations, Azure Blob Storage media handling, validated DTOs, and unit-tested service logic.",
      link: "https://github.com/Paulmooo/REMP",
      skills: [
        "ASP.NET Core",
        "C#",
        "EF Core",
        "SQL Server",
        "Azure Blob Storage",
        "JWT",
        "xUnit",
      ],
    },
    {
      name: "TrackPoint - Application Performance Monitoring Platform",
      description:
        "Developed a Web Vitals monitoring SDK and analytics platform for collecting performance metrics, runtime errors, API timing, and user behaviour data, with a React dashboard using ECharts to surface trends and high-impact issues.",
      link: "https://github.com/Paulmooo/TrackPoint",
      skills: [
        "JavaScript",
        "React",
        "TypeScript",
        "Web Vitals",
        "ECharts",
        "Jest",
      ],
    },
  ],
  experience: [
    {
      company: "Anker Innovations",
      title: "Software Developer",
      dateRange: "Nov 2025 - Feb 2026",
      bullets: [
        "Delivered responsive web app features using TypeScript and React.",
        "Unified application state management with TypeScript and Redux, improving maintainability and performance.",
        "Created reusable React components with accessibility support to improve user experience.",
        "Designed config-driven search and data table components to reduce duplicated code.",
        "Integrated RESTful APIs with axios interceptors for automatic token injection and unified error handling.",
        "Created unit tests for React components and Redux logic using Jest to improve reliability.",
      ],
    },
  ],
  education: [
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology",
      dateRange: "Feb 2024 - Present",
      achievements: ["WAM 80 (Distinction)"],
    },
    {
      school: "Newcastle University",
      degree: "Master of Science in Quantitative Finance & Risk Management",
      dateRange: "Sep 2019 - Nov 2020",
    },
  ],
};
