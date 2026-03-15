import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const goToRegister = () => {
    navigate("/register");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("form:", form);
    try {

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/home");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Login failed");
    }
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

        <form onSubmit={handleLogin}>

          <div className="login-group">
            <label>Email</label>
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="login-group">
            <label>Password</label>
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="login-remember">
            <input type="checkbox"/>
            <span>Remember me</span>
          </div>

          <button className="login-btn" type="submit">
            Sign in
          </button>

        </form>

        <p className="login-register">
          Don't have an account? 
          <span onClick={goToRegister}> Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;