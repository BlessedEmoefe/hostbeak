import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const ActivityHistoryContainer = styled(FlexibleDiv)`
  flex-direction: column;
  width: auto;
  flex-basis: 45%;
  padding: 1.5rem;
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  width: 300px;
  height: auto;
`;
export const HeaderSection = styled(FlexibleDiv)`
  justify-content: space-between;
  align-items: flex-start;
`;

export const BodySection = styled(FlexibleDiv)`
  padding: 0;
`;
export const Wrapper = styled(FlexibleDiv)`
  width: auto;
  padding: 0;
`;

export const Title = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.body};
  font-weight: ${fontWeights.bold};
  padding-left: 1rem;
`;
export const SeeAllText = styled(Text)`
  color: ${({ color }) => (color ? color : colors.primary)};
  font-size: ${fontSizes.body};
  cursor: pointer;
`;
