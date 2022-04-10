import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const UserLogoCardContainer = styled(FlexibleDiv)`
border:1px solid ${colors.shade};
border-radius:8px;
width:95%;
`;

export const LogoText = styled(Text)`
  color: ${colors.text.strong};
  font-weight: ${fontWeights.semiBold};
  font-size: ${fontSizes.smallBody};
  line-height:14px;
  // background:blue;
`;

export const UserMail = styled(Text)`
  color: ${colors.text.regular};
  font-size: ${fontSizes.caption};
  // background: green;
`;
