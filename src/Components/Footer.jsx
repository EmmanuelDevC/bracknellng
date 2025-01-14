import React from "react";
import Logo from "../images/logo.png"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-purple-400 to-black text-white py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <img src={Logo} alt="lOGO"  className="h-10 w-auto"/>
                    <p className="mt-4 text-sm leading-6">
                        Creative-powered to fuel your growth goals. We build world-class digital products, software, and branding.
                    </p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Products</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Unify App</li>
                        <li>Page Builder</li>
                        <li>Templates</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Design</li>
                        <li>Inspiration</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
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
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>© 2023 Converta Theme. Codeless, LLC. San Francisco, California, USA.</p>
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
