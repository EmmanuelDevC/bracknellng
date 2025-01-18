import React from "react";
import Navbar from "../Components/Nav";
import backgroundImage2 from '../images/bg-pattern-3.png';
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
        </>
    )
}

export default ContactUs