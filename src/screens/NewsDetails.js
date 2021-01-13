import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Item} from 'native-base';
import moment from 'moment';
import {API_URL} from '@env';

export default function NewsDetails({route}) {
  const {data} = route.params;
  return (
    <ScrollView style={styles.scView}>
      {console.log('HAHAHA', route)}
      <View style={styles.container}>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{data.title}</Text>
          </View>
          <View style={styles.newsInfoWrapper}>
            <Text style={styles.newsInfo}>
              {`CNN Indonesia | ${moment(data.createdAt).format(
                'dddd',
              )}, ${moment(data.createdAt).format('DD/MM/YYYY h:mm a')}`}
            </Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Item>
            <View style={styles.thubNail}>
              <Image
                style={styles.image}
                source={{uri: `${API_URL}${data.image}`}}
              />
            </View>
          </Item>
        </View>
        <View style={styles.imageDesWrapper}>
          <Text style={styles.imageDes}>{data.imageDescription}</Text>
        </View>
        <View>
          <Text style={styles.content}>{data.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 30,
  },
  thubNail: {
    height: 200,
    width: '100%',
    flex: 1,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  imageWrapper: {
    marginBottom: 5,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleWrapper: {
    marginBottom: 5,
  },
  newsInfo: {
    color: '#9b9b9b',
  },
  newsInfoWrapper: {
    marginBottom: 30,
  },
  imageDes: {
    color: '#9b9b9b',
    fontSize: 12,
  },
  imageDesWrapper: {
    marginBottom: 30,
  },
  content: {
    fontSize: 16,
    marginBottom: 40,
  },
  scView: {
    flex: 1,
  },
});
