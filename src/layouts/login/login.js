import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <Text>Login page</Text>
      <Button
        onPress={() => navigate("Home")}
        title="Press to go to home page"
      />
    </View>
  );
};

export default Login;
