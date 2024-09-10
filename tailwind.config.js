/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    container: {
      center: true,
      maxWidth: '80rem',
    },
    screens: {
      'md-custom': {'max': '1250px'},
      'md-maxi': {'max': '1027px'},
      'md-less': {'max': '1180px'},
      'md-less-yet': {'max': '1060px'},
      'md-880': {'max': '880px'},
      'md-810': {'max': '810px'},
      'md-768': {'max': '768px'},
      'md-741': {'max': '741px'},
      'md-670': {'max': '670px'},
    },
    extend: {
      backgroundImage: {
        'body-pattern': 'url("/img/uni1.webp")',
        'main-color': 'rgba(100, 94, 93, 0.5)',
      },
      boxShadow: {
        'lightShadow': '9px 10px 0 -3px rgba(255, 255, 255, 0.3)',
        'popshadow': 'box-shadow: 0 0 1rem rgb(0, 0, 0 / 90%)',
      }
    },
    colors: {
      trans: 'transparent',
      basic: '#B1A5A2',
      black: '#252221',
      white: '#ffffff',
      fonta: 'rgb(100, 95, 94)',
      light: 'rgba(70, 64, 62, 0.7)',
      pink: 'rgba(4, 25, 135, 0.7)',
      calm: 'rgba(241, 231, 221, 0.5)',
      dark: 'rgba(25, 16, 6, 0.7)',
      code: 'rgba(249, 160, 66, 1)',
      yellow: 'rgba(253, 239, 147, 0.5)',
      grey: 'rgba(219, 219, 216, 0.2)',
      stray: 'rgba(253, 218, 25, 1)',
  },
  plugins: [],
  }
}

