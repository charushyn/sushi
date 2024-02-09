/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Asia: ['Asia', "sans"],
        NunitoSans: ['Nunito-Sans', "sans"],
        NunitoItalic: ['Nunito-Italic', "italic"]
      },
      screens: {
        "mobile-s": '319px',
        "mobile-m": '359px',
        "mobile-l": '411px',
        "tablet-m": "767px",
        "tablet-l": '1023px',
        "desktop": '1279px',
      },
      backgroundImage: {
        'logo': "url('./images/cloud-sushi-logo.jpeg')",
        'basket': "url('./images/basket.svg')",
        'jack': "url('./images/jack.png')",
        'sushi-vector': "url('./images/sushi-vector.png')",
        'sushi-pos-1': "url('./images/sushi-pos-1.jpeg')",
      },
      module: {
        loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }, {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' }]
      },
    },
  },
  plugins: [],
}
