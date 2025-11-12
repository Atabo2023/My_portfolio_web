import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Social = () => {
  return (
    <div>
      <div className="flex space-x-8 justify-center align-middle">
        <a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:text-sky-700 transition-colors duration-300 text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/onuche-atabo-08a229229/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition-colors duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Atabo2023"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition-colors duration-300 text-2xl"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:onuchevictoratabo2020@gmail.com"
          className="text-red-600 hover:text-red-800 transition-colors duration-300 text-2xl"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Social;
