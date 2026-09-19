import { Link } from "react-router-dom";

function shotSrc(item) {
  return typeof item === "string" ? item : item.src;
}

function shotAlt(item, title) {
  return typeof item === "string" ? title : item.label || title;
}

function Shots({ images, compact, shot, title }) {
  if (!images?.length) return null;
  const shown = compact ? images.slice(0, 1) : images.slice(0, 4);
  return (
    <div
      className={`shots shots-${shown.length}${compact ? " is-compact" : ""}${
        shot ? ` shots-${shot}` : ""
      }`}
    >
      {shown.map((item) => {
        const src = shotSrc(item);
        return <img key={src} src={src} alt={shotAlt(item, title)} />;
      })}
    </div>
  );
}

export default function ProjectCard({
  project,
  featured = false,
  compact = false,
  equal = false,
}) {
  return (
    <article
      className={`project-card${featured ? " is-featured" : ""}${
        compact ? " is-compact" : ""
      }${equal ? " is-equal" : ""}`}
    >
      <Shots
        images={project.images}
        title={project.title}
        compact={compact || equal}
        shot={project.shot}
      />
      <div className="project-meta">
        <span className="project-index">{project.id}</span>
        <div>
          <h3>
            <Link to={project.href}>{project.title}</Link>
          </h3>
          <p>{project.outcome}</p>
          {!equal && (
            <ul className="project-stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {!equal && <span className="project-year">{project.year}</span>}
      </div>
      <div className="project-actions">
        <Link to={project.href} className="project-link">
          View <span aria-hidden="true">→</span>
        </Link>
        <Link to="/contact" className="btn btn-sm">
          Contact Me <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
