import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start !important;
  .toggle-label {
    color: ${(props) => props.labelColor || colors.black};
  }
  button {
    background-color: ${colors.iconColor};
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    height: 22px;
    position: relative;
    width: 45px;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0.5em;
  }

  button:hover {
    background-color: ${colors.headerShade.strong};
  }
  button:focus,
  button:active {
    outline: none;
  }
  button::-moz-focus-inner {
    border: 0;
  }

  .pin {
    background-color: white;
    border-radius: 98px;
    height: 15px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 15px;
    transition: left ease 0.3s;
    box-shadow: 2px 3px 5px #44444472;
    :before {
      content: "";
      position: absolute;
      height: 2px;
      width: 9px;
      background: ${({ color }) => (color ? color : colors.primary)};
      top: 45%;
      right: 3px;
    }
  }

  button.on {
    background-color: ${({ color }) => (color ? color : " #cd382c")};
  }

  button.on .pin {
    left: 27px;
  }
`;
