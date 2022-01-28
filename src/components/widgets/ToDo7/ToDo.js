import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

import ItemList from "./components/ItemList7/ItemList";
import generateRandomId from "../../../modules/generateRandomId";

const ToDo = () => {
  const [toDoList, setStateToDoList] = useState([]);
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

  const deleteListItem = (itemId, itemList) => {
    const indexElement = itemList.findIndex((item) => item._id === itemId);
    itemList.splice(indexElement, 1);
    setStateToDoList([...itemList]);
  };

  return (
    <View style={styles.toDoContainer}>
      <TextInput
        value={inputValue}
        onChangeText={setStateInputValue}
        style={styles.textInput}
        placeholder="What needs to be done?"
      />
      <Button title="Add" onPress={() => addToDo(inputValue)} />
      <ItemList toDoList={toDoList} deleteListItem={deleteListItem} />
      {toDoList.length ? (
        <Button
          title="Clear all"
          color="red"
          onPress={() => setStateToDoList([])}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  toDoContainer: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    paddingHorizontal: "2%",
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
    borderColor: "#000000",
  },
});

export default ToDo;
