import React, { useState } from "react";
import {
  PageWrapper,
  ContentContainer,
  Wrapper,
  Title,
  SubTitle,
} from "./Test.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { UserTypeCard } from "../../components/UserTypeCard/UserTypeCard.component";

// import { RiShieldUserLine as MiniAdminIcon } from "react-icons/ri";
// import { FaUserShield as AdminIcon } from "react-icons/fa";
import { FaUserFriends as TellerIcon } from "react-icons/fa";
import GeneralLayout from "../../components/Layout/GeneralLayout/index";
import { Blurb } from "../../components/blurb/blurb.component";
import { colors } from "../../infrastructure/theme/colors";
import { Radio } from "../../components/radioButton/radioButton.component";
import SummaryCard from "../../components/summaryCards/summaryCards.component";
import { CustomerIcon } from "../../assets/svg";
import TransactionCard from "../../components/transactionCards/transactionCards.component";
import SavingsCard from "../../components/savingsCard/savingsCard.component";
import { Switch } from "../../components/switch/switch.component";
import LineHistoryCard from "../../components/lineHistoryCard/lineHistoryCard.component";
import CustomerProfileCard from "../../components/customerProfileCard/customerProfileCard.component";
import TransactionOverviewCard from "../../components/transactionOverview/transactionOverview.component";
import EditableProfile from "../../components/editableProfile/editableProfile.component";

const Test = () => {
  const { maleSelected, setMaleSelected } = useState(false);
  //  const { femaleSelected, setFemaleSelected } = useState(false);

  const handleMaleSelected = () => {
    setMaleSelected(!maleSelected);
  };

  // const handleFemaleSelected = (value) => {
  //   setFemaleSelected(!value);
  //      console.log(`female: ${femaleSelected}`);
  //  };
  return (
    <GeneralLayout>
      <PageWrapper>
        <ContentContainer>
          <Title>This is the Test Page</Title>
          <Spacer />
          <SubTitle>See all Reusable components here</SubTitle>
          <Spacer />
          <Wrapper>

            {/* <SavingsCard/> */}

            {/* <TransactionCard type={'Withdrawal'}/> */}

            {/* <SavingsCard/> */}


            {/* <TransactionCard type={'Withdrawal'}/> */}
            {/* 
            <Spacer size="small" />
            {/* <Blurb
              titleColor={colors.primary}
              paragraphColor={colors.text.strong}
              paragraphFontSize="1rem"
            >
              <TellerIcon size="2rem" color="black" />
              <h3>Hello Title</h3>
              <p>
                When you enter data, the browser and/or the web server will
                check to see that the data is in the correct format and within
                the constraints set by the application. Validation done in the
                browser is called client-side validation, while validation done
                on the server is called server-side validation
              </p>
              <Spacer size="small" />
              <Radio
                // value={maleSelected}
                selected={maleSelected}
                text="First Button"
                onChange={handleMaleSelected}
              />

              <Radio
                value={femaleSelected}
                selected={femaleSelected}
                text="First Radio Button"
                onChange={handleFemaleSelected}

              />
            </Blurb> */}
            {/* <LineHistoryCard /> */}

              
{/* 
            <CustomerProfileCard
              customerName={"  Joe Gardner"}
              customerID={" 00BD1C1"}
              savingsRate={"2"}
              phoneNo={"0816547865"}
              customerAddress={"44 Ondo Street, Benin City"}
              customerEmail={"joegardner@gmail.com"}
            />

            <SavingsCard />
            <Spacer size="small" />
            <TransactionCard type={"Withdrawal"} /> */}

              {/* <TransactionOverviewCard/> */}

              <EditableProfile/>

          </Wrapper>
        </ContentContainer>
      </PageWrapper>
    </GeneralLayout>
  );
};

export default Test;
