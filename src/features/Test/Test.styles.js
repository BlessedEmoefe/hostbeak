import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";

export const PageWrapper = styled(FlexibleDiv)`
  justify-content: center;
  background: ${colors.bg.darkBg};
  align-items: center;
  flex: 1;
  background:pink;
`;

export const ContentContainer = styled(FlexibleDiv)`
  width: 70%;
  border-radius: 20px;
  height: max-content;
  background: ${colors.white};
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
