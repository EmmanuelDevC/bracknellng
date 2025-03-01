import React, { useState } from "react";
import Logo from '../images/logo.png';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-[#191919] shadow-sm fixed top-0 left-0 right-0 z-50 ">
                <div className="container mx-auto px-8 sm:px-1 lg:px-12 flex items-center justify-between h-[6rem]">
                    {/* Logo */}
                    <Link to="/">
                        <div className="flex items-center">
                            <img className="h-8 w-15" src={Logo} alt="Logo" />
                        </div>
                    </Link>

                    {/* Menu Items */}
                    <div className={`lg:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} lg:space-x-4`}>
                        <Link to="/" className="text-white text-sm transition-colors duration-300 ease-in-out px-5 py-2 rounded-full font-semibold font-sans focus:bg-white hover:bg-white hover:text-lime-700">
                            Home
                        </Link>
                        <Link to="/about" className="text-white text-sm transition-colors duration-300 ease-in-out px-5 py-2 rounded-full font-semibold font-sans focus:bg-white hover:bg-white hover:text-lime-700">
                            About Us
                        </Link>

                        <Link to="/Service" className="text-white text-sm transition-colors duration-300 ease-in-out px-5 py-2 rounded-full font-semibold font-sans focus:bg-white hover:bg-white hover:text-lime-700">
                            Services
                        </Link>
                        <Link to="/contact" className="text-white text-sm transition-colors duration-300 ease-in-out px-5 py-2 rounded-full font-semibold font-sans focus:bg-white hover:bg-white hover:text-lime-700">
                            Contact
                        </Link>
                    </div>

                    {/* Icons & CTA */}
                    <div className="flex items-center space-x-4">
                        <a href="/Contact">
                            <button className="bg-black border border-white font-sans font-medium transition-color duration-300 text-white px-4 py-2 hidden lg:block rounded-md hover:bg-white hover:text-black">
                                Get In Touch
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleSideNav} className="lg:hidden px-3 text-white bg-lime-600 rounded" aria-label="Toggle Menu">
                        <DragHandleIcon />
                    </button>
                </div>
            </nav>

            {/* Side Nav */}
            <div
                className={`lg:hidden fixed z-50 top-0 left-0 w-[100%] h-full bg-[#191919] shadow-md transition-transform transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} z-60`}
                aria-hidden={!isSideNavOpen}
            >
                <div className="flex flex-col h-full justify-between oy-auto text-center p-6 z-50">
                    <div className="flex justify-between items-center py-5 mb-3">
                        <img className="h-8 w-15" src={Logo} alt="Logo" />
                        <button onClick={toggleSideNav} className="lg:hidden px-5 text-white bg-lime-600 rounded" aria-label="Toggle Menu">
                            x
                        </button>
                    </div>
                    <Link to="/" className="block px-4 py-2 text-white font-medium font-sans rounded-lg hover:bg-lime-800">
                        Home
                    </Link>
                    <Link to="/about" className="block px-4 py-2 text-white font-medium font-sans rounded-lg hover:bg-lime-800">
                        About Us
                    </Link>
                    <Link to="/service" className="block px-4 py-2 text-white font-medium font-sans rounded-lg hover:bg-lime-800">
                        Services
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-white font-medium font-sans rounded-lg hover:bg-lime-800">
                        Contact Us
                    </Link>
                    <br />
                    <button className="bg-black border border-white rounded-full font-sans font-medium text-white px-4 py-2  hover:bg-white hover:text-black transition-color duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
