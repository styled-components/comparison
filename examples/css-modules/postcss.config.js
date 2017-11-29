// OK, this should go into webpack.custom.babel.js
// but I'm too tired to fight with it
module.exports = (ctx) => ({
  plugins: [
    require('autoprefixer'),
    require('postcss-modules-values')
  ]
})
