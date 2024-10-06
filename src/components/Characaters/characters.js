import React from "react";
import "../../Styling/characters.css";

const Characters = ({ results }) => {
  let display;
  console.log("wubba lubba dub dub", results);
  if (results) {
    display = results.map((item, index) => {
      const { id, name, image } = item;
      return (
        <div key={id} className="div-characters">
          <div className="div-image">
            <img src={image} alt="images" />
            <div key={id} className="div-CharInfo">
              <div className="div-name">{name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "Wubba Lubba Dub Dub Babyyy!";
  }
  return <>{display}</>;
};

export default Characters;
// console.log("wubba lubba dub dub", results);
