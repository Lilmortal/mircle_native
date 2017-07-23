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
  title: {
    fontWeight: "bold"
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10
  },
  profile: {
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10
  },
  profileBlock: {
    paddingTop: 10,
    paddingBottom: 10
  },
  profileButton: {
    paddingTop: 10,
    paddingBottom: 10
  },
  textfield: {
    width
  },
  slider: {
    width: width * 0.8
  },
  modal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
