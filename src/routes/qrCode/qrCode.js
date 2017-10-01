import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode";

import { TitleDescriptionText } from "@jacktan/mircle_native_components/text";
import styles from "./styles";

class QrCodeScreen extends React.Component {
  componentWillMount() {
    const { connect, sendMessage } = this.props;
    const ws = connect();
    sendMessage("LOL IT WORKS");
  }

  render() {
    const { id } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TitleDescriptionText bold>
            Your friend will add you by scanning this QR Code.
          </TitleDescriptionText>
        </View>

        <View style={styles.qrCode}>
          <QRCode value={id} size={200} />
        </View>
      </View>
    );
  }
}

export default QrCodeScreen;
