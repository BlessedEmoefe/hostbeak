import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const FlexibleDiv = styled.div`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ background }) => (background ? background : "transparent")};
  display: flex;
  color: ${({ textColor }) => (textColor ? textColor : colors.white)};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  padding: ${({ paddingVertical }) =>
      paddingVertical ? paddingVertical : "1.6rem"}
    ${({ boxedLayout }) => (boxedLayout ? "2%" : "0")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  margin: 0;
  img {
    width: ${(props) => props.ImageWidth && props.ImageWidth};
  }
  @media (max-width: 1020px) {
    padding: ${({ paddingVertical }) =>
        paddingVertical ? paddingVertical : "1.6rem"}
      ${({ boxedLayout }) => (boxedLayout ? "3%" : "0")};
      width:${({breakpointwidth})=>breakpointwidth ? breakpointwidth : ''};
  }

  @media (max-width: 800px) {
    width: ${({ resWidth }) => (resWidth ? resWidth : "100%")};
    flex-direction: ${({ resFlexDirection }) =>
      resFlexDirection ? resFlexDirection : "column"};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "space-between"};
    align-items: center;
    ${(props) =>
      !props.disablePadd &&
      `padding: ${({ paddingVertical }) =>
        paddingVertical ? paddingVertical : "1.6rem"} ${({ boxedLayout }) =>
        boxedLayout === true ? "5%" : boxedLayout === "remove" ? "" : "0"}`};
    flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  }
`;

// 1920×1080 (8.89%)
// 1366×768 (8.44%)
// 360×640 (7.28%)
// 414×896 (4.58%)
// 1536×864 (3.88%)
// 375×667 (3.75%)
