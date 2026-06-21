import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container container">
        <div className="logo">
          <ChefHat size={32} color="var(--accent-primary)" />
          <span className="logo-text">King Of Spices</span>
        </div>
        
        <div className="desktop-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="btn btn-primary nav-btn">Reserve a Table</a>
        </div>

        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          className="mobile-menu glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" className="text-gradient">Reserve a Table</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
