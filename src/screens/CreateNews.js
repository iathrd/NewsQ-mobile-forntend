import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormNews from '../components/FormNews';

export default function CreateNews() {
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
});
