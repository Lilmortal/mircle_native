import { StyleSheet } from "react-native";

import { colors, fonts } from "../../config";

const styles = StyleSheet.create({
  login: {
    flex: 1
  },
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    alignItems: "center",
    textAlign: "center"
  },
  loginForm: {
    flex: 2,
    justifyContent: "center"
  },
  seperator: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  socialMediaLogin: {
    flex: 1,
    justifyContent: "space-around"
  },
  help: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default styles;
