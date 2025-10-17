import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div
      className="bg-cover min-h-screen w-full bg-center overflow-hidden flex"
      id="header"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />
      <motion.div
      initial={{opacity: 0 , y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1 , y: 0}}
      viewport={{once: true}}

      className="text-white flex flex-col container justify-center items-center lg:px-32 md:px-20">
        <h2 className="text-5xl sm:text-7xl md:text-[82px.] inline-block mx-w-3xl pt-20 font-semibold text-center">
          Explore homes that <br />fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border rounded py-2 px-6 border-white">Projects</a>
          <a href="#Contact" className="border rounded py-2 px-6 bg-blue-500">Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
