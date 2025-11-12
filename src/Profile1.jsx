import React from "react";

const Profile1 = () => {
  return (
    // <>
    <>
      <p className="text-center text-3xl font-bold font-rubik text-[#ffbd39] underline underline-offset-8 border-black mt-12 mb-10">
        PORTFOLIO
      </p>
      <p className="font-montserrat font-semibold text-center text-black align-middle text-2xl">
        Check Out My Work
      </p>
      {/* <Portfolio /> */}
      <div className="flex gap-16 m-12">
        <div className="flex-1 bg-blue-200 p-4 h-screen rounded-xl">Item 1</div>
        <div className="flex-1 bg-blue-300 p-4 rounded-xl">Item 2</div>
      </div>
    </>
  );
};

export default Profile1;
