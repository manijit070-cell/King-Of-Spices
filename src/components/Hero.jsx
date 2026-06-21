import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-fancy">
      <div className="hero-background">
        <div className="overlay"></div>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Restaurant Background"
            className="bg-image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
      
      <div className="hero-content-fancy container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-text-wrapper"
        >
          <motion.span 
            className="hero-subtitle-fancy text-gradient"
            initial={{ opacity: 0, letterSpacing: "0px" }}
            animate={{ opacity: 1, letterSpacing: "4px" }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to Royal Dining
          </motion.span>
          
          <h1 className="hero-title-fancy">King of Spices</h1>
          
          <p className="hero-desc-fancy">
            The Best Restaurant & Cafe in Khanna. Experience authentic flavors, exceptional service, and a truly royal ambiance.
          </p>
          
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary btn-fancy">
              Explore Menu <ArrowRight size={18} />
            </a>
            <a href="#reservation" className="btn btn-outline">
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="slider-indicators">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`indicator ${idx === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
