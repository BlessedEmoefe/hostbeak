import React from "react";
import {
  IOUFixedCardContainer,
  InfoSection,
  IconSection,
  Title,
  SubTitle,
} from "./iouFixedCard.styles";
import { IOUIcon, FixedIcon } from "../../assets/svg";
import { Button } from "../button/button.component";
import { colors } from "../../infrastructure/theme/colors";
import { Spacer } from "../spacer/spacer.component";
import { HiOutlineArrowNarrowRight as RightArrow } from "react-icons/hi";

export const IUOFixedCard = ({ IOU, Fixed, totalAmount, totalCustomers,color }) => {
  const handleBtn = (text) => {
    console.log(text);
  };
  return (
    <IOUFixedCardContainer>
      <InfoSection paddingVertical="0">
        <Title color={color}>{IOU ? "IOU" : Fixed ? "Fixed" : "None"}</Title>
        <Spacer size="0.3rem" />
        <Title color={color}>{totalAmount}NGA</Title>
        <Spacer size="0.3rem" />
        <SubTitle>{totalCustomers} Customers</SubTitle>
        <Spacer size="0.5rem" />
        <Button
          btnText="View All"
          RightIcon={RightArrow}
          background="transparent"
          border={`1px solid ${colors.primary}`}
          btnColor={colors.primary}
          // textTransform
          // fontWeight
          // fontSize
          onClick={handleBtn("hello")}
        />
      </InfoSection>
      <IconSection paddingVertical="0">
        {IOU ? (
          <IOUIcon color={color}/>
        ) : Fixed ? (
          <FixedIcon color={color} />
        ) : (
          "None"
        )}
      </IconSection>
    </IOUFixedCardContainer>
  );
};
