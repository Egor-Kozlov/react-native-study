import { View, Button } from "react-native";
import React, { useState, useEffect } from "react";

import useGetAsyncStorage from "../../../hooks/useAsyncStorage/useGetAsyncStorage";
import useTodo from "../../../hooks/useTodo/useTodo";
import ItemList from "./components/ItemList/ItemList";
import Input from "./components/Input/Input";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import generateRandomId from "../../../modules/generateRandomId";
import styles from "./styles";

export default React.memo(function ToDo() {
  const STORAGE_KEY = "ToDoList";
  // const [addItem] = useTodo;
  const [modalVisible, setModalVisible] = useState(false);
  const [toDoList, setStateToDoList] = useState([]);
  const [getAsyncStorageData, setAsyncStorageData] = useGetAsyncStorage();

  useEffect(() => {
    setStateToDoList(getAsyncStorageData(STORAGE_KEY));
  }, []);

  useEffect(() => {
    setAsyncStorageData(STORAGE_KEY, [...toDoList]);
  }, [toDoList]);

  const addToDo = (text) => {
    if (!text) {
      return;
    }
    const updatedList = [...toDoList, { title: text, _id: generateRandomId(), status: "active" }];
    setStateToDoList(updatedList);
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
    <View style={toDoList.length ? [styles.toDoContainer, { height: 250 }] : styles.toDoContainer}>
      <ModalWindow modalVisible={modalVisible} setModalVisible={setModalVisible} setStateToDoList={setStateToDoList} />
      <Input addToDo={addToDo} />
      {toDoList.length ? (
        <>
          <ItemList style={styles.itemList} toDoList={toDoList} deleteListItem={deleteListItem} changeCardStatus={changeCardStatus} />
          <Button title="Clear all" color="#ab0000" onPress={() => setModalVisible(true)} />
        </>
      ) : null}
    </View>
  );
});
