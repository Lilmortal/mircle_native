import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

const Home = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <StatusBar backgroundColor="steelblue" barStyle="dark-content" />
      <Text>Home</Text>
      <Button
        onPress={() => navigate("Login")}
        title="Press to go to login page"
      />
    </View>
  );
};

export default Home;
