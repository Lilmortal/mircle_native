import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: "column"
  },
  mainDescription: {
    flexDirection: "row"
  },
  profilePicture: {
    width: 200,
    height: 200
  },
  title: {
    fontWeight: "500"
  },
  profileDescription: {
    flexDirection: "column",
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    flexWrap: "wrap"
  },
  requestDescription: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30
  }
});

export default styles;
