import React from "react";
import "./footer.css";
import "@fontsource/league-spartan";
import "@fontsource/roboto";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="columns">
          <h3>Legal</h3>
          <p className="lists">
            First information
            <br />
            Data Protection
            <br />
            Legal Notice
            <br />
            Terms and Conditions
          </p>
        </div>
        <div className="columns">
          <h3>Company</h3>
          <p className="lists">
            About Us
            <br />
            Career
            <br />
            Blog
            <br />
            Glossary
          </p>
        </div>
        <div className="columns">
          <h3>Products</h3>
          <p className="lists">
            Overview
            <br />
            Claim support
            <br />
            Income Protection
            <br />
            Legal Protection
          </p>
        </div>
      </div>
      <hr className="line" />
      <div className="columns">
        <p className="lists">TechMart 2023</p>
      </div>
    </div>
  );
};

export default Footer;
