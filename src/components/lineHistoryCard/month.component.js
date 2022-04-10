import React from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Div } from "../div/div.component";
import { Text } from "../typography/text.component";
import Calender, { Days } from "./calendar.component";
import { Col, Head } from "./lineHistoryCard.component";



const Span = styled(Text)`
  font-size: ${fontSizes.caption};
  margin-left: 6px;
`;

const MonthDetail = ({ month, year }) => {
  const day = 30;

  return (
    <>
      <Head>
        <Text color={colors.white} fontSize={fontSizes.smallBody}>
          {" "}
          {month}
          {year}
        </Text>
      </Head>
      <Div
        display={"flex"}
        direction={"row"}
        align={"baseline"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        <Col
          display={"flex"}
          align={"start"}
          background={"red"}
          direction="row"
          justifyContent={"space-evenly"}
        >
          <Col display={"flex"} flexBasis={"50%"}>
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={".7rem"}
            >
              Saving Rate: <Span> 5300 NGA</Span>
            </Text>
          </Col>
          <Col display={"flex"} flexBasis={"50%"}>
            {" "}
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={".7rem"}
            >
              Withdrawal: <Span>carried over</Span>
            </Text>
          </Col>
        </Col>

        <Col
          display={"flex"}
          align={"start"}
          background={"red"}
          direction="row"
          justifyContent={"space-evenly"}
        >
          <Col display={"flex"} flexBasis={"50%"}>
            {" "}
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={".7rem"}
            >
              Days Saved :<Span> 62</Span>
            </Text>
          </Col>
          <Col display={"flex"} flexBasis={"50%"}>
            {" "}
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={".7rem"}
            >
              Line Closed: <Span>carried over</Span>
            </Text>
          </Col>
        </Col>
      </Div>


      <Calender/>
    

      <Div width={"100%"}>
        <Text
          align={"start"}
          color={colors.black.soft}
          fontSize={fontSizes.small}
          fontWeight={fontWeights.medium}
        >
          This savings line withdrawal was carried over to next line
        </Text>
      </Div>
    </>
  );
};

export default MonthDetail;
