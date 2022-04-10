import React from "react";
import { BlurbContainer } from "./blurb.styles";

export const Blurb = (props) => {
  return (
    <BlurbContainer
      titleColor={props.titleColor}
      paragraphColor={props.paragraphColor}
      paragraphFontSize={props.paragraphFontSize}
      textAlign={props.textAlign}
      alignItems={props.alignItems}
    >
      {props.children}
    </BlurbContainer>
  );
};
