import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {shallowEqual, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {getUsersInfo} from '../reducers/user';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Text = styled.Text``;

const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

const ScrollView = styled.ScrollView``;

export default ({navigation}) => {
  const dispatch = useDispatch();
  const userLoading = useSelector(
    state => state.user.userLoading,
    shallowEqual,
  );
  const usersInfo = useSelector(state => state.user.usersInfo, shallowEqual);

  useEffect(() => {
    dispatch(getUsersInfo());
  }, []);

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Second')}>
        <Text>go to 2nd screen</Text>
      </Button>
      {userLoading ? (
        <Text>Loading ... </Text>
      ) : (
        <ScrollView>
          {usersInfo?.map((user, index) => (
            <Text key={index}>{user?.username}</Text>
          ))}
        </ScrollView>
      )}
    </Container>
  );
};
