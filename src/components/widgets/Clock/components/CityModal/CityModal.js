import { Text, View, Modal, Pressable, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import data from "../../../../../modules/continentsList/continents.json";
import styles from "./styles";

const ModalWindow = ({ modalVisible, setModalVisible, continent, city, setCity }) => {
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
          <Text style={styles.modalText}>Select city:</Text>
          <Picker
            selectedValue={city}
            onValueChange={(value) => {
              setCity(value);
            }}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            {data[continent].map((element) => {
              return <Picker.Item key={element} label={element} value={element} />;
            })}
          </Picker>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
