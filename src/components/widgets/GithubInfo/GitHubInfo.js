import { View, StyleSheet } from "react-native";
import ShowPhrase from "./components/ShowPhrase/ShowPhrase";
import ShowUser from "./components/ShowUser";

const GitHubInfo = () => {
  return (
    <View style={styles.widget}>
      <ShowPhrase />
      <ShowUser />
    </View>
  );
};

const styles = StyleSheet.create({
  widget: {
    width: "100%",
  },
});

export default GitHubInfo;
