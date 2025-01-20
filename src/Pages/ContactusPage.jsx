import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import Navbar from "../Components/Nav";
import backgroundImage2 from '../images/bg-pattern-3.png';
import happyImage from '../images/happy.webp';
import thankyouImage from '../images/thankyou.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer";


const ContactUs = () => {

    const [state, handleSubmit] = useForm("mwppgvye");

    if (state.succeeded) {
        return <div className="h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full flex flex-col justify-center text-center p-8">
                <img src={thankyouImage} alt="" className="my-5" />
                <h3 className="text-2xl font-itim font-bold text-gray-800 mb-4">
                    Thank you for contacting us
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                    we have recieved your message <br />
                    We'll reach you out immediatly.
                </p>
                <div className="flex justify-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 text-green-500 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <div className="flex justify-between my-5 mb-10">
                    <Link to="/">
                        <button className="py-2 px-5 border border-lime-500 rounded-full">Back to home page</button>
                    </Link>
                    <Link to="/Service">
                        <button className="py-2 px-5 border border-lime-500 rounded-full"> Our Services</button>
                    </Link>
                </div>
                <p className="text-sm text-gray-500">
                    Thank you for reaching out. We're processing your request, and you'll hear from us soon!
                </p>
            </div>
        </div>

    }
    return (
        <>
            <Navbar />
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
                    Contact Us
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
                        Contact us
                    </li>
                </ul>
            </div>

            <section>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 md:px-16 lg:px-[140px] lg:my-20 sm:my-20">

                    <img
                        src={happyImage}
                        alt="strategyImg"
                        className="w-full sm:w-[300px] md:w-[400px] lg:w-auto lg:h-[420px] mx-auto lg:mx-5 rounded-xl object-cover"
                    />
                    <div className="py-8 lg:py-20 flex-1 text-center lg:text-left">
                        <h1 className="text-lime-900 text-2xl md:text-4xl font-sans py-4 font-bold"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="500"
                        >
                            Growth strategies to be effective & competitive
                        </h1>
                        <p className="text-gray-600 py-3 text-base md:text-lg"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                        >
                            Everything we do and dream up has a solid design impact. We create
                            human-centered enterprise software that has the polished, snappy
                            feel of the best consumer apps.
                        </p>
                        <button className="py-3 md:py-4 mt-4 px-5 text-sm md:text-lg font-sans rounded-md bg-lime-800 text-white hover:bg-lime-700"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1200"
                        >
                            Our Services
                        </button>
                    </div>

                </div>
            </section>

            <section className="py-16 "
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(179, 247, 193, 0.5), rgba(235, 243, 255, 0.5), rgba(169, 134, 252, 0.5)), url(${backgroundImage2})`,
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className="max-w-6xl mx-auto px-6 lg:px-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-lime-900 mb-8">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Feel free to drop us a message. We’d love to hear from you and will get back to you as soon as possible.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#191919] shadow-md rounded-2xl p-5 lg:p-8"
                    >
                        {/* Name */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="px-4 py-2 border rounded-full text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                placeholder="Your Full Name"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="px-4 py-2 border rounded-full text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                placeholder="example@email.com"
                            />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col">
                            <label htmlFor="company" className="text-sm font-medium text-white mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="px-4 py-2 border rounded-full text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                placeholder="Your Company Name"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col">
                            <label htmlFor="phone-number" className="text-sm font-medium text-white mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone-number"
                                name="phone-number"
                                className="px-4 py-2 border rounded-full text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                placeholder="+234 000 000 0000"
                            />
                        </div>

                        <div>
                            <label htmlFor="request-type" className="block text-sm font-medium text-white">
                                Select Service
                            </label>
                            <select
                                id="request-type"
                                name="request-type"
                                required
                                className="px-4 my-2 py-2 border rounded-full text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                            >
                                <option value="Web App Development">Web App Development</option>
                                <option value="Enterprise Business Solutions">Enterprise Business Solutions</option>
                                <option value="UI/UX Development">UI/UX Development</option>
                                <option value="Corporate Branding">Corporate Branding</option>
                                <option value="Managed Services">Managed Services</option>
                                <option value="Business Analytics">Business Analytics</option>
                            </select>
                        </div>

                        {/* Country */}
                        <div className="flex flex-col">
                            <label htmlFor="country" className="text-sm font-medium text-white mb-2">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="px-4 py-2 border rounded-full text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                placeholder="Your Country"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="message" className="text-sm font-medium text-white mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                className="px-4 py-2 border rounded-lg text-customBlueGray focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="px-6 py-3 border border-white text-white rounded-md text-lg font-medium hover:bg-white hover:text-black focus:ring-4 focus:ring-lime-500 focus:outline-none transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs