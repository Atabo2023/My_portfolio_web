import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Download } from "lucide-react";
import { MdEmail } from "react-icons/md";
import Data from "./Data";

const Contactpage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    emailjs
      .sendForm(
        "service_obkfc7d", // 🔹 replace with your Service ID
        "template_62ul2wk", // 🔹 replace with your Template ID
        e.target,
        "2CoNvGBk_1upvY78p" // 🔹 replace with your Public Key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            text: "✅ Message sent successfully!",
          });
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus({
            type: "error",
            text: "❌ Failed to send. Please try again later.",
          });
          setLoading(true);
        }
      );
  };

  return (
    <form
      id="Contactpage"
      onSubmit={sendEmail}
      className="md:flex gap-12 overflow-hidden md:m-10 lg:m-10 bg-black md:mx-auto max-w-7xl mx-auto drop-shadow-xl rounded-2xl py-10 px-6"
    >
      <div className="flex-1 p-4 rounded-xl">
        <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-[#ffbd39]">
          Send <br></br>a Message
        </h2>
        <p className="text-left font-rubik text-xl text-white md:text-xl justify-center align-middle py-10">
          whether is a job opportunity, collaboration, Other offers, Message me,
          I will response ASAP
        </p>

        <div className="flex flex-col justify-left align-middle">
          <div className="flex gap-4">
            <FaWhatsapp className="text-sky-500 mt-2 cursor-pointer" />
            <a
              href="https://wa.me/+2348187050485"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-sky-500 hover:text-sky-700 transition-colors cursor cursor-pointer duration-300 text-xl"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex gap-4">
            <FaLinkedin className="text-blue-700 mt-2 cursor-pointer" />
            <a
              href="https://www.linkedin.com/in/onuche-atabo-08a229229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-300 text-xl"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex gap-4">
            <FaGithub className=" text-gray-800 mt-1 cursor-pointer" />
            <a
              href="https://github.com/in/onuche-atabo-08a229229/"
              target="_blank"
              className=" text-white rounded-lg shadow hover:text-gray-900 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          <div className="flex gap-4 ">
            <MdEmail className="text-red-600 mt-1 cursor-pointer" />
            <a
              href="mailto:onuchevictoratabo2020@gmail.com"
              className="text-white rounded-lg shadow hover:text-red-700 transition-colors duration-300"
            >
              Gmail
            </a>
          </div>
        </div>

        <a
          href="/Onuche_resume.pdf"
          // download="Onuche_resume.pdf"
          target="_blank"
          rel="_noopener noreferrer"
          className="flex items-center text-center mx-auto md:mx-0 mb-8 md:mb-0 gap-2 mt-10 w-44 md:w-48 bg-blue-600 text-white px-2 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
        <div className="pointer-events-none">
          <Data />
        </div>
      </div>
      <div></div>
      <div className="flex-1 bg-white md:p-8 gap-8 rounded-xl">
        {" "}
        <h2 className="text-2xl font-bold text-center font-rubik text-black mb-6">
          Get In Touch
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 mt-6 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 border font-rubik mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {/* Button with spinner */}
        <button
          type="submit"
          disabled={loading}
          className="md:px-44 px-20 align-middle mx-auto font-rubik flex items-center flex-col justify-center mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
        {/* Styled success/error message */}
        {status.text && (
          <p
            className={`w-full bg-green-600 font-rubik text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
};

export default Contactpage;
