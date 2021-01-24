import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import CardNews from '../components/CardNews';

export default function CategoryNews({navigation}) {
  const news = useSelector((state) => state.category.news);
  return (
    <SafeAreaView style={styles.content}>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <CardNews data={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
