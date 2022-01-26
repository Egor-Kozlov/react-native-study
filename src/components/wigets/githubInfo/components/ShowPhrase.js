import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import getPhrase from "../api/getPhrase";

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

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: "#751010",
    marginBottom: 13,
    paddingBottom: 2,
  },
  phrase: {
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default ShowPhrase;
