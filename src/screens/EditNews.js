import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';
import {Item, Input, Label, Button} from 'native-base';

import {editNews} from '../helpers/validations';

export default function EditNews() {
  return (
    <View style={styles.container}>
      <View>
        <Formik
          initialValues={{
            content: '',
            title: '',
            imageDescription: '',
          }}
          validationSchema={editNews}
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
              <View style={styles.inputWrapper}>
                <Label style={styles.labelText}>Title</Label>
                <Item regular>
                  <Input
                    multiline
                    placeholder="Input title"
                    name="title"
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                  />
                </Item>
                {errors.title && touched.title && (
                  <Text style={styles.textError}>{errors.title}</Text>
                )}
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
              <View style={styles.inputWrapper}>
                <Label style={styles.labelText}>Image Description</Label>
                <Item regular>
                  <Input
                    multiline
                    placeholder="Input description"
                    name="imageDescription"
                    onChangeText={handleChange('imageDescription')}
                    onBlur={handleBlur('imageDescription')}
                    value={values.imageDescription}
                  />
                </Item>
                {errors.imageDescription && touched.imageDescription && (
                  <Text style={styles.textError}>
                    {errors.imageDescription}
                  </Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Label style={styles.labelText}>Content</Label>
                <Item regular>
                  <Input
                    multiline
                    placeholder="Input description"
                    name="content"
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
                <Button onPress={handleSubmit} style={styles.btnUpload} info>
                  <Text>Upload</Text>
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
    marginBottom: 5,
  },
  btnWrapper: {
    alignSelf: 'flex-end',
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
    color: '#9b9b9b',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
