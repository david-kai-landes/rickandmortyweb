import * as React from "react";
import Gender from "./filterCategory/gender";
import Species from "./filterCategory/species";
import Status from "./filterCategory/status";
import "../../Styling/filter.css";
//
const Filter = ({ setStatus, setPageNumber, setGender }) => {
  return (
    <div className="filter-mainContainer">
      <Gender setGender={setGender} setPageNumber={setPageNumber} />
      <Species />
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
    </div>
  );
};

export default Filter;
