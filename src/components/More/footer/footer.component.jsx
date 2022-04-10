import React from "react";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { LeftSection } from "./leftSection/leftSection.component";
import { RightSection } from "./rightSection/rightSection.component";
import { MiddleSection } from "./middleSection/middleSection.component";
import { BottomSection } from "./bottomSection/bottomSection.component";

 const Footer = (record) => {
   const props = record  || {}
  return (
    <FlexibleDiv boxedLayout background={colors.secondary}>
      <FlexibleDiv alignItems="flex-start" paddingVertical="0">
        <LeftSection {...props}/>
        <MiddleSection  {...props} />
        <RightSection   {...props}/>
      </FlexibleDiv>
      <FlexibleDiv justifyContent="center" paddingVertical="0">
        <BottomSection  {...props}/>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Footer;
