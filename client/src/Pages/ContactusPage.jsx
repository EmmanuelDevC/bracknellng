import React, { useState, useEffect } from "react";
import Navbar from "../Components/Nav";
import backgroundImage2 from '.././images/backend.jpg';
import contactImage from '../images/text.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

const ContactUs = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        requestType: '',
        country: '',
        message: ''
    });

    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 500);

    useEffect(() => {
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://bracknellngserver-pink.vercel.app/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please check your connection.');
        } finally {
            setSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <LocationOnIcon className="text-green-600 text-2xl" />,
            title: "Our Office",
            details: [
                "Plot 54A, Harrison Sholaja Street",
                "Off Ago Palace-Way Okota",
                "Isolo, Lagos State",
                "Nigeria"
            ]
        },
        {
            icon: <PhoneIcon className="text-green-600 text-2xl" />,
            title: "Phone Numbers",
            details: [
                "(+234) 701 151 4116",
                "(+234) 803 877 4123"
            ],
            links: true
        },
        {
            icon: <EmailIcon className="text-green-600 text-2xl" />,
            title: "Email Address",
            details: ["info@bracknelling.com"],
            links: true
        }
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

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full flex flex-col justify-center text-center p-8 bg-white rounded-3xl shadow-2xl transform transition-all duration-700 hover:shadow-3xl">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 hover:scale-110">
                        <span className="text-4xl text-green-600">✓</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 transform transition-all duration-300">
                        Thank You!
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 transform transition-all duration-300">
                        We have received your message and will get back to you within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center my-8 transform transition-all duration-300">
                        <Link to="/Service">
                            <button className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 rounded-lg">
                                Our Services
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 rounded-lg">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                    <p className="text-sm text-gray-500 transform transition-all duration-300">
                        We're excited to work with you on your project!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-black text-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="border-l-4 border-green-500 pl-6 mb-8 transform transition-all duration-700">
                        <span className="text-green-400 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight transform transition-all duration-1000">
                        Contact<br />
                        <span className="text-green-500 font-bold">Us</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed transform transition-all duration-1000">
                        Ready to transform your business? Let's discuss your project and create something amazing together.
                    </p>
                </div>
            </section>

            {/* Contact Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="transform transition-all duration-700 hover:scale-105">
                            <img
                                src={contactImage}
                                alt="Contact Us"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 transform transition-all duration-300">
                                Let's Start Your <span className="text-green-600">Project</span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed transform transition-all duration-300">
                                Have questions or need assistance? We're here to help! Reach out to us for inquiries,
                                collaborations, or support. Let's create something amazing together!
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-gray-50 rounded-2xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                                    <div className="text-gray-600">Response Time</div>
                                </div>
                                <div className="text-center p-6 bg-gray-50 rounded-2xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                                    <div className="text-gray-600">Client Satisfaction</div>
                                </div>
                            </div>

                            <Link to="/Service">
                                <button className="px-8 py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium transform hover:-translate-y-1 hover:shadow-2xl rounded-lg">
                                    Explore Our Services
                                </button>
                            </Link>
                        </div>
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
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    <div className="space-y-8 bg-white p-6 rounded-2xl shadow-lg">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-lime-900 border-b pb-2">
                                Contact Information
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <LocationOnIcon className="text-lime-700" />
                                    <p className="text-lg">Plot 54A, Harrison Sholaja Street</p>
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.082881229997!2d3.3031109747531713!3d6.511193193481195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ee5cf2a256b%3A0xe3efaef60e1ea045!2s54%20Harrison%20Sholaja%20St%2C%20Ilasamaja%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1740693393385!5m2!1sen!2sng"
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
                                    id="phone"
                                    name="phone"
                                    className=" w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-500 border border-gray-700 focus:border-transparent"
                                    placeholder="+234 000 000 0000"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label htmlFor="request-type" className="text-sm font-medium text-gray-200">
                                    Select Service
                                </label>
                                <select
                                    id="requestType"
                                    name="requestType"
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
                            {error && <p className="text-red-500 text-center">{error}</p>}

                            {/* Submit Button */}
                            <div className="md:col-span-2 pt-4">
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full py-3 px-6 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                    >
                                        {submitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-20 bg-black text-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-700">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto transform transition-all duration-700">
                        Let's discuss your requirements and create a solution that drives your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700">
                        <Link to="/Service">
                            <button className="px-8 py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium text-lg transform hover:-translate-y-1 hover:shadow-2xl">
                                Explore Our Services
                            </button>
                        </Link>
                        <a href="tel:+2347011514116">
                            <button className="px-8 py-4 border border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-lg transform hover:-translate-y-1">
                                Call Us Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Enhanced Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-all duration-300 z-50 transform hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            <Footer />
        </div>
    );
};

export default ContactUs;
