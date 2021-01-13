import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Home from './Home';
import MyNews from './MyNews';
import MyProfile from './MyProfile';
import EditNews from './EditNews';
import CreateNews from './CreateNews';
import NewsDetail from './NewsDetails';
import SearchNews from './SearchNews';

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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              style={styles.hRight}>
              <Icon name="search" color="black" size={27} />
            </TouchableOpacity>
          ),
        })}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({navigation}) => ({
          title: null,
        })}
        name="NewsDetails"
        component={NewsDetail}
      />
      <Stack.Screen
        options={({navigation}) => ({
          title: null,
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 250}}>
                <Item rounded>
                  <Input autoFocus placeholder="Search" />
                  <Icon name="search" size={27} style={{marginRight: 10}} />
                </Item>
              </View>
              <View style={{marginLeft: 16, marginRight: 16}}>
                <Icon name="sort" size={27} />
              </View>
            </View>
          ),
        })}
        name="Search"
        component={SearchNews}
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
          headerRight: () => (
            <TouchableOpacity style={styles.hRight}>
              <Icon name="search" color="black" size={27} />
            </TouchableOpacity>
          ),
        })}
        name="MyNews"
        component={MyNews}
      />
      <Stack.Screen
        options={({navigation}) => ({
          title: 'Edit News',
        })}
        name="EditNews"
        component={EditNews}
      />
    </Stack.Navigator>
  );
};

export const MyProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          title: 'My Profile',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={styles.btnDrawer}>
              <Icon name="menu" color="black" size={27} />
            </TouchableOpacity>
          ),
        })}
        name="MyProfile"
        component={MyProfile}
      />
    </Stack.Navigator>
  );
};

export const CreateNewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          title: 'Upload News',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={styles.btnDrawer}>
              <Icon name="menu" color="black" size={27} />
            </TouchableOpacity>
          ),
        })}
        name="CreateNews"
        component={CreateNews}
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
  hRight: {
    marginRight: 16,
    padding: 10,
  },
});
