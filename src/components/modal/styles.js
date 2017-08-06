import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalChildren: {
    width: width * 0.8,
    backgroundColor: "gray",
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15
  }
});

export default styles;
