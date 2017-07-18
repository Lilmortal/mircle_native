import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  feed: {
    borderBottomWidth: 2,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20
  },
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
