import React from "react";
import { UserTypeCardContainer, UserTypeText } from "./UserTypeCard.styles";
import { colors } from "../../infrastructure/theme/colors";
import { useNavigate } from "react-router-dom";

export const UserTypeCard = ({ text, Icon, path }) => {
  const navigate = useNavigate();
 

  const handleUserType = (path) => {
    // return
    navigate(path);
  };

  return (
    <UserTypeCardContainer onClick={() => { handleUserType(path) }}>
      <Icon color={colors.black.strong} size="25px" />
      <UserTypeText>{text}</UserTypeText>
    </UserTypeCardContainer>
  );
};
