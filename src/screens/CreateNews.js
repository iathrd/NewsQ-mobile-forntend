import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FormNews from '../components/FormNews';

import {useSelector, useDispatch} from 'react-redux';
import ModalSuccess from '../components/ModalSuccess';
import ModalError from '../components/ModalError';
import newsAction from '../redux/actions/mynews';

export default function CreateNews() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.mynews);

  const closeModal = () => {
    dispatch(newsAction.clearMessage());
  };
  return (
    <ScrollView>
      {news.isSuccess && (
        <ModalSuccess
          modal={news.isSuccess}
          closeModal={closeModal}
          message={news.alertMsg}
        />
      )}
      {news.isError && (
        <ModalError
          modal={news.isError}
          closeModal={closeModal}
          message={news.alertMsg}
        />
      )}
      <View style={styles.container}>
        <FormNews />
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
