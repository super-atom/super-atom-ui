const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const baseConfig = require('./webpack.common.js');
const ENV = require('./env');

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
      // !!! 웬만하면 true로 하고 에러를 마주해서 문제를 해결하려고 노력하자
      overlay: false,
    },
    open: true,
    port: ENV.server.port,
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
    new ESLintPlugin({
      extensions: 'ts',
      emitWarning: true,
      files: path.resolve(__dirname, '../src'),
    }),
    // new StylelintPlugin({
    //   files: path.join('src', '**/*.s?(a|c)ss'),
    // }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
});
