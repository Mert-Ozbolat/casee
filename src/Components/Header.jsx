import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/Header.css";
import logo from "../Assets/Images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between mt-2 container mx-auto">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-40 h-auto logo" />

      {/* Links */}
      <nav className="flex gap-5 links">
        <a href="#">Demos</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>

      <div className="flex gap-5 menuContainer">
        <button className="loginBtn">Login</button>
        <button className="signupBtn bg-[#5BC17F]">Sign up</button>
      </div>

      {/* Menu Icon For Mobile */}
      <IoMdMenu onClick={toggleMenu} className="menuIcon" />

      {isOpen && (
        <nav className={`toggleMenu ${isOpen ? "show" : ""}`}>
          <IoCloseOutline onClick={toggleMenu} className="toggleClose" />
          <ul>
            <li>
              <a href="#">Demos</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
