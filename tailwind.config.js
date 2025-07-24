/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e60000',
        'overlay-dark': 'rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        // degradado oscuro → transparente para superponer sobre el video
        'hero-gradient': 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
      },
      boxShadow: {
        // glow rojo suave para el borde de la foto
        'card-glow': '0 10px 20px rgba(230, 0, 0, 0.4)',
      },
      fontFamily: {
        // ojo: asegúrate de haber cargado Montserrat en tu <head> o vía @import
        title: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
