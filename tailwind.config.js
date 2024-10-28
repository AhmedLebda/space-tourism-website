/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
      },
      fontFamily: {
        'barlow-condensed': '"Barlow Condensed", sans-serif',
        barlow: '"Barlow", sans-serif',
        bellefair: '"Bellefair", serif',
      },
      gridTemplateRows: {
        mainLayout: 'min-content 1fr',
      },
      backgroundImage: {
        'home-desktop': "url('./src/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('./src/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('./src/assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
