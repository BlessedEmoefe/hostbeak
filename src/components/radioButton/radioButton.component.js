import React, { useState } from "react";
// import PropTypes from "prop-types";
import { RadioButtonContainer } from "./radioButton.styles";

export const Radio = ({ selected, onChange, text, value }) => {
  const [active, setActive] = useState(true);
  return (
    <RadioButtonContainer
      paddingVertical="0"
      onClick={() => {
        onChange();
      }}
    >
      <div
        style={selected ? { background: "pink" } : { background: "green" }}
        className={
          selected ? `radio-outer-circle unselected` : "radio-outer-circle"
        }
      >
        <div
          className={
            selected
              ? `radio-inner-circle unselected-circle`
              : "radio-inner-circle"
          }
        />
      </div>
      <div className="helper-text">{text}</div>
    </RadioButtonContainer>
  );
};
