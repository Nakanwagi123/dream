import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const onclosemobile = () => setClick(false);

  const scrollfunc = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navcontainer").className = "navcontainer scroll";
    } else {
      document.querySelector(".navcontainer").className = "navcontainer";
    }
  };
  window.addEventListener("scroll", scrollfunc);
  return (
    <>
      <div class="navcontainer">
        <div class="navbar">
          <Link to="/" className="pic"></Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navlist active" : "navlist"}>
            <li class="list">
              <Link to="/" class="link" onClick={onclosemobile}>
                Home
              </Link>
            </li>
            <li class="list">
              <Link to="/programs" class="link" onClick={onclosemobile}>
                Programs
              </Link>
            </li>
            <li class="list">
              <Link to="/aboutus" class="link" onClick={onclosemobile}>
                About Us
              </Link>
            </li>
            <li class="list">
              <Link to="/news" class="link" onClick={onclosemobile}>
                News
              </Link>
            </li>
            <li class="list">
              <Link to="/collaborate" class="link" onClick={onclosemobile}>
                Collaborate
              </Link>
            </li>
            <li class="list">
              <Link class="link" onClick={onclosemobile}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
