/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#222',
      white: '#fff',
      accent: '#c24f1aff',
    },
    fontSize: {
      sm: '0.625rem',
      base: '1rem',
      xl: '1rem',
      '2xl': '2rem',
      '3xl': '4rem',
      '4xl': '8rem',
    },
    extend: {
    },
  },
  plugins: [],
}

