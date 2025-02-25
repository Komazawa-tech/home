/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        komatech: {
          purple: '#6B46C1',
          'purple-light': '#9F7AEA',
          'purple-dark': '#553C9A',
        },
      },
    },
  },
  plugins: [],
};