import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { projects, site, testimonials } from "../data/content.js";
import ArrowUpRight from "../components/ArrowUpRight.jsx";
import Icon from "../components/Icon.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ServicesList from "../components/ServicesList.jsx";
import SkillsList from "../components/SkillsList.jsx";
import Spark from "../components/Spark.jsx";

const mission = (
  <>
    I build designs that <em>solve problems</em>, <em>inspire action</em>, and{" "}
    <em>drive success</em>.
  </>
);

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [footerEmail, setFooterEmail] = useState("");

  useEffect(() => {
    const el = document.querySelector(".thanks-wrap");
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle(
          "thanks-active",
          entry.isIntersecting && entry.intersectionRatio >= 0.12
        );
      },
      { threshold: [0.08, 0.12, 0.35, 0.6] }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      document.documentElement.classList.remove("thanks-active");
    };
  }, []);

  useLayoutEffect(() => {
    const mid = document.querySelector(".home-mid");
    const firstRow = document.querySelector(".home-mid .work-row");
    const skills = document.querySelector(".section-skills");
    if (!mid || !firstRow || !skills) return undefined;

    const paint = () => {
      const midBox = mid.getBoundingClientRect();
      const rowBox = firstRow.getBoundingClientRect();
      const skillsBox = skills.getBoundingClientRect();
      mid.style.setProperty("--tone-a-end", `${rowBox.bottom - midBox.top}px`);
      mid.style.setProperty("--tone-d-start", `${skillsBox.top - midBox.top}px`);
      mid.style.setProperty("--skills-band", `${skillsBox.height}px`);
    };

    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(mid);
    window.addEventListener("resize", paint);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", paint);
    };
  }, []);

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Name, email, and a short message are required.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  function onFooterSubmit(e) {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    const subject = encodeURIComponent("Portfolio");
    const body = encodeURIComponent(`From: ${footerEmail.trim()}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main id="main" className="page-home">
      {/* 1 — Hero */}
      <section className="hero" aria-label="Hero">
        <div className="bg-base" aria-hidden="true" />
        <div className="bg-dome" aria-hidden="true" />
        <div className="bg-glow-main" aria-hidden="true" />
        <div className="bg-glow-nav" aria-hidden="true" />
        <div className="bg-edge-right" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-dots" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-eyebrow">{site.eyebrow}</p>
            <h1 className="hero-title">
              <em className="hero-lead">{site.headlineLead}</em>{" "}
              <span className="hero-rest">
                {site.headlineMid}{" "}
                <svg className="arrow" viewBox="0 0 100 100" aria-hidden="true">
                  <path d="M14 6H82L94 18V94H70V47L22.5 94.5L5.5 77.5L53 30H14Z" />
                </svg>
              </span>
            </h1>
            <p className="hero-lede">{site.tagline}</p>
          </div>

          <div className="visual">
            <div className="visual-glow" />
            <img className="visual-img" src="/hero-visual-v2.png" alt="" />
            <NavLink to="/work" className="explore badge" aria-label="Explore more work">
              <svg className="explore-ring" viewBox="0 0 140 140" aria-hidden="true">
                <defs>
                  <path
                    id="explore-circle"
                    d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
                  />
                </defs>
                <text
                  fontFamily="Manrope, sans-serif"
                  fontSize="10.5"
                  fontWeight="500"
                  fill="#FFFFFF"
                  letterSpacing="2.5"
                >
                  <textPath href="#explore-circle" startOffset="0%">
                    LET’S EXPLORE MORE · LET’S EXPLORE MORE ·
                  </textPath>
                </text>
              </svg>
              <span className="explore-core">↓</span>
            </NavLink>
          </div>
        </div>
      </section>

      <div className="home-mid">
      {/* 2 — Mission bridge */}
      <section className="section section-mission" aria-label="Mission">
        <p className="mission-line">{mission}</p>
      </section>

      {/* 3 — Selected Work */}
      <div className="work-band">
      <section className="section section-work" id="work-home">
        <div className="section-head section-head-center">
          <h2 className="section-title section-title-center">
            <ArrowUpRight />
            <span>
              Selected <em>Work</em>
            </span>
          </h2>
          <p className="section-sub">{site.workTagline}</p>
        </div>

        <div className="work-zigzag">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`work-row${i % 2 === 1 ? " is-flip" : ""}`}
            >
              <div className="work-row-media">
                <ProjectCard project={project} equal />
              </div>
              <div className="work-row-copy">
                <span className="project-index">{project.id}</span>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
                <NavLink to="/contact" className="btn btn-sm">
                  Contact Me <span aria-hidden="true">+</span>
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="section-center-link">
          <NavLink to="/work" className="text-link">
            All projects <span aria-hidden="true">→</span>
          </NavLink>
        </div>
      </section>

      <div className="watermark-slot" aria-hidden="true">
        <p className="watermark-horizon">
          Portfolio<span className="watermark-star">✦</span>
        </p>
      </div>
      </div>

      {/* 4–5 — My Services */}
      <section className="section section-services" id="services">
        <div className="section-head section-head-center">
          <h2 className="section-title section-title-center">
            <ArrowUpRight />
            <span>
              <em>My</em> Services
            </span>
          </h2>
        </div>
        <ServicesList limit={4} />
      </section>

      {/* 6 — My Skills */}
      <section className="section section-skills" id="skills">
        <div className="section-head section-head-center">
          <h2 className="section-title section-title-center">
            <ArrowUpRight />
            <span>
              My <em>Skills</em>
            </span>
          </h2>
        </div>
        <SkillsList />
      </section>
      </div>

      {/* 7 — Testimonials */}
      <section className="section section-testimonials" id="testimonials">
        <div className="section-head section-head-center">
          <h2 className="section-title section-title-center">
            <ArrowUpRight />
            <span className="testimonials-word">
              Testim<em>onials</em>
            </span>
          </h2>
          <p className="section-sub">{mission}</p>
        </div>

        <div className="testimonial-orbit">
          <div className="testimonial-glow" aria-hidden="true" />
          <div className="testimonial-msg" aria-hidden="true">
            <Icon name="chat" size={30} />
          </div>
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`testimonial-float testimonial-float-${i + 1}`}
            >
              <div className="testimonial-avatar" aria-hidden="true">
                <Icon name={item.avatar} size={28} />
              </div>
              <blockquote className="quote-card quote-float">
                <p>{item.quote}</p>
                <cite>{item.name}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <div className="contact-foot-band">
      {/* 8 — Contact Me strip */}
      <section className="section section-contact-home" id="contact-home">
        <div className="section-head section-head-center">
          <h2 className="section-title section-title-center">
            <ArrowUpRight />
            <span>
              Contact <em>Me</em>
            </span>
          </h2>
          <p className="section-sub">
            Message me directly to collaborate on your next build.
          </p>
        </div>

        <form className="contact-home-card" onSubmit={onSubmit} noValidate>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            autoComplete="name"
            placeholder="Name"
            aria-label="Name"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            autoComplete="email"
            placeholder="Email"
            aria-label="Email"
            required
          />
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={onChange}
            placeholder="Message"
            aria-label="Message"
            required
          />
          <button className="btn btn-block btn-submit" type="submit">
            Submit <span aria-hidden="true">+</span>
          </button>
          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-ok">
              Thank you for reaching out! I really appreciate you taking the
              time to connect. I’ll review your message and get back to you as
              soon as I can.
            </p>
          )}
        </form>

        <div className="contact-home-pills">
          <a className="contact-home-pill" href={`mailto:${site.email}`}>
            <span className="contact-home-pill-icon" aria-hidden="true">
              <Icon name="mail" />
            </span>
            <span className="contact-home-pill-copy">
              <small>Email</small>
              {site.email}
            </span>
            <span className="contact-home-pill-go" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </a>
          <a className="contact-home-pill" href={site.phoneHref}>
            <span className="contact-home-pill-icon" aria-hidden="true">
              <Icon name="phone" />
            </span>
            <span className="contact-home-pill-copy">
              <small>Phone</small>
              {site.phone}
            </span>
            <span className="contact-home-pill-go" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </a>
          <div className="contact-home-pill">
            <span className="contact-home-pill-icon" aria-hidden="true">
              <Icon name="pin" />
            </span>
            <span className="contact-home-pill-copy">
              <small>Location</small>
              {site.location}
            </span>
            <span className="contact-home-pill-go" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </section>

      {/* 9–10 — Closing CTA + Thanks */}
      <section className="section home-footer" aria-label="Footer">
        <p className="home-footer-mark" aria-hidden="true">
          {site.wordmark}
          <span className="home-footer-star home-footer-star-1">✦</span>
          <span className="home-footer-star home-footer-star-2">✦</span>
          <span className="home-footer-star home-footer-star-3">✦</span>
        </p>
        <div className="home-footer-row">
          <div className="home-footer-left">
            <span className="home-footer-orb" aria-hidden="true">
              <Spark size={18} />
            </span>
            <p className="home-footer-cta">
              COLLABORATE WITH UFAQ AND BEGIN YOUR NEXT BUILD TODAY.
            </p>
          </div>
          <div className="home-footer-right">
            <nav className="home-footer-links" aria-label="Footer">
              <a href="#contact-home">PRIVACY POLICY</a>
              <a href="#contact-home">TERM &amp; CONDITION</a>
              <NavLink to="/about">ABOUT US</NavLink>
              <NavLink to="/contact#faq">FAQ</NavLink>
            </nav>
            <div className="home-footer-social">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon name="git" size={18} />
              </a>
            </div>
            <form className="home-footer-mail" onSubmit={onFooterSubmit}>
              <input
                type="email"
                name="footer-email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Email"
                aria-label="Email"
                required
              />
              <button className="btn btn-submit home-footer-mail-btn" type="submit">
                Submit <span aria-hidden="true">+</span>
              </button>
            </form>
          </div>
        </div>
        <p className="home-footer-copy">©2026 | ALL RIGHTS RESERVED</p>
      </section>
      </div>

      <section className="thanks-wrap" id="thanks" aria-label="Thanks for watching">
        <div className="thanks-bg" aria-hidden="true">
          <span className="thanks-bg-base" />
          <span className="thanks-bg-light" />
          <span className="thanks-bg-mid" />
          <span className="thanks-bg-shade" />
        </div>
        <h2 className="thanks-title">
          Thanks For
          <br />
          Watching!
        </h2>
        <div className="thanks-stage">
          <img
            className="thanks-fg"
            src="/thanks-laptop.png?v=2"
            alt="Open laptop on a dark rock showing the portfolio"
          />
          <NavLink to="/contact" className="thanks-cta">
            <ArrowUpRight />
            Message us directly to collaborate
          </NavLink>
        </div>
      </section>
    </main>
  );
}
