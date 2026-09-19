import { skills } from "../data/content.js";

export default function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <article key={item.title} className="skill-row">
          <span>{item.title}</span>
          <span className="skill-arrow" aria-hidden="true">
            ↗
          </span>
        </article>
      ))}
    </div>
  );
}
