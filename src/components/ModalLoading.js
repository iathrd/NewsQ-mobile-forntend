import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Spinner} from 'native-base';

export default function ModalError({modal, closeModal, message}) {
  return (
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
              <Spinner size={90} color="rgb(34, 167, 240)"/>
            </View>
            <View>
              <Text style={styles.textMessage}>Please wait .....</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  modalContent: {
    backgroundColor: 'white',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalLabelWrapper: {
    padding: 15,
    marginBottom: 30,
  },
  textMessage: {
    fontSize: 19,
    fontWeight: 'bold',
    color:'#9b9b9b'
  },
});
