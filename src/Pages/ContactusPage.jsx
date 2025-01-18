import React from "react";
import Navbar from "../Components/Nav";
import backgroundImage2 from '../images/bg-pattern-3.png';
import happyImage from '../images/happy.webp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'


const ContactUs = () => {
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
        </>
    )
}

export default ContactUs