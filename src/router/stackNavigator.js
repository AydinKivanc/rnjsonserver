import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStackScreen from '../screens/stackScreens/HomeStackScreen';
import CategoriesStackScreen from '../screens/stackScreens/CategoriesStackScreen';
import ProfileStackScreen from '../screens/stackScreens/ProfileStackScreen';
import SettingsStackScreen from '../screens/stackScreens/SettingsStackScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackHome"
      screenOptions={{
        headerStyle: {backgroundColor: 'red'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        options={{title: 'Ana Sayfa'}}
        name="StackHome"
        component={HomeStackScreen}
      />
      <Stack.Screen name="StackCategories" component={CategoriesStackScreen} />
      <Stack.Screen name="StackProfile" component={ProfileStackScreen} />
      <Stack.Screen name="StackSettings" component={SettingsStackScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
