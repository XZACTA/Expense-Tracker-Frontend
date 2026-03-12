import "../styles/register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1 className="register-title">GET STARTED NOW</h1>
        <p className="register-subtitle">
          Create your account to start managing money.
        </p>

        <img 
          src="/cat.png" 
          alt="cat"
          className="register-cat"
        />

        <div className="register-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name"/>
        </div>

        <div className="register-group">
          <label>Email address</label>
          <input type="email" placeholder="Enter your email"/>
        </div>

        <div className="register-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password"/>
        </div>

        <div className="register-remember">
          <input type="checkbox"/>
          <span>Remember me</span>
        </div>

        <button className="register-btn">
          Sign up
        </button>

        <p className="register-login">
          Already have an account? 
          <span onClick={goToLogin}> Sign in</span>
        </p>

      </div>

    </div>
  );
}

export default Register;
