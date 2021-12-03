const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PATHS = require('../config/paths');

let arrayOfEntryDirectory = [];
const getDirectoriesAllFiles = (directory, arrayOfFiles) => {
  const files = fs.readdirSync(directory);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    let filepath = path.join(directory, '/', file);
    if (fs.statSync(filepath).isDirectory()) {
      arrayOfEntryDirectory.push([filepath, file]);
      arrayOfFiles = getDirectoriesAllFiles(
        directory + '/' + file,
        arrayOfFiles
      );
    } else {
      arrayOfFiles.push(file);
    }
  });
  return arrayOfFiles;
};

getDirectoriesAllFiles(path.join(PATHS.source, '/pages'));

const entryHtmlPlugins = arrayOfEntryDirectory.map((page) => {
  // https://github.com/jantimon/html-webpack-plugin#options
  let obj = {
    filename: `${page[1]}`,
    template: `${path.join(page[0], page[1])}.pug`,
    DATA: require(`${path.join(page[0], page[1])}.json`),
    chunks: [`${path.join(page[1])}`, 'common'],
  };

  let arr = obj.template.split('\\');
  let standard = arr.indexOf('pages');
  let temp = [];
  let result = '';
  if (arr[standard + 3] !== 'undefined') {
    for (let i = standard + 1; i < arr.length - 1; i++) {
      temp.push(arr[i]);
    }
  }
  result = temp.join('/');
  obj.filename = result + '.html';
  return new HtmlWebPackPlugin(obj);
});

module.exports = {
  entry: (() => {
    const entries = {};
    arrayOfEntryDirectory.forEach(
      (page) =>
        (entries[page[1]] = {
          import: `${path.join(page[0], page[1])}.ts`,
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
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024, // 50kb
          },
        },
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
