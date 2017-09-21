import { StyleSheet, Dimensions } from "react-native";
import { Header } from "react-navigation";

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  noFeedMessage: {
    justifyContent: "center",
    alignItems: "center",
    //TODO: Why I have to minus 24 to remove the vertical bar? Where does the 24 come from?
    height: window.height - Header.HEIGHT - 24
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
