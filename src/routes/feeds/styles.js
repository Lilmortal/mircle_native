import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  noFeedMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  feed: {
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around"
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
