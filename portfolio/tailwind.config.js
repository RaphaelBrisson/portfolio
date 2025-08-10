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
      xs: '0.625rem',
      sm: '0.75rem',
      base: '1rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '4rem',
    },
    extend: {
    },
  },
  plugins: [],
}

