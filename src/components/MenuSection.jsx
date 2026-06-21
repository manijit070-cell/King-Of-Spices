import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  'Starters': [
    { name: 'Paneer Tikka', price: '₹220', desc: 'Marinated cottage cheese cooked in tandoor.', type: 'veg', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Chicken Malai Tikka', price: '₹280', desc: 'Creamy and tender chicken pieces roasted to perfection.', type: 'non-veg', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Hara Bhara Kebab', price: '₹180', desc: 'Healthy spinach and green peas patties.', type: 'veg', image: 'https://images.unsplash.com/photo-1626779875955-44cb3df0f209?ixlib=rb-4.0.3&w=600&q=80' },
  ],
  'Mains': [
    { name: 'Royal Chicken Biryani', price: '₹350', desc: 'Aromatic basmati rice cooked with tender chicken and secret spices.', type: 'non-veg', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Mutton Rogan Josh', price: '₹400', desc: 'Slow-cooked mutton in traditional Kashmiri spices.', type: 'non-veg', image: 'https://images.unsplash.com/photo-1601706692257-22f2cb87b1c1?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Dal Makhani', price: '₹220', desc: 'Creamy black lentils simmered overnight for a rich flavor.', type: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Shahi Paneer', price: '₹260', desc: 'Cottage cheese in a thick gravy made of cream and tomatoes.', type: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?ixlib=rb-4.0.3&w=600&q=80' }
  ],
  'Breads': [
    { name: 'Garlic Naan', price: '₹50', desc: 'Soft Indian bread topped with garlic and butter.', type: 'veg', image: 'https://images.unsplash.com/photo-1626082929543-6901842845c4?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Lachha Paratha', price: '₹40', desc: 'Multi-layered wheat flatbread.', type: 'veg', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&w=600&q=80' }
  ],
  'Desserts': [
    { name: 'Gulab Jamun', price: '₹90', desc: 'Sweet fried dumplings soaked in rose-flavored syrup.', type: 'veg', image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&w=600&q=80' },
    { name: 'Rasmalai', price: '₹120', desc: 'Soft paneer balls chilled in sweet, flavored milk.', type: 'veg', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&w=600&q=80' }
  ]
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('Mains');
  const tabs = Object.keys(menuData);

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
          <h4 className="text-gradient">Culinary Excellence</h4>
          <h2>Our Signature <span className="text-gradient">Menu</span></h2>
          <p className="subtitle">Curated with passion and the finest spices.</p>
        </motion.div>

        <div className="menu-tabs">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="menu-grid">
          <AnimatePresence mode="popLayout">
            {menuData[activeTab].map((item, index) => (
              <motion.div 
                key={item.name} 
                className="menu-card glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="menu-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <span className="price text-gradient">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                  <div className={`diet-badge ${item.type}`}>
                    {item.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
