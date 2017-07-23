import { StyleSheet } from "react-native";

import colors from "../../config/color-palette";

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
    flex: 1,
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
    flex: 2,
    justifyContent: "center"
  },
  textInput: {
    color: "white"
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
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
  }
});

export default styles;
