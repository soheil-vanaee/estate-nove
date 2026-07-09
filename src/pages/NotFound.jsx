import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="page">
      <Navbar variant="solid" />
      <section className="not-found">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1>This page has moved out</h1>
          <p>
            The page you're looking for doesn't exist, or has been renamed.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
