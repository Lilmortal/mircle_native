import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation }) => {
  console.log(navigation);
  const { navigate } = navigation;

  return (
    <View>
      <Text>Login page</Text>
      <Button
        onPress={() => navigate("QrCode")}
        title="Press to go to home page"
      />
    </View>
  );
};

Login.navigationOptions = {
  title: "Logout",
  tabBarVisible: false
};

export default Login;
