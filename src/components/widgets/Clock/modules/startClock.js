const startClock = (currentDate, setState) => {
  const secondsDifferent = 1000 - currentDate.getMilliseconds();
  let intervalID;
  const timeoutID = setTimeout(() => {
    setState(new Date());
    intervalID = setTimeout(function tick() {
      setState(new Date());
      intervalID = setTimeout(tick, 1000);
    }, 1000);
  }, secondsDifferent);

  return () => {
    clearTimeout(timeoutID);
    clearInterval(intervalID);
  };
};

export default startClock;
