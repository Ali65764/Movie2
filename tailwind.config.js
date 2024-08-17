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
        'gegared': '#BA234C',
        'gegablue':'#0285C7',
        'lightpink':'#FFCCCC',
        'lightblue': '#BFDCFF',
        'gegagrey':'#DEDEDE',
        'lightpink':'#FFE3E3',
        'lightwhite':'#DFF1F7',
        'lightgreen':'#86F086',
        'lightsky':'#A2E6FC',
        'megalightsky':'#E0F3FF',
        'gegablack':'#1F2A38'
      },
      fontFamily:{
        'poppin':['Poppins','sans-serif'],
        'proximanova': ['"Proxima Nova"', 'sans-serif'],
        
      },
      backgroundImage:{
        'bgimage':"url(src/assets/batman.jpg)",
      }
    },
  },
  plugins: [],
}

