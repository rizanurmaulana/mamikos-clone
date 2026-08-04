"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EMPTY_TIME: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return EMPTY_TIME;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex w-fit items-center gap-3 rounded-lg bg-gray-50 px-4 py-2">
      <div className="hidden text-right leading-tight md:block">
        <p className="text-xs text-gray-700">Akan berakhir <br />dalam waktu:</p>
      </div>

      <div className="flex items-center gap-1">
        <TimeBox value={timeLeft.days} label="Hari" wide />

        <span className="text-sm font-bold text-gray-500">:</span>

        <TimeBox value={timeLeft.hours} />

        <span className="text-sm font-bold text-gray-500">:</span>

        <TimeBox value={timeLeft.minutes} />

        <span className="hidden text-sm font-bold text-gray-500 md:block">
          :
        </span>

        <TimeBox value={timeLeft.seconds} />
      </div>
    </div>
  );
}

interface TimeBoxProps {
  value: number;
  label?: string;
  wide?: boolean;
}

function TimeBox({ value, label, wide = false }: TimeBoxProps) {
  return (
    <div
      className={`rounded-lg bg-white py-1 text-center ${
        wide ? "min-w-20 px-4" : "min-w-10"
      }`}
    >
      <span className="text-sm font-medium text-gray-900">
        {String(value).padStart(2, "0")}
      </span>

      {label && (
        <span className="ml-1 text-sm font-medium text-gray-900">{label}</span>
      )}
    </div>
  );
}
