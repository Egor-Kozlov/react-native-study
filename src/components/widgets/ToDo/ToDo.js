import { View, Button } from "react-native";
import React, { useState } from "react";
import useTodo from "../../../hooks/useTodo/useTodo";
import ItemList from "./components/ItemList/ItemList";
import Input from "./components/Input/Input";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import styles from "./styles";

export default React.memo(function ToDo() {
  const [modalVisible, setModalVisible] = useState(false);
  const { todoList, setTodoList, addItem, deleteItem, changeItemStatus } = useTodo();

  return (
    <View style={[styles.toDoContainer, todoList.length ? { height: 250 } : null]}>
      <ModalWindow modalVisible={modalVisible} setModalVisible={setModalVisible} setTodoList={setTodoList} />
      <Input addItem={addItem} />
      {todoList.length ? (
        <>
          <ItemList style={styles.itemList} todoList={todoList} deleteItem={deleteItem} changeItemStatus={changeItemStatus} />
          <Button title="Clear all" color="#ab0000" onPress={() => setModalVisible(true)} />
        </>
      ) : null}
    </View>
  );
});
