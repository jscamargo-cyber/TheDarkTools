import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Globe, Users, Database, Shield, Eye, 
  Mail, Phone, Camera, FileText, Map, Clock 
} from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Motores de Búsqueda',
      description: 'Herramientas especializadas de búsqueda',
      count: 25,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Redes Sociales',
      description: 'Análisis de perfiles y contenido social',
      count: 18,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Dominios y IP',
      description: 'Investigación de infraestructura web',
      count: 22,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Verificación y análisis de correos',
      count: 12,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Números de Teléfono',
      description: 'Búsqueda y validación telefónica',
      count: 8,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Imágenes',
      description: 'Búsqueda reversa y análisis visual',
      count: 15,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: 'Geolocalización',
      description: 'Herramientas de mapeo y ubicación',
      count: 20,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de Datos',
      description: 'Consulta de registros públicos',
      count: 30,
      color: 'from-gray-500 to-slate-500'
    }
  ];

  return (
    <section id="categories" className="py-16 bg-cyberpunk-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-cyberpunk-primary mb-4">
            Categorías de Herramientas
          </h2>
          <p className="text-cyberpunk-text-secondary text-lg max-w-2xl mx-auto">
            Explora nuestras herramientas organizadas por categorías especializadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6 hover:border-cyberpunk-primary transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-cyberpunk-text-primary mb-2">
                {category.title}
              </h3>
              
              <p className="text-cyberpunk-text-secondary mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-cyberpunk-primary font-semibold">
                  {category.count} herramientas
                </span>
                <Eye className="w-5 h-5 text-cyberpunk-text-muted group-hover:text-cyberpunk-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
