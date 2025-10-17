import React from "react";
import { assets } from "../assets/images/assets";

const Footer = () => {
  return (
    <div
      className="bg-gray-900 mx-auto px-4 pt-10 md:px-20 lg:px-32 w-full overflow-hidden mt-20"
      id="Footer"
    >
      <div className="flex flex-col items-start container mx-auto md:flex-row justify-between">
        <div className="w-full mb-8 md:mb-10 md:w-1/3 ">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            ea eligendi sapiente cum molestias non tempora saepe similique,
            magnam perferendis, quo fuga et suscipit maiores omnis in libero
            quisquam! Facilis?
          </p>
        </div>
        <div className="w-full mb-8 md:mb-0 md:w-1/5">
          <h3 className="text-white font-bold text-lg mb-2"> Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Home" className="hover:text-white">Home</a>
            <a href="#About" className="hover:text-white">About Us</a>
            <a href="#Contact" className="hover:text-white">Contact Us</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
            <h3 className="text-white font-bold text-lg mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-5">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="flex mb-5">
                <input className="bg-gray-700 py-2 px-4 rounded" type="email" placeholder="Enter Your Email"/>
                <button className="bg-blue-500 py-2 px-4 ml-2 rounded">Subscribe</button>
            </div>
            
        </div>
      </div>
      <hr className="text-gray-700"/>
      <div className="text-center my-2">
        <p className="text-gray-500">Copyright 2025 © TohidLadman. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
