import React from 'react'
import { Text } from '../../typography/text.component';

export const BottomSection = ({footerBottomSection}) => {
  /*Integration code*/
  const { text } = footerBottomSection || {};
  return (
    <Text color="white">
      {text}
    </Text>
  );
}
