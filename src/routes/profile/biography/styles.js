import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: "column"
  },
  profilePicture: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  profileName: {
    marginBottom: 10
  },
  profileNameText: {
    fontWeight: "500",
    fontSize: 35,
    textAlign: "center",
    color: "white"
  },
  email: {
    fontSize: 15,
    textAlign: "center",
    color: "white"
  },
  biography: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingRight: 20
  },
  biographyList: {
    padding: 20
  },
  biographyListText: {
    fontSize: 20
  },
  biographyDescription: {
    fontSize: 10,
    textAlign: "center"
  }
});

export default styles;
