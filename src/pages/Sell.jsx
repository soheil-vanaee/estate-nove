import { useState } from "react";
import ListingPage from "./ListingPage";
import "./Sell.css";

export default function Sell() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ address: "", price: "", name: "", email: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to your backend / CRM.
    setSubmitted(true);
  };

  return (
    <ListingPage
      type="sell"
      eyebrow="Sell a home"
      title="List your property with Estate Nove"
      description="See comparable listings below, then tell us about your property to get a free valuation from our team."
    >
      <section className="section sell-form-section">
        <div className="container sell-form">
          <div className="sell-form__intro">
            <h2>Get a free valuation</h2>
            <p>
              Share a few details and one of our agents will follow up
              within one business day with a market estimate.
            </p>
          </div>

          {submitted ? (
            <div className="sell-form__success">
              <h3>Thanks, {form.name || "there"}!</h3>
              <p>
                Your request has been received. We'll email you at{" "}
                {form.email || "the address you provided"} with next steps.
              </p>
            </div>
          ) : (
            <form className="sell-form__fields" onSubmit={handleSubmit}>
              <label>
                <span>Property address</span>
                <input
                  required
                  value={form.address}
                  onChange={update("address")}
                  placeholder="123 Main Street, Los Angeles"
                />
              </label>
              <label>
                <span>Expected price (optional)</span>
                <input
                  value={form.price}
                  onChange={update("price")}
                  placeholder="$450,000"
                />
              </label>
              <label>
                <span>Your name</span>
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
              <button type="submit" className="btn btn-primary">
                Request valuation
              </button>
            </form>
          )}
        </div>
      </section>
    </ListingPage>
  );
}
