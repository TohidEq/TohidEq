"use client";

import { useEffect, useState } from "react";

const DAY_MS = 86_400_000;

const getDayPercent = () => {
  const now = new Date();
  const elapsed =
    now.getHours() * 3_600_000 +
    now.getMinutes() * 60_000 +
    now.getSeconds() * 1_000 +
    now.getMilliseconds();
  return (elapsed / DAY_MS) * 100;
};

export const useDayPercent = () => {
  const [percent, setPercent] = useState(0);



  useEffect(() => {
    const tick = () => setPercent(getDayPercent());
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (percent+50)%100;
};