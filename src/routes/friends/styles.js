import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  noFriendsMessage: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
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
  profileName: {
    fontWeight: "500"
  },
  profileDescription: {
    marginTop: 20
  }
});

export default styles;
