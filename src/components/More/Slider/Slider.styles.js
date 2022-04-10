import styled from "styled-components";

export const SliderContainer = styled('div')`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "60vh")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .dotContainer {
    position: absolute;
    padding-bottom: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    transition: 1s linear;

    .active {
      background: ${({ Active_dotColor }) =>
        Active_dotColor ? Active_dotColor : "#FF6600"};
      width: 3rem;
      border-radius: 10px;
      height: 0.4rem;
      margin-right: 1rem;
      transition: 1s;
    }

    .unActive {
      /* // position:absolute; */
      width: 1.5rem;
      height: 0.4rem;
      background: ${({ unActive_dotColor }) =>
        unActive_dotColor ? unActive_dotColor : "white"};
      border-radius: 10px;
      margin-right: 1rem;
      transition: 1s;
    }
  }

  .SliderBox {
    overflow-x: visible;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    animation: fadeIn 10s;
    transform: translateX(
      ${({ translate }) => (translate ? -translate : null) * 100}vw
    );
    /* animation:fadeIn ease 10s; */
    transition: 1.5s ease-in-out;

    @keyframes fadeIn {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    .slide {
      width: ${({ Slide_width }) => (Slide_width ? Slide_width : "100vw")};
      min-width: ${({ Slide_width }) => (Slide_width ? Slide_width : "100vw")};
      height: 100%;
      border: none;
      background-repeat: no-repeat;
      background-position: center center;
      /* background-position: center-top; */
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .TitleContainer {
        width: ${({ titleWidth }) => (titleWidth ? titleWidth : "45%")};
        font-weight: 500;
        font-size: ${({ fontSize }) => (fontSize ? fontSize : "3rem")};
        text-align: center;
        color: ${({ titleColor }) => (titleColor ? titleColor : "white")};
        padding-bottom: 8vh;
      }
    }
  }

  @media (max-width: 600px) {
    .SliderBox {
      .slide {
        align-items: center;

        .TitleContainer {
          width: 85%;
          font-size: 2rem;
        }
      }
    }
  }
`;
