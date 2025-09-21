import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <motion.div
      className="bg-cyberpunk-card border border-cyberpunk-primary/10 rounded-lg p-6 hover:border-cyberpunk-primary/40 transition-all duration-300 group flex flex-col"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-cyberpunk-text-primary mb-2 group-hover:text-cyberpunk-primary transition-colors">
              {tool.name}
            </h3>
            <span className="inline-block px-2 py-1 bg-cyberpunk-primary/10 text-cyberpunk-primary text-xs rounded-full mb-2">
              {tool.category}
            </span>
          </div>
          {tool.isPremium && (
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2">
              Premium
            </span>
          )}
        </div>

        <p className="text-cyberpunk-text-secondary mb-4 line-clamp-2 text-sm">
          {tool.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(tool.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-cyberpunk-text-muted'
                }`}
              />
            ))}
            <span className="ml-2 text-cyberpunk-text-secondary text-sm">
              {tool.rating}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-cyberpunk-bg text-cyberpunk-text-muted text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyberpunk-primary/10 hover:bg-cyberpunk-primary text-cyberpunk-primary hover:text-cyberpunk-bg rounded-lg transition-colors duration-300">
          <ExternalLink className="w-4 h-4" />
          Visitar Herramienta
        </button>
      </a>
    </motion.div>
  );
};

export default ToolCard;
