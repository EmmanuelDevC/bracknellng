import React, { useState } from "react";
import Navbar from "../Components/Nav";
import MyFont from '../images/file11.svg';
import MyFont2 from '../images/file22.svg';
import MyFont3 from '../images/file33.svg';
import backgroundImage from '../images/aboutBg.png';
import backgroundImage2 from '../images/bg-pattern-3.png';
import webAppImage from '../images/web-app.jpg';
import consultingImage from '../images/Business_Consulting.jpg';
import branding from '../images/rebranding.jpg';
import uiuxImage from '../images/uiux.webp';
import backendImage from '../images/backend.jpg';
import analyticsImage from '../images/business_analytics.webp';
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from "../Components/Footer";


const Service = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What do I need to know before contacting you?", answer: "Before reaching out to Bracknell, it's helpful to have a clear idea of your project requirements, target audience, budget, and timeline. If you're unsure, our team can guide you through the process." },


        { question: "What happens after you finish my app?", answer: "After development, Bracknell provides post-launch support, including maintenance, updates, and scaling options. We also offer guidance on marketing strategies and user acquisition to ensure your app’s success" },


        { question: "Do you have any reviews from satisfied customers?", answer: "Yes! Bracknell has worked with multiple clients across various industries, delivering high-quality software solutions. We’d be happy to share testimonials and case studies upon request." },


        { question: "How much time will it take for you to make my app?", answer: "The timeline depends on the complexity of your app, required features, and development approach. On average, a basic app takes 4–8 weeks, while a more complex project may take several months." },


        { question: "How do you guarantee product quality?", answer: "Bracknell follows a rigorous development process, including thorough testing, code reviews, and adherence to industry best practices. We also ensure your app meets security, performance, and user experience standards." },


        { question: "Should I create a mobile or a web app?", answer: "It depends on your business goals and target audience. A web app is accessible across all devices, while a mobile app provides better user engagement and native features. We can help you decide the best option for your needs." },

    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <Navbar />
            <div>
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
                        Our Services
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
                            Service
                        </li>
                    </ul>
                </div>

                <section className=" lg:px-40 text-center bg-white py-20 sm:px-5 bg-blue-50"
                    style={{
                        backgroundImage: `url(${backgroundImage})`, // Default for all screens
                    }}
                >
                    <h1 className="text-3xl font-sans my-5 md:text-4xl lg:text-4xl text-lime-900 font-bold mb-10">We offer you the best service🚀</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 justify-items-center">

                        <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <img className="h-12 w-12 mb-4" src={MyFont} alt="Icon" />
                            <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">Drive Innovation with Digital Transformation
                            </h2>
                            <p className="font-sans text-customBlueGray mb-4">
                                We bridge business potential with user-centric design to create seamless digital experiences, helping brands stay ahead in an evolving market.
                            </p>

                        </div>

                        <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img className="h-12 w-12 mb-4" src={MyFont2} alt="Icon" />
                            <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">Build a Sustainable & Scalable Future</h2>
                            <p className="font-sans text-customBlueGray mb-4">
                                Our innovative solutions drive sustainable growth, balancing business success with environmental responsibility for a future-proof strategy.
                            </p>

                        </div>

                        <div className="flex flex-col w-[90%] sm:w-screen md:w-[auto] sm:px-4 max-w-sm text-left"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <img className="h-12 w-12 mb-4" src={MyFont3} alt="Icon" />
                            <h2 className="font-bold text-lime-800 font-sans text-lg lg:text-xl sm:text-lg mb-2">Empowering Businesses for Success</h2>
                            <p className="font-sans text-customBlueGray mb-4">
                                We collaborate with industry leaders to deliver tailored digital solutions, helping businesses maximize efficiency and customer engagement.
                            </p>

                        </div>
                    </div>

                    <hr className="my-10 text-green-500" />

                    <div className=" flex flex-col justify-center text-center">

                        <h1 className="text-lime-900 font-semibold py-20 font-sans  font-bold text-2xl lg:text-4xl md:text-4xl">
                            Outstanding software and services <br className="hidden lg:block md:block" /> that solve your hassle
                        </h1>

                        <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1 my-5 lg:my-10 md:my-10">
                            {[
                                {
                                    title: "Web App Development",
                                    description: "We build scalable and high-performance web applications tailored to your business needs.",
                                    image: webAppImage,
                                    alt: "Web App Development Service",
                                },
                                {
                                    title: "Enterprise Business Solutions",
                                    description: "Transform your enterprise with cutting-edge business solutions and automation.",
                                    image: consultingImage,
                                    alt: "Enterprise Business Solutions",
                                },
                                {
                                    title: "UI/UX Development",
                                    description: "Enhance user engagement with intuitive and aesthetically pleasing UI/UX designs.",
                                    image: uiuxImage,
                                    alt: "UI/UX Design Service",
                                },
                                {
                                    title: "Corporate Branding",
                                    description: "Create a strong brand identity that resonates with your target audience.",
                                    image: branding,
                                    alt: "Corporate Branding Service",
                                },
                                {
                                    title: "Managed Services",
                                    description: "Ensure seamless IT operations with our comprehensive managed services.",
                                    image: backendImage,
                                    alt: "IT Managed Services",
                                },
                                {
                                    title: "Business Analytics",
                                    description: "Leverage data-driven insights to make informed business decisions.",
                                    image: analyticsImage,
                                    alt: "Business Analytics Service",
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="h-fit border text-left w-full rounded-xl overflow-hidden max-w-sm"
                                    style={{
                                        borderRadius: "50px",
                                        boxShadow: "0 10px 16px rgba(188, 188, 188, 0.2)",
                                    }}
                                    data-aos="fade-up"
                                    data-aos-duration={`${400 + index * 100}`}
                                >
                                    <div className="w-full h-64">
                                        <img
                                            src={service.image}
                                            alt={service.alt}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="w-full p-10 flex flex-col justify-center bg-white">
                                        <h2 className="font-semibold py-5 font-sans text-lime-900 text-2xl rounded-md">
                                            {service.title}
                                        </h2>
                                        <p className="text-md font-sans text-customBlueGray pb-5 rounded-md">
                                            {service.description}
                                        </p>
                                        <Link to="/Contact">
                                            <button
                                                className="py-4 px-6 w-40 transition-color duration-300 ease-in-out hover:bg-lime-800 rounded-md text-lime-800 hover:text-white border border-lime-600"
                                                aria-label={`Contact us for ${service.title}`}
                                            >
                                                Contact Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-5 lg:px-20 ">
                        {/* Section Title */}
                        <h2 className="text-3xl font-sans font-bold text-center text-gray-800 sm:text-4xl mb-10">
                            What our customers are saying
                        </h2>

                        {/* Testimonials Grid */}
                        <div className="lg:mt-20 sm:mt-3 flex flex-wrap justify-around">
                            {/* Testimonial Card */}
                            <div className='h-[full] lg:p-9 sm:p-5 my-5 sm:justify-center lg:text-left sm:item-center sm:text-center bg-white w-[380px]'
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 10px 16px rgba(188, 188, 188, 0.2)" // Example of a soft shadow
                                }}

                                data-aos="fade-up"
                                data-aos-duration="700">
                                <div className="flex flex-row my-5 item-center justify-left">
                                    <img
                                        src={backendImage}
                                        alt="Customer"
                                        className="w-20 h-20 rounded-full mx-3 border-4 boclrder-white"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mt-4">Stella Smith</h3>
                                        <p className="text-gray-500 text-sm mb-4">Engineer at Unify</p>
                                    </div>
                                </div>

                                <p className="text-customBlueGray">
                                    "Outstanding dedication to excellence, exceptional support received.
                                    Impressive service!"
                                </p>
                            </div>

                            {/* Repeat for other testimonials */}
                            <div className='h-[full] lg:p-9 sm:p-6 my-5 sm:justify-center lg:text-left sm:item-center sm:text-center bg-white w-[380px]'
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 10px 16px rgba(188, 188, 188, 0.2)" // Example of a soft shadow
                                }}

                                data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="flex flex-row my-5 item-center justify-left">
                                    <img
                                        src={backendImage}
                                        alt="Customer"
                                        className="w-20 h-20 rounded-full mx-3 border-4 border-white"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mt-4">Stella Smith</h3>
                                        <p className="text-gray-500 text-sm mb-4">Engineer at Unify</p>
                                    </div>
                                </div>

                                <p className="text-customBlueGray">
                                    "Expertise made all the difference, absolute pleasure to work with.
                                    Exceeded our expectations."
                                </p>
                            </div>

                            <div className='h-[full] lg:p-9 sm:p-6 my-5 sm:justify-center lg:text-left sm:item-center sm:text-center bg-white w-[380px]'
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 10px 16px rgba(188, 188, 188, 0.2)" // Example of a soft shadow
                                }}
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="flex flex-row my-5 item-center justify-left">
                                    <img
                                        src={backendImage}
                                        alt="Customer"
                                        className="w-20 h-20 rounded-full mx-3 border-4 border-white"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mt-4">Stella Smith</h3>
                                        <p className="text-gray-500 text-sm mb-4">Engineer at Unify</p>
                                    </div>
                                </div>

                                <p className="text-customBlueGray">
                                    "I highly recommend this agency. Testing for our project was done
                                    everything top-notch."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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
                                    className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-800 font-medium">{faq.question}</span>
                                        <button
                                            className="text-lime-600 font-bold text-xl"
                                            onClick={() => toggleFAQ(index)} // Attach onClick to the button
                                        >
                                            {openIndex === index ? '-' : '+'}
                                        </button>
                                    </div>
                                    {openIndex === index && (
                                        <div className="mt-4 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Link to="/Contact">
                                <button className="bg-black text-white border-lime-800 py-4 px-7 rounded-lg hover:border hover:bg-transparent hover:text-lime-600">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>




            <button
                onClick={scrollToTop}
                className="fixed bottom-5 shadow-2xl right-5 bg-lime-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-lime-700"
            >
                <p className="md:hidden sm:hidden lg:block">↑ Scroll to Top</p>
                <p className="lg:hidden sm:hidden md:block">↑ Scroll to Top</p>
                <p className="md:hidden lg:hidden  sm:block">↑ Top</p>
            </button>

            <Footer />

        </>
    )
}

export default Service