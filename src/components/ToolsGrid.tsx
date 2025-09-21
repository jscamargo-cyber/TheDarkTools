import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tool } from '../types';
import ToolCard from './ToolCard';

interface ToolsGridProps {
  tools: Tool[];
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ tools }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  if (tools.length === 0) {
    return (
      <div className="text-center py-12 col-span-full">
        <Search className="w-16 h-16 text-cyberpunk-text-muted mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-cyberpunk-text-secondary mb-2">
          No se encontraron herramientas
        </h3>
        <p className="text-cyberpunk-text-muted">
          Intenta con diferentes términos de búsqueda o categorías.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={tools.length > 0 ? tools[0].id : 'grid'} // Key para forzar la re-animación en cambio de página
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </motion.div>
  );
};

export default ToolsGrid;
