import { useState } from "react";
import { NavLink } from "react-router-dom";
import { site } from "../data/content.js";
import Icon from "./Icon.jsx";
import Spark from "./Spark.jsx";

export default function ClosingFooter() {
  const [footerEmail, setFooterEmail] = useState("");

  function onFooterSubmit(e) {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    const subject = encodeURIComponent("Portfolio");
    const body = encodeURIComponent(`From: ${footerEmail.trim()}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
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
            <NavLink to="/#contact-home">PRIVACY POLICY</NavLink>
            <NavLink to="/#contact-home">TERM &amp; CONDITION</NavLink>
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
  );
}
