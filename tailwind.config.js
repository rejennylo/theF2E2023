/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { noto: ['Noto Sans TC', 'sans-serif'] },
      colors: {
        'main-purple': '#4527A0',
        'secondary-green': '#26A69A',
        'secondary-yellow': '#FFB300',
        'secondary-red': '#EC407A',
        'light-gray': '#FAFAFA',
        'medium-gray': '#E3E3E3',
      },
    },
  },
  plugins: [],
};
