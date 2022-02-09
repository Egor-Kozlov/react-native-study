const startClock = (currentDate, setState) => {
  const secondsDifferent = 1000 - currentDate.getMilliseconds();
  setTimeout(() => {
    setInterval(() => {
      setState(new Date());
    }, 1000);
  }, secondsDifferent);
};

export default startClock;
