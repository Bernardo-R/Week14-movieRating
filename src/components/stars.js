import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
// this star array
function Stars() {
  const stars = Array(5).fill(0);
  //using hook "useState" to define two state of variable
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    //updates the currentValue state variable to the value of the star that was clicked.
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    //updates the hoverValue state variable to the value of the star that the mouse is currently hovering over.
    setHoverValue(value);
  };
  const handleMouseLeave = (value) => {
    //sets the hoverValue state variable back to undefined when the mouse leaves the star rating component.
    setHoverValue(undefined);
  };

  return (
    <div className="stars">
      {stars.map((_, index) => {
        //mapped over to render the FaStar component for each individual star.
        return (
          <FaStar
            key={index}
            size={24}
            style={{ marginRight: 10, cursor: "poiter" }}
            color={
              //The color prop of the FaStar component is set based on whether the star is currently being hovered over or has been clicked using the hoverValue and currentValue state variable.
              (hoverValue || currentValue) > index ? colors.orange : colors.grey
            }
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}

export default Stars;
