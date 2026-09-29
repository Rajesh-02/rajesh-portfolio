import { createElement, useRef, useState, type ReactNode } from "react"
import questImage from "./assets/devices/quest.jpg"
import spatialDisplayImage from "./assets/devices/spatial-display.jpg"
import tabletImage from "./assets/devices/tablet.jpg"
import visionProImage from "./assets/devices/vision-pro.jpg"
import resumeUrl from "./imports/Rajesh_Kumar_M_Resume.pdf"


type IconName = "arrow" | "code" | "cube" | "database" | "github" | "linkedin" | "mail" | "spark" | "terminal"

const skills = [
  {
    icon: "code" as IconName,
    title: "Frontend",
    text: "JavaScript, React.js, TypeScript, React Redux, Context API, React Router, Material UI, HTML5/CSS3",
  },
  {
    icon: "terminal" as IconName,
    title: "Backend & APIs",
    text: "Node.js, Express.js, ASP.NET Core Web API, RESTful APIs, JWT Authentication, Entity Framework Core",
  },
  {
    icon: "database" as IconName,
    title: "Data & Cloud",
    text: "MongoDB, SQL Server, Azure App Service, Blob Storage, Cosmos DB, AWS",
  },
  {
    icon: "code" as IconName,
    title: "Engineering Tools",
    text: "Git, Azure DevOps, Postman, Jira, Agile development, CI/CD pipelines",
  },
]

const projects: {
  number: string
  eyebrow: string
  title: string
  text: string
  role: string
  impact: string
  tags: string[]
  className: string
}[] = [
  {
    number: "01",
    eyebrow: "Full stack · Enterprise application",
    title: "Smart Worker Suite",
    text: "A full-stack field-operations application for designing and managing reusable workflows, with enterprise modules for users, licenses, billing, invoicing, reporting, and remote assistance.",
    role: "Developed React interfaces with Redux and Context API, built ASP.NET Core REST APIs, implemented data access and business modules, and integrated real-time communication using Twilio Video SDK and WebRTC.",
    impact: "Workflow automation, enterprise management, and remote assistance",
    tags: ["React.js", "React Flow", "Redux", "ASP.NET Core", "MongoDB", "Twilio Video", "WebRTC", "Azure"],
    className: "project-coral",

  },
  {
    number: "02",
    eyebrow: "AI product · React",
    title: "AI-Powered Form Builder",
    text: "A CRM-native form builder designed to simplify form creation and connect submitted responses directly with CRM records.",
    role: "Built the React interface from scratch and developed UI flows for AI-assisted form generation and post-submission data management.",
    impact: "AI-assisted form creation and automated CRM data mapping",
    tags: ["React.js", "AI-assisted UI", "CRM", "Axios"],
    className: "project-mint",

  },
  {
    number: "03",
    eyebrow: "Frontend · Movie discovery application",
    title: "CineSphere",
    text: "A React-based movie discovery single-page application for browsing films, exploring details, and finding content through a responsive interface.",
    role: "Built reusable React components, implemented client-side routing and API integration, and designed responsive movie browsing and detail experiences.",
    impact: "Responsive movie discovery and detail browsing experience",
    tags: ["React.js", "JavaScript", "REST API", "React Router", "CSS3"],
    className: "project-coral",
  },

]

const experience = [
  {
    period: "March 2024 — Present",
    role: "Associate Software Engineer",
    company: "Bangalore, India",
    description:
      "Developing and delivering full-stack applications for internal field operations in collaboration with product owners and business analysts within Agile development teams.",
    highlights: [
      "Developed reusable React components across multiple application modules, improving consistency and maintainability",
      "Built and integrated RESTful APIs using Node.js, Express.js, and ASP.NET Core Web API",
      "Implemented JWT authentication and role-based access control (RBAC) for secure application access",
      "Optimized database queries using filtering, pagination, and selective data retrieval",
      "Integrated Azure CI/CD pipelines for automated builds and production deployments",
      "Followed Git branching, peer code reviews, Jira workflows, and Agile sprint practices",
    ],
  },
]

const devices = [
  {
    name: "Meta Quest",
    type: "VR · Head-mounted",
    image: questImage,
    alt: "White virtual reality headset representing Meta Quest development",
    credit: "Photo: Remy Gieling / Unsplash",
  },
  {
    name: "Apple Vision Pro",
    type: "MR · Spatial computing",
    image: visionProImage,
    alt: "Apple Vision Pro mixed reality headset on a table",
    credit: "Photo: Roméo A. / Unsplash",
  },
  {
    name: "Tablets",
    type: "AR · Mobile field use",
    image: tabletImage,
    alt: "Person using a tablet device",
    credit: "Photo: Patrick Schneider / Unsplash",
  },
  {
    name: "Sony Spatial Reality Display",
    type: "3D · Glasses-free display",
    image: spatialDisplayImage,
    alt: "Curved display showing a three-dimensional space scene",
    credit: "Photo: Gavin Phillips / Unsplash",
  },
]

function Heading({
  as = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3"
  className?: string
  children: ReactNode
}) {
  return createElement(as, { className }, children)
}

function Link({
  href,
  className = "",
  children,
  label,
}: {
  href: string
  className?: string
  children: ReactNode
  label?: string
}) {
  return createElement("a", { href, className, "aria-label": label }, children)
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    cube: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 21v-8.9" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    github: (
      <path d="M15 22v-3.9c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.6-1.6-.1-3.3 0 0-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6.5 0C6.2 2.9 5.1 3.2 5.1 3.2c-.7 1.7-.2 3-.1 3.3-.8.9-1.3 2-1.3 3.4 0 4.8 2.9 5.9 5.7 6.2-.4.3-.7.9-.8 1.7-.7.3-2.6.9-3.7-1.1 0 0-.7-1.3-2-1.4 0 0-1.3 0-.1.8 0 0 .9.4 1.5 1.8 0 0 .8 2.5 4.3 1.7V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 4-2Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3 10.4 8.4 5 10l5.4 1.6L12 17l1.6-5.4L19 10l-5.4-1.6L12 3Z" />
        <path d="m5 3-.6 2.4L2 6l2.4.6L5 9l.6-2.4L8 6l-2.4-.6L5 3Z" />
        <path d="m19 16-.7 2.3-2.3.7 2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3M13 15h4" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function Carousel({
  items,
  label,
  className = "",
}: {
  items: ReactNode[]
  label: string
  className?: string
}) {
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const goTo = (i: number) => {
    const el = track.current
    if (!el) return
    const next = (i + items.length) % items.length
    const child = el.children[next] as HTMLElement
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" })
    setActive(next)
  }

  const onScroll = () => {
    const el = track.current
    if (!el) return

    // At the far right end, the last slide can't reach the left edge, so treat it as active.
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
      setActive(items.length - 1)
      return
    }

    let nearest = 0
    let min = Infinity
    Array.from(el.children).forEach((c, i) => {
      const d = Math.abs((c as HTMLElement).offsetLeft - el.scrollLeft)
      if (d < min) {
        min = d
        nearest = i
      }
    })
    setActive(nearest)
  }

  return (
    <div
      className={`carousel ${className}`}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="carousel-track" ref={track} onScroll={onScroll}>
        {items.map((item, i) => (
          <div className="carousel-slide" key={i}>
            {item}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={i === active ? "is-active" : ""}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-arrows">
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
            className="flip"
          >
            <Icon name="arrow" size={18} />
          </button>
          <button onClick={() => goTo(active + 1)} aria-label="Next slide">
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string
  title: string
  text?: string
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{label}</span>
      <Heading className="section-title">{title}</Heading>
      {text && <p className="section-copy">{text}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <Link className="brand" href="#top" label="Home">
            <span className="brand-mark">RK</span>
            <span className="brand-name">Rajesh Kumar M</span>
          </Link>
          <div className="nav-links">
            <Link href="#work">Work</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#about">About</Link>
          </div>
          <Link className="button button-small" href="#contact">
            Let&apos;s talk <Icon name="arrow" size={16} />
          </Link>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              Open to full-time opportunities
            </div>
            <Heading as="h1" className="hero-title">
              Building secure products from{" "}
              <span className="gradient-text">
                interface to infrastructure.
              </span>
            </Heading>
            <p className="hero-description">
              I&apos;m Rajesh, a Full-Stack Developer with 2+ years of experience
              building scalable web applications using React.js, Node.js,
              Express.js, ASP.NET Core, MongoDB, and RESTful APIs.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">
                View selected work <Icon name="arrow" />
              </Link>
              <Link className="button button-ghost" href={resumeUrl}>
                Download résumé
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>2+</strong>
                <span>Years of experience</span>
              </div>
              <div>
                <strong>9.40</strong>
                <span>B.Tech CGPA</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Cloud platforms</span>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Interactive technology visual"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-one">
              <span className="orbit-node" />
            </div>
            <div className="orbit orbit-two">
              <span className="orbit-node" />
            </div>
            <div className="core">
              <div className="core-icon">
                <Icon name="terminal" size={30} />
              </div>
              <span>Primary expertise</span>
              <strong>Full Stack</strong>
            </div>
            <div className="tech-chip chip-ai">
              <Icon name="spark" size={16} /> AI interfaces
            </div>
            <div className="tech-chip chip-xr">
              <Icon name="cube" size={16} /> XR skills
            </div>
            <div className="tech-chip chip-api">
              <Icon name="database" size={16} /> Scalable APIs
            </div>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="container">
            <SectionIntro
              label="What I bring"
              title="Full-stack engineering across the application lifecycle."
              text="I work across frontend development, backend APIs, database integration, authentication, state management, and cloud deployment."
            />
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon name={skill.icon} />
                  </div>
                  <Heading as="h3">{skill.title}</Heading>
                  <p>{skill.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section container" id="work">
          <SectionIntro
            label="Selected work"
            title="Selected projects and technical contributions."
            text="A concise view of the applications and features I have developed across full-stack, enterprise, and AI-assisted product work."
          />
          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.className}`}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <Heading as="h3">{project.title}</Heading>
                  <p>{project.text}</p>
                  <p className="project-role">
                    <strong>My role</strong> {project.role}
                  </p>
                  <div className="impact">
                    <span className="impact-mark">↗</span>
                    {project.impact}
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="container experience-layout">
            <div className="experience-heading">
              <SectionIntro
                label="Experience"
                title="Professional experience."
                text="Full-stack development across frontend interfaces, backend services, database integration, security, and cloud delivery."
              />
              <Link className="text-link" href={resumeUrl}>
                Get my full résumé <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.period}>
                  <span className="timeline-dot" />
                  <span className="timeline-period">{job.period}</span>
                  <Heading as="h3">{job.role}</Heading>
                  <p className="company">{job.company}</p>
                  <p>{job.description}</p>
                  <ul>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="xr-section" id="xr">
          <div className="container">
            <div className="xr-heading">
              <div>
                <span className="eyebrow">Additional technical experience · XR</span>
                <Heading className="section-title">
                  Exploring 3D and spatial computing.
                </Heading>
              </div>
              <p>
                Alongside full-stack development, I have hands-on exposure to 3D and
                immersive technologies, including AR, VR, MR, and
                glasses-free spatial displays.
              </p>
            </div>
            <Carousel
              className="xr-carousel"
              label="XR devices"
              items={devices.map((device) => (
                <article className="device-card">
                  <img src={device.image} alt={device.alt} />
                  <div className="device-overlay">
                    <span>{device.type}</span>
                    <Heading as="h3">{device.name}</Heading>
                    <small>{device.credit}</small>
                  </div>
                </article>
              ))}
            />
          </div>
        </section>

        <section className="about-section container" id="about">
          <div className="about-card">
            <div className="about-monogram">RK</div>
            <div className="about-copy">
              <span className="eyebrow">About</span>
              <Heading>Full-stack development with an interest in AI and XR.</Heading>
              <p>
                I build maintainable web applications across frontend, backend,
                APIs, databases, authentication, and cloud deployment. I also
                explore AI-assisted interfaces and immersive technologies to
                understand how emerging tools can solve practical business problems.
              </p>
              <div className="about-meta">
                <span>Chennai, Tamil Nadu</span>
                <span>B.Tech IT · Karpagam College of Engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <div className="contact-layout">
              <div className="contact-intro">
                <span className="eyebrow">Contact</span>
                <Heading>Let&apos;s discuss your next project.</Heading>
                <p>
                  Have a full-stack opportunity, project requirement, or technical
                  collaboration in mind? Send me a message and I&apos;ll get back to you.
                </p>

                <div className="contact-details">
                  <a href="mailto:rajeshmarakkannu1998@gmail.com">
                    rajeshmarakkannu1998@gmail.com
                  </a>
                  <a href="tel:+918939543917">+91 89395 43917</a>
                  <a href="https://www.linkedin.com/in/rajesh0211">
                    LinkedIn profile
                  </a>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  const form = event.currentTarget
                  const data = new FormData(form)
                  const name = String(data.get("name") || "")
                  const email = String(data.get("email") || "")
                  const company = String(data.get("company") || "")
                  const subject = String(data.get("subject") || "Portfolio enquiry")
                  const message = String(data.get("message") || "")

                  const body = [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Company: ${company || "Not provided"}`,
                    "",
                    message,
                  ].join("\n")

                  window.location.href =
                    `mailto:rajeshmarakkannu1998@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                }}
              >
                <div className="form-row">
                  <label>
                    <span>Name</span>
                    <input name="name" type="text" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" placeholder="you@company.com" required />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>Company <em>Optional</em></span>
                    <input name="company" type="text" placeholder="Company or organization" />
                  </label>
                  <label>
                    <span>Subject</span>
                    <input name="subject" type="text" placeholder="Project / opportunity" required />
                  </label>
                </div>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me briefly about the project, role, or requirement..."
                    required
                  />
                </label>

                <button className="button button-light form-submit" type="submit">
                  Send enquiry <Icon name="arrow" size={17} />
                </button>
                <p className="form-note">
                  Submitting opens your default email application with the enquiry details.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Rajesh Kumar M</span>
        <span>Designed & built with intention.</span>
      </footer>
    </div>
  )
}