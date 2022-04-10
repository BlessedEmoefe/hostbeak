import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/lineHeight";

export const Text = styled.p`
  display: flex;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallTitle)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "auto")};
  color: ${({ color }) => (color ? color : colors.text.strong)};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  padding: ${({ color }) => (color ? color : 0)};
  line-height: ${({ lineHeight }) => lineHeight || lineHeights.paragraph};
  align-self: ${({ align }) => (align ? align : "center")};
  @media (max-width: 1050px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
    margin:${({resmargin})=>resmargin ? resmargin : ''};
  }
`;

export const Title = styled.h1`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.h1)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "auto")};
  color: ${({ color }) => (color ? color : colors.black.strong)};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
  line-height: ${({ lineHeight }) => lineHeight || lineHeights.title};

  /* @media (max-width: 1050px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
  } */
`;
