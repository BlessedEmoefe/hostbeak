import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const IOUFixedCardContainer = styled(FlexibleDiv)`
  padding: 1.5rem;
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  width: ${({ width }) => (width ? width : "270px")};
  min-width: 170px;
  height: auto;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis:25%;
 

  @media only screen and (max-width: 670px) {
    padding: 17px;
    width: 270px;
  }
  @media only screen and (max-width: 470px) {
    width: 200px;
    padding: 2px;
  }
  @media only screen and (max-width: 270px) {
    width: 119px;
  }
`;

export const InfoSection = styled(FlexibleDiv)`
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const IconSection = styled(FlexibleDiv)`
  width: 50%;
  align-items: flex-start;
  justify-content: flex-end;
  height:auto;
`;

export const Title = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.body};
  font-weight: ${fontWeights.bold};
`;
export const SubTitle = styled(Text)`
  /* color: ${({ color }) => (color ? color : colors.black.strong)}; */
  font-size: ${fontSizes.smallBody};
`;
