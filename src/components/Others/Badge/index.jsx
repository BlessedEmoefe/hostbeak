import React from "react";
import {BadgeBox} from "./badge.styled";


const Badge = ({text = "Badge", number = 4}) => {
  return (
    <BadgeBox>
      {text} {number < 1 ? null : <span>{number}</span> }
    </BadgeBox>
  );
};

export default Badge;
