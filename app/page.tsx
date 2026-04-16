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
    desc: "Building intelligent AI chatbots using AI models, RAG, and prompt engineering for automation and customer interaction.",
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
    accent: "#7c3aed",
    accentLight: "rgba(124,58,237,0.18)",
  },
  {
    tag: "AI Application",
    title: "Smart PDF Chat (RAG)",
    desc: "A RAG-based PDF chat application where users upload documents and ask questions. The system understands the PDF and answers only from the document content using AI.",
    live: "https://smart-pdf-chat-mahy8blxkfjkbzne8uxmvg.streamlit.app/",
    github: "https://github.com/tayyibaa666-cyber/smart-pdf-chat",
    image: "/smartpdf.png",
    accent: "#0ea5e9",
    accentLight: "rgba(14,165,233,0.18)",
  },
  {
    tag: "AI Application",
    title: "CodeMentor AI",
    desc: "An AI-powered programming mentor that uses RAG and prompt engineering to answer coding questions tailored to your level — beginner to advanced.",
    live: "https://code-mentor-ai-navy.vercel.app/",
    github: "https://github.com/tayyibaa666-cyber/Code-Mentor-Ai",
    image: "/codementorai.png",
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.18)",
  },
  {
    tag: "WordPress · Website",
    title: "PoloPoint",
    desc: "A fully responsive business website built with modern design, smooth user experience, and a clean layout tailored for a professional online presence.",
    live: "https://polopoint.com.pk/",
    github: "#",
    image: "/polopoint.png",
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.18)",
  },
  {
    tag: "WordPress · Logistics",
    title: "Connect Intermodal",
    desc: "A professional logistics & freight company website built on WordPress, featuring global shipping solutions, interactive service pages, and a bold, trust-building design.",
    live: "https://connectintermodal.com/",
    github: "#",
    image: "/connectmodal.png",
    accent: "#f97316",
    accentLight: "rgba(249,115,22,0.18)",
    fallbackGradient: "linear-gradient(135deg,#1a0800 0%,#3d1500 60%,#0a0300 100%)",
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

  const next = useCallback(() => {
    goTo((current + 1) % total, "next");
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, "prev");
  }, [current, total, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const pauseAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resumeAuto = () => {
    intervalRef.current = setInterval(next, 5000);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileOpen(false);
  const item = portfolio[current];

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#hero" className="logo">
            TA<span>.</span>
          </a>
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
          <div className="hero-blob hero-blob-one" />
          <div className="hero-blob hero-blob-two" />
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <div className="hero-badge">Available for work</div>
              <h1 className="hero-title">
                Hello, I&apos;m <span>Tayyba Abid</span>
              </h1>
              <p className="hero-desc">
                I build AI-powered applications, backend systems, and modern web
                experiences using Python and web technologies.
              </p>
              <div className="hero-buttons">
                <a href="#portfolio" className="btn btn-solid">View My Work</a>
                <a href="#contact" className="btn btn-outline">Get in Touch</a>
                <a href="/TayybaAbid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View CV</a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="hero-card">
                <div className="hero-photo-wrap">
                  <img src="/tayyba.jpeg" alt="Tayyba Abid" className="hero-photo" />
                </div>
                <div className="floating-card floating-one">
                  <span className="dot" /> Open to Freelance
                </div>
                <div className="floating-card floating-two">
                  ⚡ AI &amp; Web Developer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="section section-soft">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">About Me</div>
              <h2 className="section-title">Who Am I?</h2>
            </div>
            <div className="about-grid">
              <div className="about-text reveal">
                <p>
                  I&apos;m <strong>Tayyba Abid</strong>, a developer based in Pakistan
                  focused on building intelligent and scalable solutions using AI and
                  modern web technologies.
                </p>
                <p>
                  I work with Python, SQL, Django, and FastAPI to develop backend
                  systems and responsive web applications. My interests include AI
                  application development, RAG, and prompt engineering, with a focus
                  on turning complex ideas into practical software.
                </p>
                <div className="skills-list">
                  <div className="skill-category">
                    <p className="cat-label">Languages</p>
                    <div className="pills">
                      {["Python", "JavaScript", "R", "HTML", "CSS", "SQL"].map(s => (
                        <span key={s} className="pill pill-purple">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="skill-category">
                    <p className="cat-label">Frameworks &amp; Backend</p>
                    <div className="pills">
                      {["Django", "FastAPI", "Bootstrap", "Tailwind CSS"].map(s => (
                        <span key={s} className="pill pill-teal">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="skill-category">
                    <p className="cat-label">AI &amp; ML</p>
                    <div className="pills">
                      {["RAG", "Prompt Engineering", "Fine-tuning", "NLP", "Vector DB", "LLMs", "Embeddings"].map(s => (
                        <span key={s} className="pill pill-coral">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="skill-category">
                    <p className="cat-label">Tools &amp; Platforms</p>
                    <div className="pills">
                      {["WordPress", "Git", "REST APIs", "VS Code"].map(s => (
                        <span key={s} className="pill pill-blue">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-cards reveal">
                <div className="info-card">
                  <h4>🎓 Education</h4>
                  <p>BS Software Engineering — COMSATS University Islamabad</p>
                </div>
                <div className="info-card">
                  <h4>💼 Focus</h4>
                  <p>Web apps, company websites, dashboards, e-commerce platforms, AI model development, AI-powered applications, automation systems, and custom business solutions.</p>
                </div>
                <div className="info-card">
                  <h4>🌐 Languages</h4>
                  <p>English · Urdu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">What I Do</div>
              <h2 className="section-title">My Services</h2>
              <p className="section-sub">
                From design to development, I build digital experiences that are clean, modern, and results-driven.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PORTFOLIO CAROUSEL ─── */}
        <section id="portfolio" className="section section-soft">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">My Work</div>
              <h2 className="section-title">Portfolio</h2>
              <p className="section-sub">
                A selection of projects focused on AI applications, automation, dashboards, and modern web solutions.
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
                style={{
                  "--accent": item.accent,
                  "--accent-light": item.accentLight,
                } as React.CSSProperties}
              >
                {/* Image half */}
                <div className="cc-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cc-image"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      const parent = t.parentElement;
                      if (parent) {
                        parent.style.background =
                          item.fallbackGradient ||
                          `linear-gradient(135deg,#0d0d0d,#1a1a2e)`;
                      }
                    }}
                  />
                  <div className="cc-image-overlay" />
                  <span className="cc-tag">{item.tag}</span>
                </div>

                {/* Text half */}
                <div className="cc-body">
                  <h3 className="cc-title">{item.title}</h3>
                  <p className="cc-desc">{item.desc}</p>
                  <div className="cc-buttons">
                    {item.github !== "#" && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cc-btn cc-btn-outline"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cc-btn cc-btn-solid"
                    >
                      View Live
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>

                  {/* Counter */}
                  <div className="cc-counter">
                    <span className="cc-count-current">{String(current + 1).padStart(2, "0")}</span>
                    <span className="cc-count-sep">/</span>
                    <span className="cc-count-total">{String(total).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>

              {/* Controls row */}
              <div className="carousel-controls">
                {/* Dots */}
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

                {/* Arrows */}
                <div className="carousel-arrows">
                  <button className="carousel-arrow" onClick={prev} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button className="carousel-arrow" onClick={next} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail strip */}
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
                        if (wrap) wrap.style.background = p.fallbackGradient || "#1a1a2e";
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
          <div className="container contact-simple reveal">
            <h2 className="section-title">Contact</h2>
            <p className="section-sub">Let&apos;s connect! You can find me at:</p>
            <div className="contact-links">
              <a href="https://github.com/tayyibaa666-cyber" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/tayyba-abid-31751b369/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:tayybadogar4@gmail.com" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
