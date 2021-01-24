import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Item, Input} from 'native-base';
import {Formik} from 'formik';
import ModalLoading from '../components/ModalLoading';
import ModalError from '../components/ModalError';
import ModalSuccess from '../components/ModalSuccess';

import {changePass} from '../helpers/validations';
import {useSelector, useDispatch} from 'react-redux';
import userAction from '../redux/actions/user';

export default function ChangePassword({navigation, route}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);
  const {values} = route.params;

  const updateData = (data) => {
    data = {
      ...data,
      email: values.email,
    };

    dispatch(userAction.ChangePassword(token, data));
  };

  const closeSuccess = () => {
    dispatch(userAction.clearMessage());
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };

  const closeError = () => {
    dispatch(userAction.clearMessage());
  };

  return (
    <View style={styles.parent}>
      {user.error && (
        <ModalError
          modal={true}
          closeModal={closeError}
          message={user.alertMsg}
        />
      )}
      {user.isLoading && <ModalLoading modal={true} />}

      {user.isSuccess && (
        <ModalSuccess
          modal={user.isSuccess}
          closeModal={closeSuccess}
          message={user.alertMsg}
        />
      )}

      <View style={styles.content}>
        <Formik
          initialValues={{newPassword: '', repeatPassword: ''}}
          validationSchema={changePass}
          onSubmit={(values) => updateData(values)}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.labelWrapper}>
                <Text style={styles.labelText}>Input your new password</Text>
              </View>
              <View style={styles.inputWrapper}>
                <Item style={styles.item} placeholderLabel regular>
                  <Input
                    placeholder="New password"
                    placeholderTextColor="#9b9b9b"
                    name="newPassword"
                    value={values.newPassword}
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    secureTextEntry
                  />
                </Item>
                <View>
                  {errors.newPassword && touched.newPassword && (
                    <Text style={styles.textError}>{errors.newPassword}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item style={styles.item} placeholderLabel regular>
                  <Input
                    placeholder="Repeat password"
                    placeholderTextColor="#9b9b9b"
                    name="repeatPassword"
                    value={values.repeatPassword}
                    onChangeText={handleChange('repeatPassword')}
                    onBlur={handleBlur('repeatPassword')}
                    secureTextEntry
                  />
                </Item>
                <View>
                  {errors.repeatPassword && touched.repeatPassword && (
                    <Text style={styles.textError}>
                      {errors.repeatPassword}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.btnWrapper}>
                <Button onPress={handleSubmit} style={styles.btnNext} info>
                  <Text style={styles.btnText}>Next</Text>
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30,
  },
  labelText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginBottom: 30,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  btnWrapper: {
    alignSelf: 'flex-end',
    paddingRight: '10%',
  },
  btnNext: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
  item: {
    borderRadius: 5,
  },
  textError: {
    fontSize: 12,
    color: 'red',
    marginLeft: 10,
  },
});
