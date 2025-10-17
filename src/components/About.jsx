import React from "react";
import { assets } from "../assets/images/assets";
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex justify-center items-center container flex-col w-full mx-auto p-15 md:px-20 lg:px-32 overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-3">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="max-w-80 text-gray-600 text-center mb-8">
        Passionate about properties, dedicated to your vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/3 max-w-lg"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-700">
          <div className="grid grid-cols-2 gap-6 md:gap-8 w-full 2xl:pr-28">
            <div>
              <p className="text-2xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-800">12+</p>
              <p>Project Completed</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-8 mx-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque
            ipsum nostrum, amet, debitis illum minima ea vero rem perspiciatis
            dolores officiis. Repellendus placeat eum at, recusandae numquam
            eveniet veniam.
          </p>
          <button className="bg-blue-600 text-white py-1 px-3 rounded cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
