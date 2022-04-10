import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors.js";
import { fontWeights, fontSizes } from "../../infrastructure/theme/fonts";
import { Text } from "../typography/text.component.js";
// import { Loader } from "../loaders/loaders.component";

export const ButtonStyles = styled.button`
  cursor: pointer;
  width: 100%;
  height:45px;
  background: ${({ background }) => (background ? background : colors.primary)};
  border: ${({ border }) => (border ? border : "0px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "8px"};
  padding: ${({ size }) => (size ? "0.8rem" : "0.3rem")} 0;
  color: ${({ btnColor }) => (btnColor ? btnColor : colors.white)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled(Text)`
  padding: 0 0.5rem;
  color: ${({ btnColor }) => (btnColor ? btnColor : colors.white)};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : fontWeights.bold};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
`;

export const Button = ({
  btnText,
  background,
  border,
  borderRadius,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  onClick,
  loading,
  RightIcon,
  LeftIcon,
  iconSize,
  size,
}) => {
  return (
    <ButtonStyles
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick ? onClick : null}
      size={size}
    >
      {LeftIcon ? (
        <LeftIcon
          color={btnColor ? btnColor : colors.white}
          size={iconSize ? iconSize : fontSizes.smallTitle}
        />
      ) : null}
      <BtnText
        btnColor={btnColor}
        textTransform={textTransform}
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {btnText}
      </BtnText>

      {RightIcon ? (
        <RightIcon
          color={btnColor ? btnColor : colors.white}
          size={iconSize ? iconSize : fontSizes.smallTitle}
        />
      ) : null}
    </ButtonStyles>
  );
};

