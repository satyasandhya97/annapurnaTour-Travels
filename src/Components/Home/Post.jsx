import React from "react";
import { Clock } from "lucide-react";
import image10 from "../../assets/Home/Destinations/image10.jpg";
import image11 from "../../assets/Home/Destinations/image11.jpg";
import image12 from "../../assets/Home/Destinations/image12.avif";
import image13 from "../../assets/Home/Destinations/image13.jpg";
import image14 from "../../assets/Home/Destinations/image14.avif";
import image15 from "../../assets/Home/Destinations/image15.jpg";
import image16 from "../../assets/Home/Destinations/image16.jpg";
import image17 from "../../assets/Home/Destinations/image17.jpg";
import image18 from "../../assets/Home/Destinations/image18.jpg";
import image19 from "../../assets/Home/Destinations/image19.jpg";

const blogs = [
    {
        id: 1,
        title: "Mukteshwara Temple is a 10th-century Hindu temple dedicated to Shiva located in Bhubaneswar.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image10,
    },
    {
        id: 2,
        title: "Kalijai Temple is located on an island in Chilika Lake. It is considered to be the abode of the Goddess Kalijai.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image11,
    },
    {
        id: 3,
        title: "The Gupteswar shiva Temple is situated on a limestone hill in the Koraput district. The place is also popularly known as Gupta Kedar.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image12,
    },
    {
        id: 4,
        title: "Popular Tourist Places in Daringbadi, Kandhamal are Putudi Waterfall, Belghar Nature Camp, Butterfly and Hill view park, Lovers Point.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image13,
    },
    {
        id: 5,
        title: "It is a nice waterfall located in keonjhar district. The view near the waterfall is mesemerising. The place is not crowded as many tourist places.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image14,
    }, {
        id: 6,
        title: "Ecotourism. Odisha is the land of famed forests, mountains, valleys, waterfalls, gorges, soaring peaks with stunning wildlife in their own natural habitats.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image15,
    }, {
        id: 7,
        title: "Bhimakund Waterfall, situated at the border of Keonjhar and Mayurbhanj, is a must-visit destination for nature lovers and Bhimkund water fall in Odisha​​ Ashoke Jhar Water Fall.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image16,
    }, {
        id: 8,
        title: "Panchalingeswar, Nilgiri, baleswar OrissaAn amazing destination for weekend tour.nestled in the Nilagiri Hills of Balasore, is a revered pilgrimage site dedicated to Lord Shiva.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image17,
    },
    , {
        id: 9,
        title: "Nabadwip also spelt Navadwip, historically known as Nadia, is a heritage city in Nadia district in the Indian state of West Bengal.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image18,
    },
    , {
        id: 10,
        title: "Bhitarkanika is a national park and one of India's largest mangrove ecosystems in the Kendrapara district of Odisha, India, known for its extensive network of creeks, rivers, and diverse wildlife.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: image19,
    },
];

const BlogSection = () => {
    return (
        <section className="px-4 md:px-16 xl:px-52 py-16 text-center">

            <h2 className="text-[#f4c200] text-3xl sm:text-4xl md:text-5xl mb-3">From The Blog Post</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-10">
                Latest News & Articles
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
                        <div className="relative">
                            <img src={blog.image} alt="blog" className="w-full h-64 object-cover" />
                            {/* <div className="absolute top-4 left-4 bg-[#f4c200] text-white px-3 py-2 rounded">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <Clock size={16} />
                                    {blog.date}
                                </div>
                            </div> */}
                        </div>

                        <div className="p-5 text-left space-y-4">
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                {/* <div className="flex items-center gap-2">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="author"
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-700">{blog.author}</p>
                                        <p className="text-xs font-semibold text-[#878787]">Admin</p>
                                    </div>
                                </div> */}
                                {/* <p className="text-[#878787]">{blog.time}</p> */}
                            </div>

                            <p className="text-lg font-semibold text-[#878787] leading-snug">
                                {blog.title}
                            </p>

                            {/* <a href="#" className="text-[#05c8c8] font-semibold text-sm flex items-center gap-1 hover:text-black">
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;