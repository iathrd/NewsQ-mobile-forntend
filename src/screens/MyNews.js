import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CardMyNews from '../components/CardMyNews';
import ModalLoading from '../components/ModalLoading';

//redux
import {useSelector, useDispatch} from 'react-redux';
import mynewsAction from '../redux/actions/mynews';

export default function MyNews({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const myNews = useSelector((state) => state.mynews);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    dispatch(mynewsAction.getMyNews(token));
  }, []);

  useEffect(() => {
    if (myNews.refresh) {
      setIsRefresh(false);
    }
  }, [myNews.refresh]);

  const loadData = () => {
    const {nextLink} = myNews.pageInfo;
    if (nextLink) {
      dispatch(mynewsAction.loadMyNews(token, nextLink));
    }
  };

  const handleRefresh = () => {
    setIsRefresh(true);
    dispatch(mynewsAction.getMyNews(token));
  };

  return (
    <SafeAreaView style={styles.container}>
      {myNews.isLoading && <ModalLoading modal={true} />}
      <FlatList
        data={myNews.news.length && myNews.news}
        renderItem={({item}) => (
          <CardMyNews data={item} navigation={navigation} />
        )}
        onEndReached={loadData}
        onEndReachedThreshold={0.4}
        refreshing={isRefresh}
        onRefresh={handleRefresh}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
