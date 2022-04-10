import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text, Title } from "../typography/text.component";
import {
  Col,
  FlexRow,
  DescriptiveText,
  Image,
  Span,
  TextCol,
} from "./customerProfileCard.style";
import { colors } from "../../infrastructure/theme/colors";

import Image1 from "../../assets/images/image.png";
const CustomerProfileCard = ({
  customerName,
  customerID,
  savingsRate,
  phoneNo,
  customerAddress,
  customerEmail,
}) => {
  return (
    <>
      <DefaultCardstyle width={"550px"}>
        <FlexRow>
          <Col flexBasis="50%">
            <Image src={Image1} />

            <TextCol margin="0px 0px 0px 13px" lineHeight={"9px"}>
              <Text
                lineHeight="18px"
                color={colors.black.strong}
                fontSize={"14px"}
                align="start"
              >
                {customerName}
              </Text>
              <DescriptiveText
                lineHeight="0px"
                lineHeight="18px"
                color={colors.black.light}
                fontSize={"12px"}
              >
                Customer ID :
                <Span fontSize="10px" lineHeight="0px">
                  {" "}
                  {customerID}
                </Span>
              </DescriptiveText>
            </TextCol>
          </Col>
          <Col flexBasis="50%">
            <TextCol>
              <Text lineHeight="18px" fontSize="12px">
                Savings Rate
              </Text>
              <Text
                lineHeight="18px"
                fontWeight="bold"
                fontSize="13px"
                color={colors.black.strong}
              >
                {savingsRate}
              </Text>
            </TextCol>
          </Col>
        </FlexRow>

        <FlexRow>
          <Col alignItems="start" flexBasis="55%" flexDirection="column">
            <TextCol margin="13px 0px 0px 0px">
              <Text
                fontWeight="bold"
                color={colors.black.strong}
                align="start"
                fontSize="12px"
              >
                Phone
              </Text>
              <Text fontWeight="bold" color={colors.black.soft} fontSize="12px">
                {phoneNo}
              </Text>
            </TextCol>
            <TextCol margin="13px 0px 0px 0px">
              <Text
                fontWeight="bold"
                color={colors.black.strong}
                align="start"
                fontSize="12px"
              >
                Address
              </Text>
              <Text fontWeight="bold" color={colors.black.soft} fontSize="12px">
                {customerAddress}
              </Text>
            </TextCol>
          </Col>

          <Col alignItems="start" flexBasis="45%" flexDirection="column">
            <TextCol margin="13px 0px 0px 0px">
              <Text
                fontWeight="bold"
                color={colors.black.strong}
                align="start"
                fontSize="12px"
              >
                Email
              </Text>
              <Text fontWeight="bold" color={colors.black.soft} fontSize="12px">
                {customerEmail}
              </Text>
            </TextCol>
          </Col>
        </FlexRow>
      </DefaultCardstyle>
    </>
  );
};

export default CustomerProfileCard;
