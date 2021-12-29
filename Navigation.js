import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Upload from './screens/Upload';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
};
