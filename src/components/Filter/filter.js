import * as React from "react";
import Gender from "./filterCategory/gender";
import Species from "./filterCategory/species";
import Status from "./filterCategory/status";
import "../../Styling/filter.css";
//
const Filter = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  //
  const clear = () => {
    if (setStatus) setStatus("");
    if (setPageNumber) setPageNumber(1);
    if (setGender) setGender("");
    if (setSpecies) setSpecies("");
    window.location.reload(false);
  };

  return (
    <>
      <div
        onClick={clear}
        className="unSelect-All"
        aria-label="Unselect all filters"
      >
        <div className="unSelect-All-text">UnSelect All</div>
      </div>
      <div className="filter-mainContainer">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </>
  );
};

export default Filter;
