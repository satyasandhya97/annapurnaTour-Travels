import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Tours', href: '#tours' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact Us', href: '#contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="bg-[#05c8c8] text-white px-3 md:px-20 xl:px-52 py-7 flex justify-between items-center relative">
            <div className="">
                <h1 className="flex text-2xl md:text-3xl font-bold">
                    Arnapurna <span className="text-[#ffd900]">Tour & Travels</span>
                </h1>
                <p className='flex-1 text-black text-lg'> Jajpur , Odisha</p>

            </div>

            <ul className="hidden xl:flex items-center gap-8 font-semibold">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            className="hover:underline underline-offset-4 decoration-white transition">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="xl:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            <div
                ref={menuRef}
                className={`absolute top-full left-0 w-full bg-[#05c8c8] z-10 xl:hidden overflow-hidden transition-all duration-500 ease-in-out
                     ${isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}>

                <ul className="flex flex-col items-center gap-4 font-semibold">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="block hover:underline underline-offset-4 decoration-white transition"
                                onClick={closeMenu}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
