import React from "react";
import { assets, testimonialsData } from "../assets/images/assets";
import { motion } from "framer-motion";

const Testomonails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full mx-auto items-center py-10 md:px-20 lg:px-32 overflow-hidden"
      id="Testomonails"
    >
      <h1 className="text-center text-2xl mb-2 md:text-4xl font-bold">
        Customer{" "}
        <span className="font-light underline decoration-1 underline-offset-4 under">
          Testimonails
        </span>
      </h1>
      <p className="max-w-96 text-center mx-auto mb-10 text-gray-600">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="flex justify-center gap-8 flex-wrap ">
        {testimonialsData.map((testimonails, index) => (
          <div
            key={index}
            className="max-w-80 border-gray-100 shadow-lg py-12 px-8 text-center rounded"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonails.image}
              alt={testimonails.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonails.name}
            </h2>
            <p className="text-gray-600 mb-4 text-sm">{testimonails.title}</p>
            <div className="flex justify-center text-red-500 gap-1 mb-4">
              {Array.from({ length: testimonails.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonails.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testomonails;
