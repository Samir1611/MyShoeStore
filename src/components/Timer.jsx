import React, { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLefted = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLefted;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div
      className="flex  items-center h-full w-full bg-[#f2f2f2] border b-3"
      style={{
        padding: "clamp(0.8rem, 0.8vw, 1.5rem) clamp(2rem, 8vw, 10rem)",
      }}
    >
      <div className="mt-4 sm:mt-0 flex items-center gap-2 sm:gap-8">
        <h1
          className="font-semibold pr-4"
          style={{ fontSize: "clamp(1rem, 1.75vw, 3rem)" }}
        >
          Flash Sales
        </h1>
        <div className="flex gap-4 sm:gap-6 items-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <p
                className="font-semibold font-poppins"
                style={{ fontSize: "clamp(1rem, 2vw, 2.5rem)" }} // Corrected fontSize
              >
                {Object.values(timeLeft)[index]}
              </p>
              <p
                className=""
                style={{ fontSize: "clamp(0.8rem, 1vw, 2rem)" }} // Corrected fontSize
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timer;
