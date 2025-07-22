import React from 'react';
import tajmahal from "../../assets/Home/Destinations/tajmahal.png";

const destinations = [
  {
    id: 1,
    city: "Male",
    country: "Maldives",
    image: tajmahal,
  },
  {
    id: 2,
    city: "Bangkok",
    country: "Thailand",
    image: tajmahal,
  },
  {
    id: 3,
    city: "Kuala Lumpur",
    country: "Malaysia",
    image: tajmahal,
  },
  {
    id: 4,
    city: "Kathmandu",
    country: "Nepal",
    image: tajmahal,
  },
  {
    id: 5,
    city: "Bali",
    country: "Indonesia",
    image: tajmahal,
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
