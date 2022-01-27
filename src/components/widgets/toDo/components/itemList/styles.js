import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    marginVertical: "1%",
    padding: "2%",
    borderRadius: 5,
    backgroundColor: "#def2ff",
    opacity: 0.7,
    borderWidth: 1,
    borderColor: "#095385",
  },
  toDoText: {
    fontStyle: "italic",
  },
  removeContainer: {
    position: "absolute",
    top: 6,
    right: 2,
    width: 23,
    height: "100%",
  },
  remove: {
    width: 23,
    height: 23,
  },
});
