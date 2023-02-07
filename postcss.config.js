const path = require('path');
const postcssUrl = require('postcss-url');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');
const postcssSortMediaQueries = require('postcss-sort-media-queries');

module.exports = (api) => {
  // `api.file` - path to the file
  // `api.mode` - `mode` value of webpack, please read https://webpack.js.org/configuration/mode/
  // `api.webpackLoaderContext` - loader context for complex use cases
  // `api.env` - alias `api.mode` for compatibility with `postcss-cli`
  // `api.options` - the `postcssOptions` options

  return {
    // You can specify any options from https://postcss.org/api/#processoptions here
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    // !!! 순서가 중요하다.
    plugins: [
      'postcss-import',
      'postcss-mixins',
      'postcss-nested',
      'postcss-reporter',
      'postcss-extend-rule',
      'postcss-flexbugs-fixes',
      postcssUrl(),
      postcssPresetEnv({
        stage: 0,
        insertBefore: {
          'all-property': postcssSimpleVars,
        },
      }),
      postcssCascadeLayers({ onImportLayerRule: 'warn' }),
      postcssSortMediaQueries(),
      'postcss-advanced-variables',
      'lost',
      'autoprefixer',
      'cssnano',
      // api.env === 'production' ? require('cssnano')({ preset: 'default' })(): false,
    ],
  };
};
