import * as React from "react";
import Gender from "./filterCategory/gender";
import Species from "./filterCategory/species";
import Status from "./filterCategory/status";
//
const Filter = () => {
  return (
    <div className="filter-mainContainer">
      <Gender />
      <Species />
      <Status />
    </div>
  );
};

export default Filter;
