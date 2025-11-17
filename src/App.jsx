import React from "react";
// import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import About1 from "./About1";
// import About from "./About";
import Marquee from "react-fast-marquee";
import Contactpage from "./Contactpage";
import Profile from "./Profile";
// import { About2 } from "./About2";
import { Aboutalone } from "./Aboutalone";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About1 />
      {/* <About2 /> */}
      {/* <About /> */}
      <Aboutalone />
      {/* <Routes>
        <Route path="/Aboutalone" element={<Aboutalone />} />
      </Routes> */}
      {/* <Profile1 /> */}
      <Profile />
      <Marquee />
      <Contactpage />
     
    
    </>
   
  );
};

export default App;
