import React, { use, useEffect, useState } from "react";
import { assets, projectsData } from "../assets/images/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full items-center container mx-auto py-4 px-6 pt-10 my-20 md:px-20 lg:px-32 overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Projects{" "}
        <span className="font-light underline underline-offset-5 under decoration-1">
          Completed
        </span>
      </h1>
      <p className="text-gray-600 mx-w-80 text-center mb-8 mx-auto">
        Crafting Spacing, building Legacies-Explore our Portfolio
      </p>

      {/* -----------------Project Slider---------------- */}

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-300 rounded mr-2 cursor-pointer"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-300 rounded mr-2 cursor-pointer"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Projects slider container   */}

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((item, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={item.image}
                alt={projectsData.title}
                className="w-full h-auto mb-12"
              />
              <div className="absolute flex justify-center left-0 right-0 bottom-5">
                <div className="inline-block bg-white py-1 px-3 w-3/4 shadow-md">
                  <h2 className="text-md font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.price} <span> | </span> {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
