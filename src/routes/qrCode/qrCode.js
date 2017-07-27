import React from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode";

import Icon from "../../components/icon";
import { colors, images } from "../../config";
import styles from "./styles";

const QrCodeScreen = () =>
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>
        Show this QR code to your future friend!
      </Text>
    </View>

    <View style={styles.qrCode}>
      <QRCode value="Test" size={200} />
    </View>
  </View>;

QrCodeScreen.navigationOptions = {
  title: "QR Code",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: colors.navigationHeader
  },
  drawerIcon: () => <Icon source={images.qrCodeIcon} />
};

export default QrCodeScreen;
