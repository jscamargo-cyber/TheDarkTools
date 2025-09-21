import React from 'react';
import { Shield, Search } from 'lucide-react';

interface SidebarProps {
  categories: { name: string; count: number }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalTools: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  totalTools,
}) => {
  return (
    <aside className="w-72 bg-cyberpunk-surface border-r border-cyberpunk-primary/20 flex-shrink-0 flex-col hidden md:flex">
      <div className="h-16 flex items-center justify-center border-b border-cyberpunk-primary/20 px-4">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-cyberpunk-primary" />
          <h1 className="text-xl font-cyber font-bold text-cyberpunk-primary animate-glow">
            OSINT.Framework
          </h1>
        </div>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyberpunk-text-muted w-5 h-5" />
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar herramienta..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-cyberpunk-bg border border-cyberpunk-primary/30 text-cyberpunk-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-cyberpunk-primary transition-colors"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        <h2 className="text-xs font-semibold text-cyberpunk-text-muted uppercase tracking-wider mb-2">
          Categorías
        </h2>
        <ul className="space-y-1">
          <li
            className={`category-item cursor-pointer px-3 py-2 rounded-md text-sm font-medium flex justify-between items-center transition-colors ${
              selectedCategory === 'Todos'
                ? 'bg-cyberpunk-primary/20 text-cyberpunk-primary'
                : 'text-cyberpunk-text-secondary hover:bg-cyberpunk-primary/10 hover:text-cyberpunk-primary'
            }`}
            onClick={() => onSelectCategory('Todos')}
          >
            <span>Todas las Categorías</span>
            <span className="px-2 bg-cyberpunk-bg rounded-full">{totalTools}</span>
          </li>
          {categories.map(({ name, count }) => (
            <li
              key={name}
              className={`category-item cursor-pointer px-3 py-2 rounded-md text-sm font-medium flex justify-between items-center transition-colors ${
                selectedCategory === name
                  ? 'bg-cyberpunk-primary/20 text-cyberpunk-primary'
                  : 'text-cyberpunk-text-secondary hover:bg-cyberpunk-primary/10 hover:text-cyberpunk-primary'
              }`}
              onClick={() => onSelectCategory(name)}
            >
              <span className="truncate pr-2">{name}</span>
              <span className="px-2 bg-cyberpunk-bg rounded-full">{count}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-cyberpunk-primary/20 text-center text-xs text-cyberpunk-text-muted">
        <p>© {new Date().getFullYear()} OSINT Framework</p>
        <p>Hecho para la comunidad</p>
      </div>
    </aside>
  );
};

export default Sidebar;
