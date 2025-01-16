import React from "react";
import Navbar from "../Components/Nav";
import backgroundImage from '../images/business-hero.jpeg';
import backgroundImage2 from '../images/bg-pattern-3.png';
import MyFont from '../images/file11.svg';
import MyFont2 from '../images/file22.svg';
import MyFont3 from '../images/file33.svg';
import PhoneImage from '../images/phoneImg.webp';
import boxImage from '../images/img-box.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Footer from "../Components/Footer";

const LandingPage = () => {
    const faqs = [
        "What do I need to know before contacting you?",
        "Do you have any reviews from satisfied customers?",
        "How much time will it take for you to make my app?",
        "How do you guarantee product quality?",
        "Should I create a mobile or a web app?",
        "What happens after you finish my app?",
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div>
                <Navbar />

                {/* Hero Section */}
                <div
                    className="lg:h-[90vh] bg-cover overflow-x-hidden bg-bottom bg-no-repeat bg-center lg:px-[10em] lg:py-[7rem] md:bg-none sm:bg-none"
                    style={{
                        backgroundImage: `url(${backgroundImage})`, // Default for all screens
                    }}
                >
                    <div className="flex flex-col justify-center lg:bg-transparent sm:bg-lime-50 md:bg-lime-50 sm:w-[100%]  items-center text-center py-4 lg:items-start lg:text-left lg:bg-transparent w-[100%] lg:h-full md:h-[85vh] sm:h-[85vh]">
                        <h1 className="font-sans sm:text-4xl mb-2 md:text-5xl lg:text-7xl font-bold"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="500">
                            Designing your <br /> next
                            <span
                                className="ml-2"
                                style={{
                                    background:
                                        "linear-gradient(272.54deg,rgb(74, 230, 113) 12.86%,rgb(197, 215, 33) 68.06%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                business.
                            </span>
                        </h1>

                        <p className="font-sans sm:text-lg md:text-base lg:text-lg text-[#191919] py-8 sm:px-4 lg:px-0"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000">
                            Small business, big opportunity? We help our clients exploit technology to <br className="hidden lg:block" />
                            strategically reshape their business around the digital economy.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-3 py-4"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1200">
                            <button className="font-sans px-6 py-4 bg-lime-600 text-white rounded-md hover:bg-lime-700">
                                Discover Now
                            </button>
                            <button className="font-sans hidden lg:block px-6 py-4 border border-lime-500 text-black rounded-md hover:border-lime-700">
                                How It Works
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Below Hero */}
                <section className="py-20 px-5 md:px-10 lg:px-20 text-center">
                    <h1 className="text-3xl font-sans md:text-4xl lg:text-5xl text-lime-900 font-bold mb-10">
                        Make your business future-proof <br className="hidden lg:block md:block" /> to anticipate the challenges to be
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 justify-items-center">

                        <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <img className="h-12 w-12 mb-4" src={MyFont} alt="Icon" />
                            <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">Design-led digital transformation</h2>
                            <p className="font-sans text-customBlueGray mb-4">
                                We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.
                            </p>
                            <button className="text-customBlueGray text-lg font-medium hover:text-lime-600">
                                Learn More
                            </button>
                        </div>

                        <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img className="h-12 w-12 mb-4" src={MyFont2} alt="Icon" />
                            <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">Tansition to sustainable futures</h2>
                            <p className="font-sans text-customBlueGray mb-4">
                                We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.
                            </p>
                            <button className="text-customBlueGray text-lg font-medium hover:text-lime-600">
                                Learn More
                            </button>
                        </div>

                        <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <img className="h-12 w-12 mb-4" src={MyFont3} alt="Icon" />
                            <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">We empower our partners</h2>
                            <p className="font-sans text-customBlueGray mb-4">
                                We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.
                            </p>
                            <button className="text-customBlueGray text-lg font-medium hover:text-lime-600">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <hr className="bg-lime-600 my-20" />

                    <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start justify-center px-5 md:px-10 lg:px-20">
                        {/* <img src={PhoneImage} alt="Phone" className="w-full mb-5 max-w-sm lg:max-w-2xl" /> */}

                        <div class="relative mb-5 w-[100%]"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img src={PhoneImage} alt="Background" className="w-full mb-5 max-w- lg:max-w-2xl md:w-[450px]" />
                            <img src={boxImage} alt="Overlay" className="absolute top-[180px] left-[-40px] w-[450px] md:w-[190px] h-auto" />
                        </div>

                        <div className="text-left mt-12">
                            <h1 className="text-3xl md:text-3xl font-sans lg:text-4xl text-lime-900 font-bold mb-6"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="500"
                            >
                                We’re building business for <br /> your digital economy
                            </h1>
                            <p className="text-customBlueGray font-sans text-lg lg:text-lg mb-6"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                            >
                                We are building business, banking products, and services to support the next generation of entrepreneurs. The world as we know it is no longer the same, and changes now occur in days and months, not years. Get started!
                            </p>

                            <div className="flex gap-8 mt-5"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1300"
                            >
                                <div>
                                    <h1 className="text-5xl md:text-2xl lg:text-5xl text-green-500 font-semibold">120k</h1>
                                    <h2 className="text-sm text-customBlueGray md:text-base lg:text-lg"
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1500"
                                    >Business Consultants</h2>
                                </div>
                                <div>
                                    <h1 className="text-5xl md:text-4xl lg:text-5xl text-green-500 font-semibold">370+</h1>
                                    <h2 className="text-sm text-customBlueGray md:text-base lg:text-lg"
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1500"
                                    >Startups in 2024/2025</h2>
                                </div>
                            </div>

                            <button className="mt-8 px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-800"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1800"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </section >
                <div className="p-4 sm:p-4 md:p-10 lg:p-12">
                    <section
                        className="text-center rounded-lg bg-cover bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 overflow-hidden bg-bottom bg-no-repeat bg-center sm:px-4 md:px-8  lg:py-[7rem]"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(179, 247, 193, 0.5), rgba(235, 243, 255, 0.5), rgba(169, 134, 252, 0.5)), url(${backgroundImage2})`,
                            backgroundBlendMode: "overlay",
                        }}
                    >
                        <h1 className="text-2xl font-sans sm:text-4xl mt-10 sm:pt-10 sm:pb-3 md:text-4xl lg:text-5xl text-lime-900 font-bold mb-5">
                            Develop your next business today
                        </h1>
                        <p className="text-customBlueGray text-sm sm:text-sm md:text-lg lg:text-xl mb-10">
                            We design new concepts, prototypes, and processes for the next <br className="lg:block sm:hidden" />
                            generation of services and experiences, ready for the market.
                        </p>

                        {/* Main Content */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            {/* Cards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                                {/* Card 1 */}
                                <div className="bg-white rounded-2xl lg:shadow-xl sm:shadow flex flex-col justify-center items-center text-center px-3  h-[200px] md:w-[100%] sm:h-[200px] w-[100%] sm:w-[100%] md:w-[100%] mx-auto"
                                    data-aos="zoom-out-up"
                                >
                                    <div className="h-[70px] w-[70px] justify-center my-2 items-center flex rounded-full bg-blue-100">
                                        <AccessTimeIcon className="text-blue-400" />
                                    </div>
                                    <p className="text-lime-900 font-bold text-lg sm:text-xl lg:text-xl">
                                        Business Agility & Innovation
                                    </p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white rounded-2xl lg:shadow sm:shadow flex flex-col justify-center items-center text-center px-3 h-[200px] md:w-[100%]  sm:h-[200px] w-[100%] sm:w-[100%] md:w-[100%] mx-auto"
                                    data-aos="zoom-out-up"
                                >
                                    <div className="h-[70px] w-[70px] justify-center my-2 items-center flex rounded-full bg-pink-100">
                                        <FlagIcon className="text-pink-400" />
                                    </div>
                                    <p className="text-lime-900 font-bold text-lg sm:text-xl lg:text-xl">
                                        Strategic Goal Definition
                                    </p>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white rounded-2xl lg:shadow sm:shadow flex flex-col justify-center items-center text-center px-3  h-[200px] md:w-[100%]  sm:h-[200px] w-[100%] sm:w-[100%] md:w-[100%] mx-auto"
                                    data-aos="zoom-out-up"
                                >
                                    <div className="h-[70px] w-[70px] justify-center my-2 items-center flex rounded-full bg-cyan-100">
                                        <TrendingUpIcon className="text-cyan-400" />
                                    </div>
                                    <p className="text-lime-900 font-bold text-lg sm:text-xl lg:text-xl">
                                        Business Model Analysis
                                    </p>
                                </div>
                                {/* Card 4 */}
                                <div className="bg-white rounded-2xl lg:shadow-xl sm:shadow flex flex-col justify-center items-center text-center px-3  h-[200px] md:w-[100%]  sm:h-[200px] w-[100%] sm:w-[100%] md:w-[100%] mx-auto"
                                    data-aos="zoom-out-up"
                                >
                                    <div className="h-[70px] w-[70px] justify-center my-2 items-center flex rounded-full bg-green-100">
                                        <WorkOutlineIcon className="text-green-400" />
                                    </div>
                                    <p className="text-lime-900 font-bold text-lg sm:text-xl lg:text-xl">
                                        Action Roadmap Definition
                                    </p>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="text-left">
                                <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-purple-900 font-bold mb-5">
                                    Strategies that get you on <br className="lg:block sm:hidden" /> the path to success
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-lg md:text-lg lg:text-lg mb-8">
                                    Through an in-depth knowledge of all industrial sectors and the application of approaches such as Lean Strategy and Business Design, we prepare organisations to welcome change, to be ready to evolve rapidly while remaining competitive in the market.
                                </p>
                                <button className="text-purple-600 font-bold mb-20 hover:underline">
                                    See How it Works →
                                </button>
                            </div>
                        </div>
                    </section>
                </div>


                <section className="py-20 bg-white">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-lime-900">
                            Trusted by nearly 5000+ customers & startups
                        </h2>
                        <div className="flex items-center justify-center mt-8 space-x-8">
                            {/* Trustpilot */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/assets/trustpilot-logo.svg"
                                    alt="Trustpilot"
                                    className="h-8"
                                />
                                <span className="text-gray-500">Trustpilot</span>
                            </div>
                            {/* AWS */}
                            <img src="/assets/aws-logo.svg" alt="AWS" className="h-8" />
                            {/* Spotify */}
                            <img src="/assets/spotify-logo.svg" alt="Spotify" className="h-8" />
                            {/* Monday */}
                            <img src="/assets/monday-logo.svg" alt="Monday" className="h-8" />
                            {/* Forbes */}
                            <img src="/assets/forbes-logo.svg" alt="Forbes" className="h-8" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="bg-white py-16 px-6 lg:px-[10rem]">
                        <div className="max-w-4xl lg:text-left sm:text-center">
                            <h2 className="lg:text-6xl sm:text-4xl font-sans font-semibold text-gray-800">
                                Frequently asked questions
                            </h2>
                            <p className="text-gray-500 text-lg sm:text-md text-customBlueGray font-sans mt-4">
                                We hope this section will help you better understand the issues
                                related to software
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    <span className="text-gray-800 font-medium">{faq}</span>
                                    <button className="text-lime-600 font-bold text-xl">+</button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button className="bg-black text-white border-lime-800 py-4 px-7 rounded-lg hover:border hover:bg-transparent hover:text-lime-600">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section Below Hero */}
                <section className="py-20 px-5 md:px-10 lg:px-20 text-center">
                    {/* Content */}
                </section>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 shadow-2xl right-5 bg-lime-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-lime-700"
                >
                    <p className="md:hidden sm:hidden lg:block">↑ Scroll to Top</p>
                    <p className="lg:hidden sm:hidden md:block">↑ Scroll to Top</p>
                    <p className="md:hidden lg:hidden  sm:block">↑ Top</p>
                </button>
                <Footer />
            </div >
        </>
    );
};

export default LandingPage;
