import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="section reservation-section">
      <div className="container">
        <motion.div 
          className="reservation-box glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="reservation-content">
            <h4 className="text-gradient">Book A Table</h4>
            <h2>Reserve Your Royal Experience</h2>
            <p>Join us at King of Spices for an unforgettable meal. Please fill out the form below to secure your table.</p>
            
            <form className="reservation-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <input type="time" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="" disabled selected>Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Confirm Reservation</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
