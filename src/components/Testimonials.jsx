import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Rahul S.", rating: 5, text: "Best Biryani in Khanna! The ambiance is absolutely royal and the staff is very courteous." },
  { name: "Priya M.", rating: 5, text: "Loved the Dal Makhani and Garlic Naan. The perfect place for a family dinner." },
  { name: "Amit K.", rating: 4, text: "Great food, nice blue LED lighting inside. Feels very premium and the service is quick." }
];

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-gradient">Reviews</h4>
          <h2>What Our Guests Say</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((review, i) => (
            <motion.div 
              key={i} 
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p>"{review.text}"</p>
              <h4>- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
