import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";

import styles from "./styles";

const CustomizedModal = ({
  children,
  visible,
  onRequestClose,
  closeOnOutsideClick = true
}) => {
  const closeModal = closeOnOutsideClick ? onRequestClose : () => {};

  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <TouchableOpacity onPress={closeModal} style={styles.modal}>
        <View style={styles.modalChildren}>
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomizedModal;
