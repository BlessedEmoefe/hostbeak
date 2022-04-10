import React from "react";
import {
  ActivityHistoryCardContainer,
  ImageWrapper,
  InfoSection,
  Wrapper,
  Image,
  InfoText,
  UserName,
  ViewNarrationText,
  TimeStamp,
} from "./activityHistoryCard.styles";
import { WithdrawArrowIcon, DepositArrowIcon } from "../../../assets/svg";
import { colors } from "../../../infrastructure/theme/colors";

export const ActivityHistoryCard = ({
  profileImage,
  userName,
  amount,
  deposite,
  withdraw,
  timestamp,
}) => {
  return (
    <ActivityHistoryCardContainer paddingVertical="0">
      <ImageWrapper paddingVertical="0">
        <Image src={profileImage} alt="profile picture" />
      </ImageWrapper>
      <InfoSection paddingVertical="0">
        <Wrapper>
          <InfoText>
            <UserName>{userName}</UserName>
            {deposite ? ` deposited` : withdraw ? "withdrew" : "None"} rate of{" "}
            {amount}NGA savings line
          </InfoText>
        </Wrapper>
        <Wrapper>
          <ViewNarrationText>View Narration</ViewNarrationText>
        </Wrapper>
      </InfoSection>
      <Wrapper paddingVertical="0" width="30%" justifyContent="center">
        {withdraw ? (
          <WithdrawArrowIcon color={colors.red} />
        ) : deposite ? (
          <DepositArrowIcon color={colors.green} />
        ) : (
          <DepositArrowIcon color={colors.green} />
        )}
      </Wrapper>
      <Wrapper paddingVertical="0" width="16%" justifyContent="flex-end">
        <TimeStamp>{timestamp}</TimeStamp>
      </Wrapper>
    </ActivityHistoryCardContainer>
  );
};
