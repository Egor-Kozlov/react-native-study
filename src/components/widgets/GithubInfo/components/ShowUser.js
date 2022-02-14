import { View } from "react-native";
import { useState, useEffect } from "react";
import InputSearchUser from "./ShowUser/components/InputSearchUser/InputSearchUser";
import ShortUserInfo from "./ShowUser/components/ShortUserInfo/ShortUserInfo";
import ModalWindow from "./ShowUser/components/ModalWindow/ModalWindow";
import request from "../../../../api/request";
const GITHUB_USER_URL = "https://api.github.com/users/";

const ShowUser = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputUserName, setStateInputUserName] = useState("");
  const { loading, error, userInfo } = useGithubUserInfo(username);

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
          onSumbit={setUsername}
          loading={loadingIndicator}
        />
      )}
      <ModalWindow
        userInfo={userInfo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default ShowUser;
