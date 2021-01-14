import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Thumbnail, Text, Left, Body, Right} from 'native-base';
import {API_URL} from '@env';
import moment from 'moment';

export default function CardNews({data, navigation}) {
  return (
    <View>
      <Card>
        <TouchableOpacity
          activeOpacity={0.2}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate('NewsDetails', {data})}
          style={styles.container}>
          <CardItem>
            <Left>
              <Thumbnail
                small
                source={require('../../assets/default-avatar.png')}
              />
              <Body>
                <Text>{data.creator.username}</Text>
              </Body>
            </Left>
            {/* <Right>
            <Text style={styles.creator}>Iqbal Athorid</Text>
          </Right> */}
          </CardItem>
          <CardItem style={styles.headerCard}>
            <Left>
              <Text
                style={styles.textJudul}
                numberOfLines={3}
                ellipsizeMode="tail">
                {data.title}
              </Text>
            </Left>
            <View style={styles.timeWrapper}>
              <Text style={styles.time}>{moment().format('DD/MM/YYYY')}</Text>
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
                {data.imageDescription}
              </Text>
            </View>
          </CardItem>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  content: {
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 7,
    paddingRight: 8,
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
    paddingLeft: 0,
  },
  textJudul: {
    fontWeight: 'bold',
  },
  timeWrapper: {
    paddingLeft: 10,
  },
});
