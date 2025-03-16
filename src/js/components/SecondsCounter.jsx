import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="text-center">
      <div className="bigCounter">
      <div className="clockIcon">
        <FontAwesomeIcon icon={faClock} style={{ color: "#8263e0" }} />
      </div>
      
        <div className="sixthDigit">{Math.floor((seconds / 100000) % 10)}</div>
        <div className="fifthDigit">{Math.floor((seconds / 10000) % 10)}</div>
        <div className="fourthDigit">{Math.floor((seconds / 1000) % 10)}</div>
        <div className="thirdDigit">{Math.floor((seconds / 100) % 10)}</div>
        <div className="secondDigit">{Math.floor((seconds / 10) % 10)}</div>
        <div className="firstDigit">{seconds % 10}</div>
      </div>
    </div> 
  );
};

export default SecondsCounter;
