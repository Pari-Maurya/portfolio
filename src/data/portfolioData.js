// Central Configuration File for Pari Maurya's Portfolio
// Edit any text, link, skill, or project here to update the website instantly!

export const personalInfo = {
  name: "Pari Maurya",
  title: "Full Stack Developer | DSA",
  role: "Aspiring Software Engineer",
  degree: "B.Tech – Computer Science & Engineering (Data Science)",
  college: "ABES ENGINEERING COLLEGE", // Replace with your actual college name
  gradYear: "2027",
  cgpa: "8.3 / 10 (Till 6th Sem)", // Replace with your actual CGPA
  location: "India",
  status: "Open to Software Engineering Opportunities",
  aboutMe:
    "I am a Computer Science & Engineering (Data Science) student with a strong passion for full-stack software development, problem-solving, and building practical products. I enjoy tackling challenging Data Structures & Algorithms problems, creating intuitive web applications, and experimenting with AI/GenAI tools to solve real-world problems.",
  resumeUrl: "https://drive.google.com/file/d/1_ww_1IP3kEpWYUashST61_jSDRAoxHIl/view?usp=sharing",
  email: "parimaurya2006@gmail.com", // Replace with your actual email
  socials: {
    github: "https://github.com/Pari-Maurya",
    linkedin: "https://www.linkedin.com/in/pari-maurya12/",
    leetcode: "https://leetcode.com/PariMaurya123",
    codechef: "https://www.codechef.com/users/pari_maurya",
  },
};

export const skillsCategories = [
  {
    category: "Languages",
    description: "Core programming languages for DSA & software logic",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Java", level: "Advanced", icon: "Coffee" },
      { name: "JavaScript", level: "Advanced", icon: "FileCode" },
      { name: "Python", level: "Intermediate", icon: "Code2" },
      { name: "C", level: "Intermediate", icon: "Terminal" },
      { name: "C++", level: "Intermediate", icon: "Cpu" },
    ],
  },
  {
    category: "Frontend",
    description: "Building responsive, modern, and interactive user interfaces",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "Layout" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Zap" },
      { name: "Redux Toolkit", level: "Intermediate", icon: "Layers" },
    ],
  },
  {
    category: "Backend",
    description: "Server architecture, API design, and web logic",
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "Server" },
      { name: "Express.js", level: "Intermediate", icon: "Globe" },
      { name: "REST APIs", level: "Advanced", icon: "Network" },
    ],
  },
  {
    category: "Database & Cloud",
    description: "Data storage, relational queries, and cloud deployment",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "MongoDB", level: "Intermediate", icon: "Database" },
      { name: "Firebase", level: "Intermediate", icon: "Flame" },
      { name: "SQL", level: "Intermediate", icon: "Table" },
    ],
  },
  {
    category: "Tools",
    description: "Development environment, version control, and design",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", level: "Advanced", icon: "Github" },
      { name: "VS Code", level: "Advanced", icon: "Edit3" },
      { name: "Postman", level: "Intermediate", icon: "Postman" },
      { name: "Vercel", level: "Intermediate", icon: "Vercel" },
    ],
  },
  {
    category: "AI / Data",
    description: "Data processing, analytics, and generative AI models",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Generative AI", level: "Intermediate", icon: "Sparkles" },
      { name: "LLMs", level: "Intermediate", icon: "BarChart3" },
      { name: "AI Agents", level: "Intermediate", icon: "Brain" },
      { name: "LLM API Integration", level: "Intermediate", icon: "Sparkles" },
    ],
  },
];

export const projectsData = [
  {
    id: "careercraft",
    name: "CareerCraft",
    subtitle: "AI-Assisted Career Discovery Platform",
    category: "Web Apps & AI",
    description:
      "An AI-assisted career discovery platform that helps students explore suitable career paths through an interactive quiz and personalized recommendations.",
    longDescription:
      "CareerCraft empowers students navigating career options by utilizing intelligent evaluation algorithms and real-time database tracking. Users take an interactive assessment that evaluates their technical aptitude, creative interests, and work preferences to deliver actionable learning roadmaps.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Firebase Auth", "Firebase Realtime DB"],
    features: [
      "User Authentication with Firebase",
      "Interactive multi-step career assessment quiz",
      "Personalized career recommendation cards",
      "Real-time progress saving & user dashboard",
      "Sleek responsive UI with smooth transitions",
    ],
    github: "https://github.com/Pari-Maurya/CareerCraft",
    demo: "https://career-craft-orcin.vercel.app/",
    badge: "Featured AI Project",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#38bdf8",
  },
  {
    id: "alfred",
    name: "MITRA",
    subtitle: "AI-Powered Emotional Support App",
    category: "AI & Full Stack",
    description:
      "An AI-powered emotional support/therapy-style web application focused on creating a conversational and supportive user experience.",
    longDescription:
      "ALFRED acts as an empathetic conversational AI partner designed to provide a safe, calm environment for mental wellness tracking and constructive self-reflection. Built with Node.js and React, it features real-time response streaming and personalized mood prompts.",
    tech: ["React", "Node.js", "Express", "JavaScript", "AI APIs", "Tailwind CSS"],
    features: [
      "Conversational AI chat interface",
      "Sentiment analysis & daily mood tracker",
      "Calm dark glassmorphism aesthetic",
      "Secure Express backend API integration",
      "Context-aware response memory",
    ],
    github: "https://github.com/parimaurya/alfred-ai",
    demo: "https://alfred-support.vercel.app",
    badge: "Full Stack AI",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#a855f7",
  },
  {
    id: "weather-app",
    name: "Weather App",
    subtitle: "Real-Time Atmospheric Forecast Dashboard",
    category: "Web Apps",
    description:
      "A responsive weather application that fetches real-time weather information and multi-day forecasts using a RESTful weather API.",
    longDescription:
      "A clean, lightweight weather dashboard featuring location auto-detection, hourly temperature charts, air quality metrics, and dynamic atmospheric weather condition visual cards.",
    tech: ["React", "JavaScript", "CSS3", "OpenWeather REST API"],
    features: [
      "Real-time weather data fetching",
      "5-day forecast breakdown",
      "Debounced global city search",
      "Dynamic background changes based on weather",
      "Mobile-optimized responsive design",
    ],
    github: "https://github.com/Pari-Maurya/Weather-App-",
    demo: "https://weather-deshboard.vercel.app/",
    badge: "API Showcase",
    gradient: "from-blue-500/20 via-sky-500/10 to-transparent",
    accentColor: "#60a5fa",
  },
  {
    id: "minichat",
    name: "MiniChat",
    subtitle: "Chat Application",
    category: "AI & Full Stack",
    description:
      "Implemented complete CRUD operations to create, view, edit, and delete chat messages.",
    longDescription:
      "MiniChat is a feature-rich full-stack chat application built using React, Express, and MongoDB. It allows users to perform full CRUD operations—creating, viewing, editing, and deleting chat messages with seamless state updates.",
    tech: ["React", "Express", "MongoDB", "Node.js", "JavaScript"],
    features: [
      "Implemented complete CRUD operations to create, view, edit, and delete chat messages",
      "Express REST API backend with MongoDB database storage",
      "Interactive messaging interface with dynamic update handling",
      "Clean responsive design and real-time state synchronization",
    ],
    github: "https://github.com/Pari-Maurya/MiniChat-CRUD-App",
    demo: "https://github.com/Pari-Maurya/MiniChat-CRUD-App",
    badge: "Full Stack MERN",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10b981",
  },
  {
    id: "manika",
    name: "Manika",
    subtitle: "Jewellery Website",
    category: "Web Apps",

    description:
      "Developed a responsive jewellery website using HTML and CSS.",
    longDescription:
      "Manika is a modern responsive jewellery showcase web platform crafted with clean semantic HTML and modern CSS. It presents curated jewellery items with smooth styling, responsive grid layouts, and polished visual appeal.",
    tech: ["HTML5", "CSS3"],
    features: [
      "Developed a responsive jewellery website using HTML and CSS",
      "Structured semantic HTML5 layout and custom CSS styling",
      "Mobile-first responsive design tailored for various screen sizes",
      "Interactive UI components and visual product cards",
    ],
    github: "https://github.com/Pari-Maurya/Manika---A-Jewelry-website",
    demo: "https://github.com/Pari-Maurya/Manika---A-Jewelry-website",
    badge: "Frontend UI",
    gradient: "from-amber-500/20 via-rose-500/10 to-transparent",
    accentColor: "#f59e0b",
  },
  // {
  //   id: "devmetrics",
  //   name: "DevMetrics AI",
  //   subtitle: "Developer Productivity & Code Insights",
  //   category: "AI & Full Stack",
  //   description:
  //     "Data science dashboard tracking code commit patterns, repository health metrics, and automated code review suggestions.",
  //   longDescription:
  //     "DevMetrics transforms raw GitHub activity into actionable productivity visualizations. It highlights coding velocity, pull request bottlenecks, and test coverage metrics.",
  //   tech: ["React", "Python", "Tailwind CSS", "GitHub API", "Chart.js"],
  //   features: [
  //     "GitHub REST API integration",
  //     "Commit frequency heatmaps",
  //     "Code readability & complexity scoring",
  //     "Interactive data visualizations",
  //   ],
  //   github: "https://github.com/parimaurya/devmetrics-ai",
  //   demo: "https://devmetrics.vercel.app",
  //   badge: "Data Science",
  //   gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  //   accentColor: "#f59e0b",
  // },
  // {
  //   id: "datapulse",
  //   name: "DataPulse Analytics",
  //   subtitle: "Predictive Analytics & Visualization Suite",
  //   category: "AI & Data",
  //   description:
  //     "An interactive analytics dashboard converting raw CSV datasets into clear statistical charts and predictive summaries.",
  //   longDescription:
  //     "Designed for data analysis tasks, DataPulse allows users to upload structured data and receive instant exploratory data analysis (EDA) charts and correlation matrices.",
  //   tech: ["Python", "React", "Express.js", "Data Analytics", "Tailwind CSS"],
  //   features: [
  //     "Drag-and-drop CSV parser",
  //     "Exploratory Data Analysis (EDA)",
  //     "Correlation matrix viewer",
  //     "Custom graph export",
  //   ],
  //   github: "https://github.com/parimaurya/datapulse",
  //   demo: "https://datapulse.vercel.app",
  //   badge: "Data Analytics",
  //   gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  //   accentColor: "#f43f5e",
  // },
  // {
  //   id: "taskflow-pro",
  //   name: "TaskFlow Pro",
  //   subtitle: "Agile Kanban & Workflow Manager",
  //   category: "SaaS & Tools",
  //   description:
  //     "Feature-packed project manager with interactive drag-and-drop boards, priority tags, and Redux state synchronization.",
  //   longDescription:
  //     "TaskFlow Pro optimizes team productivity with a sleek drag-and-drop interface, milestone counters, persistent state storage, and task activity timelines.",
  //   tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS"],
  //   features: [
  //     "Drag-and-drop Kanban columns",
  //     "Global state management with Redux",
  //     "Priority badges & due-date indicators",
  //     "Dark mode first design",
  //   ],
  //   github: "https://github.com/parimaurya/taskflow-pro",
  //   demo: "https://taskflow.vercel.app",
  //   badge: "State Management",
  //   gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  //   accentColor: "#6366f1",
  // },
  // {
  //   id: "genai-docuassistant",
  //   name: "GenAI DocuAssistant",
  //   subtitle: "Smart Document Q&A with Vector Search",
  //   category: "AI & Data",
  //   description:
  //     "Generative AI powered application allowing users to upload documents and perform semantic natural language Q&A.",
  //   longDescription:
  //     "Upload documents, ask complex questions, and receive pinpoint contextual summaries powered by modern AI text processing and semantic retrieval.",
  //   tech: ["React", "Generative AI", "Python", "FastAPI", "Tailwind CSS"],
  //   features: [
  //     "Document upload & text extraction",
  //     "Semantic natural language Q&A",
  //     "Page citation & snippet highlights",
  //     "Fast API backend endpoint",
  //   ],
  //   github: "https://github.com/parimaurya/docu-assistant",
  //   demo: "https://docu-assistant.vercel.app",
  //   badge: "GenAI Project",
  //   gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  //   accentColor: "#8b5cf6",
  // },
  // {
  //   id: "codegraph",
  //   name: "CodeGraph Visualizer",
  //   subtitle: "Interactive Data Structures & Algorithm Visualizer",
  //   category: "Web Apps",
  //   description:
  //     "An interactive web application demonstrating step-by-step executions of graph traversals, sorting, and binary tree algorithms.",
  //   longDescription:
  //     "CodeGraph helps CS students visualize complex DSA concepts like BFS, DFS, Dijkstra, QuickSort, and MergeSort through adjustable speed animations.",
  //   tech: ["React", "JavaScript", "HTML5 Canvas", "Tailwind CSS"],
  //   features: [
  //     "Interactive graph & array canvas",
  //     "Step-by-step animation controls",
  //     "Custom input data generation",
  //     "Code execution highlight side-panel",
  //   ],
  //   github: "https://github.com/parimaurya/codegraph-visualizer",
  //   demo: "https://codegraph.vercel.app",
  //   badge: "EdTech & DSA",
  //   gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  //   accentColor: "#14b8a6",
  // },
];

export const codingStats = {
  problemsSolved: 800,
  problemsSolvedDisplay: "800+",
  leetcodeStreak: "120+ Days",
  codechefRating: "1750+",
  platforms: [
    {
      name: "LeetCode",
      metric: "400+ Solved",
      subtext: "Array, DP, Trees, Graphs, Greedy",
      color: "from-amber-500 to-orange-500",
      icon: "Code",
      link: "https://leetcode.com/PariMaurya123",
    },
    // {
    //   name: "CodeChef",
    //   metric: "3 Star (1650+)",
    //   subtext: "Regular Contest Competitor",
    //   color: "from-yellow-600 to-amber-700",
    //   icon: "Trophy",
    //   link: "https://www.codechef.com/users/parimaurya",
    // },
    {
      name: "HackerRank",
      metric: "5 Stars",
      subtext: "Problem Solving & Python Skills",
      color: "from-emerald-500 to-green-600",
      icon: "Award",
      link: "https://www.hackerrank.com/profile/parimaurya2006",
    },
  ],
  dsaTopics: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems & Computer Networks",
    "System Design Fundamentals",
  ],
};

export const certificationsData = [
  {
    name: "AWS Academy - Introduction to cloud",
    organization: "Amazon Web Services (AWS)",
    year: "2024",
    link: "https://drive.google.com/file/d/1bRQkeJWR2GS7utpsriSFiCWBOBJK6l_T/view?usp=sharing",
    icon: "Cloud",
    color: "from-amber-500 to-orange-500",
    badge: "Cloud Computing",
  },
  {
    name: "AWS Academy - Cloud Foundations",
    organization: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://drive.google.com/file/d/1wZwrZlVk6wXSnAGfYnZ9SqMULxiZGy-V/view?usp=sharing",
    icon: "Cloud",
    color: "from-amber-500 to-orange-500",
    badge: "Cloud Computing",
  },
  {
    name: "NPTEL – Data Analytics with Python",
    organization: "NPTEL / IIT Roorkee",
    year: "2024",
    link: "https://drive.google.com/file/d/1i47f4lOaa1tVcvkltCHjYlJirnm1K5OH/view?usp=sharing",
    icon: "BarChart2",
    color: "from-blue-500 to-cyan-500",
    badge: "Data Science",
  },
  {
    name: "Google Generative AI Course",
    organization: "Google Cloud",
    year: "2025",
    link: "https://drive.google.com/file/d/1mbAfWDWPbAcw0W6BrJwYQmUuvjd22fws/view?usp=sharing",
    icon: "Sparkles",
    color: "from-purple-500 to-indigo-500",
    badge: "AI / GenAI",
  },
  {
    name: "Google Responsible AI Course",
    organization: "Google Cloud",
    year: "2025",
    link: "https://drive.google.com/file/d/15TeGtLPoGH7MNkMJ5PmkbWiVUtOzjh4Q/view?usp=sharing",
    icon: "Sparkles",
    color: "from-purple-500 to-indigo-500",
    badge: "AI / GenAI",
  },
  {
    name: "Getting started with Cisco Packet Tracker",
    organization: "Cisco",
    year: "2026",
    link: "https://drive.google.com/file/d/1Zs5RAND8x4XnbwG6XmbYsngwSlFxE0fH/view?usp=sharing",
    icon: "Globe",
    color: "from-emerald-500 to-teal-500",
    badge: "Networking",
  },
  {
    name: "Exploring Network with CPT",
    organization: "Cisco",
    year: "2026",
    link: "https://drive.google.com/file/d/1lyx_GLWpxN9dH2t-73SLLXd8z1WGzEm8/view?usp=sharing",
    icon: "Globe",
    color: "from-emerald-500 to-teal-500",
    badge: "Networking",
  },
  {
    name: "Networking Basics",
    organization: "Cisco",
    year: "2026",
    link: "https://drive.google.com/file/d/1SemSpoQLpgiWVG28WlDG5ZHTdEEzPQ1M/view?usp=sharing",
    icon: "Globe",
    color: "from-emerald-500 to-teal-500",
    badge: "Networking",
  },

];

