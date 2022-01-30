import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import getText from "../../../../../api/getText";

const ShowPhrase = () => {
  const [phrase, setStatePhrase] = useState("Loading...");

  useEffect(() => {
    getText(setStatePhrase);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.phrase}>{`"${phrase}"`}</Text>
    </View>
  );
};

export default ShowPhrase;
