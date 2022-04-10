import React from "react";
import {
  PageWrapper,
  ContentContainer,
  Wrapper,
  Title,
  SubTitle,
} from "./UserType.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { UserTypeCard } from "../../components/UserTypeCard/UserTypeCard.component";

import { RiShieldUserLine as MiniAdminIcon } from "react-icons/ri";
import { FaUserShield as AdminIcon } from "react-icons/fa";
import { FaUserFriends as TellerIcon } from "react-icons/fa";

const UserType = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title>Select who you are to sign in</Title>
        <Spacer />
        <SubTitle>
          Kindly fill in the details below to access your portal
        </SubTitle>
        <Spacer />
        <Wrapper>
          <UserTypeCard
            text="Teller"
            Icon={TellerIcon}
            path="/signin"
          />
          <Spacer size="small" />
          <UserTypeCard
            text="Mini Admin"
            Icon={MiniAdminIcon}
            onClick={() => {
              console.log("Hello 1");
            }}
          />
          <Spacer size="small" />
          <UserTypeCard
            text="Admin"
            Icon={AdminIcon}
            onClick={() => {
              console.log("Hello 1");
            }}
          />
        </Wrapper>
      </ContentContainer>
    </PageWrapper>
  );
};

export default UserType;
