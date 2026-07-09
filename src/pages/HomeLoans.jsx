import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HomeLoans.css";

const LOAN_TYPES = [
  {
    name: "Fixed-rate mortgage",
    rate: "6.4%",
    body: "Your interest rate stays the same for the life of the loan, so payments never change.",
  },
  {
    name: "Adjustable-rate mortgage",
    rate: "5.6% intro",
    body: "A lower introductory rate that adjusts periodically based on the market after a fixed period.",
  },
  {
    name: "Interest-only loan",
    rate: "6.1%",
    body: "Pay only interest for an initial term, useful for investors planning to refinance or resell.",
  },
];

export default function HomeLoans() {
  const [price, setPrice] = useState(450000);
  const [down, setDown] = useState(90000);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(6.4);

  const { monthlyPayment, totalPaid, totalInterest } = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    const payment =
      monthlyRate === 0
        ? principal / numPayments
        : (principal * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -numPayments));
    const total = payment * numPayments;
    return {
      monthlyPayment: payment || 0,
      totalPaid: total || 0,
      totalInterest: (total || 0) - principal,
    };
  }, [price, down, years, rate]);

  const fmt = (n) =>
    Number.isFinite(n)
      ? n.toLocaleString("en-US", { maximumFractionDigits: 0 })
      : "0";

  return (
    <div className="page">
      <Navbar variant="solid" />

      <section className="listing-hero">
        <div className="container">
          <span className="eyebrow">Home Loans</span>
          <h1>Financing built around your plans</h1>
          <p>
            Compare loan types and estimate your monthly payment before you
            talk to a lender.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Loan options</h2>
            <p>
              Rates shown are illustrative starting points — your actual
              rate depends on credit, term and down payment.
            </p>
          </div>

          <div className="loan-types">
            {LOAN_TYPES.map((loan) => (
              <div className="loan-card" key={loan.name}>
                <span className="loan-card__rate">{loan.rate}</span>
                <h3>{loan.name}</h3>
                <p>{loan.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section calculator-section">
        <div className="container">
          <div className="section-heading">
            <h2>Mortgage calculator</h2>
            <p>Adjust the numbers to see an estimated monthly payment.</p>
          </div>

          <div className="calculator">
            <div className="calculator__inputs">
              <label>
                <div className="calculator__label-row">
                  <span>Home price</span>
                  <strong>${fmt(price)}</strong>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </label>

              <label>
                <div className="calculator__label-row">
                  <span>Down payment</span>
                  <strong>${fmt(down)}</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max={price}
                  step="5000"
                  value={down}
                  onChange={(e) => setDown(Number(e.target.value))}
                />
              </label>

              <label>
                <div className="calculator__label-row">
                  <span>Loan term</span>
                  <strong>{years} years</strong>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="5"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </label>

              <label>
                <div className="calculator__label-row">
                  <span>Interest rate</span>
                  <strong>{rate.toFixed(1)}%</strong>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </label>
            </div>

            <div className="calculator__result">
              <span>Estimated monthly payment</span>
              <strong>${fmt(monthlyPayment)}</strong>
              <div className="calculator__breakdown">
                <div>
                  <span>Total paid</span>
                  <strong>${fmt(totalPaid)}</strong>
                </div>
                <div>
                  <span>Total interest</span>
                  <strong>${fmt(totalInterest)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
