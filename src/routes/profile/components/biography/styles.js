import { StyleSheet, Dimensions } from "react-native";

import { NUM_OF_COLUMNS } from "../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  biography: {
    width: windowWidth / NUM_OF_COLUMNS,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    padding: 10,
    height: 100,
    justifyContent: "center"
  },
  biographyText: {
    textAlign: "center"
  }
});

export default styles;
