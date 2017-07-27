import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  drawerNavigation: {
    width: null,
    height: null,
    resizeMode: "cover"
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },
  email: {
    fontSize: 10,
    color: "white"
  }
});

export default styles;
