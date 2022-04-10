import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";

export const DrawerProfileCardWrap = styled(FlexibleDiv)`
  height: auto;
  /* background-color: green; */
  /* box-shadow: 2px 4px 10px -1px rgba(0, 0, 0, 0.12); */
  margin-top: 80px;
  padding: 0.3rem;
  position: relative;
  &:before {
    bottom: 0;
    right: 0%;
    left: 0;
    height: 1px;
    content: "";
    width: 100%;
    position: absolute;
    background: -moz-linear-gradient(
      left,
      #f5f5f5 2%,
      #bdbdbd 50%,
      #f5f5f5 98%
    );
  }
`;

export const ProfileImageWrapper = styled(FlexibleDiv)`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
`;

export const PictureFrame = styled(FlexibleDiv)`
  border-radius: 50%;
  overflow: hidden;
  width: 90px;
  height: 90px;
  box-shadow: 2px 4px 10px -1px rgba(0, 0, 0, 0.12);
  @keyframes decreaseImage {
    0% {
      width: 90px;
      height: 90px;
    }
    50% {
      width: 45px;
      height: 45px;
    }
    100% {
      width: 30px;
      height: 30px;
    }
  }
  animation: ${({ smallDrawer }) =>
    !smallDrawer && "decreaseImage 300ms forwards"};
  img {
    height: 100%;
    width: 100%;
  }
`;

export const InfoWrapper = styled(FlexibleDiv)`
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
  animation: ${({ smallDrawer }) => !smallDrawer && "fade 300ms forwards"};
`;

export const Title = styled(Text)`
  font-size: ${fontSizes.body};
  font-weight: ${fontWeights.bold};
  color: ${({ color }) => (color ? color : colors.black.strong)};
  white-space: nowrap;
`;
export const SubTitle = styled(Text)`
  font-size: ${fontSizes.smallBody};
  color: ${({ color }) => (color ? color : colors.black.strong)};
  display: inline;
  white-space: nowrap;
`;
