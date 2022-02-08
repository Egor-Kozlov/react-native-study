import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useGetAsyncStorage() {
  console.log("call hook");

  const [response, setResponse] = useState([]);

  const getAsyncStorageData = (key) => {
    (async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        jsonValue != null ? setResponse(JSON.parse(jsonValue)) : null;
      } catch (e) {
        // error reading value
      }
      console.log("response", response);
      return response;
    })(key);
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
