import React, { useState } from "react";
import {
  HeaderContainer,
  InnerWrapper,
  SearchBarSection,
  HeaderInfoSection,
  NotificationContainer,
  NotificationIcon,
  Ribbon,
  RibbonText,
  UserProfileContainer,
  UserProfilePreview,
  UserProfileImage,
} from "./header.styles";
import {
  MdDashboardCustomize as MenuIcon,
  // MdClose as CloseIcon,
} from "react-icons/md";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import { SearchBar } from "../SearchBar/searchBar.component";
import { BottomArrowIcon } from "../../assets/svg";
import ProfileImage from "../../assets/images/passport.jpg";
import { VerticalDivider } from "../divider/divider.component";

const Header = ({ smallDrawer, handleNoDrawer }) => {
  // const [displayNav, setDisplayNav] = useState(false);
  const [showMenu] = useState(undefined);
  // const toggleNav = () => {
  //   setDisplayNav(!displayNav);
  // };
  return (
    <HeaderContainer smallDrawer={smallDrawer}>
      <InnerWrapper showMenu={showMenu}>
        <FlexibleDiv className="major">
          <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
            <div className="ripple" />
            <MenuIcon size="20px" color={colors.primary} />
          </div>
        </FlexibleDiv>
        <SearchBarSection>
          <SearchBar
            xl
            placeholder="Ask us any question"
            handleChange={() => {
              // handleNewCustomer();
            }}
            color={colors.black.strong}
          />
        </SearchBarSection>

        <HeaderInfoSection>
          <NotificationContainer
            onClick={() => {
              console.log("Notification button Clicked");
            }}
          >
            <NotificationIcon />
            <Ribbon>
              <RibbonText>3</RibbonText>
            </Ribbon>
          </NotificationContainer>

          <VerticalDivider
            height={"100%"}
            
            // resFlexDirection={"row"}
            margin="0 0.8rem"
            background={colors.shade}
          />

          <UserProfileContainer
            onClick={() => {
              console.log("Profile button Clicked");
            }}
          >
            <UserProfilePreview>
              <UserProfileImage src={ProfileImage} alt="profile-Image" />
            </UserProfilePreview>
            <BottomArrowIcon />
          </UserProfileContainer>
        </HeaderInfoSection>

        {/* <div className="mobileOverlay" onClick={() => setShowMenu(!showMenu)} />*/}
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
