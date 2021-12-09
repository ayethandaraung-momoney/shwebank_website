module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        'yellow-999': '#FFCC00',
        'blue-999': '#00285A',
        'gray-888': '#4D555E',
        'gray-999': '#43545C',
      },
      backgroundColor: {
        'white-999': '#F4F7FA',
        'yellow-999': '#FFCC00',
        'gray-999': '#43545C',
        'white-888': '#FFFFFF',
      },
      borderColor: {
        'yellow-999': '#FFCC00',
        'blue-999': '#00285A',
        'gray-888': '#4D555E',
        'gray-999': '#43545C',
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
