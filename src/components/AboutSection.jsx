import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="about-content glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            <h2>The Royal Ambiance</h2>
            <p>
              Located in the heart of GTB Market, Khanna, <strong>King Of Spices</strong> offers an unforgettable culinary journey. 
              Our vibrant modern interiors, adorned with colorful ceiling decor and captivating LED lighting, set the perfect stage for a premium dining experience.
            </p>
            <p>
              Whether you're craving authentic North Indian cuisine, our signature Biryani, or just a relaxing evening with friends, we ensure every moment is treated like royalty.
            </p>
            <div className="stats">
              <div className="stat-item">
                <span className="text-gradient">4.4★</span>
                <span>Top Rated</span>
              </div>
              <div className="stat-item">
                <span className="text-gradient">11 PM</span>
                <span>Late Night</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder glass">
              <span className="text-gradient-blue">Interactive Space</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
