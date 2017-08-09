import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: "column"
  },
  profilePictureBackground: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  name: {
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
  biographies: {
    borderWidth: 1,
    borderColor: "black"
  },
  map: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10
  },
  buttonMap: {
    borderColor: "black"
  }
});

export default styles;
