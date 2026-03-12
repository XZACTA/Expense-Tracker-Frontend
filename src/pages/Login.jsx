import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1 className="login-title">WELCOME BACK!</h1>
        <p className="login-subtitle">
          Welcome back! Please enter your details.
        </p>

        <img 
          src="/cat.png"
          alt="cat"
          className="login-cat"
        />

        <div className="login-group">
          <label>Email</label>
          <input
            className="login-input"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="login-group">
          <label>Password</label>
          <input
            className="login-input"
            type="password"
            placeholder="********"
          />
        </div>

        <div className="login-remember">
          <input type="checkbox"/>
          <span>Remember me</span>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Sign in
        </button>

        

      </div>

    </div>
  );
}

export default Login;
