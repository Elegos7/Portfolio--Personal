/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#740d0d',
          2: '#870f0f',
          3: '#9a1212',
          4: '#ae1414',
          5: '#cd4545', // main primary color
          6: '#d45c5c',
          7: '#da7373',
          8: '#e08b8b',
          9: '#e6a2a2',
          10: '#fffdf5'
        },
        grey: {
          1: '#343a40',
          2: '#495057',
          3: '#6c757d',
          4: '#868e96',
          5: '#adb5bd',
          6: '#ced4da',
          7: '#dee2e6',
          8: '#e9ecef',
          9: '#f8f9fa',
          10: '#fffdf5'
        },
        secondary: '#4ecdc4',
        orange: '#ff8500'
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
        "about-gradient": "linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 20%))",
        "main-gradient": "linear-gradient(rgb(12 6 0 / 37%), rgb(0 0 0 / 61%))",
        "btn-gradient": "linear-gradient(178.2deg, rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6%)",
        "content-divider": "linear-gradient(to left, #cd4545, #e9b949, #cd4545)"
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        "card-glow": "0 10px 20px rgba(230,0,0,0.4)",
        "light": "0 5px 15px rgba(0, 0, 0, 0.1)",
        "dark": "0 5px 15px rgba(0, 0, 0, 0.2)"
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'typing': 'animate 4s steps(12) infinite'
      },
      clipPath: {
        'connect': 'polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%)',
        'banner': 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
      }
    },
  },
  plugins: [],
}
