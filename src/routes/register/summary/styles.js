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
    borderColor: "white",
    borderRadius: 5
  },
  biographyText: {
    color: "white",
    fontSize: 20
  },
  biographyTitle: {
    fontSize: 10,
    color: "white",
    textAlign: "center"
  }
});

export default styles;
