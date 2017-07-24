import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20
  },
  stages: {},
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "500",
    color: "white"
  },
  summary: {
    flex: 1
  },
  summaryText: {
    color: "white"
  },
  submit: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "purple",
    padding: 10,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25
  }
});

export default styles;
