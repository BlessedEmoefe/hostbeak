import React, { useState } from "react";
import { SelectDropdownWrapper } from "./selectDropdown.styles";

const Select = ({ onChange, id, value, label, options = [] }) => {
  const [active, setActive] = useState(false);
  // const [values, setSetValues] = useState(false);
  const handleClick = (e) => {
    // setSetValues(e.currentTarget.innerText);
    setActive(false);

    if (typeof onChange !== "undefined") {
      onChange(e.currentTarget.dataset.value, id);
    }
  };

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        "select" +
        (active ? " select-active" : " select-deactive") +
        (typeof value !== "undefined" && value.length ? " selected" : "")
      }
      onClick={toggleActive}
    >
      <div className="select__label">
        <p>{label}</p>
      </div>

      <div className="select__value">
        <p>{value}</p>
      </div>

      <div className="select__options">
        {options.map((option) => {
          let type =
            option.constructor === String
              ? "String"
              : option.constructor === Object
              ? "Object"
              : false;

          option = type === "String" ? { [option]: option } : option;

          return type ? (
            <div
              className={
                "select__option" +
                (value === option[Object.keys(option)[0]]
                  ? " select__option-active"
                  : "")
              }
              onClick={handleClick}
              data-value={option[Object.keys(option)[0]]}
              key={option[Object.keys(option)[0]]}
            >
              {Object.keys(option)[0]}
            </div>
          ) : (
            ""
          );
        })}
      </div>

      <div className="select__trigger" onClick={toggleActive} />
    </div>
  );
};

export const SelectDropdown = ({
  selectOptions,
  selectLabel,
  color,
  width,
}) => {
  const [values, setValues] = useState({ selected: "" });

  const response = (value, id) => {
    setValues({
      [id]: value,
    });
  };

  console.log(values.selected);
  const options = ["Please add options... "];

  return (
    <SelectDropdownWrapper color={color} width={width}>
      <div className="select__wrapper">
        <Select
          options={selectOptions || options}
          label={selectLabel || "filter Options"}
          onChange={response}
          value={values.selected}
          id="selected"
        />
      </div>
    </SelectDropdownWrapper>
  );
};

// SelectDropdown.propTypes = {
//   selectOptions: PropTypes.array.isRequired,
//   selectLabel: PropTypes.string.isRequired,
//   color: PropTypes.string,
//   width: PropTypes.string,
// };
