import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, RefreshControl} from 'react-native';
import CardNews from '../components/CardNews';
import ModalLoading from '../components/ModalLoading';

//redux
import {useSelector, useDispatch} from 'react-redux';
import newsAction from '../redux/actions/news';
import userAction from '../redux/actions/user';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const news = useSelector((state) => state.news);
  const user = useSelector((state) => state.user);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await dispatch(userAction.getUser(token));
      dispatch(newsAction.getNews(token));
    };

    getData();
  }, []);

  useEffect(() => {
    if (news.refresh) {
      setIsRefresh(false);
    }
  }, [news.refresh]);

  const loadData = () => {
    const {nextLink} = news.pageInfo;
    if (nextLink) {
      dispatch(newsAction.loadNews(token, nextLink));
    }
  };

  const handleRefresh = () => {
    setIsRefresh(true);
    dispatch(newsAction.getNews(token));
  };

  return (
    <SafeAreaView style={styles.container}>
      {news.isLoading || user.isLoading ? <ModalLoading modal={true} /> : null}
      <FlatList
        data={news.news.length && news.news}
        renderItem={({item}) => (
          <CardNews data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadData}
        onEndReachedThreshold={0.4}
        refreshing={isRefresh}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
