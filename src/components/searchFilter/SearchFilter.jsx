import React from "react";
import "./searchFilter.css";
const SearchFilter = () => {
  return (
    <div className="filterContainer">
      <div className="filterWrapper">
        <h2 className="filterHeading">Filter Results</h2>
        <div className="filterItem">
          <h5 className="itemHeading">Manufacturer</h5>
          <select className="select">
            <option className="options" disabled selected>
              Choose the brand
            </option>
            <option className="options" value="apple">
              Apple
            </option>
            <option className="options" value="samsung">
              Samsung
            </option>
            <option className="options" value="huawei">
              Huawei
            </option>
            <option className="options" value="nokia">
              Nokia
            </option>
            <option className="options" value="oppo">
              Oppo
            </option>
          </select>
        </div>
        <div className="filterItem">
          <h5 className="itemHeading">City</h5>
          <select className="select">
            <option className="options" disabled selected>
              Choose the city
            </option>
            <option className="options" value="islamabad">
              Islamabad
            </option>
            <option className="options" value="karachi">
              Karachi
            </option>
            <option className="options" value="lahore">
              Lahore
            </option>
            <option className="options" value="rawalpindi">
              Rawalpindi
            </option>
            <option className="options" value="multan">
              Multan
            </option>
          </select>
        </div>
        <div className="filterItem">
          <h5 className="itemHeading">Price</h5>
          <select className="select">
            <option className="options" disabled selected>
              Choose the price range
            </option>
            <option className="options" value="one">
              400K-200K
            </option>
            <option className="options" value="two">
              200K-99K
            </option>
            <option className="options" value="three">
              99K-79K
            </option>
            <option className="options" value="four">
              79K-59K
            </option>
            <option className="options" value="five">
              {">"}59K
            </option>
          </select>
        </div>
        <div className="filterButton">
          <button className="applyButton">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
