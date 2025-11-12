import React, { useEffect, useState } from "react";

const createStarArray = () =>
  Array.from({ length: 50 }, () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    delay: `${Math.random() * 2}s`,
  }));

const createShootingStar = () => ({
  id: Math.random(),
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 100}%`,
});

const addShootingStar = (star, setShootingStars) => {
  setShootingStars((prev) => [...prev, star]);
};

const removeShootingStar = (starId, setShootingStars) => {
  setShootingStars((prev) => prev.filter((s) => s.id !== starId));
};

const Stars = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Generate random star positions
  useEffect(() => {
    setStars(createStarArray());
  }, []);

  // Random shooting stars every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = createShootingStar();
      addShootingStar(newStar, setShootingStars);

      // Remove after animation completes
      setTimeout(() => {
        removeShootingStar(newStar.id, setShootingStars);
      }, 4000);
    }, 1000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-t from-gray-900 to-black overflow-hidden flex items-center justify-center">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/20 via-transparent to-transparent blur-3xl" />

      {/* Static twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        ></div>
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-shooting"
          style={{
            top: star.top,
            left: star.left,
            width: "3px",
            height: "3px",
            boxShadow: "0 0 8px 2px white",
          }}
        ></div>
      ))}

      {/* Footer Text */}
      <div className="text-center z-10">
        {/* <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide drop-shadow-lg">
          ✨ Thanks for visiting my portfolio ✨
        </h3> */}
      </div>
      <p className="text-gray-300 mt-6 hidden md:block text-sm ">
        We keep shining! ✨✨✨
      </p>
    </div>
  );
};

export default Stars;
