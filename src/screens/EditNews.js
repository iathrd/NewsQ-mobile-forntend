import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import FormNews from '../components/FormNews';

export default function EditNews({route}) {
  const {data, gg} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <FormNews data={data} gg={gg} />
      </View>
    </ScrollView>
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
