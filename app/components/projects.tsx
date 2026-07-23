const projects = [
  {
    name: "ReviQu — AI-Powered Review Intelligence Platform",
    description: "Architected a full-stack SaaS where users can query any Google Maps location and get AI-generated insights grounded in real customer reviews. The core is a RAG pipeline that retrieves, processes, and embeds review data for accurate, low-latency responses built with cost efficiency in mind. I owned the full product — UI/UX design with collaboration from a UI/UX engineer, Stripe subscription integration, and a Chrome extension that plugs directly into Google Maps, reusing the platform's backend and auth via tRPC and Clerk.",
    tech: "NextJS,  tRPC,  Firestore,  PineconeDB,  TailwindCSS,  Gemini,  Clerk,  Stripe,  DigitalOcean, WXT, Vanilla React with Vite, TailwindCSS",
  },
  {
    name: "History Preservation Approach to Aid in Multivariate Time Series Forecasting",
    description: "Introduced a method to improve the accuracy of multivariate time series forecasting by focusing on significant historical events. Produced a dataset with five decades' of data depicting the behaviour of key economic indicators. Achieved accuracy improvements exceeding 15% over the baseline of the study.",
    tech: "Python, TensorFlow, Scikit-learn, Pandas, NumPy, and Matplotlib",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-section__heading">
        <p className="portfolio-eyebrow">Projects</p>
        <h2>Most Notable</h2>
        <p className="portfolio-copy">I&apos;m drawn to building tools that solve my own problems, often pulling in AI and machine learning to get there.</p>
      </div>

      <div className="portfolio-project-grid">
        {projects.map((project) => (
          <article key={project.name} className="portfolio-project-card">
            <div className="portfolio-project__header">
              <h3>{project.name}</h3>
              <p className="portfolio-project__meta">{project.tech}</p>
            </div>
            <p className="portfolio-copy">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
