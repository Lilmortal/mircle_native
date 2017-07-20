import { StyleSheet } from "react-native";

import colors from "../../styles/color-palette";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.mircle
  },
  title: {
    flex: 1,
    justifyContent: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    fontFamily: fonts.loginTitleFont
  },
  scanner: {
    flex: 2,
    justifyContent: "center"
  },
  scannerText: {
    justifyContent: "center",
    alignItems: "center"
  },
  fingerprint: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "black"
  }
});

export default styles;
