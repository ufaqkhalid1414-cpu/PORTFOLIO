import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { site } from "../data/content.js";
import Spark from "./Spark.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    setOpen(false);
    const jump = () => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          target.scrollIntoView();
          return;
        }
      }
      window.scrollTo(0, 0);
    };
    jump();
    requestAnimationFrame(jump);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="nav-inner">
          <NavLink to="/" end className="brand" aria-label={`${site.displayName} home`}>
            <span className="brand-mark">
              <Spark />
            </span>
            <span className="brand-name">{site.displayName}</span>
          </NavLink>
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            className={`nav-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="nav-toggle-bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-nav" id="mobile-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <Outlet />

      <footer className="site-footer">
        <div className="footer-copy">
          <p className="kicker">Next</p>
          <p className="footer-line">
            Collaborate with {site.displayName} and start the next build.
          </p>
          <NavLink to="/contact" className="btn">
            Contact Me <span aria-hidden="true">→</span>
          </NavLink>
        </div>
        <p className="footer-wordmark" aria-hidden="true">
          {site.wordmark}
        </p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {site.displayName}</span>
          <div className="footer-links">
            <NavLink to="/#testimonials">Testimonials</NavLink>
            <NavLink to="/contact#faq">FAQ</NavLink>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
