import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import categoryAction from '../redux/actions/category';

export default function CategoryList({data, navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const navigationTo = (name, id) => {
    dispatch(categoryAction.geNews(token, id));
    navigation.navigate('CategoryNews', {name});
  };

  return (
    <View style={styles.categoryWrapper}>
      <TouchableOpacity onPress={() => navigationTo(data.name, data.id)}>
        <Text style={styles.textCategory}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginBottom: 10,
    paddingLeft: 17,
    marginTop: 16,
  },
  textCategory: {
    fontSize: 16,
  },
});
