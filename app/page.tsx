"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Building fast, responsive, and scalable web applications using modern frontend and backend technologies.",
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Designing clean, intuitive, and user-friendly interfaces for modern web applications.",
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    desc: "Developing secure APIs, database-driven systems, and integrations for modern applications.",
  },
  {
    icon: "🤖",
    title: "AI Chatbots",
    desc: "Building intelligent AI chatbots using AI models, RAG, and prompt engineering for automation.",
  },
  {
    icon: "⚡",
    title: "AI Automation",
    desc: "Creating AI-powered automation systems to streamline workflows and reduce manual work.",
  },
  {
    icon: "🟦",
    title: "WordPress Development",
    desc: "Developing custom WordPress websites, themes, and business solutions with responsive design.",
  },
];

const portfolio = [
  {
    tag: "AI Application",
    title: "QuizApp",
    desc: "An AI-powered quiz app where users upload study material, generate quizzes, refine questions with AI, and download them in different formats.",
    live: "https://quizapp-dwjzzxxkpfpb9yk2aqt56u.streamlit.app/",
    github: "https://github.com/tayyibaa666-cyber/quizapp",
    image: "/Quizapp.png",
    accent: "#00D4FF",
    accentLight: "rgba(0,212,255,0.15)",
  },
  {
    tag: "AI Application",
    title: "Smart PDF Chat (RAG)",
    desc: "A RAG-based PDF chat application where users upload documents and ask questions. The system answers only from the document content using AI.",
    live: "https://smart-pdf-chat-mahy8blxkfjkbzne8uxmvg.streamlit.app/",
    github: "https://github.com/tayyibaa666-cyber/smart-pdf-chat",
    image: "/smartpdf.png",
    accent: "#00D4FF",
    accentLight: "rgba(0,212,255,0.15)",
  },
  {
    tag: "AI Application",
    title: "CodeMentor AI",
    desc: "An AI-powered programming mentor that uses RAG and prompt engineering to answer coding questions tailored to your level — beginner to advanced.",
    live: "https://code-mentor-ai-navy.vercel.app/",
    github: "https://github.com/tayyibaa666-cyber/Code-Mentor-Ai",
    image: "/codementorai.png",
    accent: "#00D4FF",
    accentLight: "rgba(0,212,255,0.15)",
  },
  {
    tag: "WordPress · Website",
    title: "PoloPoint",
    desc: "A fully responsive business website built with modern design, smooth user experience, and a clean layout tailored for a professional online presence.",
    live: "https://polopoint.com.pk/",
    github: "#",
    image: "/polopoint.png",
    accent: "#00D4FF",
    accentLight: "rgba(0,212,255,0.15)",
  },
  {
    tag: "WordPress · Logistics",
    title: "Connect Intermodal",
    desc: "A professional logistics & freight company website built on WordPress, featuring global shipping solutions, interactive service pages, and a bold design.",
    live: "https://connectintermodal.com/",
    github: "#",
    image: "/connectmodal.png",
    accent: "#00D4FF",
    accentLight: "rgba(0,212,255,0.15)",
    fallbackGradient: "linear-gradient(135deg,#0d1117 0%,#1a2332 100%)",
  },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = portfolio.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % total, "next"), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total, "prev"), [current, total, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const pauseAuto = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resumeAuto = () => { intervalRef.current = setInterval(next, 5000); };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); }),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileOpen(false);
  const item = portfolio[current];

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#hero" className="logo">TA<span>.</span></a>
          <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="nav-actions">
            <a href="#contact" className="btn btn-solid desktop-only">Hire Me</a>
            <button
              className={`hamburger ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
              type="button"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section id="hero" className="hero">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
          <div className="container hero-grid">

            {/* Left: Content */}
            <div className="hero-content reveal">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for work
              </div>

              <h1 className="hero-title">
                Hi, I&apos;m<br />
                <span className="accent">Tayyba</span>{" "}
                <span className="dim">Abid</span>
              </h1>

              <p className="hero-role">AI &amp; Full-Stack Developer</p>

              <p className="hero-desc">
                I build intelligent AI-powered applications, backend systems, and
                modern web experiences using Python, LangChain, FastAPI, and modern
                web technologies.
              </p>

              <div className="hero-actions">
                <a href="#portfolio" className="btn btn-solid">View My Work</a>
                <a href="#contact" className="btn btn-outline">Get in Touch</a>
                <a href="/TayybaAbid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <div className="hero-socials">
                <a href="https://github.com/tayyibaa666-cyber" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/tayyba-abid-31751b369/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="mailto:tayybadogar4@gmail.com" className="hero-social-link" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: New Card-Style Photo Frame */}
            <div className="hero-visual reveal reveal-delay-2">
              <div className="hero-photo-frame">

                {/* Outer glowing border */}
                <div className="hero-photo-border" />

                {/* Inner photo container */}
                <div className="hero-photo-inner">

                  {/* The photo */}
                  <img
                    src="/tayyba.jpeg"
                    alt="Tayyba Abid"
                    className="hero-photo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.background = "linear-gradient(155deg,#0d1117 0%,#1a2332 60%,#0f2233 100%)";
                    }}
                  />

                  {/* Bottom gradient overlay for text legibility */}
                  <div className="hero-photo-overlay" />

                  {/* "Open to Freelance" badge — top right */}
                  <div className="hero-photo-badge">
                    <span className="hero-badge-dot" />
                    Open to Freelance
                  </div>

                  {/* Scroll hint button — mid right */}
                  <a href="#about" className="hero-photo-scroll" aria-label="Scroll down">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </a>

                  {/* Role bar — bottom overlay */}
                  <div className="hero-photo-role">
                    <div className="hero-photo-role-icon">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div className="hero-photo-role-title">
                      AI &amp; <br /><span className="accent">Web</span> Developer
                    </div>
                    <div className="hero-photo-role-sub">
                      Building intelligent, scalable and<br />user-focused digital solutions.
                    </div>
                  </div>

                </div>

                {/* Corner accent brackets */}
                <div className="hero-photo-corner tl" />
                <div className="hero-photo-corner tr" />
                <div className="hero-photo-corner bl" />
                <div className="hero-photo-corner br" />

              </div>
            </div>

          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="section section-alt">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-eyebrow">About Me</div>
              <h2 className="section-title">Who Am I?</h2>
            </div>
            <div className="about-grid">
              <div className="about-text reveal">
                <p>
                  I&apos;m <strong>Tayyba Abid</strong>, an AI &amp; Web Developer based
                  in Pakistan, focused on building intelligent and scalable solutions
                  using modern AI stacks and web technologies.
                </p>
                <p>
                  I work with Python, FastAPI, Django, and LangChain to develop
                  backend systems and AI-powered applications. My interests include
                  RAG pipelines, prompt engineering, and full-stack development —
                  turning complex ideas into production-ready software.
                </p>

                <div className="skills-list" style={{ marginTop: "2rem" }}>
                  <div>
                    <p className="skill-category-label">Languages</p>
                    <div className="pills">
                      {["Python", "JavaScript", "R", "HTML", "CSS", "SQL"].map(s => (
                        <span key={s} className="pill">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="skill-category-label">Frameworks &amp; Backend</p>
                    <div className="pills">
                      {["Django", "FastAPI", "Bootstrap", "Tailwind CSS", "Streamlit"].map(s => (
                        <span key={s} className="pill">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="skill-category-label">AI &amp; ML</p>
                    <div className="pills">
                      {["RAG", "LangChain", "Prompt Engineering", "Fine-tuning", "NLP", "Vector DB", "LLMs"].map(s => (
                        <span key={s} className="pill">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="skill-category-label">Tools &amp; Platforms</p>
                    <div className="pills">
                      {["WordPress", "Git", "REST APIs", "Docker", "VS Code"].map(s => (
                        <span key={s} className="pill">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-cards reveal reveal-delay-2">
                <div className="info-card">
                  <h4>🎓 Education</h4>
                  <p>BS Software Engineering — COMSATS University Islamabad<br />CGPA: 3.53 &nbsp;·&nbsp; 2022 – 2026</p>
                </div>
                <div className="info-card">
                  <h4>💼 Focus Areas</h4>
                  <p>AI application development, RAG systems, full-stack web apps, automation pipelines, and custom business solutions.</p>
                </div>
                <div className="info-card">
                  <h4>🌐 Languages</h4>
                  <p>English &nbsp;·&nbsp; Urdu</p>
                </div>
                <div className="info-card">
                  <h4>📍 Location</h4>
                  <p>Pakistan &nbsp;·&nbsp; Open to Remote Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-eyebrow">What I Do</div>
              <h2 className="section-title">My Services</h2>
              <p className="section-sub">
                From intelligent AI systems to polished web experiences — I build
                digital products that are clean, modern, and results-driven.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, i) => (
                <article className={`service-card reveal reveal-delay-${(i % 3) + 1}`} key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PORTFOLIO ─── */}
        <section id="portfolio" className="section section-alt">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-eyebrow">My Work</div>
              <h2 className="section-title">Portfolio</h2>
              <p className="section-sub">
                A selection of projects focused on AI applications, automation,
                dashboards, and modern web solutions.
              </p>
            </div>

            <div
              className="carousel-wrapper reveal"
              onMouseEnter={pauseAuto}
              onMouseLeave={resumeAuto}
            >
              {/* Main card */}
              <div
                className={`carousel-card ${isAnimating ? `exit-${direction}` : "enter"}`}
                style={{ "--accent": item.accent, "--accent-light": item.accentLight } as React.CSSProperties}
              >
                {/* Image side */}
                <div className="cc-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cc-image"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      const parent = t.parentElement;
                      if (parent) parent.style.background = item.fallbackGradient || "linear-gradient(135deg,#0d1117,#1a2332)";
                    }}
                  />
                  <div className="cc-image-overlay" />
                  <span className="cc-tag">{item.tag}</span>
                </div>

                {/* Text side */}
                <div className="cc-body">
                  <h3 className="cc-title">{item.title}</h3>
                  <p className="cc-desc">{item.desc}</p>
                  <div className="cc-buttons">
                    {item.github !== "#" && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="cc-btn cc-btn-outline">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    <a href={item.live} target="_blank" rel="noopener noreferrer" className="cc-btn cc-btn-solid">
                      View Live
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                  <div className="cc-counter">
                    <span className="cc-count-current">{String(current + 1).padStart(2, "0")}</span>
                    <span className="cc-count-sep">/</span>
                    <span className="cc-count-total">{String(total).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="carousel-controls">
                <div className="carousel-dots">
                  {portfolio.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot ${i === current ? "active" : ""}`}
                      onClick={() => goTo(i, i > current ? "next" : "prev")}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{ "--dot-accent": portfolio[i].accent } as React.CSSProperties}
                    />
                  ))}
                </div>
                <div className="carousel-arrows">
                  <button className="carousel-arrow" onClick={prev} aria-label="Previous">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button className="carousel-arrow" onClick={next} aria-label="Next">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="carousel-thumbs">
                {portfolio.map((p, i) => (
                  <button
                    key={p.title}
                    className={`thumb-item ${i === current ? "active" : ""}`}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    style={{ "--t-accent": p.accent } as React.CSSProperties}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="thumb-img"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.style.display = "none";
                        const wrap = t.parentElement;
                        if (wrap) wrap.style.background = p.fallbackGradient || "#111827";
                      }}
                    />
                    <span className="thumb-label">{p.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-eyebrow">Contact</div>
              <h2 className="section-title">Let&apos;s Work Together</h2>
              <p className="section-sub">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              </p>
            </div>

            <div className="contact-wrapper">
              {/* Left: Info + social links */}
              <div className="contact-info reveal">
                <h3>Get In Touch</h3>
                <p>
                  I&apos;m currently available for freelance work and open to full-time
                  opportunities. Whether you need an AI application, a web platform,
                  or just want to connect — reach out!
                </p>
                <div className="contact-links">
                  <a href="https://github.com/tayyibaa666-cyber" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span>github.com/tayyibaa666-cyber</span>
                  </a>
                  <a href="https://www.linkedin.com/in/tayyba-abid-31751b369/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>linkedin.com/in/tayyba-abid</span>
                  </a>
                  <a href="mailto:tayybadogar4@gmail.com" className="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>tayybadogar4@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="reveal reveal-delay-2">
                <div className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" placeholder="Tell me about your project..." />
                  </div>
                  <button type="button" className="btn btn-solid" style={{ alignSelf: "flex-start" }}>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer">
        <p>Designed &amp; built by <span>Tayyba Abid</span> · 2026</p>
      </footer>
    </>
  );
}
