import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../../typography/text.component";

export const TopSectionWrapper = styled(FlexibleDiv)`
  height: auto;
  flex-direction: row;
`;

export const Wrapper = styled(FlexibleDiv)`
  height: max-content;
  flex-direction: column;
`;

export const Title = styled(Text)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.title};
  font-weight: ${fontWeights.bold};
`;

export const SubTitle = styled(Text)`
  color: ${colors.black.soft};
  font-size: ${fontSizes.body};
`;

export const ForgotPasswordText = styled(Text)`
  color: ${colors.black.soft};
  font-size: ${fontSizes.smallBody};
  display: inline;
`;
export const ActiveLink = styled(Text)`
  color: ${colors.primary};
  font-size: ${fontSizes.smallBody};
  font-weight: ${fontWeights.semiBold};
  margin: 0 0.2rem;
  display: inline;
`;
