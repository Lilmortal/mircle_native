import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    justifyContent: "flex-end"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  scanner: {
    flex: 2,
    justifyContent: "center"
  },
  scannerText: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
