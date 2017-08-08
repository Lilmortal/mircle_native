import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  datePickerContainer: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  dateTextContainer: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: 7
  },
  dateText: {
    color: "black"
  },
  datePicker: {
    flex: 2
  }
});

export default styles;
