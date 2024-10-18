import React from "react";

const Spinner = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center h-screen bg-transparent">
      <img
        src="https://i.gifer.com/ZZ5H.gif"
        alt="Loading"
        className="w-16 h-16"
      />
    </div>
  );
};

export default Spinner;
