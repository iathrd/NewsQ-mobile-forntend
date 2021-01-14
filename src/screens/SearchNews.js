import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import CardNews from '../components/CardNews';

import {useSelector, useDispatch} from 'react-redux';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function SearchNews({navigation}) {
  const search = useSelector((state) => state.news);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={search.searchNews}
        renderItem={({item}) => (
          <CardNews data={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
