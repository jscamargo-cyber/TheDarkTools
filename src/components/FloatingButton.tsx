import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButton: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { icon: 'fas fa-lightbulb', label: 'Estrategias OSINT', action: () => console.log('Estrategias') },
    { icon: 'fas fa-book', label: 'Metodología', action: () => console.log('Metodología') },
    { icon: 'fas fa-users', label: 'Comunidad', action: () => console.log('Comunidad') },
    { icon: 'fas fa-question-circle', label: 'Ayuda', action: () => console.log('Ayuda') }
  ];

  return (
    <>
      {/* Botón principal flotante */}
      <div className="floating-strategy-button" onClick={() => setShowMenu(!showMenu)}>
        <i className={`fas ${showMenu ? 'fa-times' : 'fa-brain'}`}></i>
      </div>

      {/* Menú expandible */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed bottom-24 right-8 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg text-cyberpunk-text-primary hover:border-cyberpunk-primary hover:bg-cyberpunk-primary/10 transition-all duration-300 whitespace-nowrap"
                  onClick={item.action}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${item.icon} text-cyberpunk-primary`}></i>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar menú */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default FloatingButton;
