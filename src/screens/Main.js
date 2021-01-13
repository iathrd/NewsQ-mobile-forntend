import React from 'react';

//reactNavigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../components/DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';

//redux
import {useSelector} from 'react-redux';

//StackNavigation
import {
  HomeStack,
  MyNewsStack,
  MyProfileStack,
  CreateNewsStack,
} from './StackNavigation';
import Login from './Login';
import Register from './Register';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Main() {
  const token = useSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      {!token.length ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen name="My Profile" component={MyProfileStack} />
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="My News" component={MyNewsStack} />
          <Drawer.Screen name="Upload News" component={CreateNewsStack} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
