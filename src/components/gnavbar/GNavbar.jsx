import React from "react";
import "./gnavbar.css";
import { useNavigate } from "react-router-dom";
const GNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="gnav">
      <div className="navbarContainer">
        <div>
          <img
            className="logo"
            src="./images/whitelogo.png"
            style={{ objectFit: "contain" }}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="gnavItems">
          <div className="gnavItem">
            Products
            <img
              className="warrow"
              src="./images/whitearrow.png"
              alt="React Image"
            />
            <ul className="gdropdown">
              <li className="gdropdownItem">Iphone</li>
              <li className="gdropdownItem">A Series</li>
              <li className="gdropdownItem">F Series</li>
              <li className="gdropdownItem">See more</li>
            </ul>
          </div>
          <div className="gnavItem">
            Brands
            <img
              className="warrow"
              src="./images/whitearrow.png"
              alt="React Image"
            />
            <ul className="gdropdown">
              <li className="gdropdownItem">Apple</li>
              <li className="gdropdownItem">Nokia</li>
              <li className="gdropdownItem">Samsung</li>
              <li className="gdropdownItem">Huawei</li>
              <li className="gdropdownItem">Oppo</li>
            </ul>
          </div>
          <div className="gnavItem">
            About
            <img
              className="warrow"
              src="./images/whitearrow.png"
              alt="React Image"
            />
            <ul className="gdropdown">
              <li className="gdropdownItem">Contact Us</li>
              <li className="gdropdownItem">Location</li>
              <li className="gdropdownItem">About Us</li>
            </ul>
          </div>
          <div className="gnavItem">
            <div
              onClick={() => {
                navigate("/cart");
              }}
              className="gnavButton"
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

export default GNavbar;
