import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {useMySelector} from '../hooks';
import {getPostsInfo} from '../reducers/post';
import {getUsersInfo} from '../reducers/user';
import Container from '../components/shared/Container';
import {FlatList} from 'react-native';
import PostCard from '../components/PostCard';

const Text = styled.Text``;

const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [userLoading, postLoading] = useMySelector(state => [
    state.user.userLoading,
    state.post.postLoading,
  ]);
  const [usersInfo, postsInfo] = useMySelector(state => [
    state.user.usersInfo,
    state.post.postsInfo,
  ]);

  useEffect(() => {
    dispatch(getUsersInfo());
    dispatch(getPostsInfo({page: 1}));
  }, []);

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Second')}>
        <Text>go to 2nd screen</Text>
      </Button>
      {userLoading || postLoading ? (
        <Text>Loading ... </Text>
      ) : (
        <FlatList
          data={postsInfo}
          keyExtractor={({item}) => item?.id}
          renderItem={({item}) => (
            <PostCard
              title={item?.title}
              body={item?.body}
              userId={item?.userId}
              id={item?.id}
            />
          )}
          // ListEmptyComponent={}
          // ListFooterComponent={}
          // onEndReached={}
          // onEndReachedThreshold={}
        />
      )}
    </Container>
  );
};
