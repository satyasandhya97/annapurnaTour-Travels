import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#05c8c8] text-white px-6 md:px-20 xl:px-52 py-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                <div className="flex-1">
                    <h1 className="text-4xl md:text-3xl font-bold">
                        Arnapurna <span className="text-[#ffd900]">Tourists</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-base leading-relaxed max-w-md">
                        Experience unparalleled comfort and reliability with The <b className="text-[#ffd900]">Arnapurna Tour & Travels</b>.
                        Our dedicated team ensures that your journey is smooth and stress-free, whether you're navigating the city streets or embarking on a long-distance adventure.
                        Trust us to get you where you need to go, safely and on time.
                    </p>
                </div>

                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3">📍 Contact Us</h2>
                    <p className="mb-1">Jajpur, Odisha</p>
                    <p className="mb-1">📞 <a href="tel:+919090809910" className="hover:text-[#ffd900]">+91 90908 09910</a></p>
                    <p className="mb-1">📞 <a href="tel:+918895072433" className="hover:text-[#ffd900]">+91 88950 72433</a></p>
                </div>
            </div>

            <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
                © {new Date().getFullYear()} <span className="text-[#ffd900]" >Arnapurna Tourists.</span>All Rights Reserved.
            </div>
        </footer>

    )
}

export default Footer