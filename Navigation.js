import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Upload from './screens/Upload';
import Users from './screens/Users';
import TabBar from './components/TabBar';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
};

const RootNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}>
      <Stack.Screen
        name={'TopTab'}
        component={TopTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'Upload'} component={Upload} />
    </Stack.Navigator>
  );
};

export default RootNav;
