import React from "react";
import {
  UserLogoCardContainer,
  LogoText,
  UserMail,
} from "./userLogoCard.styles";

export const UserLogoCard = () => {
  return (
    <UserLogoCardContainer
      flexDirection="column"
      paddingVertical={"7px"}
      boxedLayout
    >
      <LogoText>Metacare</LogoText>

      <UserMail>blemo@gmail.com</UserMail>
    </UserLogoCardContainer>
  );
};
