const { readdirSync } = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PATHS = require('../config/paths');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

// configure HtmlWebPackPlugin
const PAGES = getDirectories(path.join(PATHS.source, '/pages'));
const entryHtmlPlugins = PAGES.map((page) => {
  return new HtmlWebPackPlugin({
    filename: `${page}.html`,

    // template for individual pages index, about and contact
    template: `./sources/pages/${page}/${page}.pug`,

    // json data drawn into pug templates
    DATA: require(`../sources/pages/${page}/${page}.json`),

    // injecting js and css files into
    chunks: [page],
  });
});

module.exports = {
  entry: (() => {
    const entries = {};
    PAGES.forEach(
      (page) => (entries[page] = PATHS.source + `/pages/${page}/${page}.ts`)
    );
    return entries;
  })(),
  // configuration of output files
  output: {
    path: PATHS.dist,
    filename: 'vendor/js/[name].[fullhash].js',
    // assetModuleFilename: 'images/static/[name].[hash][ext]',
  },
  resolve: {
    extensions: ['.ts', '.js'],
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
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      { test: /\.ts?$/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
