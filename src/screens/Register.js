import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Item, Input, Label, Button} from 'native-base';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {register} from '../helpers/validations';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Formik
          initialValues={{username: '', email: '', password: ''}}
          validationSchema={register}
          onSubmit={(values) => console.log(values)}>
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.inputWrapper}>
                <Label>Username</Label>
                <Item style={styles.item} regular>
                  <Input
                    placeholder="Username"
                    placeholderTextColor="#9b9b9b"
                    name="username"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                </Item>
                {errors.username && touched.username && (
                  <Text style={styles.textError}>{errors.username}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Label>Email</Label>
                <Item style={styles.item} regular>
                  <Input
                    placeholder="Email"
                    placeholderTextColor="#9b9b9b"
                    name="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </Item>
                {errors.email && touched.email && (
                  <Text style={styles.textError}>{errors.email}</Text>
                )}
              </View>
              <View>
                <Label>Password</Label>
                <Item style={styles.item} regular>
                  <Input
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#9b9b9b"
                    name="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </Item>
                {errors.password && touched.password && (
                  <Text style={styles.textError}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.registerWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={styles.registerWrapper2}>
                  <View>
                    <Icon name="arrow-right-alt" size={35} />
                  </View>
                  <View>
                    <Text>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.btnWrapper}>
                <Button
                  onPress={handleSubmit}
                  style={styles.btnLogin}
                  full
                  info>
                  <Text style={styles.loginText}>Register</Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
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
    fontSize: 12,
    marginLeft: 10,
  },
});
