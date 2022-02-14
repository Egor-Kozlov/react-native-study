import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useGetAsyncStorage() {
  console.log("call hook useGetAsyncStorage");

  const [response, setResponse] = useState([]);

  const getAsyncStorageData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? jsonValue(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
    console.log("response AsyncStorage", response);
    return response;
  };

  const setAsyncStorageData = async (key, objValue) => {
    try {
      const jsonValue = JSON.stringify(objValue);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return [getAsyncStorageData, setAsyncStorageData];
}
