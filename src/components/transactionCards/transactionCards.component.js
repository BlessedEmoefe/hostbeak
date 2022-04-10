import React from "react";
import { Button } from "../button/button.component";
import { Input } from "../input/input.component";
import { Text, Title } from "../typography/text.component";
import { DefaultCardstyle } from "./defualtcard.style";

const WithdrawalCard = () => {
  return (
    <>
      <DefaultCardstyle>
        <Title fontWeight="800" fontSize="12px">
          Withdrawal
        </Title>
        <Input
          border={"1px solid #e75a5a"}
          type="number"
          label={"Withdrawal Amount"}
        />
        <Text marginTop="21px" lineHeight="12px" fontSize="9px">
          Kindly download invoice of withdrawal after withdrawal has been made{" "}
        </Text>
        <Button background="#e75a5a" fontSize={"11.7px"} btnText={"Withdraw"} />
      </DefaultCardstyle>
    </>
  );
};

const PayBackCard = () => {
  return (
    <>
      <DefaultCardstyle>
        <Title fontWeight="800" fontSize="12px">
          IOU Pay Back
        </Title>
        <Input
          border={"1px solid purple"}
          type="number"
          label={"Withdrawal Amount"}
        />
        <Button background="purple" fontSize={"11.7px"} btnText={"Withdraw"} />
      </DefaultCardstyle>
    </>
  );
};

const TransactionCard = ({ type }) => {
  return (
    <>
      {type === "Withdrawal"  && <WithdrawalCard />}

      {type === "Pay Back"  && <PayBackCard />}
    </>
  );
};

export default TransactionCard;
