import React from 'react';
import {SelectInput} from "./style";
import styled from "styled-components";
import {colors} from "../../../infrastructure/theme/colors";

const ErrorText = styled.div`
  width: 100%;
  text-transform: capitalize;
  color: ${colors.error};
`;

const Select = ({error,options, onChange, placeholder, name, value}) => {
  const list = options.map(({name, value}, index)=> <option key={index }value={value}>{name}</option>)
  return (
    <>
      <SelectInput selected={value} name={name} onChange={onChange}>
        <option>{placeholder}</option>
        {list}
      </SelectInput>
      {/* <ErrorText>{error[name]}</ErrorText> */}
    </>
  );
};

Select.defaultProps = {
  options: []
};
export default Select;
