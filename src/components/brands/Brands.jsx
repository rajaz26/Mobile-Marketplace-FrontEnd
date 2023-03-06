import React from "react";
import "./brands.css";
import "@fontsource/league-spartan";
import "@fontsource/roboto";
const Brands = () => {
  return (
    <div className="containerBrands">
      <div>
        <h1 className="heading">Brands</h1>
      </div>
      <div className="wrapper">
        <div className="brand">
          <img className="brandImageApple" src="./images/apple.png" />
          <h4 className="numberPhones">200 Phones</h4>
        </div>
        <div className="brand">
          <img
            className="brandImage"
            src="./images/oppo.png"
            style={{ objectFit: "contain" }}
          />

          <h4 className="numberPhones">200 Phones</h4>
        </div>
        <div className="brand">
          <img
            className="brandImage"
            src="./images/samsung.png"
            style={{ objectFit: "contain" }}
          />
          <div className="description">
            <h4 className="numberPhones">200 Phones</h4>
          </div>
        </div>
        <div className="brand">
          <img
            className="brandImageApple"
            src="./images/huawei.png"
            style={{ objectFit: "cover" }}
          />

          <h4 className="numberPhones">200 Phones</h4>
        </div>
        <div className="brand">
          <img
            className="brandImage"
            src="./images/nokia.png"
            style={{ objectFit: "contain" }}
          />

          <h4 className="numberPhones">200 Phones</h4>
        </div>
        <div className="brand">
          <img
            className="brandImage"
            src="./images/vivo.png"
            style={{ objectFit: "contain" }}
          />

          <h4 className="numberPhones">200 Phones</h4>
        </div>
      </div>
    </div>
  );
};

export default Brands;
