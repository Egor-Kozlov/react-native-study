import { View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import useGetAsyncStorage from "../../../hooks/useAsyncStorage/useGetAsyncStorage";
import useTodo from "../../../hooks/useTodo/useTodo";
import ItemList from "./components/ItemList/ItemList";
import Input from "./components/Input/Input";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import styles from "./styles";

export default React.memo(function ToDo() {
  const STORAGE_KEY = "TodoList";
  const [modalVisible, setModalVisible] = useState(false);
  const [toDoList, setStateToDoList, addToDo, deleteListItem, changeCardStatus] = useTodo();
  const [getAsyncStorageData, setAsyncStorageData] = useGetAsyncStorage();

  useEffect(() => {
    setStateToDoList(getAsyncStorageData(STORAGE_KEY));
  }, []);

  useEffect(() => {
    setAsyncStorageData(STORAGE_KEY, [...toDoList]);
  }, [toDoList]);

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
