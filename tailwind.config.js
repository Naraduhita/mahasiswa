module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    colors: {
      'brown1' : '#AF8D5B',
      'brown2' : '#D7B481',
      'brown3' : '#F7E7C1',
      'brown4' : '#cc9fa8',
      'mint' : '#C2EED5',
      'soft-green1' : '#F1F0E2',
      'pinkpurple' : '#EA8D8D',
      'purple1' : '#A890FE',
      'purple2' : '#E8C2CA',
      'purple3' : '#D1B3C4',
      'purple4' : '#B392AC',
      'purple5' : '#735D78',
      'purple6' : '#754B61',
      'purple7' : '#4C3949',
      'gray1' : '#B2ABB3',
    },
  },
  plugins: [require('flowbite/plugin')],
};
