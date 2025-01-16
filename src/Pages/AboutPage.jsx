import React, { useEffect } from 'react';
import Navbar from '../Components/Nav';
import { Link } from 'react-router-dom';
import StrategyImage from '../images/business.jpg';
import UxuiImage from '../images/ux-design.jpeg';
import webDesignImage from '../images/web-app.jpeg';
import nftDesignImage from '../images/nft-design.jpeg';
import healthImage from '../images/health-app.jpeg';
import backgroundImage2 from '../images/bg-pattern-3.png/';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Components/Footer';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2200 });
    }, []);

    return (
        <>
            <div>
                <Navbar />
                {/* Hero Section */}
                <div
                    className="flex flex-col h-[70vh] text-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(173, 250, 189, 0.5), rgba(235, 243, 255, 0.5), rgba(164, 126, 252, 0.5)), url(${backgroundImage2})`,
                        backgroundBlendMode: "overlay",
                    }}
                >
                    <h1
                        className="text-lime-900 font-sans text-4xl md:text-6xl lg:text-7xl mb-3 font-semibold"
                        data-aos="fade-down"
                    >
                        About Us
                    </h1>
                    <ul className="flex text-center my-5 justify-center items-center">
                        <Link
                            to="/"
                            className="font-sans text-sm md:text-lg text-gray-500 hover:text-lime-900 transition-color duration-500 font-medium"
                        >
                            Home <KeyboardArrowRightIcon className="w-6 md:w-12 text-lime-700" />
                        </Link>
                        <li
                            className="font-sans text-lime-900 text-sm md:text-lg font-medium"
                            data-aos="fade-up"
                        >
                            About
                        </li>
                    </ul>
                </div>

                {/* Strategy Section */}
                <section className="bg-white">
                    <div className="flex flex-col lg:flex-row px-4 md:px-16  lg:px-[160px] my-10 lg:my-20">
                        <div
                            className="py-8 lg:py-20  flex-1"
                            data-aos="fade-right"
                        >
                            <h1 className="text-lime-900 text-2xl md:text-4xl font-sans py-4 font-bold">
                                Growth strategies to be effective & competitive
                            </h1>
                            <p className="text-gray-600 py-3 text-base md:text-lg">
                                Everything we do and dream up has a solid design impact. We create
                                human-centered enterprise software that has the polished, snappy
                                feel of the best consumer apps.
                            </p>
                            <button className="py-3 md:py-4 mt-2 px-5 text-sm md:text-lg font-sans rounded-md bg-lime-800 text-white hover:bg-lime-700">
                                Our Services
                            </button>
                        </div>
                        <img
                            src={StrategyImage}
                            alt="strategyImg"
                            className="h-60 md:h-80 lg:h-[420px] shadow-lg mx-5 rounded-xl"
                            data-aos="fade-left"
                        />
                    </div>

                    {/* Services Section */}
                    <div className="text-center px-4 md:px-12 lg:px-[120px] flex flex-col items-center">
                        <div
                            className="text-center mb-12"
                            data-aos="fade-up"
                        >
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                As leaders in developing sustainable <br /> solutions, the future of
                                blockchain is in our <br /> history
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden"
                                data-aos="zoom-in"
                            >
                                <img
                                    src={UxuiImage}
                                    alt="UX/UI Design"
                                    className="w-full h-60 md:h-80 lg:h-[550px] rounded-3xl object-cover"
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        Web Development
                                    </h3>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <img
                                    src={nftDesignImage}
                                    alt="NFT Market UI"
                                    className="w-full h-60 md:h-80 lg:h-[550px] rounded-3xl object-cover"
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        UI/UX Designs
                                    </h3>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <img
                                    src={healthImage}
                                    alt="Wallet App Development"
                                    className="w-full h-60 md:h-80 lg:h-[550px] rounded-3xl object-cover"
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        Web App Development
                                    </h3>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden"
                                data-aos="zoom-in"
                                data-aos-delay="600"
                            >
                                <img
                                    src={webDesignImage}
                                    alt="Health Mobile App"
                                    className="w-full h-60 md:h-80 lg:h-[550px] rounded-3xl object-cover"
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        Mobile Apps
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        </>
    );
};

export default About;
