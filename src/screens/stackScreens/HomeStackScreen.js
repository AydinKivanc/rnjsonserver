import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import StackMenu from '../../components/stackMenu';

import generalStyles from '../../utils/generalStyles';

const HomeStackScreen = ({navigation, route}) => {
  return (
    <View style={generalStyles.flex1}>
      <Text>Home Stack Screen</Text>
      <Button
        title="Profile a git"
        onPress={() => navigation.navigate('StackProfile')}
      />
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default HomeStackScreen;

const styles = StyleSheet.create({});
