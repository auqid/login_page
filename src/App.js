import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const initialValues = { email: "", password: "" };

  return (
    <div className="container">
      <form>
        <h1>Login Form</h1>
        <div className="ui_divider"></div>
        <div className="ui_form">
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="login_button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
