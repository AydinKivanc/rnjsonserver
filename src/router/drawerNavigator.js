import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeDrawerScreen from '../screens/drawerScreens/HomeDrawerScreen';
import CategoriesDrawerScreen from '../screens/drawerScreens/CategoriesDrawerScreen';
import ProfileDrawerScreen from '../screens/drawerScreens/ProfileDrawerScreen';
import SettingsDrawerScreen from '../screens/drawerScreens/SettingsDrawerScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{title: 'Ana Sayfa'}}
        name="DrawerHome"
        component={HomeDrawerScreen}
      />
      <Drawer.Screen
        name="DrawerCategories"
        component={CategoriesDrawerScreen}
      />
      <Drawer.Screen name="DrawerProfile" component={ProfileDrawerScreen} />
      <Drawer.Screen name="DrawerSettings" component={SettingsDrawerScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
