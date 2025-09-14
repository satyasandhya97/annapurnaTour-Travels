import React from 'react';
import image2 from "../../assets/Home/Destinations/image2.jpg";
import image3 from "../../assets/Home/Destinations/image3.jpg";
import image4 from "../../assets/Home/Destinations/image4.jpg";
import image5 from "../../assets/Home/Destinations/image5.webp";
import image6 from "../../assets/Home/Destinations/image6.webp";

const destinations = [
  {
    id: 1,
    city: "Puri",
    country: "Jagannath Temple",
    image: image2,
  },
  {
    id: 2,
    city: "Jajpur Road",
    country: "Ghatagaon Tarini Temple ",
    image: image3,
  },
  {
    id: 3,
    city: "puri",
    country: "Sun Temple in Konark",
    image: image4,
  },
  {
    id: 4,
    city: "Sambalpur",
    country: "Hirakud Dam",
    image: image5,
  },
  {
    id: 5,
    city: "Bhubaneswar",
    country: "Dhauligiri",
    image: image6,
  },
];

const Destinations = () => {
  return (
    <section className="py-14 px-4 md:px-16 xl:px-52 text-center space-y-12">
      <div className='space-y-5'>
        <h2 className="text-[#f4c200] text-3xl sm:text-4xl md:text-5xl">Destinations</h2>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2a]">Choose Your Place</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {destinations.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="relative w-full aspect-square overflow-hidden rounded-md shadow-lg group">
            <img
              src={item.image}
              alt={item.country}
              className="h-full w-full object-cover transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <div className="absolute bottom-4 left-4 text-left z-20">
              <h2 className="text-yellow-400 font-bold text-3xl">{item.city}</h2>
              <h4 className="text-white text-2xl font-semibold">{item.country}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 justify-items-center">
        {destinations.slice(2).map((item) => (
          <div
            key={item.id}
            className="relative w-full overflow-hidden rounded-md shadow-lg group"
          >
            <img
              src={item.image}
              alt={item.country}
              className="h-full w-full object-cover transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <div className="absolute bottom-4 left-4 text-left z-20">
              <h2 className="text-yellow-400 font-bold text-3xl">{item.city}</h2>
              <h4 className="text-white text-2xl font-semibold">{item.country}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
