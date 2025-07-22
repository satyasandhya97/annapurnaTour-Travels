import React from "react";
import { Compass, Briefcase, Umbrella } from "lucide-react";
import AboutUs from "../../assets/Home/aboutUs.png";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 xl:px-52 py-16 gap-12 lg:gap-0 overflow-hidden">
      
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-[#f4c200] text-3xl sm:text-4xl md:text-5xl">About Us</h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1b2a] lg:whitespace-nowrap">
          Explore all tour of the <br className="hidden lg:flex"/> world with us.
        </h1>
        <p className="text-[#878787] leading-7 text-base sm:text-lg">
          Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#05c8c8] p-3 rounded-full text-white">
              <Compass size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-xl sm:text-2xl text-gray-800">Tour guide</h4>
              <p className="text-[#878787] leading-6 text-base sm:text-lg">
                Lorem Ipsum available, but the majority have suffered alteration in some.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#05c8c8] p-3 rounded-full text-white">
              <Briefcase size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-xl sm:text-2xl text-gray-800">Friendly price</h4>
              <p className="text-[#878787] leading-6 text-base sm:text-lg">
                Lorem Ipsum available, but the majority have suffered alteration in some.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#05c8c8] p-3 rounded-full text-white">
              <Umbrella size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-xl sm:text-2xl text-gray-800">Reliable tour</h4>
              <p className="text-[#878787] leading-6 text-base sm:text-lg">
                Lorem Ipsum available, but the majority have suffered alteration in some.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-[#05c8c8] text-white font-bold py-2 px-6 rounded-md shadow hover:bg-white hover:text-[#05c8c8] hover:border-[#05c8c8] border transition">
          Booking Now
        </button>
      </div>

      <div className="w-full lg:w-1/2">
        <img src={AboutUs} alt="Travel" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default AboutSection;
