import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SearchBarWrapper = styled("div")`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  height: ${({ height, xl }) => (height ? height : xl ? "54px" : "44px")};
  display: flex;
  flex-direction: ${({ xl }) => (xl ? "row" : "row-reverse")};
  align-items: center;
  background: ${({ bg, xl }) =>
    bg ? bg : xl ? colors.inputBg.largeInputBg : "#fff"};
  border-radius: 10px;
  border: ${({ xl }) => (xl ? "none" : `1px solid ${colors.inputBg.smallInputBg}`)};
  overflow: hidden;

  .svgWrapper {
    width: auto;
    height: 100%;
    cursor: pointer;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.3rem;
    .svg {
      color: ${({ color }) => (color ? color : colors.text.regular)};
      font-size: ${({ xl }) => (xl ? "14px" : "10.5px")};
    }
  }

  input {
    border: none;
    color: ${({ color }) => (color ? color : colors.primary)};
    font-size: ${({ xl }) =>
      xl ? ` ${fontSizes.body}` : `${fontSizes.smallBody}`};
    width: 100%;
    flex: 1;
    height: 100%;
    padding: 0.5rem;
    padding-left: ${({ xl }) => (xl ? "0.9rem" : "0.3rem")};
    background: transparent;
    outline: 0;
    font-family: inherit;

    ::placeholder {
      color: ${({ color }) => (color ? color : colors.text.regular)};
      font-size: ${fontSizes.smallBody};
    }
  }
`;
