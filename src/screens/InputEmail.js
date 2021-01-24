import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Item, Input} from 'native-base';
import {emailValid} from '../helpers/validations';
import {Formik} from 'formik';

export default function InputEmail({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>
            Input your email to change password
          </Text>
        </View>
        <Formik
          initialValues={{email: ''}}
          validationSchema={emailValid}
          onSubmit={(values) =>
            navigation.navigate('ChangePassword', {values})
          }>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.inputWrapper}>
                <Item style={styles.item} placeholderLabel regular>
                  <Input
                    placeholder="Input your email"
                    placeholderTextColor="#9b9b9b"
                    name="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                </Item>
                <View>
                  {errors.email && touched.email && (
                    <Text style={styles.textError}>{errors.email}</Text>
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
    marginBottom: 30,
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
    marginLeft:10
    
  },
});
