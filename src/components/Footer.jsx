import { Link } from "react-router-dom";
import "./Footer.css";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Buy", to: "/buy" },
      { label: "Rent", to: "/rent" },
      { label: "Sell", to: "/sell" },
      { label: "Home Loans", to: "/home-loans" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Sign In", to: "/signin" },
      { label: "Create Account", to: "/signup" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Estate Nove
            </Link>
            <p>
              Curated properties, expert guidance and a transparent process —
              everything you need to buy, rent or sell with confidence.
            </p>
          </div>

          <div className="footer__columns">
            {COLUMNS.map((col) => (
              <div className="footer__column" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Estate Nove. All rights reserved.</p>
          <div className="footer__social">
            <a href="#top" aria-label="Back to top">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
