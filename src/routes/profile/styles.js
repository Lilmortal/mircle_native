import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: "column"
  },
  profilePictureBackground: {
    paddingTop: 15,
    paddingBottom: 15,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  headerDescription: {
    justifyContent: "center",
    alignItems: "center"
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
  map: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15
  },
  biographies: {
    borderWidth: 1,
    borderColor: "black"
  }
});

export default styles;
