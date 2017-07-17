import React from "react";
import { View, Text, Button } from "react-native";

const QrCode = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <Text>Qr code page</Text>
      <Button
        onPress={() => navigate("Home")}
        title="Press to go to home page"
      />
    </View>
  );
};

export default QrCode;
