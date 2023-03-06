import React from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="navbarContainer">
        <div>
          <img
            className="logo"
            src="./images/logo.png"
            style={{ objectFit: "contain" }}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="navItems">
          <div className="navItem">
            Products
            <img className="arrow" src="./images/arrow.png" alt="React Image" />
            <ul className="dropdown">
              <li className="dropdownItem">Iphone</li>
              <li className="dropdownItem">A Series</li>
              <li className="dropdownItem">F Series</li>
              <li className="dropdownItem">See more</li>
            </ul>
          </div>
          <div className="navItem">
            Brands
            <img className="arrow" src="./images/arrow.png" alt="React Image" />
            <ul className="dropdown">
              <li className="dropdownItem">Apple</li>
              <li className="dropdownItem">Nokia</li>
              <li className="dropdownItem">Samsung</li>
              <li className="dropdownItem">Huawei</li>
              <li className="dropdownItem">Oppo</li>
            </ul>
          </div>
          <div className="navItem">
            About
            <img className="arrow" src="./images/arrow.png" alt="React Image" />
            <ul className="dropdown">
              <li className="dropdownItem">Contact Us</li>
              <li className="dropdownItem">Location</li>
              <li className="dropdownItem">About Us</li>
            </ul>
          </div>
          <div className="navItem">
            <div
              onClick={() => {
                navigate("/cart");
              }}
              className="navItem"
            >
              Cart
            </div>
            {/* <img
              className="cart"
              src="./images/cart.png"
              style={{ objectFit: "contain" }}
  />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
