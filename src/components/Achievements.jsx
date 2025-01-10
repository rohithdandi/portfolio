import React from "react";
import background4 from "../artifacts/icon24.png";
import background6 from "../artifacts/icon9.png";

const Achievements = () => {
  const Languages = ["Python", "C", "C++", "Java"];
  const Webdevs = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Redux",
    "ExpressJS",
    "NodeJS",
  ];

  const Ai = ["PyTorch", "TensorFlow"];
  const Tools = ["Git", "GitHub", "MATLAB", "AutoCAD", "LATEX"];
  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        backgroundImage: `url(${background4}),url(${background6})`,
        backgroundSize: "90% 90%,20% 20%",
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundPosition: "center,bottom left",
      }}
    >
      <div className="flex mx-auto border-solid border-x-8 border-[#191919] text-[#f9f4f0] w-full sm:w-3/4">
        <div className="flex-1 flex-col w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <div
              id="projects"
              className="font-azeret text-2xl md:text-4xl p-10 "
            >
              Skills
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
              <div className="p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-2 bg-[#111111]">
                  Languages
                </h2>
                <ul className="list-disc pl-4 bg-[#111111]">
                  {Languages.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-2 bg-[#111111]">
                  Web Development
                </h2>
                <ul className="list-disc pl-4 bg-[#111111]">
                  {Webdevs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 shadow rounded-lg ">
                <h2 className="text-xl font-semibold mb-2 bg-[#111111]">
                  ML & AI Frameworks
                </h2>
                <ul className="list-disc pl-4 bg-[#111111]">
                  {Ai.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-2 bg-[#111111]">
                  Tools/Technologies
                </h2>
                <ul className="list-disc pl-4 bg-[#111111]">
                  {Tools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              id="projects"
              className="font-azeret text-2xl md:text-4xl p-10 "
            >
              Achievements
            </div>
            <div className="flex flex-col sm:w-[75%] items-center">
              <div className="w-full bg-[#111111] pb-10">
                <h2 className="font-azeret">
                  • ICPC Mathura-Kanpur regional 2022/2023
                </h2>
              </div>
              <div className="w-full bg-[#111111] pb-10">
                <h2 className="font-azeret">
                  • Top 10 merit scholarship, Computer Science, Mahindra
                  University (2020/21, 2021/22).
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
