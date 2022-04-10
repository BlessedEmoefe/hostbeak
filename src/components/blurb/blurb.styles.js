import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { lineHeights } from "../../infrastructure/theme/lineHeight";

export const BlurbContainer = styled.div`
  width: 100%;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  h1 {
    font-size: 2.5rem;
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.black.strong)};
    line-height: ${lineHeights.title};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }
  h3 {
    font-size: 1.5rem;
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.black.strong)};
    line-height: ${lineHeights.subTitle};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }

  p {
    font-size: ${({ paragraphFontSize }) =>
      paragraphFontSize ? paragraphFontSize : "17px"};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    color: ${({ paragraphColor }) =>
      paragraphColor ? paragraphColor : colors.text.strong};
    line-height: ${lineHeights.paragraph};
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1050px) {
    max-width: 95vw;
    h1 {
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
    h3 {
      font-size: 1.3rem;
      line-height: 1.2rem;
    }

    p {
      font-size: ${({ paragraphFontSize }) =>
        paragraphFontSize ? paragraphFontSize : "14px"};
    }
  }

  @media (max-width: 800px) {
    align-items: center;
    h1 {
      font-size: 2.3rem;
      text-align: center;
    }
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.4rem;
    }
  }
`;


