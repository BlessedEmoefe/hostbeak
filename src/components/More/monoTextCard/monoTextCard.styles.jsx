import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { fontWeights } from "../../../infrastructure/theme/fonts";
import { lineHeights } from "../../../infrastructure/theme/lineHeight";

export const MonoTextCardContainer = styled.div`
  width: 100%;
  min-width: 300px;
  min-height: ${({ centerCard }) => (centerCard ? "17rem" : "15rem")};
  background: ${colors.gradientPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  p {
    font-size: 18px;
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    color: ${colors.white};
    font-weight: ${fontWeights.semiBold};
    line-height: ${lineHeights.paragraph};
    margin: 0;
    padding: 0;
  }
`;
