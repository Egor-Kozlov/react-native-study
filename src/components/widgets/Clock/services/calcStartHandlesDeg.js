const calcStartHandlesDeg = (currentDate, continent, city) => {
  const dateString = currentDate.toLocaleTimeString("en-GB", {
    timeZone: `${continent}/${city}`,
  });
  const date = dateString.split(":");
  const hours = date[0],
    minutes = date[1],
    seconds = date[2];
  const secondsStartDegree = (360 / 60) * seconds,
    minutesStartDegree = (360 / 60) * minutes + (6 / 60) * seconds,
    hoursStartDegree = (360 / 12) * hours + (30 / 60) * minutes + (0.5 / 60) * seconds;

  return {
    secondHandle: `${secondsStartDegree}deg`,
    minuteHandle: `${minutesStartDegree}deg`,
    hourHandle: `${hoursStartDegree}deg`,
  };
};

export default calcStartHandlesDeg;
