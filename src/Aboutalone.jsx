import React from "react";
import { Github, Linkedin, Mail, ArrowLeft, Sparkles } from "lucide-react";
import Bebpic1 from "../src/Images/Bebpic1.jpg";
// import Marquee from "react-fast-marquee";
import { About2 } from "./About2";

export const Aboutalone = () => {
  return (
    <div className="h-[60%] w-full overflow-hidden mt-10 bg-[#000211] text-white px-6 py-10 flex flex-col items-center">
      {/* Back to Portfolio */}
      <a
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <ArrowLeft size={22} />
        <span className="text-sm">Back to Portfolio</span>
      </a>

      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl mb-6">
        <img
          src={Bebpic1}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro */}
      <h1 className="text-4xl font-medium md:font-bold mb-3 text-center">
        About Me
      </h1>

      <p className="text-gray-300 px-2 md:px-0 text-lg leading-relaxed text-center max-w-2xl font-rubik">
        I'm a passionate{" "}
        <span className="text-yellow-400 font-medium md:font-semibold">
          Frontend Engineer||Technical Support Enginneer
        </span>
        with a strong focus on solving technmical issues and building visually
        appealing, responsive, and user-friendly web applications. I love
        turning ideas and business needs into beautiful and functional digital
        experiences.
      </p>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-medium md:font-semibold mb-4 text-yellow-400">
          Get In Touch
        </h2>

        <p className="text-gray-300 px-2 md:px-0 max-w-md mx-auto mb-6 font-rubik">
          Feel free to reach out for collaborations, opportunities, or any
          interesting project.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:onuchevictoratabo2020@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://github.com/Atabo2023"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/onuche-atabo-08a229229/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>

      <div className="pointer-events-none w-screen bg-white mt-10">
        <About2 />
      </div>

      {/* <div>
        <div className="w-full pointer-events-none inset-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-10 whitespace-nowrap flex flex-col font-rubik justify-center overflow-hidden cursor-pointer bg-opacity-5 bg-gradient-to-r from-blue-700 via-white/80 to-transparent">
          <Marquee
            autoFill
            pauseOnHover
          >
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-blue-500">
              💨 Tailwindcss
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-orange-400">
              JavaScript
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-green-400">
              🚀 ReactJS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-neutral-400">
              HTML & CSS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-orange-400">
              Version Control (Git)
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-gray-400">
              Postman
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              UI/UX Principles
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              🧠 API Integration
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              Axios
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              Responsive Design
            </div>
          </Marquee>
        </div>
      </div> */}
    </div>
    // </>
  );
};
