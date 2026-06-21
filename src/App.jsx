import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="app-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <Hero />
      </section>

      <main className="main-content">
        <AboutSection />
        <MenuSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
