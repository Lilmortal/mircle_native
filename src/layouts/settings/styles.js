import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  setting: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10
  },
  textfield: {
    width
  },
  slider: {
    width: width * 0.8
  }
});

export default styles;
