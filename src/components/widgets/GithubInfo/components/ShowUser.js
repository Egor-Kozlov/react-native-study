import { View } from "react-native";
import { useState, useEffect } from "react";
import InputSearchUser from "./ShowUser/components/InputSearchUser/InputSearchUser";
import ShortUserInfo from "./ShowUser/components/ShortUserInfo/ShortUserInfo";
import ModalWindow from "./ShowUser/components/ModalWindow/ModalWindow";
import request from "../../../../api/request";
const GITHUB_USER_URL = "https://api.github.com/users/";

const ShowUser = () => {
  const [errorResponse, setStateErrorResponse] = useState(false);
  const [inputUserName, setStateInputUserName] = useState("");
  const [userInfo, setStateUserInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  const getGitHubUser = (inputUserName) => {
    if (!inputUserName) {
      return;
    }
    setStateErrorResponse(false);

    request(GITHUB_USER_URL + inputUserName).then((response) => {
      if (response.message) {
        setStateErrorResponse(true);
      } else {
        setStateUserInfo(response);
      }
    });
  };

  useEffect(() => {
    getGitHubUser(inputUserName);
  }, []);

  useEffect(() => {
    setStateErrorResponse(false);
  }, [inputUserName]);

  return (
    <View>
      {userInfo ? (
        <ShortUserInfo
          userName={userInfo.login}
          userInfo={userInfo}
          setModalVisible={setModalVisible}
          setStateUserInfo={setStateUserInfo}
          setStateInputUserName={setStateInputUserName}
        />
      ) : (
        <InputSearchUser
          setStateInputUserName={setStateInputUserName}
          inputUserName={inputUserName}
          errorResponse={errorResponse}
          getGitHubUser={getGitHubUser}
        />
      )}
      {userInfo ? <ModalWindow userInfo={userInfo} modalVisible={modalVisible} setModalVisible={setModalVisible} /> : null}
    </View>
  );
};

export default ShowUser;
