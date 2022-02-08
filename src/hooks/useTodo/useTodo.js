import React, { useState } from "react";
import generateRandomId from "../../modules/generateRandomId";

export default function useTodo() {
  const [toDoList, setStateToDoList] = useState([]);

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

  return [toDoList, setStateToDoList, addToDo, deleteListItem, changeCardStatus];

  //   const addItem = (title, stateList) => {
  //     if (!title) {
  //       return;
  //     }
  //     const updatedList = [...stateList, { title: text, _id: generateRandomId(), status: "active" }];
  //     return updatedList;
  //   };
}
