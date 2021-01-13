import React from 'react';
import {View, Text} from 'react-native';

//reactNavigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//StackNavigation
import {HomeStack, MyNewsStack} from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="MyNews" component={MyNewsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
