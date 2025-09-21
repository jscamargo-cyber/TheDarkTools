/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          bg: '#0d1117',
          surface: '#161b22',
          card: '#161b22',
          primary: '#22d3ee',
          secondary: '#0891b2',
          accent: '#06b6d4',
          danger: '#ef4444',
          warning: '#f59e0b',
          success: '#10b981',
          text: {
            primary: '#e6edf3',
            secondary: '#8b949e',
            muted: '#7d8590'
          }
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'mono': ['Fira Code', 'monospace']
      },
      animation: {
        'pulse-cyan': 'pulse-cyan 2.5s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite'
      },
      keyframes: {
        'pulse-cyan': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(34, 211, 238, 0.7)'
          },
          '70%': {
            boxShadow: '0 0 0 15px rgba(34, 211, 238, 0)'
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(34, 211, 238, 0)'
          }
        },
        'glow': {
          'from': {
            textShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee, 0 0 15px #22d3ee'
          },
          'to': {
            textShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee'
          }
        }
      }
    },
  },
  plugins: [],
};
