import { StyleSheet } from "react-native";

import { colors, fonts } from "../../config";

const styles = StyleSheet.create({
  forgotPassword: {
    flex: 1
  },
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    alignItems: "center",
    fontFamily: fonts.loginTitleFont,
    textAlign: "center"
  },
  forgottenPasswordDescription: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center"
  },
  forgottenPasswordSubmitArea: {
    flex: 3,
    justifyContent: "center"
  }
});

export default styles;
