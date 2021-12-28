import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

export default () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const onSubmit = data => console.log('submit', data);

  return (
    <View>
      <Controller
        name="firstName"
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => {
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />
      {errors.firstName && <Text>FirstName errors</Text>}

      <Controller
        name="lastName"
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
