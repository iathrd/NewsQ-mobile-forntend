import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

export default function ModalSuccess({modal, closeModal, message}) {
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
              <Icon name="check" color="white" size={100} />
            </View>
            <View>
              <Text style={styles.textMessage}>{message}!</Text>
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
    backgroundColor: 'rgb(38, 194, 129)',
    borderRadius: 65,
    padding: 15,
    marginBottom: 40,
  },
  textMessage: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
