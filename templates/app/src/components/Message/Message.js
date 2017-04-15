// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  message: string,
}

function Message({ message } : Props) {
  return (
    <Container>
      <Content>{ message }</Content>
    </Container>
  )
}

export default Message;

const Container = styled.div`{
  background-color: papayawhip;
  text-align: center;
  padding: 32px;
}`;

const Content = styled.h1`{
  color: coral;
}`;
