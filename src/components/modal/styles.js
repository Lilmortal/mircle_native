import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: "#d3d3d3",
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  lineOne: {
    flex: 2,
    height: 1,
    backgroundColor: "black"
  },
  icon: {
    flex: 1,
    alignItems: "center"
  },
  lineTwo: {
    flex: 2,
    height: 1,
    backgroundColor: "black"
  },
  title: {
    alignItems: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500"
  },
  modalChildren: {
    marginTop: 10
  }
});

export default styles;
