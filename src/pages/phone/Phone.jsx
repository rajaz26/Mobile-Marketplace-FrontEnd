import React from "react";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import GNavbar from "../../components/gnavbar/GNavbar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

import "./phone.css";
const Phone = () => {
  const navigate = useNavigate();
  const handleThumbnail = (index) => {
    var img1 = document.getElementById("img1").src;
    if (index == 2) {
      var img2 = document.getElementById("img2").src;
      document.getElementById("img1").src = img2;
      document.getElementById("img2").src = img1;
    }
    if (index == 3) {
      var img3 = document.getElementById("img3").src;
      document.getElementById("img1").src = img3;
      document.getElementById("img3").src = img1;
    }
    if (index == 4) {
      var img4 = document.getElementById("img4").src;
      document.getElementById("img1").src = img4;
      document.getElementById("img4").src = img1;
    }
  };
  return (
    <div>
      <GNavbar />
      <div className="phoneContainer">
        <div className="phoneWrapper">
          <div className="leftSide">
            <div className="mainImage">
              <img
                id="img1"
                src="./images/ad1.png"
                alt=""
                className="featuredPhoneImage"
              />
            </div>
            <div className="thumbnails">
              <img
                id="img2"
                src="./images/ad2.jfif"
                alt=""
                className="thumbnailPhoneImage"
                onClick={() => handleThumbnail(2)}
              />
              <img
                id="img3"
                src="./images/ad3.jfif"
                alt=""
                className="thumbnailPhoneImage"
                onClick={() => handleThumbnail(3)}
              />
              <img
                id="img4"
                src="./images/ad1.png"
                alt=""
                className="thumbnailPhoneImage"
                onClick={() => handleThumbnail(4)}
              />
            </div>
          </div>
          <div className="rightSide">
            <div className="descrp">
              <h2 className="headingPhone">Iphone 11 Pro Max</h2>
              <p className="descriptionHeading">Price</p>
              <p className="descriptionValue">PKR 100000</p>
              <p className="descriptionHeading">City</p>
              <p className="descriptionValue">Rawalpindi</p>
              <p className="descriptionHeading">Condition</p>
              <p className="descriptionValue">10</p>
              <p className="descriptionHeading">Color</p>
              <p className="descriptionValue">Black</p>
              <p className="descriptionHeading">Description</p>
              <p className="descriptionValue">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
              <button
                className="phoneButton"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Featured type="normal" />
      <Footer />
    </div>
  );
};

export default Phone;
