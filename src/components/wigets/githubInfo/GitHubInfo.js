import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ShowPhrase from "./components/ShowPhrase";
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
    // backgroundColor: "#6121b5",
  },
});

export default GitHubInfo;
