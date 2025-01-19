import React from "react";
import Logo from "../images/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-black text-white py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <img src={Logo} alt="lOGO" className="h-10" />
                    <p className="mt-4 font-sans text-sm leading-6">
                        Creative-powered to fuel your growth goals. We build world-class digital products, software, and branding.
                    </p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-lg font-sans font-semibold mb-3">Products</h3>
                    <ul className="space-y-2 text-sm">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                       <Link to="/Service"><li>Services</li></Link>
                       <Link to="/Contact"><li>Contact Us</li></Link>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-sans font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><b>M:</b>(+234) 701 151 4116</li>
                        <li><b>M:</b>(+234) 803 877 4123</li>
                        <li><b>E:</b>info@bracknellng.com</li>
                        <li><b>A: </b>Plot 54A Harrison Sholaja Street, Ago Okota, Lagos State</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-sans font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Documentation</li>
                        <li>Help Desk</li>
                        <li>Video Guides</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t border-gray-700 pt-5">
                <div className="flex flex-col font-sans md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>© 2025 Bracknell Software Company. Lagos, Nigeria.</p>
                    <div className="flex space-x-4 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-white">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
