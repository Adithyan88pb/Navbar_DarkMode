import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import seacrh_iocn from "../../assets/search-w.png";
import seacrh_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/day.png";
const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme == "light" ? seacrh_iocn : seacrh_dark} alt="" />
      </div>
      <img
        src={theme == "light" ? toogle_light : toogle_dark}
        onClick={() => {
          toggle_mode();
        }}
        className="toggle-icon"
        alt=""
      />
    </div>
  );
};

export default Navbar;
