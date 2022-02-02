import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing, Button } from "react-native";
import convertDateToString from "../../../modules/convertDateToString";

const Clock = () => {
  const [testCurrentDate, setTestCurrentDate] = useState();
  const [currentDate, setCurrentDate] = useState();
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  // const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  setTimeout(() => {
    setTestCurrentDate(new Date().toLocaleTimeString());
    // setCurrentDate(new Date());
  }, 1000);

  const startAnim = () => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 60000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

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
      <Text>{testCurrentDate}</Text>
      <Button onPress={async () => startAnim()} title="On" />
      {/* <Button onPress={() => Animated.loop.stop()} title="Off" /> */}
      <View>
        <View style={styles.clock}>
          <View style={[styles.handHourContainer]}>
            <View style={styles.handHour} />
          </View>
          <View style={styles.handMinuteContainer}>
            <View style={styles.handMinute} />
          </View>
          <Animated.View style={[styles.handSecondContainer, animatedStyle]}>
            <View style={styles.handSecond} />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
  clock: {
    position: "relative",
    width: 150,
    height: 150,
    backgroundColor: "#e6e6e6",
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    transform: [{ rotate: "180deg" }],
  },
  handSecondContainer: {
    position: "absolute",
    left: 73,
    top: 74,
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
    transform: [{ rotate: "290deg" }],
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
