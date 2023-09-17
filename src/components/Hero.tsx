import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className=" flex-col justify-center content-center h-96 bg-slate-400 border-2 border-red-700">
        <p className=" flex border-2 border-yellow-300 items-center w-4/12">
          bg-image here
        </p>
      </div>
      <div className=" flex justify-center items-center">
        <button type="submit" className="submit-button" disabled>
          Find Your House
        </button>
      </div>
    </>
  );
};

export default Hero;
