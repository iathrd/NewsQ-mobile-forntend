import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Thumbnail} from 'native-base';
import {
  useLinkBuilder,
  DrawerActions,
  CommonActions,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';
import userAction from '../redux/actions/user';

export function DrawerContent(props) {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const {
    state,
    navigation,
    descriptors,
    activeTintColor,
    inactiveTintColor,
    activeBackgroundColor,
    inactiveBackgroundColor,
    itemStyle,
    labelStyle,
  } = props;
  const datas = props.state.routes.slice(1);
  const buildLink = useLinkBuilder();

  useEffect(() => {
    dispatch(userAction.getUser(token));
  }, []);

  const logout = () => {
    dispatch({type: 'USER_LOGOUT'});
  };

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
                    source={
                      user.avatar === null
                        ? require('../../assets/default-avatar.png')
                        : {uri: `${API_URL}${user.avatar}`}
                    }
                  />
                </View>
                <View style={styles.userWrapper}>
                  <View>
                    <Text numberOfLines={1} style={styles.username}>
                      {user.username}
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
          {props.state.routes.map((route, i) => {
            const focused = i === state.index;
            const {title, drawerLabel, drawerIcon} = descriptors[
              route.key
            ].options;
            return (
              <DrawerItem
                key={route.key}
                label={
                  drawerLabel !== undefined
                    ? drawerLabel
                    : title !== undefined
                    ? title
                    : route.name
                }
                icon={drawerIcon}
                focused={focused}
                activeTintColor={activeTintColor}
                inactiveTintColor={inactiveTintColor}
                activeBackgroundColor={activeBackgroundColor}
                inactiveBackgroundColor={inactiveBackgroundColor}
                labelStyle={labelStyle}
                style={itemStyle}
                to={buildLink(route.name, route.params)}
                onPress={() => {
                  navigation.dispatch({
                    ...(focused
                      ? DrawerActions.closeDrawer()
                      : CommonActions.navigate(route.name)),
                    target: state.key,
                  });
                }}
              />
            );
          })}
          <View>
            <DrawerItem
              onPress={logout}
              label="Logout"
              activeTintColor="#2196F3"
              inactiveTintColor="#9b9b9b"
              labelStyle={{fontWeight: 'bold'}}
              icon={({color, size, focused}) => (
                <Icon
                  name={focused ? 'exit' : 'ios-exit'}
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
    borderBottomColor: 'rgba(155,155,155,0.4)',
    borderBottomWidth: 2,
    paddingTop: 40,
    paddingBottom: 30,
  },
});
