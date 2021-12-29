import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {useMySelector} from '../hooks';
import {getPostsInfo} from '../reducers/post';
import {getUsersInfo} from '../reducers/user';
import Container from '../components/shared/Container';
import {ActivityIndicator, FlatList} from 'react-native';
import PostCard from '../components/PostCard';

const BtnText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 30px;
  height: 60px;
  width: 60px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.btnColor};
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
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

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsersInfo());
    dispatch(getPostsInfo({page}));
  }, []);

  const fetchMore = () => {
    if (postLoading || postsInfo?.length === 0) {
      return;
    }
    setPage(page + 1);
    dispatch(getPostsInfo({page: page + 1}));
  };

  return (
    <Container>
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
        ListFooterComponent={postLoading && <ActivityIndicator />}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.6}
      />
      <Button onPress={() => navigation.navigate('Upload')}>
        <BtnText>+</BtnText>
      </Button>
    </Container>
  );
};
