import { View, Button } from "react-native";
import React, { useState } from "react";
import useTodo from "../../../hooks/useTodo/useTodo";
import ItemList from "./components/ItemList/ItemList";
import Input from "./components/Input/Input";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import styles from "./styles";

export default React.memo(function ToDo() {
  const [modalVisible, openModal, closeModal] = useOpenClose(false)
  const { todoList, setTodoList, addItem, deleteItem, changeItemStatus } = useTodo();

  return (
    <View style={[styles.toDoContainer, todoList.length && styles.fixedHeight]}>
      <ModalWindow modalVisible={modalVisible} close={closeModal} setTodoList={setTodoList} />
      <Input addItem={addItem} />
      <Conditional cond={todoList.length}>
        <ItemList style={styles.itemList} todoList={todoList} deleteItem={deleteItem} changeItemStatus={changeItemStatus} />
        <Button title="Clear all" color="#ab0000" onPress={openModal} />
      </Conditional>
    </View>
  );
});

function useOpenClose() {
  const [opened, setOpened] = useState(false);

  // open, close

  const [opened, open, close]
}

function Conditional({cond, children}) {
  return cond ?  children : null
}
