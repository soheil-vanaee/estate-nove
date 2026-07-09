import { useState } from "react";
import "./SearchFilter.css";

const TABS = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "new-development", label: "New development" },
  { id: "commercial", label: "Commercial properties" },
];

const PRICE_RANGES = [
  { id: "any", label: "Any price", min: 0, max: Infinity },
  { id: "0-300000", label: "$0 - $300,000", min: 0, max: 300000 },
  { id: "300000-500000", label: "$300,000 - $500,000", min: 300000, max: 500000 },
  { id: "500000-1000000", label: "$500,000 - $1,000,000", min: 500000, max: 1000000 },
];

const SIZE_OPTIONS = ["All size", "Under 200m", "200m - 400m", "400m+"];
const COUNTRY_OPTIONS = ["All Country", "USA", "Canada", "United Kingdom"];

/**
 * A single interactive filter bar used on the Home page and on the
 * Buy / Rent / Sell listing pages. It calls `onSearch` with the current
 * filter state whenever the visitor presses "Show properties", and calls
 * `onTabChange` whenever the type tab changes (useful if a page wants to
 * keep its own tab, e.g. the dedicated /rent page).
 */
export default function SearchFilter({
  initialTab = "buy",
  lockTab = false,
  onSearch,
  onTabChange,
}) {
  const [tab, setTab] = useState(initialTab);
  const [country, setCountry] = useState(COUNTRY_OPTIONS[0]);
  const [status, setStatus] = useState("New property");
  const [priceRangeId, setPriceRangeId] = useState("any");
  const [size, setSize] = useState(SIZE_OPTIONS[0]);
  const [showMore, setShowMore] = useState(false);
  const [beds, setBeds] = useState("Any");
  const [baths, setBaths] = useState("Any");

  const handleTabClick = (id) => {
    if (lockTab) return;
    setTab(id);
    onTabChange?.(id);
  };

  const handleClear = () => {
    setCountry(COUNTRY_OPTIONS[0]);
    setStatus("New property");
    setPriceRangeId("any");
    setSize(SIZE_OPTIONS[0]);
    setBeds("Any");
    setBaths("Any");
  };

  const handleShow = () => {
    const range = PRICE_RANGES.find((r) => r.id === priceRangeId);
    onSearch?.({ tab, country, status, size, beds, baths, range });
  };

  return (
    <div className="search-filter">
      <div className="search-filter__tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`search-filter__tab ${tab === t.id ? "is-active" : ""}`}
            onClick={() => handleTabClick(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="search-filter__panel">
        <div className="search-filter__row">
          <label className="search-filter__field">
            <span>Country</span>
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className="search-filter__field">
            <span>Status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>New property</option>
              <option>Resale property</option>
              <option>Off-plan</option>
            </select>
          </label>

          <label className="search-filter__field">
            <span>Price range</span>
            <select
              value={priceRangeId}
              onChange={(e) => setPriceRangeId(e.target.value)}
            >
              {PRICE_RANGES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>

          <label className="search-filter__field">
            <span>Size</span>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {SIZE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        {showMore && (
          <div className="search-filter__row search-filter__row--more">
            <label className="search-filter__field">
              <span>Bedrooms</span>
              <select value={beds} onChange={(e) => setBeds(e.target.value)}>
                {["Any", "1+", "2+", "3+", "4+"].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
            <label className="search-filter__field">
              <span>Bathrooms</span>
              <select value={baths} onChange={(e) => setBaths(e.target.value)}>
                {["Any", "1+", "2+", "3+"].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        <div className="search-filter__actions">
          <button
            type="button"
            className="search-filter__more"
            onClick={() => setShowMore((v) => !v)}
          >
            {showMore ? "− less option" : "+ more option"}
          </button>

          <div className="search-filter__actions-right">
            <button
              type="button"
              className="search-filter__clear"
              onClick={handleClear}
            >
              ⟲ clear filters
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleShow}
            >
              Show properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PRICE_RANGES };
