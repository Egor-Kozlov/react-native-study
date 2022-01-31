import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState();

  // setTimeout(() => {
  //   setCurrentDate(getCurrentDate(new Date()));
  // }, 1000);

  const getCurrentDate = () => {
    const date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

    if (hours > 12) {
      hours -= 12;
    }

    const secondsStartDegree = (360 / 60) * seconds,
      minutesStartDegree = (360 / 60) * minutes,
      hoursStartDegree =
        (360 / 12) * hours + (30 / 60) * minutes + (0.5 / 60) * seconds;
  };

  return (
    <View>
      <Text>{currentDate}</Text>
      <View>
        <View style={styles.clock}>
          <View style={styles.handHourContainer}>
            <View style={styles.handHour}></View>
          </View>
          <View style={styles.handMinuteContainer}>
            <View style={styles.handMinute} />
          </View>
          <View style={styles.handSecondContainer}>
            <View style={styles.handSecond} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clock: {
    position: "relative",
    width: 150,
    height: 150,
    backgroundColor: "#e6e6e6",
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
  },
  handSecondContainer: {
    position: "absolute",
    left: 73,
    top: 72,
    transform: [{ rotate: "270deg" }],
  },
  handSecond: {
    height: 65,
    width: 1,
    backgroundColor: "red",
    position: "absolute",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  handMinuteContainer: {
    position: "absolute",
    left: 75,
    top: 75,
    transform: [{ rotate: "180deg" }],
  },
  handMinute: {
    height: 55,
    width: 3,
    backgroundColor: "gray",
    position: "absolute",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  handHourContainer: {
    position: "absolute",
    left: 73,
    top: 75,
    transform: [{ rotate: "280deg" }],
  },
  handHour: {
    height: 41,
    width: 4,
    backgroundColor: "black",
    position: "absolute",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
});

export default Clock;
