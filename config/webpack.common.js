const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const PATHS = require('../config/paths');
const PAGES = ['index', 'about', 'work', 'contact', 'sample'];

// configure HtmlWebPackPlugin
const entryHtmlPlugins = PAGES.map((page) => {
  return new HtmlWebPackPlugin({
    filename: `${page}.html`,

    // template for individual pages index, about and contact
    template: `./sources/pages/${page}/${page}.pug`,

    // json data drawn into pug templates
    DATA: require(`../sources/pages/${page}/${page}.json`),

    // injecting js and css files into
    // html as well as common share.js file
    chunks: ['common', page],
  });
});

module.exports = {
  entry: (() => {
    const entries = {};
    PAGES.forEach(
      (page) => (entries[page] = PATHS.source + `/pages/${page}/${page}.js`)
    );
    return entries;
  })(),
  // configuration of output files
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vendor/js/[name].[fullhash].js',
    // assetModuleFilename: 'images/static/[name].[hash][ext]',
  },
  module: {
    rules: [
      // Images, fonts, e.t.c: Copy files to build folder
      // https://webpack.js.org/guides/asset-modules/#resource-assets
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          // adding a hash to the file
          filename: '[name].[hash][ext]',
        },
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },

      // OR -------------------------

      // creates an inline svg
      // {
      //   test: /\.svg/,
      //   type: 'asset/inline',
      // },

      // OR -------------------------

      // {
      //   test: /\.svg/,
      //   type: "asset",
      //   generator: {
      //     // adding a hash to the file
      //     // and copy to specific folder
      //     filename: 'images/static/[name].[hash][ext]',
      //   },

      //   // depending on the size of the file,
      //   // if the file is too small, the file is inline,
      //   // if the larger niche size, the file is only copied
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 30 * 1024, // 30 * 1024
      //     }
      //   },
      // },

      // ----------------------------

      // Other uses, fonts
      // the above solution works not only on
      // graphic files but also on fonts etc.

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
          self: true,
        },
      },
    ],
  },
  plugins: [
    ...entryHtmlPlugins,
    new ESLintPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
