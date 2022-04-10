import styled from "styled-components";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../../infrastructure/theme/colors";
// import { Text } from "../../../components/typography/text.component";
// import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";

export const PageWrapper = styled(FlexibleDiv)`
  justify-content: center;
  background: ${colors.bg.darkBg};
  align-items: center;
  flex: 1;
  min-height:100vh;
`;

export const ContentContainer = styled(FlexibleDiv)`
  width: 70%;
  border-radius: 20px;
  height: min-content;
  background: ${colors.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

