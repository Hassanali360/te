/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Aleo", 'serif'],
        'sansg' : [ "Open Sans", 'sans-serif']
      },
      colors: {
        'custom-yellow': '#BF971D',
        'custom-orange': '#BF811D',
      },
    },
  },
  plugins: [],
}
