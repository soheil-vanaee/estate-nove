import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./AuthForm.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in every field.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreed) {
      setError("Please accept the Terms of Service to continue.");
      return;
    }

    // This is a front-end demo: wire this up to your real auth API
    // (e.g. POST /api/auth/signup) and store the returned session/token.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/signin");
    }, 700);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join Estate Nove to save listings, get price alerts and talk to agents directly."
      footer={
        <>
          Already have an account? <Link to="/signin">Sign in</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="auth-form__error">{error}</div>}

        <label>
          <span>Full name</span>
          <input
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </label>

        <label>
          <span>Email address</span>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            value={form.password}
            onChange={update("password")}
            placeholder="At least 8 characters"
            autoComplete="new-password"
          />
        </label>

        <label>
          <span>Confirm password</span>
          <input
            type="password"
            value={form.confirm}
            onChange={update("confirm")}
            placeholder="Re-enter password"
            autoComplete="new-password"
          />
        </label>

        <label className="auth-form__checkbox">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree to the <Link to="/terms">Terms</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>
        </label>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Creating account…" : "Create Account"}
        </button>
      </form>
    </AuthLayout>
  );
}
