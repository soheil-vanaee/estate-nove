import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Buy", to: "/buy" },
  { label: "Rent", to: "/rent" },
  { label: "Sell", to: "/sell" },
  { label: "Home Loans", to: "/home-loans" },
];

export default function Navbar({ variant = "transparent" }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu automatically whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar navbar--${variant}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          Estate Nove
        </Link>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " is-active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/signin" className="navbar__signin navbar__signin--mobile">
            Sign In
          </Link>
        </nav>

        <div className="navbar__actions">
          <Link to="/signin" className="navbar__signin">
            Sign In
          </Link>
          <button
            className={`navbar__toggle ${open ? "is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
