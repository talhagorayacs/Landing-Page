import React from "react";
import bannerRight from "../assets/bannerRight.png";

const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
      <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-left">
        <h3 className="text-lg md:text-xl text-cyan-400 font-semibold">
          Your True Partner in Tech
        </h3>
        <h1 className="text-4xl md:text-6xl text-gray-300 leading-tight">
          We Provide <br />{" "}
          <span className="font-bold text-white">"Pieces Of Tech"</span>
        </h1>
        <p className="text-sm md:text-base text-gray-300 font-semibold">
          Your Trust And Our HardWork
        </p>
        <button className="w-full md:w-44 bg-slate-900 px-6 py-3 md:py-4 text-lg md:text-xl font-bold uppercase rounded-full">
          Contact Us
        </button>
      </div>
      <div className="mt-6 md:mt-0">
        <img 
          src={bannerRight} 
          alt="banner" 
          className="w-full md:w-96 h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
