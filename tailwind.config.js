/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#ef4444",
        bgDark: '#0a0a0a',
        glass: 'rgba(255,255,255,0.05)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(239, 68, 68, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(239,68,68,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(239,68,68,0.6)' },
        },
      },
    },
  },
  plugins: [],
};

