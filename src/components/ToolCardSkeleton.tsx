import React from 'react';

const ToolCardSkeleton: React.FC = () => {
  return (
    <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6 animate-pulse">
      <div className="h-4 bg-cyberpunk-surface rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-cyberpunk-surface rounded w-1/4 mb-6"></div>
      <div className="h-3 bg-cyberpunk-surface rounded mb-2"></div>
      <div className="h-3 bg-cyberpunk-surface rounded w-5/6 mb-4"></div>
      <div className="flex items-center mb-4">
        <div className="h-4 w-20 bg-cyberpunk-surface rounded"></div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="h-5 w-12 bg-cyberpunk-surface rounded"></div>
        <div className="h-5 w-16 bg-cyberpunk-surface rounded"></div>
      </div>
      <div className="h-10 bg-cyberpunk-primary/20 rounded-lg"></div>
    </div>
  );
};

export default ToolCardSkeleton;
