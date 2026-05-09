import { Cert, Project, SkillCategory, SocialLink, TimelineYear } from './types';

export const certs: Cert[] = [
  {
    name: 'CompTIA Security+',
    sub: 'Cybersecurity · Risk Management · Secure Systems',
    href: 'https://seanconley.dev/website-files/CompTIA_Security_Plus_certificate.pdf',
    status: 'verified',
  },
  {
    name: 'Palantir Foundry & AIP Builder',
    sub: 'Data Pipelines · Ontology · AI Workflows',
    href: 'https://seanconley.dev/website-files/Foundry and AIP Builder Foundations Quiz.pdf',
    status: 'verified',
  },
  {
    name: 'Intro to Foundry & AIP',
    sub: 'Palantir Platform Foundations',
    href: 'https://seanconley.dev/website-files/Introduction to Foundry and AIP.pdf',
    status: 'verified',
  },
  {
    name: 'AWS Cloud Practitioner',
    sub: 'In progress — expected 2026',
    status: 'pending',
  },
];

export const skillCategories: SkillCategory[] = [
  { name: 'Languages', skills: ['Python', 'Java', 'C', 'SQL', 'TypeScript'] },
  { name: 'Web', skills: ['React', 'Next.js', 'Tailwind'] },
  { name: 'Cloud', skills: ['AWS Lambda', 'AWS SES', 'Firebase'] },
  { name: 'Systems', skills: ['x86 ASM', 'GDB', 'Unix', 'Valgrind'] },
  { name: 'Data', skills: ['MySQL', 'Oracle SQL', 'Palantir Foundry'] },
  { name: 'Tools', skills: ['Git', 'CI/CD', 'Android Studio'] },
];

export const projects: Project[] = [
  {
    num: '01',
    title: 'Portfolio Website',
    desc: 'Full-stack personal site with a serverless contact system and CI/CD pipeline via GitHub Actions and Vercel. Demonstrates real-world cloud integration, infrastructure-as-code discipline, and production-grade frontend engineering.',
    tags: ['Next.js', 'React', 'TypeScript', 'AWS Lambda', 'AWS SES', 'CI/CD', 'Tailwind'],
    category: 'Full-Stack · Live',
    live: true,
    link: 'https://github.com/SeanC19/website.git',
  },
  {
    num: '02',
    title: 'Unix Task Manager',
    desc: 'Shell simulator in C supporting foreground and background execution, full signal handling (SIGINT, SIGTSTP, SIGCHLD, SIGCONT), I/O redirection, and Unix pipe support. Built on a custom doubly linked list with event-based lifecycle logging.',
    tags: ['C', 'GDB', 'Valgrind', 'Unix', 'Signal Handling', 'IPC'],
    category: 'Systems · C',
  },
  {
    num: '03',
    title: 'Binary Bomb — Reverse Engineering',
    desc: 'Defused a multi-phase compiled binary by analyzing control flow, stack frames, and register state at the x86-64 assembly level with no source code access. Used GDB and objdump to reconstruct program logic and navigate failure-triggered execution paths.',
    tags: ['x86-64 Assembly', 'GDB', 'objdump', 'Reverse Engineering', 'C'],
    category: 'Security · Low-Level',
  },
  {
    num: '04',
    title: 'Yahtzee Multiplayer Android Game',
    desc: 'Real-time multiplayer Yahtzee across multiple Android devices using Firebase Realtime Database for backend synchronization. Implements join-code sessions, synchronized game state, and enforced turn-based logic.',
    tags: ['Java', 'Android Studio', 'Firebase', 'XML Layouts'],
    category: 'Mobile · Android',
  },
  {
    num: '05',
    title: 'Palantir Foundry Data Workflow',
    desc: 'End-to-end data pipeline inside Palantir Foundry — covering ingestion, transformation, ontology modeling, and AI-driven operational actions. Demonstrates enterprise-grade data platform skills applicable to government and defense-adjacent environments.',
    tags: ['Palantir Foundry', 'Ontology', 'AIP', 'Pipelines', 'Code Repos'],
    category: 'Enterprise · Data',
  },
  {
    num: '06',
    title: 'Role-Based Form Processing System',
    desc: 'Multi-stage workflow system supporting applicant, reviewer, and approver roles with enforced state transitions, data validation, and MySQL persistence via JDBC. Built using Agile methodology with rotating Scrum Masters and UML-guided architecture.',
    tags: ['Java', 'JDBC', 'MySQL', 'Agile', 'UML'],
    category: 'Backend · Java',
  },
  {
    num: '07',
    title: 'Campus Workshop Registration System',
    desc: 'Menu-driven CLI application using Java JDBC and Oracle SQL to manage campus workshops and registrations. Supports partial-match search, capacity enforcement, duplicate prevention, and date-stamped registration tracking.',
    tags: ['Java', 'JDBC', 'Oracle SQL', 'CLI'],
    category: 'Backend · Database',
  },
];

export const timeline: TimelineYear[] = [
  {
    year: '2026',
    entries: [
      {
        type: 'upcoming',
        title: 'Director of Computer Science',
        org: 'TIC Summer Camp · Jun 2026 — Aug 2026',
        date: '2026',
        desc: 'Promoted to lead the CS program — responsible for curriculum design, instructor coordination, and overseeing all programming instruction across age groups.',
        muted: true,
      },
      {
        type: 'upcoming',
        title: 'AWS Certified Cloud Practitioner',
        org: 'Amazon Web Services · Expected 2026',
        date: '2026',
        desc: 'Building on hands-on AWS experience with Lambda, SES, and API Gateway. Currently studying for certification exam.',
        muted: true,
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        type: 'work',
        title: 'Programming Counselor',
        org: 'TIC Summer Camp · Jun 2025 — Aug 2025',
        date: '2025',
        desc: 'Taught programming fundamentals to students across multiple age groups. Developed and delivered hands-on curriculum, managed classroom environment, and mentored junior campers through projects.',
      },
      {
        type: 'cert',
        title: 'CompTIA Security+',
        org: 'CompTIA · Verified',
        date: '2025',
        desc: 'Industry-recognized cybersecurity certification covering network security, threat management, cryptography, identity management, and risk mitigation.',
      },
      {
        type: 'cert',
        title: 'Palantir Foundry & AIP Builder Foundations',
        org: 'Palantir Technologies · Verified',
        date: '2025',
        desc: 'Hands-on training in enterprise data pipeline construction, ontology design, and AI-driven operational workflow development within the Foundry platform.',
      },
      {
        type: 'cert',
        title: 'Introduction to Palantir Foundry & AIP',
        org: 'Palantir Technologies · Verified',
        date: '2025',
        desc: 'Foundation-level certification covering core Foundry concepts, data ingestion, ontology basics, and AIP capabilities.',
      },
    ],
  },
  {
    year: '2024',
    entries: [
      {
        type: 'leadership',
        title: 'President, Club Hockey Team',
        org: 'George Mason University · 2024 — Present',
        date: '2024',
        desc: 'Lead all team operations including logistics, travel coordination, scheduling, and internal communications for the GMU club hockey program.',
      },
      {
        type: 'honor',
        title: "Dean's List — Summer 2024",
        org: 'George Mason University',
        date: '2024',
        desc: 'Recognized for academic excellence during the Summer 2024 semester.',
      },
      {
        type: 'honor',
        title: "Dean's List — Spring 2024",
        org: 'George Mason University',
        date: '2024',
        desc: 'Recognized for academic excellence during the Spring 2024 semester.',
      },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        type: 'education',
        title: 'B.S. Computer Science',
        org: 'George Mason University · 2023 — Present',
        date: '2023',
        desc: 'Focus on software engineering and cybersecurity. Coursework includes OS internals, systems programming, databases, software design, and algorithms.',
      },
      {
        type: 'honor',
        title: 'AP Scholar Award',
        org: 'College Board · May 2023',
        date: '2023',
        desc: 'Awarded to students who demonstrate college-level achievement on AP examinations.',
      },
      {
        type: 'honor',
        title: 'Marine Corps Scholastic Excellence Award',
        org: 'United States Marine Corps · May 2023',
        date: '2023',
        desc: 'Presented by the Marine Corps to high school students who demonstrate exceptional academic achievement and character.',
      },
    ],
  },
  {
    year: '2022',
    entries: [
      {
        type: 'honor',
        title: 'Eagle Scout',
        org: 'Boy Scouts of America',
        date: '2022',
        desc: 'Highest rank in Scouting, earned by fewer than 4% of all Scouts. Demonstrated multi-year commitment to leadership, community service, and project management.',
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    badge: 'IN',
    name: 'LinkedIn',
    handle: 'sean-conley-235558250',
    href: 'https://www.linkedin.com/in/sean-conley-235558250/',
  },
  {
    badge: 'GH',
    name: 'GitHub',
    handle: 'SeanC19',
    href: 'https://github.com/SeanC19',
  },
  {
    badge: 'GL',
    name: 'GitLab (GMU)',
    handle: 'sconley5',
    href: 'https://gitlab.orc.gmu.edu/sconley5',
  },
  {
    badge: 'LC',
    name: 'LeetCode',
    handle: 'SliverSlick',
    href: 'https://leetcode.com/u/SliverSlick/',
  },
];