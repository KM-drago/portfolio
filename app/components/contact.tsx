const experience = [
  {
    company: "SyscoLABS",
    role: "Software Engineer",
    dates: "Mar 2025 - Present",
    highlights: [
      ["Contributed as a ", <strong key="backend-engineer">Backend Engineer</strong>, " to Sysco's e-commerce ", <strong key="microservices">microservices</strong>, " ecosystem, with a focus on order submission workflows and event-driven order notifications that ", <strong key="orders-day">cater to 100k+ orders a day</strong>, "."],
      ["Worked across 10+ microservices, with ", <strong key="ownership-4-services">primary ownership of 4 services</strong>, " within the unified notification engine that ", <strong key="notifications-day">handles 100k+ notifications a day</strong>, " driving feature development, maintenance, and reliability improvements."],
      ["Contributed to multiple feature epics and led the technical delivery of 4 epics, from requirements analysis and effort estimation through low-level design and implementation."],
      ["Created low-level designs that provided clear technical direction for engineers, translating complex and ambiguous requirements into scalable implementation approaches."],
      ["", <strong key="leveraged-ai">Leveraged AI effectively</strong>, " throughout the software development lifecycle to accelerate the transition from ambiguous feature requirements to low-level designs and production-ready implementations, ", <strong key="zero-qa">achieving virtually zero QA failures</strong>, "."],
      ["Collaborated closely with software architects to refactor and enhance owned notification services, improving maintainability, reliability, and overall system design."],
      ["Introduced and fine-tuned error and incident monitoring for notification services, enabling faster detection, diagnosis, and resolution of production incidents."],
      ["Optimized logging across 3 services, achieving an average ", <strong key="cost-reduction">60% reduction in logging costs</strong>, " while maintaining effective debugging and troubleshooting capabilities."],
      ["Served as a ", <strong key="security-incident">primary developer supporting the investigation of a major security incident</strong>, ", helping identify root causes and implement corrective measures to strengthen system security."],
    ],
  },
];

export default function Contact() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-section__heading">
        <p className="portfolio-eyebrow">Experience</p>
        <h2>My Professional Journey</h2>
        <p className="portfolio-copy">Backend & distributed systems engineer. I design microservices that scale, lead technical delivery across complex architectures, and take ownership from requirements to production. </p>
      </div>

      <div className="portfolio-timeline">
        {experience.map((item) => (
          <article key={item.company} className="portfolio-timeline__item">
            <h3>{item.company}</h3>
            <p className="portfolio-timeline__meta">
              {item.role} • {item.dates}
            </p>
            <ul className="portfolio-bullets">
              {item.highlights.map((highlight, index) => (
                <li key={`${item.company}-${index}`}>{highlight.map((part, partIndex) => (typeof part === "string" ? part : <span key={`${item.company}-${index}-${partIndex}`}>{part}</span>))}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
