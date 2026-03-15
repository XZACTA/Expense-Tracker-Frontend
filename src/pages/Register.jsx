import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const goToLogin = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const signUp = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      alert("Register success");
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
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

        <form onSubmit={signUp}>

          <div className="register-group">
            <label>Name</label>
            <input 
              type="text"
              name="username"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="register-group">
            <label>Email address</label>
            <input 
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="register-group">
            <label>Password</label>
            <input 
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button className="register-btn" type="submit">
            Sign up
          </button>

        </form>

        <p className="register-login">
          Already have an account? 
          <span onClick={goToLogin}> Sign in</span>
        </p>

      </div>

    </div>
  );
}

export default Register;