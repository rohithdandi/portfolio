import React, { useState, useEffect } from "react";
import dp from "../artifacts/profile_pic/dp3.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-1 mx-auto border-solid border-x-8 border-[#191919] text-[#f9f4f0] w-full sm:w-3/4 sm:bg-[#111111]"
    >
      <div className="flex flex-col w-full lg:flex-row justify-center items-center py-8">
        <div className="flex justify-center items-center w-full font-azeret p-4 ">
          <div className="flex-1 flex w-full max-w-[320px] lg:max-w-[500px] text-xl md:text-2xl">
            Hello, I am a recent B.Tech graduate in Computer Science and
            Engineering from Mahindra University École Centrale, seeking
            impactful opportunities to contribute, learn, and grow.
          </div>
        </div>
        <div className="flex w-1/2 m-10">
          <img className="flex-1" src={dp} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
