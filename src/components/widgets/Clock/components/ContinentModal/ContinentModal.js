import { Text, View, Modal, Pressable, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import data from "../../data/Continents";
import styles from "./styles";

const ModalWindow = ({
  modalVisible,
  setModalVisible,
  continent,
  setContinent,
  setCity,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        onPressIn={() => setModalVisible(false)}
        style={styles.background}
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select continent:</Text>
          <Picker
            selectedValue={continent}
            onValueChange={(value, index) => {
              setCity(data[value][0]);
              setContinent(value);
            }}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            {Object.keys(data).map((element) => {
              return (
                <Picker.Item key={element} label={element} value={element} />
              );
            })}
          </Picker>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
