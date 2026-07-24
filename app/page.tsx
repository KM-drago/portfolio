import Image from "next/image";
import About from "./components/about";
import Contact from "./components/experience";
import Projects from "./components/projects";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Home() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-header">
        <a className="portfolio-brand" href="#about">
          <Image src="/logo.svg" alt="Kasun Mendis logo" width={48} height={48} className="portfolio-logo" />
          <span>Kasun Mendis</span>
        </a>

        <nav className="portfolio-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="portfolio-content">
        <About />
        <Contact />
        <Projects />
      </div>

      <footer className="portfolio-footer">
        <p>Copyright © 2026 Kasun Mendis - All rights reserved.</p>
      </footer>
    </main>
  );
}
