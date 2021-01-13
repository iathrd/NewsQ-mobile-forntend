import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Item} from 'native-base';

export default function NewsDetails() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>
            Jasa Raharja Beri Santunan ke 4 Keluarga Korban Sriwijaya Air
          </Text>
        </View>
        <View style={styles.newsInfoWrapper}>
          <Text style={styles.newsInfo}>
            CNN Indonesia | Rabu, 13/01/2021 18:07 WIB
          </Text>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Item>
          <View style={styles.thubNail}>
            <Image
              style={styles.image}
              source={require('../../assets/default-avatar.png')}
            />
          </View>
        </Item>
      </View>
      <View style={styles.imageDesWrapper}>
        <Text style={styles.imageDes}>
          PT Jasa Raharja (Persero) telah mencairkan santunan kepada empat
          keluarga korban kecelakaan Sriwijaya Air SJ 182 senilai total Rp200
          juta. Ilustrasi. (CNN Indonesia/ Thohirin)
        </Text>
      </View>
      <View>
        <Text style={styles.content}>
          Jakarta, CNN Indonesia -- PT Jasa Raharja (Persero) mencairkan
          santunan kepada empat keluarga korban penumpang Sriwijaya Air SJ 182
          yang telah teridentifikasi. "Jadi sudah kami serahkan empat, dan
          semuanya dapat kami selesaikan kurang dari 24 jam sejak
          diidentifikasi," ujar Direktur Operasional Jasa Raharja Amos
          Sampetoding di Jakarta International Container Terminal, Tanjung
          Priok, Jakarta, seperti dikutip dari Antara, Rabu (13/1). Menurut
          Amos, satu orang teridentifikasi oleh tim DVI Polri, pada Senin lalu.
          Selang sehari, tim berhasil mengidentifikasi tiga orang.
        </Text>
      </View>
    </View>
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
    fontSize: 15,
  },
});
