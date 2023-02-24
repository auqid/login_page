import React, { useState } from "react";
import "./App.css";
import cat from "./cat.png";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    if (emailRegex.test(email) && passRegex.test(password)) {
      setMessage("valid");
    } else {
      setMessage("Invalid");
    }
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
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

        <button onClick={emailValidation} id="button">
          Login
        </button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
