import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import StackMenu from '../../components/stackMenu';

import generalStyles from '../../utils/generalStyles';

const ProfileStackScreen = ({navigation, route}) => {
  return (
    <View style={generalStyles.flex1}>
      <Text>Profile Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default ProfileStackScreen;

const styles = StyleSheet.create({});
