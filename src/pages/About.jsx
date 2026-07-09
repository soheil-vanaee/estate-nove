import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StaticPage.css";

const VALUES = [
  {
    title: "Transparency first",
    body: "Every listing shows real pricing and fees up front — no surprises at closing.",
  },
  {
    title: "Local expertise",
    body: "Our agents work the neighbourhoods they list, so you get advice grounded in the market.",
  },
  {
    title: "Human support",
    body: "A dedicated agent guides you from first tour to keys in hand, not just a search algorithm.",
  },
];

export default function About() {
  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="listing-hero">
        <div className="container">
          <span className="eyebrow">About Estate Nove</span>
          <h1>Real estate, made human again</h1>
          <p>
            We started Estate Nove because finding a home shouldn't feel
            transactional. Every listing is reviewed by our team before it
            goes live, and every buyer gets a dedicated agent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container static-content">
          <h2>Our story</h2>
          <p>
            Estate Nove was founded by a small group of agents and
            engineers who were frustrated with how impersonal online real
            estate had become. We built a platform that combines curated,
            verified listings with the kind of hands-on guidance you'd get
            from a trusted local agent.
          </p>

          <h2 id="careers">Careers</h2>
          <p>
            We're a small, distributed team hiring across engineering,
            design and real estate operations. Reach out through the{" "}
            <a href="/contact">contact page</a> if you'd like to introduce
            yourself.
          </p>

          <h2>What we value</h2>
          <div className="static-cards">
            {VALUES.map((v) => (
              <div className="static-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
