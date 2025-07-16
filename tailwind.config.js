/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(67,56,202,0.8) 0%, rgba(139,92,246,0.8) 100%)',
      },
      colors: {
        'glass-white': 'rgba(255,255,255,0.15)',
        'glass-dark': 'rgba(30,41,59,0.35)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}
