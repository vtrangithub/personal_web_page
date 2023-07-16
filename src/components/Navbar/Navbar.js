import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> My Projects </Link>
        <Link to="/experience"> Education & Work Experience</Link>
        <Link to="/resume">My Resume</Link>
        <Link to="/mycryptopage">My Crypto Page</Link>
        <Link to="/mytodolist">My To Do Page</Link>
        <Link to="/passwordvalidation">Password Validation</Link>
        <Link to="/emojigenerator">Emoji Generator</Link>
      </div>
    </div>
  );
}

export default Navbar;

// ----------------------------------------------------------------------------------------
