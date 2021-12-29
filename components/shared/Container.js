import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.colors.bgColor};
`;

export default ({children}) => <Container>{children}</Container>;
