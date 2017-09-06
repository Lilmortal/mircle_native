import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    width: width * 0.9,
    marginTop: 10
  },
  modalButton: {
    justifyContent: "center"
  }
});

export default styles;
