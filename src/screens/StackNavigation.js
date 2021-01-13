import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Home from './Home';
import MyNews from './MyNews';

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={styles.btnDrawer}>
              <Icon name="menu" color="black" size={27} />
            </TouchableOpacity>
          ),
        })}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export const MyNewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          title: 'My News',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={styles.btnDrawer}>
              <Icon name="menu" color="black" size={27} />
            </TouchableOpacity>
          ),
        })}
        name="MyNews"
        component={MyNews}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  btnDrawer: {
    // borderColor: '#9b9b9b',
    // borderStyle: 'solid',
    // borderWidth: 1,
    marginLeft: 16,
    // borderRadius: 5,
    // backgroundColor: '#2196F3',
  },
});
