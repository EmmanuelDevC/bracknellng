import React from 'react';
import Navbar from '../Components/Nav';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/aboutBg.png';
import StrategyImage from '../images/business.jpg';
import UxuiImage from '../images/ux-design.jpeg';
import webDesignImage from '../images/web-app.jpeg';
import nftDesignImage from '../images/nft-design.jpeg';
import healthImage from '../images/health-app.jpeg';
import backgroundImage2 from '../images/bg-pattern-3.png/';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ArticleIcon from '@mui/icons-material/Article';
import BrushIcon from '@mui/icons-material/Brush';
import firstImage from '../images/abchealth.png';
import fifthImage from '../images/grow.png';
import sixthImage from '/women.svg';
import secondImage from '../images/access.png';
import thirdImage from '/finceptive.svg';
import fourthImage from '../images/law.png';

import Footer from '../Components/Footer';

const About = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <>
            <div>
                <Navbar />
                {/* Hero Section */}
                <div
                    className="flex flex-col lg:h-[70vh] sm:h-[50vh] text-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(235, 243, 255, 0.5), rgba(164, 126, 252, 0.5)), url(${backgroundImage2})`,
                        backgroundBlendMode: "overlay",
                    }}
                >
                    <h1
                        className="text-lime-900 font-sans text-4xl md:text-6xl lg:text-7xl mb-3 font-semibold"
                        data-aos="fade-down"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="500"
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
                <section className="bg-white py-20">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 md:px-16 lg:px-[140px] lg:my-20">
                        <div className="py-8 lg:py-20 flex-1 text-center lg:text-left">
                            <h1 className="text-lime-900 text-2xl md:text-4xl font-sans py-4 font-bold"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="500"
                            >
                                Who We Are
                            </h1>
                            <p className="text-gray-600 py-3 text-base md:text-lg"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                            >
                                Bracknell is a leading software development company committed to delivering cutting-edge digital solutions for businesses of all sizes. We specialize in custom software development, web and mobile app development, AI-driven solutions, and cloud-based applications. Our expert team transforms ideas into high-performance, scalable, and secure applications that drive business growth.


                            </p>
                            <Link to="/Service">
                                <button className="py-3 md:py-4 mt-4 px-5 text-sm md:text-lg font-sans rounded-md bg-lime-800 text-white hover:bg-lime-700"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos-duration="1200"
                                >
                                    Our Services
                                </button>
                            </Link>
                        </div>
                        <img
                            src={StrategyImage}
                            alt="strategyImg"
                            className="w-full sm:w-[300px] md:w-[400px] lg:w-auto lg:h-[420px] shadow-lg mx-auto lg:mx-5 rounded-xl object-cover"
                        />
                    </div>


                    {/* Services Section */}
                    <div className="text-center px-4 md:px-12 lg:px-[120px] flex flex-col items-center"
                        style={{
                            backgroundImage: `url(${backgroundImage})`, // Default for all screens
                        }}
                    >
                        <div
                            className="text-center mb-12"
                        >
                            <h2 className="text-xl md:text-3xl sm:my-10 sm:text-2xl lg:text-4xl font-bold text-gray-800"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="500"
                            >
                                As leaders in developing sustainable <br className='hidden lg:block md:block' /> solutions, the future of
                                web development is in our <br /> history
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div
                                className="rounded-lg overflow-hidden"
                            >
                                <img
                                    src={UxuiImage}
                                    alt="UX/UI Design"
                                    className="w-full h-60 shadow-lg md:h-80 lg:h-[400px] object-cover"
                                    style={{
                                        borderRadius: "50px",
                                        boxShadow: "0 10px 16px rgba(135, 129, 129, 0.2)" // Example of a soft shadow
                                    }}
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        Web Development
                                    </h3>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="rounded-lg overflow-hidden"
                            >
                                <img
                                    src={nftDesignImage}
                                    alt="NFT Market UI"
                                    className="w-full h-60 md:h-80 shadow-lg lg:h-[400px] sm:h-[400px] object-cover"
                                    style={{
                                        borderRadius: "50px",
                                        boxShadow: "0 10px 16px rgba(135, 129, 129, 0.2)" // Example of a soft shadow
                                    }}
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        UI/UX Designs
                                    </h3>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="b rounded-lg overflow-hidden"
                            >
                                <img
                                    src={healthImage}
                                    alt="Wallet App Development"
                                    className="w-full h-60 md:h-80 shadow-lg lg:h-[400px] sm:h-[400px] object-cover"
                                    style={{
                                        borderRadius: "50px",
                                        boxShadow: "0 10px 16px rgba(135, 129, 129, 0.2)" // Example of a soft shadow
                                    }}
                                />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-sans text-lime-900 font-semibold">
                                        Web App Development
                                    </h3>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div
                                className=" rounded-lg overflow-hidden"
                            >
                                <img
                                    src={webDesignImage}
                                    alt="Health Mobile App"
                                    className="w-full h-60 md:h-80 shadow-lg lg:h-[400px] object-cover"
                                    style={{
                                        borderRadius: "50px",
                                        boxShadow: "0 10px 16px rgba(135, 129, 129, 0.2)" // Example of a soft shadow
                                    }}
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

                <section className='bg-blue-50 '
                    style={{
                        backgroundImage: `url(${backgroundImage})`, // Default for all screens
                    }}
                >
                    <div className='flex text-left lg:p-10 sm:px-6 lg:mx-20 py-20 flex flex-col'>
                        <div>
                            <h1 className='text-lime-900 lg:text-5xl lg:text-left md:text-4xl sm:text-3xl sm:text-center lg:py-5 sm:py-5 font-bold'>
                                Bespoke software development solutions
                            </h1>
                            <div className='flex flex-wrap justify-between'>
                                <p className='text-gray-500 lg:text-lg md:text-lg sm:mt-4 sm:text-lg'
                                >
                                    We support companies that need agile teams of the best engineers. <br /> Build or extend your software development team with ease.
                                </p>

                                <Link to="/Service">
                                    <button className='py-4 px-6 sm:my-5 rounded-md bg-lime-900 text-white font-sans hover:bg-lime-700'>
                                        Visit All
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className='lg:mt-20 sm:mt-3 flex flex-wrap justify-around'>



                            <div className='lg:h-[350px]  sm:h-[full] lg:py-6 lg:px-10 sm:p-6 sm:justify-center sm:item-center lg:text-left sm:text-center my-5 bg-white w-[380px] '
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 10px 16px rgba(184, 184, 184, 0.2)" // Example of a soft shadow
                                }}

                            >
                                <div className="h-[70px] w-[70px] justify-center my-2 items-center flex lg:mx-0 sm:mx-auto rounded-full bg-green-100">
                                    <FreeBreakfastIcon className='text-lime-900' />
                                </div>
                                <h3 className='text-xl font-bold py-5 text-lime-900'>Enterprise Business Solutions</h3>
                                <p className='text-gray-500 text-md'>Our Enterprise Business Solutions cut across sectors like: Finance, Oil & Gas, Real Estates, Health, Education, and other government parastatals.</p>
                                <button className='text-gray-500 py-5 text-lg'>
                                    Learn More
                                </button>
                            </div>
                            <div className='lg:h-[350px]  sm:h-[full] lg:py-6 lg:px-10 sm:p-6 sm:justify-center sm:item-center lg:text-left sm:text-center my-5 bg-white w-[380px] '
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 10px 16px rgba(184, 184, 184, 0.2)" // Example of a soft shadow
                                }}

                            >
                                <div className="h-[70px] w-[70px] justify-center my-2 items-center flex lg:mx-0 sm:mx-auto rounded-full bg-green-100">
                                    <BrushIcon className='text-lime-900' />
                                </div>
                                <h3 className='text-xl font-bold py-5 text-lime-900'>Web Design & Development</h3>
                                <p className='text-gray-500 text-md'>We design and develop aesthetic and responsive websites for all manner of businesses (E-Commerce, Corporate webportals, & Collaborations).

                                </p>
                                <button className='text-gray-500 py-5 text-lg'>
                                    Learn More
                                </button>
                            </div>
                            <div className='lg:h-[full]  sm:h-[full] lg:py-6 lg:px-10 sm:p-6 sm:justify-center sm:item-center lg:text-left sm:text-center my-5 bg-white w-[380px] '
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 10px 16px rgba(184, 184, 184, 0.2)" // Example of a soft shadow
                                }}

                            >
                                <div className="h-[70px] w-[70px] justify-center my-2 items-center flex lg:mx-0 sm:mx-auto rounded-full bg-green-100">
                                    <ArticleIcon className='text-lime-900' />
                                </div>
                                <h3 className='text-xl font-bold py-5 text-lime-900'>Social Media Management</h3>
                                <p className='text-gray-500 text-md'>With the global trend in digital marketing, we provide a result-oriented strategies to our teeming clients to enable them increase their customers base by a way of community engagements campaigns across major social media platforms.</p>
                                <button className='text-gray-500 py-5 text-lg'>
                                    Learn More
                                </button>
                            </div>


                        </div>
                    </div>
                </section>
                <section className="py-20 bg-white">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-lime-900"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                        >
                            Our Trusted Partners🤝
                        </h2>
                        <div className="flex flex-wrap items-center justify-center mt-20 space-x-20  sm:space-x-10">

                            <img src={firstImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8" />
                            <img src={secondImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8" />
                            <img src={thirdImage} alt="" className="lg:h-[60px] rounded-full my-5 md:h-8 sm:h-8" />
                            <img src={fifthImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8" />
                            <img src={sixthImage} alt="" className="lg:h-[70px] my-5 md:h-8 sm:h-8 " />
                            <img src={fourthImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8 bg-gray-500 rounded-md" />

                        </div>
                    </div>
                </section>
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 shadow-2xl right-5 bg-lime-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-lime-700"
                >
                    <p className="md:hidden sm:hidden lg:block">↑ Scroll to Top</p>
                    <p className="lg:hidden sm:hidden md:block">↑ Scroll to Top</p>
                    <p className="md:hidden lg:hidden  sm:block">↑ Top</p>
                </button>
                <Footer />
            </div>

        </>
    );
};

export default About;
