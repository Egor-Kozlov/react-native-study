import React, { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import generateRandomId from "../../modules/generateRandomId";

export default function useTodo() {
  const STORAGE_KEY = "todoList";
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY);
  const [todoList, setTodoList] = useState([]);

  const readItemFromStorage = async () => {
    const jsonValue = await getItem();
    jsonValue != null ? setTodoList(JSON.parse(jsonValue)) : null;
  };

  const writeItemToStorage = async (newValue) => {
    const jsonValue = JSON.stringify(newValue);
    await setItem(jsonValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  useEffect(() => {
    writeItemToStorage(todoList);
  }, [todoList]);

  const addItem = (text) => {
    if (!text) {
      return;
    }
    const updatedList = [...todoList, { title: text, _id: generateRandomId(), status: "active" }];
    setTodoList(updatedList);
  };

  const deleteItem = (itemId) => {
    const localItemList = [...todoList];
    const indexElement = localItemList.findIndex((item) => item._id === itemId);

    if (todoList[indexElement].status === "deleted") {
      localItemList.splice(indexElement, 1);
      setTodoList(localItemList);
    } else {
      localItemList[indexElement].status = "deleted";
      setTodoList(localItemList);
    }
  };

  const changeItemStatus = (itemId) => {
    const localItemList = [...todoList];
    const indexElement = localItemList.findIndex((item) => item._id === itemId);

    if (localItemList[indexElement].status === "active") {
      localItemList[indexElement].status = "done";
    } else if (localItemList[indexElement].status === "done") {
      localItemList[indexElement].status = "deleted";
    }

    setTodoList(localItemList);
  };

  return { todoList, setTodoList, addItem, deleteItem, changeItemStatus };
}
