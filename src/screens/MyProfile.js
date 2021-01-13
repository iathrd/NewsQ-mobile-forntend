import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
