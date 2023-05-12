import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Header from '../../components/header';

import {createStackNavigator} from '@react-navigation/stack';
import ListProductsStackScreen from '../stackScreens/ListProductsStackScreen';
import ProductsDetailsStackScreen from '../stackScreens/ProductsDetailsStackScreen';

const Stack = createStackNavigator();

const CategoriesScreen = ({navigation, route}) => {
  //console.log('>>> Route icinde gonderilen parametre', route);
  return (
    <Stack.Navigator
      initialRouteName="StackListProducts"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="StackListProducts"
        component={ListProductsStackScreen}
      />
      <Stack.Screen
        name="StackProductsDetails"
        component={ProductsDetailsStackScreen}
      />
    </Stack.Navigator>

    /* ISTER ALTTAKI GIBI BIR SAYFA DONERIZ ISTERSEKDE USTTEKI GIBI BIR STACK ICINDE SCREEN LER DONERIZ
    <SafeAreaView>
      <Header title={'Kategoriler'} />
      <View>
        <Icon name="rocket" size={30} color="#900" />
        <Text>Categories Screen</Text>
        <Text style={{fontFamily: 'OpenSans-Bold'}}>Categories</Text>
        <Button
          title="Ana Sayfaya Git"
          onPress={() => navigation.navigate('Home')}
        />
        {route?.params?.deneme && <Text>{route?.params?.deneme}</Text>} //route icinde params icinde deneme objesi varsa 
      </View>
    </SafeAreaView>
    */
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
