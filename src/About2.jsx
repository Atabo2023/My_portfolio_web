import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowLeft } from "lucide-react";

export const About2 = () => {
  const handleRedirect = () => {
    window.open("/Aboutalone", "_blank");
  };

  return (
    <>
      {" "}
      <div className="w-full flex flex-col justify-center mt-10">
        <motion.button
          onClick={handleRedirect}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownCircle
              size={60}
              className="text-black drop-shadow-lg transition-all group-hover:text-yellow-400 group-hover:scale-110"
            />
          </motion.div>
          <p className="text-black text-sm mt-2 opacity-80 group-hover:opacity-100">
            Go to About Page
          </p>
        </motion.button>

        {/* Growing Line Animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-1 mx-auto bg-yellow-400 mt-4 rounded-full shadow-md"
        />
        <a
          href="/"
          className="flex mx-auto items-center gap-2 text-black hover:text-blue transition"
        >
          <ArrowLeft size={22} />
          <span className="text-xl text-black font-rubik">
            Back to Portfolio
          </span>
        </a>
      </div>
      {/* </div> */}
    </>
  );
};
