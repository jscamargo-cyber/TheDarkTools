import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  toolsPerPage: number;
  totalTools: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  toolsPerPage,
  totalTools,
  paginate,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalTools / toolsPerPage);

  if (totalPages <= 1) {
    return null; // No mostrar paginación si solo hay una página
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="mt-12 flex items-center justify-between text-cyberpunk-text-secondary">
      <div>
        <p className="text-sm">
          Mostrando <span className="font-bold text-cyberpunk-text-primary">{(currentPage - 1) * toolsPerPage + 1}</span>
          - <span className="font-bold text-cyberpunk-text-primary">{Math.min(currentPage * toolsPerPage, totalTools)}</span> de{' '}
          <span className="font-bold text-cyberpunk-text-primary">{totalTools}</span> resultados
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex items-center justify-center p-2 rounded-md bg-cyberpunk-surface border border-cyberpunk-primary/20 hover:bg-cyberpunk-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="px-4 py-2 font-bold text-cyberpunk-primary bg-cyberpunk-surface border border-cyberpunk-primary/20 rounded-md">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center p-2 rounded-md bg-cyberpunk-surface border border-cyberpunk-primary/20 hover:bg-cyberpunk-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
