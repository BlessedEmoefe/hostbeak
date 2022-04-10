import React from "react";
import { MonoTextCardContainer } from "./monoTextCard.styles";

export const MonoTextCard = ({ cardText, centerCard }) => {
  return (
    <MonoTextCardContainer centerCard={centerCard}>
      <p>{cardText}</p>
    </MonoTextCardContainer>
  );
};

