import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  biography: {
    flexDirection: "row",
    marginBottom: 20
  },
  biographyLabel: {
    flex: 1,
    justifyContent: "center"
  },
  biographyLabelText: {
    fontWeight: "500",
    fontSize: 15
  },
  biographyValue: {
    flex: 1,
    paddingLeft: 20
  },
  biographyValueText: {
    fontSize: 15
  }
});

export default styles;
