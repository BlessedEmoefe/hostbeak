import React from "react";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";
import { Spacer } from "../../spacer/spacer.component";
import { Button } from "../../button/button.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Input } from "../../input/input.component";
import { useFetch } from "../../hooks/useFetch";
import {baseUrl} from "../../../settings/config";

export const MiddleSection = ({footerMiddleSection}) => {
  /*Integration code*/;

  const { title, firstText, secondText, thirdText ,btnText} = footerMiddleSection||{};
  return (
    <FlexibleDiv width="25%" paddingVertical="0">
      <FlexibleDiv
        paddingVertical="0"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Text color="white" fontWeight="600" fontSize="1rem">
          {title}
        </Text>
        <Spacer size="small" />
        {firstText ? <Text color="white">{firstText}</Text> : null}
        {secondText ? <Text color="white">{secondText}</Text> : null}
        {thirdText ? <Text color="white">{thirdText}</Text> : null}
        <Spacer size="small" />
        <Input type="text" placeholder="youremailaddress@gmail.com" />
        <Spacer />
        <Button
          btnText={btnText}
          borderRadius="0"
          background={colors.primary}
        />
        <Spacer size="small" />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};
