const { readdirSync } = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PATHS = require('../config/paths');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({ page: dirent.name, common: 'common' }));

// configure HtmlWebPackPlugin
const PAGES = getDirectories(path.join(PATHS.source, '/pages'));

const entryHtmlPlugins = PAGES.map((config) => {
  return new HtmlWebPackPlugin({
    filename: `${config.page}.html`,

    // template for individual pages index, about and contact
    template: `./sources/pages/${config.page}/${config.page}.pug`,

    // json data drawn into pug templates
    DATA: require(`../sources/pages/${config.page}/${config.page}.json`),

    // injecting js and css files into
    chunks: [config.page, config.common],
  });
});

module.exports = {
  entry: (() => {
    const entries = {};
    PAGES.forEach(
      (config) =>
        (entries[config.page] = {
          import: PATHS.source + `/pages/${config.page}/${config.page}.ts`,
          dependOn: 'common',
        })
    );
    entries['common'] = PATHS.source + `/scripts/ts/common.ts`;
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
