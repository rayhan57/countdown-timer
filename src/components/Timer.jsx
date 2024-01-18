import React, { useEffect, useState } from "react";
import { removeLocalStorage } from "../utils/localStorage";

const Timer = ({ targetTime, modalShow, setModalShow }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(countdown);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        removeLocalStorage("formData");
        setModalShow(true);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [modalShow]);

  return (
    <div className="mt-10 flex items-end justify-center gap-5 lg:gap-8">
      <TimeSection label="Days" value={time.days} />
      <h2 className="text-4xl font-bold lg:text-5xl">:</h2>
      <TimeSection label="Hours" value={time.hours} />
      <h2 className="text-4xl font-bold lg:text-5xl">:</h2>
      <TimeSection label="Minutes" value={time.minutes} />
      <h2 className="text-4xl font-bold lg:text-5xl">:</h2>
      <TimeSection label="Seconds" value={time.seconds} />
    </div>
  );
};

const TimeSection = ({ label, value }) => {
  const validValue = value ? value.toString().padStart(2, "0") : "00";

  return (
    <div className="text-center">
      <h4>{label}</h4>
      <h2 className="text-4xl font-bold lg:text-5xl">{validValue}</h2>
    </div>
  );
};

export default Timer;
