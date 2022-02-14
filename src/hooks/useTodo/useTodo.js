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

  const addItem = useCallback(
    (text) => {
      if (!text) {
        return;
      }
      const updatedList = [...todoList, { title: text, _id: generateRandomId(), status: STATUSES.active }];
      setTodoList(updatedList);
    },
    [todoList]
  );

  const deleteItem = useCallback(
    (itemId) => {
      const localItemList = [...todoList];
      const indexElement = localItemList.findIndex((item) => item._id === itemId);

      if (todoList[indexElement].status === STATUSES.deleted) {
        localItemList.splice(indexElement, 1);
        setTodoList(localItemList);
      } else {
        localItemList[indexElement].status = STATUSES.deleted;
        setTodoList(localItemList);
      }
    },
    [todoList]
  );

  const changeItemStatus = useCallback(
    (itemId) => {
      const localItemList = [...todoList];
      const indexElement = localItemList.findIndex((item) => item._id === itemId);

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
