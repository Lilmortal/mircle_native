import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  qrCode: {
    flex: 2
  }
});

export default styles;
