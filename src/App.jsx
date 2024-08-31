import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Hero2 from './Components/Hero2';
import Aboutus from './Components/Aboutus';
import StartupN from './Components/StartupN';
import KashmiecareU from './Components/KashmiecareU';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import RegStateup from './Components/RegStateup';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Hero2 />
          <Aboutus />
          <StartupN />
          <KashmiecareU />
          <Reviews />
        </>} />

        <Route path="/register-startup" element={<RegStateup />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
