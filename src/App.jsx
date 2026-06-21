import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <Testimonials />
        <Gallery />
        <Reservation />
      </main>

      <Footer />
    </div>
  );
}

export default App;
