"use client";

import moment from "moment-timezone";
import { useEffect, useState } from "react";

interface Props {
  timeZone: string;
}

const LiveClock = ({ timeZone: city }: Props) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(city).format("HH:mm");
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [city]);

  return (
    <div className="text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>Aleppo</span>
          <span>{time}</span>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LiveClock;
