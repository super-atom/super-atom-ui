const postcssPresetEnv = require('postcss-preset-env');
const postcssSimpleVars = require('postcss-simple-vars');
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
      'postcss-browser-reporter',
      'lost',
      'cssnano',
      'postcss-mixins',
      'postcss-url',
      'postcss-short',
      'postcss-import',
      'postcss-reporter',
      'postcss-extend-rule',
      'postcss-advanced-variables',
      postcssPresetEnv({
        insertBefore: {
          'all-property': postcssSimpleVars,
        },
      }),
      'postcss-atroot',
      'postcss-property-lookup',
      'postcss-nested',
      'autoprefixer',
    ],
  };
};
