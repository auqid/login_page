import React from "react";
import "./dashboard.css";
import logo from "./image.png";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="list">
            <img src={logo} alt="logo" className="logo" />
            <li className="items">Solutions</li>
            <li className="items">Resources</li>
            <li className="items">About Us</li>
            <li className="items">Contact</li>
          </div>
        </nav>
        <div className="text">
          <p>DECENTRALIZED CLINICAL RESEARCH IS NOT ALIEN ANY MORE</p>
          <button id="btn">Learn More!</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
