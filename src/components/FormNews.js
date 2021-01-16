import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Formik} from 'formik';
import {Item, Input, Label, Button} from 'native-base';
import {launchImageLibrary} from 'react-native-image-picker';

import {editNews, createNews} from '../helpers/validations';
import {API_URL} from '@env';

import editAction from '../redux/actions/mynews';
import {useSelector, useDispatch} from 'react-redux';

export default function FormNews({
  data = {content: '', title: '', imageDescription: '', id: ''},
  gg = 'create',
}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const news = useSelector((state) => state.mynews);
  const [image, setImage] = useState();
  const [form, setForm] = useState();
  const create = new FormData();
  const input = new FormData();
  const [kkkk, setKkkk] = useState({imgs: ''});
  const [coba, setCoba] = useState({uri: '', name: '', type: ''});

  const openFile = () => {
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
        setImage(response.uri);

        if (gg === 'edit') {
          const forms = new FormData();
          forms.append('image', {
            uri: response.uri,
            name: response.fileName,
            type: response.type,
          });
          setForm(forms);
        } else {
          setKkkk({imgs: response.fileName});
          setCoba({
            uri: response.uri,
            name: response.fileName,
            type: response.type,
          });
        }
      }
    });
  };

  const uploadFile = () => {
    if (form !== undefined) {
      dispatch(editAction.uploadImage(token, data.id, form));
    }
  };

  const sendData = async (values) => {
    input.append('title', values.title);
    input.append('imageDescription', values.imageDescription);
    input.append('content', values.content);
    await dispatch(editAction.editNews(token, data.id, input));
    uploadFile();
  };

  const createData = async (values) => {
    create.append('image', coba);
    create.append('title', values.title);
    create.append('imageDescription', values.imageDescription);
    create.append('content', values.content);
    dispatch(editAction.createNews(token, create));
  };

  return (
    <View style={{backgroundColor: 'transparent'}}>
      <Formik
        initialValues={{
          content: data.content || '',
          title: data.title || '',
          imageDescription: data.imageDescription || '',
          image: kkkk.imgs,
        }}
        validationSchema={gg === 'edit' ? editNews : createNews}
        enableReinitialize
        onSubmit={(values) =>
          gg === 'edit' ? sendData(values) : createData(values)
        }>
        {({
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.imageWrapper}>
              <Item>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={openFile}
                  style={styles.thubNail}>
                  <Image
                    style={styles.image}
                    source={
                      data.image !== undefined
                        ? {
                            uri:
                              image !== undefined
                                ? image
                                : `${API_URL}${data.image}`,
                          }
                        : image !== undefined
                        ? {uri: image}
                        : require('../../assets/default-avatar.png')
                    }
                  />
                </TouchableHighlight>
              </Item>
              {errors.image && touched.imageDescription && (
                <Text style={styles.textError}>{errors.image}</Text>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <Label style={styles.labelText}>Title</Label>
              <Item regular>
                <Input
                  multiline
                  placeholder="Input title"
                  name="title"
                  onChangeText={handleChange('title')}
                  placeholderTextColor="#9b9b9b"
                  style={styles.input}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
              </Item>
              {errors.title && touched.title && (
                <Text style={styles.textError}>{errors.title}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <Label style={styles.labelText}>Image Description</Label>
              <Item regular>
                <Input
                  multiline
                  placeholder="Input description"
                  name="imageDescription"
                  style={styles.input}
                  placeholderTextColor="#9b9b9b"
                  onChangeText={handleChange('imageDescription')}
                  onBlur={handleBlur('imageDescription')}
                  value={values.imageDescription}
                />
              </Item>
              {errors.imageDescription && touched.imageDescription && (
                <Text style={styles.textError}>{errors.imageDescription}</Text>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <Label style={styles.labelText}>Content</Label>
              <Item regular>
                <Input
                  multiline
                  placeholder="Input description"
                  name="content"
                  placeholderTextColor="#9b9b9b"
                  style={styles.input}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  value={values.content}
                />
              </Item>
              {errors.content && touched.content && (
                <Text style={styles.textError}>{errors.content}</Text>
              )}
            </View>
            <View style={styles.btnWrapper}>
              <Button
                disabled={news.isLoading ? true : false}
                onPress={handleSubmit}
                style={styles.btnUpload}
                info>
                <Text style={styles.btnText}>Upload</Text>
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: '15%',
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
  inputWrapper: {
    marginBottom: 30,
  },
  imageWrapper: {
    marginBottom: 30,
  },
  btnWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 50,
    marginRight: '7%',
  },
  btnUpload: {
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
  },
  labelText: {
    color: 'black',
    fontSize: 17,
    marginLeft: 5,
  },
  input: {
    fontSize: 16,
  },
  btnText: {
    color: 'white',
    textTransform:'uppercase',
    fontWeight:'bold'
  },
});
