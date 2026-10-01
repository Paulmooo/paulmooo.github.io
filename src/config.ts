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
      name: "TrackPoint - Application Performance Monitoring Platform",
      description:
        "Built a TypeScript monitoring SDK and analytics platform that captures Web Vitals, page load performance, runtime errors, Promise rejections, resource failures, and XHR/Fetch timing, then visualises trends, slow APIs, PV/UV, and high-impact issues in a React admin dashboard backed by Node.js services.",
      link: "https://github.com/Paulmooo/TrackPoint",
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "Zustand",
        "Web Vitals",
        "Jest",
      ],
    },
  ],
  experience: [
    {
      company: "Anker Innovations",
      title: "Software Developer",
      dateRange: "Nov 2025 - Jul 2026",
      bullets: [
        "Delivered a responsive MES(Manufacturing Execution System) web application using TypeScript, React, Next.js and Redux, supporting production workflow tracking and operational data visibility.",
        "Implemented microservice-based backend services using .NET and ASP.NET Core, delivering scalable and secure applications following Clean Architecture and SOLID principles.",
        "Developed RESTful APIs for production orders, workflow stages, and inspection processes, supporting reliable integration with the React frontend.",
        "Designed SQL Server tables and data access logic to support structured storage, retrieval, and reporting of manufacturing execution datas.",
        "Implemented authentication and authorization using ASP.NET Identity and JWT, supporting both role-based and policy-based access control.",
        "Improved first-screen loading performance in the React application by applying component-level code splitting, lazy loading, and asset optimisation.",
        "Refactored legacy code to reduce technical debt, improving performance, maintainability, and system reliability.",
        "Supported Azure infrastructure using Azure Blob Storage, Azure SQL Database, and Azure App Service to provide scalable storage, reliable data persistence, and production application hosting.",
        "Created unit tests using Jest, React Testing Library, xUnit, and Moq, improving frontend and backend code reliability during feature updates.",
        "Documented APIs using Swagger to support clear service contracts and frontend-backend integration",
      ],
    },
  ],
  education: [
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology",
      // dateRange: "Feb 2024 - Jun 2026",
    },
    {
      school: "Shenzhen University",
      degree: "Bachelor of Science",
      // dateRange: "Sep 2019 - Nov 2020",
    },
  ],
};
