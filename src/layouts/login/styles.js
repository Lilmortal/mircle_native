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
    justifyContent: "center",
    alignItems: "center"
  },
  fingerprint: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "black"
  }
});

export default styles;
