import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Thumbnail, Button, Item, Input, Label, Spinner} from 'native-base';
import {Formik} from 'formik';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import ModalSucces from '../components/ModalSuccess';
import ModalError from '../components/ModalError';

import {useSelector, useDispatch} from 'react-redux';
import userAction from '../redux/actions/user';
import {API_URL} from '@env';

//helpers
import {editProfile} from '../helpers/validations';

export default function MyProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState({uri: '', name: '', type: ''});
  const [displayImage, setDispayImage] = useState();
  const cobba = new FormData();

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
        setDispayImage(response.uri);
        setImage({
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
      }
    });
  };

  const onCLose = () => {
    dispatch(userAction.clearMessage());
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

  const saveUser = (values) => {
    cobba.append('avatar', image);
    cobba.append('username', values.username);
    cobba.append('email', values.password);

    dispatch(userAction.updateUser(token, cobba));
  };

  return (
    <View style={styles.container}>
      {user.isSuccess && (
        <ModalSucces
          modal={user.isSuccess}
          closeModal={onCLose}
          message={user.alertMsg}
        />
      )}
      {user.isError && (
        <ModalError
          modal={user.isError}
          closeModal={onCLose}
          message={user.alertMsg}
        />
      )}
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
          <Thumbnail
            source={
              user.user.avatar === null
                ? displayImage !== undefined
                  ? {uri: displayImage}
                  : require('../../assets/default-avatar.png')
                : displayImage !== undefined
                ? {uri: displayImage}
                : {uri: `${API_URL}${user.user.avatar}`}
            }
          />
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
          initialValues={{username: user.user.username, email: user.user.email}}
          validationSchema={editProfile}
          enableReinitialize
          onSubmit={(values) => saveUser(values)}>
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
                <Button onPress={handleSubmit} style={styles.btnSave} info>
                  {user.isLoading ? (
                    <Spinner color="white" size={30} />
                  ) : (
                    <Text style={styles.textSave}>Save</Text>
                  )}
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
    backgroundColor: 'white',
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
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    marginTop: '10%',
    marginRight: '5%',
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
