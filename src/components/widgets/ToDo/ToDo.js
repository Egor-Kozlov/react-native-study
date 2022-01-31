import { View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

import ItemList from "./components/ItemList/ItemList";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import generateRandomId from "../../../modules/generateRandomId";
import styles from "./styles";

const ToDo = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [toDoList, setStateToDoList] = useState([
    { _id: "l8hpe0mn868k", status: "active", title: "Active card" },
    { _id: "l8hpe0mn868T", status: "done", title: "Done card" },
    { _id: "l8hpe0mn868r", status: "deleted", title: "Deleted card" },
  ]);
  const [inputValue, setStateInputValue] = useState(null);

  const addToDo = (text) => {
    if (!text) {
      return;
    }
    setStateToDoList([
      ...toDoList,
      { title: text, _id: generateRandomId(), status: "active" },
    ]);
    setStateInputValue(null);
    console.log(toDoList);
  };

  const deleteListItem = (itemId) => {
    const localItemList = [...toDoList];
    const indexElement = localItemList.findIndex((item) => item._id === itemId);
    if (toDoList[indexElement].status === "deleted") {
      localItemList.splice(indexElement, 1);
      setStateToDoList(localItemList);
    } else {
      localItemList[indexElement].status = "deleted";
      setStateToDoList(localItemList);
    }
  };

  const changeCardStatus = (itemId) => {
    const localItemList = [...toDoList];
    const indexElement = localItemList.findIndex((item) => item._id === itemId);

    if (localItemList[indexElement].status === "active") {
      localItemList[indexElement].status = "done";
    } else if (localItemList[indexElement].status === "done") {
      localItemList[indexElement].status = "deleted";
    }

    setStateToDoList(localItemList);
  };

  return (
    <View style={styles.toDoContainer}>
      <ModalWindow
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setStateToDoList={setStateToDoList}
      />
      <TextInput
        onSubmitEditing={() => addToDo(inputValue)}
        value={inputValue}
        onChangeText={setStateInputValue}
        style={styles.textInput}
        placeholder="What needs to be done?"
      />
      <Button title="Add" onPress={() => addToDo(inputValue)} />
      {toDoList.length ? (
        <>
          <ItemList
            style={styles.itemList}
            toDoList={toDoList}
            deleteListItem={deleteListItem}
            changeCardStatus={changeCardStatus}
          />
          <Button
            title="Clear all"
            color="red"
            // onPress={() => setStateToDoList([])}
            onPress={() => setModalVisible(true)}
          />
        </>
      ) : null}
    </View>
  );
};

export default ToDo;
