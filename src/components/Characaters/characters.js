import React from "react";
import "../../Styling/characters.css";

const Characters = ({ results }) => {
  let display;

  if (results) {
    display = results.map((item) => {
      const { id, name, image, location, status } = item;
      console.log(item);
      return (
        <div key={id} className="card-container">
          <div className="card-inner">
            {/* Front of the card */}
            <div className="card-front">
              <div className="div-image">
                <img src={image} alt={name} />
                <div className="div-name">{name}</div>
              </div>
              <div className="div-status-green">
                <div className="div-status">{status}</div>
              </div>
            </div>
            {/* Back of the card */}
            <div className="card-back">
              <div className="div-lastLocation">Last Location</div>
              <div>{location.name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "Wubba Lubba Dub Dub Babyyy!";
  }

  return <div className="characters-grid">{display}</div>;
};

export default Characters;
// console.log("wubba lubba dub dub", results);
