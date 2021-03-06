import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  noFriendsMessage: {
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  friends: {
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
  profileDescription: {
    marginTop: 20
  }
});

export default styles;
