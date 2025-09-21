import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Search, Database, Eye } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Herramientas', icon: <Search className="w-4 h-4" />, href: '#tools' },
    { name: 'Categorías', icon: <Database className="w-4 h-4" />, href: '#categories' },
    { name: 'Metodología', icon: <Eye className="w-4 h-4" />, href: '#methodology' },
    { name: 'Recursos', icon: <Shield className="w-4 h-4" />, href: '#resources' }
  ];

  return (
    <motion.header
      className="fixed top-0 w-full bg-cyberpunk-surface/90 backdrop-blur-sm border-b border-cyberpunk-primary/30 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-8 h-8 text-cyberpunk-primary" />
            <span className="font-cyber text-xl font-bold text-cyberpunk-primary animate-glow">
              OSINT.Framework
            </span>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-cyberpunk-text-secondary hover:text-cyberpunk-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyberpunk-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-cyberpunk-primary/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 py-2 text-cyberpunk-text-secondary hover:text-cyberpunk-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
