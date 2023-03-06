import React from "react";
import Footer from "../../components/footer/Footer";
import GNavbar from "../../components/gnavbar/GNavbar";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import { useNavigate } from "react-router-dom";
import "./searched.css";
const Searched = () => {
  const navigate = useNavigate();
  return (
    <div>
      <GNavbar />
      <div className="containerResult">
        <h1 className="heading">Results</h1>
      </div>
      <div className="searchedContainer">
        <div className="searchWrapper">
          <div className="searchFilter">
            <SearchFilter />
          </div>
          <div className="searchResults">
            <div className="resultTile">
              <div className="tileImage">
                <img src="./images/ad1.png" />
              </div>
              <div className="tileDescription">
                <h2 className="tileHeading">Iphone 11</h2>
                <p>Rawalpindi</p>
                <p>PKR 100000</p>
                <p>23 Jan 2023</p>
                <button
                  onClick={() => {
                    navigate("/:id");
                  }}
                  className="adViewButton"
                >
                  View
                </button>
              </div>
            </div>
            <div className="resultTile">
              <div className="tileImage">
                <img src="./images/ad1.png" />
              </div>
              <div className="tileDescription">
                <h2 className="tileHeading">Iphone 11</h2>
                <p>Rawalpindi</p>
                <p>PKR 100000</p>
                <p>23 Jan 2023</p>
                <button className="adViewButton">View</button>
              </div>
            </div>
            <div className="resultTile">
              <div className="tileImage">
                <img src="./images/ad1.png" />
              </div>
              <div className="tileDescription">
                <h2 className="tileHeading">Iphone 11</h2>
                <p>Rawalpindi</p>
                <p>PKR 100000</p>
                <p>23 Jan 2023</p>
                <button className="adViewButton">View</button>
              </div>
            </div>
            <div className="resultTile">
              <div className="tileImage">
                <img src="./images/ad1.png" />
              </div>
              <div className="tileDescription">
                <h2 className="tileHeading">Iphone 11</h2>
                <p>Rawalpindi</p>
                <p>PKR 100000</p>
                <p>23 Jan 2023</p>
                <button className="adViewButton">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Searched;
