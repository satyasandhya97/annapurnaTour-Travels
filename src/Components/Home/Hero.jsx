import React from 'react';
import heroImg from '../../assets/hero.png';
import rotating1Img from '../../assets/Home/3.png';
import rotating2Img from '../../assets/Home/2.png';
import rotating3Img from '../../assets/Home/1.png';
import '../../index.css'; 

const Hero = () => {
  return (
    <section className="relative bg-white py-14 px-4 md:px-16 xl:px-52 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start text-start">
          <h2 className="text-[#f4c200] text-3xl sm:text-4xl md:text-5xl text-start mb-3">
            Explore Your Travel
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-6 whitespace-nowrap">
            Trusted Travel <br  /> Agency
          </h1>
          <p className="text-[#666] text-lg mb-8 max-w-md">
            I travel not to go anywhere, but to go. I travel for travel's sake —
            the great affair is to move.
          </p>
          <div className="flex flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#05c8c8] text-white font-bold py-2 px-6 rounded-md shadow hover:bg-white hover:text-[#05c8c8] hover:border-[#05c8c8] border transition">
              Contact Us
            </button>
            <button className="border-gray-300 text-[#0d1b2a] font-semibold py-2 px-6 rounded-md hover:text-[#05c8c8] hover:border-[#05c8c8] border transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src={heroImg}
            alt="Traveler"
            className="min-w-[100%] object-contain"
          />
        </div>
      </div>

      <div className="absolute w-12 h-16 md:w-16 md:h-16 hidden lg:flex right-[8%] top-[15%] xl:top-[25%] ">
        <img src={rotating2Img} alt="Rotate" className="w-full h-full spin-slow" />
      </div>

      <div className="absolute  hidden lg:flex right-[50%] top-[8%] ">
        <img src={rotating3Img} alt="Rotate" className="w-full h-full spin-slow" />
      </div>

      <div className="absolute  hidden lg:flex right-[55%] bottom-[20%] xl:bottom-[8%] ">
        <img src={rotating1Img} alt="Rotate" className="w-full h-full spin-slow" />
      </div>
    </section>
  );
};

export default Hero;
