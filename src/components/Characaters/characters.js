import React from "react";
import "../../Styling/characters.css";

const Characters = ({ results }) => {
  let display;
  console.log("wubba lubba dub dub", results);
  if (results) {
    display = results.map((item, index) => {
      const { id, name } = item;
      return (
        <div key={id} className="div-CharName">
          {name}
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
