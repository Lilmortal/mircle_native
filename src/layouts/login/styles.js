import { StyleSheet, Dimensions } from "react-native";

import colors from "../../config/color-palette";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center"
  },
  titleDescription: {
    fontSize: 20
  },
  body: {
    flex: 4,
    justifyContent: "center"
  },
  textInput: {
    color: "white"
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  centerText: {
    color: "white"
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: "purple",
    backgroundColor: "purple",
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  facebookLogo: {
    backgroundColor: "#3b5998",
    borderColor: "#3b5998"
  },
  twitterLogo: {
    backgroundColor: "#1dcaff",
    borderColor: "#1dcaff"
  },
  buttonChildren: {
    flexDirection: "row"
  },
  buttonText: {
    marginLeft: 20,
    color: "white"
  },
  help: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  helpText: {
    color: "white"
  },
  forgottenPassword: {
    flex: 3,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20
  },
  forgottenpasswordTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  forgottenPasswordTitleText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  forgottenPasswordText: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center"
  }
});

export default styles;
