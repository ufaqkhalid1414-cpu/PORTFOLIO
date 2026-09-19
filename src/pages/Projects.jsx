import { projects, workIntro } from "../data/content.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <main id="main" className="page">
      <header className="page-hero">
        <p className="kicker">Selected work</p>
        <h1 className="display page-title">
          Built to be <em>used</em>, then maintained.
        </h1>
        <p className="lede">{workIntro}</p>
      </header>
      <section className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={project.featured}
          />
        ))}
      </section>
    </main>
  );
}
