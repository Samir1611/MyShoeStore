import React, { useState, useEffect } from "react";

const LandingPage = () => {
  // Carousel data for images and text
  const carouselData = [
    {
      image: "/III.png",
      title: "New Jordan 6 Rings",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet veniam animi nulla itaque vero distinctio, repellendus et ducimus totam unde sapiente odit official.",
    },
    {
      image: "/I.png",
      title: "Air Max 90",
      description:
        "This classic shoe brings the timeless Air Max design to the next generation with premium cushioning and a sleek look.",
    },
    {
      image: "/k.png",
      title: "Nike ZoomX Vaporfly",
      description:
        "Featuring next-level speed and lightweight cushioning, these shoes are designed for elite performance and endurance.",
    },
  ];

  // State to track current carousel index and animation direction
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // 'left' or 'right' for animation

  // Handler to go to the next image
  const goToNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handler to go to the previous image
  const goToPrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  // Handler for drag/swipe events (basic version)
  const handleDrag = (e) => {
    if (e.movementX < 0) {
      goToNext();
    } else {
      goToPrev();
    }
  };

  // Reset direction after transition to prevent repeated animations
  useEffect(() => {
    const timer = setTimeout(() => setDirection(""), 500); // matches transition duration
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="LandingPage bg-[#f2f2f2] h-[80vh] w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-12"
        style={{
          paddingLeft: "clamp(2rem, 8vw, 10rem)",
          paddingRight: "clamp(2rem, 8vw, 10rem)",
        }}
      >
        {/* Text Section */}
        <div className="text-container col-span-5 flex flex-col pt-[4vh] md:pt-[10vh] xl:pt-[16vh]">
          <p className="opacity-50 text-xs sm:text-xl">Men's Shoe</p>
          <div
            className={`flex flex-col gap-2 sm:gap-6 text-left sm:mr-[10%] transition-all duration-500 ${
              direction === "left"
                ? "animate-swipe-left"
                : direction === "right"
                ? "animate-swipe-right"
                : ""
            }`}
          >
            <div className="text-2xl lg:text-4xl xl:text-6xl font-bold">
              {carouselData[currentIndex].title}
            </div>
            <p className="text-xs md:text-xl leading-[1.8]">
              {carouselData[currentIndex].description}
            </p>
            <div className="btn my-[1vh] xl:mt-[3vh]">
              <button className="py-2 rounded-sm text-xl px-4 bg-black text-white">
                Go to Collection
              </button>
            </div>
            <div className="steped mt-4 sm:mt-8">
              <ul className="flex gap-4 justify-center sm:justify-start">
                {carouselData.map((_, index) => (
                  <li
                    key={index}
                    className={`parallelogram h-4 w-4 bg-black ${
                      index === currentIndex ? "" : "opacity-10"
                    }`}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`imager col-span-7 h-[86%] sm:h-full flex items-center justify-center transition-transform duration-500 ${
            direction === "left"
              ? "animate-swipe-left"
              : direction === "right"
              ? "animate-swipe-right"
              : ""
          }`}
          onDrag={handleDrag}
        >
          <div className="relative w-full h-full">
            <img
              src={carouselData[currentIndex].image}
              className="object-contain w-full h-full"
              alt={carouselData[currentIndex].title}
            />
          </div>
        </div>
      </div>

      {/* Navigation buttons for manual control */}
      <div className="controls flex justify-center mt-4">
        <button onClick={goToPrev} className="px-4 py-2 bg-gray-300">
          Prev
        </button>
        <button onClick={goToNext} className="px-4 py-2 bg-gray-300 ml-4">
          Next
        </button>
      </div>

      {/* Add custom swipe animations */}
      <style jsx>{`
        @keyframes swipe-left {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes swipe-right {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-swipe-left {
          animation: swipe-left 0.5s ease-in-out forwards;
        }
        .animate-swipe-right {
          animation: swipe-right 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
