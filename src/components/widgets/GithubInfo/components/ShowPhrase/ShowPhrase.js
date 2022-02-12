import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import requestText from "../../../../../api/requestText";
const GITHUB_ZEN_URL = "https://api.github.com/zen";

const ShowPhrase = () => {
  const [phrase, setStatePhrase] = useState("Loading...");

  const getText = (url) => {
    requestText(url).then((res) => setStatePhrase(res));
  };

  useEffect(() => {
    getText(GITHUB_ZEN_URL);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.phrase}>"{phrase}"</Text>
    </View>
  );
};

export default ShowPhrase;
