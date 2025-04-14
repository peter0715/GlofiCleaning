// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#f0f0f0"
    }}>
      <h2>CleanPro</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/quote">Get a Quote</Link>
      </div>
    </nav>
  );
};

export default Navbar;
