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
        'home-desktop': `url(${require('path').resolve(__dirname, 'src/assets/home/background-home-desktop.jpg')})`,
        'home-tablet': `url(${require('path').resolve(__dirname, 'src/assets/home/background-home-tablet.jpg')})`,
        'home-mobile': `url(${require('path').resolve(__dirname, 'src/assets/home/background-home-mobile.jpg')})`,
        'destination-desktop': `url(${require('path').resolve(__dirname, 'src/assets/destination/background-destination-desktop.jpg')})`,
        'destination-tablet': `url(${require('path').resolve(__dirname, 'src/assets/destination/background-destination-tablet.jpg')})`,
        'destination-mobile': `url(${require('path').resolve(__dirname, 'src/assets/destination/background-destination-mobile.jpg')})`,
        'crew-desktop': `url(${require('path').resolve(__dirname, 'src/assets/crew/background-crew-desktop.jpg')})`,
        'crew-tablet': `url(${require('path').resolve(__dirname, 'src/assets/crew/background-crew-tablet.jpg')})`,
        'crew-mobile': `url(${require('path').resolve(__dirname, 'src/assets/crew/background-crew-mobile.jpg')})`,
        'technology-desktop': `url(${require('path').resolve(__dirname, 'src/assets/technology/background-technology-desktop.jpg')})`,
        'technology-tablet': `url(${require('path').resolve(__dirname, 'src/assets/technology/background-technology-tablet.jpg')})`,
        'technology-mobile': `url(${require('path').resolve(__dirname, 'src/assets/technology/background-technology-mobile.jpg')})`,
      },
    },
  },
  plugins: [],
};
