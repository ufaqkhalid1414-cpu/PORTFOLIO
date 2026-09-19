import { useState } from "react";
import { faqs, site } from "../data/content.js";
import Icon from "../components/Icon.jsx";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(faqs[0].id);

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Name, email, and a short message are required.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main id="main" className="page">
      <header className="page-hero">
        <p className="kicker">Contact</p>
        <h1 className="display page-title">
          Let’s work on a <em>project</em>.
        </h1>
        <p className="lede">
          Open to real project work. Write me — I read every message.
        </p>
      </header>

      <section className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              autoComplete="name"
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              autoComplete="email"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              required
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-ok">
              Thank you for reaching out! I really appreciate you taking the
              time to connect. I’ll review your message and get back to you as
              soon as I can.
            </p>
          )}
          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </form>

        <aside className="contact-aside">
          <div className="contact-row">
            <span className="contact-icon" aria-hidden="true">
              <Icon name="mail" />
            </span>
            <div>
              <p className="kicker">Email</p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="contact-row">
            <span className="contact-icon" aria-hidden="true">
              <Icon name="phone" />
            </span>
            <div>
              <p className="kicker">Phone</p>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
          <div className="contact-row">
            <span className="contact-icon" aria-hidden="true">
              <Icon name="pin" />
            </span>
            <div>
              <p className="kicker">Location</p>
              <p>{site.location}</p>
            </div>
          </div>
          <div className="contact-row">
            <span className="contact-icon" aria-hidden="true">
              <Icon name="git" />
            </span>
            <div>
              <p className="kicker">GitHub</p>
              <a href={site.github} target="_blank" rel="noreferrer">
                github.com/ufaqkhalid1414-cpu
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="faq" style={{ paddingTop: 64, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
        <div className="section-head">
          <p className="kicker">FAQ</p>
          <h2 className="display section-title">
            <span className="arrow">↗</span> Common <em>questions</em>
          </h2>
        </div>
        <div className="accordion">
          {faqs.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <div
                key={item.id}
                className={`acc-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="acc-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? "" : item.id)}
                >
                  <span className="acc-index">{item.id}</span>
                  <span className="acc-title">{item.question}</span>
                  <span className="acc-chevron" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="acc-body">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
