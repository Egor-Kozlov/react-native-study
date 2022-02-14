import { TextInput, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Input = React.memo(({ addItem }) => {
  const [inputValue, setStateInputValue] = useState("");

  useEffect(() => {
    setStateInputValue("");
  }, [addItem]);

  return (
    <>
      <TextInput
        onSubmitEditing={() => addItem(inputValue)}
        value={inputValue}
        onChangeText={setStateInputValue}
        style={styles.textInput}
        placeholder="What needs to be done?"
      />
      <Button title="Add" onPress={() => addItem(inputValue)} />
    </>
  );
});

const styles = StyleSheet.create({
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

export default Input;
