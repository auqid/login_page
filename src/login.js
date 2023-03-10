import React, { useState } from "react";
import "./Login.css";
import cat from "./cat.png";
import { useNavigate, Link } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Login() {
  const navigate = useNavigate();
  const navToPage = () => {
    if (isLoading === false) {
      navigate("dashboard");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const inputValidation = function () {
    let emailValidation = emailRegex.test(email);
    let passwordValidation = passRegex.test(password);

    if (emailValidation && passwordValidation) {
      setIsLoading(false);
      setMessage("Valid");
    } else {
      setIsLoading(true);
      setMessage("");
    }
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
    inputValidation();
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    inputValidation();
  };

  return (
    <div className="app">
      <div className="card">
        <img src={cat} alt="cat" id="cat" />
        <label className="label">Email</label>
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={handleEmailOnChange}
          className="input"
        />

        <label className="label">Password</label>
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={handlePasswordOnChange}
          className="input"
        />
        <p className="message">{message}</p>
        <a href="https://google.com" id="a1">
          Forgot Password?
        </a>

        <button disabled={isLoading} onClick={() => navToPage()}>
          Login
        </button>
        <a href="https://google.com" id="a2">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Login;
