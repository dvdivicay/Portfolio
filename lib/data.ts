// ----- Site content (single source of truth) -----

export const site = {
  name: "Donald V. Divicay Jr.",
  role: "Embedded Software Engineer",
  location: "Cebu City, Philippines",
  email: "dvdivicay23@gmail.com",
  phone: "+639086433710",
  phoneDisplay: "+63 908 643 3710",
  resume: "/Donald-Divicay-Resume.pdf",
  socials: {
    github: "https://github.com/dvdivicay",
    linkedin: "https://www.linkedin.com/in/dvdivicay23/",
    instagram: "https://www.instagram.com/heyy.jay23",
    facebook: "https://www.facebook.com/JRASOXS/",
  },
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const marqueeItems = [
  "Zephyr RTOS", "ESP-IDF", "FreeRTOS", "I2C", "UART", "SPI", "BLE",
  "RS485 Modbus", "nRF Connect SDK", "KiCad", "Embedded C/C++", "Sensor Integration",
];

export const stats = [
  { num: "3", suffix: "", label: "Professional engineering roles" },
  { num: "🏆", suffix: "", label: "Overall Best Paper — IIEE Research Colloquia 2026", highlight: true },
  { num: "6", suffix: "", label: "Shipped hardware & full-stack projects" },
  { num: "9", suffix: "", label: "Programming languages (C → Verilog)" },
];

export type Experience = {
  role: string;
  org: string;
  date: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Embedded Software Engineer",
    org: "Xeleqt Technology Innovations Inc.",
    date: "Jun 2026 – Present",
    points: [
      "Develop production firmware for capacitive sensing and multi-sensor platforms on the Nordic nRF54 series (nRF54LM20B) with Zephyr RTOS.",
      "Built a capacitive fuel-level sensing system with on-device AI inferencing for real-time fleet truck fuel monitoring.",
      "Own low-level driver development (I2C, UART, SPI), BLE communication pipelines, and RS485 Modbus integrations with CRC validation.",
      "Lead hardware bring-up, signal validation, and performance optimization for field-deployed systems.",
    ],
    tags: ["Zephyr RTOS", "nRF54", "Edge AI", "BLE", "RS485 Modbus"],
  },
  {
    role: "Embedded Systems Engineer Intern",
    org: "Xeleqt Technology Innovations Inc.",
    date: "Jan – Apr 2026",
    points: [
      "Designed modular multi-sensor firmware architectures to improve scalability and maintainability.",
      "Built custom drivers for I2C, UART, and SPI sensors for reliable real-time data acquisition.",
      "Developed BLE scanning & parsing pipelines and RS485 Modbus drivers with CRC validation and structured data handling.",
      "Performed hardware debugging, signal validation, and firmware bring-up for stable, efficient operation.",
    ],
    tags: ["Zephyr RTOS", "BLE", "RS485 Modbus", "I2C / SPI / UART"],
  },
  {
    role: "Software Developer Intern",
    org: "Department of Science and Technology (DOST)",
    date: "Jun – Aug 2025",
    points: [
      "Developed and implemented web widgets for government websites using PHP and JavaScript.",
      "Focused on usability, functionality, and maintainability across systems.",
      "Collaborated with a development team to integrate features, troubleshoot issues, and ensure reliable performance.",
    ],
    tags: ["PHP", "JavaScript", "Web Widgets"],
  },
];

export type Project = {
  art: "fish" | "firmware" | "zentask" | "fuel" | "robot" | "cashwise";
  flag: string;
  title: string;
  desc: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    art: "fuel",
    flag: "Featured · Current work",
    title: "Capacitive Fuel-Level Sensor with Edge AI",
    desc: "A capacitive fuel-level sensor on the Nordic nRF54LM20B that runs AI inference right at the edge — giving fleet operators accurate, tamper-resistant fuel readings in real time, truck by truck.",
    tags: ["nRF54LM20B", "Edge AI", "Capacitive Sensing", "Fleet IoT"],
  },
  {
    art: "fish",
    flag: "Featured · Award-winning",
    title: "Non-Invasive Fish Freshness Assessment",
    desc: "An intelligent bio-capacitance system that grades fish freshness without ever cutting into the flesh, classifying it in real time. Awarded Overall Best Paper at the IIEE Engineering Research Colloquia 2026.",
    tags: ["Bio-Capacitance", "Sensor DSP", "Classification"],
  },
  {
    art: "firmware",
    flag: "Firmware",
    title: "Multi-Sensor Ambient Sensing Platform",
    desc: "A modular Zephyr RTOS platform that unifies a suite of ambient sensors under one clean architecture — centralized data management, real-time monitoring, and firmware built to scale.",
    tags: ["Zephyr RTOS", "Drivers", "Real-time"],
  },
  {
    art: "robot",
    flag: "Robotics",
    title: "Sumo x Line-Follower x Balloon Popping Robot",
    desc: "A three-personality robot that switches between aggressive sumo combat, balloon popping, and precise line-following. A full hardware build — custom PCB, 3D-printed chassis, sensor integration, and real-time control firmware.",
    tags: ["Arduino", "C++", "KiCad", "Fusion 360"],
  },
  {
    art: "zentask",
    flag: "Full-stack",
    title: "ZenTask",
    desc: "A full-stack task manager built on Next.js 15 and Supabase, styled with Tailwind CSS — secure authentication and fast, focused task tracking that stays out of your way.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    art: "cashwise",
    flag: "Mobile",
    title: "CashWise",
    desc: "A budget-tracking app in Flutter that makes daily spending effortless — quick expense logging, category management, and interactive charts, all backed by fast on-device SQLite storage.",
    tags: ["Flutter", "Dart", "SQLite"],
  },
];

export const skillGroups = [
  {
    title: "Embedded & Firmware",
    icon: "cpu",
    items: [
      "Embedded C/C++",
      "Zephyr RTOS",
      "FreeRTOS",
      "Driver Development — I2C, UART, SPI",
      "BLE & RS485 Modbus",
      "Sensor Integration & Data Acquisition",
      "Firmware Architecture & Modular Design",
    ],
  },
  {
    title: "Hardware & Tools",
    icon: "chip",
    items: [
      "ESP32 / ESP8266",
      "Nordic nRF",
      "nRF Connect SDK",
      "PCB Design (KiCad)",
      "Hardware Debugging Tools",
      "Signal & Bring-up Validation",
    ],
  },
];

export const techGroups = [
  {
    title: "Software & Web",
    icon: "code",
    items: [
      { icon: "devicon-react-original colored", label: "React" },
      { icon: "devicon-nextjs-plain", label: "Next.js" },
      { icon: "devicon-nodejs-plain colored", label: "Node.js" },
      { icon: "devicon-tailwindcss-original colored", label: "Tailwind CSS" },
      { icon: "devicon-supabase-plain colored", label: "Supabase" },
      { icon: "devicon-flutter-plain colored", label: "Flutter" },
      { icon: "devicon-sqlite-plain colored", label: "SQLite" },
      { icon: "devicon-arduino-plain colored", label: "Arduino" },
      { icon: "devicon-php-plain colored", label: "PHP" },
      { icon: "devicon-javascript-plain colored", label: "JavaScript" },
      { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
      { icon: "devicon-git-plain colored", label: "Git" },
      { icon: "devicon-cmake-plain colored", label: "CMake" },
    ],
  },
  {
    title: "Languages",
    icon: "terminal",
    items: [
      { icon: "devicon-c-plain colored", label: "C" },
      { icon: "devicon-cplusplus-plain colored", label: "C++" },
      { icon: "devicon-csharp-plain colored", label: "C#" },
      { icon: "devicon-python-plain colored", label: "Python" },
      { icon: "devicon-java-plain colored", label: "Java" },
      { icon: "devicon-javascript-plain colored", label: "JavaScript" },
      { icon: "devicon-dart-plain colored", label: "Dart" },
      { icon: "badge:V", label: "Verilog" },
      { icon: "devicon-azuresqldatabase-plain colored", label: "SQL" },
    ],
  },
];

export const credentials = [
  {
    title: "Education",
    icon: "edu",
    items: [
      { name: "BS in Computer Engineering", meta: "Cebu Technological University — Main Campus", date: "2022 – 2026" },
      { name: "DOST Junior-Level Science Scholarship — Merit", meta: "Department of Science and Technology", date: "2024 – 2026" },
    ],
  },
  {
    title: "Certifications",
    icon: "cert",
    items: [
      { name: "nRF Connect SDK — Intermediate", meta: "Nordic Semiconductor · 2026" },
      { name: "Bluetooth Low Energy Fundamentals", meta: "Nordic Semiconductor · 2026" },
      { name: "TESDA — Data Analysis, IoT, Java, CSS NCII", meta: "Call Center Academy" },
    ],
  },
  {
    title: "Awards",
    icon: "award",
    items: [
      { name: "Overall Best Paper", meta: "IIEE Engineering Research Colloquia 2026" },
      { name: "Best Paper — Circuits, Sensors & Devices", meta: "IIEE Engineering Research Colloquia 2026" },
    ],
  },
];
