import { Text, View, Modal, Pressable, Image } from "react-native";
import styles from "./styles";
// import modules
import convertDateToString from "../../../../../../../modules/convertDateToString";
import calcDaysBetweenTwoDates from "../../../../../../../modules/calcDaysBetweenDates";

const ModalWindow = ({ userInfo, modalVisible, setModalVisible }) => {
  return (
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
  );
};

export default ModalWindow;
