import React, { useState } from "react";
import Navbar from "../Components/Nav";
import backgroundImage from '../images/business-hero.jpeg';
import backgroundImage2 from '../images/bg-pattern-3.png';
import firstImage from '../images/abchealth.png';
import secondImage from '../images/access.png';
import fourthImage from '../images/law.png';
import thirdImage from '/finceptive.svg';
import fifthImage from '../images/grow.png';
import sixthImage from '/women.svg';
import MyFont from '../images/file11.svg';
import MyFont2 from '../images/file22.svg';
import MyFont3 from '../images/file33.svg';
import PhoneImage from '../images/phoneImg.png';
import { Link } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "../Components/Footer";

const LandingPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What do I need to know before contacting you?",
            answer: "Before reaching out to Bracknell, it's helpful to have a clear idea of your project requirements, target audience, budget, and timeline. If you're unsure, our team can guide you through the process."
        },
        {
            question: "What happens after you finish my app?",
            answer: "After development, Bracknell provides post-launch support, including maintenance, updates, and scaling options. We also offer guidance on marketing strategies and user acquisition to ensure your app's success"
        },
        {
            question: "Do you have any reviews from satisfied customers?",
            answer: "Yes! Bracknell has worked with multiple clients across various industries, delivering high-quality software solutions. We'd be happy to share testimonials and case studies upon request."
        },
        {
            question: "How much time will it take for you to make my app?",
            answer: "The timeline depends on the complexity of your app, required features, and development approach. On average, a basic app takes 4-8 weeks, while a more complex project may take several months."
        },
        {
            question: "How do you guarantee product quality?",
            answer: "Bracknell follows a rigorous development process, including thorough testing, code reviews, and adherence to industry best practices. We also ensure your app meets security, performance, and user experience standards."
        },
        {
            question: "Should I create a mobile or a web app?",
            answer: "It depends on your business goals and target audience. A web app is accessible across all devices, while a mobile app provides better user engagement and native features. We can help you decide the best option for your needs."
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const features = [
        {
            icon: MyFont,
            title: "Drive Innovation with Digital Transformation",
            description: "We bridge business potential with user-centric design to create seamless digital experiences, helping brands stay ahead in an evolving market.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: MyFont2,
            title: "Build a Sustainable & Scalable Future",
            description: "Our innovative solutions drive sustainable growth, balancing business success with environmental responsibility for a future-proof strategy.",
            gradient: "from-green-500 to-lime-500"
        },
        {
            icon: MyFont3,
            title: "Empowering Businesses for Success",
            description: "We collaborate with industry leaders to deliver tailored digital solutions, helping businesses maximize efficiency and customer engagement.",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    const strategyCards = [
        {
            icon: <AccessTimeIcon className="text-blue-600 text-3xl" />,
            title: "Business Agility & Innovation",
            description: "Adapt quickly to market changes with our agile development approach",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            icon: <FlagIcon className="text-pink-600 text-3xl" />,
            title: "Strategic Goal Definition",
            description: "Clear roadmap planning to achieve your business objectives",
            bgColor: "bg-pink-50",
            borderColor: "border-pink-200"
        },
        {
            icon: <TrendingUpIcon className="text-cyan-600 text-3xl" />,
            title: "Business Model Analysis",
            description: "Comprehensive analysis to optimize your business model",
            bgColor: "bg-cyan-50",
            borderColor: "border-cyan-200"
        },
        {
            icon: <WorkOutlineIcon className="text-green-600 text-3xl" />,
            title: "Action Roadmap Definition",
            description: "Step-by-step implementation plan for success",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        }
    ];

    return (
        <div className="overflow-hidden">
            <Navbar />

            <div
                className="lg:h-[100vh] bg-cover overflow-x-hidden bg-bottom bg-no-repeat bg-center lg:px-[10em] lg:py-[7rem] md:bg-none sm:bg-none"
                style={{
                    backgroundImage: `url(${backgroundImage})`, // Default for all screens
                }}
            >
                <div className="flex flex-col justify-center lg:bg-transparent sm:bg-lime-50 md:bg-lime-50 sm:w-[100%]  items-center text-center py-4 pt-20 lg:items-start lg:text-left lg:bg-transparent w-[100%] lg:h-full md:h-[85vh] sm:h-[85vh]">

                    <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/50 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                    <div className="inline-flex hidden lg:block items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 shadow-lg"
                        data-aos="fade-down"
                        data-aos-duration="800">
                        <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 animate-ping"></span>
                        <span className="text-white font-semibold">Leading Digital Transformation Partner</span>
                    </div>

                    <h1 className="font-sans text-black lg:text-white sm:text-5xl mb-2 md:text-5xl lg:text-[70px] font-bold"
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

                    <p className="font-sans sm:text-lg md:text-base lg:text-lg text-[#191919] lg:text-white py-8 sm:px-4 lg:px-0"
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

                        <Link to="/Service">
                            <button className="font-sans px-6 py-4 bg-lime-600 text-white rounded-md hover:bg-lime-700">
                                Discover Now
                            </button>
                        </Link>

                    </div>
                </div>
            </div>


            <section className="py-20 px-5 md:px-10 lg:px-20 text-center">
                <h1 className="text-3xl font-sans md:text-4xl lg:text-5xl text-lime-900 font-bold mb-10">
                    Make your business future-proof <br className="hidden lg:block md:block" /> to anticipate the challenges to be
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 justify-items-center">

                    <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                        data-aos="fade-up"
                        data-aos-duration="700"
                    >
                        <img className="h-12 w-12 mb-4" src={MyFont} alt="Digital Transformation Icon" />
                        <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">
                            Drive Innovation with Digital Transformation
                        </h2>
                        <p className="font-sans text-customBlueGray mb-4">
                            We bridge business potential with user-centric design to create seamless digital experiences, helping brands stay ahead in an evolving market.
                        </p>
                        <Link to="/Contact">
                            <button className="text-customBlueGray font-medium hover:text-lime-600">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img className="h-12 w-12 mb-4" src={MyFont2} alt="Sustainability Icon" />
                        <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">
                            Build a Sustainable & Scalable Future
                        </h2>
                        <p className="font-sans text-customBlueGray mb-4">
                            Our innovative solutions drive sustainable growth, balancing business success with environmental responsibility for a future-proof strategy.
                        </p>
                        <Link to="/Contact">
                            <button className="text-customBlueGray  font-medium hover:text-lime-600">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <img className="h-12 w-12 mb-4" src={MyFont3} alt="Partnership Icon" />
                        <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">
                            Empowering Businesses for Success
                        </h2>
                        <p className="font-sans text-customBlueGray mb-4">
                            We collaborate with industry leaders to deliver tailored digital solutions, helping businesses maximize efficiency and customer engagement.
                        </p>
                        <Link to="/Contact">
                            <button className="text-customBlueGray font-medium hover:text-lime-600">
                                Learn More
                            </button>
                        </Link>
                    </div>

                </div>
            </section >

            {/* Enhanced Phone Section */}
            <section className="py-20 bg-gradient-to-br from-lime-50 to-blue-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-200 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Phone Image */}
                        <div className="relative"
                            data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="relative z-10">
                                <img
                                    src={PhoneImage}
                                    alt="Mobile App Development"
                                    className="w-full max-w-md mx-auto lg:max-w-lg transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-lime-500 rounded-2xl rotate-12 z-0 opacity-20"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-3xl -rotate-12 z-0 opacity-20"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8"
                            data-aos="fade-left"
                            data-aos-duration="1000">
                            <div className="inline-block">
                                <span className="text-lime-700 font-bold text-lg tracking-wider uppercase">Digital Economy</span>
                                <div className="h-1 w-20 bg-lime-600 mt-2"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Building Business for Your <span className="text-lime-700">Digital Economy</span>
                            </h2>

                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    We are building business, banking products, and services to support the next generation of entrepreneurs.
                                    The world as we know it is no longer the same, and changes now occur in days and months, not years.
                                </p>
                                <p>
                                    Get started with Bracknell and transform your business for the digital age with our expert solutions
                                    and cutting-edge technology.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <Link to="/About">
                                    <button className="px-8 py-4 bg-gradient-to-r from-lime-700 to-lime-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-lime-200/50 transition-all duration-300 hover:scale-105">
                                        View Our Work
                                    </button>
                                </Link>
                                <Link to="/Contact">
                                    <button className="px-8 hidden lg:block py-4 border-2 border-lime-200 text-lime-800 font-semibold rounded-xl hover:bg-lime-50 transition-all duration-300 hover:scale-105">
                                        Get in Touch
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Strategy Section */}
            <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Accelerate Your <span className="text-lime-300">Business Growth</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Bracknell designs innovative concepts, prototypes, and processes to transform your services
                            and experiences for a competitive edge in the market.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Strategy Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {strategyCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`${card.bgColor} ${card.borderColor} rounded-3xl p-6 border-2 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Text Content */}
                        <div className="text-left"
                            data-aos="fade-left"
                            data-aos-duration="800">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Strategies That Get You on <br />
                                the Path to Success
                            </h3>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                With Bracknell's deep industry expertise and methodologies like Lean Strategy and Business Design,
                                we equip organizations to embrace change and thrive in competitive markets.
                            </p>
                            <Link to="/Service">
                                <button className="text-lime-300 font-bold text-lg flex items-center hover:translate-x-2 transition-transform duration-300">
                                    Discover How We Can Help
                                    <ArrowForwardIcon className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="text-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl sm:text-3xl font-bold text-gray-900 mb-6">
                            Trusted by <span className="text-lime-700">Industry Leaders</span>
                        </h2>
                        <p className="text-xl sm:text-md px-1 text-gray-600 max-w-3xl mx-auto">
                            We're proud to partner with forward-thinking organizations across various sectors
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center mt-20 space-x-20  sm:space-x-10">

                        <Link to="https://abchealth.com/"><img src={firstImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8" /></Link>
                        <Link to="https://www.accessbankplc.com/"><img src={secondImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8" /></Link>
                        <Link to="https://finceptive.co/"><img src={thirdImage} alt="" className="lg:h-[60px] rounded-full my-5 md:h-8 sm:h-8" /></Link>
                        <Link to="https://growfinance.tech/"><img src={fifthImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8" /></Link>
                        <Link to="https://thewcommunity.com/"><img src={sixthImage} alt="" className="lg:h-[70px] my-5 md:h-8 sm:h-8 " /></Link>
                        <Link to="https://thelawcrest.com/"><img src={fourthImage} alt="" className="lg:h-[50px] my-5 md:h-8 sm:h-8 bg-gray-500 rounded-md" /></Link>


                    </div>
                </div>
            </section>

            {/* Enhanced FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-lime-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Frequently Asked <span className="text-lime-700">Questions</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We hope this section will help you better understand the issues related to software development
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <button
                                        className="flex items-center justify-between w-full text-left"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0 w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center group-hover:bg-lime-200 transition-colors duration-300">
                                            {openIndex === index ? (
                                                <RemoveIcon className="text-lime-700 text-lg" />
                                            ) : (
                                                <AddIcon className="text-lime-700 text-lg" />
                                            )}
                                        </div>
                                    </button>
                                    {openIndex === index && (
                                        <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-600 text-lg mb-8">
                                Still have questions? We're here to help you with your digital transformation journey.
                            </p>
                            <Link to="/Contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-lime-700 to-lime-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-lime-200/50 transition-all duration-300 hover:scale-105">
                                    Contact Us Today
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-lime-700 to-lime-600 text-white p-4 rounded-full shadow-2xl hover:shadow-lime-200/50 transition-all duration-300 hover:scale-110 z-50 group"
            >
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                    ↑
                </div>
            </button>

            <Footer />
        </div>
    );
};

export default LandingPage;