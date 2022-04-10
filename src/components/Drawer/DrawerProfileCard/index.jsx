import React from "react";
import {
  DrawerProfileCardWrap,
  ProfileImageWrapper,
  PictureFrame,
  InfoWrapper,
  Title,
  SubTitle,
} from "./styles";
import { AvatarIcon3 } from "../../../assets/svg";
import UserImage from "../../../assets/images/cq5dam.web.461.259(2).jpeg";
import {
  capitalizeWords,
  truncate,
} from "../../../infrastructure/lib/factory.lib";
import { colors } from "../../../infrastructure/theme/colors";
// import { ROLE_MATCHER } from "../../../infrastructure/lib/constants";
// import AppContext from "../../../infrastructure/store/context";

const DrawerProfileCard = ({ smallDrawer }) => {
  // const {user} = useContext(AppContext);
  const user = {
    fullName: "Hi, Blessed Emoefe",
  };

  return (
    <DrawerProfileCardWrap
      paddingVertical="0"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexWrap="no-wrap"
      flexDirection="column"
    >
      <ProfileImageWrapper paddingVertical="0">
        <PictureFrame paddingVertical="0" smallDrawer={smallDrawer}>
          {UserImage ? (
            <img src={UserImage} alt="user" />
          ) : (
            <AvatarIcon3 width="100%" height="100%" />
          )}
        </PictureFrame>
      </ProfileImageWrapper>

      <InfoWrapper
        className="profile-detail"
        flexDirection="column"
        justifyContent="flex-start"
        paddingVertical="0"
        smallDrawer={smallDrawer}
      >
        <Title>{truncate(capitalizeWords(user.fullName), 18)}</Title>
        <SubTitle>
          Teller ID: <SubTitle color={colors.primary}>001A</SubTitle>
        </SubTitle>
      </InfoWrapper>
    </DrawerProfileCardWrap>
  );
};

export default DrawerProfileCard;
