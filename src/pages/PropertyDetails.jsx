import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import { properties, formatPrice } from "../data/properties";
import "./PropertyDetails.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="page">
        <Navbar variant="solid" />
        <section className="section" style={{ paddingTop: 160 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h1>Property not found</h1>
            <p style={{ marginTop: 12, color: "var(--text-secondary)" }}>
              This listing may have been sold or removed.
            </p>
            <Link to="/buy" className="btn btn-primary" style={{ marginTop: 24 }}>
              Browse properties
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const related = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="property-detail">
        <div className="property-detail__image">
          <img src={property.image} alt={`${property.title} in ${property.location}`} />
        </div>

        <div className="container property-detail__content">
          <div className="property-detail__main">
            <span className="eyebrow">
              For {property.type === "buy" ? "sale" : property.type}
            </span>
            <div className="property-detail__title-row">
              <h1>{property.title}</h1>
              <span>{formatPrice(property.price)}</span>
            </div>
            <p className="property-detail__location">{property.location}</p>

            <ul className="property-detail__meta">
              <li>
                <strong>{property.size}</strong>
                <span>Size</span>
              </li>
              <li>
                <strong>{property.floors}</strong>
                <span>Floors</span>
              </li>
              <li>
                <strong>{property.beds}</strong>
                <span>Beds</span>
              </li>
              <li>
                <strong>{property.baths}</strong>
                <span>Baths</span>
              </li>
            </ul>

            <h2>About this home</h2>
            <p className="property-detail__description">{property.description}</p>
          </div>

          <aside className="property-detail__sidebar">
            <h3>Interested in this property?</h3>
            <p>
              Reach out and one of our agents will get back to you within
              one business day.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact an agent
            </Link>
            <Link to="/home-loans" className="btn btn-outline btn-outline--dark">
              Estimate financing
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Similar properties</h2>
            </div>
            <div className="property-grid">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
