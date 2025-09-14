import React from "react";
import { Clock, Star } from "lucide-react";
import tajmahal from "../../assets/Home/Destinations/tajmahal.png";
import image7 from "../../assets/Home/Destinations/image7.jpg";
import image8 from "../../assets/Home/Destinations/image8.jpg";
import image9 from "../../assets/Home/Destinations/image9.jpg";

const tours = [
    {
        id: 1,
        duration: "12 Days",
        price: "$50.00",
        rating: 4,
        reviews: 2,
        description:
            "Duduma Waterfall is situated in the border of Koraput (Odisha) districts of India. Duduma Waterfall. Duduma Waterfalls is located in Odisha.",
        location: "Duduma Waterfalls",
        image: image7,
    },
    {
        id: 2,
        duration: "12 Days",
        price: "$50.00",
        rating: 4,
        reviews: 2,
        description:
            "Duduma Waterfalls is located in the Koraput district of Odisha, near the border of Andhra Pradesh. It is formed by the Machkund River.",
        location: "Khirachora Gopinath Temple",
        image: image8,
    },
    {
        id: 3,
        duration: "12 Days",
        price: "$50.00",
        rating: 4,
        reviews: 2,
        description:
            "Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest temples in Bhubaneswar, the capital of the Indian state of Odisha.",
        location: "Lingaraj Temple Bhubaneswar",
        image: image9,
    },
];

const PopularTours = () => {
    return (
        <section className="px-4 md:px-16 xl:px-52 w-full py-14 text-center space-y-12">
            <div className="space-y-5">
                <h2 className="text-[#f4c200] text-3xl sm:text-4xl md:text-5xl font-cursive mb-2">Featured Tours</h2>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2a]">
                    Most Popular Tours
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-7 justify-items-center">
                {tours.map((tour) => (
                    <div
                        key={tour.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden w-full text-left hover:shadow-lg transition duration-300"
                    >
                        <div className="relative">
                            <img
                                src={tour.image}
                                alt={tour.location}
                                className="w-full  object-cover"
                            />
                            {/* <div className="absolute top-3 left-3 bg-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded flex items-center gap-1 shadow">
                                <Clock size={16} />
                                {tour.duration}
                            </div> */}
                        </div>

                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                {/* <span className="bg-[#05c8c8] text-white text-xs font-bold px-2 py-1 rounded">
                                    from {tour.price}
                                </span> */}
                                <div className="flex items-center text-yellow-400 text-sm">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star
                                            key={i}
                                            fill={i < tour.rating ? "currentColor" : "none"}
                                            strokeWidth={1.5}
                                            className="w-4 h-4"
                                        />
                                    ))}
                                    <span className="text-gray-700 text-xs ml-1">({tour.reviews})</span>
                                </div>
                            </div>

                            <p className="text-[#666] font-semibold text-lg hover:text-[#6dd2d2]">
                                {tour.description}
                            </p>

                            <p className="text-sm text-gray-500">{tour.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularTours;
