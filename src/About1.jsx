import React from "react";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";

const About1 = () => {
  return (
    // <>
    <div className="bg-black bg-cover relative flex flex-col items-center  py-8 md:py-0 justify-center md:w-full md:h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center md:max-w-2xl md:px-4">
        <h1 className="font-rubik text-3xl md:text-5xl font-bold text-amber-600 mdmmb-4">
          HELLO, WORLD.
        </h1>
        <div className="w-full overflow-hidden font-rubik text-center text-white md:mb-4">
          <TypeAnimation
            sequence={[
              "I'm Victor Onuche",
              1000,
              "A Software Engineer",
              1000,
              "& Tech Support Engineer",
              1000,
            ]}
            wrapper="span"
            speed={20}
            className="md:block text-base sm:text-xl md:text-5xl font-bold text-neutral-300"
            repeat={Infinity}
          />
        </div>

        <h2 className="text-lg font-rubik px-6 md:px-0 text-gray-200 mb-6">
          SOFTWARE ENGINEER || TECHNICAL SUPPORT ENGINEER
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#About"
          className="px-4 w-auto z-10 py-2 md:px-8 md:py-2 border-2 text-white font-normal text-2xl md:text-3xl rounded-lg shadow hover:bg-white hover:text-black transition"
        >
          Read More About Me
        </a>
      </div>

      <div className="bg-white w-72 md:w-80 p-3 mt-8 align-middle z-0 drop-shadow-xl rounded-xl">
        <Social />
      </div>
    </div>
  );
};

export default About1;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Atabo2023/My_portfolio_web.git
// git push -u origin main
