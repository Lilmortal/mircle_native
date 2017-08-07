import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const CustomizedModal = ({
  children,
  visible,
  onRequestClose,
  closeOnOutsideClick = true,
  Icon,
  title
}) =>
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <TouchableOpacity
      onPress={closeOnOutsideClick ? onRequestClose : undefined}
      style={styles.modal}
      activeOpacity={2}
    >
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <View style={styles.lineOne} />
          <View style={styles.icon}>
            {Icon}
          </View>
          <View style={styles.lineTwo} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {title}
          </Text>
        </View>
        <View style={styles.modalChildren}>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  </Modal>;

export default CustomizedModal;
