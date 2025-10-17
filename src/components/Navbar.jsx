import React, { useState } from "react";

import { assets } from "../assets/images/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="absolute z-10 flex w-full t-0 left-0">
      <div className="flex items-center container justify-between mx-auto  py-4 px-6 md:px-20 lg:px=32 bg-transparent">
        <img src={assets.logo} alt="" className="" />
        <ul className="hidden md:flex gap-10 text-white">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Testomonails">Testimonials</a>
        </ul>
        <button className="rounded-md bg-white py-1 px-5 hidden md:block cursor-pointer">
          Sign Up
        </button>

        <img
          src={assets.menu_icon}
          className="size-6 md:hidden cursor-pointer"
          alt=""
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* -------------mobile-menu----------------- */}

      {showMobileMenu ? (
        <div className="right-0 bottom-0 md:hidden top-0 w-full fixed overflow-hidden bg-white transition-full">
          <div className="flex justify-end p-5 cursor-pointer">
            <img
              src={assets.cross_icon}
              className="w-5"
              alt=""
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 tx-5 text-lg font-medium">
            <a
              href="#Home"
              onClick={() => setShowMobileMenu(false)}
              className="rounded-full inline-block py-2 px-5"
            >
              Home
            </a>
            <a
              href="#About"
              onClick={() => setShowMobileMenu(false)}
              className="rounded-full inline-block py-2 px-5"
            >
              About
            </a>
            <a
              href="#Projects"
              onClick={() => setShowMobileMenu(false)}
              className="rounded-full inline-block py-2 px-5"
            >
              Projects
            </a>
            <a
              href="#Testomonails"
              onClick={() => setShowMobileMenu(false)}
              className="rounded-full inline-block py-2 px-5"
            >
              Testimonails
            </a>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
