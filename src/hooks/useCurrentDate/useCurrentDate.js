import { useState, useEffect } from "react";

export default function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const secondsDifferent = 1000 - currentDate.getMilliseconds();
    let intervalID;
    const timeoutID = setTimeout(() => {
      setCurrentDate(new Date());
      intervalID = setTimeout(function tick() {
        setCurrentDate(new Date());
        intervalID = setTimeout(tick, 1000);
      }, 1000);
    }, secondsDifferent);

    return () => {
      clearTimeout(timeoutID);
      clearInterval(intervalID);
    };
  }, []);

  return currentDate;
}
