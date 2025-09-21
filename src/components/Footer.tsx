import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    resources: [
      { name: 'Documentación', href: '#' },
      { name: 'Tutoriales', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Metodología OSINT', href: '#' }
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Telegram', href: '#' },
      { name: 'Reddit', href: '#' },
      { name: 'Stack Overflow', href: '#' }
    ],
    legal: [
      { name: 'Términos de Uso', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Código de Conducta', href: '#' }
    ]
  };

  return (
    <footer className="bg-cyberpunk-bg border-t border-cyberpunk-primary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-8 h-8 text-cyberpunk-primary" />
              <span className="font-cyber text-xl font-bold text-cyberpunk-primary">
                OSINT.Framework
              </span>
            </motion.div>
            
            <motion.p
              className="text-cyberpunk-text-secondary mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              La plataforma más completa de herramientas OSINT para investigadores, 
              analistas de seguridad y profesionales de inteligencia.
            </motion.p>
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="#" className="text-cyberpunk-text-muted hover:text-cyberpunk-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-cyberpunk-text-muted hover:text-cyberpunk-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-cyberpunk-text-muted hover:text-cyberpunk-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Links de recursos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-cyberpunk-text-primary mb-4">Recursos</h3>
            <ul className="space-y-2">
              {links.resources.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cyberpunk-text-muted hover:text-cyberpunk-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links de comunidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold text-cyberpunk-text-primary mb-4">Comunidad</h3>
            <ul className="space-y-2">
              {links.community.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cyberpunk-text-muted hover:text-cyberpunk-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links legales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-semibold text-cyberpunk-text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cyberpunk-text-muted hover:text-cyberpunk-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-cyberpunk-primary/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-cyberpunk-text-muted text-sm">
            © {currentYear} OSINT Framework. Todos los derechos reservados.
          </p>
          <p className="text-cyberpunk-text-muted text-sm flex items-center gap-1 mt-4 md:mt-0">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> para la comunidad OSINT
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
