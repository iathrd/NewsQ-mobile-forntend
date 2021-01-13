import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import FormNews from '../components/FormNews';

export default function EditNews() {
  return (
    <View style={styles.container}>
      <FormNews />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: '15%',
  },
  thubNail: {
    height: 200,
    width: '100%',
    flex: 1,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  inputWrapper: {
    marginBottom: 30,
  },
  imageWrapper: {
    marginBottom: 5,
  },
  btnWrapper: {
    alignSelf: 'flex-end',
  },
  btnUpload: {
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
  },
  labelText: {
    color: '#9b9b9b',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
