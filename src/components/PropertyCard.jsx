import { Link } from "react-router-dom";
import { formatPrice } from "../data/properties";
import "./PropertyCard.css";

export default function PropertyCard({ property }) {
  const { id, title, location, price, size, floors, beds, baths, image } =
    property;

  return (
    <Link to={`/property/${id}`} className="property-card">
      <div className="property-card__image">
        <img src={image} alt={`${title} in ${location}`} loading="lazy" />
      </div>
      <div className="property-card__body">
        <div className="property-card__row">
          <h3>{title}</h3>
          <span className="property-card__price">{formatPrice(price)}</span>
        </div>
        <p className="property-card__location">{location}</p>
        <ul className="property-card__meta">
          <li>⟐ {size}</li>
          <li>⌁ {floors} floor</li>
          <li>▤ {beds} beds</li>
          <li>▥ {baths} baths</li>
        </ul>
      </div>
    </Link>
  );
}
