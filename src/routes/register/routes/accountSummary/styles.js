import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  accountSummary: {
    flexDirection: "row"
  },
  profilePicture: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  biography: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "blue"
  }
});

export default styles;
