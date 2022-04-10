import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";


export const DrawerWrap = styled("div")`
  // @keyframes rippleForward {
  //   0% {
  //     transform: scale(0);
  //   }
  //   100% {
  //     transform: scale(1);
  //     background: transparent;
  //   }
  // }
  // @keyframes rippleBack {
  //   0% {
  //     transform: scale(0);
  //   }
  //   100% {
  //     background: transparent;
  //     transform: scale(1);
  //   }
  // }
`;

export const DesktopMainContainer = styled.div`
  /*The width below stands for the width of the drawer when it opens and closes hence if there is more test in each list it can be increased*/
  width: ${({ smallDrawer }) => (smallDrawer ? "200px" : "50px")};
  height: 100%;
  background: ${({ background }) => (background ? background : "#fff")};
  position: fixed;
  border-right: 1px solid ${colors.shade};
  z-index: 10001;
  top: 0;
  transition: 300ms ease-in-out;
  overflow: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Iconize = styled(FlexibleDiv)`
  margin-left: ${({ smallDrawer }) => (smallDrawer ? "-2px" : "13px")};
  justify-content: center;
  top: 10px;
  padding: 10px 3px;
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  :hover {
    background: #88898c1a;
  }
`;
export const Ripple = styled.div``;
export const Container = styled.div`
  padding-top: 20px;
`;
export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const Li = styled.li`
  margin: 5px 0;
  cursor: pointer;
  border-right: 3px solid transparent;
  font-weight: 400;
`;
export const DrawerItem = styled.div`
  padding: 15px 12px;
  min-width: ${({ smallDrawer }) => smallDrawer && " 195px"};
  transition: 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  // background: blue;
  align-items: center;

  :hover {
    background: ${colors.bg.lightBg};
    border-left: 3px solid ${colors.purple};
    span {
      color: ${colors.purple};
    }
    .rightIcon {
      color: ${colors.purple};
      background:red;
    }

    @keyframes fade {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        visibility: collapse;
        opacity: 0;
      }
    }
  }
`;
export const IconTextWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
  // background: teal;
  width: auto;
`;
export const LogoMain = styled.div`
  width: auto;
  margin-right: 13px;
  transition: 300ms ease-in-out;
`;
export const Name = styled.span`
  font-size: 0.9rem;
  color: ${({ pageSection }) =>
    pageSection ? colors.purple : colors.black.regular};
  white-space: nowrap;
  transition: 300ms ease-in-out;
  min-width: ${({ smallDrawer }) => !smallDrawer && "80%"};
  animation: ${({ smallDrawer }) => !smallDrawer && "fade 300ms forwards"};
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  // background: teal;
  width: auto;
  // .rightIcon {
  /* color: ${({ pageSection }) =>
      pageSection ? colors.purple : colors.black.regular};*/
  //   color: red;
  // }

  svg{
    color:teal;
  }
`;


export const DropDown = styled.div`
  padding: 0 0 0 1.5rem;
  display: ${({ pageSection }) => (pageSection ? "flex" : "none")};
  height: auto;
  width: 100%;
  flex-direction: column;
`;
export const DropDownNav = styled.div`
  // background: blue;
  padding: 5px 2px;
  color: ${({ smallDrawer }) =>
    smallDrawer ? colors.purple : colors.black.regular};
  font-weight: ${({ smallDrawer }) =>
    smallDrawer ? fontWeights.medium : fontWeights.regular};

  :hover {
    cursor: pointer;
  }
`;
export const ModalMainContainerOverlay = styled.div`
  width: ${({ noDrawer }) => (noDrawer ? "100%" : "0px")};
  height: 100%;
  background: ${({ background }) => (background ? background : "#06000061")};
  visibility: ${({ noDrawer }) => (noDrawer ? "visible" : "hidden")};
  position: fixed;
  z-index: 10005;
  top: 0;
  @media (min-width: 600px) {
    display: none;
  }
`;
export const ModalMainContainer = styled.div`
  z-index: 10006;
  background: #fff;
  position: fixed;
  width: ${({ noDrawer }) => (noDrawer ? "200px" : "0px")};
  visibility: ${({ noDrawer }) => (noDrawer ? "visible" : "hidden")};
  height: 100%;
  top: 0;
  transition: 300ms ease-in-out;
  overflow: hidden;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const RightArrow = styled.div`
  transform: rotate(180deg);
  top: 16px;
  left: auto;
  right: 10px;
`;
