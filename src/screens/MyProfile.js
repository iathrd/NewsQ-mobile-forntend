import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Thumbnail, Button, Item, Input, Label, Image} from 'native-base';
import {Formik} from 'formik';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

//helpers
import {editProfile} from '../helpers/validations';

export default function MyProfile() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };
  const openFile = () => {
    setModal(false);
    const option = {
      mediaType: 'photo',
      includeBase64: true,
    };
    launchImageLibrary(option, (response) => {
      if (response.didCancel) {
        console.log('Cancel...');
      } else if (response.error) {
        console.log(response.error);
      } else {
        console.log(response.fileName);
      }
    });
  };
  const openCamera = async () => {
    const option = {
      mediaType: 'photo',
      saveToPhotos: true,
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
      includeBase64: true,
    };
    await launchCamera(option, (response) => {
      if (response.didCancel) {
        console.log('Cancel...');
      } else if (response.error) {
        console.log(response.error);
      } else {
        console.log(response.fileName);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Modal
          onBackButtonPress={closeModal}
          onBackdropPress={closeModal}
          animationInTiming={500}
          animationOutTiming={300}
          isVisible={modal}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContent}>
              <View style={styles.modalLabelWrapper}>
                <Text style={styles.labelModal}>Choose a profile image</Text>
              </View>
              <View>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  style={styles.touchModal}
                  onPress={openCamera}>
                  <Text style={styles.textModal}>Take photo</Text>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  style={styles.touchModal}
                  onPress={openFile}>
                  <Text style={styles.textModal}>Choose from gallery</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>Edit your profile</Text>
      </View>
      <View style={styles.imageWrapper}>
        <View>
          <Thumbnail source={require('../../assets/default-avatar.png')} />
        </View>
        <View style={styles.btnWrapper}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={handleModal}
            style={styles.touch}>
            <Text style={styles.btnText}>Choose an Image</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <Formik
          initialValues={{username: '', email: ''}}
          validationSchema={editProfile}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            values,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <Item stackedLabel style={styles.item}>
                <Label>Username</Label>
                <Input
                  name="username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </Item>

              <View style={styles.errorWrapper}>
                {errors.username && touched.username && (
                  <Text style={styles.textError}>{errors.username}</Text>
                )}
              </View>
              <Item stackedLabel style={styles.item}>
                <Label>Email</Label>
                <Input
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </Item>
              <View style={styles.errorWrapper}>
                {errors.email && touched.email && (
                  <Text style={styles.textError}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.btnWrapper2}>
                <Button onPress={handleSubmit} style={styles.btnSave}>
                  <Text style={styles.textSave}>Save</Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginBottom: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  btnWrapper: {
    marginLeft: 40,
  },
  btnText: {
    fontSize: 16,
    color: '#0e9938',
  },
  btnWrapper2: {
    alignSelf: 'flex-end',
  },
  btnSave: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: '#0e9938',
  },
  textSave: {
    color: 'white',
  },
  errorWrapper: {
    marginTop: 5,
    marginBottom: 5,
  },
  item: {
    marginLeft: 0,
  },
  textError: {
    color: 'red',
    fontSize: 12,
  },
  touch: {
    padding: 15,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  modalContent: {
    backgroundColor: 'white',
    height: '30%',
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  touchModal: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textModal: {
    fontSize: 16,
  },
  modalLabelWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelModal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
