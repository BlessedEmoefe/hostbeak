import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const TabHeaderContainer = styled(FlexibleDiv)`
  // background: red;
  padding: 0 2%;
  border-bottom: 1px solid ${colors.shade};
  @media (max-width: 600px) {
    padding: 0 1%;
  }
`;

export const InnerWrapper = styled(FlexibleDiv)`
  // background: blue;
  justify-content: flex-start;
  padding: 0;
  overflow-x:scroll;
`;
export const LinkTabs = styled(FlexibleDiv)`
  width: max-content;
  padding: 0 0.3rem;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 1.5rem;
  @media (max-width: 600px) {
    margin-right: 0.7rem;
  }
`;
export const LinkText = styled(Text)`
  color: ${({ active }) => (active ? colors.text.strong : colors.text.regular)};
  font-size: ${fontSizes.body};
  margin:10px 0;
  width:max-content;



`;
export const BorderBottom = styled(FlexibleDiv)`
  background: red;
  padding: 1px;
  background: ${({ active }) => (active ? colors.purple : "transparent")};
  border-radius: 2px;
`;
// export const TabHeaderContainer = styled(FlexibleDiv)`
//   background: red; ;
// `;
// export const TabHeaderContainer = styled(FlexibleDiv)`
//   background: red; ;
// `;
