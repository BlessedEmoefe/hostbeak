import React, { useState } from "react";
import { CheckIcon } from "../../assets/svg";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Button } from "../button/button.component";
import { Div } from "../div/div.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Calender from "../lineHistoryCard/calendar.component";
import { Radio } from "../radioButton/radioButton.component";
import { Spacer } from "../spacer/spacer.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text } from "../typography/text.component";

import { Indicator } from "./indicator.component";

// Header

export const Head = () => {
  const [addSavings, setAddSavings] = useState(false);

  function AddSavings() {
    setAddSavings(true);
    console.log(addSavings);
    setInterval(() => {
      setAddSavings(false);
    }, 6000);
  }
  return (
    <>
      <FlexibleDiv
        paddingVertical={"1.6rem"}
        background={"#1c5fab2e"}
        paddingVertical={"0px"}
        flexDirection={"row"}
      >
        <FlexibleDiv
          paddingVertical={"3px"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"baseline"}
          width={"50%"}
        >
          <Text
            align={"start"}
            marginLeft={"42px"}
            color={colors.black.strong}
            fontSize={fontSizes.smallBody}
            fontWeight={fontWeights.bold}
          >
            {" "}
            Savings Rate
          </Text>
          <Text
            align={"start"}
            marginLeft={"42px"}
            color={colors.primary}
            fontSize={fontSizes.body}
            fontWeight={fontWeights.bold}
          >
            500NGA
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          resWidth={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"50%"}
        >
          <Button
            onClick={AddSavings}
            background={
              addSavings ? `${colors.black.light}` : `${colors.primary}`
            }
            btnColor={addSavings ? `${colors.white} ` : `${colors.black.light}`}
            fontSize={fontSizes.button}
            btnText={"ADD SAVINGS"}
          />
        </FlexibleDiv>

        <Div
          transition={"0.9s ease"}
          padding={"0px 0px 30px 0px"}
          direction={"row"}
          align={"center"}
          display={addSavings ? "flex" : "none"}
          width={"90%"}
          justifyContent={"center"}
        >
          <FlexibleDiv
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"end"}
            width={"15%"}
          >
            {" "}
            <CheckIcon color={colors.green} width={"1.3rem"} />
          </FlexibleDiv>
          <FlexibleDiv width={"85%"}>
            <Text
              marginTop={"12px"}
              marginLeft={"15px"}
              fontWeight={fontWeights.medium}
              color={colors.black.regular}
              lineHeight={"-32px"}
              fontSize={fontSizes.smallBody}
            >
              You currently added 1,500NGA being 3 days savings to your line.
              10days left <br /> to close line Edit Savings
            </Text>
          </FlexibleDiv>
        </Div>
        <Spacer />
      </FlexibleDiv>
    </>
  );
};















// Type Of Activities

export const Type = () => {
  return (
    <>
      <FlexibleDiv
        breakpointwidth={"100%"}
        paddingVertical={"0px"}
        width={"75%"}
        justifyContent={"space-evenly"}
        alignItems={"start"}
      >
        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
        >
          <Indicator bg={colors.black.soft} />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
            align={"center"}
          >
            {" "}
            Commision
          </Text>
        </FlexibleDiv>

        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
        >
          <Indicator bg={colors.green} />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
          >
            Depsoited
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
        >
          <Indicator bg={colors.red} />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
          >
            Withdrawed
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
        >
          <Indicator
            bg={colors.white}
            border={`1.6px solid ${colors.black.soft} `}
          />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
          >
            No Activity
          </Text>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

// Valuation

export const Valuation = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Div
        padding={"0px 0px 0px 45px"}
        align={"baseline"}
        justifyContent={"start"}
        width={"30%"}
        display={"flex"}
      >
        <Text fontWeight={fontWeights.bold} color={colors.red}>
          -7
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.black.strong}>
          +
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.green}>
          20
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.black.strong}>
          /
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.primary}>
          31
        </Text>
      </Div>
    </>
  );
};
