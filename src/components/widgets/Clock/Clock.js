import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = () => {
  const [testCurrentDate, setTestCurrentDate] = useState();

  setTimeout(() => {
    setTestCurrentDate(new Date().toLocaleTimeString());
  }, 1000);

  const calcStartSecondHandleDeg = (value) => {
    const date = new Date();
    const hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
    const secondsStartDegree = (360 / 60) * seconds,
      minutesStartDegree = (360 / 60) * minutes + (6 / 60) * seconds,
      hoursStartDegree =
        (360 / 12) * hours + (30 / 60) * minutes + (0.5 / 60) * seconds;

    if (value === "second") {
      return `${secondsStartDegree}deg`;
    } else if (value === "minute") {
      return `${minutesStartDegree}deg`;
    } else if (value === "hour") {
      return `${hoursStartDegree}deg`;
    }
  };

  const animatedStyleSecond = {
    transform: [
      {
        rotate: calcStartSecondHandleDeg("second"),
      },
    ],
  };

  const animatedStyleMinute = {
    transform: [
      {
        rotate: calcStartSecondHandleDeg("minute"),
      },
    ],
  };

  const animatedStyleHour = {
    transform: [
      {
        rotate: calcStartSecondHandleDeg("hour"),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{testCurrentDate}</Text>
      <View>
        <View style={styles.clock}>
          <View style={styles.whiteBackgroung} />
          <View style={[styles.handHourContainer, animatedStyleHour]}>
            <View style={styles.handHour} />
          </View>
          <View style={[styles.handMinuteContainer, animatedStyleMinute]}>
            <View style={styles.handMinute} />
          </View>
          <View style={[styles.handSecondContainer, animatedStyleSecond]}>
            <View style={styles.handSecond} />
          </View>
          <View style={styles.center} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontStyle: "italic",
    marginBottom: 10,
  },
  clock: {
    position: "relative",
    width: 150,
    height: 150,
    marginBottom: 15,
    backgroundColor: "#e6e6e6",
    borderRadius: 100,
    transform: [{ rotate: "180deg" }],
    borderWidth: StyleSheet.hairlineWidth,
  },
  whiteBackgroung: {
    position: "absolute",
    top: 25,
    left: 24,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#b07886",
    borderWidth: StyleSheet.hairlineWidth,
    opacity: 0.4,
  },
  center: {
    position: "absolute",
    top: 70,
    left: 68,
    width: 9,
    height: 9,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    backgroundColor: "white",
  },
  handSecondContainer: {
    position: "absolute",
    left: 73,
    top: 76,
  },
  handSecond: {
    height: 90,
    width: 1,
    backgroundColor: "red",
    position: "absolute",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  handMinuteContainer: {
    position: "absolute",
    left: 74,
    top: 75,
    transform: [{ rotate: "290deg" }],
  },
  handMinute: {
    height: 62,
    width: 3,
    backgroundColor: "gray",
    position: "absolute",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  handHourContainer: {
    position: "absolute",
    left: 74,
    top: 75,
    transform: [{ rotate: "180deg" }],
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
