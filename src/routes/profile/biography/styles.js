import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  biography: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    width: windowWidth / 3,
    padding: 10
  },
  value: {
    textAlign: "center",
    fontSize: 20
  },
  label: {
    textAlign: "center",
    fontSize: 10
  }
});

export default styles;
