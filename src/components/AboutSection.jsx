import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-images"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Restaurant Ambiance" 
              className="about-img main-img" 
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'; }}
            />
            <img 
              src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Chef Cooking" 
              className="about-img sub-img" 
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'; }}
            />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gradient">Our Story</h4>
            <h2>A Legacy of Flavors in Khanna</h2>
            <p>
              Located in the heart of GTB Market, <strong>King Of Spices</strong> has redefined the dining experience. 
              Our vibrant modern interiors and meticulous attention to detail set the perfect stage for a premium culinary journey.
            </p>
            <p>
              We believe that food is not just sustenance, but an experience. Every dish is crafted with passion, using the finest hand-picked spices to bring authentic recipes to life.
            </p>
            
            <div className="chef-quote">
              "We don't just cook food; we craft memories through the magic of spices."
              <span>- Head Chef, King of Spices</span>
            </div>

            <div className="stats">
              <div className="stat-item">
                <span className="text-gradient">15+</span>
                <span>Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="text-gradient">4.4★</span>
                <span>Top Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
