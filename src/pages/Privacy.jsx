import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StaticPage.css";

export default function Privacy() {
  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="listing-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container static-content">
          <h2>Information we collect</h2>
          <p>
            This is placeholder legal copy for the demo. Replace it with
            your actual privacy policy before launching — describe what
            data you collect (account details, browsing activity, contact
            form submissions) and why.
          </p>

          <h2>How we use your information</h2>
          <p>
            Explain how account, listing and contact data is used: to
            operate the service, respond to enquiries, and improve search
            results.
          </p>

          <h2>Your choices</h2>
          <p>
            Describe how users can access, correct or delete their data,
            and how to contact you with privacy questions via the{" "}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
