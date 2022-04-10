import React, { useState } from "react";
import { Input } from "../input/input.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text, Title } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { Button } from "../button/button.component";
const SavingsCard = () => {
  const [amount, setAmount] = useState(0);

  const rangeSetter = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <DefaultCardstyle>
        <Title fontWeight="bold" fontSize="12px">
          Add Savings
        </Title>
        <Text
          color={colors.black.regular}
          marginTop="-2px"
          lineHeight="12px"
          fontSize="9px"
        >
          Adjust the cursor to the multiple of your savings rate you will like
          deposit today
        </Text>
        <Input
          border={"none"}
          type="range"
          onChange={(e) => rangeSetter(e)}
          value={amount}
          min={0}
          max={100}
        />
        <Text
          align={"end"}
          color={colors.black.strong}
          fontSize="11px"
          fontWeight="bold"
        >
          NGN {amount}
        </Text>
        <Text marginTop="19px" lineHeight="12px" fontSize="9px">
          Deposit greater than daily savings rate will be carried over to the
          next day
        </Text>
        <Button fontSize={"10px"} btnText={"ADD SAVINGS"} />
      </DefaultCardstyle>
    </>
  );
};

export default SavingsCard;
