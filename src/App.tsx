import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyberpunk-bg flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-cyberpunk-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-cyberpunk-primary font-cyber text-xl animate-glow">
            Inicializando Framework OSINT...
          </h2>
        </motion.div>
      </div>
    );
  }

  return <DashboardPage />;
}

export default App;
