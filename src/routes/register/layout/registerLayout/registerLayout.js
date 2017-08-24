import React from "react";
import { View, Text } from "react-native";

import Button from "../../../../components/button";
import styles from "./styles";

const RegisterLayout = ({
  onPress,
  title,
  lastPage = false,
  children,
  style,
  buttonMessage = "NEXT"
}) =>
  <View style={styles.register}>
    <View style={styles.title}>
      <Text style={styles.titleText}>
        {title}
      </Text>
    </View>
    <View style={[styles.registerChildren, style]}>
      {children}
    </View>
    <Button onPress={onPress} style={styles.submitButton}>
      <Text style={styles.buttonText}>
        {buttonMessage}
      </Text>
    </Button>
  </View>;

export default RegisterLayout;
