import { NavLink } from "react-router-dom";
import { about, projects, site, testimonials } from "../data/content.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const featured = projects[0];
  const rest = projects.slice(1, 3);

  return (
    <main id="main">
      <section className="hero-wrap">
        <div className="hero">
        <div className="hero-copy">
          <p className="kicker">{site.eyebrow}</p>
          <h1 className="display hero-title">
            <em>{site.headlineLead}</em>
            <span>
              {site.headlineRest} <span className="arrow">↗</span>
            </span>
          </h1>
          <p className="lede">{site.tagline}</p>
          <div className="hero-actions">
            <NavLink to="/contact" className="btn">
              Contact Me <span aria-hidden="true">→</span>
            </NavLink>
            <NavLink to="/work" className="btn btn-ghost">
              View work
            </NavLink>
          </div>
        </div>

        <aside className="hero-frame" aria-hidden="true">
          <div className="hero-frame-inner">
            <span className="hero-avail">Available for work</span>
            <span className="hero-initial display">{site.firstName.charAt(0)}</span>
            <span className="hero-role">{site.role}</span>
          </div>
          <NavLink to="/work" className="explore" aria-label="View selected work">
            <span>↓</span>
          </NavLink>
        </aside>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">Selected work</p>
          <h2 className="display section-title">
            <span className="arrow">↗</span> Selected <em>Work</em>
          </h2>
        </div>
        <div className="work-preview">
          <ProjectCard project={featured} featured />
          <div className="work-side">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
        <NavLink to="/work" className="text-link">
          All projects <span aria-hidden="true">→</span>
        </NavLink>
      </section>

      <section className="section" id="testimonials">
        <div className="section-head">
          <p className="kicker">Testimonials</p>
          <h2 className="display section-title">
            <span className="arrow">↗</span> What people <em>said</em>
          </h2>
        </div>
        <div className="quotes">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="quote-card">
              <p>{item.quote}</p>
              <cite>{item.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section about-split">
        <h2 className="display split-title">
          {about.titleBefore} <em>{about.titleEm}</em> {about.titleAfter}
        </h2>
        <div>
          <p className="lede">{about.body[0]}</p>
          <NavLink to="/about" className="btn" style={{ marginTop: 24 }}>
            About me <span aria-hidden="true">→</span>
          </NavLink>
        </div>
      </section>
    </main>
  );
}
