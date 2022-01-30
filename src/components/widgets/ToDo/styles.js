import { StyleSheet } from "react-native";

export default StyleSheet.create({
  hintText: {
    fontSize: 14,
    marginBottom: "1%",
  },
  textInput: {
    width: "100%",
    paddingHorizontal: "2%",
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
  },
  textInputRed: {
    borderColor: "red",
  },
  textInputBlack: {
    borderColor: "#000000",
  },
  errorMessage: {
    marginTop: 2,
    fontSize: 11,
    color: "#a60000",
    fontStyle: "italic",
  },
});
