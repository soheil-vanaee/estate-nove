import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StaticPage.css";

export default function Terms() {
  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="listing-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p>Last updated: January 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container static-content">
          <h2>Using Estate Nove</h2>
          <p>
            This is placeholder legal copy for the demo. Replace it with
            your actual terms before launching — cover account
            eligibility, acceptable use, and listing accuracy.
          </p>

          <h2>Accounts</h2>
          <p>
            Describe account creation requirements and each user's
            responsibility for keeping their credentials secure.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent through the{" "}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
