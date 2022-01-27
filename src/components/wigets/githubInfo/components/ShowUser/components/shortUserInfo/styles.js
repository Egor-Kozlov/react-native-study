import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
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
  userName: {
    marginBottom: "4%",
    fontSize: 16,
    textAlign: "center",
  },
  userInfoContainer: {
    borderWidth: 3,
    borderRadius: 20,
    padding: "3%",
  },
  errorMessage: {
    marginTop: 2,
    fontSize: 11,
    color: "#a60000",
    fontStyle: "italic",
  },
  moreInfo: {
    textAlign: "right",
    marginTop: "2%",
    fontSize: 12,
    color: "#1b54a6",
  },

  modalView: {
    margin: 15,
    top: "20%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    paddingBottom: 15,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    alignSelf: "center",
    marginTop: "5%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 1,
    textAlign: "left",
  },
  userAvatar: {
    width: 130,
    height: 130,
    margin: "5%",
    alignSelf: "center",
  },
});
