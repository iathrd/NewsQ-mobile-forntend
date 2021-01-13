import React from 'react';

//reactNavigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../components/DrawerContent';

//StackNavigation
import {HomeStack, MyNewsStack, MyProfileStack} from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home">
        <Drawer.Screen name="My Profile" component={MyProfileStack} />
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="My News" component={MyNewsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
