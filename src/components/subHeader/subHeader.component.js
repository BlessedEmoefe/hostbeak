import React from "react";
import { SearchBar } from "../SearchBar/searchBar.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  SubHeaderContainer,
  DirectorySection,
  SearchBarSection,
  ButtonSection,
  MainDirectory,
  DropDownWrapper,
  Wrapper,
} from "./subHeader.styles";
import { Button } from "../button/button.component";
import { SelectDropdown } from "../selectDropdown/selectDropdown.component";

export const SubHeader = ({ directory, searchBar, btnText }) => {
  const handleNewCustomer = () => {
    console.log("Hello New customer being created");
  };
  return (
    <SubHeaderContainer>
      <DirectorySection paddingVertical="0">
        <MainDirectory>{directory}</MainDirectory>
      </DirectorySection>
      <Wrapper paddingVertical={"0"}>
        {searchBar ? (
          <SearchBarSection paddingVertical="0">
            <SearchBar
              placeholder="Search"
              handleChange={() => {
                handleNewCustomer();
              }}
              color={colors.black.regular}
            />
          </SearchBarSection>
        ) : null}
        <DropDownWrapper paddingVertical="0">
          <SelectDropdown  selectOptions={["option1","option1","option1","option1","option1"]}
  selectLabel={"Filter Options"}
  color={colors.black.strong}/>
        </DropDownWrapper>

        <ButtonSection paddingVertical="0">
          {btnText ? (
            <Button btnText={btnText} onClick={handleNewCustomer} />
          ) : null}
        </ButtonSection>
      </Wrapper>
    </SubHeaderContainer>
  );
};
