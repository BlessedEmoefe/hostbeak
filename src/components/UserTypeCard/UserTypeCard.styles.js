import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";

export const UserTypeCardContainer = styled(FlexibleDiv)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: auto;
  width: 300px;
  padding: 1.8rem 0;
  :hover {
    cursor: pointer;
    filter: brightness(1%);
  }
`;

export const UserTypeText = styled(Text)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.smallTitle};
  font-weight: ${fontWeights.semiBold};
  margin-left:1rem;
`;
