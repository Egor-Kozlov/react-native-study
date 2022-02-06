import { View } from "react-native";
import { useState, useEffect } from "react";

//import components
import InputSearchUser from "./ShowUser/components/InputSearchUser/InputSearchUser";
import ShortUserInfo from "./ShowUser/components/ShortUserInfo/ShortUserInfo";
import ModalWindow from "./ShowUser/components/ModalWindow/ModalWindow";

const ShowUser = () => {
  const [errorResponse, setStateErrorResponse] = useState(false);
  const [userName, setStateUserName] = useState(null);
  const [inputUserName, setStateInputUserName] = useState(null);
  const [userInfo, setStateUserInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getGitHubUser = (inputUserName) => {
    if (!inputUserName) {
      return;
    }
    setStateErrorResponse(false);

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
        <ShortUserInfo
          userName={userName}
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
      {userInfo ? (
        <ModalWindow
          userInfo={userInfo}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : null}
    </View>
  );
};

export default ShowUser;
