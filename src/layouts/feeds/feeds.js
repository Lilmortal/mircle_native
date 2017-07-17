import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

const Feeds = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <StatusBar backgroundColor="steelblue" barStyle="dark-content" />
      <Text>Feeds</Text>
      <Button
        onPress={() => navigate("Login")}
        title="Press to go to login page"
      />
    </View>
  );
};

export default Feeds;
