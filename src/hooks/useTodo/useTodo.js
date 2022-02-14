import { useState, useEffect, useCallback } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import generateRandomId from "../../modules/generateRandomId";

const STORAGE_KEY = "todoList";
const STATUSES = {
  active: "active",
  done: "done",
  deleted: "deleted",
};

export default function useTodo() {
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const jsonValue = await getItem();
    if (jsonValue != null) setTodoList(JSON.parse(jsonValue));
  }, [getItem]);

  useEffect(() => {
    const jsonValue = JSON.stringify(todoList);
    await setItem(jsonValue);
  }, [setItem, todoList]);

  const addItem = useCallback((text) => {
    if (!text) return;

    const newItem = {
      title: text,
      _id: generateRandomId(),
      status: STATUSES.active,
    };

    setTodoList((prevList) => [...prevList, newItem]);
  }, []);

  const deleteItem = useCallback((itemId) => {
    setTodoList((prevList) => {
      const localItemList = [...prevList];
      const indexElement = localItemList.findIndex(
        (item) => item._id === itemId
      );

      if (todoList[indexElement].status === STATUSES.deleted) {
        localItemList.splice(indexElement, 1);
        return localItemList;
      } else {
        localItemList[indexElement].status = STATUSES.deleted;
        return localItemList;
      }
    });
  }, []);

  const changeItemStatus = useCallback(
    (itemId) => {
      const localItemList = [...todoList];
      const indexElement = localItemList.findIndex(
        (item) => item._id === itemId
      );

      if (localItemList[indexElement].status === STATUSES.active) {
        localItemList[indexElement].status = STATUSES.done;
      } else if (localItemList[indexElement].status === STATUSES.done) {
        localItemList[indexElement].status = STATUSES.deleted;
      }

      setTodoList(localItemList);
    },
    [todoList]
  );

  return { todoList, setTodoList, addItem, deleteItem, changeItemStatus };
}
