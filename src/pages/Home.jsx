import { NavLink } from "react-router-dom";
import { about, projects, site, testimonials } from "../data/content.js";
import Icon from "../components/Icon.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ServicesList from "../components/ServicesList.jsx";
import SkillsList from "../components/SkillsList.jsx";

export default function Home() {
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

          <aside className="hero-frame">
            <div className="hero-ribbon" aria-hidden="true">
              <svg viewBox="0 0 1200 160" preserveAspectRatio="none">
                <path
                  id="hero-ribbon-path"
                  d="M0 90 C 150 20, 350 150, 600 80 S 1050 20, 1200 90"
                  fill="none"
                  stroke="#a7f5aa"
                  strokeWidth="46"
                  strokeLinecap="round"
                />
                <text
                  fontFamily="Outfit, Segoe UI, sans-serif"
                  fontSize="20"
                  fontWeight="700"
                  fill="#07110a"
                  letterSpacing="6"
                >
                  <textPath href="#hero-ribbon-path" startOffset="2%">
                    PORTFOLIO · LET’S EXPLORE MORE · PORTFOLIO · LET’S EXPLORE
                    MORE · PORTFOLIO · LET’S EXPLORE MORE · PORTFOLIO
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="hero-photo-frame">
              <img src="/portrait.jpg" alt="Ufaq Khalid" />
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
        <div className="work-block">
          <p className="work-tagline">{site.workTagline}</p>
          <div className="work-preview">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} equal />
            ))}
          </div>
        </div>
        <NavLink to="/work" className="text-link">
          All projects <span aria-hidden="true">→</span>
        </NavLink>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="kicker">What I do</p>
          <h2 className="display section-title">
            <span className="arrow">↗</span> My <em>Services</em>
          </h2>
        </div>
        <ServicesList />
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <p className="kicker">Stack</p>
          <h2 className="display section-title">
            <span className="arrow">↗</span> My <em>Skills</em>
          </h2>
        </div>
        <SkillsList />
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

      <section className="section close-split" id="testimonials">
        <div>
          <div className="section-head">
            <p className="kicker">Testimonials</p>
            <h2 className="display section-title">
              <span className="arrow">↗</span> What people <em>said</em>
            </h2>
          </div>
          <div className="quotes quotes-stack">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="quote-card">
                <div className="quote-avatar" aria-hidden="true">
                  <Icon name={item.avatar} size={40} />
                </div>
                <p>{item.quote}</p>
                <cite>{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="foot-cta">
          <p className="footer-wordmark footer-wordmark-soft" aria-hidden="true">
            {site.wordmark}
          </p>
          <p className="footer-line">
            Collaborate with {site.displayName} and start the next build.
          </p>
          <NavLink to="/contact" className="btn">
            Contact Me
          </NavLink>
          <NavLink to="/contact" className="footer-plus" aria-label="Contact Me">
            +
          </NavLink>
        </div>
      </section>
    </main>
  );
}
