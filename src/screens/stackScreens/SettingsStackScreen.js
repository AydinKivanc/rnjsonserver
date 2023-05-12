import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import StackMenu from '../../components/stackMenu';

import generalStyles from '../../utils/generalStyles';

const SettingsStackScreen = ({navigation, route}) => {
  return (
    <View style={generalStyles.flex1}>
      <Text>Settings Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default SettingsStackScreen;

const styles = StyleSheet.create({});
