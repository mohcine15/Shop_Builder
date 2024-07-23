import React, { useState } from "react";

import "../Navbar/navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
  const [active, setActive] = useState("navBar");

  // Function to toggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to remove navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarsection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>ShopBuilder</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Nos avantages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#footer" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Creer votre site</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
