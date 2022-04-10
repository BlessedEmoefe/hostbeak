import React from "react";
import { generateID } from "./generateID";

export const variantMatch = {
  info: "info",
  danger: "error",
  primary: "primary",
  default: "grey",
  success: "success",
  warning: "warning",
  accent: "secondary",
  alternate: "alternate",
  secondary: "secondary",
};

export const isEmptyObject = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const getInputProps = (props, field) => {
  if (props.type === "textarea") {
    return <textarea {...field} {...props} />;
  } else if (props.input === "select") {
    if (props.optionstype === "country") {
      return (
        <select {...field}>
          <option disabled value={""} defaultValue={props.default} hidden>
            {props.default}
          </option>
          {props.options.map(({ emoji, name }) => {
            delete props.options;
            delete props.optionstype;

            return (
              <option {...props} key={generateID(12)}>
                {emoji} {name}
              </option>
            );
          })}
        </select>
      );
    } else {
      return (
        <select {...field}>
          <option disabled value={""} defaultValue={props.default} hidden>
            {props.default}
          </option>
          {props.options.map((
            option // changed this because of React's complain about "selectOptions" being an invalid DOM prop attribute.
          ) => (
            <option {...props} key={generateID(12)}>
              {option}
            </option>
          ))}
        </select>
      );
    }
  } else {
    return <input {...field} {...props} />;
  }
};
