import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-fancy">
      <div className="hero-background">
        <div className="overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Restaurant Interior" 
          className="bg-image"
        />
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
            <a href="#about" className="btn btn-outline">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
