import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
const images = [
  '/assets/ai_plant/cute.avif',
  '/assets/ai_plant/cute.avif',
  '/assets/ai_plant/cute.avif',
  '/assets/ai_plant/cute.avif',
  '/assets/ai_plant/cute.avif',
  '/assets/ai_plant/cute.avif',
];
export const Carousell = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, paused: true });

    // Define curve path (replace with your desired curve)
    const curvePath = `M 0,100  C 100,7
    0 200,70 300,100  S 400,130 300,200  C 200,270 100,270 0,200 Z`;

    images.forEach((image, index) => {
      const imageRef = carouselRef.current.children[index];

      // Set image position on the curve based on index
      const angle = index * (360 / images.length);
      const radius = 150; // Adjust radius as needed

      const x = radius * Math.cos(angle * Math.PI / 180);
      const y = radius * Math.sin(angle * Math.PI / 180);

      timeline.to(imageRef, {
        duration: 2,
        ease: "power3.inOut",
        x,
        y,
        rotation: angle,
      });
    });

    timeline.play();

    return () => timeline.kill(); // Cleanup animation on unmount
  }, [images]);

  return (
    <div ref={carouselRef} className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg"
        />
      ))}
    </div>
  );
};
