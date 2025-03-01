import React, { useState } from "react";
import "./CardFlip.css";

const CardFlip = ({ number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}  // it will toggle the class name when the card is clicked
      onClick={() => setFlipped(!flipped)} // it will toggle the state, as true or false, when the card is clicked
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">Card {number}</div>
        <div className="flip-card-back">Back {number}</div>
      </div>
    </div>
  );
};

export default CardFlip;
