import { StyleSheet, Dimensions } from "react-native";

const styles = {
  appLayout: {
    flex: 1,
    flexDirection: "column"
  },
  camera: {
    flex: 1,
    backgroundColor: "blue",
    zIndex: 1
    //position: "absolute",
  },
  qrCode: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  qrCodeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red"
  }
};

export default styles;
