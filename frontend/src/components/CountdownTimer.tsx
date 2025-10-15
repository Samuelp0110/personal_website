import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  label?: string; // Optional label prop
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  label = "Launching In", // Default value
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className='text-center text-lg text-rfg font-semibold'>
        🚀 The wait is over — check out my latest project below!
      </div>
    );
  }

  return (
    <div className='text-center text-2xl font-semibold text-rprimary'>
      {label}:{" "}
      <span className='font-mono text-rfg'>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </span>
    </div>
  );
};

export default CountdownTimer;
