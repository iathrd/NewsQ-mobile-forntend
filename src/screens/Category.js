import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import ModalLoading from '../components/ModalLoading';
import CategoryLis from '../components/CategoryList';

import {useSelector, useDispatch} from 'react-redux';
import categoryAction from '../redux/actions/category';

export default function Category({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categoryAction.getCategory(token));
  }, []);

  return (
    <SafeAreaView style={styles.parent}>
      {category.isLoading && <ModalLoading modal={true} />}
      <View style={styles.labelWrapper}>
        <Text style={styles.labelText}>Choose Category</Text>
      </View>
      <View>
        <FlatList
          data={category.category}
          renderItem={({item}) => (
            <CategoryLis data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
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
  labelWrapper: {
    paddingLeft: 16,
    paddingTop: 30,
  },
  labelText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
