import { skills } from "../data/content.js";
import ArrowUpRight from "./ArrowUpRight.jsx";

const stacked = ["HTML & CSS", "JavaScript", "C++ & Unity"];

export default function SkillsList() {
  const cards = stacked
    .map((title) => skills.find((item) => item.title === title))
    .filter(Boolean);

  return (
    <div className="skills-stack">
      {cards.map((item, i) => (
        <article
          key={item.title}
          className={`skill-card skill-card-${i + 1}`}
        >
          <span className="skill-card-name">
            <ArrowUpRight className="arrow-up-right skill-card-arrow" />
            {item.title}
          </span>
          <p className="skill-card-copy">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
