import React from "react";
import "../../Styling/characters.css";
import logo from "../../images/rickandMorty_F_-removebg.png";

const Characters = ({ results }) => {
  let display;

  if (results) {
    display = results.map((item) => {
      const { id, name, image, location, status } = item;
      // console.log(item);
      return (
        <div key={id} className="mainContainer">
          <div className="theCard">
            {/* Front of the card */}
            <div className="theFront">
              <div className="div-image">
                <img src={image} alt={name} />
                <div className="div-name">{name}</div>
              </div>
              {(() => {
                if (status === "Alive") {
                  return (
                    <div className="div-status-green">
                      <div className="div-status">{status}</div>
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div className="div-status-red">
                      <div className="div-status">{status}</div>
                    </div>
                  );
                } else {
                  return (
                    <div className="div-status-unKnown">
                      <div className="div-status">{status}</div>
                    </div>
                  );
                }
              })()}
            </div>
            {/* Back of the card */}
            <div className="theBack">
              <div className="div-lastLocation">Last Location</div>
              <div>{location.name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="div-logo">
        <img src={logo} alt="logo" />
        <div className="div-msg">Wubba Lubba Dub Dub Babyyy!</div>
      </div>
      // display = "Wubba Lubba Dub Dub Babyyy!";
    );
  }

  return <div className="characters-grid">{display}</div>;
};

export default Characters;
