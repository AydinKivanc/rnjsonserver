import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/bottomTabScreens/HomeScreen';
import CategoriesScreen from '../screens/bottomTabScreens/CategoriesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        //tabBarActiveTintColor: 'red',  // aktif menu elemanlarinin rengi. Bunu altta tabBarLabel da verdik.
        //tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {fontSize: 16, fontFamily: 'OpenSans-Bold'},
        tabBarStyle: {
          //height: 90,
          backgroundColor: '#ccc',
          flex: 0.1,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Home Page',
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={{
                  fontSize: focused ? 16 : 14,
                  color: focused ? 'red' : 'gray',
                  marginBottom: 10,
                }}>
                Ana Sayfa
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={focused ? 25 : 15}
              color={focused ? 'red' : 'gray'}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'list-circle' : 'list-circle-outline'}
              size={focused ? 25 : 15}
              color={focused ? 'red' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
