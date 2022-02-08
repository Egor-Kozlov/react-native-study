import { Text, View, Modal, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
// import modules

const ModalWindow = ({ modalVisible, setModalVisible, setTodoList }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity onPressIn={() => setModalVisible(false)} style={styles.background} />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure you want to clear the list?</Text>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.button, styles.buttonRed]}
              onPress={() => {
                setTodoList([]);
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
