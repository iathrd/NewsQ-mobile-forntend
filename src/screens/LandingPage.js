import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'native-base';

export default function LandingPage({navigation}) {
  return (
    <View style={styles.parent}>
      <ImageBackground
        style={styles.content}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../assets/landing.jpg')}>
        <View style={styles.imageContent}>
          <View>
            <Text style={styles.label}>All news without fear or favor</Text>
          </View>
          <View style={styles.btn}>
            <View style={styles.ButtonWrapper}>
              <Button
                onPress={() => navigation.navigate('Register')}
                style={styles.btnSignUp}
                full
                bordered>
                <Text style={styles.btnSignUpText}>SignUp</Text>
              </Button>
              <Button
                onPress={() => navigation.navigate('Login')}
                style={styles.btnLogin}
                full
                info>
                <Text style={styles.btnSignUpText}>Login</Text>
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  imageContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '25%',
    paddingBottom: '15%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  label: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  ButtonWrapper: {
    flex: 1,
  },
  btn: {
    flexDirection: 'row',
  },
  btnSignUp: {
    borderRadius: 10,
    borderColor: '#2196F3',
    marginBottom: 20,
  },
  btnSignUpText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btnLogin: {
    borderRadius: 10,
  },
});
