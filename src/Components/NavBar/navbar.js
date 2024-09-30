import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h2>Foodgram</h2>
          </div>
          <ul className={isOpen ? "nav-link nav-link-active" : "nav-link"}>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Wishlist">Wishlist</a>
            </li>
            <li>
              <a href="/Categories">Categories</a>
            </li>
            <li>
              <a href="/Profile">Profile</a>
            </li>
          </ul>
          <div className="icon" onClick={toggleMenu}>
            {/* <FaBars /> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;