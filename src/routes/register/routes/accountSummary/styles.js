import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  summaries: {
    flex: 3,
    flexDirection: "column"
  },
  profilePicture: {
    flex: 1,
    alignItems: "center"
  },
  biographies: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  biography: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5
  },
  biographyText: {
    color: "black",
    fontSize: 20
  },
  biographyTitle: {
    fontSize: 10,
    color: "black",
    textAlign: "center"
  }
});

export default styles;
