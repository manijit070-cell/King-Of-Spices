import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, GlassWater, PartyPopper, HeartHandshake } from 'lucide-react';

const services = [
  { icon: <Utensils size={40} />, title: 'Fine Dining', desc: 'Experience the royal ambiance with our premium dine-in service.' },
  { icon: <PartyPopper size={40} />, title: 'Private Events', desc: 'Host your special occasions in our beautifully decorated private spaces.' },
  { icon: <GlassWater size={40} />, title: 'Catering', desc: 'Bring the magic of spices to your home or office events.' },
  { icon: <HeartHandshake size={40} />, title: 'Hospitality', desc: 'World-class service ensuring you are treated like royalty.' },
];

const ServicesSection = () => {
  return (
    <section className="section services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-gradient">Our Services</h4>
          <h2>Beyond Just Food</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-icon text-gradient">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
