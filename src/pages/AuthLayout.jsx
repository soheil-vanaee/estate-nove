import { Link } from "react-router-dom";
import authImage from "../assets/images/authimage.jpg";
import "./AuthLayout.css";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth">
      <div className="auth__panel">
        <Link to="/" className="auth__logo">
          Estate Nove
        </Link>

        <div className="auth__form-wrap">
          <h1>{title}</h1>
          <p className="auth__subtitle">{subtitle}</p>
          {children}
          <div className="auth__footer">{footer}</div>
        </div>
      </div>

      <div className="auth__image">
        <img src={authImage} alt="Modern home exterior at dusk" />
        <div className="auth__image-overlay">
          <p>
            "Estate Nove made buying our first home feel simple — from the
            first tour to the final signature."
          </p>
          <span>— A happy homeowner</span>
        </div>
      </div>
    </div>
  );
}
