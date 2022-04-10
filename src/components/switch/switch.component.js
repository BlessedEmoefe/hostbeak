import { SwitchWrapper } from "./switch.styles";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
const ErrorText = styled.div`
  width: 100%;
  color: ${colors.error};
  padding-left: 10px;
  font-size: 13px;
}
`;
export const Switch = ({
  name,
  isActive,
  color,
  handleToggle,
  onChange,
  label,
  labelColor,
  error,
}) => {
  const [on, setOnState] = useState(isActive ? isActive : false);
  const toggle = (e) => {
    setOnState((o) => {
      return !o;
    });
    onChange && onChange({ target: { name, value: !on } });
    return handleToggle ? handleToggle(on) : null;
  };
  return (
    <>
      <SwitchWrapper color={color} labelColor={labelColor}>
        <button
          type="button"
          className={on ? "on" : "off"}
          on={on}
          onClick={toggle}
        >
          <span className="pin" />
        </button>
        {label ? <span className="toggle-label">{label}</span> : null}
      </SwitchWrapper>
      <ErrorText>{error[name]}</ErrorText>
    </>
  );
};
Switch.defaultProps = {
  error: {},
};
