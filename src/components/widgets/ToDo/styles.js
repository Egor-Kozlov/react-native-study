import { StyleSheet } from "react-native";

export default StyleSheet.create({
  toDoContainer: {
    width: "100%",
    //проблема с высотой блока
    //возникает при поиске пользователя в виджете Гитхаб
  },
  textInput: {
    width: "100%",
    paddingHorizontal: "2%",
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
    borderColor: "#000000",
  },
});
