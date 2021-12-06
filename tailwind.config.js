module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'yellow-999': '#FFCC00',
        'blue-999': '#00285A',
        'gray-888': '#4D555E',
        'gray-999': '#43545C',
      },
      backgroundColor: {
        // Shown in the SocialBar component as bg-gray-fb
        'yellow-999': '#FFCC00',
        'gray-999': '#43545C',
      },
      borderColor: {
        'yellow-999': '#FFCC00',
        'gray-e9': '#e9e9e9',
        'gray-999': '#999',
      },
      fontFamily: {
        // Shown in the SocialBar component as font-open-sans
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
        roboto: '"Roboto", sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
