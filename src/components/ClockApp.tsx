"use client";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./shadcnui/sliding-number";
import { format } from "date-fns";

const ClockApp = () => {
  const [houre, setHoures] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [meridiem, setMeridiem] = useState("xx");
  const [date, setDate] = useState(format(new Date(), "eeee, dd LLLL yyyy"));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = new Date();

      setHoures(format(currentDateTime, "hh"));
      setMinutes(format(currentDateTime, "mm"));
      setSeconds(format(currentDateTime, "ss"));
      setMeridiem(format(currentDateTime, "a"));
      setDate(format(currentDateTime, "eeee, dd LLLL yyyy"));
    }, 1000 * 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1 font-mono text-9xl">
        <SlidingNumber
          value={parseInt(houre)}
          padStart={true}
        />
        <span className="animate-pulse">:</span>

        <SlidingNumber
          value={parseInt(minutes)}
          padStart={true}
        />
        <span className="animate-pulse">:</span>

        <SlidingNumber
          value={parseInt(seconds)}
          padStart={true}
        />

        <span className="ms-2">{meridiem}</span>
      </div>

      <div className="text-center text-6xl">{date}</div>
    </div>
  );
};

export default ClockApp;
