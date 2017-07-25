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
  loginFields: {
    flex: 2,
    justifyContent: "center"
  },
  loginText: {
    fontSize: 18,
    fontWeight: "500"
  },
  seperator: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    borderColor: "#3b5998"
  },
  twitterButton: {
    backgroundColor: "#00aced",
    borderColor: "#00aced"
  },
  icon: {
    marginRight: 20
  },
  help: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  forgottenPasswordDescription: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center"
  },
  forgottenPassword: {
    flex: 3,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default styles;
