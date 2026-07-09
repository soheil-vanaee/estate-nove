import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your real contact endpoint / email service.
    setSent(true);
  };

  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="listing-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Talk to an Estate Nove agent</h1>
          <p>
            Questions about a listing, a valuation or financing? Send us a
            message and we'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <h2>Get in touch</h2>
            <ul>
              <li>
                <span>Email</span>
                <strong>hello@estatenove.com</strong>
              </li>
              <li>
                <span>Phone</span>
                <strong>+1 (555) 010-2030</strong>
              </li>
              <li>
                <span>Office</span>
                <strong>128 Wilshire Blvd, Los Angeles, CA</strong>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <h3>Message sent</h3>
                <p>
                  Thanks, {form.name || "there"} — we'll reply to{" "}
                  {form.email || "your email"} shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@example.com"
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="How can we help?"
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
