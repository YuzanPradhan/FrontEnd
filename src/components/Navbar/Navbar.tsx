// src/components/Navbar/Navbar.tsx
import React from "react";
import "./Navbar.css";
const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar-links">
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          Check-Ins
        </a>
        <a href="#" className="navbar-link">
          1-on-1s
        </a>
        <a href="#" className="navbar-link">
          High Fives
        </a>
        <a href="#" className="navbar-link">
          Career Hub
        </a>
        <a href="#" className="navbar-link">
          Feedback
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
