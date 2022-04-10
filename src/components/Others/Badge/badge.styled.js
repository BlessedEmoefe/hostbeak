import styled from "styled-components";

export const BadgeBox = styled.button`
  color: ${({ color, theme }) =>
    color ? color : theme.palette.primary.contrastText};
  background: ${({ background, theme }) =>
    background ? background : theme.button.main};
  padding: ${({ padding }) => (padding ? padding : "0.65rem 1rem")};
  width: ${({ width }) => (width ? width : "max-content")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.2rem;
  
   &::-moz-focus-inner {
    border: 0;
  }

  span {
    margin-left: 0.5rem;
    background: ${({ theme }) => theme.palette.common.badge};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    font-size: small;
  }
`;
