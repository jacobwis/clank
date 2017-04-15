// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {

};

class <%= name %> extends Component {
  props: Props;

  render() {
    return (
      <Container>
        <%= name %>
      </Container>
    );
  }
}

export default <%= name %>;

const Container = styled.div`{

}`;
