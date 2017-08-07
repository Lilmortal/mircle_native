import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  register: {
    flex: 1,
    flexDirection: "column"
  },
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "500",
    color: "black"
  },
  registerChildren: {
    flex: 7,
    justifyContent: "center"
  },
  submitButton: {
    flex: 1,
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
