module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'heading': ['\'Montserrat\', sans-serif'],
        'paragraph': ['\'Heebo\', sans-serif'],
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'primary': '#eceff6',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      colors: {
        'bg-accent1': '#333',
        'gray-accent': '#383c43',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
};
