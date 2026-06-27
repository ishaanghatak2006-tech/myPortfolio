export const projects = [
  {
    name: "CubiCode",
    featured: true,
    tagline: "Self-hosted competitive programming platform",
    description:
      "A self-hosted LeetCode-style coding platform with an integrated Docker-based judging engine. Features secure multi-language code execution, JWT authentication, problem management, and a Monaco-powered coding workspace.",
    architecture:
      "Built using a React frontend, Express backend, MongoDB database, and Docker containers for isolated code execution through the LocalCodeJudge engine.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "JWT"],
    features: [
      "Secure multi-language code execution",
      "Docker-based isolated judging",
      "Monaco code editor",
      "JWT authentication",
      "Problem management and submissions"
    ],
    github: "https://github.com/ishaanghatak2006-tech/CubiCode",
    type: "Full Stack",
    year: "2025"
  },
  {
    name: "LocalCodeJudge",
    tagline: "Docker-based code execution engine",
    description:
      "A secure offline judging engine that compiles and executes user submissions inside isolated Docker containers. Supports multiple programming languages while reporting runtime, memory usage, and execution verdicts.",
    techStack: ["Node.js", "Docker", "Express.js"],
    github: "https://github.com/ishaanghatak2006-tech/LocalCodeJudge",
    type: "Backend",
    year: "2025"
  },
  {
    name: "HandArM2",
    tagline: "Gesture-controlled 3D model viewer",
    description:
      "A computer vision application that enables intuitive manipulation of 3D models using hand gestures. Built with MediaPipe, OpenCV, and the Ursina Engine, featuring smooth gesture tracking and on-demand model loading.",
    techStack: ["Python", "MediaPipe", "OpenCV", "Ursina Engine", "NumPy"],
    github: "https://github.com/IITJ-CLARITY-Lab/Hand-AR",
    type: "Computer Vision",
    year: "2025"
  },
  {
    name: "JaNET",
    tagline: "Graph-based social network analysis",
    description:
      "A social media network simulator that models users and interactions using weighted directed graphs. Implements recommendation systems, community analysis, and graph traversal algorithms for large-scale network analysis.",
    techStack: ["C++", "Graph Algorithms", "Data Structures"],
    github: "https://github.com/AdityaPandey2006/JaNET",
    type: "Algorithms",
    year: "2025"
  },
  {
    name: "Snail",
    tagline: "Custom Unix shell",
    description:
      "A Unix-like shell supporting built-in and external commands, piping, I/O redirection, background execution, persistent command history, and a trash/restore system built using POSIX system calls.",
    techStack: ["C", "POSIX", "Linux System Calls"],
    github: "https://github.com/AdityaPandey2006/Snail",
    type: "Systems",
    year: "2025"
  },
  {
    name: "NER Analysis",
    tagline: "Named Entity Recognition benchmark",
    description:
      "A comparative study of Named Entity Recognition models including HMM, MEMM, Vanilla RNN, CNN, and BiLSTM on the CoNLL-2003 dataset, analyzing accuracy, F1 score, and training efficiency.",
    techStack: ["Python", "PyTorch", "NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/ishaanghatak2006-tech/NAMED-ENTITY-RECOGNISATION-NER-",
    type: "Machine Learning",
    year: "2025"
  },
  {
    name: "Snake Game",
    tagline: "Classic arcade game",
    description:
      "A modern implementation of the classic Snake game featuring smooth controls, score tracking, collision detection, and progressively increasing difficulty.",
    techStack: ["C++", "Raylib"],
    github: "https://github.com/ishaanghatak2006-tech/Snake_game_in-C",
    type: "Game Development",
    year: "2024"
  },
  {
    name: "Star Raider",
    tagline: "2D arcade space shooter",
    description:
      "An action-packed 2D space shooter featuring enemy waves, boss encounters, projectile mechanics, collision detection, scoring, and progressively increasing gameplay difficulty.",
    techStack: ["C++", "SFML"],
    github: "https://github.com/ishaanghatak2006-tech/Star-Raider-Space-Shooter-game-in-cpp",
    type: "Game Development",
    year: "2024"
  }
];