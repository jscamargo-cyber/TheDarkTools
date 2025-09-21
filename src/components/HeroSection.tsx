import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Database, Globe, Users, Lock } from 'lucide-react';

const HeroSection: React.FC = () => {
  const features = [
    { icon: <Search className="w-6 h-6" />, title: 'Búsqueda Avanzada' },
    { icon: <Database className="w-6 h-6" />, title: 'Bases de Datos' },
    { icon: <Globe className="w-6 h-6" />, title: 'Geolocalización' },
    { icon: <Users className="w-6 h-6" />, title: 'Redes Sociales' },
    { icon: <Lock className="w-6 h-6" />, title: 'Análisis Forense' },
    { icon: <Shield className="w-6 h-6" />, title: 'Seguridad' }
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-cyberpunk-bg via-cyberpunk-surface to-cyberpunk-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 text-cyberpunk-primary animate-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FRAMEWORK OSINT
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cyberpunk-text-secondary mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plataforma completa de herramientas para investigación de inteligencia de fuentes abiertas
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-cyberpunk-primary to-cyberpunk-secondary text-cyberpunk-bg font-semibold rounded-lg hover:scale-105 transition-transform duration-300 cyber-glow">
              Explorar Herramientas
            </button>
            <button className="px-8 py-3 border border-cyberpunk-primary text-cyberpunk-primary rounded-lg hover:bg-cyberpunk-primary hover:text-cyberpunk-bg transition-colors duration-300">
              Ver Documentación
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-4 text-center hover:border-cyberpunk-primary transition-colors duration-300 cyber-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-cyberpunk-primary mb-2 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-sm font-medium text-cyberpunk-text-primary">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Matrix Animation Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="matrix-bg absolute inset-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
