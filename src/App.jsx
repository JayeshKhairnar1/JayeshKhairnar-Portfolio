
import React, { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const skills = [
    { title: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", items: [".NET Core", "ASP.NET MVC", "Web API", "C#", "REST APIs", "JWT"] },
    { title: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", items: ["React", "JavaScript", "HTML5", "CSS3", "jQuery", "Razor Pages"] },
    { title: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", items: ["SQL Server", "EF Core", "Stored Procedures", "CTEs", "Firestore"] },
    { title: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", items: ["Git", "Azure CI/CD", "Snyk","Cursor","Github Copilot"] },
  ];

  const projects = [
    {
      number: "01",
      title: "eService+",
      type: "ENTERPRISE PRODUCT",
      description:
        "Enterprise service management platform supporting service-order allocation, scheduling, reporting, and role-based workflows.",
      tags: [".NET 9", "ASP.NET", "SQL Server", "REST API", "Razor Pages"],
      highlights: [
        "Delivered 25+ features across 6+ General Availability releases.",
        "Built 10+ responsive, role-based Razor Pages screens.",
        "Reduced paginated report loading time to approximately 3 seconds.",
        "Developed secure APIs and media uploads for images, videos, and documents.",
      ],
    },
    {
      number: "02",
      title: "Collect Diagnostic",
      type: "MONITORING & DIAGNOSTICS",
      description:
        "A monitoring platform for customer URLs and API endpoints, with real-time diagnostics and secure application navigation.",
      tags: ["ASP.NET", "JWT", "Firestore", "SQL Server", "NLog"],
      highlights: [
        "Built a real-time URL and API monitoring dashboard.",
        "Implemented JWT authentication and secure cross-app navigation.",
        "Migrated diagnostic logs from SQL Server to Firebase Firestore.",
        "Created reusable Firestore repositories and integration helpers.",
      ],
    },
    {
      number: "03",
      title: "Vehicle Configurator",
      type: "PERSONAL PROJECT",
      description:
        "A B2B vehicle configuration and leasing platform that dynamically calculates pricing based on selected vehicle options.",
      tags: [".NET 7", "React 18", "EF Core", "SQL Server", "JWT"],
      highlights: [
        "Built .NET 7 APIs with EF Core, SQL Server, React, and JWT authentication.",
        "Created database-driven vehicle configuration and leasing workflows.",
        "Dynamically recalculates pricing from selected vehicle configurations.",
        "Generates PDF invoices and sends them automatically by email.",
      ],
    },
    {
      number: "04",
      title: "Movie Discovery App",
      type: "PERSONAL PROJECT",
      description:
        "A responsive movie discovery application powered by TMDB, featuring search, movie details, and persistent favourites.",
      tags: ["React", "TMDB API", "React Router", "Bootstrap"],
      highlights: [
        "Built movie search, dynamic listings, and detailed poster views using TMDB.",
        "Implemented persistent favourites with Local Storage.",
        "Created reusable components with React Hooks and React Router.",
      ],
    },
  ];

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "Vitaledge Technologies",
      date: "Sept 2024 — Present",
      location: "Remote",
      points: [
        "Own features across enterprise application frontend, backend, and database layers.",
        "Support 6+ General Availability releases and deliver 25+ features across .NET and Razor Pages products.",
        "Develop secure REST APIs, role-based workflows, POCs, Firebase notifications, and reusable backend services.",
        "Optimize SQL queries, stored procedures, and indexes for allocation, scheduling, and reporting workflows.",
        "Remediate Snyk findings, troubleshoot customer production issues, and support deployments and environment stability.",
        "Created development and UAT environments and upgraded the existing codebase to .NET 9.",
      ],
    },
  ];

  const education = [
    {
      degree: "Post Graduate Diploma in Advanced Computing",
      school: "SM VITA · CDAC Mumbai",
      date: "Sept 2024 — Present",
    },
    {
      degree: "Bachelor of Electrical Engineering",
      school: "PES's Modern College of Engineering, Pune",
      date: "June 2015 — May 2019",
    },
  ];

  const certificates = [
    { title: "Monthly Spotlight Award", image: "/certificates/Monthly Spotlight Award.jpg", type: "Company Recognition" },
    { title: "Impact Award · Oct 2026", image: "/certificates/Impact Award Oct 2026.jpg", type: "Company Recognition" },
    { title: "Certificate of Appreciation", image: "/certificates/cert of appreciation.jpg", type: "Company Recognition" },
  ];

  const employeeRecognition = "Employee of the Month · 3×";

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

    :root {
      --bg: #090711;
      --panel: #12101d;
      --panel2: #1a1728;
      --text: #f4f1fa;
      --muted: #aaa4b8;
      --violet: #b69cff;
      --violet-strong: #d0c2ff;
      --violet-soft: rgba(182,156,255,.14);
      --line: #302b43;
      --green: var(--violet);
      color-scheme: dark;
    }

    :root[data-theme='light'] {
      --bg: #f7f5fb;
      --panel: #ffffff;
      --panel2: #efecf7;
      --text: #201a2d;
      --muted: #716a7d;
      --violet: #6746c4;
      --violet-strong: #5133a7;
      --violet-soft: rgba(103,70,196,.10);
      --line: #ddd7ea;
      --green: var(--violet);
      color-scheme: light;
    }

    :root[data-theme='light'] .navlinks a { color: var(--muted); }
    :root[data-theme='light'] .navlinks a:hover,
    :root[data-theme='light'] .nav-contact { color: var(--violet) !important; }
    :root[data-theme='light'] .nav-contact { border-color: var(--line); }
    :root[data-theme='light'] .surface,
    :root[data-theme='light'] .project,
    :root[data-theme='light'] .mini-product,
    :root[data-theme='light'] .stat { background: var(--panel); }
    :root[data-theme='light'] .surface,
    :root[data-theme='light'] .project { background: linear-gradient(145deg, #ffffff, #f5f2fb); }
    :root[data-theme='light'] .about-text,
    :root[data-theme='light'] .bullet-list,
    :root[data-theme='light'] .project li { color: var(--muted); }
    :root[data-theme='light'] .tag,
    :root[data-theme='light'] .skill-card .tag,
    :root[data-theme='light'] .project .tag { background: #f1edf8; border-color: #ded6ef; color: #554d63; }
    :root[data-theme='light'] .edu-icon { background: var(--violet-soft); }
    :root[data-theme='light'] .btn-secondary {
      background: #f2eff8;
      color: var(--violet-strong);
      border-color: #dcd5e9;
    }
    :root[data-theme='light'] .btn-secondary:hover { background: #e9e3f4; }
    :root[data-theme='light'] .contact-panel {
      border-color: #d8d1e7;
      background:
        radial-gradient(ellipse at 100% 0%, rgba(103,70,196,.12), transparent 48%),
        var(--panel);
      box-shadow: 0 24px 60px rgba(47,36,72,.08);
    }
    :root[data-theme='light'] .contact-email { color: var(--violet) !important; }
    :root[data-theme='light'] .timeline { border-left-color: var(--line); }
    :root[data-theme='light'] .timeline-item::before { box-shadow: 0 0 12px var(--violet-soft); }
    :root[data-theme='light'] footer { color: var(--muted); }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 90px; }
    body { margin: 0; min-width: 280px; background: var(--bg); }
    a { color: inherit; text-decoration: none; }
    button, a { -webkit-tap-highlight-color: transparent; }

    .portfolio {
      background:
        radial-gradient(ellipse at 82% 8%, rgba(132,92,246,.16), transparent 29%),
        radial-gradient(circle at 12% 38%, rgba(182,156,255,.045), transparent 24%),
        var(--bg);
      color: var(--text);
      min-height: 100vh;
      font-family: 'Manrope', Arial, sans-serif;
      line-height: 1.7;
      overflow: hidden;
    }

    .container { width: min(1080px, calc(100% - 44px)); margin: auto; }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 10;
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--line);
    }

    .nav {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      width: 42px;
      aspect-ratio: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      padding: 0 0 1px;
      border: 1px solid var(--violet);
      border-radius: 50%;
      background: var(--violet-soft);
      box-shadow: inset 0 0 0 4px var(--panel), 0 8px 24px rgba(182,156,255,.08);
      color: #fff !important;
      font-size: 15px;
      line-height: 1;
      font-weight: 900;
      letter-spacing: 0;
      white-space: nowrap;
      text-align: center;
    }

    .brand:hover { border-color: var(--violet-strong); }
    .navlinks { display: flex; gap: 24px; align-items: center; }
    .navlinks a { color: #aeb7b0; font-size: 12px; font-weight: 700; transition: color .2s; }
    .navlinks a:hover { color: var(--green); }
    .nav-contact {
      padding: 9px 15px;
      border: 1px solid #424b40;
      border-radius: 8px;
      color: var(--green) !important;
    }

    .nav-actions { display: flex; align-items: center; gap: 10px; }
    .menu-toggle { display: none; }
    .theme-toggle {
      width: 38px; height: 38px; padding: 0;
      display: grid; place-items: center;
      border: 1px solid var(--line); border-radius: 8px;
      background: var(--panel); color: var(--text); cursor: pointer;
      font-size: 17px;
    }

    @keyframes reveal-up {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes ambient-pulse {
      50% { box-shadow: 0 0 0 7px rgba(182,156,255,.025); }
    }

    .hero {
      min-height: 690px; display: grid;
      grid-template-columns: minmax(0, 1.18fr) minmax(280px, .82fr);
      gap: 52px; align-items: center;
      padding: 82px 0 86px; position: relative;
    }
    .hero-content { min-width: 0; animation: reveal-up .7s cubic-bezier(.22,.61,.36,1) both; }
    .portrait-panel { animation: reveal-up .8s .12s cubic-bezier(.22,.61,.36,1) both; }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font: 11px 'DM Mono', monospace;
      letter-spacing: 1.5px;
      color: var(--green);
      text-transform: uppercase;
    }

    .live-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 13px rgba(196,245,107,.6);
    }

    .hero h1 {
      font-size: clamp(43px, 7.2vw, 83px);
      line-height: 1.08;
      letter-spacing: -5px;
      max-width: 880px;
      margin: 25px 0;
      font-weight: 800;
    }

    .hero h1 span { color: var(--green); }
    .hero-copy { color: var(--muted); max-width: 650px; font-size: 16px; line-height: 1.9; }
    .hero-copy strong { color: var(--text); font-weight: 600; }

    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 13px 19px;
      border-radius: 8px;
      border: 1px solid var(--line);
      font-size: 12px;
      font-weight: 800;
      transition: transform .2s, background .2s;
    }

    .btn:hover { transform: translateY(-3px); }
    .btn:active { transform: translateY(-1px) scale(.985); }
    .btn-primary { background: var(--green); color: #10150b; border-color: var(--green); }
    .btn-secondary { background: #141815; color: var(--text); }
    .btn-secondary:hover { background: #202720; }

    .portrait-panel {
      width: 100%; max-width: 390px; justify-self: end;
      padding: 10px; border: 1px solid var(--line); border-radius: 22px;
      background: linear-gradient(145deg, var(--violet-soft), transparent 45%), var(--panel);
      box-shadow: 0 32px 80px rgba(0,0,0,.28);
      position: relative;
    }
    .portrait-panel::before {
      content: ''; position: absolute; inset: -18px 34px 24px -18px;
      border: 1px solid rgba(182,156,255,.18); border-radius: 26px; z-index: -1;
    }
    .portrait-frame {
      height: 430px; overflow: hidden; position: relative;
      border-radius: 14px; background:
        radial-gradient(circle at 54% 28%, rgba(182,156,255,.23), transparent 30%),
        linear-gradient(145deg, var(--panel2), var(--bg));
      display: grid; place-items: center;
    }
    .portrait-frame::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(180deg, transparent 55%, rgba(9,7,17,.78));
      pointer-events: none;
    }
    .portrait-frame img {
      position: absolute; inset: 0; z-index: 1;
      width: 100%; height: 100%; object-fit: cover; object-position: center 22%;
    }
    .portrait-fallback {
      position: relative; z-index: 0;
      color: var(--violet-strong); font-size: clamp(88px, 12vw, 130px);
      font-weight: 800; letter-spacing: -9px;
    }
    .portrait-caption {
      position: absolute; z-index: 2; left: 18px; right: 18px; bottom: 16px;
      display: flex; justify-content: space-between; gap: 12px; align-items: end;
    }
    .portrait-caption strong { display: block; font-size: 15px; }
    .portrait-caption span { display: block; color: #cbc4dc; font: 9px 'DM Mono', monospace; letter-spacing: 1px; }
    .portrait-status {
      display: inline-flex; align-items: center; gap: 7px; flex-shrink: 0;
      border: 1px solid rgba(208,194,255,.24); border-radius: 999px;
      padding: 6px 8px; background: rgba(9,7,17,.76); color: #e9e4f7;
      font: 8px 'DM Mono', monospace; backdrop-filter: blur(8px);
    }
    .portrait-status i { width: 6px; height: 6px; background: var(--violet); border-radius: 50%; box-shadow: 0 0 10px var(--violet); }

    .hero-meta {
      grid-column: 1 / -1;
      display: flex;
      gap: 26px;
      flex-wrap: wrap;
      border-top: 1px solid var(--line);
      margin-top: 50px;
      padding-top: 22px;
      color: var(--muted);
      font-size: 11px;
    }

    .hero-meta span { display: flex; gap: 8px; align-items: center; }
    .hero-meta b { color: var(--text); font-weight: 700; }

    .section { padding: 76px 0; border-top: 1px solid rgba(255,255,255,.07); }
    .section:not(:first-of-type) { content-visibility: auto; contain-intrinsic-size: 900px; }
    .section-head { display: flex; gap: 24px; justify-content: space-between; align-items: end; margin-bottom: 33px; }
    .section-kicker { color: var(--green); font: 11px 'DM Mono', monospace; letter-spacing: 1.7px; }
    .section h2 { margin: 6px 0 0; font-size: clamp(29px, 4vw, 42px); letter-spacing: -2px; line-height: 1.2; }
    .section-intro { color: var(--muted); font-size: 13px; max-width: 440px; margin: 0; }

    .about-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 18px; }
    .surface {
      background: linear-gradient(145deg, #151a16, #101310);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 27px;
    }

    .about-text { color: #adb7af; font-size: 14px; line-height: 2; margin: 0; }
    .about-text strong { color: var(--text); }
    .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .stat { border: 1px solid var(--line); background: #111512; padding: 20px; border-radius: 10px; }
    .stat strong { color: var(--green); font-size: 32px; letter-spacing: -1px; display: block; line-height: 1.2; }
    .stat span { color: var(--muted); font-size: 11px; display: block; margin-top: 9px; }

    .skill-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
    .skill-card {
      position: relative; overflow: hidden; min-width: 0;
      display: flex; flex-direction: column;
      background: linear-gradient(155deg, var(--panel), var(--panel2));
      border: 1px solid var(--line); border-radius: 12px; padding: 20px;
    }
    .skill-card::before {
      content: ''; position: absolute; inset: 0 0 auto;
      height: 2px; background: linear-gradient(90deg, var(--violet), transparent 78%);
      opacity: .85;
    }
    .skill-card-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 24px; }
    .skill-icon-wrap {
      width: 48px; height: 48px; display: grid; place-items: center;
      background: var(--violet-soft); border: 1px solid rgba(182,156,255,.25);
      border-radius: 10px;
    }
    .skill-icon { width: 30px; height: 30px; object-fit: contain; }
    :root[data-theme='light'] .skill-icon { filter: saturate(.85) contrast(.95); }
    .skill-index { color: var(--muted); font: 10px 'DM Mono', monospace; }
    .skill-card h3 { font-size: 15px; letter-spacing: -.25px; margin: 0 0 14px; }
    .skill-card .tags { align-content: flex-start; }
    .skill-card .tag {
      background: var(--bg); border-color: var(--line); color: var(--muted);
      border-radius: 6px; padding: 6px 8px; font-size: 9px;
    }
    .skill-card:hover .skill-icon-wrap { border-color: var(--violet); background: rgba(182,156,255,.18); }
    .tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag { background: #202720; color: #ced7ce; border: 1px solid #303a30; border-radius: 5px; padding: 5px 9px; font-size: 10px; font-weight: 700; }

    .timeline { position: relative; margin-left: 8px; padding-left: 28px; border-left: 1px solid #354034; }
    .timeline-item { position: relative; padding-bottom: 12px; }
    .timeline-item:before {
      content: '';
      width: 9px; height: 9px;
      background: var(--green);
      border-radius: 50%;
      position: absolute; left: -33px; top: 8px;
      box-shadow: 0 0 12px rgba(196,245,107,.25);
    }

    .role-head { display: flex; align-items: start; justify-content: space-between; flex-wrap: wrap; gap: 15px; }
    .role-head h3 { margin: 0; font-size: 20px; letter-spacing: -.5px; }
    .company { color: var(--green); font-size: 13px; font-weight: 700; }
    .date { color: var(--muted); font: 11px 'DM Mono', monospace; }
    .role-location { color: var(--muted); font-size: 11px; margin-top: 4px; }
    .bullet-list { padding-left: 18px; color: #aeb8b0; font-size: 12px; line-height: 2; margin: 22px 0 0; }
    .bullet-list li { padding-left: 3px; margin-bottom: 5px; }
    .bullet-list li::marker { color: var(--green); }

    .product-label { color: var(--green); font: 10px 'DM Mono', monospace; letter-spacing: 1.3px; }
    .experience-products { margin-top: 28px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .mini-product { background: #111512; border: 1px solid var(--line); border-radius: 10px; padding: 18px; }
    .mini-product h4 { font-size: 13px; margin: 0 0 6px; }
    .mini-product p { font-size: 11px; color: var(--muted); margin: 0; line-height: 1.8; }

    .project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .project {
      position: relative;
      isolation: isolate;
      background: linear-gradient(145deg, #171c18, #101310);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 26px;
      transition: transform .2s, border-color .2s;
    }
    .project::after {
      content: ''; position: absolute; inset: 0; z-index: -1;
      border-radius: inherit; opacity: 0;
      background: radial-gradient(circle at 85% 12%, var(--violet-soft), transparent 35%);
      transition: opacity .25s;
    }
    .project:hover { transform: translateY(-5px); border-color: var(--violet); }
    .project:hover::after { opacity: 1; }
    .project-top { display: flex; justify-content: space-between; gap: 10px; align-items: center; }
    .project-num { font: 12px 'DM Mono', monospace; color: var(--green); }
    .project h3 { font-size: 23px; letter-spacing: -.8px; margin: 18px 0 8px; }
    .project-desc { color: var(--muted); font-size: 12px; line-height: 1.9; min-height: 68px; }
    .project ul { list-style: none; padding: 0; margin: 19px 0; }
    .project li { color: #c4cdc5; font-size: 11px; margin: 9px 0; line-height: 1.7; }
    .project li:before { content: '↗'; color: var(--green); margin-right: 9px; }
    .project .tags { margin-top: 20px; }
    .project .tag { background: #171e17; font-size: 9px; }

    .education-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .education-card { display: flex; align-items: start; gap: 15px; }
    .edu-icon {
      flex-shrink: 0; width: 42px; height: 42px; display: grid; place-items: center;
      background: #24301e; color: var(--green); border-radius: 9px; font-size: 20px;
    }
    .education-card h3 { font-size: 13px; line-height: 1.7; margin: 0 0 5px; }
    .education-card p { font-size: 11px; color: var(--muted); margin: 0; }
    .education-card .date { display: inline-block; margin-top: 8px; }

    .recognition-layout { display: grid; grid-template-columns: .75fr 1.25fr; gap: 16px; align-items: start; }
    .award-list { display: grid; gap: 12px; }
    .award {
      position: relative; display: grid; grid-template-columns: 58px 1fr;
      gap: 16px; align-items: center; overflow: hidden;
      border: 1px solid var(--line); border-radius: 12px;
      background: var(--panel); padding: 22px;
    }
    .award-featured {
      min-height: 175px;
      grid-template-columns: 72px 1fr;
      background:
        radial-gradient(circle at 88% 18%, rgba(182,156,255,.2), transparent 34%),
        linear-gradient(145deg, var(--panel), var(--panel2));
      border-color: rgba(182,156,255,.38);
      box-shadow: 0 24px 60px rgba(0,0,0,.18);
    }
    .award-featured::after {
      content: 'SPOTLIGHT'; position: absolute; right: -21px; bottom: 14px;
      color: rgba(182,156,255,.055); font: 800 52px 'Manrope', sans-serif;
      letter-spacing: 1px; pointer-events: none;
    }
    .award-icon {
      width: 58px; height: 58px; display: grid; place-items: center;
      border: 1px solid rgba(182,156,255,.28); border-radius: 14px;
      color: var(--violet); background: var(--violet-soft); font-size: 25px;
    }
    .award-featured .award-icon { width: 72px; height: 72px; font-size: 34px; }
    .award strong { display: block; font-size: 15px; }
    .award-featured strong { font-size: clamp(19px, 2.4vw, 26px); letter-spacing: -.6px; }
    .award span { display: block; font: 10px 'DM Mono', monospace; color: var(--muted); margin-top: 7px; }
    .award-metric { grid-template-columns: 1fr; padding: 20px 22px; }
    .award-metric strong { font: 800 42px/1 'Manrope', sans-serif; color: var(--violet); }
    .award-metric strong span { display: inline; color: var(--text); font: 700 13px 'Manrope', sans-serif; margin-left: 8px; }
    .award-metric .award-title { color: var(--text); font: 700 13px 'Manrope', sans-serif; }

    .certificate-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
    .certificate-card {
      display: grid; overflow: hidden; min-width: 0;
      border: 1px solid var(--line); border-radius: 10px;
      background: var(--panel); transition: transform .2s, border-color .2s;
    }
    .certificate-card:hover { transform: translateY(-4px); border-color: var(--green); }
    .certificate-preview {
      width: 100%; aspect-ratio: 4 / 3; object-fit: contain; object-position: center;
      background: var(--panel2); border-bottom: 1px solid var(--line);
    }
    .certificate-meta { padding: 12px 14px; }
    .certificate-meta strong { display: block; font-size: 12px; }
    .certificate-meta span { color: var(--muted); font: 9px 'DM Mono', monospace; letter-spacing: .8px; }
    .certificate-card--placeholder .certificate-preview { display: grid; place-items: center; font-size: 38px; color: var(--green); }

    .contact-panel {
      border: 1px solid #394533;
      border-radius: 16px;
      background: radial-gradient(ellipse at 100% 0%, rgba(182,156,255,.17), transparent 45%), var(--panel);
      padding: clamp(25px, 5vw, 48px);
      display: flex; justify-content: space-between; align-items: center; gap: 28px;
    }
    .contact-panel h2 { margin: 7px 0 12px; font-size: clamp(27px, 4vw, 42px); letter-spacing: -2px; }
    .contact-panel p { color: var(--muted); font-size: 13px; margin: 0; max-width: 500px; }
    .contact-actions { display: flex; flex-direction: column; gap: 10px; min-width: 150px; }

    footer { border-top: 1px solid var(--line); padding: 25px 0; color: #778078; font-size: 10px; }
    .footer-inner { display: flex; justify-content: space-between; gap: 15px; flex-wrap: wrap; }
    .footer-inner a { color: var(--green); }

    @media (max-width: 760px) {
      .portfolio .topbar { width: auto; min-height: 65px; position: sticky; }
      .portfolio .nav {
        position: static;
        inset: auto;
        width: auto;
        min-height: 65px;
        height: auto;
        padding: 0;
        flex-direction: row;
        align-items: center;
        background: transparent;
        border: 0;
        backdrop-filter: none;
      }
      .hero { min-height: unset; grid-template-columns: 1fr; gap: 36px; }
      .portrait-panel { justify-self: center; max-width: 330px; }
      .portrait-frame { height: 370px; }
      .portrait-caption strong { font-size: 13px; }
      .hero-meta { grid-column: 1; }
      .nav { gap: 12px; }
      .navlinks { gap: 10px; min-width: 0; }
      .navlinks a { font-size: 10px; }
      .nav-actions { position: relative; }
      .menu-toggle {
        width: 38px; height: 38px; display: grid; place-content: center; gap: 4px;
        padding: 0; border: 1px solid var(--line); border-radius: 8px;
        background: var(--panel); color: var(--text); cursor: pointer;
      }
      .menu-toggle i {
        width: 17px; height: 1.5px; display: block;
        background: currentColor; transition: transform .2s, opacity .2s;
      }
      .menu-toggle[aria-expanded='true'] i:first-child { transform: translateY(5.5px) rotate(45deg); }
      .menu-toggle[aria-expanded='true'] i:nth-child(2) { opacity: 0; }
      .menu-toggle[aria-expanded='true'] i:last-child { transform: translateY(-5.5px) rotate(-45deg); }
      .portfolio .navlinks {
        position: absolute; top: calc(100% + 13px); right: 0;
        width: min(270px, calc(100vw - 30px)); display: grid; gap: 2px;
        padding: 8px; border: 1px solid var(--line); border-radius: 10px;
        background: var(--panel); box-shadow: 0 20px 50px rgba(0,0,0,.28);
        opacity: 0; visibility: hidden; transform: translateY(-8px);
        transition: opacity .18s, visibility .18s, transform .18s;
      }
      .portfolio .navlinks.is-open { opacity: 1; visibility: visible; transform: translateY(0); }
      .portfolio .navlinks a,
      .portfolio .navlinks a:nth-child(2),
      .portfolio .navlinks a:nth-child(3),
      .portfolio .navlinks a:nth-child(4) { display: flex; }
      .portfolio .navlinks a {
        min-height: 42px; align-items: center; padding: 0 12px;
        border-radius: 7px; font-size: 12px;
      }
      .portfolio .navlinks a:hover { background: var(--violet-soft); }
      .portfolio .navlinks .nav-contact { justify-content: space-between; margin-top: 4px; }
      .recognition-layout { grid-template-columns: 1fr; }
      .certificate-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
      .skill-grid { gap: 10px; }
      .skill-card { padding: 15px; }
      .skill-card-head { margin-bottom: 18px; }
      .skill-card h3 { font-size: 13px; }
      .skill-icon-wrap { width: 42px; height: 42px; }
      .navlinks a:nth-child(2),
      .navlinks a:nth-child(3) { display: none; }
      .hero { padding: 75px 0 60px; }
      .hero h1 { letter-spacing: -2.5px; }
      .hero-copy { font-size: 14px; }
      .section { padding: 58px 0; }
      .section-head { align-items: start; flex-direction: column; gap: 12px; }
      .about-grid, .project-grid, .education-list { grid-template-columns: 1fr; }
      .skill-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .experience-products { grid-template-columns: 1fr; }
      .project-desc { min-height: auto; }
      .contact-panel { align-items: start; flex-direction: column; }
      .contact-actions { flex-direction: row; flex-wrap: wrap; }
    }

    @media (max-width: 420px) {
      .portfolio .container { width: calc(100% - 30px); }
      .nav { gap: 8px; }
      .navlinks { gap: 0; }
      .nav-contact { padding: 7px 9px; white-space: nowrap; }
      .nav-actions { gap: 7px; }
      .theme-toggle { width: 34px; height: 34px; }
      .award-featured { grid-template-columns: 56px 1fr; padding: 18px; min-height: 155px; }
      .award-featured .award-icon { width: 56px; height: 56px; font-size: 28px; }
      .award-featured strong { font-size: 18px; }
      .certificate-grid { grid-template-columns: 1fr; }
      .hero h1 { font-size: 43px; }
      .stats { gap: 8px; }
      .stat { padding: 15px; }
      .stat strong { font-size: 27px; }
      .surface, .project { padding: 21px; }
      .hero-meta { gap: 13px; }
    }

    @media (hover: hover) {
      .skill-card, .mini-product, .award, .certificate-card {
        transition: transform .25s cubic-bezier(.22,.61,.36,1), border-color .25s;
      }
      .skill-card:hover, .mini-product:hover, .award:hover, .certificate-card:hover {
        transform: translateY(-4px); border-color: var(--violet);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { scroll-behavior: auto !important; animation: none !important; transition: none !important; }
    }
  `;

  return (
    <div className="portfolio">
      <style>{css}</style>

      <header className="topbar">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Jayesh Khairnar, back to home">JK</a>
          <div className="nav-actions">
            <div className={`navlinks${menuOpen ? " is-open" : ""}`} id="mobile-navigation">
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's connect ↗</a>
            </div>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen(open => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              title={menuOpen ? "Close menu" : "Open menu"}
            >
              <i /><i /><i />
            </button>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(current => current === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="eyebrow"><span className="live-dot" /> SOFTWARE ENGINEER</div>
            <h1>
              Shipping enterprise<br />
              software that <span>performs.</span>
            </h1>
            <p className="hero-copy">
              I'm <strong>Jayesh Khairnar</strong>, an Associate Software Engineer building
              reliable .NET applications across <strong>C#, ASP.NET, SQL Server, Razor Pages, React, and cloud integrations.</strong>
              I work from requirements through release, with measurable impact across 6+ product launches.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="btn btn-secondary" href="mailto:jayeshkhairnar6@gmail.com">✉ Get in touch</a>
              <a className="btn btn-secondary" href="https://www.linkedin.com/in/jayeshkhairnar1" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="portrait-panel" aria-label="Jayesh Khairnar professional portrait">
            <div className="portrait-frame">
              <img src="/jkprof.png" alt="Jayesh Khairnar" onError={event => event.currentTarget.remove()} />
              <span className="portrait-fallback" aria-hidden="true">JK</span>
              <div className="portrait-caption">
                <div><strong>Jayesh Khairnar</strong><span>SOFTWARE ENGINEER · PUNE</span></div>
                <div className="portrait-status"><i /> OPEN TO WORK</div>
              </div>
            </div>
          </div>
          <div className="hero-meta">
            <span><b>01</b> Enterprise product development</span>
            <span><b>02</b> APIs & database optimization</span>
            <span><b>03</b> Full-stack problem solving</span>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">01 / ABOUT ME</div>
                <h2>A little about my journey.</h2>
              </div>
              <p className="section-intro">Turning business requirements into maintainable, scalable software.</p>
            </div>
            <div className="about-grid">
              <div className="surface">
                <p className="about-text">
                  I'm an Associate Software Engineer at <strong>Vitaledge Technologies</strong>,
                  responsible for product features across frontend, backend, and database
                  layers. My work combines secure API development, SQL optimization,
                  role-based interfaces, deployments, production support, and technical
                  documentation.
                  <br /><br />
                  I contribute across the complete product lifecycle, from POCs and
                  implementation through release, customer training, and issue resolution.
                  My strongest impact comes from improving application performance,
                  strengthening reliability, and turning complex business workflows into
                  maintainable software.
                </p>
              </div>
              <div className="stats">
                <div className="stat"><strong>25+</strong><span>Features delivered</span></div>
                <div className="stat"><strong>6+</strong><span>GA releases supported</span></div>
                <div className="stat"><strong>10+</strong><span>Razor Pages screens</span></div>
                <div className="stat"><strong>Full-stack</strong><span>Frontend to database</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">02 / TOOLKIT</div>
                <h2>Technologies I work with.</h2>
              </div>
              <p className="section-intro">The tools and technologies I use to build, maintain, and improve software.</p>
            </div>
            <div className="skill-grid">
              {skills.map((group, i) => (
                <div className="skill-card" key={group.title}>
                  <div className="skill-card-head">
                    <div className="skill-icon-wrap">
                      <img className="skill-icon" src={group.icon} alt="" />
                    </div>
                    <span className="skill-index">0{i + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.items.map(item => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">03 / EXPERIENCE</div>
                <h2>Where I've made an impact.</h2>
              </div>
              <p className="section-intro">Building and supporting enterprise applications in a collaborative product team.</p>
            </div>

            <div className="timeline">
              {experience.map(job => (
                <div className="timeline-item" key={job.company}>
                  <div className="role-head">
                    <div>
                      <h3>{job.title}</h3>
                      <div className="company">{job.company}</div>
                      <div className="role-location">{job.location}</div>
                    </div>
                    <div className="date">{job.date}</div>
                  </div>
                  <ul className="bullet-list">
                    {job.points.map(point => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="experience-products">
              <div className="mini-product">
                <div className="product-label">ENTERPRISE PRODUCT · 01</div>
                <h4>eService+</h4>
                <p>6+ GA releases, 25+ features, role-based Razor Pages, SQL optimization, secure APIs, Firebase notifications, media access, and customer deployment support.</p>
              </div>
              <div className="mini-product">
                <div className="product-label">MONITORING PRODUCT · 02</div>
                <h4>Collect Diagnostic</h4>
                <p>Real-time URL/API monitoring, JWT security, Firestore migration, complaint workflows, browser diagnostics, reusable repositories, and NLog integration.</p>
              </div>
              <div className="mini-product">
                <div className="product-label">AUTOMATION · 03</div>
                <h4>eTools & App Pool Utility</h4>
                <p>ERP synchronization, batched purging and employee sync jobs, failure alerts, IIS self-healing, and automated CSV performance reports.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">04 / SELECTED WORK</div>
                <h2>Projects & contributions.</h2>
              </div>
              <p className="section-intro">A selection of the products and applications I've helped build.</p>
            </div>

            <div className="project-grid">
              {projects.map(project => (
                <article className="project" key={project.number}>
                  <div className="project-top">
                    <span className="project-num">{project.number} / 04</span>
                    <span className="product-label">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul>
                    {project.highlights.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="tags">
                    {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">05 / EDUCATION</div>
                <h2>Learning is ongoing.</h2>
              </div>
            </div>
            <div className="education-list">
              {education.map(item => (
                <div className="surface education-card" key={item.degree}>
                  <div className="edu-icon">↗</div>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                    <span className="date">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">06 / RECOGNITION</div>
                <h2>Work worth celebrating.</h2>
              </div>
            </div>
            <div className="recognition-layout">
              <div className="award-list">
                <div className="award award-metric">
                  <strong>3× <span>EMPLOYEE OF THE MONTH</span></strong>
                  <span className="award-title">Consistent recognition for ownership and impact · Vitaledge Technologies</span>
                </div>
              </div>
              <div className="certificate-grid">
                {certificates.map(certificate => (
                  <a
                    className="certificate-card"
                    key={certificate.image}
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    title={`Open ${certificate.title} certificate`}
                  >
                    <img
                      className="certificate-preview"
                      src={certificate.image}
                      alt={certificate.title}
                      onError={event => {
                        event.currentTarget.removeAttribute("src");
                        event.currentTarget.parentElement.classList.add("certificate-card--placeholder");
                        event.currentTarget.replaceWith(document.createTextNode("◇"));
                      }}
                    />
                    <div className="certificate-meta">
                      <strong>{certificate.title}</strong>
                      <span>{certificate.type} · OPEN ↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <div className="section-kicker">07 / GET IN TOUCH</div>
                <h2>Open to software engineering opportunities.</h2>
                <p>
                  Available for .NET, backend, enterprise application, and full-stack
                  roles where I can deliver reliable products, measurable improvements,
                  and strong cross-team ownership.
                </p>
                <p className="contact-email" style={{ marginTop: 15 }}>
                  jayeshkhairnar6@gmail.com 
                </p>
              </div>
              <div className="contact-actions">
                <a className="btn btn-primary" href="mailto:jayeshkhairnar6@gmail.com">Email me ↗</a>
                <a className="btn btn-secondary" href="https://www.linkedin.com/in/jayeshkhairnar1" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="btn btn-secondary" href="https://github.com/JayeshKhairnar1" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Jayesh Khairnar. Built with React.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
