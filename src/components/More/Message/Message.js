import React from 'react';
import styled from "styled-components";
import {colors} from "../../../infrastructure/theme/colors";

const Message = ({message, type}) => {
  return (
    <>
      {message &&
      <Container messageType={type}>
        {message}
      </Container>}
    </>
   
  );
};
const Container = styled.div`
  text-align: center;
  background: ${props => props.messageType ? props.messageType : colors.primary };
  width: 100%;
  padding: 10px 6px 10px;
  border-radius: 5px;
  color: #fff;
`
const messageTypes = {
  ERROR: colors.error,
  DONE: colors.primary
}
export  {
  messageTypes
}
export default Message;
