/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    screens: {
      'sm': '428px',
      // => @media (min-width: 428px) { ... } it was 640px

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {    
      fontFamily:{
      'poppins':['Poppins','sans-serif'],
      'notoserif':['Noto Serif','serif'],
      'roboto':['Roboto','sans-serif'],
      'montserrat':['Montserrat','sans-serif'],
      },
    backgroundImage: {
      'home-img': "url('/images/home-bg.png')",
    },
  },
  },
  plugins: [],
}