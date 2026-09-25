import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { site } from "../data/content.js";
import ClosingFooter from "./ClosingFooter.jsx";
import Spark from "./Spark.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About us" },
  { to: "/#services", label: "Services", hash: "services" },
  { to: "/work", label: "My Work" },
  { to: "/#testimonials", label: "Testimonial", hash: "testimonials" },
];

function linkClass(link, isActive, hash) {
  if (link.hash) {
    return hash === `#${link.hash}` ? "is-active" : undefined;
  }
  if (link.end && (hash === "#testimonials" || hash === "#services")) {
    return undefined;
  }
  return isActive ? "is-active" : undefined;
}

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
    <div className="site-stage">
      <div className="site-shell">
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
              {links.map((link) =>
                link.hash ? (
                  <Link
                    key={link.to}
                    to={{ pathname: "/", hash: link.hash }}
                    className={
                      location.hash === `#${link.hash}` ? "is-active" : undefined
                    }
                    aria-current={
                      location.hash === `#${link.hash}` ? "page" : undefined
                    }
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      linkClass(link, isActive, location.hash)
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>
            <NavLink to="/contact" className="btn btn-nav">
              Contact Me
            </NavLink>
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
            {links.map((link) =>
              link.hash ? (
                <Link
                  key={link.to}
                  to={{ pathname: "/", hash: link.hash }}
                  className={
                    location.hash === `#${link.hash}` ? "is-active" : undefined
                  }
                  aria-current={
                    location.hash === `#${link.hash}` ? "page" : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    linkClass(link, isActive, location.hash)
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <NavLink
              to="/contact"
              className="btn"
              onClick={() => setOpen(false)}
            >
              Contact Me
            </NavLink>
          </div>
        )}

        <Outlet />

        {location.pathname !== "/" && <ClosingFooter />}
      </div>
    </div>
  );
}
