import React from "react";
import { useForm } from '@formspree/react';
import Navbar from "../Components/Nav";
import backgroundImage2 from '../images/bg-pattern-3.png';
import happyImage from '../images/happy.webp';
import thankyouImage from '../images/thankyou.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
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
                <div className="flex flex-wrap text-center justify-center my-5 mb-10">
                    <Link to="/Service" className="my-2 mx-4">
                        <button className="py-2 px-5 border border-lime-500 rounded-full"> Our Services</button>
                    </Link>
                    <Link to="/">
                        <button className="py-2 px-5 border border-lime-500 rounded-full">Back to home page</button>
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

            <section className="p-4 pt-10 lg:p-20"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(179, 247, 193, 0.5), rgba(235, 243, 255, 0.5), rgba(169, 134, 252, 0.5)), url(${backgroundImage2})`,
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-lime-900 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out through our contact form or visit us directly. Our team will get back to you within 24 hours.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16"
                >

                    <div className="space-y-8 bg-white p-6 rounded-2xl shadow-lg">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-lime-900 border-b pb-2">
                                Contact Information
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <LocationOnIcon className="text-lime-700" />
                                    <p className="text-lg">Plot 50, Samuel Ekunola Street</p>
                                </div>
                                <p className="ml-6">Off Ago Palace-Way Okota</p>
                                <p className="ml-6">Isolo, Lagos State</p>
                                <p className="ml-6">Nigeria</p>

                                <div className="pt-4 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <PhoneIcon className="text-lime-700" />
                                        <a href="tel:+2347011514116" className="hover:text-lime-900 transition-colors">
                                            (+234) 701 151 4116
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <PhoneIcon className="text-lime-700" />
                                        <a href="tel:+2348038774123" className="hover:text-lime-900 transition-colors">
                                            (+234) 803 877 4123
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <EmailIcon className="text-lime-700" />
                                        <a href="mailto:info@bracknellng.com" className="hover:text-lime-900 transition-colors">
                                            info@bracknellng.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-lime-900">Our Location</h3>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Plot%2050,%20Samuel%20Ekunola%20Street%20%20Off%20Ago%20Palace-Way%20Okota%20%20Isolo,%20Lagos%20State+(Bracknell%20software%20company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    className="border-0"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#191919] rounded-2xl shadow-xl p-6 lg:p-8 space-y-6"

                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Send Us a Message
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-200">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="example@email.com"
                                />
                            </div>

                            {/* Company */}
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-200">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="Company Name"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label htmlFor="phone-number" className="text-sm font-medium text-gray-200">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    id="phone-number"
                                    name="phone-number"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="+234 000 000 0000"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label htmlFor="request-type" className="text-sm font-medium text-gray-200">
                                    Select Needed
                                </label>
                                <select
                                    id="request-type"
                                    name="request-type"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
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
                            <div className="space-y-2">
                                <label htmlFor="country" className="text-sm font-medium text-gray-200">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="Your Country"
                                />
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2 space-y-">
                                <label htmlFor="message" className="text-sm font-medium text-gray-200">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs