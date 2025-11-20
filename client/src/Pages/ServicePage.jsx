import React, { useState, useEffect } from "react";
import Navbar from "../Components/Nav";
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import backgroundImage2 from '../images/bg-pattern-3.png';
import firstImage from '../images/abchealth.png';
import secondImage from '../images/access.png';
import fourthImage from '../images/law.png';
import thirdImage from '/finceptive.svg';
import fifthImage from '../images/grow.png';
import sixthImage from '/women.svg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import webAppImage from '../images/web-app.jpg';
import consultingImage from '../images/Business_Consulting.jpg';
import branding from '../images/rebranding.jpg';
import uiuxImage from '../images/uiux.webp';
import backendImage from '../images/backend.jpg';
import analyticsImage from '../images/business_analytics.webp';
import Footer from "../Components/Footer";

// AOS imports
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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

    const services = [
        {
            title: "Web App Development",
            description: "We build scalable and high-performance web applications tailored to your business needs using modern frameworks and technologies.",
            features: ["React.js & Next.js", "Responsive Design", "Performance Optimization", "SEO Friendly"],
            icon: "💻",
            image: webAppImage,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Enterprise Business Solutions",
            description: "Transform your enterprise with cutting-edge business solutions, automation, and digital transformation strategies.",
            features: ["Process Automation", "System Integration", "Digital Transformation", "Workflow Optimization"],
            icon: "🏢",
            image: consultingImage,
            gradient: "from-green-500 to-lime-500"
        },
        {
            title: "UI/UX Development",
            description: "Enhance user engagement with intuitive and aesthetically pleasing UI/UX designs that drive conversion and user satisfaction.",
            features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
            icon: "🎨",
            image: uiuxImage,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Corporate Branding",
            description: "Create a strong brand identity that resonates with your target audience and builds lasting customer relationships.",
            features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Collateral"],
            icon: "🔖",
            image: branding,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Managed Services",
            description: "Ensure seamless IT operations with our comprehensive managed services including cloud infrastructure and DevOps.",
            features: ["Cloud Management", "DevOps", "24/7 Monitoring", "Security Management"],
            icon: "☁️",
            image: backendImage,
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            title: "Business Analytics",
            description: "Leverage data-driven insights to make informed business decisions and drive growth through advanced analytics.",
            features: ["Data Visualization", "KPI Tracking", "Predictive Analytics", "Business Intelligence"],
            icon: "📊",
            image: analyticsImage,
            gradient: "from-teal-500 to-green-500"
        },
    ];

    const serviceStats = [
        { number: "50+", label: "Projects Completed" },
        { number: "15+", label: "Team Members" },
        { number: "5+", label: "Years Experience" },
        { number: "98%", label: "Client Satisfaction" }
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full mb-4"></div>
                    <div className="text-2xl font-bold text-gray-900">Bracknell</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/50 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div
                        className="border-l-4 border-green-500 pl-4 md:pl-6 mb-4 md:mb-8 transform transition-all duration-700"
                        data-aos="fade-right"
                    >
                        <span className="text-green-400 font-medium text-xs md:text-sm uppercase tracking-wider">Premium Technology Services</span>
                    </div>

                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 md:mb-8 leading-tight transform transition-all duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Our<br />
                        <span className="text-green-500 font-bold">Services</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl leading-relaxed transform transition-all duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Comprehensive technology solutions designed to drive innovation, efficiency,
                        and sustainable growth for your business.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 transform transition-all duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <Link to="/Contact" className="w-full sm:w-auto">
                            <button className="w-full px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium text-base md:text-lg transform hover:-translate-y-1 hover:shadow-xl md:hover:shadow-2xl rounded-lg">
                                Get Started
                            </button>
                        </Link>
                        <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-base md:text-lg transform hover:-translate-y-1 rounded-lg">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            {/* All Services Grid */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div
                        className="text-center mb-12 md:mb-16"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                            Our <span className="text-green-600">Services</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg md:hover:shadow-xl overflow-hidden group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative overflow-hidden h-40 sm:h-48">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <div className={`absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${service.gradient} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg`}>
                                        <span className="text-white text-base md:text-lg">{service.icon}</span>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Features:</h4>
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-gray-700">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                                                <span className="text-xs sm:text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/Contact">
                                        <button className="w-full py-2 sm:py-3 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium rounded-lg transform hover:-translate-y-1 text-sm sm:text-base">
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="text-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Trusted by <span className="text-lime-700">Industry Leaders</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

            {/* Enhanced CTA Section */}
            <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 transform transition-all duration-700"
                        data-aos="fade-up"
                    >
                        Ready to Transform Your Business?
                    </h2>
                    <p
                        className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto transform transition-all duration-700"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Let's build something great together. Get in touch to discuss your project requirements and get a free consultation.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transform transition-all duration-700"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <Link to="/Contact">
                            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium text-base md:text-lg transform hover:-translate-y-1 hover:shadow-xl md:hover:shadow-2xl rounded-lg">
                                Start Your Project
                            </button>
                        </Link>
                        <Link to="/About">
                            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-base md:text-lg transform hover:-translate-y-1 rounded-lg">
                                Learn More About Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Enhanced Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-600 text-white p-3 sm:p-4 rounded-lg hover:bg-green-700 transition-all duration-300 z-50 transform hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            <Footer />
        </div>
    )
}

export default Service;