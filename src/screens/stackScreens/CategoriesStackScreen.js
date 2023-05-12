import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import StackMenu from '../../components/stackMenu';

import generalStyles from '../../utils/generalStyles';

const CategoriesStackScreen = ({navigation, route}) => {
  return (
    <View style={generalStyles.flex1}>
      <Text>Categories Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default CategoriesStackScreen;

const styles = StyleSheet.create({});
