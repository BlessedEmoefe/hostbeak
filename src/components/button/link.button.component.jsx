import styled from "styled-components";
import Link from 'next/link'
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";

export const LinkButtonStyles = styled.a`
  background: ${({ background }) =>
    background ? background : colors.secondary};
  border: 0px;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  padding: 12px;
  color: ${({ btnColor }) => (btnColor ? btnColor : "white")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : fontWeights.bold};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
`;

export const LinkButton = ({
  btnText,
  background,
  borderRadius,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  ...props
}) => {
  return (
    <Link href={props.href}>
    <LinkButtonStyles
      {...props}
      background={background}
      borderRadius={borderRadius}
      btnColor={btnColor}
      textTransform={textTransform}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
        {btnText}
    </LinkButtonStyles>
    </Link>
  );
};
