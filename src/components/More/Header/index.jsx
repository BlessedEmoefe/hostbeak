import React, { useState, useEffect } from "react";
import { HeaderContainer, HeaderBox, Icon } from "./header.style";
import { MdMenu as MenuIcon, MdClose as CloseIcon } from "react-icons/md";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import Logo from "../../../assets/images/logo.png";
import {
  NotificationIcon,
  AvatarIcon2,
  MessageIcon,
  CloseIcon as CLIcon,
  SearchIcon,
  RightArrowIcon
} from "../../../assets/svg";

const Header = ({ smallDrawer, handleNoDrawer }) => {
  const [showMenu, setShowMenu] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");
  const [focusedOnSearch, setFocusedOnSearch] = useState(false);

  return (
    <HeaderContainer smallDrawer={smallDrawer}>
       <HeaderBox showMenu={showMenu}>
         <FlexibleDiv
          className="major"
          justifyContent="space-between"
          flexWrap="nowrap"
        >
          <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
            <div className="ripple" />
            <RightArrowIcon width="20px" height="20px" color="#b3b3b9" />
          </div>

          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" className="mainLogo" />
            </a>
          </div>

          <FlexibleDiv
            className={focusedOnSearch ? "inputMain focused" : "inputMain"}
            flexWrap="nowrap"
            alignItems="stretch"
          >
            <FlexibleDiv className="search">
              <SearchIcon
                width="15px"
                height="15px"
                color={focusedOnSearch ? "#b3b3b9" : "#BFC5D2"}
              />
            </FlexibleDiv>
            <div className="input">
              <input
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search"
                onFocus={() => setFocusedOnSearch(true)}
                onBlur={() => setFocusedOnSearch(false)}
              />
            </div>
            {searchValue.length > 0 && (
              <FlexibleDiv
                className="cancel"
                onClick={() => setSearchValue("")}
              >
                <CloseIcon
                  width="20px"
                  height="20px"
                  color={focusedOnSearch ? "#b3b3b9" : "#BFC5D2"}
                />
              </FlexibleDiv>
            )}
          </FlexibleDiv>

          <div className={"mobileMenuIcon"}>
            <Icon>
              <MenuIcon onClick={() => setShowMenu(!showMenu)} />
            </Icon>
          </div>
        </FlexibleDiv>

        <div className="mobileOverlay" onClick={() => setShowMenu(!showMenu)} />
       <FlexibleDiv
          className="desktopSection"
          flexWrap="nowrap"
          justifyContent="space-between"
        >
          <FlexibleDiv
            className="icons"
            flexWrap="nowrap"
            justifyContent="flex-end"
          >
            <FlexibleDiv className="notifcationMain">
              <FlexibleDiv className="notifyMeassage">
                <FlexibleDiv>10</FlexibleDiv>
              </FlexibleDiv>
              <NotificationIcon width="20px" height="20px" color="#b3b3b9" />
            </FlexibleDiv>

            <FlexibleDiv className="messageMain">
              <FlexibleDiv className="notifyMeassage">
                <FlexibleDiv>10</FlexibleDiv>
              </FlexibleDiv>
              <MessageIcon width="20px" height="20px" color="#b3b3b9" />
            </FlexibleDiv>

            <FlexibleDiv>
              <FlexibleDiv className="profileMain">
                <AvatarIcon2 width="20px" height="20px" color="#b3b3b9" />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv> 
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
