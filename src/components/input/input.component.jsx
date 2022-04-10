import React from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Spacer } from "../spacer/spacer.component";

const Wrapper = styled(FlexibleDiv)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: max-content;
`;

const InnerLabel = styled.label`
  background: ${colors.white};
  min-width: 30%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.caption)};
  color: ${colors.headerShade.strong};
  text-align: center;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "0.4rem"};
  padding: 0.4rem;
  position: relative;
  z-index: 1;
  bottom: -0.9rem;
  margin-left: 3%;
`;

const Label = styled.label`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallBody)};
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  padding: 0.4rem;
`;

const InputStyles = styled.input`
  border: ${({ border }) => (border ? border : `1px solid ${colors.primary}`)};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallBody)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "6px")};
  outline: none;
  padding: 1rem;
  background: ${colors.white};
`;
const ErrorText = styled.div`
  width: 100%;
  text-transform: capitalize;
  color: ${colors.error};
`;

const TextAreaStyles = styled.textarea`
  border: ${({ border }) =>
    border ? border : `1px solid ${colors.headerShade.soft}`};
  height: 130px;
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallBody)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  padding: 1rem;
  resize: none;
  outline: none;
`;

const DropDownStyles = styled.select`
  border: ${({ border }) =>
    border ? border : `1px solid ${colors.headerShade.soft}`};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.smallBody)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  color: ${colors.text.strong};
  padding: 1rem;
  outline: none;
`;

export const Input = ({
  type,
  placeholder,
  border,
  fontSize,
  borderRadius,
  error,
  name,
  label,
  innerLabel,
  onChange,
  onInput,
  onMouseMove,
  value,
  min,
  max,
  ...props
}) => {
  return (
    <Wrapper paddingVertical="0">
      {label ? (
        <>
          <Label>{label}</Label>
          <Spacer size="0.3rem" />
        </>
      ) : null}

      {innerLabel ? <InnerLabel for="">{innerLabel}</InnerLabel> : null}
      <InputStyles
        {...props}
        name={name}
        type={type}
        placeholder={placeholder}
        border={border}
        fontSize={fontSize}
        borderRadius={borderRadius}
        onChange={onChange}
        onInput={onInput}
        onMouseMove={onMouseMove}
        value={value}
        min={min}
        max={max}
      />
      <ErrorText>{error[name]}</ErrorText>
    </Wrapper>
  );
};

export const TextArea = ({
  type,
  placeholder,
  border,
  fontSize,
  name,
  error,
  borderRadius,
  ...props
}) => {
  return (
    <>
      <TextAreaStyles
        {...props}
        name={name}
        type={type}
        placeholder={placeholder}
        border={border}
        fontSize={fontSize}
        borderRadius={borderRadius}
      />
      <ErrorText>{error[name]}</ErrorText>
    </>
  );
};
TextArea.defaultProps = {
  error: {},
};
Input.defaultProps = {
  error: {},
};

export const DropDown = ({ border, fontSize, borderRadius }) => {
  return (
    <DropDownStyles
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="vw">VW</option>
      <option value="audi" selected>
        Audi
      </option>
    </DropDownStyles>
  );
};
