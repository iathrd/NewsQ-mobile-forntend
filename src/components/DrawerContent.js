import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.profileWrapper}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={styles.profileInfo}
              onPress={() => {
                props.navigation.navigate('My Profile');
              }}>
              <>
                <View>
                  <Thumbnail
                    large
                    source={require('../../assets/default-avatar.png')}
                  />
                </View>
                <View style={styles.userWrapper}>
                  <View>
                    <Text numberOfLines={1} style={styles.username}>
                      Iqbal Athorid
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.company}>CNN indonesia</Text>
                  </View>
                </View>
              </>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <DrawerItem
              label="Home"
              icon={({color, size, focused}) => (
                <Icon
                  name={focused ? 'home-sharp' : 'md-home-outline'}
                  size={size}
                  color={color}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </View>
          <View>
            <DrawerItem
              label="My News"
              icon={({color, size, focused}) => (
                <Icon
                  name={focused ? 'newspaper' : 'newspaper-outline'}
                  size={size}
                  color={color}
                />
              )}
              onPress={() => {
                props.navigation.navigate('My News');
              }}
            />
          </View>
          <View>
            <DrawerItem
              label="Logout"
              icon={({color, size, focused}) => (
                <Icon
                  name={focused ? 'exit' : 'exit-outline'}
                  size={size}
                  color={color}
                />
              )}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  userWrapper: {
    marginLeft: 15,
  },
  username: {
    fontSize: 18,
  },
  company: {
    fontSize: 13,
    color: '#9b9b9b',
    marginTop: 5,
  },
  profileWrapper: {
    borderBottomColor: '#9b9b9b',
    borderBottomWidth: 1,

    paddingTop: 40,
    paddingBottom: 30,
  },
});