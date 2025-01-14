import React, { useState } from "react";
import Logo from '../images/logo.png';
import DragHandleIcon from '@mui/icons-material/DragHandle';

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
            <nav className="bg-light-500 shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-50">
                <div className="container mx-auto px-8 sm:px-1 lg:px-12 flex items-center lg:justify-between sm:justify-between h-[6rem]">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img className="h-8 w-15" src={Logo} alt="Logo" />
                    </div>

                    {/* Menu Items */}
                    <div className={`lg:flex space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} lg:space-x-6`}>
                        <a href="/" className="text-customBlueGray font-lg font-semibold font-sans hover:text-lime-600">
                            Home
                        </a>
                        <a href="/about" className="text-customBlueGray font-lg font-semibold font-sans hover:text-lime-600">
                            About Us
                        </a>
                        <div className="relative group">
                            <button className="flex items-center text-customBlueGray font-lg font-semibold font-sans hover:text-lime-600">
                                Pages
                                <span className="ml-1"></span>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white border shadow-md mt-2 rounded-md">
                                <a href="/page1" className="block px-4 py-2 font-sans hover:bg-gray-100">Page 1</a>
                                <a href="/page2" className="block px-4 py-2 font-sans hover:bg-gray-100">Page 2</a>
                            </div>
                        </div>
                        <a href="/features" className="text-customBlueGray font-lg font-semibold font-sans hover:text-lime-600">
                            Features
                        </a>
                        <a href="/blog" className="text-customBlueGray font-lg font-semibold font-sans hover:text-lime-600">
                            Blog
                        </a>
                        <a href="/contact" className="text-customBlueGray font-xl font-semibold font-sans hover:text-purple-800">
                            Contact
                        </a>
                    </div>

                    {/* Icons & CTA */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-lime-600 font-sans font-medium text-white px-4 py-2 hidden lg:block rounded-md hover:bg-black">
                            Get In Touch
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleSideNav} className="lg:hidden px-3 text-white bg-lime-600 rounded" aria-label="Toggle Menu">
                        <DragHandleIcon />
                    </button>
                </div>
            </nav>

            {/* Side Nav */}
            <div
                className={`lg:hidden fixed z-50 backdrop-blur-md bg-opacity-50 top-0 left-0 w-[50%] h-full bg-white shadow-md transition-transform transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} z-60`}
                aria-hidden={!isSideNavOpen}
            >
                <div className="p-6 z-50">
                    <div className="flex items-center py-5 mb-3">
                        <img className="h-8 w-15" src={Logo} alt="Logo" />
                    </div>
                    <hr />
                    <a href="/" className="block px-4 py-2 text-customBlueGray font-medium font-sans hover:text-lime-600">
                        Home
                    </a>
                    <a href="/about" className="block px-4 py-2 text-customBlueGray font-medium font-sans hover:text-lime-600">
                        About Us
                    </a>
                    <a href="/features" className="block px-4 py-2 text-customBlueGray font-medium font-sans hover:text-lime-600">
                        Features
                    </a>
                    <a href="/blog" className="block px-4 py-2 text-customBlueGray font-medium font-sans hover:text-lime-600">
                        Blog
                    </a>
                    <a href="/contact" className="block px-4 py-2 text-customBlueGray font-medium font-sans hover:text-purple-800">
                        Contact
                    </a>
                    <br />
                    <button className="bg-lime-600 font-sans font-medium text-white px-4 py-2 rounded-md hover:bg-black">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
