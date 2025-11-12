import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About1 from "./About1";
import About from "./About";
import Marquee from "react-fast-marquee";
import Contactpage from "./Contactpage";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About1 />
      <About />
      {/* <Profile1 /> */}
      <Profile />
      <Marquee />
      <Contactpage />
      {/* <ConditionalAnimation /> */}
      {/* <div className="flex flex-col md:flex-row">
        <div className="flex-2 p-4 bg-[#000211] h-screen">
          <h2 className="text-6xl font-bold text-white">VICTOR.DEV</h2>
          <p className="text-white text-4xl">
            This is the first column content.
          </p>
          <p className="text-white text-4xl">Frontend developer</p>
        </div>
        <div className="flex-1 p-4 bg-[#111827]">
          <h2 className="text-6xl font-bold text-white">✨✨✨</h2>
          <p className="text-4xl text-white">
            This is the second column content.
          </p>
        </div>
      </div> */}
    </>
    //     <div className="w-full h-screen bg-[#000211]">
    //       <div
    //         className="flex flex-2 text-6xl font-bold w-full h-screen justify-left text-center bg-[#000211] text-white
    // }]"
    //       >
    //         <p className="mt-10"> portfolia website</p>

    //         <div
    //           className="flex flex-3 text-6xl font-bold w-full h-screen justify-center text-center bg-[#3f4caf] text-white
    // }]"
    //         >
    //           <p className="mt-10"> portfolia website</p>
    //         </div>
    //       </div>
    //     </div>
  );
};

export default App;
