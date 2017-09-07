import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 15
  },
  listContainer: {
    flexDirection: "row"
  },
  listChildren: {
    flex: 2
  },
  listLastChild: {
    borderBottomWidth: 0
  },
  selectable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 15
  }
});

export default styles;
