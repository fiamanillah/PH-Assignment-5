/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        primary : "#B4F461",
        primaryTextColor : "#111111",
        secondaryTextColor : "#111111b3"
      },

      screens: {
        '2xl-d': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl-l': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg-t': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md-p': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm-p': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },

    },
  },
  plugins: [],
}