import React, { useEffect, useState } from "react";
import background7 from "../artifacts/icon18.png";

import image1 from "../artifacts/gallery/image1.jpg";
import image2 from "../artifacts/gallery/image2.jpg";
import image3 from "../artifacts/gallery/image3.jpg";

const Gallery = () => {
  const images = [image1, image2, image3];
  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        backgroundImage: `url(${background7})`,
        backgroundSize: "90% 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex mx-auto border-solid border-x-8 border-b-[40px] border-[#191919] text-[#f9f4f0] w-full sm:w-3/4 items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
