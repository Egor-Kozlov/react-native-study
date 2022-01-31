import { View, TextInput, Button } from "react-native";
import { useState } from "react";

import ItemList from "./components/ItemList/ItemList";
import generateRandomId from "../../../modules/generateRandomId";
import styles from "./styles";

const ToDo = () => {
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
    localItemList.splice(indexElement, 1);
    setStateToDoList(localItemList);
  };

  return (
    <View style={styles.toDoContainer}>
      <TextInput
        onSubmitEditing={() => addToDo(inputValue)}
        value={inputValue}
        onChangeText={setStateInputValue}
        style={styles.textInput}
        placeholder="What needs to be done?"
      />
      <Button title="Add" onPress={() => addToDo(inputValue)} />
      <ItemList
        style={styles.itemList}
        toDoList={toDoList}
        deleteListItem={deleteListItem}
      />
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

export default ToDo;
