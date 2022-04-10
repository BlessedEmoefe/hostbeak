import React from 'react';
import { FlexibleDiv } from '../../flexibleDiv/flexibleDiv.component';
import Blurb from '../../blurb/blurb.component';

export const ImageBlurb = ({title,text,id,image,paragraphColor,titleColor}) => {
  return (
    <FlexibleDiv
      boxedLayout
      flexDirection={id % 2 == 1 ? "row-reverse" : "auto"}
      alignItems="flex-start"
    >
      <FlexibleDiv width="40%">
        <Blurb
          textAlign="left"
          alignItems="flex-start"
          paragraphColor={paragraphColor}
          titleColor={titleColor}
          paragraphFontSize="16px"
        >
          <h3>{title}</h3>
          <p>{text}</p>
        </Blurb>
      </FlexibleDiv>

      <FlexibleDiv width="40%" justifyContent="flex-start">
        <img src={image} width="100%" height="100%" alt="principles"/>
      </FlexibleDiv>
    </FlexibleDiv>
  );
}
