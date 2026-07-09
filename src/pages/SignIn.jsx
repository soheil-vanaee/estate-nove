import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./AuthForm.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    // This is a front-end demo: wire this up to your real auth API
    // (e.g. POST /api/auth/login) and store the returned session/token.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 700);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to save properties, track applications and message agents."
      footer={
        <>
          Don't have an account? <Link to="/signup">Create one</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="auth-form__error">{error}</div>}

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
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </label>

        <div className="auth-form__row">
          <label className="auth-form__checkbox">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <Link to="/signin">Forgot password?</Link>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <div className="auth-divider">or continue with</div>
      <div className="auth-social">
        <button type="button">Continue with Google</button>
        <button type="button">Continue with Apple</button>
      </div>
    </AuthLayout>
  );
}
