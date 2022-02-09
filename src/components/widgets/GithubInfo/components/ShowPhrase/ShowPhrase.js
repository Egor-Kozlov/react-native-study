import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import requestText from "../../../../../api/requestText";

const ShowPhrase = () => {
  const [phrase, setStatePhrase] = useState("Loading...");

  const getText = (url) => {
    requestText(url).then((res) => setStatePhrase(res));
  };

  useEffect(() => {
    getText("https://api.github.com/zen");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.phrase}>{`"${phrase}"`}</Text>
    </View>
  );
};

export default ShowPhrase;
