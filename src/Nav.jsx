import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white px-10 fixed top-0 left-0 w-full bg-opacity-60 backdrop-blur-md z-50">
      <div className="container mx-auto px-0 md:pl-32 md:pr-7 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-3xl font-bold font-rubik">VICTOR</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-16 font-rubik text-xl">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#dd" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#work" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Contactpage" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
