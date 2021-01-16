import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FormNews from '../components/FormNews';

//modal
import ModalSuccess from '../components/ModalSuccess';
import ModalLoading from '../components/ModalLoading';
import ModalError from '../components/ModalError';

//redux
import newsAction from '../redux/actions/mynews';
import {useSelector, useDispatch} from 'react-redux';

export default function EditNews({route, navigation}) {
  const {data, gg} = route.params;
  const dispatch = useDispatch();
  const news = useSelector((state) => state.mynews);

  useEffect(() => {
    if (news.clearSuccess) {
      navigation.goBack();
    }
  }, [news.clearSuccess]);

  const closeModalError = () => {
    dispatch(newsAction.clearError());
  };

  const closeModalSuccess = () => {
    dispatch(newsAction.clearSuccess());
  };

  return (
    <ScrollView style={styles.parent}>
      {news.isLoading && <ModalLoading modal={news.isLoading} />}
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
  parent: {
    backgroundColor: 'white',
  },
});
