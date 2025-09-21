import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsSection: React.FC = () => {
  // Simulamos datos de herramientas OSINT organizadas por categorías
  const toolsData = {
    'Motores de Búsqueda': faker.number.int({ min: 15, max: 25 }),
    'Redes Sociales': faker.number.int({ min: 12, max: 20 }),
    'Dominios y IP': faker.number.int({ min: 18, max: 25 }),
    'Geolocalización': faker.number.int({ min: 10, max: 18 }),
    'Imágenes': faker.number.int({ min: 8, max: 15 }),
    'Ciberseguridad': faker.number.int({ min: 20, max: 30 }),
    'Finanzas': faker.number.int({ min: 6, max: 12 }),
    'Bases de Datos': faker.number.int({ min: 15, max: 22 })
  };

  const totalTools = Object.values(toolsData).reduce((sum, count) => sum + count, 0);
  const totalCategories = Object.keys(toolsData).length;

  const chartData = {
    labels: Object.keys(toolsData),
    datasets: [
      {
        label: 'Herramientas por Categoría',
        data: Object.values(toolsData),
        backgroundColor: [
          '#22d3ee',
          '#818cf8', 
          '#f471b5',
          '#fb923c',
          '#34d399',
          '#facc15',
          '#a78bfa',
          '#60a5fa'
        ],
        borderColor: '#1a1a1a',
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1f1f1f',
        titleColor: '#22d3ee',
        bodyColor: '#ffffff',
        borderColor: '#22d3ee',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const percentage = ((value / totalTools) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };

  const stats = [
    {
      number: totalTools.toString(),
      label: 'Herramientas',
      icon: '🔍',
      color: 'text-cyberpunk-primary'
    },
    {
      number: totalCategories.toString(),
      label: 'Categorías',
      icon: '📊', 
      color: 'text-cyberpunk-primary'
    },
    {
      number: faker.number.int({ min: 85, max: 99 }).toString() + '%',
      label: 'Precisión',
      icon: '🎯',
      color: 'text-green-400'
    },
    {
      number: faker.number.int({ min: 15, max: 50 }).toString() + 'K+',
      label: 'Usuarios Activos',
      icon: '👥',
      color: 'text-blue-400'
    }
  ];

  return (
    <section className="py-16 bg-cyberpunk-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-cyberpunk-primary mb-4">
            Estadísticas del Framework
          </h2>
          <p className="text-cyberpunk-text-secondary text-lg max-w-2xl mx-auto">
            Datos en tiempo real sobre el uso y distribución de nuestras herramientas OSINT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Estadísticas principales */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6 hover:border-cyberpunk-primary transition-colors duration-300 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-cyber font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-cyberpunk-text-secondary font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gráfico de distribución */}
          <motion.div
            className="lg:col-span-2 bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6 hover:border-cyberpunk-primary transition-colors duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-cyber font-semibold text-cyberpunk-primary mb-6 text-center">
              Distribución por Categorías
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Gráfico */}
              <div className="h-64 relative">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
              
              {/* Leyenda personalizada */}
              <div className="space-y-3">
                {Object.entries(toolsData).map(([category, count], index) => (
                  <div key={category} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
                      ></div>
                      <span className="text-cyberpunk-text-primary text-sm font-medium">
                        {category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyberpunk-primary font-bold">
                        {count}
                      </span>
                      <span className="text-cyberpunk-text-muted text-xs">
                        ({((count / totalTools) * 100).toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas adicionales */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-4 text-center">
            <div className="text-cyberpunk-primary text-2xl font-bold">
              {faker.number.int({ min: 500, max: 999 })}
            </div>
            <div className="text-cyberpunk-text-secondary text-sm">
              Búsquedas Diarias
            </div>
          </div>
          
          <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-4 text-center">
            <div className="text-green-400 text-2xl font-bold">
              {faker.number.int({ min: 95, max: 100 })}%
            </div>
            <div className="text-cyberpunk-text-secondary text-sm">
              Uptime
            </div>
          </div>
          
          <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-4 text-center">
            <div className="text-blue-400 text-2xl font-bold">
              {faker.number.int({ min: 50, max: 200 })}ms
            </div>
            <div className="text-cyberpunk-text-secondary text-sm">
              Tiempo Respuesta
            </div>
          </div>
          
          <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-4 text-center">
            <div className="text-yellow-400 text-2xl font-bold">
              {faker.number.int({ min: 20, max: 50 })}
            </div>
            <div className="text-cyberpunk-text-secondary text-sm">
              Países Activos
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
