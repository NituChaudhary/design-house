/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        charcoal: '#1e1e1e',
        gold: '#c9a14a',
      },
    },
  },
  plugins: [],
}
