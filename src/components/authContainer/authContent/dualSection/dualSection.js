import React from "react";
import {
  DualSectionWrapper,
  Wrapper,
  Title,
  SubTitle,
  ForgotPasswordText,
  ActiveLink,
} from "./dualSection.styles";

// import { RiShieldUserLine as MiniAdminIcon } from "react-icons/ri";
// import { FaUserShield as AdminIcon } from "react-icons/fa";
import { FaUserFriends as TellerIcon } from "react-icons/fa";

import { Spacer } from "../../../spacer/spacer.component";
import { VerticalDivider } from "../../../divider/divider.component";
import { Input } from "../../../input/input.component";
import { colors } from "../../../../infrastructure/theme/colors";
import { Button } from "../../../button/button.component";
import { fontSizes } from "../../../../infrastructure/theme/fonts";
import { useNavigate } from "react-router-dom";

export const DualSection = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/overview");
  };
  return (
    <DualSectionWrapper paddingVertical>
      <Wrapper width="45%">
        <TellerIcon size="50px" color={colors.black.strong} />
        <Title>Welcome Back Teller</Title>
        <Spacer />
        <SubTitle>Kindly fill in the details to access your portal</SubTitle>
        <Spacer />
      </Wrapper>
      <VerticalDivider />
      <Wrapper width="45%">
        <Input
          name="Hello world"
          innerLabel="Username"
          type="text"
          placeholder="Input Username"
        />
        <Spacer />
        <Input
          name="Hello world"
          innerLabel="Secrete key"
          type="password"
          placeholder="Secrete Key"
        />
        <Spacer />

        <Wrapper>
          <ForgotPasswordText>
            Forgot Password? <ActiveLink>Contact Admin</ActiveLink>
          </ForgotPasswordText>
        </Wrapper>
        <Button
          btnText="Sign In"
          textTransform="uppercase"
          fontSize={fontSizes.smallBody}
          onClick={handleSignIn}
          size="large"
        />
        <Wrapper>
          <ForgotPasswordText>
            Don't have an account?
            <ActiveLink>Contact Admin</ActiveLink>
            to create one
          </ForgotPasswordText>
        </Wrapper>
      </Wrapper>
    </DualSectionWrapper>
  );
};
