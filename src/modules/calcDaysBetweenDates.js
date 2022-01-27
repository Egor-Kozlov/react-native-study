const calcDaysBetweenTwoDates = (pastDate) => {
  const currentDate = new Date();
  pastDate = new Date(pastDate);
  const oneDay = 1000 * 60 * 60 * 24;
  // Calculating the time difference between two dates
  const diffInTime = currentDate.getTime() - pastDate.getTime();
  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};

export default calcDaysBetweenTwoDates;
