import React from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Div } from "../div/div.component";
import MonthDetail from "./month.component";
// import Select from "../More/Select/Select";
import { Spacer } from "../spacer/spacer.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text } from "../typography/text.component";

export const Head = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ bg }) => (bg ? bg : colors.primary)};
  color: ${({ color }) => (color ? color : colors.text.light)};
  height: ${({ height }) => (height ? height : "34px")};
  display: flex;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "13px")};
`;

export const Col = styled.div`
  width: 100%;
  display: ${({ display }) => (display ? display : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  align-items: ${({ align }) => (align ? align : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "")};
  flex: ${({ flex }) => (flex ? flex : "")};
  flex-wrap: wrap;
`;

const Select = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  background: #f5f4f4;
  font-weight: ${fontWeights.bold};
`;
const Option = styled.option`
  color: ${colors.black.strong};
`;
const LineHistoryCard = () => {
  return (
    <>
      <DefaultCardstyle width={"60%"} padding={"0px"}>
        <Div>
          <Text
            align={"start"}
            color={colors.black.strong}
            fontSize={fontSizes.smallBody}
            fontWeight={fontWeights.bold}
          >
            Line Histories
          </Text>
        </Div>
        <Div>
          {/* <Select placeholder={"Select Year"} value={"23"}></Select> */}
          <Select required name="Year">
            <Option value={""} disabled selected>
              Select Year{" "}
            </Option>
            <Option value={"2022"}> 2022</Option>
            <Option value={"2023"}>2023</Option>
            <Option value={"2024"}>2024 </Option>
            <Option value={"2025"}>2025 </Option>
            <Option value={"2026"}>2026 </Option>
            <Option value={"2027"}>2027 </Option>
          </Select>
        </Div>
        <Spacer />
        <MonthDetail month={"August "} year={"2022"} />
      </DefaultCardstyle>
    </>
  );
};

export default LineHistoryCard;
