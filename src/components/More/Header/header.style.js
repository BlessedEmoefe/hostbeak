/*
 * style: header styles
 * author: Eze bernardine May
 * Date: April 15, 2020
 * General header styles
 */

import styled from "styled-components";
const drawer = "200px";

export const HeaderContainer = styled('div')`
  position: fixed;
  width: ${({ smallDrawer }) =>
    smallDrawer ? `calc(100% - ${drawer})` : " calc(100% - 50px)"};
  z-index: 100;
  transition: 300ms ease-in-out;
  display: flex;
  height: 60px;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  margin: 0 0 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5%;
  height: 100%;
  @media (max-width: 800px) {
    padding: 0.5rem 3%;
  }
  top: 0;
  z-index: 1000;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.27);
  height: 100%;
  position: absolute;

  .major {
    width: 75%;
    height: 100%;
    @media (max-width: 800px) {
      width: 100%;
    }
    @keyframes rippleforward {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        background: transparent;
      }
    }
    @keyframes rippleBack {
      0% {
        transform: scale(0);
      }
      100% {
        background: transparent;
        transform: scale(1);
      }
    }
    .iconize {
      position: relative;
      left: ${({ smallDrawer }) => (!smallDrawer ? "0" : "15px")};
      right: ${({ smallDrawer }) => (!smallDrawer ? "0" : "auto")};

      padding: 8px;
      border-radius: 50%;
      height: 35px;
      width: 35px;
      overflow: hidden;
      cursor: pointer;
      .ripple {
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: ${({ smallDrawer }) =>
          !(smallDrawer === "true") && "#6a666642"};
        animation: ${({ smallDrawer }) =>
          smallDrawer
            ? " rippleforward 300ms ease-in-out forwards"
            : "rippleBack 300ms ease-in-out forwards"};
        position: absolute;
        border-radius: 50%;
      }
      &:hover {
        background: #88898c1a;
      }
      @media (min-width: 600px) {
        display: none;
      }
    }
    .logo {
      width: 70px;
      @media (max-width: 800px) {
        width: 50px;
      }
      cursor: pointer;
      .mainLogo {
        display: block;
      }

      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  .inputMain {
    width: 70%;
    padding: 5px 0;
    background: #f4f6fc;
    height: 40px;
    color: #6c6c71;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.13);

    .input {
      flex: 1;
      input {
        color: #6c6c71;
        width: 100%;
        border: none;
        height: 100%;
        padding: 0 10px;
        background: transparent;
      }
    }
    .search {
      width: 40px;
    }
    .cancel {
      width: 40px;
      font-weight: 400;
      font-size: 1.3rem;
      cursor: pointer;
    }

    @media (max-width: 800px) {
      height: 35px;
    }
  }
  .desktopSection {
    width: max-content;
    .icons {
      & > div {
        position: relative;
        margin: 0 10px;
        height: 35px;
        width: 35px;
        cursor: pointer;
        @media (max-width: 800px) {
          height: 100%;
          width: 100%;
          padding: 7px 20px;
          margin: 5px 0;
        }
        &:hover {
          /* background: #bfc5d233; */
          border-radius: 50%;
          @media (max-width: 800px) {
            border-radius: 0%;
            background: #ff66001c;
            margin: 5px 0;
          }
        }
      }
      .notifyMeassage {
        position: absolute;
        background: #dc3545;
        border-radius: 50%;
        font-size: 11px;
        font-weight: bold;
        height: 20px;
        width: 20px;
        top: -2px;
        left: 24px;
        div {
          color: white;
          height: 20px;
          width: 20px;
          font-size: 10px;
          overflow: hidden;
        }
      }
      .profileMain {
        border-radius: 50%;
        height: 90%;
        width: 90%;
        overflow: hidden;
        /* background: #f4f6fc; */
      }

      @media (max-width: 800px) {
        /* padding: 0 20px; */
        flex-direction: column;
      }
    }
    @keyframes rollDown {
      0% {
        height: 0;
        overflow: hidden;
        padding: 0px 0;
      }
      100% {
        padding: 20px 0;
        height: 165px;
        overflow: hidden;
      }
    }
    @keyframes rollUp {
      0% {
        height: 165px;
        overflow: hidden;
        padding: 20px 0;
      }
      100% {
        height: 0;
        overflow: hidden;
        padding: 0 0;
        visibility: hidden;
      }
    }
    @media (max-width: 800px) {
      position: absolute;
      background: #fff;
      align-self: flex-end;
      width: max-content;
      top: 60px;
      z-index: 10007;
      max-width: 60px;
      display: ${({ showMenu }) => (showMenu === undefined ? "none" : "block")};
      animation: ${props =>
        props.showMenu
          ? "rollDown .2s ease-in-out forwards"
          : "rollUp .2s  ease-in-out forwards"};
    }
  }
  .mobileOverlay {
    position: fixed;
    height: 100%;
    width: ${({ showMenu }) => (showMenu ? "100%" : "0px")};
    visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
    background: #06000061;
    z-index: 10005;
    top: 0;
    @media (min-width: 800px) {
      display: none;
    }
  }

  .mobileMenuIcon {
    display: none;
    @media (max-width: 800px) {
      display: flex;
      & > div:hover {
        background: ${({ showMenu }) => (showMenu ? "#b5f9fb0d" : "#eceae8")};
      }
      svg {
        fill: #8a8c8b;
      }
    }
  }
  .focused {
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.2) !important;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Icon = styled('div')`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: #ddd;
  }

  svg {
    font-size: 1.5rem;
    color: #a85d2a;
  }
`;
