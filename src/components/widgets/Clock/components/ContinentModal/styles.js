import { StyleSheet } from "react-native";
export default StyleSheet.create({
  modalView: {
    margin: 15,
    top: "25%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    paddingBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 140,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    alignSelf: "center",
    marginTop: "3%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  background: {
    ...StyleSheet.absoluteFill,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
});
