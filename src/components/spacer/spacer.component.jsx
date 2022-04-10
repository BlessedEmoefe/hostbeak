import styled from "styled-components";


const variantSize = (size) =>
  size
    ? size === "small"
      ? "1rem"
      : size === "medium"
      ? "3rem"
      : size === "large"
      ? "5rem"
      : ""
    : "0.5rem";

const SpacerStyle = styled.div`
  flex: 1;
  padding: ${({ size }) => size ?  variantSize(size) || size : "0.5rem"};

`
export const Spacer = ({size}) => {
  return <SpacerStyle size={size}></SpacerStyle>
}
