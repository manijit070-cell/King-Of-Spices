import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Royal Chicken Biryani', price: '₹350', desc: 'Aromatic basmati rice cooked with tender chicken and secret spices.', type: 'non-veg' },
  { name: 'Paneer Tikka Masala', price: '₹280', desc: 'Cottage cheese cubes roasted and simmered in a rich tomato gravy.', type: 'veg' },
  { name: 'Mutton Rogan Josh', price: '₹400', desc: 'Slow-cooked mutton in traditional Kashmiri spices.', type: 'non-veg' },
  { name: 'Dal Makhani', price: '₹220', desc: 'Creamy black lentils simmered overnight for a rich flavor.', type: 'veg' },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Signature <span className="text-gradient">Menu</span></h2>
          <p className="subtitle">Curated with passion and the finest spices.</p>
        </motion.div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="menu-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="menu-card-header">
                <h3>{item.name}</h3>
                <span className="price text-gradient">{item.price}</span>
              </div>
              <p>{item.desc}</p>
              <div className={`diet-badge ${item.type}`}>
                {item.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
