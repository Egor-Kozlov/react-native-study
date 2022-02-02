import { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

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

export default Clock;
