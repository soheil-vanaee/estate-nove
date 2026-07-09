import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchFilter from "../components/SearchFilter";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";
import "./ListingPage.css";

/**
 * Generic listing page shell shared by /buy, /rent and /sell.
 * `type` matches the `type` field on each property in src/data/properties.js
 */
export default function ListingPage({ type, eyebrow, title, description, children }) {
  const [range, setRange] = useState(null);

  const baseList = useMemo(
    () => properties.filter((p) => p.type === type),
    [type]
  );

  const list = useMemo(() => {
    if (!range) return baseList;
    return baseList.filter((p) => p.price >= range.min && p.price <= range.max);
  }, [baseList, range]);

  const handleSearch = (filters) => {
    setRange(filters.range);
  };

  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="listing-hero">
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SearchFilter initialTab={type} lockTab onSearch={handleSearch} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-heading">
            <h2>
              {list.length} {list.length === 1 ? "property" : "properties"}{" "}
              available
            </h2>
          </div>

          {list.length === 0 ? (
            <p className="empty-state">
              No properties match that price range right now. Try clearing
              your filters.
            </p>
          ) : (
            <div className="property-grid">
              {list.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {children}

      <Footer />
    </div>
  );
}
