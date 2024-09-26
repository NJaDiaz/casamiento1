"use client";

import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import moment from 'moment';

const CountdownCircle = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const then = moment(eventDate);

      const daysLeft = then.diff(now, 'days'); 
      const hoursLeft = then.diff(now.add(daysLeft, 'days'), 'hours');
      const minutesLeft = then.diff(now.add(hoursLeft, 'hours'), 'minutes');

      setTimeLeft({
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
      });
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [eventDate]);

  const totalDays = moment(eventDate).diff(moment(), 'days');

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-around w-full mb-8">
        <div className="w-48 m-5 flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
          <CircularProgressbar
            value={timeLeft.days}
            maxValue={totalDays}
            text={`${timeLeft.days} días`}
            styles={buildStyles({
              textSize: '20px',
              pathColor: '#ffff',
              textColor: '#ffffff',
              trailColor: '#FF69B4',
            })}
          />
        </div>
        <div className="w-48 m-5 flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
          <CircularProgressbar
            value={timeLeft.hours}
            maxValue={24}
            text={`${timeLeft.hours} horas`}
            styles={buildStyles({
              textSize: '20px',
              pathColor: '#ffff',
              textColor: '#ffffff',
              trailColor: '#f9e79f',
            })}
          />
        </div>
        <div className="w-48 m-5 flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
          <CircularProgressbar
            value={timeLeft.minutes}
            maxValue={60}
            text={`${timeLeft.minutes} min`}
            styles={buildStyles({
              textSize: '20px',
              pathColor: '#ffff',
              textColor: '#ffffff',
              trailColor: '#85929e',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownCircle;
