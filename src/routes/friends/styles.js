import { StyleSheet, Dimensions } from "react-native";
import { Header } from "react-navigation";

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  noFriendsMessage: {
    justifyContent: "center",
    alignItems: "center",
    //TODO: Why I have to minus 24 to remove the vertical bar? Where does the 24 come from?
    height: window.height - Header.HEIGHT - 24,
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
