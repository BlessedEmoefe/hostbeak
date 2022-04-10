import React from "react";
import {
  DividerLine,
  VerticalDividerLine,
  VerticalDividerLineWrapper,
} from "./divider.styled";

export const Divider = ({ ...otherProps }) => {
  return <DividerLine {...otherProps} />;
};

/*To use the vertical divider you have to make the position of the direct parent container or wrapper of the vertical divider relative. Add:
 ----- position: relative ------
 */
export const VerticalDivider = ({ ...otherProps }) => {
  return (
    <VerticalDividerLineWrapper
      width="auto"
      height="100%"
      paddingVertical="0"
      {...otherProps}
    >
      <VerticalDividerLine {...otherProps}></VerticalDividerLine>
    </VerticalDividerLineWrapper>
  );
};
