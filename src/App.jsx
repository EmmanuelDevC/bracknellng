import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import About from './Pages/AboutPage.jsx';
import Nopage from './Pages/Nopage.jsx';

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
      {/* <LandingPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
