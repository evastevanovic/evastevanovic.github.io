import { useState } from 'react'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Documentation Helper',
    description:
      'Agentic RAG documentation helper: indexes docs, grades retrieved context, and generates grounded answers using LangChain + LangGraph.',
    highlights: ['Python', 'LangChain', 'LangGraph', 'Chroma embeddings', 'Jupyter Notebooks'],
    repo: 'https://github.com/evastevanovic/documentation-helper'
  },
  {
    title: 'Langchain',
    description:
      'Hands-on LangChain & LangGraph tutorial repository with multi-phase projects covering agents, RAG, and ReAct patterns.',
    highlights: ['Python', 'LangChain', 'LangGraph', 'Tutorials', 'Local LLMs'],
    repo: 'https://github.com/evastevanovic/langchain'
  },
  {
    title: 'Agentic RAG',
    description:
      'Advanced Retrieval-Augmented Generation (RAG) pipeline with stateful graph routing and local LLM execution (Ollama).',
    highlights: ['Python', 'LangGraph', 'Ollama', 'Vector retrieval'],
    repo: 'https://github.com/evastevanovic/agentic-rag'
  },
  {
    title: 'Reflexion Agent',
    description:
      'Reflexion-style agent that iteratively drafts, critiques, and revises outputs using structured JSON schemas.',
    highlights: ['Python', 'LangGraph', 'Ollama', 'Pydantic'],
    repo: 'https://github.com/evastevanovic/reflexion-agent'
  },
  {
    title: 'Reflection Agent',
    description:
      'Tweet optimization reflexion agent: generator + critic loop for improving short-form social copy.',
    highlights: ['Python', 'LangGraph', 'Ollama', 'Iterative evaluation'],
    repo: 'https://github.com/evastevanovic/reflection-agent'
  },
  {
    title: 'MCP Testing',
    description:
      'Small testbed demonstrating MCP adapter patterns for connecting local LLMs to external tools and services.',
    highlights: ['Python', 'MCP', 'LangChain'],
    repo: 'https://github.com/evastevanovic/mcp-test'
  }
]

const photoCards = [
  { src: '/beach_volleyball.jpeg', caption: 'Beach volleyball' },
  { src: '/tennis_natties.jpeg', caption: 'Tennis nationals' },
  { src: '/pickleball.jpeg', caption: 'Pickleball' },
  { src: '/rock_climbing.jpeg', caption: 'Rock Climbing' },
  { src: '/nbhd_lolla.jpeg', caption: 'Lollapalooza' },
  { src: '/chicago_at_night.jpeg', caption: 'Chicago' }
]

const experiences = [
  {
    date: 'Jan 2026 – Present',
    location: 'Chicago, IL',
    role: 'Software Engineering Intern',
    org: 'J.P. Morgan Chase',
    title:
      'Architected end-to-end LLM pipelines converting raw meeting transcripts and business SOPs into human-friendly requirement specifications and machine-executable agent definitions with automated tool selection, generation, and importing. Developed frontend UIs using React, TypeScript, and JavaScript, while managing state persistence via AWS S3 and streamlining deployment infrastructure using Docker, Terraform, Jenkins, Jules, and Spinnaker.',
    tags: ['LLM Pipelines', 'React / TypeScript', 'AI Agent Orchestration', 'AWS S3', 'Docker / Terraform', 'CI/CD (Jenkins/Spinnaker)']
  },
  {
    date: 'Aug 2025 – Dec 2025',
    location: 'Ann Arbor, MI',
    role: 'Instructional Aide (EECS 281)',
    org: 'University of Michigan College of Engineering',
    title:
      'Taught weekly lab sections on core data structures and algorithms to 30+ students while collaborating with a team of 20 instruction aides to design exams and course materials for over 1,000 students.',
    tags: ['C++', 'Data Structures', 'Algorithms', 'Teaching', 'Course Design']
  },
  {
    date: 'May 2025 – Aug 2025',
    location: 'Ann Arbor, MI',
    role: 'Technical Project Management Intern',
    org: 'University of Michigan Information and Technology Services',
    title:
      'Managed data and automation workflows for order tickets across 23% of campus network upgrade locations while creating digital assets and UI/UX proposals for software procurement campaigns.',
    tags: ['Project Management', 'Workflow Automation', 'UI/UX Design', 'Data Analytics']
  },
  {
    date: 'Feb 2025 – Apr 2025',
    location: 'Ann Arbor, MI',
    role: 'Machine Learning Research Assistant',
    org: 'University of Michigan Center for Naval Research and Education',
    title:
      'Developed ML algorithms to automate the classification and evaluation of design metrics for early-stage water-based renewable energy technologies.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Classification Algorithms']
  }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % photoCards.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + photoCards.length) % photoCards.length)
  }

  const previousIndex = (currentIndex - 1 + photoCards.length) % photoCards.length
  const nextIndex = (currentIndex + 1) % photoCards.length

  return (
    <>
      <header className="topbar">
        <div className="brand">Eva Stevanovic</div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="page-shell">
        <header className="hero-shell">
          <div className="hero-layout">
            <div className="portrait-wrap">
              <img
                className="portrait-photo"
                src="/puppy_yoga.jpeg"
                alt="Eva Stevanovic portrait"
              />
            </div>

            <div className="hero-copy">
              <p className="hero-greeting">
                <span className="greeting-hi">Hi,</span>
                {' '}
                <span className="greeting-im">I&apos;m</span>
                {' '}
                <span className="greeting-name">Eva!</span>
              </p>

              <p className="intro">
                I&apos;m a software engineer currently focused on
              </p>

              <div className="word-stack" aria-label="What I'm focused on">
                <span className="word-item word-1">architecting AI workflows,</span>
                <span className="word-item word-2">crafting intuitive UIs,</span>
                <span className="word-item word-3"><span className="word-connector">and</span> building scalable systems.</span>
              </div>

              {/* NEW: Reach out & contact links added to the hero header */}
              <div className="hero-contact-wrap">
                <p className="hero-reach-out">Feel free to reach out!</p>
                <div className="hero-contact-links">
                  <a href="https://github.com/evastevanovic" target="_blank" rel="noreferrer" aria-label="GitHub: evastevanovic">
                    <img src="/github_logo.png" alt="GitHub logo" className="contact-logo" />
                  </a>
                  <a href="https://www.linkedin.com/in/eva-stevanovic/" target="_blank" rel="noreferrer" aria-label="LinkedIn: Eva Stevanovic">
                    <img src="/linkedin_logo.png" alt="LinkedIn logo" className="contact-logo" />
                  </a>
                  <a href="mailto:evasd@comcast.net" aria-label="Email: evasd@comcast.net">
                    <img src="/email_logo.png" alt="Email logo" className="contact-logo" />
                  </a>
                </div>
              </div>

              <a className="scroll-link" href="#about" aria-label="Learn more about me">
                <span>Learn more about me</span>
                <span className="arrow" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </header>

        <section id="about" className="section split">
          <div>
            <span className="section-kicker">About Me</span>
            <h2>Hello!</h2>
            <p>
              My name is Eva, and I&apos;m currently a Software Engineering Intern working with the AI
              Shared Services team at JPMorganChase. I&apos;m a senior at the University of Michigan&apos;s
              College of Engineering majoring in Computer Science with a minor in Business. Go blue!
            </p>
            <p>
              To see what I&apos;ve been up to lately, click through my mini digital scrapbook.
              Please feel free to reach out, I&apos;m always open to meeting new people and going on
              new adventures!
            </p>
            <a className="section-link" href="#projects">
              <span>Check out some of my projects</span>
              <span className="arrow" aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="stats-card photo-rotator" onClick={goToNext} role="button" tabIndex={0} onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              goToNext()
            }
          }} aria-label="Rotate through memory cards">
            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={(event) => {
                event.stopPropagation()
                goToPrevious()
              }}
              aria-label="View previous memory"
            >
              ‹
            </button>
            <div className="photo-card photo-card-left">
              <img src={photoCards[previousIndex].src} alt={photoCards[previousIndex].caption} />
              <span className="photo-caption">{photoCards[previousIndex].caption}</span>
            </div>
            <div className="photo-card photo-card-main">
              <img src={photoCards[currentIndex].src} alt={photoCards[currentIndex].caption} />
              <span className="photo-caption">{photoCards[currentIndex].caption}</span>
            </div>
            <div className="photo-card photo-card-right">
              <img src={photoCards[nextIndex].src} alt={photoCards[nextIndex].caption} />
              <span className="photo-caption">{photoCards[nextIndex].caption}</span>
            </div>
            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={(event) => {
                event.stopPropagation()
                goToNext()
              }}
              aria-label="View next memory"
            >
              ›
            </button>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-kicker">Projects</span>
            <h2 className="sr-only">Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <a className="section-link projects-link" href="#experience">
            <span>Discover how I got here</span>
            <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span className="section-kicker">Experience</span>
            <h2 className="sr-only">Experience</h2>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline-item" key={`${exp.role}-${exp.date}`}>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-org">{exp.org}</div>
                  <p>{exp.title}</p>
                  <ul className="experience-tags">
                    {exp.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-side" aria-hidden="false">
                  <span className="timeline-date">{exp.date}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
              </div>
            ))}
          </div>
          <a className="section-link" href="#contact">
            <span>Get in touch with me!</span>
            <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Let&apos;s get in touch!</h2>
          </div>
          <p>
            I&apos;m always open to new opportunities, collaborations, or even a good conversation! If you&apos;ve got a project you think I&apos;d be a great fit for, want to build something together, or just want to connect, don't hesitate to reach out. I'd love to hear from you!
          </p>
          <div className="contact-links">
            <a href="https://github.com/evastevanovic" target="_blank" rel="noreferrer" aria-label="GitHub: evastevanovic (Eva Stevanovic)">
              <img src="/github_logo.png" alt="GitHub logo" className="contact-logo" />
            </a>
            <a href="https://www.linkedin.com/in/eva-stevanovic/" target="_blank" rel="noreferrer" aria-label="LinkedIn: Eva Stevanovic | LinkedIn">
              <img src="/linkedin_logo.png" alt="LinkedIn logo" className="contact-logo" />
            </a>
            <a href="mailto:evasd@comcast.net" aria-label="Email: evasd@comcast.net">
              <img src="/email_logo.png" alt="Email logo" className="contact-logo" />
            </a>
          </div>
        </section>
      </div>

      <footer className="site-footer" role="contentinfo">
        <div className="page-shell">
          <p className="footer-message">Thanks for checking out my page!</p>
        </div>
      </footer>

    </>
  )
}

export default App
