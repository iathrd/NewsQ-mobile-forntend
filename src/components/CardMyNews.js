import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Thumbnail, Body, CardItem, Text, Left, Right} from 'native-base';

import moment from 'moment';
import {API_URL} from '@env';

export default function CardMyNews({data, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EditNews', {data, gg: 'edit'})}
      style={styles.container}>
      <Card style={styles.radius}>
        <CardItem style={styles.radius}>
          <Left>
            <Thumbnail
              small
              source={
                data.creator.avatar === null
                  ? require('../../assets/default-avatar.png')
                  : {uri: `${API_URL}${data.creator.avatar}`}
              }
            />
            <Body>
              <Text>{data.creator.username}</Text>
            </Body>
          </Left>
          <Right>
            <Text style={styles.min}>{data.readingTime} Menit</Text>
          </Right>
        </CardItem>
        <CardItem style={styles.headerCard}>
          <Left>
            <Text style={styles.textJudul} numberOfLines={3}>
              {data.title}
            </Text>
          </Left>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>
              {moment(data.createdAt).format('DD/MM/YYYY')}
            </Text>
            <Text style={styles.time}>
              {moment(data.createdAt).format('h:mm a')}
            </Text>
          </View>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{uri: `${API_URL}${data.image}`}}
            style={styles.thubNail}
          />
        </CardItem>
        <CardItem style={styles.content}>
          <View>
            <Text numberOfLines={3} style={styles.textContent}>
              {data.content}
            </Text>
          </View>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  content: {
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 7,
    paddingRight: 8,
  },
  radius: {
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  textContent: {
    color: '#9b9b9b',
    fontSize: 15,
  },
  time: {
    color: '#9b9b9b',
    fontSize: 12,
  },
  thubNail: {
    height: 200,
    width: null,
    flex: 1,
  },
  headerCard: {
    paddingLeft: 5,
  },
  textJudul: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeWrapper: {
    paddingLeft: 10,
  },
  min: {
    color: '#9b9b9b',
    fontWeight: 'bold',
  },
});
