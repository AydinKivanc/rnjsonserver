import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
