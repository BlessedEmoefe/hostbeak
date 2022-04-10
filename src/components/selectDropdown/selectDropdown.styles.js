import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SelectDropdownWrapper = styled("div")`
  /* margin-bottom: 20em; */
  width: ${({ width }) => width || "100%"};
  .select__wrapper {
    /* margin-top: 2em; */
    box-shadow: 6px 8px 10px 0px rgba(0, 0, 0, 0.08);
    text-align: left;
    width: 100%;
    border-radius: 6px;
    background: #fff;
    border: 1px solid ${colors.headerShade.light};
    display: flex;
    justify-content: center;
    // padding: 0.8em 0.2em;
    height: 45px;
    flex-direction: column;
    position: relative;
  }

  .select__wrapper h3 {
    margin: 0px;
  }

  .select {
    position: relative;
    text-align: left;
    cursor: pointer;
    position: relative;
  }

  .select::after {
    content: "";
    position: absolute;
    right: 0.8em;
    top: 0.3em;
    border: 0.5em solid ${colors.black.strong};
    border-color: ${colors.black.strong};
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-top: 0;
    border-top: 11px solid ${colors.black.strong};
    transition: 0.4s all ease-in-out;
  }

  .select__label {
    font-size: ${fontSizes.body};
    /* font-weight: 100; */
    opacity: 0.8;
    height: 40px;
    position: absolute;
    color: ${colors.black.strong};
  }

  .select__label p {
    transition: all 0.3s;
    margin-left: 15px;
    position: absolute;
    width: max-content;
    bottom: 0;
  }

  .select__value {
    font-weight: 400;
    padding-left: 0.9em;
    /* min-height: 20px; */
  }

  .select__value p {
    margin: 0px;
    min-height: 22px;
    height: min-content;
    font-size: 18px;
    font-weight: 400;
    color: black;
  }

  .select__options {
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    transition: opacity 0.2s, padding 0.2s, max-height 0.2s;
    overflow-y: scroll;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
    border: 0.06em solid ${colors.black.strong};
    background: #fff;
    border-radius: 0.25em;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;
  }
  .select__options::-webkit-scrollbar {
    display: none;
  }
  .select__options .select__option {
    padding: 13px;
    transition: all 0.2s;
    font-size: ${fontSizes.smallBody};
    font-weight: 400;
    color: ${colors.black.strong};
  }

  .select__options .select__option:hover {
    background: ${colors.white};
  }
  .select__options .select__option-active {
    background: ${colors.white};
    color: ${colors.black.strong};
  }

  .select-active .select__trigger {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 9;
    /* background:red; */
  }

  .select-active .select__options {
    max-height: 18em;
    opacity: 1;
    margin-top: 1.2em;
  }

  .select-active .select__label,
  .select.selected .select__label {
    font-size: 13px;
    font-weight: 900;
    opacity: 1;
    display: none;
  }

  .select-active .select__label p,
  .select.selected .select__label p {
    margin-top: 0px;
    margin-left: 0px;
  }

  .select-deactive .select__value {
    animation: fadeIn 0.3s;
  }

  .select-deactive .select__options {
    background: mediumpurple;
    max-height: 0px;
    opacity: 0;
  }
  .select-active {
    transition: 0.4s all ease-in-out;
  }

  .select-active.select::after {
    transform: rotate(-180deg);
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-bottom: 0;
    border-top: 11px solid ${colors.black.strong};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
