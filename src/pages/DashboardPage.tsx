import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ToolsGrid from '../components/ToolsGrid';
import { Tool } from '../types';
import FloatingButton from '../components/FloatingButton';
import { realTools, getCategoriesFromTools } from '../lib/mockData';
import Pagination from '../components/Pagination';

const DashboardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 24;

  // Utiliza los datos reales importados
  const tools = useMemo(() => realTools, []);
  const categories = useMemo(() => getCategoriesFromTools(tools), [tools]);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchTerm, selectedCategory]);

  // Resetear a la página 1 cuando los filtros cambian
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Lógica de paginación
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex min-h-screen bg-cyberpunk-bg text-cyberpunk-text-primary font-mono">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalTools={tools.length}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-cyberpunk-surface/90 backdrop-blur-sm border-b border-cyberpunk-primary/20 flex items-center px-6 justify-between flex-shrink-0">
          <h2 className="text-2xl font-semibold text-cyberpunk-text-primary truncate">
            {selectedCategory === 'Todos' ? 'Todas las Herramientas' : selectedCategory}
          </h2>
          <span className="px-3 py-1 bg-cyberpunk-primary/20 text-cyberpunk-primary rounded-full text-sm font-bold flex-shrink-0">
            {filteredTools.length} Resultados
          </span>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <ToolsGrid tools={currentTools} />
            <Pagination
              toolsPerPage={toolsPerPage}
              totalTools={filteredTools.length}
              paginate={paginate}
              currentPage={currentPage}
            />
        </div>
      </main>
      <FloatingButton />
    </div>
  );
};

export default DashboardPage;
