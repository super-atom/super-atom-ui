const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const baseConfig = require('./webpack.common.js');

// common part for production and dev
const { cssLoaders } = require('./util');

module.exports = merge(baseConfig, {
  // This option controls if and
  // how source maps are generated
  devtool: 'eval-source-map',

  // Providing the mode configuration option tells
  // webpack to use its built-in optimizations accordingly
  mode: 'development',

  // https://webpack.js.org/configuration/target/#root
  target: 'web',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      watch: true,
    },
    client: {
      overlay: true,
    },
    open: true,
    port: 3000,
    liveReload: true,
    hot: false,
    host: 'localhost',
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 300,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', ...cssLoaders],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // we create a global variable that
    // we use in pug and we can use in js
    // https://webpack.js.org/plugins/define-plugin/
    // In pug - var DATA = self.htmlWebpackPlugin.options.DATA
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
});
