import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from "./Pages/LandingPage.jsx"



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200,   // Offset for triggering animations
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
