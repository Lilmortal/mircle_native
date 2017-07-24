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
    paddingTop: 20,
    paddingLeft: 20
  },
  link: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  logo: {
    width: 20,
    height: 20
  },
  linkDescription: {
    paddingLeft: 20
  }
});

export default styles;
