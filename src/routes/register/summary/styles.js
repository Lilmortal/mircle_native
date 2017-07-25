import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  summaryBody: {
    flex: 3,
    flexDirection: "column"
  },
  profilePicture: {
    flex: 1,
    alignItems: "center"
  },
  summaries: {
    flex: 2,
    flexDirection: "row"
  },
  summary: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    flexWrap: "wrap"
  },
  summaryDescription: {
    color: "white",
    fontSize: 20
  },
  summaryTitle: {
    fontSize: 10,
    color: "white",
    textAlign: "center"
  }
});

export default styles;
