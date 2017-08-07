import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  noFeedMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  profileContainer: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 20
  },
  profileName: {
    fontWeight: "500"
  },
  date: {
    fontWeight: "400"
  },
  profileDescription: {
    marginTop: 20
  }
});

export default styles;
