import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNextProject, getProject, site } from "../data/content.js";

function titleParts(project) {
  const em = project.titleEm;
  if (!em || !project.title.includes(em)) {
    return { before: project.title, em: "", after: "" };
  }
  const i = project.title.lastIndexOf(em);
  return {
    before: project.title.slice(0, i).trimEnd(),
    em,
    after: project.title.slice(i + em.length),
  };
}

export default function Project() {
  const { slug } = useParams();
  const project = getProject(slug);
  const next = project ? getNextProject(project.slug) : undefined;

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} — ${site.displayName}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) return <Navigate to="/work" replace />;

  const heading = titleParts(project);

  return (
    <main id="main" className="page">
      <header className="page-hero case-hero">
        <p className="kicker">
          <Link to="/work" className="case-back">
            ← Work
          </Link>
          <span aria-hidden="true"> · </span>
          {project.id}
          <span aria-hidden="true"> · </span>
          {project.year}
        </p>
        <h1 className="display page-title">
          {heading.before}
          {heading.before ? " " : ""}
          {heading.em ? <em>{heading.em}</em> : null}
          {heading.after}
        </h1>
        <p className="lede">{project.outcome}</p>
        <ul className="project-stack case-stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      {project.images?.length ? (
        <section
          className={`case-gallery shots-${project.shot || "ui"}`}
          aria-label={`${project.title} screenshots`}
        >
          {project.images.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.label} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <section className="case-body">
        <article>
          <p className="kicker">The problem</p>
          <p>{project.problem}</p>
        </article>
        <article>
          <p className="kicker">How I built it</p>
          <p>{project.build}</p>
        </article>
        <article>
          <p className="kicker">What it proves</p>
          <p>{project.result}</p>
        </article>
      </section>

      {next ? (
        <div className="case-next">
          <Link to="/work" className="text-link">
            All projects <span aria-hidden="true">→</span>
          </Link>
          <Link to={next.href} className="text-link">
            Next · {next.title} <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </main>
  );
}
