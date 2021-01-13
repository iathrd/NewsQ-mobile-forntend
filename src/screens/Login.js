import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Item, Input, Label, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.inputWrapper}>
          <Label>Email</Label>
          <Item style={styles.item} regular>
            <Input placeholder="Email" placeholderTextColor="#9b9b9b" />
          </Item>
        </View>
        <View>
          <Label>Password</Label>
          <Item regular>
            <Input
              style={styles.item}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#9b9b9b"
            />
          </Item>
        </View>
        <View style={styles.registerWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.registerWrapper2}>
            <View>
              <Icon name="arrow-right-alt" size={35} />
            </View>
            <View>
              <Text>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnWrapper}>
          <Button style={styles.btnLogin} full info>
            <Text style={styles.loginText}>Login</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentWrapper: {
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  registerWrapper: {
    alignItems: 'flex-end',
  },
  registerWrapper2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnWrapper: {
    marginTop: 20,
  },
  btnLogin: {
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  item: {
    borderRadius: 5,
  },
  textError: {
    color: 'red',
  },
});
