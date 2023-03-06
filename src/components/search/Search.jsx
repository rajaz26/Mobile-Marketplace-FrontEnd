import React from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  return (
    <div className="search">
      <div className="bar">
        <input type="text" placeholder="Browse here" className="input" />
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/searched");
          }}
          className="buttonSearch"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
