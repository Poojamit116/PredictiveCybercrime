import { ShieldCheck, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="government">
          <ShieldCheck size={38} />
          <div>
            <h3>Government of India</h3>
            <p>Ministry of Home Affairs</p>
          </div>
        </div>

        <div className="platform-info">
          <div className="platform-icon">
            <ShieldCheck size={55} />
          </div>

          <h1>Predictive Cybercrime<br />Intelligence Platform</h1>

          <p className="tagline">
            From Complaints to Actionable Intelligence
          </p>

          <div className="divider"></div>

          <p className="bottom-text">
            Safer Citizens <span>•</span> Safer India
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="card-icon">
            <LockKeyhole size={25} />
          </div>

          <h2>Sign in</h2>

          <p className="description">
            Access for authorized government and law enforcement personnel only.
          </p>

          <form onSubmit={handleLogin}>
            <label>User ID / Official Email</label>
            <input
              type="text"
              placeholder="Enter your user ID or email"
              required
            />

            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>

          <button className="forgot-password">
            Forgot password?
          </button>

          <div className="security-note">
            <LockKeyhole size={16} />
            <p>
              Unauthorized access is prohibited and may be subject to
              legal action.
            </p>
          </div>
        </div>

        <p className="copyright">
          © 2026 Government of India • Indian Cybercrime Coordination Centre
        </p>
      </div>
    </div>
  );
}

export default Login;