/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d6efd',
        secondary: '#1fb6ff',
        dark: {
          900: '#010913',
          800: '#06152a',
          700: '#0a1f3d',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}