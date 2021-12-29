import React from 'react';
import styled from 'styled-components/native';

const Card = styled.TouchableOpacity.attrs({activeOpacity: 0.7})`
  padding: 15px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.cardColor};
  margin-bottom: 15px;
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.textColor};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  margin-top: 5px;
`;

const Id = styled.Text`
  color: navy;
  font-size: 12px;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default ({title, body, userId, id}) => (
  <Card>
    <Title>{title}</Title>
    <RowWrapper>
      <Id>
        Post ID : {id} | User ID : {userId}
      </Id>
    </RowWrapper>
    <Description>{body}</Description>
  </Card>
);
