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
        'home-desktop': "url('./src/public/home/background-home-desktop.jpg')",
        'home-tablet': "url('./src/public/home/background-home-tablet.jpg')",
        'home-mobile': "url('./src/public/home/background-home-mobile.jpg')",
        'destination-desktop':
          "url('./src/public/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('./src/public/destination/background-destination-tablet.jpg')",
        'destination-mobile':
          "url('./src/public/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('./src/public/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('./src/public/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('./src/public/crew/background-crew-mobile.jpg')",
        'technology-desktop':
          "url('./src/public/technology/background-technology-desktop.jpg')",
        'technology-tablet':
          "url('./src/public/technology/background-technology-table')",
        'technology-mobile':
          "url('./src/public/technology/background-technology-mobile')",
      },
    },
  },
  plugins: [],
};
