import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "./styles";
import getPhrase from "../../api/getPhrase";

const ShowPhrase = () => {
  const [phrase, setStatePhrase] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.github.com/zen")
      .then((response) => response.text())
      .then((res) => setStatePhrase(res));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.phrase}>{`"${phrase}"`}</Text>
    </View>
  );
};

export default ShowPhrase;