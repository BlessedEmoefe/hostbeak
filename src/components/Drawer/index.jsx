import React, { useState } from "react";
import {
  DrawerWrap,
  DesktopMainContainer,
  Iconize,
  Ripple,
  Container,
  Ul,
  Li,
  DrawerItem,
  IconTextWrapper,
  LogoMain,
  Name,
  IconWrapper,
  DropDown,
  DropDownNav,
  ModalMainContainerOverlay,
  ModalMainContainer,
  RightArrow,
} from "./drawer.styles";
import { drawerItems } from "./drawerItems";

import { generateID } from "../../infrastructure/lib/generateID";
import { useNavigate
  // , useLocation 
} from "react-router-dom";
import { UserLogoCard } from "../userLogoCard/userLogoCard.component";
import { BottomArrowIcon, RightArrowIcon } from "../../assets/svg";

export const Drawer = ({
  handleSmallDrawer,
  smallDrawer,
  noDrawer,
  background,
}) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [page, setPage] = useState(true);
  const [pageSection, setPageSection] = useState("");
  // const handlePageSection = (name) => {
  //   pageSection === name ? setPageSection(false) setPage() : setPageSection(name);
  //   console.log(`Name: ${name}, PageSection: ${pageSection}`);
  // };
  // const isActive = (href) => location.pathname === href;

  return (
    <DrawerWrap
      smallDrawer={smallDrawer}
      noDrawer={noDrawer}
      background={background}
    >
      <DesktopMainContainer smallDrawer={smallDrawer} background={background}>
        <Iconize
          smallDrawer={smallDrawer}
          className="enlargeDrawer"
          onClick={() => handleSmallDrawer()}
        >
          <Ripple />
          <UserLogoCard />
        </Iconize>
        {/* <DrawerProfileCard smallDrawer={smallDrawer} /> */}
        <Container>
          <Ul>
            {drawerItems.map(({ path, logo, name }) => {
              return (
                <Li>
                  <DrawerItem
                    smallDrawer={smallDrawer}
                    onClick={() =>
                      pageSection === name
                        ? setPage(false)
                        : (setPage(true),
                          setPageSection(name),
                          console.log(page))
                    }
                    key={generateID(20)}
                    pageSection={
                      page === true && pageSection === name ? true : false
                    }
                  >
                    <IconTextWrapper>
                      <LogoMain>{logo}</LogoMain>
                      <Name
                        pageSection={pageSection === name ? true : false}
                        smallDrawer={smallDrawer}
                      >
                        {name}
                      </Name>
                    </IconTextWrapper>
                    <IconWrapper>
                      {pageSection === name ? (
                        <BottomArrowIcon />
                      ) : (
                        <RightArrowIcon />
                      )}
                    </IconWrapper>
                  </DrawerItem>
                  <DropDown pageSection={pageSection === name ? true : false}>
                    <DropDownNav
                      smallDrawer={smallDrawer}
                      pageSection={pageSection === name ? true : false}
                      onClick={() => navigate(path)}
                    >
                      Main
                    </DropDownNav>
                    <DropDownNav>Peace Maker</DropDownNav>
                    <DropDownNav>Instint Buys</DropDownNav>
                  </DropDown>
                </Li>
              );
            })}
          </Ul>
        </Container>
      </DesktopMainContainer>
    </DrawerWrap>
  );
};

export const ModalDrawer = ({
  smallDrawer,
  noDrawer,
  handleNoDrawer,
  background,
}) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const isActive = (href) => location.pathname === href;
  const [page, setPage] = useState(true);
  const [pageSection, setPageSection] = useState("");

  return (
    <DrawerWrap
      smallDrawer={smallDrawer}
      noDrawer={noDrawer}
      background={background}
    >
      <ModalMainContainerOverlay
        noDrawer={noDrawer}
        background={background}
        onClick={() => handleNoDrawer()}
      />

      <ModalMainContainer noDrawer={noDrawer}>
        <RightArrow onClick={() => handleNoDrawer()}>
          <Ripple />
          <RightArrowIcon width="20px" height="20px" color="red" />
        </RightArrow>
        <UserLogoCard />
        <Container>
          <Ul>
            {drawerItems.map(({ path, logo, name }) => {
              return (
                <Li>
                  <DrawerItem
                    onClick={() =>
                      pageSection === name
                        ? setPage(false)
                        : (setPage(true),
                          setPageSection(name),
                          console.log(page))
                    }
                    key={generateID(20)}
                    pageSection={
                      page === true && pageSection === name ? true : false
                    }
                  >
                    <IconTextWrapper>
                      <LogoMain>{logo}</LogoMain>
                      <Name
                        smallDrawer={smallDrawer}
                        pageSection={pageSection === name ? true : false}
                      >
                        {name}
                      </Name>
                    </IconTextWrapper>
                    <IconWrapper>
                      {pageSection === name ? (
                        <BottomArrowIcon />
                      ) : (
                        <RightArrowIcon />
                      )}
                    </IconWrapper>
                  </DrawerItem>
                  <DropDown pageSection={pageSection === name ? true : false}>
                    <DropDownNav
                      smallDrawer={smallDrawer}
                      pageSection={pageSection === name ? true : false}
                      onClick={() => navigate(path)}
                    >
                      Main
                    </DropDownNav>
                    <DropDownNav>Peace Maker</DropDownNav>
                    <DropDownNav>Instint Buys</DropDownNav>
                  </DropDown>
                </Li>
              );
            })}
          </Ul>
        </Container>
      </ModalMainContainer>
    </DrawerWrap>
  );
};
