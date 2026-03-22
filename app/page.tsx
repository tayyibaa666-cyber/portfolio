"use client";

import { useEffect, useState } from "react";

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
    bgClass: "port-bg-quiz",
    image: "/quiz-app.png",
  },
  {
    tag: "AI Application",
    title: "Smart PDF Chat (RAG)",
    desc: "A RAG-based PDF chat application where users upload documents and ask questions. The system understands the PDF and answers only from the document content using AI.",
    live: "https://smart-pdf-chat-mahy8blxkfjkbzne8uxmvg.streamlit.app/",
    github: "https://github.com/tayyibaa666-cyber/smart-pdf-chat",
    bgClass: "port-bg-pdf",
    image: "/pdf-chat.png",
  },
  {
    tag: "AI Application",
    title: "CodeMentor AI",
    desc: "An AI-powered programming mentor that uses RAG and prompt engineering to answer coding questions tailored to your level — beginner to advanced. Attaches your own docs for context, generates quizzes every 6 queries, and stays strictly focused on programming topics.",
    live: "#",
    github: "#",
    bgClass: "port-bg-code",
    image: "/code-mentor.png",
  },
  {
    tag: "Website",
    title: "PoloPoint",
    desc: "A fully responsive business website built with modern design, smooth user experience, and a clean layout tailored for a professional online presence.",
    live: "https://polopoint.com.pk/",
    github: "#",
    bgClass: "port-bg-polo",
    image: "/polopoint.png",
  },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileOpen(false);

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
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
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
```
                </div>

                <div className="floating-card floating-one">
                  <span className="dot" />
                  Open to Freelance
                </div>

                <div className="floating-card floating-two">
                  ⚡ AI &amp; Web Developer
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-soft">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">About Me</div>
              <h2 className="section-title">Who Am I?</h2>
            </div>

            <div className="about-grid">
              <div className="about-text reveal">
                <p>
                  I&apos;m <strong>Tayyba Abid</strong>, a developer based in
                  Pakistan focused on building intelligent and scalable
                  solutions using AI and modern web technologies.
                </p>

                <p>
                  I work with Python, SQL, Django, and FastAPI to develop
                  backend systems and responsive web applications. My interests
                  include AI application development, RAG, and prompt
                  engineering, with a focus on turning complex ideas into
                  practical software.
                </p>

                <div className="skills-list">
                  <div className="skill-category">
                    <p className="cat-label">Languages</p>
                    <div className="pills">
                      <span className="pill pill-purple">Python</span>
                      <span className="pill pill-purple">JavaScript</span>
                      <span className="pill pill-purple">R</span>
                      <span className="pill pill-purple">HTML</span>
                      <span className="pill pill-purple">CSS</span>
                      <span className="pill pill-purple">SQL</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <p className="cat-label">Frameworks &amp; Backend</p>
                    <div className="pills">
                      <span className="pill pill-teal">Django</span>
                      <span className="pill pill-teal">FastAPI</span>
                      <span className="pill pill-teal">Bootstrap</span>
                      <span className="pill pill-teal">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <p className="cat-label">AI &amp; ML</p>
                    <div className="pills">
                      <span className="pill pill-coral">RAG</span>
                      <span className="pill pill-coral">Prompt Engineering</span>
                      <span className="pill pill-coral">Fine-tuning</span>
                      <span className="pill pill-coral">NLP</span>
                      <span className="pill pill-coral">Vector DB</span>
                      <span className="pill pill-coral">LLMs</span>
                      <span className="pill pill-coral">Embeddings</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <p className="cat-label">Tools &amp; Platforms</p>
                    <div className="pills">
                      <span className="pill pill-blue">WordPress</span>
                      <span className="pill pill-blue">Git</span>
                      <span className="pill pill-blue">REST APIs</span>
                      <span className="pill pill-blue">VS Code</span>
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
                  <p>
                    Web apps, company websites, dashboards, e-commerce
                    platforms, AI model development, AI-powered applications,
                    automation systems, and custom business solutions.
                  </p>
                </div>

                <div className="info-card">
                  <h4>🌐 Languages</h4>
                  <p>English · Urdu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">What I Do</div>
              <h2 className="section-title">My Services</h2>
              <p className="section-sub">
                From design to development, I build digital experiences that are
                clean, modern, and results-driven.
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

        <section id="portfolio" className="section section-soft">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">My Work</div>
              <h2 className="section-title">Portfolio</h2>
              <p className="section-sub">
                A selection of projects focused on AI applications, automation,
                dashboards, and modern web solutions.
              </p>
            </div>

                          <div className="portfolio-grid">
                            {portfolio.map((item) => (
                              <article className={`portfolio-item reveal ${item.bgClass}`} key={item.title}
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {/* dark blur overlay on top of image */}
                <div className="port-img-blur" />

                <div className="portfolio-overlay">
                  <span className="portfolio-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  {item.live !== "#" && (
                    <div className="portfolio-buttons">
                      {item.github !== "#" && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer"
                          className="portfolio-btn portfolio-btn-outline">
                          GitHub
                        </a>
                      )}
                      <a href={item.live} target="_blank" rel="noopener noreferrer"
                        className="portfolio-btn portfolio-btn-solid">
                        Try it Out
                      </a>
                    </div>
                  )}
                </div>
              </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-simple reveal">
            <h2 className="section-title">Contact</h2>
            <p className="section-sub">Let&apos;s connect! You can find me at:</p>

            <div className="contact-links">
              <a href="https://github.com/tayyibaa666-cyber" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/tayyba-abid-31751b369/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href="mailto:tayybadogar4@gmail.com" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
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
