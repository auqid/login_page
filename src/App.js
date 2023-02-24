import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (emailRegex.test(email) && passRegex.test(password)) {
      setMessage("Email and password is Valid");
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
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailOnChange}
        />
        <button onClick={emailValidation}>Check</button>
      </div>
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordOnChange}
      />
      <p>{message}</p>
    </div>
  );
}

export default App;
