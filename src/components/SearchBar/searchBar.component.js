import React from "react";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { SearchBarWrapper } from "./searchBar.styles";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { truncate } from "../../infrastructure/lib/factory.lib";

export const SearchBar = ({
  placeholder="Please input your search keywords",
  handleChange,
  fullWidth = true,
  height,
  xl = false,
  color = colors.black.strong,
}) => {
  return (
    <FlexibleDiv paddingVertical="0">
      <SearchBarWrapper
        fullWidth={fullWidth}
        height={height}
        xl={xl}
        color={color}
      >
        <input
          type="text"
          name="search"
          onChange={handleChange}
          placeholder={truncate(placeholder)}
        />
        <div className="svgWrapper">
          <SearchIcon color={colors.text.regular} className="svg" />
        </div>
      </SearchBarWrapper>
    </FlexibleDiv>
  );
};
