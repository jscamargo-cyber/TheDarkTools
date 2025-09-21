import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Activity, TrendingUp, Users, Globe, Shield, Search } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const AdvancedStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Datos simulados para las herramientas OSINT
  const osintCategories = {
    'Frameworks y Blogs': faker.number.int({ min: 15, max: 25 }),
    'Inteligencia Artificial': faker.number.int({ min: 10, max: 18 }),
    'Motores de Búsqueda': faker.number.int({ min: 20, max: 30 }),
    'Inteligencia de Personas': faker.number.int({ min: 25, max: 35 }),
    'Finanzas y Cripto': faker.number.int({ min: 8, max: 15 }),
    'Registros Públicos': faker.number.int({ min: 12, max: 20 }),
    'Dominios y Web': faker.number.int({ min: 22, max: 32 }),
    'Geolocalización': faker.number.int({ min: 15, max: 25 }),
    'Análisis de Imágenes': faker.number.int({ min: 12, max: 18 }),
    'Ciberseguridad': faker.number.int({ min: 30, max: 45 }),
    'Darknet y Fugas': faker.number.int({ min: 8, max: 15 }),
    'Herramientas Generales': faker.number.int({ min: 18, max: 28 })
  };

  const totalTools = Object.values(osintCategories).reduce((sum, count) => sum + count, 0);
  const totalCategories = Object.keys(osintCategories).length;

  // Datos para el gráfico principal
  const chartData = {
    labels: Object.keys(osintCategories),
    datasets: [
      {
        label: 'Herramientas por Categoría',
        data: Object.values(osintCategories),
        backgroundColor: [
          '#22d3ee', '#818cf8', '#f471b5', '#fb923c', '#34d399', '#facc15',
          '#a78bfa', '#60a5fa', '#f87171', '#4ade80', '#c084fc', '#e879f9'
        ],
        borderColor: '#0a0a0a',
        borderWidth: 2,
        hoverOffset: 6
      }
    ]
  };

  // Datos para gráfico de barras (uso por mes)
  const monthlyUsage = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Búsquedas (K)',
        data: Array.from({ length: 6 }, () => faker.number.int({ min: 50, max: 150 })),
        backgroundColor: 'rgba(34, 211, 238, 0.8)',
        borderColor: '#22d3ee',
        borderWidth: 1
      }
    ]
  };

  // Datos para gráfico de líneas (tendencias)
  const trendData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'],
    datasets: [
      {
        label: 'Nuevas Herramientas',
        data: Array.from({ length: 6 }, () => faker.number.int({ min: 5, max: 20 })),
        borderColor: '#22d3ee',
        backgroundColor: 'rgba(34, 211, 238, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Usuarios Activos (K)',
        data: Array.from({ length: 6 }, () => faker.number.int({ min: 30, max: 80 })),
        borderColor: '#f471b5',
        backgroundColor: 'rgba(244, 113, 181, 0.1)',
        tension: 0.4,
        fill: true
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
        borderWidth: 1
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#a1a1aa'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#a1a1aa'
        }
      }
    }
  };

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: <Activity className="w-4 h-4" /> },
    { id: 'trends', label: 'Tendencias', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'usage', label: 'Uso', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cyberpunk-bg via-cyberpunk-surface to-cyberpunk-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-cyberpunk-primary mb-4 animate-glow">
            Centro de Análisis OSINT
          </h2>
          <p className="text-cyberpunk-text-secondary text-lg max-w-2xl mx-auto">
            Estadísticas avanzadas y métricas en tiempo real del framework
          </p>
        </motion.div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: totalTools.toString(), label: 'Herramientas Totales', icon: <Search className="w-6 h-6" />, color: 'text-cyberpunk-primary' },
            { value: totalCategories.toString(), label: 'Categorías', icon: <Globe className="w-6 h-6" />, color: 'text-blue-400' },
            { value: faker.number.int({ min: 50, max: 99 }) + 'K+', label: 'Usuarios Activos', icon: <Users className="w-6 h-6" />, color: 'text-green-400' },
            { value: faker.number.int({ min: 95, max: 100 }) + '%', label: 'Disponibilidad', icon: <Shield className="w-6 h-6" />, color: 'text-yellow-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6 text-center hover:border-cyberpunk-primary transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className={`text-2xl md:text-3xl font-cyber font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-cyberpunk-text-secondary text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs de navegación */}
        <div className="flex flex-wrap justify-center mb-8 bg-cyberpunk-card rounded-lg p-2 border border-cyberpunk-primary/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyberpunk-primary text-cyberpunk-bg'
                  : 'text-cyberpunk-text-secondary hover:text-cyberpunk-primary'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido de tabs */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gráfico de distribución */}
              <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-cyber font-semibold text-cyberpunk-primary mb-6">
                  Distribución por Categorías
                </h3>
                <div className="h-80">
                  <Doughnut data={chartData} options={{ ...chartOptions, maintainAspectRatio: false }} />
                </div>
              </div>

              {/* Leyenda y detalles */}
              <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-cyber font-semibold text-cyberpunk-primary mb-6">
                  Detalles por Categoría
                </h3>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {Object.entries(osintCategories)
                    .sort(([,a], [,b]) => b - a)
                    .map(([category, count], index) => (
                      <div key={category} className="flex items-center justify-between p-3 bg-cyberpunk-bg rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: chartData.datasets[0].backgroundColor[index % chartData.datasets[0].backgroundColor.length] }}
                          ></div>
                          <span className="text-cyberpunk-text-primary font-medium text-sm">
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
                    ))
                  }
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trends' && (
            <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-cyber font-semibold text-cyberpunk-primary mb-6">
                Tendencias de Crecimiento
              </h3>
              <div className="h-80">
                <Line data={trendData} options={chartOptions} />
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="bg-cyberpunk-card border border-cyberpunk-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-cyber font-semibold text-cyberpunk-primary mb-6">
                Uso Mensual del Framework
              </h3>
              <div className="h-80">
                <Bar data={monthlyUsage} options={chartOptions} />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedStats;
