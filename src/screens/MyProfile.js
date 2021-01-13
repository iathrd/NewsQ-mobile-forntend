import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Thumbnail, Button, Item, Input, Label} from 'native-base';
import {Formik} from 'formik';

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>Edit your profile</Text>
      </View>
      <View style={styles.imageWrapper}>
        <View>
          <Thumbnail source={require('../../assets/default-avatar.png')} />
        </View>
        <View style={styles.btnWrapper}>
          <TouchableHighlight>
            <Text style={styles.btnText}>Choose an Image</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <Formik
          initialValues={{username: '', email: ''}}
          onSubmit={(values) => console.log(values)}>
          {({handleChange, handleBlur, isSubmitting, values, handleSubmit}) => (
            <>
              <Item stackedLabel style={{marginLeft: 0}}>
                <Label>Username</Label>
                <Input
                  name="username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </Item>
              <Item stackedLabel style={{marginLeft: 0}}>
                <Label>Email</Label>
                <Input
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </Item>
              <View style={styles.btnWrapper2}>
                <Button onPress={handleSubmit} style={styles.btnSave}>
                  <Text style={styles.textSave}>Save</Text>
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginBottom: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  btnWrapper: {
    marginLeft: 40,
  },
  btnText: {
    fontSize: 16,
    color: '#0e9938',
  },
  btnWrapper2: {
    alignSelf: 'flex-end',
  },
  btnSave: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  textSave: {
    color: 'white',
  },
});
