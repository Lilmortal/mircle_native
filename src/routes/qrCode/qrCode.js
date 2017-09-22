import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode";

import { TitleDescriptionText } from "../../components/text";
import styles from "./styles";

const QrCodeScreen = ({ id }) =>
  <View style={styles.container}>
    <View style={styles.title}>
      <TitleDescriptionText bold>
        Your friend will add you by scanning this QR Code.
      </TitleDescriptionText>
    </View>

    <View style={styles.qrCode}>
      <QRCode value={id} size={200} />
    </View>
  </View>;

export default QrCodeScreen;
