import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CardNews from '../components/CardNews';
import ModalLoading from '../components/ModalLoading';

//redux
import {useSelector, useDispatch} from 'react-redux';
import newsAction from '../redux/actions/news';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(newsAction.getNews(token));
  }, []);

  const loadData = () => {
    const {nextLink} = news.pageInfo;
    if (nextLink) {
      dispatch(newsAction.loadNews(token, nextLink));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {news.isLoading && <ModalLoading modal={true} />}
      <FlatList
        data={news.news.length && news.news}
        renderItem={({item}) => (
          <CardNews data={item} navigation={navigation} />
        )}
        onEndReached={loadData}
        onEndReachedThreshold={0.5}
        // keyExtractor={(item) => item.id.toSting()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
