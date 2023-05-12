import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import StackMenu from '../../components/stackMenu';

import generalStyles from '../../utils/generalStyles';

import Header from '../../components/header';

const ListProductsStackScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="List Products Stack Screen" />
      <View style={generalStyles.flex1}>
        <Text>List Products Stack Screen</Text>
        <Button
          title="Urun Detyina Git"
          onPress={() => navigation.navigate('StackProductsDetails')}
        />
        {/* <StackMenu navigation={navigation}/> Stack Menu ana menu oldugunda calisacak gibi linkleri verildiginden bottomTab menu icinde calismaz */}
      </View>
    </SafeAreaView>
  );
};

export default ListProductsStackScreen;

const styles = StyleSheet.create({});
