import React from "react";
import background2 from "../artifacts/icon3.png";
import background3 from "../artifacts/icon25.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = () => {
  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        backgroundImage: `url(${background2}),url(${background3})`,
        backgroundSize: "20% 20%,100% 100%",
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundPosition: "top left,center",
      }}
    >
      <div className="flex mx-auto border-solid border-x-8 border-[#191919] text-[#f9f4f0] w-full sm:w-3/4 ">
        <div className="flex-1 flex-col w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <div
              id="projects"
              className="font-azeret text-2xl md:text-4xl p-10 "
            >
              Key Projects
            </div>
            <div className="flex flex-col sm:w-[75%] items-center">
              <div className="flex flex-col md:flex-row mx-auto">
                <div className="flex flex-col w-full bg-[#111111] pb-10">
                  <h2 className="font-azeret">
                    Interpretable Face Representation Learning with Explainable
                    AI |
                  </h2>
                  <p className="font-italic ">Guide: Prof. Nidhi Goyal |</p>
                  <p className="font-cutive text-[#a2b2bc]">
                    • Trained advanced face recognition models (ArcFace,
                    FaceNet, CosFace) on CelebA and CASIA-WebFace, achieving
                    high accuracy and robustness, and evaluated them on LFW
                    using TPR and FPR.
                  </p>
                  <p className="font-cutive text-[#a2b2bc]">
                    • Leveraged Grad-CAM for model interpretability and
                    developed advanced saliency mapping methods, including
                    various fixed-size masks and SRISE Gaussian kernel masks,
                    and Developed a novel heatmap masking approach to visualize
                    image saliency.
                  </p>
                  <div className="flex">
                    <a
                      className="ml-auto px-2 py-1 border rounded-md border-[#f9f4f0] text-[#f9f4f0] font-bold hover:shadow-[0_0px_40px_-7px_rgba(255,255,255,0.5)] transition-transform transform hover:scale-105"
                      href="https://github.com/dandirohith/Explainable-Face-Recognition-XFR"
                    >
                      Code
                    </a>
                  </div>
                </div>
                <div className="flex w-1/4 m-10"></div>
              </div>
              <div className="flex flex-col md:flex-row mx-auto">
                <div className="flex w-1/2 m-10"></div>
                <div className="w-full bg-[#111111] pb-10">
                  <h2 className="font-azeret">
                    Order Execution and Management System for Deribit Test API |
                  </h2>
                  <p className="font-cutive text-[#a2b2bc]">
                    • Developed a robust CLI application for trading on the
                    Deribit Test WebSocket API, utilizing Boost.Beast and
                    Boost.Asio for secure, asynchronous communication and
                    Boost.Program Options for flexible functionality.
                  </p>
                  <p className="font-cutive text-[#a2b2bc]">
                    • Features include order execution, market data retrieval,
                    and real-time subscriptions with thread-safe queues and
                    multi-threaded I/O, achieving an average order latency of
                    186.95 ms—ideal for algorithmic trading but not HFT.
                  </p>
                  <div className="flex">
                    <a
                      className="ml-auto px-2 py-1 border rounded-md border-[#f9f4f0] text-[#f9f4f0] font-bold hover:shadow-[0_0px_40px_-7px_rgba(255,255,255,0.5)] transition-transform transform hover:scale-105"
                      href="https://github.com/rohithdandi/Deribit-OEMS"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="/allprojects"
                  className="flex items-center px-2 py-1 border rounded-md border-[f9f4f0] font-bold text-[#f9f4f0] hover:shadow-[0_0px_40px_-7px_rgba(255,255,255,0.5)] transition-transform transform hover:scale-105"
                >
                  View More
                  <span className="ml-2">
                    <FaExternalLinkAlt />
                  </span>
                </a>
              </div>
              <div className="font-azeret text-2xl md:text-4xl p-10">
                Publications
              </div>
              <div className="w-full bg-[#111111]">
                <h2 className="font-azeret">
                  Soybean Genome Clustering Using Quantum-Based Fuzzy C-Means
                  Algorithm
                </h2>
                <p className="font-cutive text-[#a2b2bc]">
                  The 30th International Conference on Neural Information
                  Processing, ICONIP, Nov' 20-23, 2023, China. (Published)
                </p>
              </div>
            </div>
            <a target="_blank">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=17189459&style=0006&nbdigits=4&type=ip&initCount=0"
                title="Counter Widget"
                border="0"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
