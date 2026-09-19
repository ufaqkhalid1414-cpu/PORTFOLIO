import { useState } from "react";
import { services } from "../data/content.js";
import Icon from "./Icon.jsx";

export default function ServicesList({ startOpen = true }) {
  const [open, setOpen] = useState(startOpen ? services[0].id : "");

  return (
    <div className="accordion">
      {services.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className={`acc-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="acc-head has-icon"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? "" : item.id)}
            >
              <span className="acc-icon">
                <Icon name={item.icon} />
              </span>
              <span className="acc-title">{item.title}</span>
              <span className="acc-chevron" aria-hidden="true">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="acc-body">
                <p>{item.body}</p>
                <div className="pills">
                  {item.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
