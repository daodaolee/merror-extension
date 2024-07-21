/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./devtools.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': {'max': '400px'},
      // 'md':'350px'
    },
  },

  plugins: [],
}

