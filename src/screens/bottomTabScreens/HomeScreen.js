import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Header from '../../components/header';

const HomeScreen = ({navigation, route}) => {
  //console.log('>>> React Navigation 2 Props', props);
  return (
    <SafeAreaView>
      <Header title={'Ana Sayfa'} />
      <View>
        <Icon name="rocket" size={30} color="#900" />
        <Text>Home Screen</Text>
        <Text style={{fontFamily: 'OpenSans-Bold'}}>Home</Text>
        <Button
          title="Kategorilere Git"
          onPress={
            () =>
              navigation.navigate('Categories', {
                deneme: 'Ben Ana Sayfa dan gelen parametreyim', // bunu name i Categories olan CategoriesScreen componentinde karsilariz
              }) // (props) yada ({route}) distructring ile karsilariz.
          }
        />
        <Button
          title="direkt StackProductDetails e git"
          onPress={() =>
            navigation.navigate('StackProductsDetails', {
              deneme: 'Ben Ana Sayfa dan gelen parametreyim',
            })
          }
        />
        <Button
          title="Categories/StackProductDetails e git bu yazimda parametre gonderilemez"
          onPress={() =>
            navigation.navigate('Categories', {
              screen: 'StackProductsDetails',
              params: {deneme2: 'Ben Ana Sayfa dan gelen diger parametreyim'},
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
