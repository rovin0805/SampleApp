import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useForm, Controller} from 'react-hook-form';
import Container from '../components/shared/Container';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {uploadPost} from '../reducers/post';
import {useMySelector} from '../hooks';

const Title = styled.Text`
  color: ${props => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'gray',
  allowFontScaling: false,
  secureTextEntry: false,
  autoCorrect: false,
  multiline: true,
  keyboardType: 'default',
})`
  border: 1px solid #999;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
`;

const SubmitBtn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
  background-color: ${props =>
    props.disabled ? 'gray' : props.theme.colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

export default ({navigation}) => {
  const dispatch = useDispatch();
  const uploadLoading = useMySelector(state => state.post.uploadLoading);
  const {
    control,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
      body: '',
      userId: 999,
    },
  });

  const onSubmit = () => {
    const req = {
      title: getValues('title'),
      body: getValues('body'),
      userId: 999,
    };
    dispatch(uploadPost({req}));
    if (!uploadLoading) {
      navigation.goBack();
    }
  };

  return (
    <Container>
      <ScrollView>
        <Title>제목</Title>
        <Controller
          name="title"
          control={control}
          rules={{
            required: '제목을 입력해주세요.',
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              autoFocus
              placeholder={'제목을 입력해주세요.'}
              onChangeText={text => {
                onChange(text);
                clearErrors();
              }}
              value={value}
            />
          )}
        />
        <Title>내용</Title>
        <Controller
          name="body"
          control={control}
          rules={{
            required: '내용을 입력해주세요.',
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder={'내용을 입력해주세요.'}
              onChangeText={text => {
                onChange(text);
                clearErrors();
              }}
              value={value}
              style={{minHeight: 100}}
            />
          )}
        />
        <SubmitBtn onPress={handleSubmit(onSubmit)} disabled={uploadLoading}>
          <BtnText>Submit</BtnText>
        </SubmitBtn>
      </ScrollView>
    </Container>
  );
};
