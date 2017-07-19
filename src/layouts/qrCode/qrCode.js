import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const QrCode = () =>
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>
        Show this QR code to your future friend!
      </Text>
    </View>

    <View style={styles.qrCode}>
      <Text>Qr code</Text>
    </View>
  </View>;

export default QrCode;
