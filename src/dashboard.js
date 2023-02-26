import React from "react";
import "./dashboard.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className="text">
          <p>DECENTRALIZED CLINICAL RESEARCH IS NOT ALIEN ANY MORE</p>
          <button id="btn">Learn More!</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
