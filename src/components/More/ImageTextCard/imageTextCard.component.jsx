import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import GoldenBridge from "../../assets/images/golden-bridge.png";
import { Container } from "./imageTextCard.styles";
import {colors} from "../../infrastructure/theme/colors";

export const ImageTextCard = ({ image, text, ImageWidth }) => {
  return (
    <FlexibleDiv
      width="20%"
      flexDirection="column"
      justifyContent="space-around"
    
    >
      <FlexibleDiv
        ImageWidth={ImageWidth}
        width="100%"
        height="80%"
        justifyContent="center"
        alignItems="center"
        paddingVertical="0"
      >
        <img src={image} alt="card-logo" />
      </FlexibleDiv>
      <label style={{color:colors.black, marginTop:12}}>{text}</label>
    </FlexibleDiv>
  );
};
