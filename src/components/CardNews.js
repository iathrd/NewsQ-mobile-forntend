import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Thumbnail, Text, Left, Body, Right} from 'native-base';

export default function CardNews({data, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NewsDetails')}
      style={styles.container}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              small
              source={require('../../assets/default-avatar.png')}
            />
            <Body>
              <Text>Iqbal Athorid</Text>
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
              Gubernur Banten Pakai Pfizer, Sleman Suntik dr Tirta Esok
            </Text>
          </Left>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>08.00pm</Text>
            <Text style={styles.time}>12-10-2020</Text>
          </View>
        </CardItem>

        <CardItem cardBody>
          <Image
            source={require('../../assets/default-avatar.png')}
            style={styles.thubNail}
          />
        </CardItem>
        <CardItem style={styles.content}>
          <View>
            <Text numberOfLines={3} style={styles.textContent}>
              asdknasdnaksdabsdkbasldblasbdabsdk as jhs a sfk askjf as fla s
              asld alf lk asdasldakskldkla klsdk lnaskdn klasndklan skldnak
              ndlaksnlkansklnask lnkl nk ndaklsnd klanklansdk nakaklsdn klas
              nkand jasbdbas kbdakjs bdka
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
    paddingLeft: 10,
  },
});
