import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState("");

  return (
    <View>
      <Text>Clock</Text>
    </View>
  );
};

export default Clock;
