import { NavLink } from "react-router-dom";
import { about, site } from "../data/content.js";
import ArrowUpRight from "../components/ArrowUpRight.jsx";
import ServicesList from "../components/ServicesList.jsx";
import SkillsList from "../components/SkillsList.jsx";

export default function About() {
  return (
    <main id="main" className="page">
      <header className="page-hero">
        <p className="kicker">{about.kicker}</p>
        <h1 className="display page-title">
          {about.titleBefore} <em>{about.titleEm}</em> {about.titleAfter}
        </h1>
        {about.body.map((p) => (
          <p key={p} className="lede">
            {p}
          </p>
        ))}
      </header>

      <section className="section" id="services" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="kicker">What I do</p>
          <h2 className="display section-title">
            <ArrowUpRight /> My <em>Services</em>
          </h2>
        </div>
        <ServicesList />
      </section>

      <section className="section" id="skills" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="kicker">Stack</p>
          <h2 className="display section-title">
            <ArrowUpRight /> My <em>Skills</em>
          </h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Tools and methods that show up in the three projects on Work.
          </p>
        </div>
        <SkillsList />
        <div className="pills" style={{ marginTop: 24 }}>
          {about.stack.map((item) => (
            <span key={item} className="pill pill-lg">
              {item}
            </span>
          ))}
        </div>
        <NavLink to="/contact" className="btn" style={{ marginTop: 40 }}>
          Work with {site.firstName} <span aria-hidden="true">→</span>
        </NavLink>
      </section>
    </main>
  );
}
