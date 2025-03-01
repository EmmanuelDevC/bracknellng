import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-black text-white py-12 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and Description */}
                <div className="space-y-4">
                    <img src={Logo} alt="Bracknell Logo" className="h-12" />
                    <p className="mt-4 font-sans text-base leading-7 text-gray-300">
                        Creative-powered to fuel your growth goals. We build world-class digital products, software, and branding.
                    </p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-xl font-sans font-bold mb-4">Products</h3>
                    <ul className="space-y-3 text-base">
                        <Link to="/" className="hover:text-gray-300 transition"><li>Home</li></Link>
                        <Link to="/about" className="hover:text-gray-300 transition"><li>About</li></Link>
                        <Link to="/service" className="hover:text-gray-300 transition"><li>Services</li></Link>
                        <Link to="/contact" className="hover:text-gray-300 transition"><li>Contact Us</li></Link>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-sans font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-base text-gray-300">
                        <li><span className="font-semibold">M:</span> (+234) 701 151 4116</li>
                        <li><span className="font-semibold">M:</span> (+234) 803 877 4123</li>
                        <li><span className="font-semibold">E:</span> info@brackneling.com</li>
                        <li><span className="font-semibold">A:</span> Plot 54A Harrison Sholaja Street, Ago Okota, Lagos State</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-sans font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-5 text-2xl">
                        <a href="#" className="hover:text-gray-300 transition">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300 transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300 transition">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300 transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 border-t border-gray-700 pt-6">
                <div className="flex flex-col font-sans md:flex-row items-center justify-between text-base text-gray-400">
                    <p>© 2025 Bracknell Software Company. Lagos, Nigeria.</p>
                    <div className="flex space-x-5 mt-4 md:mt-0 text-lg">
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;