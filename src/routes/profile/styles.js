import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: "column"
  },
  profileImageBackground: {
    paddingTop: 15,
    paddingBottom: 15,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  headerDescription: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerUserInfo: {
    textAlign: "center"
  },
  map: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15
  },
  biographies: {
    borderWidth: 1,
    borderColor: "black"
  }
});

export default styles;
