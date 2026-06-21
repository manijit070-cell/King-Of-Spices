import React from 'react';
import { MapPin, Phone, Clock, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer glass">
      <div className="container footer-content">
        <div className="footer-section brand">
          <h2 className="text-gradient">King Of Spices</h2>
          <p>The finest dining experience in Khanna, bringing you authentic flavors and royal ambiance.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Mail size={24} /></a>
            <a href="#" className="social-icon"><Globe size={24} /></a>
          </div>
        </div>
        
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><MapPin size={18} className="icon" /> Backside Vishal Mega Mart, Near Main Bus Stand, GTB Market, Khanna, Punjab 141401</p>
          <p><Phone size={18} className="icon" /> +91 98765 43210 (Example)</p>
          <p><Clock size={18} className="icon" /> Open Daily · Closes 11:00 PM</p>
        </div>
        
        <div className="footer-section cta">
          <h3>Reserve Your Table</h3>
          <p>Experience the magic of spices.</p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 King Of Spices. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
