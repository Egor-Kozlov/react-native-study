import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
// import modules
import convertDateToString from "../../../../modules/convertDateToString";
import calcDaysBetweenTwoDates from "../../../../modules/calcDaysBetweenDates";

const ShowUser = () => {
  const [errorResponse, setStateErrorResponse] = useState(false);
  const [userName, setStateUserName] = useState(null);
  const [inputUserName, setStateInputUserName] = useState(null);
  const [userInfo, setStateUserInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getGitHubUser = (inputUserName) => {
    setStateErrorResponse(false);
    console.log(inputUserName);
    fetch(`https://api.github.com/users/${inputUserName}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          setStateErrorResponse(true);
        } else {
          setStateUserInfo(response);
          setStateUserName(response.login);
        }
      });
  };

  useEffect(() => {
    setStateErrorResponse(false);
  }, [inputUserName]);

  return (
    <View>
      {userInfo ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.modalText, styles.modalTextTitle]}>
                {userInfo.login}
              </Text>
              <Image
                style={styles.userAvatar}
                source={{
                  uri: `${userInfo.avatar_url}`,
                }}
              />
              <Text
                style={styles.modalText}
              >{`Based in ${userInfo.location}`}</Text>
              <Text
                style={styles.modalText}
              >{`Count of public repos: ${userInfo.public_repos}`}</Text>
              <Text
                style={styles.modalText}
              >{`Count of followers: ${userInfo.followers}`}</Text>
              <Text
                style={styles.modalText}
              >{`Count of followings: ${userInfo.following}`}</Text>
              <Text
                style={styles.modalText}
              >{`Date of creation: ${convertDateToString(
                new Date(userInfo.created_at)
              )}`}</Text>
              <Text
                style={styles.modalText}
              >{`Date of last update: ${convertDateToString(
                new Date(userInfo.updated_at)
              )}`}</Text>
              <Text>{`Days on GitHub: ${calcDaysBetweenTwoDates(
                new Date(userInfo.created_at)
              )}`}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide info</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : null}

      {userInfo ? (
        <View>
          <Text style={styles.userName}>{`Current user: ${userName}`}</Text>
          <View style={styles.userInfoContainer}>
            <Text>{`Based in ${userInfo.location}`}</Text>
            <Text>{`Count of public repos: ${userInfo.public_repos}`}</Text>
            <Text>{`Count of followers: ${userInfo.followers}`}</Text>
            <Text>{`Count of followings: ${userInfo.following}`}</Text>
            <Text onPress={() => setModalVisible(true)} style={styles.moreInfo}>
              More info...
            </Text>
          </View>
          <Button
            onPress={() => setStateUserInfo(null)}
            color="#ab0000"
            title="Search a new user"
          />
        </View>
      ) : (
        <View>
          <Text style={styles.hintText}>Write GitHub user name:</Text>
          <TextInput
            onChangeText={setStateInputUserName}
            value={inputUserName}
            style={[
              styles.textInput,
              errorResponse ? styles.textInputRed : styles.textInputBlack,
            ]}
            placeholder="GitHub user name"
          />
          {errorResponse ? (
            <Text style={styles.errorMessage}>User doesn't exist</Text>
          ) : null}
          <Button
            onPress={() => getGitHubUser(inputUserName)}
            color="#438ef7"
            title="Search"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 1,
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
  modalTextTitle: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  userAvatar: {
    width: 130,
    height: 130,
    margin: "5%",
    alignSelf: "center",
  },
});

export default ShowUser;
