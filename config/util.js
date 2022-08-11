const path = require('path');

module.exports.cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 3,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: path.resolve(__dirname, '../postcss.config.js'),
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  },
  // {
  //   loader: 'resolve-url-loader',
  // },
];
