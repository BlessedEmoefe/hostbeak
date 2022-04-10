import React from 'react'
import { FlexibleDiv } from '../../flexibleDiv/flexibleDiv.component';
import { Text } from '../../typography/text.component';
import { Spacer } from '../../spacer/spacer.component';
import { useFetch } from '../../hooks/useFetch';
import {baseUrl, baseUrlFrontEnd} from "../../../settings/config";


export const LeftSection = ({footerBlurbs}) => {

  return (
    <FlexibleDiv width="20%" paddingVertical="0">
      {footerBlurbs?.map(({ title, firstText, secondText, thirdText }) => (
        <FlexibleDiv
          paddingVertical="0"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Text color="white" fontWeight="600" fontSize="1rem">
            {title}
          </Text>
          <Spacer />
          {firstText ? <Text color="white">{firstText}</Text> : null}
          {secondText ? <Text color="white">{secondText}</Text> : null}
          {thirdText ? <Text color="white">{thirdText}</Text> : null}
        
          <Spacer size="small" />
        </FlexibleDiv>
      ))}
    </FlexibleDiv>
  );
}
