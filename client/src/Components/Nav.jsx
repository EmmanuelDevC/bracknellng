import React, { useState, useEffect } from "react";
import Logo from '../images/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    const navigation = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { 
            name: "Services", 
            path: "/service",
            dropdown: [
                { name: "Web App Development", path: "/service#web-app" },
                { name: "Enterprise Solutions", path: "/service#enterprise" },
                { name: "UI/UX Development", path: "/service#uiux" },
                { name: "Corporate Branding", path: "/service#branding" },
                { name: "Managed Services", path: "/service#managed" },
                { name: "Business Analytics", path: "/service#analytics" }
            ]
        },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            {/* Main Navigation */}
            <nav className={`bg-[#191919] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'shadow-lg py-2' : 'py-4'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link 
                            to="/" 
                            className="flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
                        >
                            <img 
                                className="h-8 w-auto" 
                                src={Logo} 
                                alt="Company Logo" 
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navigation.map((item, index) => (
                                <div 
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => handleDropdownEnter(index)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        to={item.path}
                                        className={`px-5 py-2 rounded-full text-lg font-medium transition-all duration-300 flex items-center ${
                                            location.pathname === item.path
                                                ? 'bg-white text-lime-700' 
                                                : 'text-white hover:bg-white hover:text-lime-700'
                                        }`}
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && activeDropdown === index && (
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-[#191919] border border-gray-700 rounded-xl shadow-xl py-2 animate-fadeIn z-50">
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.name}
                                                    to={dropdownItem.path}
                                                    className="block px-4 py-3 text-white hover:bg-white hover:text-lime-700 transition-all duration-200 mx-2 rounded-lg"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:flex items-center">
                            <Link to="/contact">
                                <button className="bg-black border border-white text-white px-6 py-2.5 rounded-md font-medium text-lg transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105">
                                    Get In Touch
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 text-white bg-lime-600 rounded-md hover:bg-lime-700 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <CloseIcon className="w-6 h-6" />
                            ) : (
                                <MenuIcon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen 
                    ? 'opacity-100 visible' 
                    : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        isMobileMenuOpen ? 'opacity-70' : 'opacity-0'
                    }`}
                    onClick={toggleMobileMenu}
                />

                {/* Mobile Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-[#191919] shadow-xl transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <Link to="/" className="flex items-center" onClick={toggleMobileMenu}>
                            <img className="h-8 w-auto" src={Logo} alt="Company Logo" />
                        </Link>
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-white bg-lime-600 rounded-md hover:bg-lime-700 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="p-6 space-y-3">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                                        location.pathname === item.path
                                            ? 'bg-white text-lime-700'
                                            : 'text-white hover:bg-white hover:text-lime-700'
                                    }`}
                                    onClick={toggleMobileMenu}
                                >
                                    {item.name}
                                </Link>
                                
                                {/* Mobile Dropdown */}
                                {item.dropdown && (
                                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-600 pl-4">
                                        {item.dropdown.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.name}
                                                to={dropdownItem.path}
                                                className="block px-4 py-2 rounded-lg text-white hover:bg-white hover:text-lime-700 transition-all duration-200"
                                                onClick={toggleMobileMenu}
                                            >
                                                {dropdownItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile CTA Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700 bg-[#191919]">
                        <Link to="/contact" className="block w-full" onClick={toggleMobileMenu}>
                            <button className="w-full bg-black border border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-white hover:text-black transition-all duration-300">
                                Get In Touch
                            </button>
                        </Link>
                        <div className="mt-4 text-center text-sm text-gray-400">
                            Let's build something amazing together
                        </div>
                    </div>
                </div>
            </div>

            {/* Add some spacing for fixed nav */}
            <div className="h-16"></div>
        </>
    );
};

export default Navbar;