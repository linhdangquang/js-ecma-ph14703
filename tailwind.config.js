module.exports = {
  content: ['*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: 'Be Vietnam Pro',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // eslint-disable-next-line global-require
    require('daisyui'),
  ],
};
