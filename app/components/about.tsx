const techStack = [{ name: "Spring Boot" }, { name: "NodeJS" }, { name: "Java" }, { name: "TypeScript" }, { name: "JavaScript" }, { name: "SQL" }, { name: "Git" }, { name: "Firestore" }, { name: "React" }, { name: "NextJS" }];

export default function About() {
  return (
    <section id="about" className="portfolio-section portfolio-section--hero">
      <div>
        <p className="portfolio-eyebrow">Software Engineer</p>
        <h1 className="portfolio-title">
          Hello, I&apos;m <span>Kasun Mendis</span>
        </h1>
        <p className="portfolio-copy">Software engineer with roots in backend and distributed systems building microservices that scale, leading end-to-end technical delivery, and tightening the feedback loops that keep systems reliable. I care about the craft: clean design, long-term maintainability, and leveraging AI to ship better, faster. Outside core work, I&apos;m drawn to ML, game development, and the elegance of well-designed systems.</p>
        <div style={{ marginTop: "1rem" }}>
          <h2 style={{ fontSize: "x-large" }}>Let&apos;s connect</h2>
          <p style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}>
            <a className="portfolio-link--accent" href="mailto:t.kasun.mendis@gmail.com">
              t.kasun.mendis@gmail.com
            </a>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <a className="portfolio-link--accent" href="https://www.linkedin.com/in/tksm" target="_blank" rel="noreferrer">
              linkedin.com/in/tksm
            </a>
          </p>
        </div>

        <div className="portfolio-actions">
          <a href="#experience" className="portfolio-button portfolio-button--primary">
            See My Experience
          </a>
          <a href="#projects" className="portfolio-button portfolio-button--secondary">
            View My Projects
          </a>
        </div>
      </div>

      <div id="tech-stack" className="portfolio-card">
        <div className="portfolio-section__heading">
          <p className="portfolio-eyebrow">Tech stack</p>
          <h2>Tech I&apos;m Familiar With</h2>
        </div>
        <div className="portfolio-tech-grid">
          {techStack.map((tool) => (
            <div key={tool.name} className="portfolio-tech-item">
              <span className="portfolio-tech-item__label">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
