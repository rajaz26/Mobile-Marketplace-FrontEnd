import React, { useState } from "react";
import "./slider.css";
const Slider = () => {
  const images = [
    "./images/img3.png",
    "./images/img2.png",
    "./images/img1.png",
  ];
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    console.log(index);
    if (direction === "l") {
      if (index === 0) {
        setIndex(2);
      } else {
        setIndex(index - 1);
      }
    }
    if (direction === "r") {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  return (
    <div className="slider">
      <div>
        <img
          className="arrows"
          src="./images/arrowr.png"
          onClick={() => handleArrow("r")}
          style={{ right: 0 }}
        />
      </div>
      <div
        className="images"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, i) => (
          <img className="sliderImage" src={image} key={i} />
        ))}
      </div>
      <div>
        <img
          className="arrows"
          src="./images/arrowl.png"
          style={{ left: 0 }}
          onClick={() => handleArrow("l")}
        />
      </div>
    </div>
  );
};

export default Slider;
