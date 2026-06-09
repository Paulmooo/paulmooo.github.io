export const siteConfig = {
  name: "Paul Mo",
  title: "Full-stack Web Developer | React & .NET",
  description:
    "Full-stack web developer portfolio for Paul Mo, focused on JavaScript, React, C#, .NET, Azure, CI/CD, and scalable web applications.",
  accentColor: "#1d4ed8",
  social: {
    email: "paul.mo1@outlook.com",
    linkedin: "https://www.linkedin.com/in/yutaomo/",
    github: "https://github.com/Paulmooo",
  },
  aboutMe:
    "Full-stack web developer with hands-on experience delivering interactive and scalable applications. Proficient in JavaScript, React, C#, .NET, Azure, CI/CD, and SQL Server. Comfortable working across the stack, collaborating with cross-functional teams, and contributing to technical design decisions through delivery.",
  skills: [
    "JavaScript",
    "React",
    "Redux",
    "C#",
    ".NET Core",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "MongoDB",
    "Azure",
    "Docker",
    "JWT",
    "Jest",
    "xUnit",
  ],
  projects: [
    {
      name: "REMP - Real Estate Media Delivery Platform",
      description:
        "Developed a real-estate media delivery platform with a layered ASP.NET Core Web API backend, EF Core and SQL Server domain models, MongoDB for unstructured data, ASP.NET Identity/JWT access control, responsive Next.js admin and agent interfaces, Azure App Service deployments, Blob Storage, and Bitbucket CI/CD pipelines across DEV and STAGING.",
      link: "https://github.com/Paulmooo/REMP",
      skills: [
        "ASP.NET Core",
        "C#",
        "EF Core",
        "Next.js",
        "React",
        "TailwindCSS",
        "JWT",
        "SQL Server",
        "MongoDB",
        "Azure",
        "xUnit",
        "Cypress",
      ],
    },
    {
      name: "Application Performance Monitoring Platform",
      description:
        "Built a TypeScript monitoring SDK and analytics platform that captures Web Vitals, page load performance, runtime errors, Promise rejections, resource failures, and XHR/Fetch timing, then visualises trends, slow APIs, PV/UV, and high-impact issues in a React admin dashboard backed by Node.js services deployed on Azure.",
      link: "https://github.com/Paulmooo/TrackPoint",
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "Zustand",
        "Web Vitals",
        "Azure",
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
        "Delivered a responsive MES web application using JavaScript, React, and Redux to support production workflow tracking and operational data visibility.",
        "Improved first-screen loading performance with component-level code splitting, lazy loading, and asset optimisation.",
        "Integrated RESTful APIs with axios request interceptors for token injection, unified error handling, and consistent frontend-backend communication.",
        "Built backend API features using ASP.NET Core Web API, following SOLID principles and clean architecture practices.",
        "Designed SQL Server tables and data access logic for structured storage, retrieval, and reporting of manufacturing execution data.",
        "Implemented role-based access control using JWT for operators, supervisors, and administrators.",
        "Refactored legacy code to reduce technical debt, improving performance, maintainability, and system reliability.",
        "Implemented Azure Blob Storage file upload workflows for production documents, attachments, and inspection-related files.",
        "Enhanced observability with Azure Application Insights and created frontend/backend unit tests using Jest, React Testing Library, xUnit, and Moq.",
      ],
    },
  ],
  education: [
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology",
      dateRange: "Feb 2024 - Jun 2026",
    },
    {
      school: "Newcastle University",
      degree: "Master of Science",
      dateRange: "Sep 2019 - Nov 2020",
    },
  ],
};
