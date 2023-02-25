import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import cat from "./cat.png";
import Dashbord from "./dashbord";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const passRegex =
  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (isLoading === false) {
      navigate("/dashboard");
    }
  };

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
          placeholder="Type your Email"
          value={email}
          onChange={handleEmailOnChange}
          className="input"
        />

        <label className="label">Password</label>
        <input
          type="password"
          placeholder="Type your Password"
          value={password}
          onChange={handlePasswordOnChange}
          className="input"
        />
        <h5>Forgot Password?</h5>

        <button disabled={isLoading} onClick={() => navigate("dashbord")}>
          Login
        </button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default Login;
