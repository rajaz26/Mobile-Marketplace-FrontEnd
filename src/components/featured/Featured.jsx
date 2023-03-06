import React from "react";
import Search from "../search/Search";
import "./featured.css";
const Featured = ({ type }) => {
  const handleDot = (direction) => {
    const ads = document.querySelector(".ads2");
    if (direction == "r") {
      ads.style.cssText +=
        "transition: all 1.5s ease-in-out;transform:translateX(-45vw);";
    }
    if (direction == "l") {
      ads.style.cssText -=
        "transition: all 1.5s ease-in-out;transform:translateX(+45vw);";
    }
  };

  return (
    <div>
      <div className="containerFeatured">
        <div className={type === "normal" ? "headerNone" : "header"}>
          <h1 className="heading">Search</h1>
          <Search />
        </div>

        <div className="addWrapper">
          <div>
            <h3 className="headingFeatured">Featured Ads</h3>
          </div>
          <div className="ads">
            <div className="add">
              <img className="addImage" src="./images/ad1.png" />
              <div className="description">
                <h4 className="addHeading">Iphone 6</h4>
                <p className="desc">
                  PKR 30000
                  <br />
                  Rawalpindi
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad2.jfif" />
              <div className="description">
                <h4 className="addHeading">Oppo Reno 7</h4>
                <p className="desc">
                  PKR 20000
                  <br />
                  Karachi
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad3.jfif" />
              <div className="description">
                <h4 className="addHeading">Reno 6</h4>
                <p className="desc">
                  PKR 30000
                  <br />
                  Lahore
                </p>
              </div>
              <a href=":id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad4.jfif" />
              <div className="description">
                <h4 className="addHeading">Iphone 13 Pro Max</h4>
                <p className="desc">
                  PKR 90000
                  <br />
                  Islamabad
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="addWrapper2">
          <div>
            <h3 className="headingFeatured">Latest Ads</h3>
          </div>
          <div className="ads2">
            <div className="add">
              <img className="addImage" src="./images/ad1.png" />
              <div className="description">
                <h4 className="addHeading">Iphone 6</h4>
                <p className="desc">
                  PKR 30000
                  <br />
                  Rawalpindi
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad2.jfif" />
              <div className="description">
                <h4 className="addHeading">Oppo Reno 7</h4>
                <p className="desc">
                  PKR 20000
                  <br />
                  Karachi
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad3.jfif" />
              <div className="description">
                <h4 className="addHeading">Reno 6</h4>
                <p className="desc">
                  PKR 30000
                  <br />
                  Lahore
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad3.jfif" />
              <div className="description">
                <h4 className="addHeading">Reno 6</h4>
                <p className="desc">
                  PKR 30000
                  <br />
                  Lahore
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad4.jfif" />
              <div className="description">
                <h4 className="addHeading">Iphone 13 Pro Max</h4>
                <p className="desc">
                  PKR 90000
                  <br />
                  Islamabad
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
            <div className="add">
              <img className="addImage" src="./images/ad4.jfif" />
              <div className="description">
                <h4 className="addHeading">Iphone 13 Pro Max</h4>
                <p className="desc">
                  PKR 90000
                  <br />
                  Islamabad
                </p>
              </div>
              <a href="/:id" className="link">
                View
              </a>
            </div>
          </div>
          <div class="dots-container">
            <span class="dot" onClick={() => handleDot("l")}></span>
            <span class="dot"></span>
            <span class="dot" onClick={() => handleDot("r")}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
