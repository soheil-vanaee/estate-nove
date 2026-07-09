import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchFilter from "../components/SearchFilter";
import PropertyCard from "../components/PropertyCard";
import StatCard from "../components/StatCard";
import { properties } from "../data/properties";
import heroImage from "../assets/images/heroimage.jpg";
import howItWorksImage from "../assets/images/howitworks.jpg";
import "./Home.css";

const PARTNER_LOGOS = [];

const STEPS = [
  {
    id: "request",
    title: "Request requirement",
    body: "Tell us your budget, location and must-haves. We shortlist matching properties within 48 hours.",
  },
  {
    id: "selection",
    title: "Property selection",
    body: "Virtual tours, curated listings, and expert guidance — everything you need to explore and buy with confidence.",
  },
  {
    id: "legal",
    title: "Legal support",
    body: "Our in-house legal team reviews contracts and handles due diligence so nothing catches you off guard.",
  },
  {
    id: "keys",
    title: "Key transfer",
    body: "Once everything is signed, we coordinate the handover and make sure you get your keys on moving day.",
  },
];

const STATS = [
  { label: "total return", value: "19 %", bars: [40, 55, 35, 70, 50, 65, 45, 80] },
  { label: "Cumulative net cashflow", value: "$820,000", bars: [30, 60, 40, 75, 55, 45, 65, 85] },
  { label: "Average IRR", value: "14 %", bars: [50, 35, 60, 45, 70, 55, 40, 75] },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState("selection");
  const [filtered, setFiltered] = useState(null);

  const handleSearch = ({ tab, range }) => {
    const results = properties.filter((p) => {
      const matchesType =
        tab === "new-development" || tab === "commercial" ? true : p.type === tab;
      const matchesPrice = p.price >= range.min && p.price <= range.max;
      return matchesType && matchesPrice;
    });
    setFiltered(results);
    document
      .getElementById("new-properties")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const visibleProperties = useMemo(
    () => (filtered ? filtered : properties),
    [filtered]
  );

  const currentStep = STEPS.find((s) => s.id === activeStep) ?? STEPS[1];

  return (
    <div className="page">
      <section className="hero" id="top">
        <Navbar variant="transparent" />
        <img src={heroImage} alt="Modern residence at golden hour" className="hero__image" />
        <div className="hero__overlay" />

        <div className="container hero__content">
          <h1>
            Find More Than a
            <br />
            House. Find Home.
          </h1>
          <p>
            Discover carefully selected properties designed for every
            lifestyle. Buy, sell, or invest with confidence.
          </p>
          <div className="hero__actions">
            <Link to="/buy" className="btn btn-primary">
              Explore Properties
            </Link>
            <Link to="/rent" className="btn btn-outline">
              Explore Properties
            </Link>
          </div>
        </div>

      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>We help you find the home that will be yours</h2>
            <p>
              Virtual tours, curated listings, and expert guidance —
              everything you need to explore and buy with confidence.
            </p>
          </div>

          <SearchFilter onSearch={handleSearch} />
        </div>
      </section>

      <section className="section section--tight" id="new-properties">
        <div className="container">
          <div className="section-heading">
            <h2>{filtered ? "Search results" : "New properties"}</h2>
            {filtered && (
              <button className="link-reset" onClick={() => setFiltered(null)}>
                ⟲ show all properties
              </button>
            )}
          </div>

          {visibleProperties.length === 0 ? (
            <p className="empty-state">
              No properties match those filters yet. Try widening your price
              range or choosing a different type.
            </p>
          ) : (
            <div className="property-grid">
              {visibleProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section how-it-works">
        <div className="container">
          <div className="section-heading">
            <h2>See what we offer and how it works</h2>
            <p>
              Virtual tours, curated listings, and expert guidance —
              everything you need to explore and buy with confidence.
            </p>
          </div>

          <div className="how-it-works__grid">
            <div className="how-it-works__card">
              <div>
                <h3>{currentStep.title}</h3>
                <p>{currentStep.body}</p>
                <Link to="/contact" className="btn btn-dark">
                  Get consultation
                </Link>
              </div>

              <ul className="how-it-works__steps">
                {STEPS.map((step) => (
                  <li key={step.id}>
                    <button
                      className={activeStep === step.id ? "is-active" : ""}
                      onClick={() => setActiveStep(step.id)}
                    >
                      {step.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="how-it-works__image">
              <img src={howItWorksImage} alt="Illuminated modern home in the evening" />
            </div>
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container">
          <div className="section-heading">
            <h2>Reliable facilities for stable investments</h2>
            <p>
              Virtual tours, curated listings, and expert guidance —
              everything you need to explore and buy with confidence.
            </p>
          </div>

          <div className="stats__grid">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
