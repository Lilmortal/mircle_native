import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  registerForm: {
    flex: 3,
    justifyContent: "center"
  },
  registerTextField: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  submitArea: {
    flex: 1
  },
  button: {
    borderColor: "purple",
    backgroundColor: "purple"
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25
  }
});

export default styles;
