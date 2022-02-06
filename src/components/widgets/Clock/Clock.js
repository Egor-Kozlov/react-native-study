import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ContinentModal from "./components/ContinentModal/ContinentModal";
import CityModal from "./components/CityModal/CityModal";
import styles from "./styles";

const Clock = () => {
  const [continent, setContinent] = useState("Europe");
  const [city, setCity] = useState("London");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalContinentModalVisible, setContinentModalVisible] =
    useState(false);
  const [modalCityModalVisible, setCityModalVisible] = useState(false);

  setTimeout(() => {
    setCurrentDate(new Date());
  }, 1000);

  const calcStartSecondHandleDeg = (value) => {
    const dateString = currentDate.toLocaleTimeString("en-GB", {
      timeZone: `${continent}/${city}`,
    });
    const date = dateString.split(":");
    const hours = date[0],
      minutes = date[1],
      seconds = date[2];
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
      <Text>Selected timezone:</Text>
      <Text>{`${continent}, ${city}`}</Text>
      <Text style={styles.text}>
        {currentDate.toLocaleTimeString("en-GB", {
          timeZone: `${continent}/${city}`,
        })}
      </Text>
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
      <TouchableOpacity
        onPress={() => setContinentModalVisible(true)}
        style={styles.button}
      >
        <Text>Select continent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCityModalVisible(true)}
        style={styles.button}
      >
        <Text>Select city</Text>
      </TouchableOpacity>
      <ContinentModal
        modalVisible={modalContinentModalVisible}
        setModalVisible={setContinentModalVisible}
        continent={continent}
        setContinent={setContinent}
        setCity={setCity}
      />
      <CityModal
        modalVisible={modalCityModalVisible}
        setModalVisible={setCityModalVisible}
        continent={continent}
        city={city}
        setCity={setCity}
      />
    </View>
  );
};

export default Clock;
