import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const PassregEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regEX.test(email) && PassregEX.test(password)) {
      setMessage("Email is Valid");
    } else {
      setMessage("Invalid");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePOnChange = (e) => {
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
          onChange={handleOnChange}
        />
        <button onClick={emailValidation}>Check</button>
        <p>{message}</p>
      </div>
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePOnChange}
      />
    </div>
  );
}

export default App;
