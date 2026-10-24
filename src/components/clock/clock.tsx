
'use client';

import './clock.css';

import { useEffect, useState, type CSSProperties } from 'react';

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());

    updateTime();

    const interval = setInterval(updateTime, 500);
    return () => clearInterval(interval);
  }, []);

  const seconds = time?.getSeconds() ?? 0;
  const minutes = time?.getMinutes() ?? 0;
  const hours = time?.getHours() ?? 0;

  const secondRotation = seconds * 6;
  const minuteRotation = minutes * 6 + seconds * 0.1;
  const hourRotation = (hours % 12) * 30 + minutes * 0.5;

  const handStyle = (rotation: number): CSSProperties =>
    ({ '--rotation': `${rotation}deg` }) as CSSProperties;

  return (
    <div className="clock" id="clock">
      <div className="clock__container">
        <div className="clock__content">
          <div className="clock__frame">
            <div className="clock__dots">
              <span className="clock__dots__12"/>
              <span className="clock__dots__3"/>
              <span className="clock__dots__6"/>
              <span className="clock__dots__9"/>
            </div>

            <div
              className="clock__h"
              style={handStyle(hourRotation)}
            >
              <span />
            </div>

            <div
              className="clock__m"
              style={handStyle(minuteRotation)}
            >
              <span />
            </div>

            <div
              className="clock__s"
              style={handStyle(secondRotation)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
