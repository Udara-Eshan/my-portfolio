export const portfolioData = {
  personal: {
    name: "Udara Jayasundara",
    initials: "UJ",
    eyebrow: "Available for Internships & Graduate Roles",
    headlinePrefix: "Hi, I'm ",
    headlineName: "Udara Jayasundara",
    headlineSuffix: " — I build things for the web.",
    roleSummary: "Final-year BSc (Hons) Software Engineering undergraduate specializing in scalable cloud architectures, interactive frontend ecosystems, and distributed backend systems.",
    location: "Colombo, Sri Lanka",
    email: "udara.jayasundara.dev@gmail.com",
    availability: "Immediate / Full-Time & Hybrid",
    phone: "+94 77 123 4567",
    resumeUrl: "/resume.pdf",
    stats: [
      { label: "Projects Completed", value: "20+" },
      { label: "Industry Certifications", value: "5+" },
      { label: "Academic GPA", value: "3.9 / 4.0" },
      { label: "Hackathon Wins", value: "3x Finalist" }
    ],
    socials: {
      github: "https://github.com/udarajayasundara",
      linkedin: "https://linkedin.com/in/udarajayasundara",
      email: "mailto:udara.jayasundara.dev@gmail.com",
      twitter: "https://twitter.com/udara_dev"
    }
  },

  about: {
    bio: [
      "I am an ambitious Software Engineering undergraduate with a passion for architecting elegant, highly performant web applications and data-driven systems. My journey spans from low-level systems programming to building modern, cloud-native full-stack solutions.",
      "With a strong foundation in data structures, algorithms, distributed computing, and human-computer interaction, I strive to bridge the gap between complex engineering challenges and seamless user experiences.",
      "Beyond code, I actively participate in hackathons, contribute to open-source developer tooling, and mentor junior developers in university coding bootcamps."
    ],
    highlights: [
      { title: "Specialization", value: "Full-Stack & Cloud Systems" },
      { title: "Current Status", value: "BSc (Hons) in Software Engineering" },
      { title: "Location", value: "Colombo, Sri Lanka" },
      { title: "Languages", value: "English (Fluent), Sinhala (Native)" },
      { title: "Work Preference", value: "Remote / Hybrid / On-site" },
      { title: "Interests", value: "Distributed Systems, AI/ML, UI/UX" }
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      icon: "Code",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++", "C# / .NET", "SQL", "HTML5 & CSS3"]
    },
    {
      category: "Frameworks & Libraries",
      icon: "Layers",
      items: ["React.js", "Next.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS", "Redux Toolkit", "FastAPI"]
    },
    {
      category: "Databases & Storage",
      icon: "Database",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase Firestore", "Prisma ORM"]
    },
    {
      category: "Tools & Platforms",
      icon: "Wrench",
      items: ["Git & GitHub", "Vite", "Webpack", "Postman", "Linux / Bash", "VS Code", "Figma", "Jira / Agile"]
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      items: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Vercel", "Netlify", "Nginx"]
    },
    {
      category: "Professional & Soft Skills",
      icon: "Sparkles",
      items: ["Agile & Scrum", "Technical Writing", "Team Leadership", "Problem Solving", "Code Review", "Public Speaking", "Cross-functional Collaboration"]
    }
  ],

  projects: [
    {
      id: "pro-1",
      title: "PulseSync: Real-Time Collaborative Workspace",
      type: "Full-Stack / Cloud Architecture",
      featured: true,
      description: "An ultra-low latency real-time collaborative workspace featuring rich text editing, synchronized whiteboard canvas, voice rooms, and granular role-based permissions.",
      contribution: "Designed the WebSocket synchronization layer with conflict-free replicated data types (CRDTs) and implemented distributed state caching with Redis.",
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/udarajayasundara/pulsesync-workspace",
      live: "https://pulsesync-demo.dev",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pro-2",
      title: "OmniHealth: AI-Assisted Clinical Telehealth Platform",
      type: "Full-Stack / Academic Capstone",
      featured: true,
      description: "A comprehensive digital healthcare suite facilitating encrypted video consultations, smart prescription issuance, and predictive symptom triage via machine learning models.",
      contribution: "Spearheaded the microservices backend using Spring Boot & FastAPI; integrated WebRTC video streams and Stripe payment checkout.",
      tags: ["Next.js", "FastAPI", "Spring Boot", "WebRTC", "PostgreSQL", "AWS S3"],
      github: "https://github.com/udarajayasundara/omnihealth-platform",
      live: "https://omnihealth-preview.dev",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pro-3",
      title: "DevMetrics: Automated Code Quality & CI Analytics",
      type: "Open-Source / Developer Tooling",
      featured: true,
      description: "A lightweight CLI tool and interactive web dashboard that analyzes GitHub pull requests, measuring complexity, test coverage deltas, and automated security vulnerability checks.",
      contribution: "Built the AST-based code parser in Node.js and developed the responsive dashboard visualizer using React and SVG charting components.",
      tags: ["React", "Node.js", "GitHub API", "Chart.js", "Tailwind CSS", "Jest"],
      github: "https://github.com/udarajayasundara/devmetrics-cli",
      live: "https://devmetrics-analytics.dev",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pro-4",
      title: "EcoTrack: Smart Carbon Footprint Calculator",
      type: "Hackathon Winner (1st Place)",
      featured: false,
      description: "An engaging mobile-responsive web app helping enterprise teams log daily commutes, energy usage, and supply chains to generate actionable ESG reduction targets.",
      contribution: "Led a 4-person team, engineered the carbon calculation engine, and crafted the responsive UI in under 36 hours.",
      tags: ["React", "Vite", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/udarajayasundara/ecotrack-hackathon",
      live: "https://ecotrack-sustainability.dev",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pro-5",
      title: "AuraPay: Decentralized Multi-Token Payment Gateway",
      type: "Fintech / Personal Research",
      featured: false,
      description: "A secure merchant payment processing gateway that accepts instant crypto transactions across EVM-compatible networks with automated invoice generation.",
      contribution: "Implemented Ethers.js wallet connectors, audited Solidity smart contracts for fee distribution, and built webhook notification services.",
      tags: ["React", "TypeScript", "Ethers.js", "Solidity", "Tailwind CSS", "Supabase"],
      github: "https://github.com/udarajayasundara/aurapay-gateway",
      live: "https://aurapay-demo.dev",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pro-6",
      title: "EduQuest: Gamified Interactive Learning LMS",
      type: "Academic Team Project",
      featured: false,
      description: "An interactive educational portal featuring adaptive quizzes, live leaderboards, course progression trees, and automated grading pipelines.",
      contribution: "Engineered user authentication, role-based dashboards for tutors and students, and dynamic quiz generation modules.",
      tags: ["React", "Express.js", "MySQL", "Socket.io", "Tailwind CSS", "JWT"],
      github: "https://github.com/udarajayasundara/eduquest-lms",
      live: "https://eduquest-learning.dev",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
    }
  ],

  timeline: [
    {
      id: "t1",
      category: "experience",
      type: "Internship",
      title: "Software Engineering Intern",
      institution: "Virtusa / Sysco LABS Innovation Lab",
      period: "Jul 2025 – Jan 2026",
      description: "Contributed to enterprise cloud microservices migration. Optimized database indexing on PostgreSQL instances, reducing average API response times by 38%. Authored automated integration test suites achieving 89% coverage.",
      skills: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Jira"]
    },
    {
      id: "t2",
      category: "education",
      type: "University Degree",
      title: "BSc (Hons) in Software Engineering",
      institution: "University of Westminster (Informatics Institute of Technology)",
      period: "2023 – 2027 (Expected)",
      description: "Current GPA: 3.92 / 4.0 (First Class Honours trajectory). Relevant coursework: Advanced Data Structures & Algorithms, Distributed Systems, Software Architecture, Database Engineering, Machine Learning, Web Application Development.",
      skills: ["Data Structures", "OOP", "Distributed Systems", "Cloud Computing"]
    },
    {
      id: "t3",
      category: "experience",
      type: "Leadership & Volunteer",
      title: "Vice President & Lead Developer",
      institution: "IEEE Computer Society Student Branch",
      period: "2024 – Present",
      description: "Organized 4 national-level hackathons with 600+ collegiate participants. Built the automated registration portal and live judging system. Conducted hands-on technical workshops on React and modern cloud architectures.",
      skills: ["Leadership", "Community", "React", "Event Management"]
    },
    {
      id: "t4",
      category: "experience",
      type: "Freelance / Part-Time",
      title: "Full-Stack Web Developer",
      institution: "Independent Contracting & Open Source",
      period: "2023 – Present",
      description: "Delivered 8+ bespoke web solutions for small-to-medium businesses, including e-commerce platforms, booking engines, and customized internal management dashboards.",
      skills: ["Next.js", "React", "Stripe API", "SEO", "Supabase"]
    },
    {
      id: "t5",
      category: "education",
      type: "Secondary School",
      title: "G.C.E. Advanced Level — Physical Science Stream",
      institution: "Ananda College, Colombo",
      period: "2020 – 2022",
      description: "Achieved 3 Distinctions (A* in Combined Mathematics, Physics, and Chemistry). Active member of the ICT Society, Science Society, and Debate Team.",
      skills: ["Mathematics", "Physics", "Analytical Thinking"]
    }
  ],

  certifications: [
    {
      id: "c1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Nov 2025",
      credentialUrl: "https://aws.amazon.com/verification",
      badgeType: "Cloud Architecture",
      skills: ["AWS EC2", "S3", "VPC", "IAM", "Serverless Lambda"]
    },
    {
      id: "c2",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "Aug 2025",
      credentialUrl: "https://coursera.org/verify/professional-cert/meta-frontend",
      badgeType: "Web Engineering",
      skills: ["React", "JavaScript", "Responsive Design", "Jest Testing", "UI/UX"]
    },
    {
      id: "c3",
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "May 2025",
      credentialUrl: "https://google.accredible.com",
      badgeType: "Cloud Systems",
      skills: ["GCP Compute Engine", "Cloud Run", "Kubernetes", "IAM"]
    },
    {
      id: "c4",
      title: "PostgreSQL Database Administration & Performance",
      issuer: "University of Michigan / Coursera",
      date: "Jan 2025",
      credentialUrl: "https://coursera.org/verify",
      badgeType: "Database Engineering",
      skills: ["Query Optimization", "Indexing", "ACID Transactions", "Partitioning"]
    },
    {
      id: "c5",
      title: "National Hackathon 2025 — 1st Place Winner",
      issuer: "National ICT Awards / Ministry of Tech",
      date: "Oct 2025",
      credentialUrl: "#",
      badgeType: "Competition Award",
      skills: ["Rapid Prototyping", "Pitching", "Full-Stack Development"]
    },
    {
      id: "c6",
      title: "Dean's List for Academic Excellence",
      issuer: "University of Westminster",
      date: "2023, 2024, 2025",
      credentialUrl: "#",
      badgeType: "Academic Honour",
      skills: ["Academic Rigour", "Top 5% Cohort"]
    }
  ],

  contact: {
    heading: "Let's Connect.",
    subheading: "Whether you have an internship opportunity, a project to discuss, or simply want to say hi — my inbox is always open!",
    primaryEmail: "udara.jayasundara.dev@gmail.com",
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka",
    profiles: [
      { name: "Email Me", label: "udara.jayasundara.dev@gmail.com", href: "mailto:udara.jayasundara.dev@gmail.com", icon: "Mail" },
      { name: "LinkedIn", label: "linkedin.com/in/udarajayasundara", href: "https://linkedin.com/in/udarajayasundara", icon: "Linkedin" },
      { name: "GitHub", label: "github.com/udarajayasundara", href: "https://github.com/udarajayasundara", icon: "Github" },
      { name: "Schedule Call", label: "calendly.com/udara-dev", href: "https://calendly.com", icon: "Calendar" }
    ]
  }
};
