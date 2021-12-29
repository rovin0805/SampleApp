import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import First from './screens/First';
import Second from './screens/Second';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
};
