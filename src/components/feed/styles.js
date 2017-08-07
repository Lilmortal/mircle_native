import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  feed: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  children: {
    flex: 10,
    flexDirection: "row"
  },
  selectable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
