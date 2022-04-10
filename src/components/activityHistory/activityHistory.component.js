import {
  ActivityHistoryContainer,
  HeaderSection,
  BodySection,
  Wrapper,
  Title,
  SeeAllText,
} from "./activityHistory.styles";
import { ActivityHistoryIcon } from "../../assets/svg";
import { colors } from "../../infrastructure/theme/colors";
import { ActivityHistoryCard } from "./activityHistoryCard/activityHistoryCard.component";
import { Spacer } from "../spacer/spacer.component";

import Image1 from "../../assets/images/image.png";

export const ActivityHistorySection = () => {
  const ActivityHistoryCardData = [
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      withdraw: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      withdraw: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
  ];

  console.log(ActivityHistoryCardData.length);

  return (
    <ActivityHistoryContainer>
      <HeaderSection paddingVertical="0">
        <Wrapper>
          <ActivityHistoryIcon color={colors.primary} />
          <Title>Activity History</Title>
        </Wrapper>
        <Wrapper>
          <SeeAllText>See All</SeeAllText>
        </Wrapper>
      </HeaderSection>
      <BodySection >
        {ActivityHistoryCardData.map(
          (
            { profileImage, userName, amount, deposite, withdraw, timestamp },
            index
          ) => (
            <>
              <Spacer size="medium" />
              <ActivityHistoryCard
                userName={userName}
                amount={index}
                profileImage={profileImage}
                deposite={deposite}
                withdraw={withdraw}
                timestamp={timestamp}
              />
            </>
          )
        )}
      </BodySection>
    </ActivityHistoryContainer>
  );
};
