import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState();

  setTimeout(() => {
    setCurrentDate(getCurrentDate(new Date()));
  }, 1000);

  const getCurrentDate = () => {
    var n = new Date();
    return n.toLocaleString("es-CL");
    //Output : 03-09-2021 17:56:58// <- return some like 'February 2, 2020'
  };

  return (
    <View>
      <Text>{currentDate}</Text>
      <View>
        <View style={styles.clock}>
          <View style={styles.handHour} />
          <View style={styles.handMinute} />
          <View style={styles.handSecond} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clock: {
    width: 150,
    height: 150,
    backgroundColor: "#e6e6e6",
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
  },
  handSecond: {
    height: 65,
    width: 1,
    backgroundColor: "red",
    position: "absolute",
    left: 73,
    top: 11,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  handHour: {
    height: 50,
    width: 4,
    backgroundColor: "black",
    position: "absolute",
    left: 72,
    top: 25,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
});

export default Clock;
