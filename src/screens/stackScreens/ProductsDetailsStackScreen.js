import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import generalStyles from '../../utils/generalStyles';
import Header from '../../components/header';

const ProductsDetailsStackScreen = ({navigation, route}) => {
  console.log('>>>Route', route);
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="Products Details Stack Screen" />
      <View style={generalStyles.flex1}>
        <Text>Products Details Stack Screen</Text>
        {route?.params?.deneme && <Text>{route?.params?.deneme}</Text>}
        {route?.params?.deneme2 && <Text>{route?.params?.deneme2}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default ProductsDetailsStackScreen;

const styles = StyleSheet.create({});
