import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './src/router/bottomTabNavigator';
import StackNavigator from './src/router/stackNavigator';
import DrawerNavigator from './src/router/drawerNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
