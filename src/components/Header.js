import React from "react";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <img src={require("../images/logo.png")} alt="logo" width="100px" />
      <div className="HeaderLinks">
        <a href="/">
          About Us
          <img src={require("../images/dropdown.png")} alt="dd" width="12px" />
        </a>
        <a href="/">
          Our Brands
          <img src={require("../images/dropdown.png")} alt="dd" width="12px" />
        </a>
        <a href="/">
          News Centers
          <img src={require("../images/dropdown.png")} alt="dd" width="12px" />
        </a>
        <a href="/">
          Careers
          <img src={require("../images/dropdown.png")} alt="dd" width="12px" />
        </a>
        <a href="/">
          Investor Relations
          <img src={require("../images/dropdown.png")} alt="dd" width="12px" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;
