import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  noFeedMessage: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight
  },
  feedContainer: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 20
  },
  feedName: {
    fontWeight: "500"
  },
  date: {
    fontWeight: "400"
  },
  feedMessage: {
    marginTop: 20
  }
});

export default styles;
