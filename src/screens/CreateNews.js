import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FormNews from '../components/FormNews';

import {useSelector, useDispatch} from 'react-redux';
import ModalSuccess from '../components/ModalSuccess';
import ModalError from '../components/ModalError';
import newsAction from '../redux/actions/mynews';

export default function CreateNews({navigation}) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.mynews);

  useEffect(() => {
    if (news.clearSuccess) {
      navigation.goBack();
    }
  }, [news.clearSuccess]);

  const closeModalSuccess = () => {
    dispatch(newsAction.clearSuccess());
  };

  const closeModalError = () => {
    dispatch(newsAction.clearSuccess());
  };

  return (
    <ScrollView style={styles.parentView}>
      {news.isSuccess && (
        <ModalSuccess
          modal={news.isSuccess}
          closeModal={closeModalSuccess}
          message={news.alertMsg}
        />
      )}
      {news.isError && (
        <ModalError
          modal={news.isError}
          closeModal={closeModalError}
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
  parentView: {
    backgroundColor: 'white',
  },
});
