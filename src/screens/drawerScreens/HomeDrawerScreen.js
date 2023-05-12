import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import generalStyles from '../../utils/generalStyles';

const HomeDrawerScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>Home Drawer Screen</Text>
      <Button
        title="Profile a git"
        onPress={() => navigation.navigate('DrawerProfile')}
      />
    </View>
  );
};

export default HomeDrawerScreen;

const styles = StyleSheet.create({});
