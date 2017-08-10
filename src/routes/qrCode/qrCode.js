import React from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode";

import styles from "./styles";

const QrCodeScreen = () =>
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>
        Your friend will add you by scanning this QR Code.
      </Text>
    </View>

    <View style={styles.qrCode}>
      <QRCode value="Test" size={200} />
    </View>
  </View>;

export default QrCodeScreen;
