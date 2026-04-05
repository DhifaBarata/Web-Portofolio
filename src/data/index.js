/* ============================================
   DATA — semua konten statis portofolio
   File: src/data/index.js
   ============================================ */

export const PROJECTS = [
  {
    id: 1,
    title: "Cabornation",
    desc: "CaborNation adalah sistem web yang menyediakan solusi lengkap untuk pendaftaran dan manajemen berbagai turnamen olahraga..",
    tags: ["React", "Node.js", "MongoDB", "Midtrans"],
    type: "fullstack",
    typeLabel: "Back End",
    mockType: "image",
    image: "/Cabornation.png", 
    demo: "#",
    code: "https://github.com/DhifaBarata/CaborNation",
  },
  {
    id: 2,
    title: "Golite",
    desc: "Pengembangan GoLite Reservation System merupakan implementasi PBO berupa aplikasi reservasi transportasi desktop sederhana.",
    tags: ["C#", "C++", "Python", "OOP"],
    type: "mobile",
    typeLabel: "App Desktop",
    mockType: "image",       
    image: "/Golite.png",   
    demo: "#",
    code: "https://github.com/Rahayuu11/GoLite",
  },
  {
    id: 3,
    title: "Inventago",
    desc: "Aplikasi Inventaris Inventago berbasis VB membantu pengelolaan barang lebih efektif, mengurangi kesalahan, dan mempercepat pelaporan.",
    tags: ["Next.js", "PostgreSQL", "Chart.js", "Redis"],
    type: "VB",
    typeLabel: "App Desktop",
    mockType: "image",          
    image: "/Inventago.png",   
    demo: "#",
    code: "https://github.com/DhifaBarata",
    code: "#",
  },

];

export const PROJECT_FILTERS = [
  { key: "semua",    label: "Semua" },
  { key: "web",      label: "Web App" },
  { key: "mobile",   label: "Mobile" },
  { key: "fullstack",label: "Full Stack" },
];

export const SKILLS = [
  {
    icon: "🌐",
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "📱",
    title: "Mobile",
    items: ["React Native", "Flutter", "Firebase", "Push Notification", "App Store"],
  },
  {
    icon: "☁️",
    title: "DevOps & Tools",
    items: ["Docker", "Git", "CI/CD", "AWS", "Vercel", "Linux"],
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Sekarang",
    title: "Mahasiswa S1 Pendidikan Teknologi Informasi",
    company: "Universitas Negeri Surabaya (UNESA)",
    desc: "Menempuh pendidikan tinggi di program studi Pendidikan Teknologi Informasi — memperdalam rekayasa perangkat lunak, sistem informasi, dan pedagogi teknologi berbasis kurikulum nasional.",
    techs: ["Rekayasa Perangkat Lunak", "Sistem Informasi", "Pendidikan Teknologi"],
    type: "education",
  },
  {
    period: "2022 — 2024",
    title: "SIC — IoT Networking",
    company: "Samsung Innovation Campus · Workshop & Kompetisi IoT",
    desc: "Mengikuti program Samsung Innovation Campus (SIC) di bidang Internet of Things & Networking. Belajar arsitektur IoT, protokol jaringan, dan implementasi proyek berbasis sensor. Meraih 2 sertifikasi resmi: Juara Harapan dan Lulus Penilaian.",
    techs: ["IoT", "Networking", "Arduino", "Protokol Sensor", "Samsung SIC"],
    type: "certification",
    certifications: [
      {
        label: "Juara Harapan",
        title: "Sertifikasi SIC — IoT Competition",
        sub: "Meraih posisi juara harapan dalam kompetisi SIC",
        variant: "winner",
      },
      {
        label: "Lulus Penilaian",
        title: "Sertifikasi SIC — IoT Assessment",
        sub: "Dinyatakan lulus pada penilaian kompetensi SIC",
        variant: "passed",
      },
    ],
  },
  {
    period: "2022 — 2023",
    title: "Magang Teknisi — Samsung Service Center",
    company: "Samsung · Expert Class & Praktik Kerja Lapangan",
    desc: "Menjalani program magang sebagai teknisi smartphone Samsung — meliputi diagnosa kerusakan perangkat, penggantian komponen, kalibrasi perangkat lunak, dan pelayanan purna jual sesuai standar Samsung.",
    techs: ["Teknisi HP", "Hardware Diagnosis", "Perbaikan Komponen", "Samsung Service"],
    type: "internship",
  },
  {
    period: "2021 — 2024",
    title: "SMKS Al-Huda Kota Kediri",
    company: "Sekolah Menengah Kejuruan · Teknik Komputer & Jaringan (TKJ)",
    desc: "Menyelesaikan pendidikan vokasional di jurusan Teknik Komputer dan Jaringan. Mempelajari dasar komputer, instalasi sistem operasi, jaringan lokal, pemrograman dasar, dan troubleshooting perangkat keras.",
    techs: ["TKJ", "Jaringan Komputer", "Hardware", "Linux", "Pemrograman Dasar"],
    type: "education",
  },
];

export const CONTACT_LINKS = [
  { icon: "📧", label: "Email",    value: "dhifabarata@gmail.com",          href: "mailto:dhifabarata@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "DhifaBarataPutra", href: "https://www.linkedin.com/in/dhifabarataputra" },
  { icon: "🐙", label: "GitHub",   value: "DhifaBarata",     href: "https://github.com/DhifaBarata" },
  { icon: "IG", label: "Instagram", value: "Imndhipp._",     href: "https://www.instagram.com/imndhipp._/" },
  { icon: "📍", label: "Lokasi",   value: "Surabaya, Jawa Timur",        href: "https://maps.app.goo.gl/tf7WCJrE6zwbgR8UA" },
];

export const HERO_STATS = [
  { num: "2+",  label: "Tahun Exp" },
  { num: "10+", label: "Proyek"    },
  // { num: "15+", label: "Klien"     },
];

export const ABOUT_CARDS = [
    {
    icon: "🎓",
    title: "Pendidikan",
    desc: "SMK TKJ Al-Huda Kediri → S1 Pendidikan Teknologi Informasi, Universitas Negeri Surabaya (2024–sekarang).",
  },
  {
    icon: "🌐",
    title: "Keahlian Teknis",
    desc: "Berpengalaman di bidang IoT & Networking lewat program Samsung Innovation Campus (SIC) — dari arsitektur sensor hingga konfigurasi jaringan.",
  },
  {
    icon: "🏅",
    title: "Sertifikasi",
    desc: "2 sertifikasi resmi SIC: Juara Harapan kompetisi IoT & Lulus Penilaian kompetensi. Ditambah sertifikasi dari himpunan mahasiswa.",
  },
  {
    icon: "⚡",
    title: "Ketua Dept. Ekraf",
    desc: "Memimpin Departemen Ekonomi Kreatif di himpunan — sudah menjalankan 3 proyek ekraf aktif bersama tim.",
  },,
];

export const SOFT_SKILLS = [
  "Problem Solving", "Critical Thinking", "Time Management",
  "UI Sense", "Team Work", "Fast Komunikasi","IoT Enthusiast",
  "Networking","Smartphone Repair","Teknisi HP","Teknisi Jaringan",
];

export const SOCIAL_LINKS = [
  { icon: "🐙", href: "https://github.com/DhifaBarata", label: "GitHub"   },
  { icon: "💼", href: "https://www.linkedin.com/in/dhifabarataputra", label: "LinkedIn" },
  { icon: "📧", href: "mailto:dhifabarata@gmail.com", label: "Email"    },
  { icon: "IG", href: "https://www.instagram.com/imndhipp._/", label: "Instagram"  },
];
