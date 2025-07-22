import React from "react";
import { Clock } from "lucide-react";
import tajmahal from "../../assets/Home/Destinations/tajmahal.png";


const blogs = [
    {
        id: 1,
        title: "A good traveler has no fixed plans and is not intent on arriving.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: tajmahal,
    },
    {
        id: 2,
        title: "A good traveler has no fixed plans and is not intent on arriving.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: tajmahal,
    },
    {
        id: 3,
        title: "A good traveler has no fixed plans and is not intent on arriving.",
        author: "Jony bristow",
        time: "10:30 AM",
        date: "04 Dec",
        image: tajmahal,
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
                            <div className="absolute top-4 left-4 bg-[#f4c200] text-white px-3 py-2 rounded">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <Clock size={16} />
                                    {blog.date}
                                </div>
                            </div>
                        </div>

                        <div className="p-5 text-left space-y-4">
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="author"
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-700">{blog.author}</p>
                                        <p className="text-xs font-semibold text-[#878787]">Admin</p>
                                    </div>
                                </div>
                                <p className="text-[#878787]">{blog.time}</p>
                            </div>

                            <p className="text-lg font-semibold text-[#878787] leading-snug">
                                {blog.title}
                            </p>

                            <a href="#" className="text-[#05c8c8] font-semibold text-sm flex items-center gap-1 hover:text-black">
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
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;