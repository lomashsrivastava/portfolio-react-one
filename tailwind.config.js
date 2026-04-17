/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00f3ff',
        secondary: '#ff00ff',
        accent1: '#00ff9d',
        accent2: '#ffaa00',
        accent3: '#9d4edd',
        dark: '#0a0a1a',
        darker: '#050510',
        light: '#f0f5ff',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      backgroundImage: {
        'glow-blue': 'radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.15) 0%, transparent 50%)',
        'glow-pink': 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.15) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}
