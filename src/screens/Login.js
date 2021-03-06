import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Item, Input, Label, Button, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import ModalError from '../components/ModalError';
import ModalLoading from '../components/ModalLoading';

//redux
import {useDispatch, useSelector} from 'react-redux';
import authAction from '../redux/actions/auth';

import user from '../redux/actions/user';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const doLogin = (data) => {
    dispatch(authAction.doLogin(data));
  };

  const closeModal = () => {
    dispatch(authAction.clearMessage());
  };

  return (
    <View style={styles.container}>
      {auth.isError && (
        <ModalError
          modal={true}
          closeModal={closeModal}
          message={auth.alertMsg}
        />
      )}
      <View style={styles.contentWrapper}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => doLogin(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
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
              </View>
              <View>
                <Label>Password</Label>
                <Item style={styles.item} regular>
                  <Input
                    style={styles.item}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#9b9b9b"
                    name="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </Item>
              </View>
              <View style={styles.registerWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('InputEmail')}
                  style={styles.registerWrapper2}>
                  {/* <View>
                    <Icon name="arrow-right-alt" size={35} />
                  </View> */}
                  <View>
                    <Text>Forgot password ?</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.btnWrapper}>
                <Button
                  onPress={handleSubmit}
                  style={styles.btnLogin}
                  disabled={auth.isLoading ? true : false}
                  full
                  info>
                  {auth.isLoading ? (
                    <Spinner color="white" size={30} />
                  ) : (
                    <Text style={styles.loginText}>Login</Text>
                  )}
                </Button>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Register')
                  }></TouchableOpacity>
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
  },
});
