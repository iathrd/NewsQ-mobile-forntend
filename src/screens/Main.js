import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
import InputEmail from './InputEmail';
import ChangePassword from './ChangePassword';
import LandingPage from './LandingPage'

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
            name="LandingPage"
            component={LandingPage}
          />

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
          <Stack.Screen
            options={{title: null}}
            name="InputEmail"
            component={InputEmail}
          />
          <Stack.Screen
            options={{title: null}}
            name="ChangePassword"
            component={ChangePassword}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#2196F3',
            inactiveTintColor: '#9b9b9b',
            labelStyle: {fontWeight: 'bold'},
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen
            options={{
              drawerIcon: ({color, size}) => (
                <Icon name="ios-home" color={color} size={size} />
              ),
            }}
            name="Home"
            component={HomeStack}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({color, size}) => (
                <Icon name="ios-newspaper" color={color} size={size} />
              ),
            }}
            name="My News"
            component={MyNewsStack}
          />

          <Drawer.Screen
            options={{
              drawerIcon: ({color, size}) => (
                <Icon name="ios-create" color={color} size={size} />
              ),
            }}
            name="Upload News"
            component={CreateNewsStack}
          />
          <Drawer.Screen
            options={{
              drawerIcon: ({color, size}) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
            name="My Profile"
            component={MyProfileStack}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
