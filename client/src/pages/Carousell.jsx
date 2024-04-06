import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hovered, setHovered] = useState(false);

  const goToSlide = (index) => {
    if (!transitioning && index !== currentIndex) {
      setTransitioning(true);
      setCurrentIndex(index);
    }
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (!hovered) {
      const intervalId = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, hovered]);

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1"
        onClick={goToPreviousSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1"
        onClick={goToNextSlide}
      >
        {">"}
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-white ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const images = [
  '/assets/ai_plant/cute.avif',
  '/assets/ai_plant/g.avif',
  '/assets/ai_plant/patta.avif',
  '/assets/ai_plant/pila.avif',
  '/assets/ai_plant/ptta.avif',
  '/assets/ai_plant/red.avif',
];

export const Carousell = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel images={images} />
    </div>
  );
};
