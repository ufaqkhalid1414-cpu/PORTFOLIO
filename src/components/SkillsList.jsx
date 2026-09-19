import { skills } from "../data/content.js";
import Icon from "./Icon.jsx";

export default function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <article key={item.title} className="skill-card">
          <h3>
            <span className="skill-icon">
              <Icon name={item.icon} size={18} />
            </span>
            {item.title}
          </h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
