import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const StackMenu = ({navigation, route}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      {isOpen && (
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('StackHome')}>
            <Text style={styles.menuItemText}>Ana Sayfa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StackProfile')}>
            <Text style={styles.menuItemText}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StackCategories')}>
            <Text style={styles.menuItemText}>Categoriler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StackSettings')}>
            <Text style={styles.menuItemText}>Ayarlar</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Icon
          name={isOpen ? 'arrow-down-circle' : 'arrow-up-circle'}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StackMenu;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    //borderRadius: 20,
    //borderWidth: 1,
    //padding: 20,
    alignItems: 'flex-end',
    gap: 10,
  },
  menuWrapper: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    gap: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});
